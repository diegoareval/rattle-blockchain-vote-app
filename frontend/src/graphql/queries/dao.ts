import { gql } from '@apollo/client';

export const GET_PROPOSALS_AND_VOTES = gql`
  {
  proposalCreateds(first: 5) {
    id
    proposalId
    title
    description
    proposalDeadline
    minimumVotes
    votesForOptionA
    votesForOptionB
    closed
    executed
    
  }
  voteds(first: 5) {
    id
    proposalId
    voter
    vote
  }
}
`;
