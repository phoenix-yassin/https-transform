var request = require('request');
var http = require('http');

request
  .get('http://uimg.1qwe3r.com/mrcode.php?ai=57005')
  .on('data', function(response) {
    console.log(response.toString().replace(/var/g, 'abc'))
  });