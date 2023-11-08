import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
`;

const NavigationStyle = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: #fff;
    text-decoration: none;
    display: block; 
    transition: all 0.3s ease-out;
  }
  a:hover {
    color: #c5cae9;
    transform: rotate(6deg);
  }
`;

const NavigationList = () => {
  return (
    <NavigationStyle>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Products</a>
    </NavigationStyle>
  );
};

export const Navigation: React.FC = () => {
  return (
    <Container>
      <NavigationList />
    </Container>
  );
};

