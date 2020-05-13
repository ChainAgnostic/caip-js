import { AccountID } from "../src";

import * as data from "./data";

function assertAccountIDInterface(result: AccountID) {
  expect(result.chainId.toString()).toEqual(data.ACCOUNT_ID_CHAIN_ID);
  expect(result.address).toEqual(data.ACCOUNT_ID_ADDRESS);
  expect(result.toString()).toEqual(data.ACCOUNT_ID_STRING);
  expect(result.toJson()).toEqual(data.ACCOUNT_ID_JSON);
}

describe("AccountID", () => {
  it("should parse", async () => {
    const result = AccountID.parse(data.ACCOUNT_ID_STRING);
    assertAccountIDInterface(result);
  });

  it("should format", async () => {
    const result = AccountID.format(data.ACCOUNT_ID_JSON);
    expect(result).toEqual(data.ACCOUNT_ID_STRING);
  });

  it("should instantiate", async () => {
    const result = AccountID.parse(data.ACCOUNT_ID_STRING);
    assertAccountIDInterface(result);
  });
});
