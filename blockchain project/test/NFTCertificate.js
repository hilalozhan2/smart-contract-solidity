const { expect } = require("chai");

describe("NFTCertificate", function () {
  it("Should deploy without errors", async function () {
    const NFTCertificate = await ethers.getContractFactory("NFTCertificate");
    const contract = await NFTCertificate.deploy();
    await contract.deployed();

    expect(await contract.contractOwner()).to.not.be.null;
  });
});
