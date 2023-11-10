import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { ProposalCreated, Voted } from "../generated/DAO/DAO"

export function createProposalCreatedEvent(
  proposalId: BigInt,
  title: string,
  description: string,
  proposalDeadline: BigInt,
  minimumVotes: BigInt,
  votesForOptionA: BigInt,
  votesForOptionB: BigInt,
  closed: boolean,
  executed: boolean
): ProposalCreated {
  let proposalCreatedEvent = changetype<ProposalCreated>(newMockEvent())

  proposalCreatedEvent.parameters = new Array()

  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalDeadline",
      ethereum.Value.fromUnsignedBigInt(proposalDeadline)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "minimumVotes",
      ethereum.Value.fromUnsignedBigInt(minimumVotes)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "votesForOptionA",
      ethereum.Value.fromUnsignedBigInt(votesForOptionA)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "votesForOptionB",
      ethereum.Value.fromUnsignedBigInt(votesForOptionB)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("closed", ethereum.Value.fromBoolean(closed))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("executed", ethereum.Value.fromBoolean(executed))
  )

  return proposalCreatedEvent
}

export function createVotedEvent(
  proposalId: BigInt,
  voter: Address,
  vote: BigInt
): Voted {
  let votedEvent = changetype<Voted>(newMockEvent())

  votedEvent.parameters = new Array()

  votedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  votedEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  votedEvent.parameters.push(
    new ethereum.EventParam("vote", ethereum.Value.fromUnsignedBigInt(vote))
  )

  return votedEvent
}
