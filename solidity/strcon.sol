// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Repeater {
  function multiply(uint8 repeat, string memory pattern) public pure returns (string memory) {
    string memory x; 
    for (uint i=0; i< repeat; i++) {
        x=string(bytes.concat(bytes(x), bytes(pattern)));
      }
     return x;
  }

}

// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Repeater {
  function multiply(uint8 repeat, string memory pattern) public pure returns (string memory) {
    string memory result = "";
    
    for (uint i = 0; i < repeat; i++) {
      result = string(abi.encodePacked(result, pattern));
    }
    return result;
  }
}

// SPDX-License-Identifier: BSD-2-Clause
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe('Repeater', _ => {
  async function deployFixture() {
    const Contract = await ethers.getContractFactory("Repeater");
    const contract = await Contract.deploy();
    await contract.deployed();
    return contract; 
  };
  
  it('Sample Tests', async function () {
    const d = await loadFixture(deployFixture);
    assert.equal(await d.multiply(4, "a"), "aaaa");
    assert.equal(await d.multiply(3, "Hello"), "HelloHelloHello");
    assert.equal(await d.multiply(5, ""), "");
    assert.equal(await d.multiply(0, "kata"), "");
  });
});
