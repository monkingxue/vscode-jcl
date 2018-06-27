import { Token, CommonToken } from "antlr4ts";

import { DiagnosticEntry } from "./index";
import { genDiagnostic, parseParams, Param, ParamType } from "./util";
import {
  NormalContext,
  StatementContext,
  ProgContext
} from "../grammars/JclParser";
import { JclParserListener } from "../grammars/JclParserListener";
import { checkParams } from "./paramChecker";

export class SemanticListener implements JclParserListener {
  constructor(private diagnostics: DiagnosticEntry[]) {}
  private symbolMap: Map<string, Token> = new Map();
  private hasJobOp: boolean = false;
  private currentOp: string = "";

  public exitProg(ctx: ProgContext) {}

  public exitStatement(ctx: StatementContext) {
    const fieldId = ctx.FIELD_STATEMENT().payload;
    this.fieldIdPosition(fieldId);

    const context = ctx.params();
    if (context) {
      const params = parseParams(context);
      this.paramsOrder(params);
      this.mismatchParams(this.currentOp, params);
    }
  }

  public exitNormal(ctx: NormalContext) {
    const nameToken: Token = ctx.STATE_NAME().payload;
    const name = nameToken.text;
    this.duplicateSymbol(name, nameToken);
    this.toolongName(name, nameToken);
    this.stateNamePosition(name, nameToken);

    const opToken: Token = ctx.STATE_OP().payload;
    const op = opToken.text;
    this.currentOp = op;
    if (op === "JOB") {
      this.onlyOneJob(opToken);
    } else if (op === "EXEC") {
      this.symbolMap.clear();
    }
  }

  private duplicateSymbol(symbol: string, token: Token) {
    if (this.symbolMap.get(symbol)) {
      let entry: DiagnosticEntry = genDiagnostic(
        `Duplicate field name: '${symbol}'`,
        token
      );
      return this.diagnostics.push(entry);
    }
    this.symbolMap.set(symbol, token);
  }

  private onlyOneJob(token: Token) {
    if (this.hasJobOp) {
      let entry = genDiagnostic(
        "Only one 'JOB' statement should be in a job",
        token
      );
      return this.diagnostics.push(entry);
    }

    this.hasJobOp = true;
  }

  private paramsOrder(params: Param[]) {
    let hasKwParam = false;
    for (let param of params) {
      const type = param.type;
      if (type === ParamType.Kw) {
        hasKwParam = true;
      } else {
        if (hasKwParam) {
          let entry = genDiagnostic(
            "Keyword parameters should be preceded by positional parameters",
            param.token
          );
          return this.diagnostics.push(entry);
        }
      }
    }
  }

  private toolongName(symbol: string, token: Token) {
    if (symbol.length > 8) {
      let entry: DiagnosticEntry = genDiagnostic(
        `Field name is too long: '${symbol}'`,
        token
      );
      return this.diagnostics.push(entry);
    }
  }

  private fieldIdPosition(symbol: Token) {
    if (symbol.charPositionInLine !== 0) {
      let entry: DiagnosticEntry = genDiagnostic(
        `Field ID should start in the 1st column`,
        symbol
      );
      return this.diagnostics.push(entry);
    }
  }

  private stateNamePosition(name: string, symbol: Token) {
    if (symbol.charPositionInLine !== 2) {
      let entry: DiagnosticEntry = genDiagnostic(
        `Field name should start in the 3rd column: '${name}'`,
        symbol
      );
      return this.diagnostics.push(entry);
    }
  }

  private mismatchParams(op: string, params: Param[]) {
    checkParams(op, params)
      .map(({ message, token }) => genDiagnostic(message, token))
      .forEach(item => this.diagnostics.push(item));
  }
}
