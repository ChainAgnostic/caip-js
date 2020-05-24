import { CAIP } from "./spec";
import { StandardSpec } from "./types";
import { isValidId, splitParams } from "./utils";

export interface ChainIDParams {
  namespace: string;
  reference: string;
}

export class ChainID {
  public static spec: StandardSpec = CAIP["2"];

  public static parse(chainId: string): ChainID {
    if (!isValidId(chainId, this.spec)) {
      throw new Error(`Invalid chainId provided: ${chainId}`);
    }
    const params = splitParams(chainId, this.spec);
    return new ChainID({
      namespace: params[0],
      reference: params[1],
    });
  }

  public static format(params: ChainIDParams): string {
    return params.namespace + this.spec.delimiter + params.reference;
  }

  public namespace: string;
  public reference: string;

  constructor(params: ChainIDParams | string) {
    if (typeof params === "string") {
      const chainId = ChainID.parse(params);
      this.namespace = chainId.namespace;
      this.reference = chainId.reference;
    } else {
      this.namespace = params.namespace;
      this.reference = params.reference;
    }
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
