import { ethers } from "hardhat";
import { Signer } from "ethers";
import { assert, expect } from "chai";

describe("Greeter", function () {
  let accounts: Signer[];

  beforeEach(async function () {
    accounts = await ethers.getSigners();
  });

  it("should have accounts", async function () {
    // console.log(accounts);
    assert(accounts.length > 0, "Account legth should be more then zero");
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");

    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
