import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld", function () {
  async function deployHelloWorld() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    return { helloWorld };
  }

  describe("Withdrawals", function () {
    it("Should revert with the right error if called too soon", async function () {
    const { helloWorld } = await loadFixture(deployHelloWorld);
    const response = await helloWorld.helloWorld()

    expect(response).to.equal(
        "Hello World"
    );
    });
  });
});
