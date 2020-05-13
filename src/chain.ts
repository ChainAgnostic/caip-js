interface ChainIDParams {
  namespace: string;
  reference: string;
}

export class ChainID {
  public static standard = "caip-2";
  public static delimiter = ":";

  public static isValid(chainId: string) {
    return chainId.includes(this.delimiter);
  }

  public static parse(chainId: string): ChainID {
    if (!ChainID.isValid(chainId)) {
      throw new Error(`Invalid chainId provided: ${chainId}`);
    }
    const params = chainId.split(this.delimiter);
    return new ChainID({
      namespace: params[0],
      reference: params[1],
    });
  }

  public static format(params: ChainIDParams): string {
    return params.namespace + this.delimiter + params.reference;
  }

  public namespace: string;
  public reference: string;

  constructor(params: ChainIDParams) {
    this.namespace = params.namespace;
    this.reference = params.reference;
  }

  public toString(): string {
    return ChainID.format(this.toJson());
  }

  public toJson(): ChainIDParams {
    return {
      namespace: this.namespace,
      reference: this.reference,
    };
  }
}
