import { AssetName, AssetNameParams } from "./assetName";
import { ChainID, ChainIDParams } from "./chain";
import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface AssetTypeParams {
  chainId: string | ChainIDParams;
  assetName: string | AssetNameParams;
}

export class AssetType {
  public static spec: IdentifierSpec = CAIP["19"].assetType;

  public static parse(id: string): AssetTypeParams {
    if (!isValidId(id, this.spec)) {
      throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
    }
    return new AssetType(getParams<AssetTypeParams>(id, this.spec)).toJson();
  }

  public static format(params: AssetTypeParams): string {
    return joinParams(params as any, this.spec);
  }

  public chainId: ChainID;
  public assetName: AssetName;

  constructor(params: AssetTypeParams | string) {
    if (typeof params === "string") {
      params = AssetType.parse(params);
    }

    this.chainId = new ChainID(params.chainId);
    this.assetName = new AssetName(params.assetName);
  }

  public toString(): string {
    return AssetType.format(this.toJson());
  }

  public toJson(): AssetTypeParams {
    return {
      chainId: this.chainId.toJson(),
      assetName: this.assetName,
    };
  }
}
