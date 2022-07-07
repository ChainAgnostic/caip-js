import { AssetId, AssetIdParams } from "./assetId";
import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface TokenURIParams {
  assetId: string | AssetIdParams;
  blockNumberTag: string;
}

export class TokenURI {
  public static spec: IdentifierSpec = CAIP["19"].tokenURI;

  public static parse(id: string): TokenURIParams {
    if (!isValidId(id, this.spec)) {
      throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
    }
    return new TokenURI(getParams<TokenURIParams>(id, this.spec)).toJSON();
  }

  public static format(params: TokenURIParams): string {
    return joinParams(params as any, this.spec);
  }

  public assetId: AssetId;
  public blockNumberTag: string;

  constructor(params: TokenURIParams | string) {
    if (typeof params === "string") {
      params = TokenURI.parse(params);
    }

    this.assetId = new AssetId(params.assetId);
    this.blockNumberTag = params.blockNumberTag;
  }

  public toString(): string {
    return TokenURI.format(this.toJSON());
  }

  public toJSON(): TokenURIParams {
    return {
      assetId: this.assetId,
      blockNumberTag: this.blockNumberTag,
    };
  }
}
