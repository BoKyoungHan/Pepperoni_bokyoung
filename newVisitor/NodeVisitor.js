const Visitor = require('./visitor');
const _ = require('underscore');

class NodeVisitor extends Visitor {
    constructor() {
        super();
        this.nodes = [];
    }

    
    visit(node){
        //console.log("node");
        _.each( _.values(node), (value)=>{
            if( _.has( value, 'kind')){
                this.nodes.push(value);              
            }
            if(_.keys(value).length){
                this.visit(value);
            }
        });
        // console.log("Node visitor");
        // console.log(this.nodes);
    }
}

module.exports = NodeVisitor;
