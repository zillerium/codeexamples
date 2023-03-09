// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function move(int p, int r) public pure returns (int) {
    // your code here
    return r+r+p;
  }
}

// SPDX-License-Identifier: BSD-2-Clause
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");


describe('Move function', function() {
   async function deployFixture() {
    const Contract = await ethers.getContractFactory("Kata");
    const contract = await Contract.deploy();
    await contract.deployed();
    return contract; 
  };
  
  it("basic tests", async function() {
    const m = await loadFixture(deployFixture);
    assert.equal((await m.move(0, 4)).valueOf(), 8);
    assert.equal((await m.move(3, 6)).valueOf(), 15);
    assert.equal((await m.move(2, 5)).valueOf(), 12);
  });
});
