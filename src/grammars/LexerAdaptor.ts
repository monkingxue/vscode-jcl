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

  // protected limitLength(min: number, max: number): void {
  //   const len = this.text.length;
  //   if (len <= min || len > max) {
  //     const listener = this.getErrorListenerDispatch();
  //     const msg = `token length limit error: '${this.text}'`;
  //     listener.syntaxError(
  //       this,
  //       undefined,
  //       this._tokenStartLine,
  //       this._tokenStartCharPositionInLine,
  //       msg,
  //       null
  //     );
  //   }
  // }
}
