import { gql } from '@apollo/client';

export const GET_PROPOSALS_AND_VOTES = gql`
  {
    proposalCreateds(first: 5) {
      id
      proposalId
      title
      blockNumber
    }
    voteds(first: 5) {
      id
      proposalId
      voter
      vote
    }
  }
`;
