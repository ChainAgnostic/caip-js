export interface ParameterSpec {
  name: string;
  regex: string;
}

export interface IdentifierSpec extends ParameterSpec {
  parameters: {
    delimiter: string;
    values: {
      [index: string]: ParameterSpec;
    };
  };
}

export type KeyValue = { [key: string]: string };

export type Params = { [key: string]: string | KeyValue };
