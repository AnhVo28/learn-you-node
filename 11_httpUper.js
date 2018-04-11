var http = require("http");
var fs = require("fs");
var map = require("through2-map");

var server = http.createServer((request, response) => {
  if (request.method == "POST") {
    request
      .pipe(
        map(function(chunk) {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(response);
  } else {
       return response.end('send me a POST\n')
      }
  }
});

server.listen(process.argv[2]);
