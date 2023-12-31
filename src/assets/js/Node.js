class Node {
    token = null;
    children = [];

    constructor(token) {
        this.token = token;
        this.children = [];
    }

    static create(token) {
        return new Node(token)
    }

    link(children) {
        this.children = children;
        return this;
    }

    getChildren() {
        return this.children;
    }
}

export default Node;