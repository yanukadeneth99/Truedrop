import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
//Maybe have a soulbound nft that describes a person; age, height, race, gender. And this nft can also include an avatar of that person of course. Maybe there is a community around people who have identified themselves through a soulbound nft

error ALREADY_HAVE_AVATAR();
error ALREADY_HAVE_PASSWORD();
error WRONG_PASSWORD();

contract PersonSoulBoundNFT {
    using Address for address;
    using Strings for uint256;
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

     // Token name
    string private _name;

    // Token symbol
    string private _symbol;

     mapping(uint256 => address) private _owners;

    struct Person {
       string name;
       uint age;
       uint height;
       string race;
       string gender;
       uint yearBorn;
       string eyeColor;
       string hairColor;
       uint shoeSize;
       string talent;
    }
    mapping(address => bool) private alreadyHaveAvatar;

    mapping(address => Person) public people;

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

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }

     function _baseURI() internal view virtual returns (string memory) {
        return "";
    }

      function _ownerOf(uint256 tokenId) internal view virtual returns (address) {
        return _owners[tokenId];
    }

     function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }

    
     function _mintPerson(address to, uint256 tokenId, string calldata personName, uint age, uint height, string calldata race, string calldata gender, uint yearBorn, string calldata eyeColor, string calldata hairColor, uint shoeSize, string calldata talent) internal virtual {
        if(alreadyHaveAvatar[msg.sender] == true) {
            revert ALREADY_HAVE_AVATAR();
        }

        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");

        _beforeTokenTransfer(address(0), to, tokenId);

        require(!_exists(tokenId), "ERC721: token already minted");
        people[to].name = personName;
        people[to].age = age;
        people[to].height = height;
        people[to].race = race;
        people[to].gender = gender;
        people[to].yearBorn = yearBorn;
        people[to].eyeColor = eyeColor;
        people[to].hairColor = hairColor;
        people[to].shoeSize = shoeSize;
        people[to].talent = talent;

        _owners[tokenId] = to;

        emit Transfer(address(0), to, tokenId);

        _afterTokenTransfer(address(0), to, tokenId);
    }

    function setPassword(string calldata myPassword) public {
     bytes memory thisPassword = password[msg.sender];
     bool lengthIsZero = thisPassword.length == 0;
      if(lengthIsZero != true) {
        revert ALREADY_HAVE_PASSWORD();
      }
      bytes memory hash = abi.encode(myPassword);
      password[msg.sender] = hash;
    }

    function isThisCorrectPassword(string calldata guess) public view returns(bool) {
       bytes memory hash = abi.encode(guess);
       bytes memory currentPassword = password[msg.sender];
       return keccak256(abi.encodePacked(hash)) == keccak256(abi.encodePacked(currentPassword));
    }

    function _requireMinted(uint256 tokenId) internal view virtual {
        require(_exists(tokenId), "ERC721: invalid token ID");
    }

       function changeName(string calldata _changeName, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].name = _changeName;
       }

        function changeAge(uint _changeAge, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].age = _changeAge;
       }

        function changeHeight(uint _changeHeight, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].height = _changeHeight;
       }

        function changeRace(string calldata _changeRace, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].race = _changeRace;
       }

        function changeGender(string calldata _changeGender, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].gender = _changeGender;
       }

        function changeYearBorn(uint _changeYearBorn, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].yearBorn = _changeYearBorn;
       }

        function changeEyeColor(uint _changeYearBorn, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].yearBorn = _changeYearBorn;
       }

        function changeHairColor(string calldata _changeHairColor, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].hairColor = _changeHairColor;
       }

        function changeShoeSize(uint _changeShoeSize, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].shoeSize = _changeShoeSize;
       }

       function changeTalent(string calldata _changeTalent, string calldata passwordGuess) public {
         bool value = isThisCorrectPassword(passwordGuess);
         if(value == false) {
           revert WRONG_PASSWORD();
         }
         people[msg.sender].talent = _changeTalent;
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