var fs = require("fs");
var path = require("path");

module.exports = function filter(dir, filterStr, callback) {
  fs.readdir(dir,(err, files)=>{
    if (err){
      return callback(err)
    }
    files = files.filter(element => path.extname(element) === '.'+ filterStr);

    callback(null, files)
  })
}