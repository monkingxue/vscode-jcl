import { Token, CommonTokenFactory, CommonToken } from "antlr4ts";
import { DiagnosticEntry } from ".";
import { ParamsContext, PosValueContext } from "../grammars/JclParser";
import { JclLexer } from "../grammars/JclLexer";

export enum ParamType {
  Pos,
  Kw
}

type rhsValue = string | Param[];

export interface Param {
  type: ParamType;
  payload: PosParam | KwParam;
  token: Token;
}

class PosParam {
  constructor(public data: rhsValue) {}
  public static new(data: rhsValue, token: Token): Param {
    return {
      token,
      type: ParamType.Pos,
      payload: new PosParam(data)
    };
  }
}

class KwParam {
  constructor(public key: string, public value: rhsValue) {}
  public static new(key: string, value: rhsValue, token: Token): Param {
    return {
      token,
      type: ParamType.Kw,
      payload: new KwParam(key, value)
    };
  }
}

export function genDiagnostic(
  message: string,
  offendingToken: Token
): DiagnosticEntry {
  return {
    message,
    range: {
      start: {
        column: offendingToken.charPositionInLine,
        row: offendingToken.line
      },
      end: {
        column:
          offendingToken.charPositionInLine +
          offendingToken.stopIndex -
          offendingToken.startIndex +
          1,
        row: offendingToken.line
      }
    }
  };
}

export function parseParams(params: ParamsContext): Param[] {
  const context = params.param();
  let result: Param[] = [];
  let tempParam: Param;
  for (const param of context) {
    const [posContext, kwContext] = [param.posParam(), param.kwParam()];
    if (posContext) {
      const [value, record] = [posContext.posValue(), posContext.record()];
      if (value) {
        tempParam = PosParam.new(value.text, value.children[0].payload);
      } else {
        tempParam = PosParam.new(
          parseParams(record.params()),
          record.PARAM_LPAREN().payload
        );
      }
    } else if (kwContext) {
      const key = kwContext.VARIA_VALUE().text;
      const kwValue = kwContext.kwValue();
      if (kwValue) {
        const [rhsValue, record] = [kwValue.rhsValue(), kwValue.record()];
        let node: Token;
        if (rhsValue) {
          const posValue = rhsValue.posValue();
          if (posValue) {
            node = posValue.children[0].payload;
          } else {
            node = rhsValue.children[0].payload;
          }
          tempParam = KwParam.new(key, rhsValue.text, node);
        } else if (record) {
          tempParam = KwParam.new(
            key,
            parseParams(record.params()),
            record.PARAM_LPAREN().payload
          );
        }
      } else {
        const text = "";
        const pos = kwContext.PARAM_EQ().payload.stopIndex;
        const source = kwContext.PARAM_EQ().payload.tokenSource;
        tempParam = KwParam.new(
          key,
          text,
          new CommonToken(JclLexer.BLANK, text, { source }, null, pos, pos)
        );
      }
    }
    result.push(tempParam);
  }
  return result;
}
