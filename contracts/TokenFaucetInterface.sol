// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

interface TokenFaucetInterface {
  function dripRatePerSecond() external view returns (uint256);
}
