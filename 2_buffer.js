var fs = require("fs");

var buf = fs.readFileSync(process.argv[2], "utf8");
// var content = buf.toString();
var num = buf.split("\n").length;

console.log(num - 1);
