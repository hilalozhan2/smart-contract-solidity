const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners(); // deployer'ı alıyoruz
  console.log("Deploying contracts with the account:", deployer.address);

  const NFTCertificate = await hre.ethers.getContractFactory("NFTCertificate");
  const nftCertificate = await NFTCertificate.deploy(); // argüman geçmeden deploy ediyoruz

  await nftCertificate.deployed();

  console.log("NFTCertificate deployed to:", nftCertificate.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


 
