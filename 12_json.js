//Require
var http = require("http");
var urlMod = require("url");

//Use default port for server
var port = 8080;
if (process.argv[2] !== undefined) {
  port = parseInt(process.argv[2]);
}

//Create the server

var server = http.createServer((request, response) => {
  //Get url to route
  var url = request.url;
  var urlObj = urlMod.parse(url, true);

  //Get query from url
  var query = urlObj.query.iso;

  // Define content type for JSON response
  response.writeHead(200, {
    "Content-Type": "application/json"
  });

  // Create Date object
  var date = new Date(query);

  //Obj depended on route
  var dataObj = null;
  if (urlObj.pathname === "/api/parsetime") {
    dataObj = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (urlObj.pathname === "/api/unixtime") {
    dataObj = {
      unixtime: date.getTime()
    };
  } else {
    response.write("No data received");
  }

  //Send data to client
  if (dataObj !== null) {
    var dataSend = JSON.stringify(dataObj);
    response.write(dataSend);
  }
  response.end();
});

server.listen(port);
