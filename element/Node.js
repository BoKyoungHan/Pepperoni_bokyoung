class Node {
    constructor(phpFile) {
        var parser = require('../main');
        var AST = parser.parseCode(phpFile);
    }

    accept(v){
      v.visit(AST);
    }
}

module.exports = Node;