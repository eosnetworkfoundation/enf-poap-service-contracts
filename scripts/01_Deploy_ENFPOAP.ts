import { ethers } from "hardhat";

async function main() {
  const ENFPOAP = await ethers.getContractFactory("ENFPOAP");
  const enfPOAP = await ENFPOAP.deploy();

  await enfPOAP.deployed();

  console.log(
    `ENFPOAP deployed to ${enfPOAP.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
