// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function isDivisible(int n, int x, int y) public pure returns (bool) {
    // your code here
    return (n%x==0) && (n%y==0);
  }
}

// SPDX-License-Identifier: BSD-2-Clause
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe('Is it divisible?', function() {
  async function deployFixture() {
    const Contract = await ethers.getContractFactory("Kata");
    const contract = await Contract.deploy();
    await contract.deployed();
    return contract; 
  };
  
  it("basic tests", async function() {
    const d = await loadFixture(deployFixture);
    assert.equal(await d.isDivisible(3, 3, 4), false);
    assert.equal(await d.isDivisible(12, 3, 4), true);
    assert.equal(await d.isDivisible(8, 3, 4), false);
    assert.equal(await d.isDivisible(48, 3, 4), true);
    assert.equal(await d.isDivisible(100, 5, 10), true);
    assert.equal(await d.isDivisible(100, 5, 3), false);
    assert.equal(await d.isDivisible(4, 4, 2), true);
    assert.equal(await d.isDivisible(5, 2, 3), false);
    assert.equal(await d.isDivisible(17, 17, 17), true);
    assert.equal(await d.isDivisible(17, 1, 17), true);
  });
});
