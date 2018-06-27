import { Param, ParamType, KwParam } from "./util";

const JOBSPEC = [
  "CLASS",
  "MSGCLASS",
  "MSGLEVEL",
  "NOTIFY",
  "PRTY",
  "REGION",
  "TIME",
  "TYPRUN",
  "ADDRSPC"
];

const EXECSPEC = ["PGM", "COND", "PARM", "ADDRSPC", "REGION", "TIME", "ACCT"];

const DDSPEC = [
  "DSN",
  "DSNAME",
  "UNIT",
  "VOL",
  "VOLUME",
  "SPACE",
  "DISP",
  "DCB",
  "SYSOUT",
  "LRECL",
  "RECFM",
  "DATACLAS"
];

function specMatch(spec: string[], params: Param[]) {
  let result = [];
  for (let param of params) {
    if (param.type !== ParamType.Kw) {
      continue;
    }
    const token = param.token;
    const kwp = param.payload as KwParam;
    if (spec.indexOf(kwp.key) === -1) {
      result.push({
        message: `Unexpexted paramater: ${kwp.key}`,
        token
      });
    }
  }
  return result;
}

export function checkParams(op: string, params: Param[]) {
  switch (op) {
    case "JOB":
      return specMatch(JOBSPEC, params);
    case "EXEC":
      return specMatch(EXECSPEC, params);
    case "DD":
      return specMatch(DDSPEC, params);
    default:
      return [];
  }
}
