import { expect } from "chai";
import { ethers } from "hardhat";

describe("AdvancedToken", function () {
  let AdvancedToken, advancedToken, owner, addr1, addr2;

  beforeEach(async function () {
    AdvancedToken = await ethers.getContractFactory("AdvancedToken");
    [owner, addr1, addr2, _] = await ethers.getSigners();
    advancedToken = await AdvancedToken.deploy(owner.address);
    await advancedToken.deployed();
  });

  it("Should mint tokens correctly", async function () {
    await advancedToken.mint(addr1.address, 50);
    expect(await advancedToken.balanceOf(addr1.address)).to.equal(50);
  });

  it("Should not mint tokens beyond the maximum supply", async function () {
    await expect(
      advancedToken.mint(addr1.address, ethers.constants.MaxUint256)
    ).to.be.revertedWith("Max supply exceeded");
  });

  it("Should burn tokens correctly", async function () {
    await advancedToken.mint(addr1.address, 50);
    await advancedToken.connect(addr1).burn(10);
    expect(await advancedToken.balanceOf(addr1.address)).to.equal(40);
  });

  it("Should lock and unlock tokens correctly", async function () {
    await advancedToken.mint(addr1.address, 50);
    await advancedToken.lockTokens(addr1.address, 60);
    await expect(
      advancedToken.connect(addr1).transfer(addr2.address, 10)
    ).to.be.revertedWith("Tokens are locked");
    await ethers.provider.send("evm_increaseTime", [60]);
    await advancedToken.connect(addr1).transfer(addr2.address, 10);
    expect(await advancedToken.balanceOf(addr2.address)).to.equal(10);
  });

  it("Non-owners should not be able to mint tokens", async function () {
    await expect(
      advancedToken.connect(addr1).mint(addr2.address, 50)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
