/*
被劫持的几种情景:

1,页面本身被放到Iframe里,并且父页面也是www.17173.com
2,页面有非白名单内的iframe
3,页面脚本有非白名单的域名(包括脚本src地址与脚本块内所有url)
4,meta refresh
5,可能性比较小的,页面被直接插入包含非白名单域名内容的html标签

*/
(function(){
  var hijackLog = function(){
    var WHITE_LIST = ['17173.com','17173cdn.com','17173.itc.cn','sohu.com','kongzhong.com','yeyou.com','shouyou.com','adtchrome.com'];
    var HOST_REG = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i,
        URL_REG= /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>“”‘’'"]+|\(([^\s()<>“”‘’'"]+|(\([^\s()<>“”‘’'"]+\)))*\))+(?:\(([^\s()<>“”‘’'"]+|(\([^\s()<>“”‘’'"]+\)))*\)|[^\s`!()\[\]{};:.,<>?«»“”‘’'"]))/gi;

    var sendUnallowedUrl = function(url,desc){
      _jc_ping.push([
       '_trackBlockFlash',
       'bdc363788b2b48c031bf406cf15aa252',
       encodeURIComponent(url + (desc?'#'+desc:''))
      ]);
      //console.log('sendUnallowedUrl',url + (desc?'#'+desc:''));
    };

    //检查域名是否在白名单内
    var urlInWhiteList = function(url){
      var host = url.match(HOST_REG)[2];
      for(var i = 0;i< WHITE_LIST.length;i++){
        if(~host.indexOf(WHITE_LIST[i])) return true;
      }
      return false;
    };

    //从字符串中提取所有url
    var getUrl = function(txt){
      return txt.match(URL_REG);
    };

    /*
    情景: 1
    */
    if(window.top !== window.self){
      sendUnallowedUrl(document.referrer+'#in_iframe');
    }

    if(window.top !== window.self && window.top.location && window.top.location && window.top.location.hostname == window.self.location.hostname){
      sendUnallowedUrl(document.referrer+'#in_self_iframe');
    }
    
    /*
    情景: 2
    */

    $('iframe').each(function(i,n){
      n.src && !urlInWhiteList(n.src) && sendUnallowedUrl(n.src,'has_iframe');
    });

    /*
    情景:3
    */
    var scripts = $('script'),scriptContent='';
    scripts.each(function(i,n){
      n.src && !urlInWhiteList(n.src) && sendUnallowedUrl(n.src,'script_src');
      scriptContent += n.innerHTML;
    });
    var urls = getUrl(scriptContent),urlInScript;
    while(urls.length){
      urlInScript = urls.shift();
      !urlInWhiteList(urlInScript) && sendUnallowedUrl(urlInScript,'script_content');
    }

    /*
    情景: 4
    */
		if(document.referrer && ~document.referrer.indexOf('www.17173.com') &&
       !~location.href.indexOf('white') && !~document.referrer.indexOf('index_error')){
      sendUnallowedUrl(document.referrer + '#meta_refresh');
    }
    /*
    情景: 5,忽略
    */
  };

  !window.STATUS_ISIE6 && !window.STATUS_ISIE7 && $(window).bind('load',function(){
  	setTimeout(function(){
      try{
        hijackLog();
      }catch(e){}
    },2000);
	});
})();