import { Lexer } from "antlr4ts";

export abstract class LexerAdaptor extends Lexer {
  protected getCharPositionInLine(): number {
    return this.interpreter.charPositionInLine;
  }

  protected isContinuation(): boolean {
    const preToken = this.getPreToken();
    return preToken === 44; // ","
  }

  private getPreToken(): number {
    const tokenLen = this.text.length;
    return this._input.LA(-(1 + tokenLen));
  }
}
