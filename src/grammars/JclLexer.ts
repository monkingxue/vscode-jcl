// Generated from grammars/JclLexer.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


import { LexerAdaptor } from './LexerAdaptor';


export class JclLexer extends LexerAdaptor {
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
	public static readonly COMMENT_MODE=1;
	public static readonly DELIMITER_MODE=2;
	public static readonly STATEMENT_MODE=3;
	public static readonly PRE_PARAM_MODE=4;
	public static readonly PARAM_MODE=5;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "COMMENT_MODE", "DELIMITER_MODE", "STATEMENT_MODE", "PRE_PARAM_MODE", 
		"PARAM_MODE"
	];

	public static readonly ruleNames: string[] = [
		"Ws", "Hws", "Vws", "PAscii", "UnVws", "Digit", "LParen", "RParen", "SQuote", 
		"Dot", "Comma", "Star", "Eq", "Address", "Numeral", "Wildcard", "NameStartChar", 
		"NameChar", "StringLiteral", "CharSet", "COMMAND", "FIELD_COMMENT", "FIELD_DELIMITER", 
		"FIELD_STATEMENT", "NEW_LINE", "BLANK", "COMMENT", "DELIMITER_COMMENT", 
		"DELIMITER_NL", "STATE_OP", "STATE_NAME", "STATE_BLANK", "STATE_NL", "PRE_PARAM_NL", 
		"PRE_PARAM_BLANK", "PARAM_COMMA", "PARAM_LPAREN", "PARAM_RPAREN", "PARAM_EQ", 
		"VARIA_VALUE", "PARAM_ADDR", "STAR_VALUE", "LITERAL_VALUE", "NUMBERAL_VALUE", 
		"DOT_VALUE", "ADDR_VALUE", "PARAM_BLANK", "PARAM_CONT_NL", "PARAM_NL"
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JclLexer._LITERAL_NAMES, JclLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return JclLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(JclLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "JclLexer.g4"; }

	@Override
	public get ruleNames(): string[] { return JclLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return JclLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return JclLexer.modeNames; }

	@Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 47:
			return this.PARAM_CONT_NL_sempred(_localctx, predIndex);
		}
		return true;
	}
	private PARAM_CONT_NL_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.isContinuation();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x1F\u015C\b\x01"+
		"\b\x01\b\x01\b\x01\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04"+
		"\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t"+
		"\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t"+
		"\x10\x04\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t"+
		"\x15\x04\x16\t\x16\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t"+
		"\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t"+
		"\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t"+
		"\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x04"+
		"0\t0\x041\t1\x042\t2\x03\x02\x03\x02\x05\x02m\n\x02\x03\x03\x03\x03\x03"+
		"\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03"+
		"\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E"+
		"\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\x8C\n\x10\f\x10"+
		"\x0E\x10\x8F\v\x10\x05\x10\x91\n\x10\x03\x11\x03\x11\x03\x12\x03\x12\x05"+
		"\x12\x97\n\x12\x03\x13\x03\x13\x05\x13\x9B\n\x13\x03\x14\x03\x14\x07\x14"+
		"\x9F\n\x14\f\x14\x0E\x14\xA2\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05"+
		"\x15\xA8\n\x15\x03\x16\x06\x16\xAB\n\x16\r\x16\x0E\x16\xAC\x03\x17\x03"+
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03"+
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03"+
		"\x1A\x03\x1B\x06\x1B\xC4\n\x1B\r\x1B\x0E\x1B\xC5\x03\x1B\x03\x1B\x03\x1C"+
		"\x07\x1C\xCB\n\x1C\f\x1C\x0E\x1C\xCE\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1D\x07\x1D\xD4\n\x1D\f\x1D\x0E\x1D\xD7\v\x1D\x03\x1D\x03\x1D\x03\x1E"+
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F"+
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F"+
		"\x03\x1F\x03\x1F\x03\x1F\x05\x1F\xF1\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x07"+
		" \xF7\n \f \x0E \xFA\v \x03!\x06!\xFD\n!\r!\x0E!\xFE\x03!\x03!\x03\"\x03"+
		"\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03$\x06$\u010E\n$\r$\x0E"+
		"$\u010F\x03$\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)"+
		"\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x05-\u0127\n-\x03.\x03."+
		"\x03.\x06.\u012C\n.\r.\x0E.\u012D\x03.\x03.\x03.\x03.\x03.\x05.\u0135"+
		"\n.\x05.\u0137\n.\x03/\x03/\x03/\x05/\u013C\n/\x030\x060\u013F\n0\r0\x0E"+
		"0\u0140\x030\x030\x030\x031\x031\x031\x071\u0149\n1\f1\x0E1\u014C\v1\x03"+
		"1\x031\x031\x031\x061\u0152\n1\r1\x0E1\u0153\x031\x031\x032\x032\x032"+
		"\x032\x032\x03\xA0\x02\x023\b\x02\x02\n\x02\x02\f\x02\x02\x0E\x02\x02"+
		"\x10\x02\x02\x12\x02\x02\x14\x02\x02\x16\x02\x02\x18\x02\x02\x1A\x02\x02"+
		"\x1C\x02\x02\x1E\x02\x02 \x02\x02\"\x02\x02$\x02\x02&\x02\x02(\x02\x02"+
		"*\x02\x02,\x02\x02.\x02\x020\x02\x032\x02\x044\x02\x056\x02\x068\x02\x07"+
		":\x02\b<\x02\t>\x02\n@\x02\vB\x02\fD\x02\rF\x02\x0EH\x02\x0FJ\x02\x10"+
		"L\x02\x11N\x02\x12P\x02\x13R\x02\x14T\x02\x15V\x02\x16X\x02\x17Z\x02\x18"+
		"\\\x02\x19^\x02\x1A`\x02\x1Bb\x02\x1Cd\x02\x1Df\x02\x1Eh\x02\x1F\b\x02"+
		"\x03\x04\x05\x06\x07\f\x04\x02\v\v\"\"\x04\x02\f\f\x0E\x0F\x03\x02\x02"+
		"\x81\x03\x022;\x03\x023;\x04\x02%&BB\x03\x02C\\\x05\x02((,,//\x03\x02"+
		"11\x06\x02MMOOmmoo\u015C\x020\x03\x02\x02\x02\x022\x03\x02\x02\x02\x02"+
		"4\x03\x02\x02\x02\x026\x03\x02\x02\x02\x028\x03\x02\x02\x02\x02:\x03\x02"+
		"\x02\x02\x03<\x03\x02\x02\x02\x04>\x03\x02\x02\x02\x04@\x03\x02\x02\x02"+
		"\x05B\x03\x02\x02\x02\x05D\x03\x02\x02\x02\x05F\x03\x02\x02\x02\x05H\x03"+
		"\x02\x02\x02\x06J\x03\x02\x02\x02\x06L\x03\x02\x02\x02\x07N\x03\x02\x02"+
		"\x02\x07P\x03\x02\x02\x02\x07R\x03\x02\x02\x02\x07T\x03\x02\x02\x02\x07"+
		"V\x03\x02\x02\x02\x07X\x03\x02\x02\x02\x07Z\x03\x02\x02\x02\x07\\\x03"+
		"\x02\x02\x02\x07^\x03\x02\x02\x02\x07`\x03\x02\x02\x02\x07b\x03\x02\x02"+
		"\x02\x07d\x03\x02\x02\x02\x07f\x03\x02\x02\x02\x07h\x03\x02\x02\x02\b"+
		"l\x03\x02\x02\x02\nn\x03\x02\x02\x02\fp\x03\x02\x02\x02\x0Er\x03\x02\x02"+
		"\x02\x10t\x03\x02\x02\x02\x12v\x03\x02\x02\x02\x14x\x03\x02\x02\x02\x16"+
		"z\x03\x02\x02\x02\x18|\x03\x02\x02\x02\x1A~\x03\x02\x02\x02\x1C\x80\x03"+
		"\x02\x02\x02\x1E\x82\x03\x02\x02\x02 \x84\x03\x02\x02\x02\"\x86\x03\x02"+
		"\x02\x02$\x90\x03\x02\x02\x02&\x92\x03\x02\x02\x02(\x96\x03\x02\x02\x02"+
		"*\x9A\x03\x02\x02\x02,\x9C\x03\x02\x02\x02.\xA7\x03\x02\x02\x020\xAA\x03"+
		"\x02\x02\x022\xAE\x03\x02\x02\x024\xB4\x03\x02\x02\x026\xB9\x03\x02\x02"+
		"\x028\xBE\x03\x02\x02\x02:\xC3\x03\x02\x02\x02<\xCC\x03\x02\x02\x02>\xD5"+
		"\x03\x02\x02\x02@\xDA\x03\x02\x02\x02B\xF0\x03\x02\x02\x02D\xF4\x03\x02"+
		"\x02\x02F\xFC\x03\x02\x02\x02H\u0102\x03\x02\x02\x02J\u0107\x03\x02\x02"+
		"\x02L\u010D\x03\x02\x02\x02N\u0114\x03\x02\x02\x02P\u0116\x03\x02\x02"+
		"\x02R\u0118\x03\x02\x02\x02T\u011A\x03\x02\x02\x02V\u011C\x03\x02\x02"+
		"\x02X\u011E\x03\x02\x02\x02Z\u0120\x03\x02\x02\x02\\\u0122\x03\x02\x02"+
		"\x02^\u0124\x03\x02\x02\x02`\u012B\x03\x02\x02\x02b\u0138\x03\x02\x02"+
		"\x02d\u013E\x03\x02\x02\x02f\u0145\x03\x02\x02\x02h\u0157\x03\x02\x02"+
		"\x02jm\x05\n\x03\x02km\x05\f\x04\x02lj\x03\x02\x02\x02lk\x03\x02\x02\x02"+
		"m\t\x03\x02\x02\x02no\t\x02\x02\x02o\v\x03\x02\x02\x02pq\t\x03\x02\x02"+
		"q\r\x03\x02\x02\x02rs\t\x04\x02\x02s\x0F\x03\x02\x02\x02tu\n\x03\x02\x02"+
		"u\x11\x03\x02\x02\x02vw\t\x05\x02\x02w\x13\x03\x02\x02\x02xy\x07*\x02"+
		"\x02y\x15\x03\x02\x02\x02z{\x07+\x02\x02{\x17\x03\x02\x02\x02|}\x07)\x02"+
		"\x02}\x19\x03\x02\x02\x02~\x7F\x070\x02\x02\x7F\x1B\x03\x02\x02\x02\x80"+
		"\x81\x07.\x02\x02\x81\x1D\x03\x02\x02\x02\x82\x83\x07,\x02\x02\x83\x1F"+
		"\x03\x02\x02\x02\x84\x85\x07?\x02\x02\x85!\x03\x02\x02\x02\x86\x87\x07"+
		"(\x02\x02\x87#\x03\x02\x02\x02\x88\x91\x072\x02\x02\x89\x8D\t\x06\x02"+
		"\x02\x8A\x8C\x05\x12\x07\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8F\x03\x02\x02"+
		"\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x91\x03\x02\x02"+
		"\x02\x8F\x8D\x03\x02\x02\x02\x90\x88\x03\x02\x02\x02\x90\x89\x03\x02\x02"+
		"\x02\x91%\x03\x02\x02\x02\x92\x93\t\x07\x02\x02\x93\'\x03\x02\x02\x02"+
		"\x94\x97\t\b\x02\x02\x95\x97\x05&\x11\x02\x96\x94\x03\x02\x02\x02\x96"+
		"\x95\x03\x02\x02\x02\x97)\x03\x02\x02\x02\x98\x9B\x05(\x12\x02\x99\x9B"+
		"\x05\x12\x07\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03\x02\x02\x02\x9B+"+
		"\x03\x02\x02\x02\x9C\xA0\x05\x18\n\x02\x9D\x9F\x05\x0E\x05\x02\x9E\x9D"+
		"\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA0\x9E"+
		"\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA4"+
		"\x05\x18\n\x02\xA4-\x03\x02\x02\x02\xA5\xA8\x05*\x13\x02\xA6\xA8\t\t\x02"+
		"\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8/\x03\x02\x02"+
		"\x02\xA9\xAB\n\n\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02"+
		"\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD1\x03\x02\x02\x02"+
		"\xAE\xAF\x071\x02\x02\xAF\xB0\x071\x02\x02\xB0\xB1\x07,\x02\x02\xB1\xB2"+
		"\x03\x02\x02\x02\xB2\xB3\b\x17\x02\x02\xB33\x03\x02\x02\x02\xB4\xB5\x07"+
		"1\x02\x02\xB5\xB6\x07,\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\b\x18\x03"+
		"\x02\xB85\x03\x02\x02\x02\xB9\xBA\x071\x02\x02\xBA\xBB\x071\x02\x02\xBB"+
		"\xBC\x03\x02\x02\x02\xBC\xBD\b\x19\x04\x02\xBD7\x03\x02\x02\x02\xBE\xBF"+
		"\x05\f\x04\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\b\x1A\x05\x02\xC19\x03"+
		"\x02\x02\x02\xC2\xC4\x05\n\x03\x02\xC3\xC2\x03\x02\x02\x02\xC4\xC5\x03"+
		"\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03"+
		"\x02\x02\x02\xC7\xC8\b\x1B\x06\x02\xC8;\x03\x02\x02\x02\xC9\xCB\x05\x10"+
		"\x06\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02"+
		"\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xCC\x03\x02"+
		"\x02\x02\xCF\xD0\b\x1C\x06\x02\xD0\xD1\b\x1C\x07\x02\xD1=\x03\x02\x02"+
		"\x02\xD2\xD4\x05\x10\x06\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD7\x03\x02\x02"+
		"\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x03\x02\x02"+
		"\x02\xD7\xD5\x03\x02\x02\x02\xD8\xD9\b\x1D\x06\x02\xD9?\x03\x02\x02\x02"+
		"\xDA\xDB\x05\f\x04\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\b\x1E\x06\x02\xDD"+
		"\xDE\b\x1E\b\x02\xDEA\x03\x02\x02\x02\xDF\xE0\x07L\x02\x02\xE0\xE1\x07"+
		"Q\x02\x02\xE1\xF1\x07D\x02\x02\xE2\xE3\x07G\x02\x02\xE3\xE4\x07Z\x02\x02"+
		"\xE4\xE5\x07G\x02\x02\xE5\xF1\x07E\x02\x02\xE6\xE7\x07F\x02\x02\xE7\xF1"+
		"\x07F\x02\x02\xE8\xE9\x07R\x02\x02\xE9\xEA\x07T\x02\x02\xEA\xEB\x07Q\x02"+
		"\x02\xEB\xF1\x07E\x02\x02\xEC\xED\x07R\x02\x02\xED\xEE\x07G\x02\x02\xEE"+
		"\xEF\x07P\x02\x02\xEF\xF1\x07F\x02\x02\xF0\xDF\x03\x02\x02\x02\xF0\xE2"+
		"\x03\x02\x02\x02\xF0\xE6\x03\x02\x02\x02\xF0\xE8\x03\x02\x02\x02\xF0\xEC"+
		"\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\b\x1F\t\x02\xF3C\x03"+
		"\x02\x02\x02\xF4\xF8\x05(\x12\x02\xF5\xF7\x05*\x13\x02\xF6\xF5\x03\x02"+
		"\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02"+
		"\x02\x02\xF9E\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFD\x05\n\x03"+
		"\x02\xFC\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFC\x03\x02\x02"+
		"\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\b!"+
		"\x06\x02\u0101G\x03\x02\x02\x02\u0102\u0103\x05\f\x04\x02\u0103\u0104"+
		"\x03\x02\x02\x02\u0104\u0105\b\"\x06\x02\u0105\u0106\b\"\b\x02\u0106I"+
		"\x03\x02\x02\x02\u0107\u0108\x05\f\x04\x02\u0108\u0109\x03\x02\x02\x02"+
		"\u0109\u010A\b#\x06\x02\u010A\u010B\b#\b\x02\u010BK\x03\x02\x02\x02\u010C"+
		"\u010E\x05\n\x03\x02\u010D\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02"+
		"\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111"+
		"\x03\x02\x02\x02\u0111\u0112\b$\x06\x02\u0112\u0113\b$\n\x02\u0113M\x03"+
		"\x02\x02\x02\u0114\u0115\x05\x1C\f\x02\u0115O\x03\x02\x02\x02\u0116\u0117"+
		"\x05\x14\b\x02\u0117Q\x03\x02\x02\x02\u0118\u0119\x05\x16\t\x02\u0119"+
		"S\x03\x02\x02\x02\u011A\u011B\x05 \x0E\x02\u011BU\x03\x02\x02\x02\u011C"+
		"\u011D\x05D \x02\u011DW\x03\x02\x02\x02\u011E\u011F\x05\"\x0F\x02\u011F"+
		"Y\x03\x02\x02\x02\u0120\u0121\x05\x1E\r\x02\u0121[\x03\x02\x02\x02\u0122"+
		"\u0123\x05,\x14\x02\u0123]\x03\x02\x02\x02\u0124\u0126\x05$\x10\x02\u0125"+
		"\u0127\t\v\x02\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02\x02"+
		"\x02\u0127_\x03\x02\x02\x02\u0128\u0129\x05V)\x02\u0129\u012A\x05\x1A"+
		"\v\x02\u012A\u012C\x03\x02\x02\x02\u012B\u0128\x03\x02\x02\x02\u012C\u012D"+
		"\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02"+
		"\u012E\u0136\x03\x02\x02\x02\u012F\u0134\x05V)\x02\u0130\u0131\x05P&\x02"+
		"\u0131\u0132\x05V)\x02\u0132\u0133\x05R\'\x02\u0133\u0135\x03\x02\x02"+
		"\x02\u0134\u0130\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0137"+
		"\x03\x02\x02\x02\u0136\u012F\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02"+
		"\u0137a\x03\x02\x02\x02\u0138\u013B\x05X*\x02\u0139\u013C\x05V)\x02\u013A"+
		"\u013C\x05`.\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013A\x03\x02\x02\x02"+
		"\u013Cc\x03\x02\x02\x02\u013D\u013F\x05\n\x03\x02\u013E\u013D\x03\x02"+
		"\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140"+
		"\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143\b0\x06"+
		"\x02\u0143\u0144\b0\x02\x02\u0144e\x03\x02\x02\x02\u0145\u0146\x05\f\x04"+
		"\x02\u0146\u014A\x061\x02\x02\u0147\u0149\x05\n\x03\x02\u0148\u0147\x03"+
		"\x02\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A"+
		"\u014B\x03\x02\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014A\x03\x02"+
		"\x02\x02\u014D\u014E\x071\x02\x02\u014E\u014F\x071\x02\x02\u014F\u0151"+
		"\x03\x02\x02\x02\u0150\u0152\x05\n\x03\x02\u0151\u0150\x03\x02\x02\x02"+
		"\u0152\u0153\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03"+
		"\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\b1\x06\x02\u0156"+
		"g\x03\x02\x02\x02\u0157\u0158\x05\f\x04\x02\u0158\u0159\x03\x02\x02\x02"+
		"\u0159\u015A\b2\x06\x02\u015A\u015B\b2\b\x02\u015Bi\x03\x02\x02\x02\x1F"+
		"\x02\x03\x04\x05\x06\x07l\x8D\x90\x96\x9A\xA0\xA7\xAC\xC5\xCC\xD5\xF0"+
		"\xF8\xFE\u010F\u0126\u012D\u0134\u0136\u013B\u0140\u014A\u0153\v\x07\x03"+
		"\x02\x04\x04\x02\x04\x05\x02\x02\x03\x02\b\x02\x02\x06\x02\x02\x04\x02"+
		"\x02\x04\x06\x02\x04\x07\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JclLexer.__ATN) {
			JclLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JclLexer._serializedATN));
		}

		return JclLexer.__ATN;
	}

}

