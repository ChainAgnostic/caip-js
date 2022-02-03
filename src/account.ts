import { ChainId, ChainIdParams } from "./chain";
import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface AccountIdSplitParams extends ChainIdParams {
  address: string;
}
export interface AccountIdParams {
  chainId: string | ChainIdParams;
  address: string;
}

export class AccountId {
  public static spec: IdentifierSpec = CAIP["10"];

  public static parse(id: string): AccountIdParams {
    if (!isValidId(id, this.spec)) {
      throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
    }
    const { namespace, reference, address } = getParams<AccountIdSplitParams>(
      id,
      this.spec
    );
    const chainId = new ChainId({ namespace, reference });
    return new AccountId({ chainId, address }).toJSON();
  }

  public static format(params: AccountIdParams): string {
    const chainId = new ChainId(params.chainId);
    const splitParams: AccountIdSplitParams = {
      ...chainId.toJSON(),
      address: params.address,
    };
    return joinParams(splitParams as any, this.spec);
  }

  public chainId: ChainId;
  public address: string;

  constructor(params: AccountIdParams | string) {
    if (typeof params === "string") {
      params = AccountId.parse(params);
    }

    this.chainId = new ChainId(params.chainId);
    this.address = params.address;
  }

  public toString(): string {
    return AccountId.format(this.toJSON());
  }

  public toJSON(): AccountIdParams {
    return {
      chainId: this.chainId.toJSON(),
      address: this.address,
    };
  }
}
