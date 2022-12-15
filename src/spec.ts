import { IdentifierSpec } from "./types";

const REGEX = {
  namespace: "[-a-z0-9]{3,8}",
  reference: "[-a-zA-Z0-9]{1,32}",
  address: "[a-zA-Z0-9]{1,64}",
};

const CAIP2: IdentifierSpec = {
  name: "chainId",
  regex: "[-:a-zA-Z0-9]{5,41}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: REGEX.namespace,
      },
      1: {
        name: "reference",
        regex: REGEX.reference,
      },
    },
  },
};

const CAIP10: IdentifierSpec = {
  name: "accountId",
  regex: "[-:a-zA-Z0-9]{7,106}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: REGEX.namespace,
      },
      1: {
        name: "reference",
        regex: REGEX.reference,
      },
      2: {
        name: "address",
        regex: REGEX.address,
      },
    },
  },
};

// represents namespace:reference in CAIP-19
const AssetName: IdentifierSpec = {
  name: "assetName",
  regex: "[-:a-zA-Z0-9]{5,73}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: REGEX.namespace,
      },
      1: {
        name: "reference",
        regex: REGEX.reference,
      },
    },
  },
};

const CAIP19AssetType: IdentifierSpec = {
  name: "assetType",
  regex: "[-:a-zA-Z0-9]{11,115}",
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
    },
  },
};

const CAIP19AssetId: IdentifierSpec = {
  name: "assetId",
  regex: "[-:a-zA-Z0-9]{13,148}",
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
      2: {
        name: "tokenId",
        regex: "[-a-zA-Z0-9]{1,32}",
      },
    },
  },
};

export const CAIP = {
  "2": CAIP2,
  "10": CAIP10,
  "19": {
    assetName: AssetName,
    assetType: CAIP19AssetType,
    assetId: CAIP19AssetId,
  },
};
