import { useEthers } from '@usedapp/core'
import { Contract } from 'ethers'
import { VOTES_CONTRACT_ADDRESS, VOTES_CONTRACT_ABI } from '../config'
import { useWorkingIndicator } from './useBooleanToggler'

const defaultPoolData = {
  id: '',
  symbol: '',
  name: '',
  decimals: 0,
  underlyingAsset: '',
  totalLiquidity: '',
  liquidityRate: '0.0',
}
export const useVoteV1 = () => {
  const { isWorking, startWork, finishWork } = useWorkingIndicator()
  const { account, library: provider } = useEthers()

  const getContract = () => {
    const signer = provider?.getSigner()
    const contract = new Contract(
      VOTES_CONTRACT_ADDRESS,
      VOTES_CONTRACT_ABI.abi,
      signer as any,
    )
    return contract
  }

  const createVote = async (proposalId: string, option: number) => {
    startWork()
    const contract = getContract()
    try {
      const transaction = await contract.createVote(proposalId, option, {
        gasLimit: 300000, // gas limit
      })
      console.log(transaction)
      finishWork()
    } catch (e) {
      console.log(e)
      finishWork()
    }
  }

  return {
    isWorking,
    account,
    createVote,
  }
}
