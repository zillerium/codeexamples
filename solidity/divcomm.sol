// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function maxMultiple(int d, int b) public pure returns (int) {
      bool cont = true;
      int i=b;
      while (i<=b && cont) {
        if (i%d==0) cont = false; else i-=1;
        
      }
      return i;
    }
}

// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function maxMultiple(int d, int b) public pure returns (int) {
    // your code here
    int answer;
    if (b % d == 0){
      answer = b;
    } else {
      answer = b - (b % d);
    }
    return answer;
  }
}


// SPDX-License-Identifier: BSD-2-Clause
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe('Max Multiple', function() {
  async function deployFixture() {
    const Contract = await ethers.getContractFactory("Kata");
    const contract = await Contract.deploy();
    await contract.deployed();
    return contract; 
  };
  
  it("Basic tests", async function() {
    const m = await loadFixture(deployFixture);
    assert.strictEqual(+await m.maxMultiple(2, 7), 6);
    assert.strictEqual(+await m.maxMultiple(3, 10), 9);
    assert.strictEqual(+await m.maxMultiple(7, 17), 14);
    assert.strictEqual(+await m.maxMultiple(10, 50), 50);
    assert.strictEqual(+await m.maxMultiple(37, 200), 185);
    assert.strictEqual(+await m.maxMultiple(7, 100), 98);
  });
});
