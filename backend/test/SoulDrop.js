const { expect } = require("chai");
const { ethers } = require("hardhat");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { arrayify } = require("ethers/lib/utils");

describe("Ticket", async function () {
  it("Should be able to deploy and claim SoulBoundNFT", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("SoulBoundNFT");
    this.nft = await NFT.deploy("afasdf", "asdfafds");
    const receipt = await this.nft.deployTransaction.wait();
    contractBlocknumber = receipt.blockNumber;
    console.log(contractBlocknumber)
   const currentBlockNumber = await ethers.getDefaultProvider().getBlockNumber();
   await this.nft.connect(addr1).setPassword("hello")
   await this.nft.connect(addr1)._mint(addr1.address, 1, "hello")
   const filter = this.nft.filters.Transfer();
   const results = await this.nft.queryFilter(filter, contractBlocknumber, currentBlockNumber);
   console.log(results)
   const leafNodes = results.map((i) => keccak256(i.args.to.toString()));
    this.merkleTree = new MerkleTree(leafNodes, keccak256, {
      sortPairs: true,
    });
    const rootHash = this.merkleTree.getRoot();
   const SoulDrop = await ethers.getContractFactory("SoulDrop");
   const soulDrop = await SoulDrop.deploy(rootHash, 100, 100, 1, "asdaf", "asdafd")
   await soulDrop.deployed();
   const proof = this.merkleTree.getHexProof(keccak256(addr2.address));
   soulDrop.connect(addr2).claim(proof, "hello")
   soulDrop.connect(addr1).claim(proof, "hellokjlkjjk");
  });
});
