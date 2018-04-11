var fs = require("fs");

var url = process.argv[2];

fs.readFile(url, "utf8", (err, data) => {
    if(err){
        return console.log('err');
        
    }
  var num = data.split("\n").length;
  console.log(num - 1);
});

