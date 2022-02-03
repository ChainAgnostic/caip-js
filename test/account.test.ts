import { AccountId } from "../src";

import * as data from "./data";

function assertAccountIdInterface(result: AccountId) {
  expect(result.chainId.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.address).toEqual(data.ACCOUNT_ID_ADDRESS);
  expect(result.toString()).toEqual(data.ACCOUNT_ID_STRING);
  expect(result.toJSON()).toEqual(data.ACCOUNT_ID_NESTED_PARAMS);
}

describe("AccountId", () => {
  it("should parse string", async () => {
    const result = AccountId.parse(data.ACCOUNT_ID_STRING);
    expect(result).toEqual(data.ACCOUNT_ID_NESTED_PARAMS);
  });

  it("should format params", async () => {
    const result = AccountId.format(data.ACCOUNT_ID_PARAMS);
    expect(result).toEqual(data.ACCOUNT_ID_STRING);
  });

  it("should instantiate from params", async () => {
    const result = new AccountId(data.ACCOUNT_ID_PARAMS);
    assertAccountIdInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new AccountId(data.ACCOUNT_ID_STRING);
    assertAccountIdInterface(result);
  });

  it("should instantiate from nested params", async () => {
    const result = new AccountId(data.ACCOUNT_ID_NESTED_PARAMS);
    assertAccountIdInterface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new AccountId(data.ACCOUNT_ID_PARAMS);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertAccountIdInterface(new AccountId(json));
  });
});
