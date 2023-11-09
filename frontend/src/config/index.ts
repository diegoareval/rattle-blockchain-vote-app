import * as daoAbi from '../config/abi/DAO.json'
import { Mumbai, Config } from '@usedapp/core'

export const VOTES_CONTRACT_ADDRESS = import.meta.env.VITE_DAO_TOKEN
export const VOTES_CONTRACT_ABI = daoAbi

export const ETH_MUMBAI_NETWORK_ID = Mumbai.chainId

const infuraProjectId = import.meta.env.VITE_INFURA_PROJECT_ID

export const configWeb3: Config = {
  readOnlyChainId: ETH_MUMBAI_NETWORK_ID,
  autoConnect: true,
  readOnlyUrls: {
    [Mumbai.chainId]: infuraProjectId
      ? `https://polygon-mumbai.infura.io/v3/${infuraProjectId}`
      : '',
  },
}
