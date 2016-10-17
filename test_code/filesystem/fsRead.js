var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var writableStream = fs.createWriteStream('file2.txt');

var data = '';
var timer1 = new Date();
readableStream.on('data', function(chunk){
  data += chunk;
});

readableStream.on('end', function(){
  console.log((new Date() - timer1)/1000);
  writableStream.write(data);
});