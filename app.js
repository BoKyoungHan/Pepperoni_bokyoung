const SetcookieVisitor = require('./newVisitor/SetcookieVisitor');
var parser = require('./main');
var fs = require('fs');
var Node = require('./element/Node');
var phpFile = fs.readFileSync( './example.php' );
var parser = require('./main');
var node = parser.parseCode(phpFile); //전체 AST

const SetcookieDetector = require('./SetcookieDetector');

// var setcookieDetector = new SetcookieDetector();

// setcookieDetector.detect(node);
//////////////////////detector///////////////////
var setcookieVisitor = new SetcookieVisitor();

node.accept(setcookieVisitor);
//setcookieVisitor.nodes.forEach( e=>{console.log(e)});
setcookieVisitor.execute();

//////////////////////////////////////



