import { useEthers } from '@usedapp/core'
import { Contract } from 'ethers'
import { useEffect, useState } from 'react'
import { VOTES_CONTRACT_ADDRESS, VOTES_CONTRACT_ABI } from '../config'

export function useVotesContract() {
  const { library: provider, account } = useEthers()
  const [votesContract, setVotesContract] = useState<Contract | null>(null)
  const [isAdmin, setIsAdmin] = useState<Boolean>(false)

  useEffect(() => {
    if (provider) {
      initData()
    }
  }, [provider])

  const initData = async () => {
    const signer = provider?.getSigner()
    const address = await signer?.getAddress()

    const contract = new Contract(
      VOTES_CONTRACT_ADDRESS,
      VOTES_CONTRACT_ABI.abi,
      signer as any,
    )
    setVotesContract(contract)
    if (address) checkAdminStatus(address)
  }

  const checkAdminStatus = async (address: string): Promise<void> => {
    if (address) {
      const adminStatus = await votesContract?.isAdmin(address)
      setIsAdmin(adminStatus)
    }
  }

  const createProposal = async (
    title: string,
    description: string,
    proposalDeadline: number,
    minimumVotes: number,
    optionA: string,
    optionB: string,
  ) => {
    try {
      if (!isAdmin) {
        throw new Error('Only admin can create proposals')
      }
      return votesContract?.createProposal(
        title,
        description,
        proposalDeadline,
        minimumVotes,
        optionA,
        optionB,
      )
    } catch (error) {
      console.error('Error creating proposal:', error)
      return null
    }
  }

  const createVote = async (proposalId: string, voteOption: number) => {
    try {
      return votesContract?.createVote(proposalId, voteOption)
    } catch (error) {
      console.error('Error creating vote:', error)
      return null
    }
  }

  return { createVote, createProposal, votesContract, account, isAdmin }
}
