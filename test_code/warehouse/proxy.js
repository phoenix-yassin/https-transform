var http = require('http'),
    url = require('url');
var server = http.createServer(function(sreq, sres){
  var url_parts = url.parse(sreq.url);
  var opts = {
    host: 'www.baidu.com',
    port:80,
    path:url_parts.path,
    headers:url_parts.headers
  };

  var creq = http.get(opts, function (cres) {
    sres.writeHead(cres.statusCode, cres.headers);
    cres.pipe(sres);
  });
  sreq.pipe(creq);
});
server.listen(80, '127.0.0.1');