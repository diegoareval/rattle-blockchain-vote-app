// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DAO {
    IERC20 public token;

    struct Proposal {
        uint256 id;
        string title;
        string description;
        uint256 proposalDeadline;
        uint256 minimumVotes;
        uint256 votesForOptionA;
        uint256 votesForOptionB;
        bool closed;
        bool executed;
    }

    Proposal[] public proposals;
    address public admin;

    // Events for proposal creation and voting
    event ProposalCreated(uint256 indexed proposalId, string title);
    event Voted(uint256 indexed proposalId, address voter, uint256 vote);

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
        admin = msg.sender;
    }

    function createProposal(
        string memory _title,
        string memory _description,
        uint256 _proposalDeadline,
        uint256 _minimumVotes
    ) public {
        require(msg.sender == admin, "Only the admin can create proposals");
        uint256 proposalId = proposals.length;
        proposals.push(
            Proposal({
                id: proposalId,
                title: _title,
                description: _description,
                proposalDeadline: _proposalDeadline,
                minimumVotes: _minimumVotes,
                votesForOptionA: 0,
                votesForOptionB: 0,
                closed: false,
                executed: false
            })
        );

        // Emit an event when a proposal is created
        emit ProposalCreated(proposalId, _title);
    }

    function vote(uint256 _proposalId, uint256 _vote) public {
        require(_proposalId < proposals.length, "Invalid proposal ID");
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.closed, "Proposal is closed");
        require(block.timestamp < proposal.proposalDeadline, "Proposal has ended");

        if (_vote == 1) {
            proposal.votesForOptionA += 1;
        } else if (_vote == 2) {
            proposal.votesForOptionB += 1;
        }

        // Emit an event when a vote is cast
        emit Voted(_proposalId, msg.sender, _vote);
    }

    function isAdmin(address _address) external view returns (bool) {
        return _address == admin;
    }
}
