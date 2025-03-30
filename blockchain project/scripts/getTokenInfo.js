const hre = require("hardhat");

async function main() {
    const nftCertificate = await hre.ethers.getContractAt(
        "NFTCertificate",
        ""
    );

    const ownerAddress = "";

    // Token ID’yi al
    const tokenId = await nftCertificate.tokenOfOwnerByIndex(ownerAddress, 0);
    console.log("Token ID of receiver:", tokenId.toString());

    // Token ID için onaylı adresi kontrol et
    const approved = await nftCertificate.getApproved(tokenId);
    console.log("Approved address for token ID", tokenId.toString(), ":", approved);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
