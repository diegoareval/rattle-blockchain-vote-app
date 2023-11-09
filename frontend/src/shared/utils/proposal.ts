import { Proposal, Voted } from '../../types'

export type ProposalWithVotes = Proposal & {
  votes: Voted[]
}

export function insertVotesIntoProposals(
  proposals: Proposal[],
  votes: Voted[],
): ProposalWithVotes[] {
  const votesMap: Record<string, Voted[]> = {}

  votes.forEach((vote) => {
    const { proposalId } = vote
    if (!votesMap[proposalId]) {
      votesMap[proposalId] = []
    }
    votesMap[proposalId].push(vote)
  })

  const proposalsWithVotes: ProposalWithVotes[] = proposals.map((proposal) => ({
    ...proposal,
    votes: votesMap[proposal.proposalId] || [],
  }))

  return proposalsWithVotes
}
