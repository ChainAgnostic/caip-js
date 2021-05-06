import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface AssetNamespaceAndReferenceParams {
  assetNamespace: string;
  assetReference: string;
}

export class AssetNamespaceAndReference {
  public static spec: IdentifierSpec = CAIP["19"].assetNamespaceAndReference;

  public static parse(id: string): AssetNamespaceAndReferenceParams {
    if (!isValidId(id, this.spec)) {
      throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
    }
    return new AssetNamespaceAndReference(
      getParams<AssetNamespaceAndReferenceParams>(id, this.spec)
    ).toJson();
  }

  public static format(params: AssetNamespaceAndReferenceParams): string {
    return joinParams(params as any, this.spec);
  }

  public assetNamespace: string;
  public assetReference: string;

  constructor(params: AssetNamespaceAndReferenceParams | string) {
    if (typeof params === "string") {
      params = AssetNamespaceAndReference.parse(params);
    }

    this.assetNamespace = params.assetNamespace;
    this.assetReference = params.assetReference;
  }

  public toString(): string {
    return AssetNamespaceAndReference.format(this.toJson());
  }

  public toJson(): AssetNamespaceAndReferenceParams {
    return {
      assetNamespace: this.assetNamespace,
      assetReference: this.assetReference,
    };
  }
}
