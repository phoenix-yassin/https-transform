var http = require('http'),
    request = require('request');

var options = {
  host:'10.5.15.48'
};

var server = http.createServer(options, function (req, res) {
  var newUrlStr =
  "http://ue.17173cdn.com/a/lib/spm_modules/webmoniter/monitor.js";
  var oldRes = request(newUrlStr);
  req.pipe(oldRes);

  oldRes.toString().replace(/var/g, 'yyh');
  oldRes.pipe(res);
});

server.listen(80);
server.on('error', function(e){
  console.log(e);
});

