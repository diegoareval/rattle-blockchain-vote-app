import styled from 'styled-components'

const LoadingContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`

interface LoadingMessageProps {
  message: string
}
export const Loading: React.FC<LoadingMessageProps> = ({
  message,
}: LoadingMessageProps) => {
  return <LoadingContainer>{message}</LoadingContainer>
}
