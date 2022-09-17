import "./SoulBoundNFT.sol";
import "../interfaces/ISoulBoundNFT.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

error ALREADY_CLAIMED_AIRDROP();
error INVALID_MERKLE_PROOF();
error CLAIM_DEADLINE_HAS_PASSED();

contract SoulDrop is SoulBoundNFT, Ownable {
    event Claim(address indexed to, uint256 amount);
    address public soulBoundNFTAddress;
    bytes32 public immutable root;
    uint256 public immutable rewardAmount;
    uint public immutable launchTime;
    uint256 private _numberOfClaims;
    uint private _claimDeadline;

   mapping(address => bool) claimed;

   constructor(bytes32 _root, uint _rewardAmount, uint claimDeadline_, string memory _name, string memory _symbol) SoulBoundNFT(_name, _symbol) {
     root = _root;
     rewardAmount = _rewardAmount;
     launchTime = block.timestamp;
     _claimDeadline = claimDeadline_ + block.timestamp;
   }

    function claim(bytes32[] calldata _proof, string calldata passwordGuess) external {
        if(block.timestamp > _claimDeadline) {
            revert CLAIM_DEADLINE_HAS_PASSED();
        }
        bool value = ISoulBoundNFT(soulBoundNFTAddress).isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         if(claimed[msg.sender] == true) {
            revert ALREADY_CLAIMED_AIRDROP();
         }
        bytes32 _leaf = keccak256(abi.encodePacked(msg.sender));
        if(!MerkleProof.verify(_proof, root, _leaf)) {
            revert INVALID_MERKLE_PROOF();
        }
        _mint(msg.sender, rewardAmount);
        claimed[msg.sender] = true;
        emit Claim(msg.sender, rewardAmount);
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

    function numberOfClaims() external view returns(uint) {
        return _numberOfClaims;
    }

    function claimDeadline() external view returns(uint) {
        return _claimDeadline;
    }

    function setSoulBoundNFTAddress(address _soulBoundNFTAddress) external onlyOwner {
       soulBoundNFTAddress = _soulBoundNFTAddress;
    }
}