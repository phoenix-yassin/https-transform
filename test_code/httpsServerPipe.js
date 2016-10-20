var https = require('https'),
  http = require('http'),
  url = require('url'),
  mime = require("./mime").types,
  path = require("path"),
  config = require("./config"),
  zlib = require("zlib"),
  request = require('request'),
  replaceStream = require('replacestream'),
  path = require('path'),
  getReqFileType = require('./getReqFileType'),
  fs = require('fs');

var options = {
  key:  fs.readFileSync('./ca/server.key'),  //带路径的文件名，注意两个文件不要写反了
  cert:fs.readFileSync('./ca/server.crt')
};

var server = https.createServer(options, function (req, res) {
//req.headers.host
  var urlObj =  url.parse(req.url);
  var newUrl = 'http://ue.17173cdn.com' +/* urlObj.host +*/ urlObj.path;
  console.log(JSON.stringify(urlObj));
  console.log(req.headers.host + '<==>' + newUrl);

  var ext = path.extname(urlObj.path);
  ext = ext ? ext.slice(1) : 'unknown';
  var contentType = mime[ext] || "text/plain";
  var acceptEncoding = req.headers['accept-encoding'] || "";
  var accept = req.headers['accept'] || "";
  var retType = getReqFileType(req.url);
  //var matched = ext.match(config.Compress.match);
  /*var cReq = http.request(newUrl, function (cRes) {
    var body = [];
    cRes.on('data', function (chunk) {
        body.push(chunk);
        console.log("chunk: " + chunk.toString());
    });
    cRes.on('end', function () {
        body = Buffer.concat(body);
        console.log('end!');
        if (cRes.headers['content-encoding'] === 'gzip') {
          res.send(body);
            zlib.gunzip(body, function (err, data) {
                console.log(body.toString());
            });
        } else {
            console.log(body.toString());
        }
    });
  });
  cReq.end();*/

    var oldRes = request(newUrl, function(error, response, body) {
    //console.log('the decoded data is: ' + response.pipe(gunzipStream).toString());
    //body.pipe(gunzipStream).pipe();
  });
  if (acceptEncoding.match(/\bgzip\b/)) {
    if(retType === 'js' || retType === 'css' || retType === 'html'){
      req.pipe(oldRes);
      oldRes.pipe(zlib.createGunzip())
        .pipe(replaceStream(/function/g, 'yyh'))
        /*.pipe(response({ compress: req }))*/
        .pipe(res);
      }else{
        req.pipe(oldRes);
        oldRes.pipe(zlib.createGzip()).pipe(res);
      }
  } else if (acceptEncoding.match(/\bdeflate\b/)) {
    req.pipe(oldRes);
    oldRes.pipe(zlib.createDeflate()).pipe(res);
  } else {
    req.pipe(oldRes);
    oldRes.pipe(res);
  }




});

server.listen(443, '127.0.0.1');
//server;
server.on('error', function(e) {
  console.log(e);
});