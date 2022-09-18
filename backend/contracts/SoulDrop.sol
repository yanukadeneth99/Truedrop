import "./SoulBoundNFT.sol";
import "../interfaces/ISoulBoundNFT.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

error ALREADY_CLAIMED_AIRDROP();
error INVALID_MERKLE_PROOF();
error CLAIM_DEADLINE_HAS_PASSED();
error INSUFFICIENT_FUNDS();
error NO_BOTS_ALLOWED();

contract SoulDrop is Ownable, SoulBoundNFT {
    event Claim(address indexed to, uint256 amount);
    address public soulBoundNFTAddress;
    uint private currentTokenId;
    bytes32 public immutable root;
    uint public immutable launchTime;
    uint256 private _numberOfClaims;
    uint private _claimDeadline;
    uint public claimFee;

   mapping(address => bool) private claimed;

   constructor(bytes32 _root, address _soulBoundNFTAddress, uint claimDeadline_, uint _currentTokenId, string memory _name, string memory _symbol) SoulBoundNFT(_name, _symbol) {
     root = _root;
     launchTime = block.timestamp;
     _claimDeadline = claimDeadline_ + block.timestamp;
     currentTokenId = _currentTokenId;
     soulBoundNFTAddress = _soulBoundNFTAddress;
   }

    function claim(bytes32[] calldata _proof, string calldata passwordGuess, string calldata passwordGuess2) external payable {
        if(msg.sender != tx.origin) {
          revert NO_BOTS_ALLOWED();
        }
        if(block.timestamp > _claimDeadline) {
            revert CLAIM_DEADLINE_HAS_PASSED();
        }
        if(claimFee > 0 && msg.value != claimFee) {
            revert INSUFFICIENT_FUNDS();
        }
        bool value = ISoulBoundNFT(soulBoundNFTAddress).isThisCorrectPassword(passwordGuess, msg.sender);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         if(claimed[msg.sender] == true) {
            revert ALREADY_CLAIMED_AIRDROP();
         }
        bool valid = _areYouEligibleToClaim(msg.sender, _proof);
        if(valid == false) {
            revert INVALID_MERKLE_PROOF();
        }
         claimed[msg.sender] = true;
         _mint(msg.sender, currentTokenId, passwordGuess2);
         emit Claim(msg.sender, currentTokenId);
        currentTokenId++;
        _numberOfClaims++;
        
    }

     function areYouEligibleToClaim(address addr, bytes32[] calldata proof)
        external
        view
        returns (bool)
    {
        return _areYouEligibleToClaim(addr, proof);
    }

    function _areYouEligibleToClaim(address addr, bytes32[] memory proof)
        internal
        view
        returns (bool)
    {
        bytes32 leaf = keccak256(abi.encodePacked(addr));
        bool isValidLeaf = MerkleProof.verify(proof, root, leaf);
        return isValidLeaf;
    }

    function haveYouClaimed() external view returns(bool) {
        return claimed[msg.sender];
    }

    function numberOfClaims() external view returns(uint) {
        return _numberOfClaims;
    }

    function claimDeadline() external view returns(uint) {
        return _claimDeadline;
    }

    function setClaimFee(uint _newFee) external onlyOwner {
      claimFee = _newFee;
    }
}