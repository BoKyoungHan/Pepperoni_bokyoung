const SetcookieVisitor = require('./newVisitor/SetcookieVisitor');
//const Detector = require('.detector/Detector');

class SetcookieDetector{
    constructor(){

    }

    detect(node){
        var setcookieVisitor = new SetcookieVisitor();

        node.accept(setcookieVisitor);
        //setcookieVisitor.nodes.forEach( e=>{console.log(e)});
        setcookieVisitor.execute();
    }

}