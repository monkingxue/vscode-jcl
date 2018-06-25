import {
  workspace,
  TextDocument,
  languages,
  DiagnosticSeverity,
  Range,
  Diagnostic,
  ExtensionContext,
  TextDocumentChangeEvent
} from "vscode";

import { JCLinter } from "./linter";

let diagnosticCollection = languages.createDiagnosticCollection("JCL");

export function activate(context: ExtensionContext) {
  console.log('Congratulations, your extension "vscode-jcl" is now active!');

  let jclinter: JCLinter;
  context.subscriptions.push(diagnosticCollection);

  workspace.onDidOpenTextDocument((document: TextDocument) => {
    if (document.languageId === "JCL" && document.uri.scheme === "file") {
      jclinter = new JCLinter(document.fileName);
      jclinter.setText(document.getText());
      processDiagnostic(document, jclinter);
    }
  });

  workspace.onDidCloseTextDocument((document: TextDocument) => {
    if (document.languageId === "JCL" && document.uri.scheme === "file") {
      diagnosticCollection.set(document.uri, []);
    }
  });

  let timer: any;
  workspace.onDidChangeTextDocument((event: TextDocumentChangeEvent) => {
    if (
      event.contentChanges.length > 0 &&
      event.document.languageId === "JCL" &&
      event.document.uri.scheme === "file"
    ) {
      if (!jclinter) {
        jclinter = new JCLinter(event.document.fileName);
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer = null;
        jclinter.setText(event.document.getText());
        processDiagnostic(event.document, jclinter);
      }, 300);
    }
  });
}

function processDiagnostic(document: TextDocument, jclinter: JCLinter) {
  let diagnostics = [];
  jclinter.parse();
  let entries = jclinter.diagnostics;
  for (let entry of entries) {
    let startRow = entry.range.start.row === 0 ? 0 : entry.range.start.row - 1;
    let endRow = entry.range.end.row === 0 ? 0 : entry.range.end.row - 1;
    let range = new Range(
      startRow,
      entry.range.start.column,
      endRow,
      entry.range.end.column
    );
    let diagnostic = new Diagnostic(
      range,
      entry.message,
      DiagnosticSeverity.Error
    );
    diagnostics.push(diagnostic);
  }
  diagnosticCollection.set(document.uri, diagnostics);
}

// this method is called when your extension is deactivated
export function deactivate() {}
