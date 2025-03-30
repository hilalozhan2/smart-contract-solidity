async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Sözleşmenizi alın
  const NFTCertificate = await ethers.getContractFactory("NFTCertificate");
  const nftCertificate = await NFTCertificate.attach(""); // Sözleşmenizin adresi

  // Token URI'yi belirleyin
  const tokenURI = "ipfs://"; // IPFS linkini buraya ekleyin

  // Mint işlemi
  const tx = await nftCertificate.mintNFT("", tokenURI); // Alıcı adress
  const receipt = await tx.wait(); // İşlem tamamlanana kadar bekle

  // Mint edilen token'ın ID'sini alın
  const tokenId = receipt.events[0].args.tokenId.toString(); // Token ID'yi al
  console.log("Minted Token ID:", tokenId);
}

// Ana fonksiyonu çalıştır
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

  
  