import * as React from 'react';
import styled from 'styled-components';
import { ProposalWithVotes } from '../../../shared/utils';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #fff;
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const VoteOptions = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

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
`;


interface ProposalListProps {
    proposals: ProposalWithVotes[];
}

export const ProposalList: React.FC<ProposalListProps> = ({ proposals }) => {
    console.log('proposals', proposals)
    const onVote = (id: string, option: string) => {
        console.log("id", id)
        console.log("option", option)
    }
    return (
        <List>
            {proposals.map((proposal) => (
                <ListItem key={proposal.id}>
                    <h3>{proposal.title}</h3>
                    <p>{proposal.description || "test description"}</p>
                    <VoteOptions>
                        <VoteButton onClick={() => onVote(proposal.id, 'A')}>Vote for A</VoteButton>
                        <VoteButton onClick={() => onVote(proposal.id, 'B')}>Vote for B</VoteButton>
                    </VoteOptions>

                </ListItem>
            ))}
        </List>
    );
};
