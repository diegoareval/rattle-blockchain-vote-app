import { useEthers } from '@usedapp/core';
import styled from 'styled-components';

const shortenAddress = (addr: string) => `${addr.slice(0, 5)}...${addr.slice(-4)}`;

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

export const ConnectWallet: React.FC = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();

  return (
    <Container>
      <WalletInfo>
        {!account ? "connect wallet" : `Connected Wallet: ${shortenAddress(account)}`}
      </WalletInfo>
      {!account ? (
        <ConnectButton onClick={() => activateBrowserWallet()}>
          Connect
        </ConnectButton>
      ) : (
        <ConnectButton onClick={() => deactivate()}>
          Disconnect
        </ConnectButton>
      )}
    </Container>
  );
};

