// Generated from grammars/JclParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ProgContext } from './JclParser';
import { LineContext } from './JclParser';
import { CommandContext } from './JclParser';
import { CodeContext } from './JclParser';
import { CommentContext } from './JclParser';
import { DelimiterContext } from './JclParser';
import { StatementContext } from './JclParser';
import { NormalContext } from './JclParser';
import { ConcatenationContext } from './JclParser';
import { ParamsContext } from './JclParser';
import { ParamContext } from './JclParser';
import { PosParamContext } from './JclParser';
import { KwParamContext } from './JclParser';
import { KwValueContext } from './JclParser';
import { PosValueContext } from './JclParser';
import { RhsValueContext } from './JclParser';
import { RecordContext } from './JclParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JclParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JclParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JclParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCode?: (ctx: CodeContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.delimiter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelimiter?: (ctx: DelimiterContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.normal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormal?: (ctx: NormalContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.concatenation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParams?: (ctx: ParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.posParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosParam?: (ctx: PosParamContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.kwParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwParam?: (ctx: KwParamContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.kwValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwValue?: (ctx: KwValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.posValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosValue?: (ctx: PosValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.rhsValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRhsValue?: (ctx: RhsValueContext) => Result;

	/**
	 * Visit a parse tree produced by `JclParser.record`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecord?: (ctx: RecordContext) => Result;
}

