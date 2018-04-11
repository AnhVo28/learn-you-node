var http = require("http");

var url = process.argv[2];


http
  .get(url, res => {
    // convert to string
    res.setEncoding("utf8");

    res.on("data", data => {
      console.log(data);
    });

  })
  .on("error", err => console.log(err + " from http res"));
