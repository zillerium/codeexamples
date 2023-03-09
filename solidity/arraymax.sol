contract Kata {
  function expressionMatter(int a, int b, int c) public pure returns (int) {
    // your code here
    int[5] memory nums;
    nums[0]=(a*b*c);
    nums[1]=(a*(b+c));
    nums[2]=(a+(b*c));
    nums[3]=((a+b)*c);
    nums[4]=(a+b+c);
    int max = 0;
    for (uint i=0;i<nums.length;i++) {
        if (nums[i]>max) {
            max = nums[i];
        }
    }
    return max;
     
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
    
    assert.strictEqual(+await m.expressionMatter(2, 1, 2), 6);
    assert.strictEqual(+await m.expressionMatter(2, 1, 1), 4);
    assert.strictEqual(+await m.expressionMatter(1, 1, 1), 3);
    assert.strictEqual(+await m.expressionMatter(1, 2, 3), 9);
    assert.strictEqual(+await m.expressionMatter(1, 3, 1), 5);
    assert.strictEqual(+await m.expressionMatter(2, 2, 2), 8);
    assert.strictEqual(+await m.expressionMatter(5, 1, 3), 20);
    assert.strictEqual(+await m.expressionMatter(3, 5, 7), 105);
    assert.strictEqual(+await m.expressionMatter(5, 6, 1), 35);
    assert.strictEqual(+await m.expressionMatter(1, 6, 1), 8);
    assert.strictEqual(+await m.expressionMatter(2, 6, 1), 14);
    assert.strictEqual(+await m.expressionMatter(6, 7, 1), 48);
    assert.strictEqual(+await m.expressionMatter(2, 10, 3), 60);
    assert.strictEqual(+await m.expressionMatter(1, 8, 3), 27);
    assert.strictEqual(+await m.expressionMatter(9, 7, 2), 126);
    assert.strictEqual(+await m.expressionMatter(1, 1, 10), 20);
    assert.strictEqual(+await m.expressionMatter(9, 1, 1), 18);
    assert.strictEqual(+await m.expressionMatter(10, 5, 6), 300);
    assert.strictEqual(+await m.expressionMatter(1, 10, 1), 12);
  });
});
