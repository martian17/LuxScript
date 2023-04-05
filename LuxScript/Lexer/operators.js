const OPERATORS = {
    "+": "PLUS",
    "-": "MINUS",
    "*": "MULTIPLY",
    "/": "DIVIDE",
    "=": "ASSIGN",
    "+=": "PLUS_ASSIGN",
    "-=": "MINUS_ASSIGN",
    "===": "REALLY_EQUALS",
    "==": "EQUALS",
    "!==": "REALLY_NOT_EQUALS",
    "!=": "NOT_EQUALS",
    ">>>>": "GO_RIGHT",
    "<<<<": "GO_LEFT",
    "<<<<>>>>": "GO_FRONT_BOTH",
    ">>>><<<<": "GO_BACK_BOTH",
    "<": "LESS_THAN",
    ">": "GREATER_THAN",
    "<=": "LESS_THAN_EQUALS",
    ">=": "GREATER_THAN_EQUALS",
};
module.exports = OPERATORS;