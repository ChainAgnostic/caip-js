import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface ChainIDParams {
  namespace: string;
  reference: string;
}

export class ChainID {
  public static spec: IdentifierSpec = CAIP["2"];

  public static parse(id: string): ChainIDParams {
    if (!isValidId(id, this.spec)) {
      throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
    }
    return new ChainID(getParams<ChainIDParams>(id, this.spec)).toJson();
  }

  public static format(params: ChainIDParams): string {
    return joinParams(params as any, this.spec);
  }

  public namespace: string;
  public reference: string;

  constructor(params: ChainIDParams | string) {
    if (typeof params === "string") {
      params = ChainID.parse(params);
    }

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
