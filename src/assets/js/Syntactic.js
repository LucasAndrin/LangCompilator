export default class Syntactic {

    static transitions = [
        {
            action: {
                fn: "SHIFT 2"
            },
            goto: {
                "<fn_decl>": 1
            }
        }, {
            action: {
                "$": "ACCEPT"
            },
            goto: {}
        }, {
            action: {
                id: "SHIFT 3"
            },
            goto: {}
        }, {
            action: {
                open_p: "SHIFT 4"
            },
            goto: {}
        }, {
            action: {
                type: "SHIFT 8",
                id: "REDUCE 0 <assign_type>",
                clos_p: "REDUCE 0 <fn_params>"
            },
            goto: {
                "<fn_params>": 5,
                "<assignment>": 6,
                "<assign_type>": 7
            }
        }, {
            action: {
                clos_p: "SHIFT 9"
            },
            goto: {}
        }, {
            action: {
                comma: "SHIFT 11",
                clos_p: "REDUCE 0 <fn_param>"
            },
            goto: {
                "<fn_param>": 10
            }
        }, {
            action: {
                id: "SHIFT 12"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <assign_type>"
            },
            goto: {}
        }, {
            action: {
                colon: "SHIFT 14",
                open_b: "REDUCE 0 <fn_type>"
            },
            goto: {
                "<fn_type>": 13
            }
        }, {
            action: {
                clos_p: "REDUCE 2 <fn_params>"
            },
            goto: {}
        }, {
            action: {
                type: "SHIFT 8",
                id: "REDUCE 0 <assign_type>"
            },
            goto: {
                "<assignment>": 15,
                "<assign_type>": 7
            }
        }, {
            action: {
                plus: "SHIFT 18",
                minus: "SHIFT 19",
                mult: "SHIFT 21",
                div: "SHIFT 22",
                mod: "SHIFT 23",
                equal: "REDUCE 0 <nullable_math>",
                semicolon: "REDUCE 0 <assigner>",
                comma: "REDUCE 0 <assigner>",
                clos_p: "REDUCE 0 <assigner>"
            },
            goto: {
                "<assigner>": 16,
                "<nullable_math>": 17,
                "<math>": 20
            }
        }, {
            action: {
                open_b: "SHIFT 25"
            },
            goto: {
                "<scope>": 24
            }
        }, {
            action: {
                type: "SHIFT 26"
            },
            goto: {}
        }, {
            action: {
                comma: "SHIFT 11",
                clos_p: "REDUCE 0 <fn_param>"
            },
            goto: {
                "<fn_param>": 27
            }
        }, {
            action: {
                semicolon: "REDUCE 3 <assignment>",
                comma: "REDUCE 3 <assignment>",
                clos_p: "REDUCE 3 <assignment>"
            },
            goto: {}
        }, {
            action: {
                equal: "SHIFT 28"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <math>",
                bool: "REDUCE 1 <math>",
                num: "REDUCE 1 <math>",
                char: "REDUCE 1 <math>",
                str: "REDUCE 1 <math>",
                plus: "SHIFT 29",
                equal: "REDUCE 1 <math>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <math>",
                bool: "REDUCE 1 <math>",
                num: "REDUCE 1 <math>",
                char: "REDUCE 1 <math>",
                str: "REDUCE 1 <math>",
                minus: "SHIFT 30",
                equal: "REDUCE 1 <math>"
            },
            goto: {}
        }, {
            action: {
                equal: "REDUCE 1 <nullable_math>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <math>",
                bool: "REDUCE 1 <math>",
                num: "REDUCE 1 <math>",
                char: "REDUCE 1 <math>",
                str: "REDUCE 1 <math>",
                equal: "REDUCE 1 <math>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <math>",
                bool: "REDUCE 1 <math>",
                num: "REDUCE 1 <math>",
                char: "REDUCE 1 <math>",
                str: "REDUCE 1 <math>",
                equal: "REDUCE 1 <math>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <math>",
                bool: "REDUCE 1 <math>",
                num: "REDUCE 1 <math>",
                char: "REDUCE 1 <math>",
                str: "REDUCE 1 <math>",
                equal: "REDUCE 1 <math>"
            },
            goto: {}
        }, {
            action: {
                "$": "REDUCE 7 <fn_decl>"
            },
            goto: {}
        }, {
            action: {
                return: "SHIFT 33",
                type: "SHIFT 8",
                id: "REDUCE 0 <assign_type>",
                clos_b: "REDUCE 0 <commands>"
            },
            goto: {
                "<commands>": 31,
                "<command>": 32,
                "<assignment>": 34,
                "<assign_type>": 7
            }
        }, {
            action: {
                open_b: "REDUCE 2 <fn_type>"
            },
            goto: {}
        }, {
            action: {
                clos_p: "REDUCE 3 <fn_param>"
            },
            goto: {}
        }, {
            action: {
                id: "SHIFT 37",
                bool: "SHIFT 40",
                num: "SHIFT 41",
                char: "SHIFT 42",
                str: "SHIFT 43"
            },
            goto: {
                "<fn_call>": 39,
                "<val>": 36,
                "<expr>": 35,
                "<value>": 38
            }
        }, {
            action: {
                semicolon: "REDUCE 2 <assigner>",
                comma: "REDUCE 2 <assigner>",
                clos_p: "REDUCE 2 <assigner>"
            },
            goto: {}
        }, {
            action: {
                semicolon: "REDUCE 2 <assigner>",
                comma: "REDUCE 2 <assigner>",
                clos_p: "REDUCE 2 <assigner>"
            },
            goto: {}
        }, {
            action: {
                clos_b: "SHIFT 44"
            },
            goto: {}
        }, {
            action: {
                return: "SHIFT 33",
                type: "SHIFT 8",
                id: "REDUCE 0 <assign_type>",
                clos_b: "REDUCE 0 <commands>"
            },
            goto: {
                "<commands>": 45,
                "<command>": 32,
                "<assignment>": 34,
                "<assign_type>": 7
            }
        }, {
            action: {
                id: "SHIFT 37",
                bool: "SHIFT 40",
                num: "SHIFT 41",
                char: "SHIFT 42",
                str: "SHIFT 43"
            },
            goto: {
                "<fn_call>": 39,
                "<val>": 36,
                "<expr>": 46,
                "<value>": 38
            }
        }, {
            action: {
                semicolon: "SHIFT 47"
            },
            goto: {}
        }, {
            action: {
                semicolon: "REDUCE 3 <assigner>",
                comma: "REDUCE 3 <assigner>",
                clos_p: "REDUCE 3 <assigner>"
            },
            goto: {}
        }, {
            action: {
                and: "SHIFT 56",
                or: "SHIFT 57",
                plus: "SHIFT 58",
                minus: "SHIFT 59",
                mult: "SHIFT 21",
                div: "SHIFT 22",
                mod: "SHIFT 23",
                equal: "SHIFT 52",
                less: "SHIFT 54",
                bigger: "SHIFT 55",
                not: "SHIFT 53",
                semicolon: "REDUCE 0 <val_expr>",
                comma: "REDUCE 0 <val_expr>",
                clos_p: "REDUCE 0 <val_expr>"
            },
            goto: {
                "<val_expr>": 48,
                "<operators>": 49,
                "<math>": 51,
                "<logic>": 50
            }
        }, {
            action: {
                and: "REDUCE 1 <val>",
                or: "REDUCE 1 <val>",
                plus: "REDUCE 1 <val>",
                minus: "REDUCE 1 <val>",
                mult: "REDUCE 1 <val>",
                div: "REDUCE 1 <val>",
                mod: "REDUCE 1 <val>",
                equal: "REDUCE 1 <val>",
                less: "REDUCE 1 <val>",
                bigger: "REDUCE 1 <val>",
                not: "REDUCE 1 <val>",
                semicolon: "REDUCE 1 <val>",
                comma: "REDUCE 1 <val>",
                open_p: "SHIFT 60",
                clos_p: "REDUCE 1 <val>"
            },
            goto: {}
        }, {
            action: {
                and: "REDUCE 1 <val>",
                or: "REDUCE 1 <val>",
                plus: "REDUCE 1 <val>",
                minus: "REDUCE 1 <val>",
                mult: "REDUCE 1 <val>",
                div: "REDUCE 1 <val>",
                mod: "REDUCE 1 <val>",
                equal: "REDUCE 1 <val>",
                less: "REDUCE 1 <val>",
                bigger: "REDUCE 1 <val>",
                not: "REDUCE 1 <val>",
                semicolon: "REDUCE 1 <val>",
                comma: "REDUCE 1 <val>",
                clos_p: "REDUCE 1 <val>"
            },
            goto: {}
        }, {
            action: {
                and: "REDUCE 1 <val>",
                or: "REDUCE 1 <val>",
                plus: "REDUCE 1 <val>",
                minus: "REDUCE 1 <val>",
                mult: "REDUCE 1 <val>",
                div: "REDUCE 1 <val>",
                mod: "REDUCE 1 <val>",
                equal: "REDUCE 1 <val>",
                less: "REDUCE 1 <val>",
                bigger: "REDUCE 1 <val>",
                not: "REDUCE 1 <val>",
                semicolon: "REDUCE 1 <val>",
                comma: "REDUCE 1 <val>",
                clos_p: "REDUCE 1 <val>"
            },
            goto: {}
        }, {
            action: {
                and: "REDUCE 1 <value>",
                or: "REDUCE 1 <value>",
                plus: "REDUCE 1 <value>",
                minus: "REDUCE 1 <value>",
                mult: "REDUCE 1 <value>",
                div: "REDUCE 1 <value>",
                mod: "REDUCE 1 <value>",
                equal: "REDUCE 1 <value>",
                less: "REDUCE 1 <value>",
                bigger: "REDUCE 1 <value>",
                not: "REDUCE 1 <value>",
                semicolon: "REDUCE 1 <value>",
                comma: "REDUCE 1 <value>",
                clos_p: "REDUCE 1 <value>"
            },
            goto: {}
        }, {
            action: {
                and: "REDUCE 1 <value>",
                or: "REDUCE 1 <value>",
                plus: "REDUCE 1 <value>",
                minus: "REDUCE 1 <value>",
                mult: "REDUCE 1 <value>",
                div: "REDUCE 1 <value>",
                mod: "REDUCE 1 <value>",
                equal: "REDUCE 1 <value>",
                less: "REDUCE 1 <value>",
                bigger: "REDUCE 1 <value>",
                not: "REDUCE 1 <value>",
                semicolon: "REDUCE 1 <value>",
                comma: "REDUCE 1 <value>",
                clos_p: "REDUCE 1 <value>"
            },
            goto: {}
        }, {
            action: {
                and: "REDUCE 1 <value>",
                or: "REDUCE 1 <value>",
                plus: "REDUCE 1 <value>",
                minus: "REDUCE 1 <value>",
                mult: "REDUCE 1 <value>",
                div: "REDUCE 1 <value>",
                mod: "REDUCE 1 <value>",
                equal: "REDUCE 1 <value>",
                less: "REDUCE 1 <value>",
                bigger: "REDUCE 1 <value>",
                not: "REDUCE 1 <value>",
                semicolon: "REDUCE 1 <value>",
                comma: "REDUCE 1 <value>",
                clos_p: "REDUCE 1 <value>"
            },
            goto: {}
        }, {
            action: {
                and: "REDUCE 1 <value>",
                or: "REDUCE 1 <value>",
                plus: "REDUCE 1 <value>",
                minus: "REDUCE 1 <value>",
                mult: "REDUCE 1 <value>",
                div: "REDUCE 1 <value>",
                mod: "REDUCE 1 <value>",
                equal: "REDUCE 1 <value>",
                less: "REDUCE 1 <value>",
                bigger: "REDUCE 1 <value>",
                not: "REDUCE 1 <value>",
                semicolon: "REDUCE 1 <value>",
                comma: "REDUCE 1 <value>",
                clos_p: "REDUCE 1 <value>"
            },
            goto: {}
        }, {
            action: {
                "$": "REDUCE 3 <scope>"
            },
            goto: {}
        }, {
            action: {
                clos_b: "REDUCE 2 <commands>"
            },
            goto: {}
        }, {
            action: {
                semicolon: "SHIFT 61"
            },
            goto: {}
        }, {
            action: {
                return: "REDUCE 2 <command>",
                type: "REDUCE 2 <command>",
                id: "REDUCE 2 <command>",
                clos_b: "REDUCE 2 <command>"
            },
            goto: {}
        }, {
            action: {
                semicolon: "REDUCE 2 <expr>",
                comma: "REDUCE 2 <expr>",
                clos_p: "REDUCE 2 <expr>"
            },
            goto: {}
        }, {
            action: {
                id: "SHIFT 37",
                bool: "SHIFT 40",
                num: "SHIFT 41",
                char: "SHIFT 42",
                str: "SHIFT 43"
            },
            goto: {
                "<fn_call>": 39,
                "<val>": 36,
                "<expr>": 62,
                "<value>": 38
            }
        }, {
            action: {
                id: "REDUCE 1 <operators>",
                bool: "REDUCE 1 <operators>",
                num: "REDUCE 1 <operators>",
                char: "REDUCE 1 <operators>",
                str: "REDUCE 1 <operators>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <operators>",
                bool: "REDUCE 1 <operators>",
                num: "REDUCE 1 <operators>",
                char: "REDUCE 1 <operators>",
                str: "REDUCE 1 <operators>"
            },
            goto: {}
        }, {
            action: {
                equal: "SHIFT 63",
                less: "SHIFT 64",
                bigger: "SHIFT 65"
            },
            goto: {}
        }, {
            action: {
                equal: "SHIFT 66"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <logic>",
                bool: "REDUCE 1 <logic>",
                num: "REDUCE 1 <logic>",
                char: "REDUCE 1 <logic>",
                str: "REDUCE 1 <logic>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <logic>",
                bool: "REDUCE 1 <logic>",
                num: "REDUCE 1 <logic>",
                char: "REDUCE 1 <logic>",
                str: "REDUCE 1 <logic>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <logic>",
                bool: "REDUCE 1 <logic>",
                num: "REDUCE 1 <logic>",
                char: "REDUCE 1 <logic>",
                str: "REDUCE 1 <logic>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <logic>",
                bool: "REDUCE 1 <logic>",
                num: "REDUCE 1 <logic>",
                char: "REDUCE 1 <logic>",
                str: "REDUCE 1 <logic>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <math>",
                bool: "REDUCE 1 <math>",
                num: "REDUCE 1 <math>",
                char: "REDUCE 1 <math>",
                str: "REDUCE 1 <math>",
                equal: "REDUCE 1 <math>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 1 <math>",
                bool: "REDUCE 1 <math>",
                num: "REDUCE 1 <math>",
                char: "REDUCE 1 <math>",
                str: "REDUCE 1 <math>",
                equal: "REDUCE 1 <math>"
            },
            goto: {}
        }, {
            action: {
                id: "SHIFT 37",
                bool: "SHIFT 40",
                num: "SHIFT 41",
                char: "SHIFT 42",
                str: "SHIFT 43",
                clos_p: "REDUCE 0 <fn_vars>"
            },
            goto: {
                "<fn_call>": 39,
                "<fn_vars>": 67,
                "<val>": 36,
                "<expr>": 68,
                "<value>": 38
            }
        }, {
            action: {
                return: "REDUCE 3 <command>",
                type: "REDUCE 3 <command>",
                id: "REDUCE 3 <command>",
                clos_b: "REDUCE 3 <command>"
            },
            goto: {}
        }, {
            action: {
                semicolon: "REDUCE 2 <val_expr>",
                comma: "REDUCE 2 <val_expr>",
                clos_p: "REDUCE 2 <val_expr>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 2 <logic>",
                bool: "REDUCE 2 <logic>",
                num: "REDUCE 2 <logic>",
                char: "REDUCE 2 <logic>",
                str: "REDUCE 2 <logic>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 2 <logic>",
                bool: "REDUCE 2 <logic>",
                num: "REDUCE 2 <logic>",
                char: "REDUCE 2 <logic>",
                str: "REDUCE 2 <logic>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 2 <logic>",
                bool: "REDUCE 2 <logic>",
                num: "REDUCE 2 <logic>",
                char: "REDUCE 2 <logic>",
                str: "REDUCE 2 <logic>"
            },
            goto: {}
        }, {
            action: {
                id: "REDUCE 2 <logic>",
                bool: "REDUCE 2 <logic>",
                num: "REDUCE 2 <logic>",
                char: "REDUCE 2 <logic>",
                str: "REDUCE 2 <logic>"
            },
            goto: {}
        }, {
            action: {
                clos_p: "SHIFT 69"
            },
            goto: {}
        }, {
            action: {
                comma: "SHIFT 71",
                clos_p: "REDUCE 0 <fn_var>"
            },
            goto: {
                "<fn_var>": 70
            }
        }, {
            action: {
                and: "REDUCE 4 <fn_call>",
                or: "REDUCE 4 <fn_call>",
                plus: "REDUCE 4 <fn_call>",
                minus: "REDUCE 4 <fn_call>",
                mult: "REDUCE 4 <fn_call>",
                div: "REDUCE 4 <fn_call>",
                mod: "REDUCE 4 <fn_call>",
                equal: "REDUCE 4 <fn_call>",
                less: "REDUCE 4 <fn_call>",
                bigger: "REDUCE 4 <fn_call>",
                not: "REDUCE 4 <fn_call>",
                semicolon: "REDUCE 4 <fn_call>",
                comma: "REDUCE 4 <fn_call>",
                clos_p: "REDUCE 4 <fn_call>"
            },
            goto: {}
        }, {
            action: {
                clos_p: "REDUCE 2 <fn_vars>"
            },
            goto: {}
        }, {
            action: {
                id: "SHIFT 37",
                bool: "SHIFT 40",
                num: "SHIFT 41",
                char: "SHIFT 42",
                str: "SHIFT 43"
            },
            goto: {
                "<fn_call>": 39,
                "<val>": 36,
                "<expr>": 72,
                "<value>": 38
            }
        }, {
            action: {
                comma: "SHIFT 71",
                clos_p: "REDUCE 0 <fn_var>"
            },
            goto: {
                "<fn_var>": 73
            }
        }, {
            action: {
                clos_p: "REDUCE 3 <fn_var>"
            },
            goto: {}
        }
    ];

    static parse(tokens) {
        return new Promise((resolve, reject) => {
            const stack = [0];
            let i = 0;

            while (tokens) {
                const token = tokens[i] || {
                    name: '$'
                };

                if (!(token.name in this.transitions[stack[0]].action)) {
                    return reject(`Unexpected token "${tokens[i].name}" in ${stack[0]}`)
                }
                const [ action, argument, nonTerminal ] = this.transitions[stack[0]].action[token.name].split(' ');

                switch (action) {
                    case 'SHIFT':
                        stack.unshift(parseInt(argument));
                        i++;
                        break;
                    case 'REDUCE':
                        for (let j = 0; j < parseInt(argument); j++) {
                            stack.shift();
                        }
                        console.log(`Reducing to ${nonTerminal}`);
                        stack.unshift(this.transitions[stack[0]].goto[nonTerminal]);
                        break;
                    case 'ACCEPT':
                        return resolve('Ok');
                    default:
                        return reject('Unexpected Error!');
                }
            }
        });
    }
}