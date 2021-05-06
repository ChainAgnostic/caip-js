import { IdentifierSpec } from "./types";

const CAIP2: IdentifierSpec = {
  name: "chainId",
  regex: "[-:a-zA-Z0-9]{5,64}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "[-a-z0-9]{3,16}",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{1,47}",
      },
    },
  },
};

const CAIP10: IdentifierSpec = {
  name: "accountId",
  regex: "[-@:a-zA-Z0-9]{7,128}",
  parameters: {
    delimiter: "@",
    values: {
      0: {
        name: "address",
        regex: "[a-zA-Z0-9]{1,63}",
      },
      1: CAIP2,
    },
  },
};

// represents namespace:reference in CAIP-19
const AssetNamespaceAndReference: IdentifierSpec = {
  name: "assetNamespaceAndReference",
  regex: "[-:a-zA-Z0-9]{5,128}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "assetNamespace",
        regex: "[-a-z0-9]{3,16}",
      },
      1: {
        name: "assetReference",
        regex: "[-a-zA-Z0-9]{1,47}",
      },
    },
  },
};

const CAIP19AssetType: IdentifierSpec = {
  name: "assetType",
  regex: "[-:a-zA-Z0-9]{7,128}",
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetNamespaceAndReference,
    },
  },
};

const CAIP19AssetId: IdentifierSpec = {
  name: "assetId",
  regex: "[-:a-zA-Z0-9]{7,128}",
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetNamespaceAndReference,
      2: {
        name: "tokenId",
        regex: "[-a-zA-Z0-9]{1,47}",
      },
    },
  },
};

export const CAIP = {
  "2": CAIP2,
  "10": CAIP10,
  "19": {
    assetNamespaceAndReference: AssetNamespaceAndReference,
    assetType: CAIP19AssetType,
    assetId: CAIP19AssetId,
  },
};
