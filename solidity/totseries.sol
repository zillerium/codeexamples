// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function summation(int n) public pure returns (int) {
    // your code here
    int sum = 0;
    for (int i=0;i<(n+1);i++) {
       sum +=i;
    }
    return sum;
  }
}

// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function summation(int n) public pure returns (int) {
    // your code here
    int sum = 0;
    for (int i=0;i<(n+1);i++) {
       sum +=i;
    }

    return (n+1)*n/2;
  }
}

// SPDX-License-Identifier: BSD-2-Clause
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe('Summation', function() {
  async function deployFixture() {
    const Contract = await ethers.getContractFactory("Kata");
    const contract = await Contract.deploy();
    await contract.deployed();
    return contract; 
  };
  
  it("basic tests", async function() {
    const m = await loadFixture(deployFixture);
    
    assert.equal((await m.summation(1)).valueOf(), 1);
    assert.equal((await m.summation(8)).valueOf(), 36);
    assert.equal((await m.summation(22)).valueOf(), 253);
    assert.equal((await m.summation(100)).valueOf(), 5050);
    assert.equal((await m.summation(213)).valueOf(), 22791);
  });
});
