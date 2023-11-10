import {
  ProposalCreated as ProposalCreatedEvent,
  Voted as VotedEvent
} from "../generated/DAO/DAO"
import { ProposalCreated, Voted } from "../generated/schema"

export function handleProposalCreated(event: ProposalCreatedEvent): void {
  let entity = new ProposalCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.title = event.params.title
  entity.description = event.params.description
  entity.proposalDeadline = event.params.proposalDeadline
  entity.minimumVotes = event.params.minimumVotes
  entity.votesForOptionA = event.params.votesForOptionA
  entity.votesForOptionB = event.params.votesForOptionB
  entity.closed = event.params.closed
  entity.executed = event.params.executed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoted(event: VotedEvent): void {
  let entity = new Voted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.voter = event.params.voter
  entity.vote = event.params.vote

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
