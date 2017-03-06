//https静态本地服务器
var https = require('https'),
    url = require('url'),
    mime = require("./mime").types,
    path = require("path"),
    config = require("./config"),
    replaceStream = require('replacestream'),
    dnsTransform = require('./dnsTransform'),
    fs = require('fs');

var hostMap = {};

var options = {
    key:  fs.readFileSync('./demoCA/server.key'),  //带路径的文件名，注意两个文件不要写反了
    cert:fs.readFileSync('./demoCA/server.crt')
};

https.createServer(options, function(request, response) {
  var pathname = url.parse(request.url).pathname;
  var realPath = path.join("assets", path.normalize(pathname.replace(/\.\./g, "")));
  console.log('path:' + realPath);
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
              /*var lastModified = stat.mtime.toUTCString();
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
              } else {*/
                  var rawStatics = fs.createReadStream(realPath);
                  var raw = fs.readFileSync(realPath,'utf-8');
                  var data = '';
                  getHostsByRS(rawStatics);
                  var acceptEncoding = request.headers['accept-encoding'] || "";
                  var matched = ext.match(config.Compress.match);

                  /*if (matched && acceptEncoding.match(/\bgzip\b/)) {
                      response.writeHead(200, "Ok", {'Content-Encoding': 'gzip'});
                      raw.pipe(zlib.createGzip()).pipe(response);
                  } else if (matched && acceptEncoding.match(/\bdeflate\b/)) {
                      response.writeHead(200, "Ok", {'Content-Encoding': 'deflate'});
                      raw.pipe(zlib.createDeflate()).pipe(response);
                  } else {}*/
                      response.writeHead(200, "Ok");
                      /** replcer start  **/
                      //raw = raw.replace(/http:\/\//gi,'\/\/');
                      //raw = raw.replace(/http%3a%2f%2f/gi,'\/\/');
                      //annotate dns transformer
                      raw = dnsTransform(raw);
                      /** replcer end  **/
                      response.write(raw, "utf-8");
                      response.end(function() {
                        //console.log(raw);
                      });


                      /*response.write(raw, function() {
                        console.log('raw data:' + raw.toString());
                      });*/
                      //raw.pipe(response);
              //}
          });
      }
  });
}).listen(443);

//统计host数量以及出现次数
function getHostsByRS(raw) {
  var writableStream = fs.createWriteStream('indexhosts.txt');
  var reg = /\/\/([a-zA-Z0-9][-a-zA-Z0-9]{1,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?)\//gi;
  var data = '';
  raw.on("data",function(chunk) {
       data += chunk;
  });
  raw.on("end",function() {
    var temp = data.toString();
    var hosts = temp.match(reg);
    hosts = hosts.join().replace(/\//g, '').split(',');
    var hosts_num = hosts? hosts.length: 0;
    for(var i = 0; i < hosts.length; i++ ){
     if( hosts_num ){
       if(hostMap[hosts[i]]){
         hostMap[hosts[i]] += 1;
       }else{
         hostMap[hosts[i]] = 1;
       }
     }
    }
    // console.log(JSON.stringify(hostMap));
    writableStream.write(JSON.stringify(hostMap));
    writableStream.on('end', function(err){
      console.log('all is written !');
    });
  });
}

