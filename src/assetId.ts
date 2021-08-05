import {
  AssetNamespaceAndReference,
  AssetNamespaceAndReferenceParams,
} from "./assetNamespaceAndReference";
import { ChainID, ChainIDParams } from "./chain";
import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface AssetIdParams {
  chainId: string | ChainIDParams;
  assetNamespaceAndReference: string | AssetNamespaceAndReferenceParams;
  tokenId: string;
}

export class AssetId {
  public static spec: IdentifierSpec = CAIP["19"].assetId;

  public static parse(id: string): AssetIdParams {
    if (!isValidId(id, this.spec)) {
      throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
    }
    return new AssetId(getParams<AssetIdParams>(id, this.spec)).toJson();
  }

  public static format(params: AssetIdParams): string {
    return joinParams(params as any, this.spec);
  }

  public chainId: ChainID;
  public assetNamespaceAndReference: AssetNamespaceAndReference;
  public tokenId: string;

  constructor(params: AssetIdParams | string) {
    if (typeof params === "string") {
      params = AssetId.parse(params);
    }

    this.chainId = new ChainID(params.chainId);
    this.assetNamespaceAndReference = new AssetNamespaceAndReference(
      params.assetNamespaceAndReference
    );
    this.tokenId = params.tokenId;
  }

  public toString(): string {
    return AssetId.format(this.toJson());
  }

  public toJson(): AssetIdParams {
    return {
      chainId: this.chainId.toJson(),
      assetNamespaceAndReference: this.assetNamespaceAndReference.toJson(),
      tokenId: this.tokenId,
    };
  }
}
