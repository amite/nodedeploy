var http = require('http')

var fs = require('fs');
var index = fs.readFileSync('app/index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(9615, function(){
  console.log("listening on port 9615")
});