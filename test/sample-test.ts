import { ethers } from "hardhat";
import { Signer } from "ethers";
import { assert } from "chai";

describe("Greeter", function () {
  let accounts: Signer[];

  beforeEach(async function () {
    accounts = await ethers.getSigners();
  });

  it("should have accounts", async function () {
    // console.log(accounts);
    assert(accounts.length > 0, "Account legth should be more then zero");
  });
});
