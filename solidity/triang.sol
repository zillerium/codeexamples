// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract ThirdAngle {
  function otherAngle(int angle1, int angle2) public pure returns (int) {
    // TODO your code here
    int a1 = angle1;
    int a2 = angle2;
    return 180-a1-a2;
  }
}


// SPDX-License-Identifier: BSD-2-Clause
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe('ThirdAngle', _ => {
  async function deployFixture() {
    const Contract = await ethers.getContractFactory("ThirdAngle");
    const contract = await Contract.deploy();
    await contract.deployed();
    return contract; 
  };
  
  it('Sample Tests', async function () {
    const m = await loadFixture(deployFixture);
    assert.equal(await m.otherAngle(30, 60), 90);
    assert.equal(await m.otherAngle(60, 60), 60);
    assert.equal(await m.otherAngle(43, 78), 59);
    assert.equal(await m.otherAngle(10, 20), 150);
  });
});
