import { ChainID, ChainIDParams } from "./chain";

export interface AccountIDParams {
  chainId: string | ChainIDParams;
  address: string;
}

export class AccountID {
  public static standard = "caip-10";
  public static delimiter = "@";

  public static isValid(accountId: string) {
    return accountId.includes(this.delimiter);
  }

  public static parse(accountId: string): AccountID {
    if (!AccountID.isValid(accountId)) {
      throw new Error(`Invalid accountId provided: ${accountId}`);
    }
    const params = accountId.split(this.delimiter);
    return new AccountID({
      chainId: params[1],
      address: params[0],
    });
  }

  public static format(params: AccountIDParams): string {
    return params.address + this.delimiter + params.chainId;
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
      chainId: this.chainId.toString(),
      address: this.address,
    };
  }
}
