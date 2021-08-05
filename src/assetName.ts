import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface AssetNameParams {
  namespace: string;
  reference: string;
}

export class AssetName {
  public static spec: IdentifierSpec = CAIP["19"].assetName;

  public static parse(id: string): AssetNameParams {
    if (!isValidId(id, this.spec)) {
      throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
    }
    return new AssetName(getParams<AssetNameParams>(id, this.spec)).toJson();
  }

  public static format(params: AssetNameParams): string {
    return joinParams(params as any, this.spec);
  }

  public namespace: string;
  public reference: string;

  constructor(params: AssetNameParams | string) {
    if (typeof params === "string") {
      params = AssetName.parse(params);
    }

    this.namespace = params.namespace;
    this.reference = params.reference;
  }

  public toString(): string {
    return AssetName.format(this.toJson());
  }

  public toJson(): AssetNameParams {
    return {
      namespace: this.namespace,
      reference: this.reference,
    };
  }
}
