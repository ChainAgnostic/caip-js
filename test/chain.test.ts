import { ChainID } from "../src";

import * as data from "./data";

function assertChainIDInterface(result: ChainID) {
  expect(result.namespace).toEqual(data.CHAIN_ID_NAMESPACE);
  expect(result.reference).toEqual(data.CHAIN_ID_REFERENCE);
  expect(result.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.toJson()).toEqual(data.CHAIN_ID_PARAMS);
}

describe("ChainID", () => {
  it("should parse string", async () => {
    const result = ChainID.parse(data.CHAIN_ID_STRING);
    expect(result).toEqual(data.CHAIN_ID_PARAMS);
  });

  it("should format params", async () => {
    const result = ChainID.format(data.CHAIN_ID_PARAMS);
    expect(result).toEqual(data.CHAIN_ID_STRING);
  });

  it("should instantiate from json", async () => {
    const result = new ChainID(data.CHAIN_ID_PARAMS);
    assertChainIDInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new ChainID(data.CHAIN_ID_STRING);
    assertChainIDInterface(result);
  });
});
