import { ChainID, ChainIDParams } from "./chain";
import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface AccountIdSplitParams extends ChainIDParams {
  address: string;
}
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
    const { namespace, reference, address } = getParams<AccountIdSplitParams>(
      id,
      this.spec
    );
    const chainId = new ChainID({ namespace, reference });
    return new AccountID({ chainId, address }).toJson();
  }

  public static format(params: AccountIDParams): string {
    const chainId = new ChainID(params.chainId);
    const splitParams: AccountIdSplitParams = {
      ...chainId.toJson(),
      address: params.address,
    };
    return joinParams(splitParams as any, this.spec);
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
