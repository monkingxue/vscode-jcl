lexer grammar JclLexer;

options {
	superClass = LexerAdaptor;
}

@beforeLexer {
import { LexerAdaptor } from './LexerAdaptor';
}

/** Basic Token */
fragment Ws: Hws | Vws;

fragment Hws: [ \t];

fragment Vws: [\r\n\f];

fragment PAscii: [\u0000-\u007F];

fragment UnVws: ~[\r\n\f];

fragment Digit: [0-9];

fragment LParen: '(';

fragment RParen: ')';

fragment SQuote: '\'';

fragment Dot: '.';

fragment Comma: ',';

fragment Star: '*';

fragment Eq: '=';

fragment Address: '&';

fragment Numeral: '0' | [1-9] Digit*;

fragment Wildcard: [@#$];

// fragment SpecialChar: [,./()*&+\\-=];

fragment NameStartChar: [A-Z] | Wildcard;

fragment NameChar: NameStartChar | Digit;

fragment StringLiteral: SQuote PAscii* SQuote;

// TODO 
fragment CharSet: NameChar | '-' | '*' | '&';

// ------ Default Begin ------

COMMAND: ~[/]+;

FIELD_COMMENT: '//*' -> pushMode(COMMENT_MODE);

FIELD_DELIMITER: '/*' -> mode(DELIMITER_MODE);

FIELD_STATEMENT: '//' -> mode(STATEMENT_MODE);

NEW_LINE: Vws -> channel(HIDDEN);

BLANK: Hws+ -> skip;

// ------ Comment Begin ------
mode COMMENT_MODE;

COMMENT: ~[\r\n\f]+ -> skip, popMode;

// ------- Comment End  ------

// ------ Delimiter Begin ------
mode DELIMITER_MODE;

DELIMITER_COMMENT: ~[\r\n\f]+ -> skip;

DELIMITER_NL: Vws -> skip, mode(DEFAULT_MODE);

// ------ Delimiter End   ------

// ------ Statement Begin ------
mode STATEMENT_MODE;

STATE_OP: ('JOB' | 'EXEC' | 'DD' | 'PROC' | 'PEND') -> mode(PRE_PARAM_MODE);

STATE_NAME: NameStartChar NameChar*;

STATE_BLANK: Hws+ -> skip;

STATE_NL: Vws -> skip, mode(DEFAULT_MODE);

// ------ Statement End   ------

mode PRE_PARAM_MODE;

PRE_PARAM_NL: Vws -> skip, mode(DEFAULT_MODE);

PRE_PARAM_BLANK: Hws+ -> skip, mode(PARAM_MODE);

// ------ Parameter Begin ------
mode PARAM_MODE;

PARAM_COMMA: Comma;

PARAM_LPAREN: LParen;

PARAM_RPAREN: RParen;

PARAM_EQ: Eq;

VARIA_VALUE: STATE_NAME;

PARAM_ADDR: Address;

STAR_VALUE: Star;

LITERAL_VALUE: StringLiteral;

NUMBERAL_VALUE: Numeral;

DOT_VALUE:
	(VARIA_VALUE Dot)+ (
		VARIA_VALUE (PARAM_LPAREN VARIA_VALUE PARAM_RPAREN)?
	)?;

ADDR_VALUE: PARAM_ADDR (VARIA_VALUE | DOT_VALUE);

PARAM_BLANK: Hws+ -> skip, pushMode(COMMENT_MODE);

PARAM_CONT_NL:
	Vws {this.isContinuation()}? Hws* '//' Hws+ -> skip;

PARAM_NL: Vws -> skip, mode(DEFAULT_MODE);

// ------ Parameter End   ------

