const SetcookieVisitor = require('./visitor/SetcookieVisitor');

var parser = require('./main');
var fs = require('fs');

var phpFile = fs.readFileSync( './example.php' );
var code = parser.parseCode(phpFile);




//code.accept(assign_visitor);
code.accept(call_visitor);
code.accept(setcookie_visitor);

//console.log(assign_visitor.stms);
console.log("----------------------------------------------------------");
console.log(call_visitor.nodes);
console.log("----------------------------------------------------------");
console.log(setcookie_visitor.nodes);




