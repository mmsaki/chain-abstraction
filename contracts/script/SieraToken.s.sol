// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {SieraToken} from "../src/SieraToken.sol";

contract CounterScript is Script {
    function setUp() public {}

    function run() public {
        vm.broadcast();
        new SieraToken(0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5);
    }
}

// forge script script/GasToken.s.sol --broadcast --verify --verifier-url https://sepolia.explorer.mode.network/api --fork-url mode_sepolia --account defaultKey --sender 0x04655832bcb0a9a0be8c5ab71e4d311464c97af5 --priority-gas-price 1 -vvvv