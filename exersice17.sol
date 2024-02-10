// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract AdvancedToken is ERC20, Ownable, ERC20Burnable {
    uint256 public constant MAX_SUPPLY = 1000000 * 10**18;
    mapping(address => uint256) private _lockTime;

    constructor(address initialOwner) Ownable(initialOwner) ERC20("AdvancedToken", "ATK") {}

    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Max supply exceeded");
        _mint(to, amount);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(block.timestamp > _lockTime[_msgSender()], "Tokens are locked");
        return super.transfer(recipient, amount);
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        require(block.timestamp > _lockTime[sender], "Tokens are locked");
        return super.transferFrom(sender, recipient, amount);
    }

    function lockTokens(address account, uint256 lockDuration) public onlyOwner {
        _lockTime[account] = block.timestamp + lockDuration;
    }
}
