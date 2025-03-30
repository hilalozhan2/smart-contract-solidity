// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCertificate is ERC721Enumerable, Ownable {
    uint256 public nextTokenId;
    
    constructor() ERC721("NFT Certificate", "NFTC") {}

    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        uint256 tokenId = nextTokenId;
        _safeMint(recipient, tokenId);
        nextTokenId++;
        return tokenId;
    }
}