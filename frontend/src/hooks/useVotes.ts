import { useEthers } from '@usedapp/core'
import { Contract } from 'ethers'
import { useEffect, useState } from 'react'
import { VOTES_CONTRACT_ADDRESS, VOTES_CONTRACT_ABI } from '../config'

export function useVotesContract() {
  const { library: provider, account } = useEthers()
  const [votesContract, setVotesContract] = useState<Contract | null>(null)

  useEffect(() => {
    if (provider) {
      initData()
    }
  }, [provider])

  const initData = async () => {
    const signer = provider?.getSigner()

    const contract = new Contract(
      VOTES_CONTRACT_ADDRESS,
      VOTES_CONTRACT_ABI.abi,
      signer as any,
    )
    setVotesContract(contract)
  }


  const createVote = async (proposalId: string, voteOption: number) => {
      return votesContract?.vote(proposalId, voteOption)
  }

  return { createVote, votesContract, account }
}
