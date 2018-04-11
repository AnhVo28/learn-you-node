const BufferList = require("bl");

var bl = new BufferList();
var http = require("http");

var url = process.argv[2];
var urlData = [];
var newArrUrl = process.argv.slice(2);
var count = newArrUrl.length;

for (let i = 0; i < newArrUrl.length; i++) {
  getUrl(newArrUrl[i], i);
}

function getUrl(url, i) {
  http.get(url, function(response) {
    var content = "";
    response.setEncoding("utf8");
    response.on("data", function(data) {
      content += data;
    });

   

    response.on("end", function() {
      urlData[i] = content;
      count--;

      if (count === 0) {
        printUrls();
      }
    });
  });
}

function printUrls() {
  urlData.forEach(function(item) {
    console.log(item);
  });
}
