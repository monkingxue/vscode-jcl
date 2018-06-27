// Generated from grammars/JclParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { JclParserListener } from './JclParserListener';
import { JclParserVisitor } from './JclParserVisitor';


export class JclParser extends Parser {
	public static readonly COMMAND=1;
	public static readonly FIELD_COMMENT=2;
	public static readonly FIELD_DELIMITER=3;
	public static readonly FIELD_STATEMENT=4;
	public static readonly NEW_LINE=5;
	public static readonly BLANK=6;
	public static readonly COMMENT=7;
	public static readonly DELIMITER_COMMENT=8;
	public static readonly DELIMITER_NL=9;
	public static readonly STATE_OP=10;
	public static readonly STATE_NAME=11;
	public static readonly STATE_BLANK=12;
	public static readonly STATE_NL=13;
	public static readonly PRE_PARAM_NL=14;
	public static readonly PRE_PARAM_BLANK=15;
	public static readonly PARAM_COMMA=16;
	public static readonly PARAM_LPAREN=17;
	public static readonly PARAM_RPAREN=18;
	public static readonly PARAM_EQ=19;
	public static readonly VARIA_VALUE=20;
	public static readonly PARAM_ADDR=21;
	public static readonly STAR_VALUE=22;
	public static readonly LITERAL_VALUE=23;
	public static readonly NUMBERAL_VALUE=24;
	public static readonly DOT_VALUE=25;
	public static readonly ADDR_VALUE=26;
	public static readonly PARAM_BLANK=27;
	public static readonly PARAM_CONT_NL=28;
	public static readonly PARAM_NL=29;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_command = 2;
	public static readonly RULE_code = 3;
	public static readonly RULE_comment = 4;
	public static readonly RULE_delimiter = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_normal = 7;
	public static readonly RULE_concatenation = 8;
	public static readonly RULE_params = 9;
	public static readonly RULE_param = 10;
	public static readonly RULE_posParam = 11;
	public static readonly RULE_kwParam = 12;
	public static readonly RULE_kwValue = 13;
	public static readonly RULE_posValue = 14;
	public static readonly RULE_rhsValue = 15;
	public static readonly RULE_record = 16;
	public static readonly ruleNames: string[] = [
		"prog", "line", "command", "code", "comment", "delimiter", "statement", 
		"normal", "concatenation", "params", "param", "posParam", "kwParam", "kwValue", 
		"posValue", "rhsValue", "record"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, "'//*'", "'/*'", "'//'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "COMMAND", "FIELD_COMMENT", "FIELD_DELIMITER", "FIELD_STATEMENT", 
		"NEW_LINE", "BLANK", "COMMENT", "DELIMITER_COMMENT", "DELIMITER_NL", "STATE_OP", 
		"STATE_NAME", "STATE_BLANK", "STATE_NL", "PRE_PARAM_NL", "PRE_PARAM_BLANK", 
		"PARAM_COMMA", "PARAM_LPAREN", "PARAM_RPAREN", "PARAM_EQ", "VARIA_VALUE", 
		"PARAM_ADDR", "STAR_VALUE", "LITERAL_VALUE", "NUMBERAL_VALUE", "DOT_VALUE", 
		"ADDR_VALUE", "PARAM_BLANK", "PARAM_CONT_NL", "PARAM_NL"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JclParser._LITERAL_NAMES, JclParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return JclParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "JclParser.g4"; }

	@Override
	public get ruleNames(): string[] { return JclParser.ruleNames; }

	@Override
	public get serializedATN(): string { return JclParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JclParser._ATN, this);
	}
	@RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JclParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JclParser.COMMAND) | (1 << JclParser.FIELD_COMMENT) | (1 << JclParser.FIELD_DELIMITER) | (1 << JclParser.FIELD_STATEMENT))) !== 0)) {
				{
				{
				this.state = 34;
				this.line();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 40;
			this.match(JclParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JclParser.RULE_line);
		try {
			this.state = 44;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JclParser.FIELD_COMMENT:
			case JclParser.FIELD_DELIMITER:
			case JclParser.FIELD_STATEMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.code();
				}
				break;
			case JclParser.COMMAND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.command();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JclParser.RULE_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(JclParser.COMMAND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public code(): CodeContext {
		let _localctx: CodeContext = new CodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JclParser.RULE_code);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JclParser.FIELD_STATEMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.statement();
				}
				break;
			case JclParser.FIELD_COMMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.comment();
				}
				break;
			case JclParser.FIELD_DELIMITER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.delimiter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JclParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(JclParser.FIELD_COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public delimiter(): DelimiterContext {
		let _localctx: DelimiterContext = new DelimiterContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JclParser.RULE_delimiter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(JclParser.FIELD_DELIMITER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JclParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(JclParser.FIELD_STATEMENT);
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JclParser.STATE_NAME:
				{
				this.state = 58;
				this.normal();
				}
				break;
			case JclParser.STATE_OP:
				{
				this.state = 59;
				this.concatenation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JclParser.PARAM_LPAREN) | (1 << JclParser.VARIA_VALUE) | (1 << JclParser.STAR_VALUE) | (1 << JclParser.LITERAL_VALUE) | (1 << JclParser.NUMBERAL_VALUE))) !== 0)) {
				{
				this.state = 62;
				this.params();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public normal(): NormalContext {
		let _localctx: NormalContext = new NormalContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JclParser.RULE_normal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(JclParser.STATE_NAME);
			this.state = 66;
			this.match(JclParser.STATE_OP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public concatenation(): ConcatenationContext {
		let _localctx: ConcatenationContext = new ConcatenationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JclParser.RULE_concatenation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(JclParser.STATE_OP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public params(): ParamsContext {
		let _localctx: ParamsContext = new ParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JclParser.RULE_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.param();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===JclParser.PARAM_COMMA) {
				{
				{
				this.state = 71;
				this.match(JclParser.PARAM_COMMA);
				this.state = 72;
				this.param();
				}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JclParser.RULE_param);
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 78;
				this.posParam();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 79;
				this.kwParam();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public posParam(): PosParamContext {
		let _localctx: PosParamContext = new PosParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JclParser.RULE_posParam);
		try {
			this.state = 84;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JclParser.VARIA_VALUE:
			case JclParser.STAR_VALUE:
			case JclParser.LITERAL_VALUE:
			case JclParser.NUMBERAL_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.posValue();
				}
				break;
			case JclParser.PARAM_LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.record();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwParam(): KwParamContext {
		let _localctx: KwParamContext = new KwParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JclParser.RULE_kwParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(JclParser.VARIA_VALUE);
			this.state = 87;
			this.match(JclParser.PARAM_EQ);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JclParser.PARAM_LPAREN) | (1 << JclParser.VARIA_VALUE) | (1 << JclParser.STAR_VALUE) | (1 << JclParser.LITERAL_VALUE) | (1 << JclParser.NUMBERAL_VALUE) | (1 << JclParser.DOT_VALUE) | (1 << JclParser.ADDR_VALUE))) !== 0)) {
				{
				this.state = 88;
				this.kwValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwValue(): KwValueContext {
		let _localctx: KwValueContext = new KwValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JclParser.RULE_kwValue);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JclParser.VARIA_VALUE:
			case JclParser.STAR_VALUE:
			case JclParser.LITERAL_VALUE:
			case JclParser.NUMBERAL_VALUE:
			case JclParser.DOT_VALUE:
			case JclParser.ADDR_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.rhsValue();
				}
				break;
			case JclParser.PARAM_LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.record();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public posValue(): PosValueContext {
		let _localctx: PosValueContext = new PosValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JclParser.RULE_posValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JclParser.VARIA_VALUE) | (1 << JclParser.STAR_VALUE) | (1 << JclParser.LITERAL_VALUE) | (1 << JclParser.NUMBERAL_VALUE))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rhsValue(): RhsValueContext {
		let _localctx: RhsValueContext = new RhsValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JclParser.RULE_rhsValue);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JclParser.VARIA_VALUE:
			case JclParser.STAR_VALUE:
			case JclParser.LITERAL_VALUE:
			case JclParser.NUMBERAL_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				this.posValue();
				}
				break;
			case JclParser.DOT_VALUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.match(JclParser.DOT_VALUE);
				}
				break;
			case JclParser.ADDR_VALUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 99;
				this.match(JclParser.ADDR_VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public record(): RecordContext {
		let _localctx: RecordContext = new RecordContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JclParser.RULE_record);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(JclParser.PARAM_LPAREN);
			this.state = 103;
			this.params();
			this.state = 104;
			this.match(JclParser.PARAM_RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1Fm\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03"+
		"\x02\x07\x02&\n\x02\f\x02\x0E\x02)\v\x02\x03\x02\x03\x02\x03\x03\x03\x03"+
		"\x05\x03/\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x05\x056\n\x05"+
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b?\n\b\x03\b\x05"+
		"\bB\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x07\vL\n\v\f\v"+
		"\x0E\vO\v\v\x03\f\x03\f\x05\fS\n\f\x03\r\x03\r\x05\rW\n\r\x03\x0E\x03"+
		"\x0E\x03\x0E\x05\x0E\\\n\x0E\x03\x0F\x03\x0F\x05\x0F`\n\x0F\x03\x10\x03"+
		"\x10\x03\x11\x03\x11\x03\x11\x05\x11g\n\x11\x03\x12\x03\x12\x03\x12\x03"+
		"\x12\x03\x12\x02\x02\x02\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02"+
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02"+
		" \x02\"\x02\x02\x03\x04\x02\x16\x16\x18\x1Ah\x02\'\x03\x02\x02\x02\x04"+
		".\x03\x02\x02\x02\x060\x03\x02\x02\x02\b5\x03\x02\x02\x02\n7\x03\x02\x02"+
		"\x02\f9\x03\x02\x02\x02\x0E;\x03\x02\x02\x02\x10C\x03\x02\x02\x02\x12"+
		"F\x03\x02\x02\x02\x14H\x03\x02\x02\x02\x16R\x03\x02\x02\x02\x18V\x03\x02"+
		"\x02\x02\x1AX\x03\x02\x02\x02\x1C_\x03\x02\x02\x02\x1Ea\x03\x02\x02\x02"+
		" f\x03\x02\x02\x02\"h\x03\x02\x02\x02$&\x05\x04\x03\x02%$\x03\x02\x02"+
		"\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(*\x03\x02"+
		"\x02\x02)\'\x03\x02\x02\x02*+\x07\x02\x02\x03+\x03\x03\x02\x02\x02,/\x05"+
		"\b\x05\x02-/\x05\x06\x04\x02.,\x03\x02\x02\x02.-\x03\x02\x02\x02/\x05"+
		"\x03\x02\x02\x0201\x07\x03\x02\x021\x07\x03\x02\x02\x0226\x05\x0E\b\x02"+
		"36\x05\n\x06\x0246\x05\f\x07\x0252\x03\x02\x02\x0253\x03\x02\x02\x025"+
		"4\x03\x02\x02\x026\t\x03\x02\x02\x0278\x07\x04\x02\x028\v\x03\x02\x02"+
		"\x029:\x07\x05\x02\x02:\r\x03\x02\x02\x02;>\x07\x06\x02\x02<?\x05\x10"+
		"\t\x02=?\x05\x12\n\x02><\x03\x02\x02\x02>=\x03\x02\x02\x02?A\x03\x02\x02"+
		"\x02@B\x05\x14\v\x02A@\x03\x02\x02\x02AB\x03\x02\x02\x02B\x0F\x03\x02"+
		"\x02\x02CD\x07\r\x02\x02DE\x07\f\x02\x02E\x11\x03\x02\x02\x02FG\x07\f"+
		"\x02\x02G\x13\x03\x02\x02\x02HM\x05\x16\f\x02IJ\x07\x12\x02\x02JL\x05"+
		"\x16\f\x02KI\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03"+
		"\x02\x02\x02N\x15\x03\x02\x02\x02OM\x03\x02\x02\x02PS\x05\x18\r\x02QS"+
		"\x05\x1A\x0E\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02S\x17\x03\x02\x02"+
		"\x02TW\x05\x1E\x10\x02UW\x05\"\x12\x02VT\x03\x02\x02\x02VU\x03\x02\x02"+
		"\x02W\x19\x03\x02\x02\x02XY\x07\x16\x02\x02Y[\x07\x15\x02\x02Z\\\x05\x1C"+
		"\x0F\x02[Z\x03\x02\x02\x02[\\\x03\x02\x02\x02\\\x1B\x03\x02\x02\x02]`"+
		"\x05 \x11\x02^`\x05\"\x12\x02_]\x03\x02\x02\x02_^\x03\x02\x02\x02`\x1D"+
		"\x03\x02\x02\x02ab\t\x02\x02\x02b\x1F\x03\x02\x02\x02cg\x05\x1E\x10\x02"+
		"dg\x07\x1B\x02\x02eg\x07\x1C\x02\x02fc\x03\x02\x02\x02fd\x03\x02\x02\x02"+
		"fe\x03\x02\x02\x02g!\x03\x02\x02\x02hi\x07\x13\x02\x02ij\x05\x14\v\x02"+
		"jk\x07\x14\x02\x02k#\x03\x02\x02\x02\r\'.5>AMRV[_f";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JclParser.__ATN) {
			JclParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JclParser._serializedATN));
		}

		return JclParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JclParser.EOF, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_prog; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterProg) listener.enterProg(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitProg) listener.exitProg(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitProg) return visitor.visitProg(this);
		else return visitor.visitChildren(this);
	}
}


export class LineContext extends ParserRuleContext {
	public code(): CodeContext | undefined {
		return this.tryGetRuleContext(0, CodeContext);
	}
	public command(): CommandContext | undefined {
		return this.tryGetRuleContext(0, CommandContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_line; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterLine) listener.enterLine(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitLine) listener.exitLine(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitLine) return visitor.visitLine(this);
		else return visitor.visitChildren(this);
	}
}


export class CommandContext extends ParserRuleContext {
	public COMMAND(): TerminalNode { return this.getToken(JclParser.COMMAND, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_command; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterCommand) listener.enterCommand(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitCommand) listener.exitCommand(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitCommand) return visitor.visitCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class CodeContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public delimiter(): DelimiterContext | undefined {
		return this.tryGetRuleContext(0, DelimiterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_code; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterCode) listener.enterCode(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitCode) listener.exitCode(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitCode) return visitor.visitCode(this);
		else return visitor.visitChildren(this);
	}
}


export class CommentContext extends ParserRuleContext {
	public FIELD_COMMENT(): TerminalNode { return this.getToken(JclParser.FIELD_COMMENT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_comment; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterComment) listener.enterComment(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitComment) listener.exitComment(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitComment) return visitor.visitComment(this);
		else return visitor.visitChildren(this);
	}
}


export class DelimiterContext extends ParserRuleContext {
	public FIELD_DELIMITER(): TerminalNode { return this.getToken(JclParser.FIELD_DELIMITER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_delimiter; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterDelimiter) listener.enterDelimiter(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitDelimiter) listener.exitDelimiter(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitDelimiter) return visitor.visitDelimiter(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public FIELD_STATEMENT(): TerminalNode { return this.getToken(JclParser.FIELD_STATEMENT, 0); }
	public normal(): NormalContext | undefined {
		return this.tryGetRuleContext(0, NormalContext);
	}
	public concatenation(): ConcatenationContext | undefined {
		return this.tryGetRuleContext(0, ConcatenationContext);
	}
	public params(): ParamsContext | undefined {
		return this.tryGetRuleContext(0, ParamsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_statement; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterStatement) listener.enterStatement(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitStatement) listener.exitStatement(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class NormalContext extends ParserRuleContext {
	public STATE_NAME(): TerminalNode { return this.getToken(JclParser.STATE_NAME, 0); }
	public STATE_OP(): TerminalNode { return this.getToken(JclParser.STATE_OP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_normal; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterNormal) listener.enterNormal(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitNormal) listener.exitNormal(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitNormal) return visitor.visitNormal(this);
		else return visitor.visitChildren(this);
	}
}


export class ConcatenationContext extends ParserRuleContext {
	public STATE_OP(): TerminalNode { return this.getToken(JclParser.STATE_OP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_concatenation; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterConcatenation) listener.enterConcatenation(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitConcatenation) listener.exitConcatenation(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitConcatenation) return visitor.visitConcatenation(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamsContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public PARAM_COMMA(): TerminalNode[];
	public PARAM_COMMA(i: number): TerminalNode;
	public PARAM_COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JclParser.PARAM_COMMA);
		} else {
			return this.getToken(JclParser.PARAM_COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_params; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterParams) listener.enterParams(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitParams) listener.exitParams(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitParams) return visitor.visitParams(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamContext extends ParserRuleContext {
	public posParam(): PosParamContext | undefined {
		return this.tryGetRuleContext(0, PosParamContext);
	}
	public kwParam(): KwParamContext | undefined {
		return this.tryGetRuleContext(0, KwParamContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_param; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterParam) listener.enterParam(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitParam) listener.exitParam(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitParam) return visitor.visitParam(this);
		else return visitor.visitChildren(this);
	}
}


export class PosParamContext extends ParserRuleContext {
	public posValue(): PosValueContext | undefined {
		return this.tryGetRuleContext(0, PosValueContext);
	}
	public record(): RecordContext | undefined {
		return this.tryGetRuleContext(0, RecordContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_posParam; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterPosParam) listener.enterPosParam(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitPosParam) listener.exitPosParam(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitPosParam) return visitor.visitPosParam(this);
		else return visitor.visitChildren(this);
	}
}


export class KwParamContext extends ParserRuleContext {
	public VARIA_VALUE(): TerminalNode { return this.getToken(JclParser.VARIA_VALUE, 0); }
	public PARAM_EQ(): TerminalNode { return this.getToken(JclParser.PARAM_EQ, 0); }
	public kwValue(): KwValueContext | undefined {
		return this.tryGetRuleContext(0, KwValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_kwParam; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterKwParam) listener.enterKwParam(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitKwParam) listener.exitKwParam(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitKwParam) return visitor.visitKwParam(this);
		else return visitor.visitChildren(this);
	}
}


export class KwValueContext extends ParserRuleContext {
	public rhsValue(): RhsValueContext | undefined {
		return this.tryGetRuleContext(0, RhsValueContext);
	}
	public record(): RecordContext | undefined {
		return this.tryGetRuleContext(0, RecordContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_kwValue; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterKwValue) listener.enterKwValue(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitKwValue) listener.exitKwValue(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitKwValue) return visitor.visitKwValue(this);
		else return visitor.visitChildren(this);
	}
}


export class PosValueContext extends ParserRuleContext {
	public VARIA_VALUE(): TerminalNode | undefined { return this.tryGetToken(JclParser.VARIA_VALUE, 0); }
	public NUMBERAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(JclParser.NUMBERAL_VALUE, 0); }
	public LITERAL_VALUE(): TerminalNode | undefined { return this.tryGetToken(JclParser.LITERAL_VALUE, 0); }
	public STAR_VALUE(): TerminalNode | undefined { return this.tryGetToken(JclParser.STAR_VALUE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_posValue; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterPosValue) listener.enterPosValue(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitPosValue) listener.exitPosValue(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitPosValue) return visitor.visitPosValue(this);
		else return visitor.visitChildren(this);
	}
}


export class RhsValueContext extends ParserRuleContext {
	public posValue(): PosValueContext | undefined {
		return this.tryGetRuleContext(0, PosValueContext);
	}
	public DOT_VALUE(): TerminalNode | undefined { return this.tryGetToken(JclParser.DOT_VALUE, 0); }
	public ADDR_VALUE(): TerminalNode | undefined { return this.tryGetToken(JclParser.ADDR_VALUE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_rhsValue; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterRhsValue) listener.enterRhsValue(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitRhsValue) listener.exitRhsValue(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitRhsValue) return visitor.visitRhsValue(this);
		else return visitor.visitChildren(this);
	}
}


export class RecordContext extends ParserRuleContext {
	public PARAM_LPAREN(): TerminalNode { return this.getToken(JclParser.PARAM_LPAREN, 0); }
	public params(): ParamsContext {
		return this.getRuleContext(0, ParamsContext);
	}
	public PARAM_RPAREN(): TerminalNode { return this.getToken(JclParser.PARAM_RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JclParser.RULE_record; }
	@Override
	public enterRule(listener: JclParserListener): void {
		if (listener.enterRecord) listener.enterRecord(this);
	}
	@Override
	public exitRule(listener: JclParserListener): void {
		if (listener.exitRecord) listener.exitRecord(this);
	}
	@Override
	public accept<Result>(visitor: JclParserVisitor<Result>): Result {
		if (visitor.visitRecord) return visitor.visitRecord(this);
		else return visitor.visitChildren(this);
	}
}


