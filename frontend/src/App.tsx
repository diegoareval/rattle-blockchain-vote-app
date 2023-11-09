import { useQuery } from '@apollo/client'
import { ErrorMessage, Loading } from './components/atoms/Messages'
import './global/styles/App.css'
import { GET_PROPOSALS_AND_VOTES } from './graphql/queries/dao'
import HomePage from './pages/HomeTemplate'
import { insertVotesIntoProposals } from './shared/utils'
import { GraphQLVoteResponse } from './types/vote.type'

function App() {
  const { loading, error, data } = useQuery(GET_PROPOSALS_AND_VOTES)

  if (loading) return <Loading message="..." />
  if (error) return <ErrorMessage message={error.message} />

  const { proposalCreateds, voteds } = data as GraphQLVoteResponse
  const proposals = insertVotesIntoProposals(proposalCreateds, voteds)
  console.log('proposals', proposals)
  return <HomePage />
}

export default App
