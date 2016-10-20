var path = require('path');
var url = require('url');

function getReqFileType(reqUrl){
  var retType = null;
  var urlObj = url.parse(reqUrl);
  var ext = path.extname(urlObj.path);
  var queryStr = urlObj.query;
  ext = ext ? ext.slice(1) : 'unknown';
  if(/^js$/gi.test(ext)){
    resType = 'js';
  }else if(/^css$/gi.test(ext)){
    resType = 'css';
  }else if(/htm/gi.test(ext)){
    resType = 'html';
  }else if(/callback=/gi.test(queryStr)){
    resType = 'js';
  }else{

  }
  return resType;
}

module.exports = getReqFileType;