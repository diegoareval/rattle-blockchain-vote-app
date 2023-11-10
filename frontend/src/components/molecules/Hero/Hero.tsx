import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #c5c5e9;
  padding: 60px 45px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 600px;
  h1 {
    font-size: 3rem;
  }
  p {
    line-height: 1.6;
  }
  a {
    color: #fff;
    text-decoration: none;
    background-color: black;
    padding: 12px 20px;
    border-radius: 8px;
    display: inline-block;
  }
`;

export  const Hero: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <h1>RatterLabs</h1>
        <p>
        We build stellar products with top-tier technology experts for innovative businesses worldwide.
        </p>
        <a href="#"> Learn more...</a>
      </Wrapper>
    </Container>
  );
}
