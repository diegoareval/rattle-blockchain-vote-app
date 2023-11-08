import * as React from "react";
import styled from "styled-components";
import { ConnectWallet } from "../../atoms/Wallet";
import {Navigation} from "./Navigation";

const Container = styled.div`
  background-color: black;
  padding: 20px 20px;
`;

const HeaderItemsContainer = styled.header`
  background-color: black;
  color: #fff;
  max-width: 1200px;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px auto 0;
  margin: auto; 
  flex-wrap: wrap; 
`;


const LogoImage = styled.img`
  max-height: 50px;
  margin-right: 10px;
`;

export const Header: React.FC = () => {
  return (
    <Container className="container">
      <HeaderItemsContainer className="header-items-container">
      <LogoImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be74b3f4-088f-4981-a2fa-c8b64335dc92/degfxve-14d7b171-ec8e-4d4d-b89e-e05739b0b859.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JlNzRiM2Y0LTA4OGYtNDk4MS1hMmZhLWM4YjY0MzM1ZGM5MlwvZGVnZnh2ZS0xNGQ3YjE3MS1lYzhlLTRkNGQtYjg5ZS1lMDU3MzliMGI4NTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KHsbQnTzMWivorgAL8wS6d3ooJ2lTUnclbe4dW2r3FE" alt="Logo" />
      <ConnectWallet/>
      </HeaderItemsContainer>
    </Container>
  );
};