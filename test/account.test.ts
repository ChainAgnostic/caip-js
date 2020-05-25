import { AccountID } from "../src";

import * as data from "./data";

function assertAccountIDInterface(result: AccountID) {
  expect(result.chainId.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.address).toEqual(data.ACCOUNT_ID_ADDRESS);
  expect(result.toString()).toEqual(data.ACCOUNT_ID_STRING);
  expect(result.toJson()).toEqual(data.ACCOUNT_ID_NESTED_PARAMS);
}

describe("AccountID", () => {
  it("should parse string", async () => {
    const result = AccountID.parse(data.ACCOUNT_ID_STRING);
    expect(result).toEqual(data.ACCOUNT_ID_NESTED_PARAMS);
  });

  it("should format params", async () => {
    const result = AccountID.format(data.ACCOUNT_ID_PARAMS);
    expect(result).toEqual(data.ACCOUNT_ID_STRING);
  });

  it("should instantiate from params", async () => {
    const result = new AccountID(data.ACCOUNT_ID_PARAMS);
    assertAccountIDInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new AccountID(data.ACCOUNT_ID_STRING);
    assertAccountIDInterface(result);
  });

  it("should instantiate from nested params", async () => {
    const result = new AccountID(data.ACCOUNT_ID_NESTED_PARAMS);
    assertAccountIDInterface(result);
  });
});
