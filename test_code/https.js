var https = require('https');
var fs = require('fs');
var url = require('url');
var request = require('request');

var options = {
  key: fs.readFileSync('./demoCA/server.key'),
  cert: fs.readFileSync('./demoCA/server.crt'),
  host:'www.17173.com'
};

var server = https.createServer(options,function(req,response) {
  var url_parts = url.parse(req.url);
  var pathname = url_parts.pathname;
  var resData = '';
  console.log('request:'  + url_parts.pathname);
  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
       console.log(err);
       response.writeHead(404, {'Content-Type': 'text/html'});
    }else{
       // HTTP 状态码: 200 : OK
       // Content Type: text/plain
       response.writeHead(200, {'Content-Type': 'text/html'});
       resData = data.toString();
       resData = resData.replace(/http:\/\/i[1-3].17173cdn.com/gi,
        'https:\/\/i.17173cdn.com');
       response.write(resData);

       console.log('data:' + resData);
    }
    //  发送响应数据
    response.end();
  });
});

server.listen(443);
server.on('error', function(e) {
  console.log(e);
});
