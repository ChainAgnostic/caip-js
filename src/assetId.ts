import { AssetName, AssetNameParams } from "./assetName";
import { ChainId, ChainIdParams } from "./chain";
import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface AssetIdParams {
  chainId: string | ChainIdParams;
  assetName: string | AssetNameParams;
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

  public chainId: ChainId;
  public assetName: AssetName;
  public tokenId: string;

  constructor(params: AssetIdParams | string) {
    if (typeof params === "string") {
      params = AssetId.parse(params);
    }

    this.chainId = new ChainId(params.chainId);
    this.assetName = new AssetName(params.assetName);
    this.tokenId = params.tokenId;
  }

  public toString(): string {
    return AssetId.format(this.toJson());
  }

  public toJson(): AssetIdParams {
    return {
      chainId: this.chainId.toJson(),
      assetName: this.assetName.toJson(),
      tokenId: this.tokenId,
    };
  }
}
