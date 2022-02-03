import { CAIP } from "./spec";
import { IdentifierSpec } from "./types";
import { isValidId, joinParams, getParams } from "./utils";

export interface ChainIdParams {
  namespace: string;
  reference: string;
}

export class ChainId {
  public static spec: IdentifierSpec = CAIP["2"];

  public static parse(id: string): ChainIdParams {
    if (!isValidId(id, this.spec)) {
      throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
    }
    return new ChainId(getParams<ChainIdParams>(id, this.spec)).toJSON();
  }

  public static format(params: ChainIdParams): string {
    return joinParams(params as any, this.spec);
  }

  public namespace: string;
  public reference: string;

  constructor(params: ChainIdParams | string) {
    if (typeof params === "string") {
      params = ChainId.parse(params);
    }

    this.namespace = params.namespace;
    this.reference = params.reference;
  }

  public toString(): string {
    return ChainId.format(this.toJSON());
  }

  public toJSON(): ChainIdParams {
    return {
      namespace: this.namespace,
      reference: this.reference,
    };
  }
}
