import * as React from 'react'
import styled from 'styled-components'
import HomeTemplate from '../components/templates/HomeTemplate'

const H1 = styled.h1`
  font-size: 3rem;
`

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40vh;
`

const HomePage: React.FC = () => {
  return (
    <HomeTemplate>
       <CenteredContainer>
        <div>
          <H1>Welcome to DAO App</H1>
        </div>
      </CenteredContainer>
    </HomeTemplate>
  )
}

export default HomePage
