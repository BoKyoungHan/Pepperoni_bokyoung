const TryVisitor = require('../newVisitor/TryVisitor');
const Detector = require('./Detector');
const _ = require('underscore');

class EmptyCatchDetector extends Detector {
    constructor(){
      super();
    }

    detect(node){
        var tryVisitor = new TryVisitor();

        node.accept(tryVisitor);
        tryVisitor.execute();
    }

}

module.exports = EmptyCatchDetector;