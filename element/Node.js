class Node {
    constructor(AST) {
        var AST = AST;
        console.log(AST);
    }

    accept(v){
        console.log(v);
        console.log(this.AST);
        v.visit(this.AST);
    }
}

module.exports = Node;