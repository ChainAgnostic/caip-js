import { IdentifierSpec, Params } from "./types";

export function splitParams(id: string, spec: IdentifierSpec): string[] {
  return id.split(spec.parameters.delimiter);
}

export function getParams<T>(id: string, spec: IdentifierSpec): T {
  const arr = splitParams(id, spec);
  const params = {};
  arr.forEach((value, index) => {
    params[spec.parameters.values[index].name] = value;
  });
  return params as T;
}

export function joinParams(params: Params, spec: IdentifierSpec): string {
  return Object.values(spec.parameters.values)
    .map(parameter => {
      const param = params[parameter.name];
      return typeof param === "string"
        ? param
        : joinParams(param, parameter as IdentifierSpec);
    })
    .join(spec.parameters.delimiter);
}

export function isValidId(id: string, spec: IdentifierSpec): boolean {
  // console.log("id", id);
  // console.log("spec", spec);
  // console.log("before regex");
  if (!new RegExp(spec.regex).test(id)) return false;
  // console.log("after regex");
  // console.log("before split");
  const params = splitParams(id, spec);
  // console.log("after split");
  // console.log("params", params);
  // console.log("before length");
  if (params.length !== Object.keys(spec.parameters.values).length)
    return false;
  // console.log("after length");
  // console.log("before matches");
  const matches = params
    .map((param, index) =>
      new RegExp(spec.parameters.values[index].regex).test(param)
    )
    .filter(x => !!x);
  if (matches.length !== params.length) return false;
  // console.log("after matches");
  return true;
}
