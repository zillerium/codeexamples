// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function past(int h, int m, int s) public pure returns (int) {
    // your code here
    return (h*60*60+m*60+s)*1000;
  }
}

// SPDX-License-Identifier: BSD-2-Clause
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe('Kata', function() {
  async function deployFixture() {
    const Contract = await ethers.getContractFactory("Kata");
    const contract = await Contract.deploy();
    await contract.deployed();
    return contract; 
  };
  
  it("basic tests", async function() {
    const m = await loadFixture(deployFixture);
    
    assert.strictEqual(+await m.past(0, 1, 1), 61000);
    assert.strictEqual(+await m.past(1, 1, 1), 3661000);
    assert.strictEqual(+await m.past(0, 0, 0), 0);
    assert.strictEqual(+await m.past(1, 0, 1), 3601000);
    assert.strictEqual(+await m.past(1, 0, 0), 3600000);
  });
});
