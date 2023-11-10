import { ProposalWithVotes } from '.'

export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString()
}

export const isProposalClosed = (proposal: ProposalWithVotes) => {
  const currentTimestamp = Math.floor(Date.now() / 1000)
  return parseInt(proposal.proposalDeadline) < currentTimestamp
}
