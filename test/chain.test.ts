import { ChainID } from "../src";

import * as data from "./data";

function assertChainIDInterface(result: ChainID) {
  expect(result.namespace).toEqual(data.CHAIN_ID_NAMESPACE);
  expect(result.reference).toEqual(data.CHAIN_ID_REFERENCE);
  expect(result.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.toJson()).toEqual(data.CHAIN_ID_JSON);
}

describe("ChainID", () => {
  it("should parse", async () => {
    const result = ChainID.parse(data.CHAIN_ID_STRING);
    assertChainIDInterface(result);
  });

  it("should format", async () => {
    const result = ChainID.format(data.CHAIN_ID_JSON);
    expect(result).toEqual(data.CHAIN_ID_STRING);
  });

  it("should instantiate", async () => {
    const result = ChainID.parse(data.CHAIN_ID_STRING);
    assertChainIDInterface(result);
  });
});
