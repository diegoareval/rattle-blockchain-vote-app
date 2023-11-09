import styled from 'styled-components'

const Error = styled.p`
  color: red;
`

interface ErrorMessageProps {
  message: string
}
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
}: ErrorMessageProps) => {
  return <Error>{message}</Error>
}
