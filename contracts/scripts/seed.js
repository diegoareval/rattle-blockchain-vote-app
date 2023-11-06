const ethers = require('ethers');
const fs = require("fs");
const privateKey = fs.readFileSync('.secret').toString();
const daoContractABI = require("../artifacts/contracts/DAO.sol/DAO.json").abi;
const projectId = fs.readFileSync('.infura_project_id').toString();
const contractAddress = fs.readFileSync('.contract_address').toString();
async function main() {
  const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${projectId}`);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, daoContractABI, wallet);

  // Create a proposal
  const proposalTitle = 'RatherLab';
  const proposalDescription = 'This is an important blockachain company.';
  const proposalDeadline = Math.floor(Date.now() / 1000) + 86400; // Proposal closes in 24 hours
  const minimumVotes = 10;

  const createProposalTx = await contract.createProposal(
    proposalTitle,
    proposalDescription,
    proposalDeadline,
    minimumVotes
  );
  await createProposalTx.wait();

  console.log('Proposal created. Transaction hash:', createProposalTx.hash);

  // Cast votes
  const proposalId = 0; // Replace with the correct proposal ID
  const voteOption = 1; // Replace with 1 for option A or 2 for option B

  const voteTx = await contract.vote(proposalId, voteOption);
  await voteTx.wait();

  console.log('Vote cast. Transaction hash:', voteTx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
