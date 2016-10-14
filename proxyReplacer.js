var http = require('http'),
  replaceStream = require('replacestream'),
  request = require('request'),
  response = require('response'),
  zlib = require('zlib');
//

/*var options = {
  host:'10.5.15.48'
};*/

var options = {
  url: 'http://ue.17173cdn.com/a/lib/spm_modules/webmoniter/monitor.js'
};

var gzipStream = zlib.createGunzip();
var gunzipStream = zlib.createGzip();

var server = http.createServer(function(req, res) {
  var newUrlStr =
    'http://ue.17173cdn.com/a/lib/spm_modules/webmoniter/monitor.js';
  var oldRes = request(options, function(error, response, body) {
    //console.log('the decoded data is: ' + response.pipe(gunzipStream).toString());
    //body.pipe(gunzipStream).pipe();
  });

  req.pipe(oldRes);
  oldRes.pipe(zlib.createGunzip())
    .pipe(replaceStream(/function/g, 'yyh'))
    // .pipe(zlib.createGzip())
    .pipe(response({ compress: req }))
    .pipe(res);
}).listen(80, '127.0.0.1');

//server;
server.on('error', function(e) {
  console.log(e);
});

