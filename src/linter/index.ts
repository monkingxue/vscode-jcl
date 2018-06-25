import * as path from "path";
import * as util from "util";
import {
  ANTLRInputStream,
  CommonTokenStream,
  BailErrorStrategy,
  DefaultErrorStrategy
} from "antlr4ts";
import { PredictionMode } from "antlr4ts/atn";
import { ParseCancellationException } from "antlr4ts/misc";
import { ParseTreeWalker, ParseTreeListener } from "antlr4ts/tree";

import { JclLexer } from "../grammars/JclLexer";
import { JclParser, ProgContext } from "../grammars/JclParser";
import {
  ContextErrorListener,
  ContextLexerErrorListener
} from "./errorListener";
import { SemanticListener } from "./semanticListener";

export class LexicalRange {
  start: { column: number; row: number };
  end: { column: number; row: number };
}

export class DiagnosticEntry {
  message: string;
  range: LexicalRange;
}

export class JCLinter {
  public diagnostics: DiagnosticEntry[] = [];
  public sourceId: string;

  private tokenStream: CommonTokenStream;
  private parser: JclParser | undefined;
  private errorListener: ContextErrorListener = new ContextErrorListener(
    this.diagnostics
  );
  private lexerErrorListener: ContextLexerErrorListener = new ContextLexerErrorListener(
    this.diagnostics
  );
  private tree: ProgContext | undefined;

  constructor(public fileName: string) {
    this.sourceId = path.basename(fileName, path.extname(fileName));
  }

  public setText(source: string) {
    let input = new ANTLRInputStream(source);
    let lexer = new JclLexer(input);

    lexer.removeErrorListeners();
    lexer.addErrorListener(this.lexerErrorListener);
    this.tokenStream = new CommonTokenStream(lexer);
    this.parser = undefined;
    this.tree = undefined;
  }

  public parse(): void {
    this.tokenStream.seek(0);
    this.parser = new JclParser(this.tokenStream);
    this.parser.removeErrorListeners();
    this.parser.addErrorListener(this.errorListener);

    this.parser.errorHandler = new BailErrorStrategy();
    this.parser.interpreter.setPredictionMode(PredictionMode.SLL);

    this.diagnostics.length = 0;

    try {
      this.tree = this.parser.prog();
    } catch (e) {
      if (e instanceof ParseCancellationException) {
        this.tokenStream.seek(0);
        this.parser.reset();
        this.parser.errorHandler = new DefaultErrorStrategy();
        this.parser.interpreter.setPredictionMode(PredictionMode.LL);
        this.tree = this.parser.prog();
      } else {
        throw e;
      }
    }

    let listener: SemanticListener = new SemanticListener(this.diagnostics);
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, this.tree);
  }
}
