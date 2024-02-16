import { TokenURI } from "../src";

import * as data from "./data";

function assertInterface(result: TokenURI) {
  expect(result.assetId.toString()).toEqual(data.ASSET_ID_STRING);
  expect(result.blockNumberTag).toEqual(data.BLOCK_NUMBER_TAG);
  expect(result.toString()).toEqual(data.TOKEN_URI_STRING);
  expect(result.toJSON()).toEqual(data.TOKEN_URI_NESTED_PARAMS);
}

describe("AssetId", () => {
  it("should parse string", async () => {
    const result = TokenURI.parse(data.TOKEN_URI_STRING);
    expect(result).toEqual(data.TOKEN_URI_NESTED_PARAMS);
  });

  it("should format params", async () => {
    const result = TokenURI.format(data.TOKEN_URI_PARAMS);
    expect(result).toEqual(data.TOKEN_URI_STRING);
  });

  it("should instantiate from params", async () => {
    const result = new TokenURI(data.TOKEN_URI_PARAMS);
    assertInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new TokenURI(data.TOKEN_URI_STRING);
    assertInterface(result);
  });

  it("should instantiate from nested params", async () => {
    const result = new TokenURI(data.TOKEN_URI_NESTED_PARAMS);
    assertInterface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new TokenURI(data.TOKEN_URI_PARAMS);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertInterface(new TokenURI(json));
  });
});
