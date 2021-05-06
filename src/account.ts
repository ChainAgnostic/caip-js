import { ChainID, ChainIDParams } from "./chain";
import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface AccountIDParams {
  chainId: string | ChainIDParams;
  address: string;
}

export class AccountID {
  public static spec: IdentifierSpec = CAIP["10"];

  public static parse(id: string): AccountIDParams {
    if (!isValidId(id, this.spec)) {
      throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
    }
    return new AccountID(getParams<AccountIDParams>(id, this.spec)).toJson();
  }

  public static format(params: AccountIDParams): string {
    return joinParams(params as any, this.spec);
  }

  public chainId: ChainID;
  public address: string;

  constructor(params: AccountIDParams | string) {
    if (typeof params === "string") {
      params = AccountID.parse(params);
    }

    this.chainId = new ChainID(params.chainId);
    this.address = params.address;
  }

  public toString(): string {
    return AccountID.format(this.toJson());
  }

  public toJson(): AccountIDParams {
    return {
      chainId: this.chainId.toJson(),
      address: this.address,
    };
  }
}
