// Generated from grammars/JclParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `JclParser`.
 */
export interface JclParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JclParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.code`.
	 * @param ctx the parse tree
	 */
	enterCode?: (ctx: CodeContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.code`.
	 * @param ctx the parse tree
	 */
	exitCode?: (ctx: CodeContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.delimiter`.
	 * @param ctx the parse tree
	 */
	enterDelimiter?: (ctx: DelimiterContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.delimiter`.
	 * @param ctx the parse tree
	 */
	exitDelimiter?: (ctx: DelimiterContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.normal`.
	 * @param ctx the parse tree
	 */
	enterNormal?: (ctx: NormalContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.normal`.
	 * @param ctx the parse tree
	 */
	exitNormal?: (ctx: NormalContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.concatenation`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.concatenation`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.params`.
	 * @param ctx the parse tree
	 */
	enterParams?: (ctx: ParamsContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.params`.
	 * @param ctx the parse tree
	 */
	exitParams?: (ctx: ParamsContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.posParam`.
	 * @param ctx the parse tree
	 */
	enterPosParam?: (ctx: PosParamContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.posParam`.
	 * @param ctx the parse tree
	 */
	exitPosParam?: (ctx: PosParamContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.kwParam`.
	 * @param ctx the parse tree
	 */
	enterKwParam?: (ctx: KwParamContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.kwParam`.
	 * @param ctx the parse tree
	 */
	exitKwParam?: (ctx: KwParamContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.kwValue`.
	 * @param ctx the parse tree
	 */
	enterKwValue?: (ctx: KwValueContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.kwValue`.
	 * @param ctx the parse tree
	 */
	exitKwValue?: (ctx: KwValueContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.posValue`.
	 * @param ctx the parse tree
	 */
	enterPosValue?: (ctx: PosValueContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.posValue`.
	 * @param ctx the parse tree
	 */
	exitPosValue?: (ctx: PosValueContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.rhsValue`.
	 * @param ctx the parse tree
	 */
	enterRhsValue?: (ctx: RhsValueContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.rhsValue`.
	 * @param ctx the parse tree
	 */
	exitRhsValue?: (ctx: RhsValueContext) => void;

	/**
	 * Enter a parse tree produced by `JclParser.record`.
	 * @param ctx the parse tree
	 */
	enterRecord?: (ctx: RecordContext) => void;
	/**
	 * Exit a parse tree produced by `JclParser.record`.
	 * @param ctx the parse tree
	 */
	exitRecord?: (ctx: RecordContext) => void;
}

