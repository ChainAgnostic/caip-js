import { AssetIdParams, AssetTypeParams } from "../../src";
import { TokenURIParams } from "../../src";
import { AssetNameParams } from "../../src/assetName";

// ChainId Data Points
export const CHAIN_ID_DELIMITER = ":";
export const CHAIN_ID_NAMESPACE = "eip155";
export const CHAIN_ID_REFERENCE = "1";
export const CHAIN_ID_STRING =
  CHAIN_ID_NAMESPACE + CHAIN_ID_DELIMITER + CHAIN_ID_REFERENCE;
export const CHAIN_ID_PARAMS = {
  namespace: CHAIN_ID_NAMESPACE,
  reference: CHAIN_ID_REFERENCE,
};

// AccountId Data Points
export const ACCOUNT_ID_DELIMITER = ":";
export const ACCOUNT_ID_ADDRESS = "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb";
export const ACCOUNT_ID_STRING =
  CHAIN_ID_STRING + ACCOUNT_ID_DELIMITER + ACCOUNT_ID_ADDRESS;
export const ACCOUNT_ID_PARAMS = {
  chainId: CHAIN_ID_STRING,
  address: ACCOUNT_ID_ADDRESS,
};

export const ACCOUNT_ID_NESTED_PARAMS = {
  chainId: CHAIN_ID_PARAMS,
  address: ACCOUNT_ID_ADDRESS,
};

// AssetName Data Points
export const ASSET_NAME_DELIMITER = ":";
export const ASSET_NAMESPACE = "erc721";
export const ASSET_REFERENCE = "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb";
export const ASSET_NAME_STRING = `${ASSET_NAMESPACE}${ASSET_NAME_DELIMITER}${ASSET_REFERENCE}`;
export const ASSET_NAME_PARAMS: AssetNameParams = {
  namespace: ASSET_NAMESPACE,
  reference: ASSET_REFERENCE,
};

// AssetType Data Points
export const ASSET_TYPE_STRING = `${CHAIN_ID_STRING}/${ASSET_NAME_STRING}`;
export const ASSET_TYPE_PARAMS: AssetTypeParams = {
  chainId: CHAIN_ID_STRING,
  assetName: ASSET_NAME_STRING,
};

export const ASSET_TYPE_NESTED_PARAMS: AssetTypeParams = {
  chainId: CHAIN_ID_PARAMS,
  assetName: ASSET_NAME_PARAMS,
};

// AssetType Data Points
export const TOKEN_ID = "1";
export const ASSET_ID_STRING = `${ASSET_TYPE_STRING}/${TOKEN_ID}`;
export const ASSET_ID_PARAMS: AssetIdParams = {
  chainId: CHAIN_ID_STRING,
  assetName: ASSET_NAME_STRING,
  tokenId: TOKEN_ID,
};

export const ASSET_ID_NESTED_PARAMS: AssetIdParams = {
  chainId: CHAIN_ID_PARAMS,
  assetName: ASSET_NAME_PARAMS,
  tokenId: TOKEN_ID,
};

export const BLOCK_NUMBER_TAG = "123";
export const TOKEN_URI_STRING = `${ASSET_ID_STRING}#${BLOCK_NUMBER_TAG}`;
export const TOKEN_URI_PARAMS: TokenURIParams = {
  assetId: ASSET_ID_STRING,
  blockNumberTag: BLOCK_NUMBER_TAG,
};

export const TOKEN_URI_NESTED_PARAMS: TokenURIParams = {
  assetId: ASSET_ID_NESTED_PARAMS,
  blockNumberTag: BLOCK_NUMBER_TAG,
};
