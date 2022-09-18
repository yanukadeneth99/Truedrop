import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "../interfaces/ISoulBoundNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

error ALREADY_HAVE_TOKEN();
error ALREADY_HAVE_PASSWORD();
error WRONG_PASSWORD();

contract SoulBoundNFT is Ownable {
    using Address for address;
    using Strings for uint256;
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

     // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    string private _baseURI;

     mapping(uint256 => address) private _owners;

    mapping(address => bool) private alreadyHaveToken;

    mapping(address => bytes) private password;


     constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

     function name() public view virtual returns (string memory) {
        return _name;
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    function tokenURI(uint256 tokenId) public view virtual returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = _returnBaseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }

     function _returnBaseURI() internal view virtual returns (string memory) {
        return _baseURI;
    }

      function _ownerOf(uint256 tokenId) internal view virtual returns (address) {
        return _owners[tokenId];
    }

     function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }

    
     function _mint(address to, uint256 tokenId, string calldata passwordGuess) internal virtual {
       bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
        if(alreadyHaveToken[msg.sender] == true) {
            revert ALREADY_HAVE_TOKEN();
        }

        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");

        _beforeTokenTransfer(address(0), to, tokenId);

        require(!_exists(tokenId), "ERC721: token already minted");

        _owners[tokenId] = to;

        emit Transfer(address(0), to, tokenId);

        _afterTokenTransfer(address(0), to, tokenId);
    }

      function _burn(uint256 tokenId) internal virtual {
        address owner = _ownerOf(tokenId);

        _beforeTokenTransfer(owner, address(0), tokenId);

        delete _owners[tokenId];

        emit Transfer(owner, address(0), tokenId);
    }


    function setPassword(string calldata myPassword) public virtual {
     bytes memory thisPassword = password[msg.sender];
     bool lengthIsZero = thisPassword.length == 0;
      if(lengthIsZero != true) {
        revert ALREADY_HAVE_PASSWORD();
      }
      bytes memory hash = abi.encode(myPassword);
      password[msg.sender] = hash;
    }

    function isThisCorrectPassword(string calldata guess) public view virtual returns(bool) {
       bytes memory hash = abi.encode(guess);
       bytes memory currentPassword = password[msg.sender];
       return keccak256(abi.encodePacked(hash)) == keccak256(abi.encodePacked(currentPassword)) && currentPassword.length != 0;
    }

      function supportsInterface(bytes4 interfaceId) public view virtual returns (bool) {
        return interfaceId == type(ISoulBoundNFT).interfaceId;         
    }

    function _requireMinted(uint256 tokenId) internal view virtual {
        require(_exists(tokenId), "ERC721: invalid token ID");
    }

    function setBaseURI(string calldata baseURI) public onlyOwner {
       _baseURI = baseURI;
    }

      function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual {}

      function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual {}

}