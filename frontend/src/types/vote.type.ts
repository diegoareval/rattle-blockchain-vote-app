import { Proposal } from './proposal.type'

export type Voted = {
  id: string
  proposalId: string
  voter: string
  vote: string
}

export type GraphQLVoteResponse = {
    proposalCreateds: Proposal[]
    voteds: Voted[]
}
