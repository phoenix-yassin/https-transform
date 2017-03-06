var http = require('http'),
    httpProxy = require('http-proxy');
    fs = require('fs');

/*********** 1. http -->https自签去除安全验证？ ************/
/*var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req, res) {
  proxy.web(req, res, {
    target: 'https://www.yyh1945.com/'
    //,changeOrigin: true
    ,secure: false
    //,protocolRewrite: 'https'
    });
});
console.log("listening on port 5050" + new Date());
server.listen(5050);*/

/*********** 2. https -->http************/
httpProxy.createServer({
  target: 'http://www.cnblogs.com/findumars/p/5111634.html',
  ssl: {
    key: fs.readFileSync('./www.yyh1945.com.key', 'utf8'),
    cert: fs.readFileSync('./www.yyh1945.com.crt', 'utf8')
  }
}).listen(80);
console.log("listening on port 80");
/*********** 3. https -->https  X ************/
/*var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req, res) {
  proxy.web(req, res, {
    target: 'https://www.yyh1945.com/',
    //secure: false,
    //,changeOrigin: true
    //,protocolRewrite: 'https'
    ssl: {
      key: fs.readFileSync('./www.yyh1945.com.key', 'utf8'),
      cert: fs.readFileSync('./www.yyh1945.com.crt', 'utf8')
      }
    });
});
console.log("listening on port 5050b" + new Date());
server.listen(5050);*/



/******************************************************/
/*var http = require('http'),
    net = require('net'),
    httpProxy = require('http-proxy'),
    url = require('url'),

var proxy = httpProxy.createServer();

var server = http.createServer(function (req, res) {
  console.log('Receiving reverse proxy request-http for:' + req.url);

  proxy.web(req, res, {target: 'http://www.yyh1945.com', secure: false});
}).listen(10080);

server.on('connect', function (req, socket) {
  console.log('Receiving reverse proxy request-https for:' + req.url);

  var serverUrl = url.parse('https://' + www.yyh1945.com);

  var srvSocket = net.connect(serverUrl.port, serverUrl.hostname, function() {
    socket.write('HTTP/1.1 200 Connection Established\r\n' +
    'Proxy-agent: Node-Proxy\r\n' +
    '\r\n');
    srvSocket.pipe(socket);
    socket.pipe(srvSocket);
  });
});

// Test with:
// curl -vv -x http://127.0.0.1:10080 https://www.google.com
// curl -vv -x http://127.0.0.1:10080 http://www.google.com**/
