import Lexical from "./Lexical";

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
                        name: Lexical[state].token,
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