var dnsTransformRules = require('./dnsTable');

/**
 * 特殊域名转换
 * @param  {string} raw [description]
 * @return {[type]}     [description]
 */
//var raw = '<a class="con" href="//Cvda.17173.com/click?edia_code=17173&amp;ad_code=171737230&amp;resource_code=10832&amp;order_code=1010266" target="_blank"><img alt="" src="https://i2.17173.itc.cn/2016/www/2016/gg/hd/09/10/btz-0910-205120-zx2.jpg" width="205" height="120"></a>';
function dnsTransform(raw) {
  for(var key in dnsTransformRules){
    var value = dnsTransformRules[key];
    //var value = dnsTransformRules[key].replace('https:', '');
    //key = key.replace('http:', '');
    var regKey = new RegExp(key,'gi');
    raw = raw.replace(regKey, value);
    console.log(regKey + '===>' +value);
  }
  return raw;
}

module.exports = dnsTransform;


