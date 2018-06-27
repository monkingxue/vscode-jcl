import {
  workspace,
  commands,
  TextDocument,
  languages,
  DiagnosticSeverity,
  Range,
  Diagnostic,
  ExtensionContext,
  TextDocumentChangeEvent,
  window
} from "vscode";

import { JCLinter } from "./linter";
import { runJCL } from "./request";

let diagnosticCollection = languages.createDiagnosticCollection("JCL");

export function activate(context: ExtensionContext) {
  console.log('Congratulations, your extension "vscode-jcl" is now active!');

  let jclinter: JCLinter;
  let code: string;
  let output = window.createOutputChannel("JCL Result");

  workspace.onDidOpenTextDocument((document: TextDocument) => {
    if (document.languageId === "JCL" && document.uri.scheme === "file") {
      jclinter = new JCLinter(document.fileName);
      code = document.getText();
      jclinter.setText(code);
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
        code = event.document.getText();
        jclinter.setText(code);
        processDiagnostic(event.document, jclinter);
      }, 300);
    }
  });

  let disposable = commands.registerCommand("extension.run", () => {
    console.log(code);
    runJCL(code).then(result => {
      output.append(result);
      output.show();
    });
  });

  context.subscriptions.push(output);
  context.subscriptions.push(disposable);
  context.subscriptions.push(diagnosticCollection);
}

// function runJCL(code: string): string {
//   return code;
// }

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
