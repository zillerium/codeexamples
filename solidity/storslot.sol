pragma solidity 0.8.7;

contract Storage {
    uint256 private a1=99;
    uint256 private a2=10;
    uint256 private a=5;

    function storageLocation() external pure returns(uint256) {
        uint256 slotLocation;
    

        assembly {
            slotLocation := a.slot
        }

        return slotLocation;
    }

    function getAtSlot(uint256 slot) external view returns(uint256) {
        uint256 value;

        assembly {
            value := sload(slot)
        }

        return value;
    }
    

}
