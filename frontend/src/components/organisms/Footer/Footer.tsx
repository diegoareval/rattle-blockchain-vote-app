import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px 0;
  color: #999;
  font-size: 0.9rem;
`;

export const Footer: React.FC = ()=> {
  return (
    <Container>
      <p>@2021 Ratterlab company</p>
    </Container>
  );
}
