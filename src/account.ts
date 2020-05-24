import { ChainID, ChainIDParams } from "./chain";
import { CAIP } from "./spec";
import { StandardSpec } from "./types";
import { isValidId, splitParams, joinParams } from "./utils";

export interface AccountIDParams {
  chainId: string | ChainIDParams;
  address: string;
}

export class AccountID {
  public static spec: StandardSpec = CAIP["10"];

  public static parse(accountId: string): AccountID {
    if (!isValidId(accountId, this.spec)) {
      throw new Error(`Invalid accountId provided: ${accountId}`);
    }
    const params = splitParams(accountId, this.spec);
    return new AccountID({
      chainId: params[1],
      address: params[0],
    });
  }

  public static format(params: AccountIDParams): string {
    return joinParams(params as any, this.spec);
  }

  public chainId: ChainID;
  public address: string;

  constructor(params: AccountIDParams | string) {
    if (typeof params === "string") {
      const accountId = AccountID.parse(params);
      this.chainId = accountId.chainId;
      this.address = accountId.address;
    } else {
      this.chainId = new ChainID(params.chainId);
      this.address = params.address;
    }
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
