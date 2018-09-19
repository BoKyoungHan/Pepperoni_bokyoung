const SetcookieVisitor = require('./newVisitor/SetcookieVisitor');
const CallVisitor = require('./newVisitor/CallVisitor');
const EmptyCatchDetector = require('./detector/EmptyCatchDetector');

var parser = require('./main');
var fs = require('fs');
var Node = require('./element/Node');
var phpFile = fs.readFileSync( './example.php' );
var parser = require('./main');
var node = parser.parseCode(phpFile); //전체 AST

const SetcookieDetector = require('./detector/SetcookieDetector');

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



