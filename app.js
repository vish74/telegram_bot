var cfenv = require('cfenv');
var http = require('http');

var appEnv = cfenv.getAppEnv();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(appEnv.port, appEnv.bind);
console.log('Server running' + appEnv.url);