const hre = require("hardhat");

async function main() {

  const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
  const hscp = await horoscopeNFT.deploy();
  await hscp.deployed()

  const myAddress="0x2135C7E3254E00B2419188C7dbd7Ad5d09FE7F1d";
  console.log("horoscopeNFT deployed to:", hscp.address); 

  let txn = await hscp.mintNFT(myAddress, 'virgo');
  await txn.wait();
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
