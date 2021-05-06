import { AssetIdParams, AssetTypeParams } from "../../src";
import { AssetNamespaceAndReferenceParams } from "../../src/assetNamespaceAndReference";

// ChainID Data Points
export const CHAIN_ID_DELIMITER = ":";
export const CHAIN_ID_NAMESPACE = "eip155";
export const CHAIN_ID_REFERENCE = "1";
export const CHAIN_ID_STRING =
  CHAIN_ID_NAMESPACE + CHAIN_ID_DELIMITER + CHAIN_ID_REFERENCE;
export const CHAIN_ID_PARAMS = {
  namespace: CHAIN_ID_NAMESPACE,
  reference: CHAIN_ID_REFERENCE,
};

// AccountID Data Points
export const ACCOUNT_ID_DELIMITER = "@";
export const ACCOUNT_ID_ADDRESS = "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb";
export const ACCOUNT_ID_STRING =
  ACCOUNT_ID_ADDRESS + ACCOUNT_ID_DELIMITER + CHAIN_ID_STRING;
export const ACCOUNT_ID_PARAMS = {
  chainId: CHAIN_ID_STRING,
  address: ACCOUNT_ID_ADDRESS,
};

export const ACCOUNT_ID_NESTED_PARAMS = {
  chainId: CHAIN_ID_PARAMS,
  address: ACCOUNT_ID_ADDRESS,
};

// AssetNamespaceAndReference Data Points
export const ASSET_NAMESPACE_REFERENCE_DELIMITER = ":";
export const ASSET_NAMESPACE = "namespace";
export const ASSET_REFERENCE = "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb";
export const ASSET_NAMESPACE_AND_REFERENCE_STRING = `${ASSET_NAMESPACE}${ASSET_NAMESPACE_REFERENCE_DELIMITER}${ASSET_REFERENCE}`;
export const ASSET_NAMESPACE_AND_REFERENCE_PARAMS: AssetNamespaceAndReferenceParams = {
  assetNamespace: ASSET_NAMESPACE,
  assetReference: ASSET_REFERENCE,
};

// AssetType Data Points
export const ASSET_TYPE_STRING = `${CHAIN_ID_STRING}/${ASSET_NAMESPACE_AND_REFERENCE_STRING}`;
export const ASSET_TYPE_PARAMS: AssetTypeParams = {
  chainId: CHAIN_ID_STRING,
  assetNamespaceAndReference: ASSET_NAMESPACE_AND_REFERENCE_STRING,
};

export const ASSET_TYPE_NESTED_PARAMS: AssetTypeParams = {
  chainId: CHAIN_ID_PARAMS,
  assetNamespaceAndReference: ASSET_NAMESPACE_AND_REFERENCE_PARAMS,
};

// AssetType Data Points
export const TOKEN_ID = "1";
export const ASSET_ID_STRING = `${ASSET_TYPE_STRING}/${TOKEN_ID}`;
export const ASSET_ID_PARAMS: AssetIdParams = {
  chainId: CHAIN_ID_STRING,
  assetNamespaceAndReference: ASSET_NAMESPACE_AND_REFERENCE_STRING,
  tokenId: TOKEN_ID,
};

export const ASSET_ID_NESTED_PARAMS: AssetIdParams = {
  chainId: CHAIN_ID_PARAMS,
  assetNamespaceAndReference: ASSET_NAMESPACE_AND_REFERENCE_PARAMS,
  tokenId: TOKEN_ID,
};
