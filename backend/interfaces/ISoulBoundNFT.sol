//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface ISoulBoundNFT {
  function ownerOf(uint256 tokenId) external view returns (address owner);
  
  function isThisCorrectPassword(string calldata guess) external view returns(bool);
}