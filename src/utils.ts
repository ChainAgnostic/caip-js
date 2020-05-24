import { StandardSpec, Params } from "./types";

export function splitParams(id: string, spec: StandardSpec): string[] {
  return id.split(spec.delimiter);
}

export function joinParams(params: Params, spec: StandardSpec): string {
  return Object.values(spec.parameters)
    .map(parameter => {
      const param = params[parameter.name];
      return typeof param === "string"
        ? param
        : joinParams(param, parameter as StandardSpec);
    })
    .join(spec.delimiter);
}

export function isValidId(id: string, spec: StandardSpec): boolean {
  if (!new RegExp(spec.regex).test(id)) return false;
  const params = splitParams(id, spec);
  if (params.length !== Object.keys(spec.parameters).length) return false;
  const matches = params
    .map((param, index) => new RegExp(spec.parameters[index].regex).test(param))
    .filter(x => !!x);
  if (matches.length !== params.length) return false;
  return true;
}
