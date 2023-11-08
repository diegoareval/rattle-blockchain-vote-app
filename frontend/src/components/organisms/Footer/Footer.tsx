import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px 0;
  color: #999;
  font-size: 0.9rem;
`;

export const Footer: React.FC = ()=> {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <p>@{currentYear} Ratterlab company</p>
    </Container>
  );
}
