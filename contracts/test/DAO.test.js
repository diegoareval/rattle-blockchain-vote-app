const { expect } = require("chai");

describe("DAO Contract", function () {
  let DAO;
  let dao;
  let owner;
  let user;

  const proposalTitle = "Test Proposal";
  const proposalDescription = "This is a test proposal.";
  const proposalDeadline = Math.floor(Date.now() / 1000) + 60; // 60 seconds from now
  const minimumVotes = 1;

  before(async () => {
    DAO = await ethers.getContractFactory("DAO");
    [owner, user] = await ethers.getSigners();
  });

  beforeEach(async () => {
    dao = await DAO.deploy(user.address); // Deploy the DAO contract with user as the admin
  });

  it("Should create a new proposal", async () => {
    await dao.createProposal(proposalTitle, proposalDescription, proposalDeadline, minimumVotes);
    const proposal = await dao.proposals(0);
    expect(proposal.title).to.equal(proposalTitle);
  });

  it("Should allow a user to vote on a proposal", async () => {
    await dao.createProposal(proposalTitle, proposalDescription, proposalDeadline, minimumVotes);
    await dao.connect(user).vote(0, 1); // User votes for Option A (1)
    const updatedProposal = await dao.proposals(0);
    expect(updatedProposal.votesForOptionA).to.equal(1);
  });
});
