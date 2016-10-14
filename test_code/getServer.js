var http = require('http'),
    url  = require('url');
    fs   = require('fs');

var options = {
  host:'www.17173.com',
  port:80
};

var hostMap = {};
var cUrl = 'http://www.17173.com/';
//var reg = /\/\/([\w|.|-]+)\//;//匹配主页中其他请求的server
var reg = /\/\/([a-zA-Z0-9][-a-zA-Z0-9]{1,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?)\//;//匹配主页中其他请求的server
var server = http.createServer(function(req, res) {
  var sourceUrlObj = url.parse(req.url);
  var sourceUrl =sourceUrlObj.protocol + "://" + sourceUrlObj.host + sourceUrlObj.path;
  if(true /*cUrl == sourceUrl */){
    var creq = http.get(cUrl, function ( cres) {
      res.writeHead(cres.statusCode, cres.headers);
      cres.pipe(res);

      cres.on('data', function(chunk){
        var temp = chunk.toString();
        var hosts = temp.match(reg);
        var hosts_num = hosts? hosts.length -1 : 0;
        if( hosts_num ){
          if(hostMap[hosts[1]]){
            hostMap[hosts[1]] += 1;
          }else{
            hostMap[hosts[1]] = 1;
          }
        }
      });
      cres.on('end', function(){
        console.log('hosts are:' + JSON.stringify(hostMap));
      });
    });
    req.pipe(creq);
  }
});
server.listen(80);
server.on('error', function(e) {
  console.log(e);
});




