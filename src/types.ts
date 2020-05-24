export interface ParameterSpec {
  name: string;
  regex: string;
}

export interface StandardSpec extends ParameterSpec {
  delimiter: string;
  parameters: {
    [index: string]: ParameterSpec;
  };
}

export type KeyValue = { [key: string]: string };

export type Params = { [key: string]: string | KeyValue };
