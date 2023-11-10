import * as React from 'react'
import styled from 'styled-components'
import { useVotesContract } from '../../../hooks/useVotes'
import { ProposalWithVotes } from '../../../shared/utils'
import { formatTimestamp, isProposalClosed } from '../../../shared/utils/date'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  background-color: #fff;
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`

const VoteOptions = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`

const VoteButton = styled.button`
  background-color: black;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #001c42;
  }
`

const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
`

const TotalVotes = styled.span`
  margin-top: 10px;
  font-weight: bold;
`;

interface ProposalListProps {
  proposals: ProposalWithVotes[]
  refetch: ()=> void
}

export const ProposalList: React.FC<ProposalListProps> = ({ proposals, refetch }) => {
  const {account, createVote} = useVotesContract()
  console.log("account", account)
  const onVote = (id: string, option: string) => {
    console.log('id', id)
    console.log('option', option)
    refetch();
  }
  return (
    <List>
      {proposals.map((proposal) => (
        <ListItem key={proposal.id}>
          <h3>{proposal.title}</h3>
          <p>{proposal.description || 'test description'}</p>
          <div>
            {isProposalClosed(proposal) && (
              <StatusBadge style={{ backgroundColor: 'red' }}>Closed: {formatTimestamp(parseInt(proposal.proposalDeadline))} </StatusBadge>
            )}
          </div>
          {
            !isProposalClosed(proposal) && (<VoteOptions>
              <VoteButton onClick={() => onVote(proposal.id, '1')}>
                Vote for A
              </VoteButton>
              <VoteButton onClick={() => onVote(proposal.id, '2')}>
                Vote for B
              </VoteButton>
            </VoteOptions>)
          }
          <TotalVotes>Total Votes: {proposal.votes.length || 0}</TotalVotes>
        </ListItem>
      ))}
    </List>
  )
}
