import { ChainId } from "../src";

import * as data from "./data";

function assertChainIdInterface(result: ChainId) {
  expect(result.namespace).toEqual(data.CHAIN_ID_NAMESPACE);
  expect(result.reference).toEqual(data.CHAIN_ID_REFERENCE);
  expect(result.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.toJSON()).toEqual(data.CHAIN_ID_PARAMS);
}

describe("ChainId", () => {
  it("should parse string", async () => {
    const result = ChainId.parse(data.CHAIN_ID_STRING);
    expect(result).toEqual(data.CHAIN_ID_PARAMS);
  });

  it("should format params", async () => {
    const result = ChainId.format(data.CHAIN_ID_PARAMS);
    expect(result).toEqual(data.CHAIN_ID_STRING);
  });

  it("should instantiate from json", async () => {
    const result = new ChainId(data.CHAIN_ID_PARAMS);
    assertChainIdInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new ChainId(data.CHAIN_ID_STRING);
    assertChainIdInterface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new ChainId(data.CHAIN_ID_STRING);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertChainIdInterface(new ChainId(json));
  });
});
