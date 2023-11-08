export const aaveToken = import.meta.env.VITE_DAO_TOKEN
import { Mumbai, Config } from '@usedapp/core';

export const ETH_MUMBAI_NETWORK_ID = Mumbai.chainId;

const infuraProjectId = import.meta.env.VITE_INFURA_PROJECT_ID

console.log(`https://polygon-mumbai.infura.io/v3/${infuraProjectId}`)
export const configWeb3: Config = {
  readOnlyChainId: ETH_MUMBAI_NETWORK_ID,
  autoConnect: true,
  readOnlyUrls: {
    [Mumbai.chainId]: infuraProjectId? `https://polygon-mumbai.infura.io/v3/${infuraProjectId}`: '',
  }
};