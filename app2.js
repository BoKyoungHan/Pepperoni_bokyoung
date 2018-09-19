

const SetcookieVisitor = require('./visitor/SetcookieVisitor');
const NodeVisitor = require('./visitor/NodeVisitor');
const CallVisitor = require('./visitor/CallVisitor');

var parser = require('./main');
var fs = require('fs');

var phpFile = fs.readFileSync( './example.php' );
const code = parser.parseCode(phpFile);

var nodeVisitor = new NodeVisitor();
var callVisitor = new CallVisitor();
var setcookieVisitor = new SetcookieVisitor();
// code.accept(nodeVisitor);
// code.accept(callVisitor);
code.accept(setcookieVisitor);

setcookieVisitor.nodes.forEach( e=>{console.log(e);
//console.log("______________________________________");
} )