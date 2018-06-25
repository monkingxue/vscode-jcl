parser grammar JclParser;

options {
	tokenVocab = JclLexer;
}

prog: line* EOF;

line: code | command;

command: COMMAND;

code: statement | comment | delimiter;

comment: FIELD_COMMENT;

delimiter: FIELD_DELIMITER;

statement: FIELD_STATEMENT (normal | concatenation) params?;

normal: STATE_NAME STATE_OP;

concatenation: STATE_OP;

params: param (PARAM_COMMA param)*;

param: posParam | kwParam;

posParam: posValue | record;

kwParam: VARIA_VALUE PARAM_EQ kwValue?;

kwValue: rhsValue | record;

posValue:
	VARIA_VALUE
	| NUMBERAL_VALUE
	| LITERAL_VALUE
	| STAR_VALUE;

rhsValue: posValue | DOT_VALUE | ADDR_VALUE;

record: PARAM_LPAREN params PARAM_RPAREN;