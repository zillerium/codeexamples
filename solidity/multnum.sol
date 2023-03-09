// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.0;

contract DummyToken {
  function multiply(int a, int b) pure public returns (int) {
    return a * b;
  }
}


const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

const { assert } = require("chai");

describe('DummyToken', () => {
  async function deployDummyTokenFixture() {
    const DummyToken = await ethers.getContractFactory("DummyToken");
    const dummy = await DummyToken.deploy();
    return { dummy };
  }
  
  it('should have a function "multiply" that correctly multiplies two integers (Sample Test)', async function () {
    const { dummy } = await loadFixture(deployDummyTokenFixture);
    assert.strictEqual(+await dummy.multiply(3, 5), 15);
  });
  
  it('should have a function "multiply" that correctly multiplies two integers (Fixed Tests)', async function () {
    const { dummy } = await loadFixture(deployDummyTokenFixture);
    assert.strictEqual(+await dummy.multiply(2, 4), 8);
    assert.strictEqual(+await dummy.multiply(4, 2), 8);
    assert.strictEqual(+await dummy.multiply(7, 5), 35);
    assert.strictEqual(+await dummy.multiply(7, 7), 49);
    assert.strictEqual(+await dummy.multiply(17, 0), 0);
    assert.strictEqual(+await dummy.multiply(0, -8), 0, 'Your function should also work for negative integers');
    assert.strictEqual(+await dummy.multiply(-8, 9), -72, 'Your function should also work for negative integers');
    assert.strictEqual(+await dummy.multiply(-9, -8), 72, 'Your function should also work for negative integers');
    assert.strictEqual(+await dummy.multiply(9, -9), -81, 'Your function should also work for negative integers');
    assert.strictEqual(+await dummy.multiply(12, 12), 144);
  });
});
