const NodeVisitor = require('./nodeVisitor');
const _ = require('underscore');

class TryVisitor extends NodeVisitor {
    constructor() {
        super();
        this.emptyCatch = [];
    }

    visit(node){
      super.visit(node);
      this.nodes = _.filter(this.nodes, e=>e.kind == 'try');
    }

    execute(){
        for(let i=0; i < this.nodes.length; i++){
            this.catch = this.nodes[i].catches[0];
            //console.log(this.catch);

            if(this.catch.body.children.length == 0){
                this.emptyCatch.push(this.nodes[i]);
            }
        }

        console.log("There is empty catch statement: ");
        this.printLine(this.emptyCatch);
    }
    
    printLine(stms){
        stms.forEach(e=>{
          console.log(e.loc.start);
        });
    }
}

module.exports = TryVisitor;