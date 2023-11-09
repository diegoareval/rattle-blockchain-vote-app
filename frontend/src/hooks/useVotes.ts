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
      const signer = provider?.getSigner()
      const contract = new Contract(
        VOTES_CONTRACT_ADDRESS,
        VOTES_CONTRACT_ABI.abi,
        signer as any,
      )
      setVotesContract(contract)
      checkAdminStatus(signer)
    }
  }, [provider])

  const checkAdminStatus = async (signer: any) => {
    if (signer) {
      const adminStatus = await votesContract?.isAdmin(signer.getAddress())
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

      const result = await votesContract?.createProposal(
        title,
        description,
        proposalDeadline,
        minimumVotes,
        optionA,
        optionB,
      )
      return result
    } catch (error) {
      console.error('Error creating proposal:', error)
      return null
    }
  }

  const createVote = async (proposalId: string, voteOption: number) => {
    try {
      const result = await votesContract?.createVote(proposalId, voteOption)
      return result
    } catch (error) {
      console.error('Error creating vote:', error)
      return null
    }
  }

  return { createVote, createProposal, votesContract, account, isAdmin }
}
