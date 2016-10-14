
    
var https = require('https'),  
    url = require('url'),
    mime = require("./mime").types, 
    path = require("path"),
    config = require("./config"),
//    utils = require("./utils"),
    zlib = require("zlib"),
    fs = require('fs');  
  
var options = {  
    key:  fs.readFileSync('./ca/server.key'),  //带路径的文件名，注意两个文件不要写反了  
    cert:fs.readFileSync('./ca/server.crt')  
};  
  
https.createServer(options, function(request, response) {  
  var pathname = url.parse(request.url).pathname;
  var realPath = path.join("assets", path.normalize(pathname.replace(/\.\./g, "")));
  fs.stat(realPath, function (err, stats) {
      if (err) {
          response.writeHead(404, "Not Found", {'Content-Type': 'text/plain'});
          response.write("This request URL " + pathname + " was not found on this server.");
          response.end();
      } else {
          var ext = path.extname(realPath);
          ext = ext ? ext.slice(1) : 'unknown';
          var contentType = mime[ext] || "text/plain";
          response.setHeader("Content-Type", contentType);
          fs.stat(realPath, function (err, stat) {
              var lastModified = stat.mtime.toUTCString();
              var ifModifiedSince = "If-Modified-Since".toLowerCase();
              response.setHeader("Last-Modified", lastModified);
              if (ext.match(config.Expires.fileMatch)) {
                  var expires = new Date();
                  expires.setTime(expires.getTime() + config.Expires.maxAge * 1000);
                  response.setHeader("Expires", expires.toUTCString());
                  response.setHeader("Cache-Control", "max-age=" + config.Expires.maxAge);
              }
              if (request.headers[ifModifiedSince] && lastModified == request.headers[ifModifiedSince]) {
                  response.writeHead(304, "Not Modified");
                  response.end();
              } else {
                  var raw = fs.createReadStream(realPath);
                  var acceptEncoding = request.headers['accept-encoding'] || "";
                  var matched = ext.match(config.Compress.match);
                  if (matched && acceptEncoding.match(/\bgzip\b/)) {
                      response.writeHead(200, "Ok", {'Content-Encoding': 'gzip'});
                      raw.pipe(zlib.createGzip()).pipe(response);
                  } else if (matched && acceptEncoding.match(/\bdeflate\b/)) {
                      response.writeHead(200, "Ok", {'Content-Encoding': 'deflate'});
                      raw.pipe(zlib.createDeflate()).pipe(response);
                  } else {
                      response.writeHead(200, "Ok");
                      raw.pipe(response);
                  }
              }
          });
      }
  });
}).listen(443); 


