import Lexical from "./Lexical";

const reservedWords = {
    id: {
        function: 'fn',
        if: 'if',
        else: 'else',
        for: 'for',
        while: 'while',
        print: 'print',
        return: 'return',
        and: 'and',
        or: 'or',
        true: 'true',
        false: 'false',
        bool: 'bool',
        int: 'int',
        char: 'char',
        string: 'string'
    }
}

function filterToken(token, string) {
    if (reservedWords[token] && reservedWords[token][string]) {
        return reservedWords[token][string];
    }
    return token;
}

export function getTokens(text) {
    return new Promise((resolve, reject) => {
        let state = 0,
            previousIndex = 0;
        let lexeme = '';
        const tokens = [];

        for (let index = 0; index <= text.value.length; index++) {
            const char = text.value.charAt(index);
            if (char in Lexical[state]) {
                state = Lexical[state][char]
                lexeme += char;
            } else if (Lexical[state].token) {
                if (![":", "?"].includes(Lexical[state].token)) {
                    tokens.push({
                        name: filterToken(Lexical[state].token, lexeme),
                        lexeme: lexeme,
                        startPos: previousIndex,
                        finalPos: index - 1
                    });
                }

                if (Lexical[state].token === ":" || lexeme.trim().length) {
                    index--;
                }

                previousIndex = index;
                lexeme = '';
                state = 0;
            } else {
                reject(`Undefined state ${state}`);
            }
        }

        resolve(tokens);
    });
}