const _ = require('underscore');
const Detector = require('./detector');
const SetcookieVisitor = require('../visitor/setcookieVisitor');

class Setcookie_Detector extends Detector {
    constructor() {
        super();
        this.setcookieVisitor = new SetcookieVisitor();
        this.danger_cookie = [];
        this.weak_cookie = [];
    }

    //parameter node는 element임
    detect(node){
        this.node.accept()
    }

    printLine(stms){
        stms.forEach(e=>{
          console.log(e.loc.start);
        });
    }
}

module.exports = Setcookie_Detector;



