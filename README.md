# Instructions
- [Frontend demo](https://cards-7be5f.web.app)
- [Subgraph Demo](https://api.thegraph.com/subgraphs/name/diegoareval/ratter-lab-subgrap)
- [Smart Contract Explore](https://mumbai.polygonscan.com/address/0x13652B5Db768ECA721485c68dF275CE09a658483)
Contract Adress: 0x13652B5Db768ECA721485c68dF275CE09a658483

### Subgraph - [doc](https://thegraph.com/docs/)

init subgraph: 
```
graph init diegoareval/ratter-lab-subgrap
```

deploy Subgraph
```
graph deploy --product hosted-service diegoareval/ratter-lab-subgrap
```

Subgraph Query
```
{
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
```

### Frontend
1. install dependencies
```
yarn install || pnpm install
```
2. execute locally
```
pnpm run dev
```

### Contract
1. read the contract readme

### Documentation or Reference
- [Subgraph](https://thegraph.com/docs/)
- [Vitejs](https://vitejs.dev/)
- [PNPM](https://pnpm.io/es/)
- [Soldity](https://soliditylang.org/)
- [Hardhat](https://hardhat.org/)
- [Nodejs](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [Add Polygon Network to metamask](https://wiki.polygon.technology/docs/tools/wallets/metamask/config-polygon-on-metamask/)
- [Polygon Network](https://wiki.polygon.technology/docs/pos/)
