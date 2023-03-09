// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function checkForFactor(int base, int factor) public pure returns (bool) {
    if ( base%factor==0) return true; else return false;
  }
}

// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function checkForFactor(uint base, uint factor) public pure returns (bool) {
    return  base % factor != 0 ? false: true;
  }
}

// SPDX-License-Identifier: BSD-2-Clause
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe('Check for factor', () => {
  async function deployFixture() {
    const Contract = await ethers.getContractFactory("Kata");
    const contract = await Contract.deploy();
    await contract.deployed();
    return contract; 
  };
  
  it("should return true", async () => {
    const d = await loadFixture(deployFixture);
    assert.equal(await d.checkForFactor(10, 2), true);
    assert.equal(await d.checkForFactor(63, 7), true);
    assert.equal(await d.checkForFactor(2450, 5), true);
    assert.equal(await d.checkForFactor(24612, 3), true);
  });
  
  it("should return false", async () => {
    const d = await loadFixture(deployFixture);
    assert.equal(await d.checkForFactor(9, 2), false);
    assert.equal(await d.checkForFactor(653, 7), false);
    assert.equal(await d.checkForFactor(2453, 5), false);
    assert.equal(await d.checkForFactor(24617, 3), false);
  });
});
