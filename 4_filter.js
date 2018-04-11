var fs = require("fs");
var path = require("path");

var url = process.argv[2];
// add . for extension argument
var ext = "." + process.argv[3];


fs.readdir(url, (err, list) => {
  list.forEach(element => {
      //get the file extension of the file
    if (path.extname(element) === ext) {
      console.log(element);
    }
  });
});
