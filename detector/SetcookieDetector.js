const SetcookieVisitor = require('../newVisitor/SetcookieVisitor');
const Detector = require('./detector');
const _ = require('underscore');

class SetcookieDetector extends Detector {
    constructor() {
      super();
    }

    detect(node){
        var setcookieVisitor = new SetcookieVisitor();

        node.accept(setcookieVisitor);
        //setcookieVisitor.nodes.forEach( e=>{console.log(e)});
        setcookieVisitor.execute();
    }

}

module.exports = SetcookieDetector;