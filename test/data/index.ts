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
