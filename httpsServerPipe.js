var https = require('https'),
    http = require('http')  
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
  

var server = https.createServer(options, function (req, res) {
  var urlObj =  url.parse(req.url);
  var newUrl = 'http://ue.17173cdn.com' +/* urlObj.host +*/ urlObj.path;
  console.log(JSON.stringify(urlObj));
  console.log(newUrl);
  var cReq = http.request(newUrl, function (cRes) {
    var body = [];
    cRes.on('data', function (chunk) {
        body.push(chunk);
    });
    cRes.on('end', function () {
        body = Buffer.concat(body);
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
  cReq.end();
    /*var body = [];
    response.on('data', function (chunk) {
        body.push(chunk);
    });
    response.on('end', function () {
        body = Buffer.concat(body);
        if (response.headers['content-encoding'] === 'gzip') {
            zlib.gunzip(body, function (err, data) {
                console.log(data.toString());
            });
        } else {
            console.log(data.toString());
        }
    });*/

});

server.listen(443, '127.0.0.1');
