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
  key:  fs.readFileSync('./demoCA/server.key'),  //带路径的文件名，注意两个文件不要写反了
  cert:fs.readFileSync('./demoCA/server.crt')
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

  var ext = path.extname(urlObj.path),
    ext = ext ? ext.slice(1) : 'unknown';
  var contentType = mime[ext] || "text/plain";
  var acceptEncoding = req.headers['accept-encoding'] || "";
  var retType = getReqFileType(req.url);
  var decompressed;
  var responseEncoding;
  console.log('type:'+ retType );


  // var oldReq = request(newUrl);
  // oldReq.on('response', function(oldRes) {
  //   if (oldRes.statusCode !== 200) throw new Error('Status not 200');
  //   responseEncoding = oldRes.headers['content-encoding'] || '';
  //   if (responseEncoding.match(/\bgzip\b/)) {
  //     if(retType === 'js' || retType === 'css' || retType === 'html'){
  //       console.log('origin response header:' + JSON.stringify(oldRes.headers) );
  //       //req.pipe(oldRes);
  //       console.log('response header:' + JSON.stringify(oldRes.headers) );
  //       decompressed =  oldRes.pipe(zlib.createGunzip());
  //       decompressed.on('error', function(e){
  //         console.log('gzib error:' + e);
  //       })
  //       decompressed.pipe(replaceStream(/http:\/\//g, 'https://'))
  //      // oldRes.pipe(replaceStream(/http:\/\//g, 'https://'))
  //           /*.pipe(response({ compress: req }))*/
  //           .pipe(res);
  //     }else{
  //       req.pipe(oldRes);
  //       oldRes.pipe(res);
  //     }
  //   } else if (responseEncoding.match(/\bdeflate\b/)) {
  //     req.pipe(oldRes);
  //     oldRes.pipe(zlib.createDeflate()).pipe(res);
  //   } else {
  //     req.pipe(oldRes);
  //     oldRes.pipe(res);
  //   }
  // });


  var oldRes = request(newUrl, function(error, response, body) {
    console.log('origin response header0:' + JSON.stringify(response.headers) );
  });
  if (acceptEncoding.match(/\bgzip\b/)) {
    if(retType === 'js' || retType === 'css' || retType === 'html'){
      if( req.url.indexOf('ping.js') > -1){//special
        req.pipe(oldRes);
        oldRes.pipe(replaceStream(/http:\/\//g, 'https://'))
        .pipe(res);
      }else{
        console.log('origin response header:' + JSON.stringify(oldRes.headers) );
        //req.pipe(oldRes);
        decompressed =  oldRes.pipe(zlib.createGunzip());
        decompressed.pipe(replaceStream(/http:\/\//g, 'https://'))
        //oldRes.pipe(replaceStream(/http:\/\//g, 'https://'))
          .pipe(res);
        decompressed.on('error', function(e){
         console.log('gzib error:' + e);
        });
      }
    }else{
      req.pipe(oldRes);
      oldRes.pipe(res);
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
