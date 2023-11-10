init: graph init diegoareval/ratter-lab-subgrap
Make sure to visit the documentation on https://thegraph.com/docs/ for further information.

deploy: https://api.thegraph.com/subgraphs/name/diegoareval/ratter-lab-subgrap

Query: {
  proposalCreateds(first: 5) {
    id
    proposalId
    title
    description
    proposalDeadline
    minimumVotes
    votesForOptionA
    votesForOptionB
    closed
    executed
    
  }
  voteds(first: 5) {
    id
    proposalId
    voter
    vote
  }
}

graph deploy --product hosted-service diegoareval/ratter-lab-subgrap