const { expect } = require("chai");
const { ethers } = require("hardhat");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { arrayify } = require("ethers/lib/utils");

describe("SoulDrop", async function () {
  it("Should be able to deploy and claim SoulBoundNFT", async function () {
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("SoulBoundNFT");
    const nft = await NFT.connect(owner).deploy("afasdf", "asdfafds");
    await nft.deployed();
    const currentBlockNumber = await ethers.getDefaultProvider().getBlockNumber();
    await nft.connect(addr1).setPassword("hello");
    await nft.connect(addr2).setPassword("biscuit");
    await nft.connect(addr1)._mint(addr1.address, 1, "hello");
    const filter = nft.filters.Transfer();
     const results = await nft.queryFilter(filter, 1, currentBlockNumber);
     console.log(results.map(i => i.args.to))
     const leafNodes = results.map((i) => keccak256(i.args.to.toString()));
     const merkleTree = new MerkleTree(leafNodes, keccak256, {
       sortPairs: true,
     });
     const rootHash = merkleTree.getRoot();
     const SoulDrop = await ethers.getContractFactory("SoulDrop");
     const soulDrop = await SoulDrop.deploy(rootHash, nft.address, 100, 100, "asdaf", "asdafd");
     await soulDrop.deployed();
     const nftAddress = await soulDrop.soulBoundNFTAddress();
     expect(nftAddress).to.equal(nft.address)
     const proof = merkleTree.getHexProof(keccak256(addr1.address));
     await soulDrop.connect(addr1).setPassword("hello2");
     await soulDrop.connect(addr1).claim(proof, "hello", "hello2")
    });
});
