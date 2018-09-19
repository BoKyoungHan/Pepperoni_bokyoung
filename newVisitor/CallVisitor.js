
const NodeVisitor = require('./nodeVisitor');
const _ = require('underscore');

class CallVisitor extends NodeVisitor {
    constructor() {
        super();
    }

    visit(node){
        super.visit(node);
        this.nodes = _.filter(this.nodes, e=>e.kind == 'call' );
        //this.nodes = _.uniq(this.nodes,'loc');
        //console.log("Call visitor");
        //console.log(this.nodes);
    }
}

module.exports = CallVisitor;