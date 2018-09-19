const parser = require('./main');
const fs = require('fs');

var phpFile = fs.readFileSync( './example.php' );
var node = parser.parseCode(phpFile); //전체 AST

//detector
const SetcookieDetector = require('./detector/SetcookieDetector');
const EmptyCatchDetector = require('./detector/EmptyCatchDetector');


var setcookieDetector = new SetcookieDetector();
var emptyCatchDetector = new EmptyCatchDetector();

setcookieDetector.detect(node);
emptyCatchDetector.detect(node);



//////////////////////detector///////////////////
// var setcookieVisitor = new SetcookieVisitor();

// node.accept(setcookieVisitor);
// //setcookieVisitor.nodes.forEach( e=>{console.log(e)});
// setcookieVisitor.execute();

//////////////////////////////////////



