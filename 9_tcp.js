var net = require("net");

var server = net.createServer(function(socket) {
  // socket handling logic
  function zeroFill(i) {
    return (i < 10 ? "0" : "") + i;
  }

  var date = new Date();
  var fullYear = date.getFullYear();
  var month = date.getMonth() + 1;
  var formattedMonth = zeroFill(month)
  var day = zeroFill(date.getDate());
  var hours = zeroFill(date.getHours());
  var minutes = zeroFill(date.getMinutes());

  socket.end(
    [fullYear, formattedMonth, day].join("-") +
      " " +
      [hours, minutes].join(":") +
      "\n"
  );
});
server.listen(Number(process.argv[2]));
