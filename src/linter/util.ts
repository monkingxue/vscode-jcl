import { Token, CommonToken } from "antlr4ts";
import { DiagnosticEntry } from ".";
import { ParamsContext } from "../grammars/JclParser";
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

export class PosParam {
  constructor(public data: rhsValue) {}
  public static new(data: rhsValue, token: Token): Param {
    return {
      token,
      type: ParamType.Pos,
      payload: new PosParam(data)
    };
  }
}

export class KwParam {
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
      const keyNode = kwContext.VARIA_VALUE();
      const keyText = keyNode.text;
      const kwValue = kwContext.kwValue();
      if (kwValue) {
        const [rhsValue, record] = [kwValue.rhsValue(), kwValue.record()];
        if (rhsValue) {
          tempParam = KwParam.new(keyText, rhsValue.text, keyNode.payload);
        } else if (record) {
          tempParam = KwParam.new(
            keyText,
            parseParams(record.params()),
            record.PARAM_LPAREN().payload
          );
        }
      } else {
        const text = "";
        const pos = kwContext.PARAM_EQ().payload.stopIndex;
        const source = kwContext.PARAM_EQ().payload.tokenSource;
        tempParam = KwParam.new(
          keyText,
          text,
          new CommonToken(JclLexer.BLANK, text, { source }, null, pos, pos)
        );
      }
    }
    result.push(tempParam);
  }
  return result;
}
