import { AssetType } from "../src";

import * as data from "./data";

function assertInterface(result: AssetType) {
  expect(result.chainId.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.assetName.toString()).toEqual(data.ASSET_NAME_STRING);
  expect(result.toString()).toEqual(data.ASSET_TYPE_STRING);
  expect(result.toJSON()).toEqual(data.ASSET_TYPE_NESTED_PARAMS);
}

describe("AssetType", () => {
  it("should parse string", async () => {
    const result = AssetType.parse(data.ASSET_TYPE_STRING);
    expect(result).toEqual(data.ASSET_TYPE_NESTED_PARAMS);
  });

  it("should format params", async () => {
    const result = AssetType.format(data.ASSET_TYPE_PARAMS);
    expect(result).toEqual(data.ASSET_TYPE_STRING);
  });

  it("should instantiate from params", async () => {
    const result = new AssetType(data.ASSET_TYPE_PARAMS);
    assertInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new AssetType(data.ASSET_TYPE_STRING);
    assertInterface(result);
  });

  it("should instantiate from nested params", async () => {
    const result = new AssetType(data.ASSET_TYPE_NESTED_PARAMS);
    assertInterface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new AssetType(data.ASSET_TYPE_PARAMS);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertInterface(new AssetType(json));
  });
});
