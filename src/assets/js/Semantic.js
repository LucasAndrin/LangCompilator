export default class Semantic {
    validations = [
        '<assignment>'
    ];

    scopes = [];

    constructor(tree) {
        this.tree = tree;
    }

    validate() {
        return new Promise((resolve) => {
            this.validateChild(this.tree, 0);

            resolve('ok');
        });
    }

    validateChild(node, depth) {
        if (node) {
            for (let child of node.children) {
                if (child.token === '<scope>') {
                    depth++;
                }

                if (this.validations.includes(child.token)) {
                    this[child.token](child, depth);
                }
                this.validateChild(child, depth);
            }
        }
    }

    '<assignment>'(assignment, depth) {
        const id = this.findToken(assignment, 'id');
        let exists = false;

        let symbol = this.findSymbol('variable', id.lexeme, depth);
        if (symbol) {
            exists = true;
        } else {
            symbol = {
                name: 'variable',
                lexeme: id.lexeme
            };
        }

        const type = this.findToken(assignment, 'type');
        if (type) {
            if (exists) {
                throw new Error(`Declaration error at ${id.startPos}! Variable ${id.lexeme} has already been declared!`);
            }

            symbol.type = type.lexeme;
        }

        const nonTerminalValue = this.findNode(assignment, '<value>');
        if (nonTerminalValue) {
            const [ value ] = nonTerminalValue.children;
            const rules = {
                'str': 'string',
                'num': 'int',
                'char': 'char',
            }
            if (symbol.type) {
                if (rules[value.token.name] !== symbol.type) {
                    throw new Error(`Invalid type assignment at ${id.startPos}. Cannot assign ${value.token.lexeme} in ${symbol.type} type`);
                }
            } else {
                symbol.type = rules[value.token.name]
            }

            symbol.value = value.token.lexeme;
        }

        if (!exists) {
            if (!this.scopes[depth]) {
                this.scopes[depth] = [];
            }
            this.scopes[depth].push(symbol);
        }
    }

    findSymbol(name, lexeme, depth) {
        console.log('searching symbol', this.scopes.length, lexeme, name);
        while (depth >= 0) {
            const symbol = this.scopes[depth]?.find(symbol => {
                console.log(symbol);
                console.log(symbol.lexeme === lexeme && symbol.name === name);
                return symbol.lexeme === lexeme && symbol.name === name;
            });
            if (symbol) {
                return symbol;
            }
            depth--;
        }
    }

    findNode(node, name) {
        if (node) {
            for (const child of node.children) {
                if (child.token === name) {
                    return child;
                }

                const result = this.findNode(child, name);
                if (result) {
                    return result;
                }
            }
        }
    }

    findToken(node, name) {
        if (node) {
            for (const child of node.children) {
                if (child.token.name === name) {
                    return child.token;
                }

                const token = this.findToken(child, name);
                if (token) {
                    return token;
                }
            }
        }
    }
}