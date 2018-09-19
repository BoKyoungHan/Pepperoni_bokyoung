const SetcookieVisitor = require('../newVisitor/SetcookieVisitor');
const Detector = require('./Detector');
const _ = require('underscore');

class SetcookieDetector extends Detector {
    constructor(){
      super();
    }

    detect(node){
        var setcookieVisitor = new SetcookieVisitor();

        node.accept(setcookieVisitor);
        setcookieVisitor.execute();
    }

}

module.exports = SetcookieDetector;