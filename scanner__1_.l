%{
#include <stdio.h>
%}

%%

0[0-7]+               { printf("INT\n"); }
0x[0-9a-fA-F]+        { printf("INT\n"); }
[1-9][0-9]*           { printf("INT\n"); }

[0-9]+                { printf("FLOAT\n"); }
[0-9]*\.[0-9]+        { printf("FLOAT\n"); }
[0-9]+\.[0-9]*        { printf("FLOAT\n"); }
[0-9]+[eE][+-]?[0-9]+ { printf("FLOAT\n"); }

\+                  { printf("ADD\n"); }
\-                  { printf("SUBTRACT\n"); }
\/                  { printf("DIVIDE\n"); }
\*                  { printf("MULTIPLY\n"); }
%                  { printf("MODULO\n"); }
=                  { printf("EQUAL\n"); }

[a-fA-F]+             { printf("ID\n"); }

\(                  { printf("OP\n"); }
\)                  { printf("CP\n"); }

[(){}]               { printf("%s\n", yytext); }
.                    { printf("UNRECOGNIZED CHARACTER\n"); }

%%

int main() {
    yylex();
    return 0;
}
