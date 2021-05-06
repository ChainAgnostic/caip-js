import { AssetNamespaceAndReference } from "../src/assetNamespaceAndReference";

import * as data from "./data";

function assertInterface(result: AssetNamespaceAndReference) {
  expect(result.assetNamespace).toEqual(data.ASSET_NAMESPACE);
  expect(result.assetReference).toEqual(data.ASSET_REFERENCE);
  expect(result.toString()).toEqual(data.ASSET_NAMESPACE_AND_REFERENCE_STRING);
  expect(result.toJson()).toEqual(data.ASSET_NAMESPACE_AND_REFERENCE_PARAMS);
}

describe("AssetNamespaceAndReference", () => {
  it("should parse string", async () => {
    const result = AssetNamespaceAndReference.parse(
      data.ASSET_NAMESPACE_AND_REFERENCE_STRING
    );
    expect(result).toEqual(data.ASSET_NAMESPACE_AND_REFERENCE_PARAMS);
  });

  it("should format params", async () => {
    const result = AssetNamespaceAndReference.format(
      data.ASSET_NAMESPACE_AND_REFERENCE_PARAMS
    );
    expect(result).toEqual(data.ASSET_NAMESPACE_AND_REFERENCE_STRING);
  });

  it("should instantiate from params", async () => {
    const result = new AssetNamespaceAndReference(
      data.ASSET_NAMESPACE_AND_REFERENCE_PARAMS
    );
    assertInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new AssetNamespaceAndReference(
      data.ASSET_NAMESPACE_AND_REFERENCE_STRING
    );
    assertInterface(result);
  });

  it("should instantiate from nested params", async () => {
    const result = new AssetNamespaceAndReference(
      data.ASSET_NAMESPACE_AND_REFERENCE_PARAMS
    );
    assertInterface(result);
  });
});
