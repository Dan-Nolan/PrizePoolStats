// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

/// @title Escrows assets and deposits them into a yield source.  Exposes interest to Prize Strategy.  Users deposit and withdraw from this contract to participate in Prize Pool.
/// @notice Accounting is managed using Controlled Tokens, whose mint and burn functions can only be called by this contract.
/// @dev Must be inherited to provide specific yield-bearing asset control, such as Compound cTokens
interface PrizePoolInterface {
  /// @notice Returns the balance that is available to award.
  /// @dev captureAwardBalance() should be called first
  /// @return The total amount of assets to be awarded for the current prize
  function awardBalance() external view returns (uint256);

  /// @notice The total of all controlled tokens and timelock.
  /// @return The current total of all tokens and timelock.
  function accountedBalance() external view returns (uint256);
}
