pragma solidity 0.8.7;

contract Test {
    uint256 a =3;
     function aPlusOne() external view returns(uint256) {
         unchecked {
             return a+1;
         }

     }

}
