import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ProposalCreated } from "../generated/schema"
import { ProposalCreated as ProposalCreatedEvent } from "../generated/DAO/DAO"
import { handleProposalCreated } from "../src/dao"
import { createProposalCreatedEvent } from "./dao-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let proposalId = BigInt.fromI32(234)
    let title = "Example string value"
    let description = "Example string value"
    let proposalDeadline = BigInt.fromI32(234)
    let minimumVotes = BigInt.fromI32(234)
    let votesForOptionA = BigInt.fromI32(234)
    let votesForOptionB = BigInt.fromI32(234)
    let closed = "boolean Not implemented"
    let executed = "boolean Not implemented"
    let newProposalCreatedEvent = createProposalCreatedEvent(
      proposalId,
      title,
      description,
      proposalDeadline,
      minimumVotes,
      votesForOptionA,
      votesForOptionB,
      closed,
      executed
    )
    handleProposalCreated(newProposalCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProposalCreated created and stored", () => {
    assert.entityCount("ProposalCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProposalCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposalId",
      "234"
    )
    assert.fieldEquals(
      "ProposalCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "ProposalCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "ProposalCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposalDeadline",
      "234"
    )
    assert.fieldEquals(
      "ProposalCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "minimumVotes",
      "234"
    )
    assert.fieldEquals(
      "ProposalCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "votesForOptionA",
      "234"
    )
    assert.fieldEquals(
      "ProposalCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "votesForOptionB",
      "234"
    )
    assert.fieldEquals(
      "ProposalCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "closed",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "ProposalCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "executed",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
