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
            index = 0,
            previousIndex = 0;
        let lexeme = '';
        const tokens = [];

        function pushToken() {
            tokens.push({
                name: Lexical[state].token,
                lexeme,
                startPos: previousIndex,
                finalPos: index - 1
            });
        }

        while (index <= text.value.length) {
            const char = text.value.charAt(index);
            if (char in Lexical[state]) {
                state = Lexical[state][char];
                lexeme += char;
                index++;
            } else if (Lexical[state].token) {
                if (![":", "?"].includes(Lexical[state].token)) {
                    pushToken();
                }

                if (Lexical[state].token !== ":" || !lexeme.trim().length) {
                    previousIndex = index;
                    index++;
                }

                lexeme = '';
                state = 0;
            }
        }

        // for (let index = 0; index <= text.value.length; index++) {
        //     const char = text.value.charAt(index);
        //     if (char in Lexical[state]) {
        //         state = Lexical[state][char];
        //         lexeme += char;
        //     } else if (Lexical[state].token) {
        //         if (![":", "?"].includes(Lexical[state].token)) {
        //             tokens.push({
        //                 name: filterToken(Lexical[state].token, lexeme),
        //                 lexeme: lexeme,
        //                 startPos: previousIndex,
        //                 finalPos: index - 1
        //             });
        //         }
        //
        //         if (Lexical[state].token === ":" || lexeme.trim().length) {
        //             index--;
        //         }
        //
        //         previousIndex = index;
        //         lexeme = '';
        //         state = 0;
        //     }
        // }

        console.log(tokens);

        if (tokens.length > 0) {
            resolve(tokens);
        } else {
            reject("Nenhum token encontrado no texto fornecido.");
        }
        resolve(tokens);
    });
}

    // let index = 0;
    // while (index <= text.length) {
    //     const char = text.charAt(index);
    //
    //     if (char in Lexical[state]) {
    //
    //         state = Lexical[state][char];
    //         lexeme += char;
    //
    //     } else if (Lexical[state].token === ":") {
    //         state = 0;
    //         lexeme = '';
    //         previousIndex = index - 1;
    //     } else if (Lexical[state].token === "?") {
    //         throw new Error(`Unexpected char ${JSON.stringify(char)} at position ${index}!`);
    //     } else {
    //
    //     }
    // }