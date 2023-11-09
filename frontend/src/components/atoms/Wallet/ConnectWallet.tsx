import { useEthers } from '@usedapp/core';
import styled from 'styled-components';
import { shortenAddress } from '../../../shared/utils';


const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const WalletInfo = styled.h2`
  margin: 0;
  margin-right: 10px;
  color: #fff;
`;

const ConnectButton = styled.button`
  background-color: #283593;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #001c42;
  }
`;

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const ConnectWallet: React.FC = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const isMetaMaskInstalled = typeof window.ethereum !== 'undefined';

  return (
    <Container>
    {isMetaMaskInstalled && (
      <WalletInfo>
        {!account ? "Connect wallet" : `Connected Wallet: ${shortenAddress(account)}`}
      </WalletInfo>
    )}
    {isMetaMaskInstalled && !account ? (
      <ConnectButton onClick={() => activateBrowserWallet()}>
        Connect
      </ConnectButton>
    ) : (
      isMetaMaskInstalled && (
        <ConnectButton onClick={() => deactivate()}>
          Disconnect
        </ConnectButton>
      )
    )}
  </Container>
  );
};

