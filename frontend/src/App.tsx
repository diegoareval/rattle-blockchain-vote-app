import { useQuery } from '@apollo/client';
import './App.css'
import { GET_PROPOSALS_AND_VOTES } from './graphql/queries/dao';

function App() {
  const { loading, error, data } = useQuery(GET_PROPOSALS_AND_VOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { proposalCreateds, voteds } = data;
  console.log("proposalCreateds", proposalCreateds)
  console.log("voteds", voteds)

  return <div>hola</div>
}

export default App
