init: graph init diego-arevalo/DAO-graph-02
Make sure to visit the documentation on https://thegraph.com/docs/ for further information.

deploy: https://api.thegraph.com/subgraphs/name/diegoareval/dao-graph-02

Query: {
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