const BufferList = require("bl");

var bl = new BufferList();
var http = require("http");
var url = process.argv[2];

http.get(url, function(response) {
    response.on("data", function(data) {
        bl.append(data);
    });
    
   
  response.on("end", function() {
    console.log(bl.toString().length);
    console.log(bl.toString());
  });
});
