import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyUint } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

import { TEST_DESCRIPTION, TEST_IMAGE_URL, TEST_TITLE} from './constants/constants'

describe("ENFPOAP contract", function () {
    let contract

    async function deployENFPOAP() {
        const ENFPOAP = await ethers.getContractFactory("ENFPOAP");
        const enfPOAP = await ENFPOAP.deploy();

        contract = await ethers.getContractAt('ENFPOAP', enfPOAP.address)

        return { enfPOAP };
    }

        it("Should emit an event on create", async function () {
            const { enfPOAP } = await loadFixture(deployENFPOAP);

            await expect(enfPOAP.create(TEST_TITLE, TEST_DESCRIPTION, TEST_IMAGE_URL))
                .to.emit(enfPOAP, "CreatedENFPOAP")
                .withArgs(anyUint, TEST_TITLE);
        });
});
