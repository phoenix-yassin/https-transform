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
  concat = require('concat-stream'),
  getReqFileType = require('./getReqFileType'),
  fs = require('fs');

var options = {
  key:  fs.readFileSync('./ca/server.key'),  //带路径的文件名，注意两个文件不要写反了
  cert:fs.readFileSync('./ca/server.crt')
};

var server = https.createServer(options, function (req, res) {
//req.headers.host
  if(/\/favicon.ico/gi.test(req.url)){
    console.log('=======omit icon=======');
    return;
  }
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
  console.log('type:'+ retType );
  var oldRes = request(newUrl, function(error, response, body) {
  });
  if (acceptEncoding.match(/\bgzip\b/)) {
    if(retType === 'js' || retType === 'css' || retType === 'html'){
      req.pipe(oldRes);
      oldRes.pipe(zlib.createGunzip())
        .pipe(replaceStream(/http:\/\//g, 'https://'))
        .pipe(res);
      }else{
        req.pipe(oldRes);
        oldRes.pipe(zlib.createGunzip()).pipe(res);
      }
  } else if (acceptEncoding.match(/\bdeflate\b/)) {
    req.pipe(oldRes);
    oldRes.pipe(zlib.createDeflate()).pipe(res);
  } else {
    req.pipe(oldRes);
    oldRes.pipe(res);
  }
});

//server;
server.listen(443, '0.0.0.0');
server.on('error', function(e) {
  console.log(e);
});
