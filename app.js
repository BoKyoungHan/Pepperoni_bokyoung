const SetcookieVisitor = require('./newVisitor/SetcookieVisitor');
var parser = require('./main');
var fs = require('fs');
var Node = require('./element/Node');
var phpFile = fs.readFileSync( './example.php' );
var NodeVisitor = require('./newVisitor/NodeVisitor');
var CallVisitor = require('./newVisitor/CallVisitor');
var parser = require('./main');
var node = parser.parseCode(phpFile); //전체 AST

//fconsole.log(node.children);

//var node = new Node(node.children);
var setcookieVisitor = new SetcookieVisitor();
var callVisitor = new CallVisitor();
//node.accept(setcookieVisitor);
node.accept(setcookieVisitor);

//console.log(callVisitor.nodes);

//nodeVisitor.visit(AST);
//node.accept(setcookieVisitor);





