import { ChainID } from "./chain";

interface AccountIDParams {
  chainId: string;
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

  constructor(params: AccountIDParams) {
    this.chainId = ChainID.parse(params.chainId);
    this.address = params.address;
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
