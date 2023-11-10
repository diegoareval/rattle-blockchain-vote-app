import { useQuery } from '@apollo/client'
import * as React from 'react'
import { ErrorMessage, Loading } from '../components/atoms/Messages'
import HomeTemplate from '../components/templates/HomeTemplate'
import { GET_PROPOSALS_AND_VOTES } from '../graphql/queries/dao'
import { insertVotesIntoProposals } from '../shared/utils'
import { GraphQLVoteResponse } from '../types'


const HomePage: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(GET_PROPOSALS_AND_VOTES)

  if (loading) return <Loading message="Loading..." />
  if (error) return <ErrorMessage message={error.message} />

  const { proposalCreateds, voteds } = data as GraphQLVoteResponse
  const proposals = insertVotesIntoProposals(proposalCreateds, voteds)

  return (
    <HomeTemplate refetch={refetch} proposals={proposals} />
  )
}

export default HomePage
