(function(exports){function _jc_main(){function _jc_log(e,t){var n=new Image,r=e;return exports.pingjs.imgTemp=n,/^http/.test(r)&&(r=r.substring(r.indexOf("//"),r.length)),r=_jc_o.F+"//"+r.replace(/^\/\//,""),n.onload=n.onerror=n.onabort=function(){t&&t(e),n.onload=n.onerror=n.onabort=null,exports.pingjs.imgTemp=n=null},n.src=r,n}function _paramsReset(){var e=exports.pingjs.cookie;_jc_o={u:"log1.17173.com",age:(new Date).getTime()+1009152e6,ref:_jc_d.referrer,da:_jc_g_dm(_jc_d.location.toString()),now:new Date,uv:"",nuv:1,kn:"0",ja:0,flu:"-1",os:"0",scr:"",clr:"0",ln:"",ck:0,sl:0,bs:"0",clt:1,bbs:"",ssid:"",ssid2:"",svn:"",diff:"",appkey:118,se:"",kw:"",rtype:1,rfd:"0",ol:0,uid:"",F:window.location.protocol=="https:"?"https:":"http:",ua:navigator.userAgent.toString(),appv:navigator.appVersion?navigator.appVersion.toString():"",mp:"",i11:null,val:null,engine:_jc_engine},_jc_o.u=_jc_o.F+"//"+_jc_o.u,_jc_o.uv=e.getData("SUV"),_jc_o.ssid=e.getData(_ckpre+"ssid"),_jc_o.ssid2=e.getData(_ckpre+"ssid2"),_jc_o.diff=e.getData("DIFF"),_jc_o.diff=_jc_o.diff&&/^\d+$/.test(_jc_o.diff)?parseInt(_jc_o.diff):0,_jc_o.ref.indexOf("http")>0&&(_jc_o.ref=_jc_o.ref.substring(_jc_o.ref.indexOf("http"))),_jc_g_kw2()}function _jc_f_decode64(e){var t,n,r,i,s,o,u;o=e.length,s=0,u="";while(s<o){do t=_jcDeChars[e.charCodeAt(s++)&255];while(s<o&&t==-1);if(t==-1)break;do n=_jcDeChars[e.charCodeAt(s++)&255];while(s<o&&n==-1);if(n==-1)break;u+=String.fromCharCode(t<<2|(n&48)>>4);do{r=e.charCodeAt(s++)&255;if(r==61)return u;r=_jcDeChars[r]}while(s<o&&r==-1);if(r==-1)break;u+=String.fromCharCode((n&15)<<4|(r&60)>>2);do{i=e.charCodeAt(s++)&255;if(i==61)return u;i=_jcDeChars[i]}while(s<o&&i==-1);if(i==-1)break;u+=String.fromCharCode((r&3)<<6|i)}return u}function _jc_urlsafe_base64_decode(e){var t=e.replace(/-/g,"+").replace(/_/g,"/"),n=0;n=t.length%4,n&&(t+="====".substr(0,n)),t=_jc_f_decode64(t);var r=t.match(/uid:(\d+)|(.*?)/i);return r&&r[1]?r[1]:0}function _jc_f_account(){var e=exports.pingjs.cookie.getData("ppinf17173"),t=exports.pingjs.cookie.getData("lastdomain17173");try{if(e!="")return e=e.split("|"),e.length<4?0:_jc_urlsafe_base64_decode(e[3])+"|2";if(t!=""){t=t.split("|");if(t.length>1){t=_jc_f_decode64(t[1]),t=t.split("|");if(t.length>0)return t=t[0]+"|1",t}}return 0}catch(n){return 0}}function _jc_f_isDPR(e){var t=!1,n=["ch","cm","mbd"];/iPhone|iPad|iPod|CPU OS/i.test(navigator.userAgent)&&(t=!0),/Windows Phone.*/i.test(_jc_o.os)&&(t=!0);if(_jc_o.clt==2)if(typeof document.width!="undefined")document.width===screen.width&&e!=1&&(t=!0);else{for(var r=0;r<n.length;r++)_jc_o.bs===n[r]&&(t=!0);document.body.scrollWidth&&Math.ceil(screen.width/document.body.scrollWidth)===1&&(t=!0)}return t}function _jc_f_client(){var e=navigator.userAgent.match(/iphone|ipad|ipod|android|phone|mobile|playbook|tablet|wap|netfront|java|operamobi|operamini|ucweb|windowsce|symbian|symbianos|series|webos|hpwOS|sony|blackberry|dopod|nokia|samsung|palmsource|xda|pieplus|meizu|midp|cldc|motorola|foma|docomo|up.browser|up.link|blazer|helio|hosin|huawei|novarra|coolpad|webos|techfaith|palmsource|alcatel|amoi|ktouch|nexian|ericsson|philips|sagem|wellcom|bunjalloo|maui|smartphone|iemobile|spice|bird|zte-|longcos|pantech|gionee|portalmmm|jig browser|hiptop|benq|haier|^lct|320x320|240x320|176x220|bolt|eudoraweb|touchpad|windows ce|windows mobile/i)!=null,t=navigator.platform.match(/Win\d{2}|Windows|Mac|Linux|X11/i)!=null;return e?2:t?1:encodeURIComponent(navigator.platform)}function _jc_f_ie_t(e){try{for(var t in e){var n=_jc_o.ua.match(e[t][0]);n||(n=_jc_o.appv.match(e[t][0]));if(n&&e[t][1])return e[t][1]==="ie-n"?n.length>1?"ie"+n[1]:"ie":e[t][1]==="ie11+"?n.length>1?"ie"+n[1]:"ie":e[t][1];if(n)return n[0]}return"0"}catch(r){return"0"}}function _jc_f_os_t(e){try{for(var t in e){var n=_jc_o.ua.match(e[t][0]);n||(n=_jc_o.appv.match(e[t][0]));if(n&&n.length>0){if(e[t].length==1){var r="";for(var i=1;i<n.length;i++)i>1&&(r+=i==2?" ":"."),r+=n[i];return r}if(e[t].length==2)return e[t][1]}}return"0"}catch(s){return"0"}}function _jc_f_q(e){var t;return(t=(e=e.match(/^(https?:\/\/)?([^\/\?#]*)/))?e[2].replace(/.*@/,""):_jc_o.val,e=t)?e.replace(/:\d+$/,""):e}function _jc_f_o(e,t){var n=e.match(RegExp("(^|&|\\?|#)("+t+")=([^&#]*)(&|$|#)",""));return n?n[3]:_jc_o.val}function _jc_g_kw2(){if(_jc_o.ref=="")return;var e=0,t,n="";if((e=_jc_o.ref.indexOf("://"))<0)return;t=_jc_o.ref.substring(e+3,_jc_o.ref.length),t.indexOf("/")>-1&&(t=t.substring(0,t.indexOf("/")));for(var r=0,i=_jc_engine.length;r<i;r++){var s=_jc_f_q(_jc_o.ref);if(RegExp("(^|\\.)"+_jc_engine[r][1].replace(/\./g,"\\.")).test(s)){var o=_jc_f_o(_jc_o.ref,_jc_engine[r][2])||"",u=_jc_engine[r][0],a="";_jc_o.se=u,o?_jc_o.kw=o:s==="m.baidu.com"&&(a=_jc_o.ref.match(/w=\d+_10_(.*?)\//),a&&a.length>1)&&(_jc_o.se=1,_jc_o.kw=a[1])}}_jc_f_Refertype()}function _jc_f_Refertype(){if(_jc_o.ref!="")if(_jc_o.se!="")_jc_o.rtype=2;else{var e=_jc_f_q(_jc_o.ref);e&&!!~e.indexOf(".17173.")?_jc_o.rtype=3:_jc_o.rtype=4}}function _jc_f_cr(e){var t="";if(!e||e=="")return"";for(var n=0;n<e.length;n++)e.charAt(n)==" "?t+="+":t+=e.charAt(n);return t}function _jc_f_ie(){var e={},t,n=_jc_o.ua.toLowerCase();return(t=n.match(/msie ([\d.]+)/))?e.ie=t[1]:(t=n.match(/Trident.+rv:([\d.]+)/i))?e.ie11=t[1]:(t=n.match(/Edge\/([\d.]+)/i))?e.edge=t[1]:(t=n.match(/firefox\/([\d.]+)/))?e.firefox=t[1]:(t=n.match(/chrome\/([\d.]+)/))?e.chrome=t[1]:(t=n.match(/opera\/([\d.]+)/))?e.opera=t[1]:(t=n.match(/version\/([\d.]+).*safari/))?e.safari=t[1]:(t=n.match(/Mac OS.+AppleWebKit\/([\d.]+)/i))?e.safari=t[1]:0,e.ie?"IE: "+e.ie:e.ie11?"IE: "+e.ie11:e.edge?"edge: "+e.edge:e.firefox?"Firefox: "+e.firefox:e.chrome?"Chrome: "+e.chrome:e.opera?"Opera: "+e.opera:e.safari?"Safari: "+e.safari:"0"}function _jc_f_bw(){var e=sc="";_jc_o.ln=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"",_jc_o.ln=_jc_o.ln.toLowerCase(),_jc_o.kn=_jc_f_ie(),_jc_o.ja=navigator.javaEnabled()?1:0,_jc_o.flu=_jc_g_fl(),_jc_o.os=_jc_f_os_t(_jc_pcsystem),_jc_o.ck=navigator.cookieEnabled?1:0,_jc_o.ck===1&&(_jc_o.ck=exports.pingjs.cookie.getCookieEnabled()?1:0),_jc_o.bs=_jc_f_ie_t(_jc_browser),_jc_o.clt=_jc_f_client(),_jc_o.bs==="ch"&&_jc_o.clt===2&&(_jc_o.bs="cm");if(self.screen){var t=typeof window.devicePixelRatio!="undefined"?window.devicePixelRatio:1;e=_jc_f_isDPR(t)?Math.ceil(screen.width*t)+"x"+Math.ceil(screen.height*t):screen.width+"x"+screen.height,sc=screen.colorDepth?screen.colorDepth+"-bit":"0"}else if(self.java){var n=java.awt.Toolkit.getDefaultToolkit(),r=n.getScreenSize();e=r.width+"x"+r.height}_jc_o.scr=e,_jc_o.clr=sc}function _jc_g_fl(){var f="-1",n=navigator;if(n.plugins&&n.plugins.length){for(var ii=0;ii<n.plugins.length;ii++)if(n.plugins[ii].name.indexOf("Shockwave Flash")!=-1){f=n.plugins[ii].description.split("Shockwave Flash ")[1];break}}else if(window.ActiveXObject)for(var ii=20;ii>=2;ii--)try{var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");if(fl){f=ii+".0";break}}catch(e){}return f=="-1"?f:f.substring(0,f.indexOf(".")+2)}function _jc_f_rp(e,t,n){var r="",i="",s,o=t.length;s=e.indexOf(t);while(s!=-1)r=e.substr(0,s),e=e.substr(s+o),i=i+r+n,s=e.indexOf(".");return i+=e,i}function _jc_g_dm(e){var t=/^([^\:]+)\:\/\/([^\:\/\?]+)(\:\d+)?(\/[^\?]*)?(\?.*)?$/;return e=e.match(t)[2],e}function _jc_g_h(){var e=_jc_o.da,t="",n="",r=!1;for(var i=0;i<_jcexl.length;i++){n=new RegExp(""+_jc_f_rp(_jcexl[i],".","\\.")+"$");if(n.test(e)){r=!0,t=_jcexl[i],e=e.substr(0,e.lastIndexOf(t)),e.lastIndexOf(".")>0&&(e=e.substr(e.lastIndexOf(".")+1));break}}return r?e+t:"auto"}function _jc_f_trim(e){return e.replace(/\s+/g,"")}function _jc_f_pageclk(){function s(e,t,n){e.attachEvent?e.attachEvent("on"+t,function(t){n.call(e,t)}):e.addEventListener&&e.addEventListener(t,n,r)}function o(t){return function(r){var s,o;i?(o=Math.max(document.documentElement.scrollTop,document.body.scrollTop),s=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),s=r.clientX+s,o=r.clientY+o):(s=r.pageX,o=r.pageY);var a=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(e.align){case 1:s-=a/2;break;case 2:s-=a}s='{"x":'+s+',"y":'+o+",",r=r.target||r.srcElement;if(r&&typeof r.tagName!="undefined"&&r.tagName.toLowerCase()!="a")e:{for(o="A";(r=r.parentNode)&&r.nodeType==1;)if(r.tagName==o)break e;r=n}s+=r?'"t":"a","u":"'+encodeURIComponent(r.href)+'"}':'"t":"b"}',r=s,""!=r&&(s=(_jc_o.u+"/pv?appkey="+_jc_o.appkey).length,s+10>1024||(s+encodeURIComponent(t.b.join(",")+(t.b.length?",":"")).length+10>1024&&u(t),t.b.push(r),(t.b.length>=10||/"t":"a"/.test(r))&&u(t)))}}function u(e){var t=new Image;e.b.length!=0&&(e.a.et=2,e.a.ep="["+e.b.join(",")+"]",t.src=_jc_o.u+"/pv?appkey="+_jc_o.appkey+"&suv="+_jc_o.uv+"&nuv="+_jc_o.nuv+"&ssid="+_jc_o.ssid+"&bp="+encodeURIComponent(e.a.ep)+"&se="+_jc_o.se+"&kw="+_jc_o.kw+"&rf="+encodeURIComponent(_jc_o.ref)+"&bwt="+_jc_o.kn+"&bw="+_jc_o.bs+"&Jav="+_jc_o.ja+"&Flu="+_jc_o.flu+"&scr="+_jc_o.scr+"&Clr="+_jc_o.clr+"&Os="+_jc_o.os+"&ck="+_jc_o.ck+"&Ln="+_jc_o.ln+"&rft="+_jc_o.rtype+"&r="+getRandom()),e.b=[]}function a(){if(typeof window["_bdhm_loaded_"+e.id]=="undefined"){window["_bdhm_loaded_"+e.id]=t;var n=this;n.a={},n.b=[],n.J()}}var e={ctrk:!0,align:1},t=!0,n=null,r=!1,i=/msie (\d+\.\d+)/i.test(navigator.userAgent);a.prototype={m:function(){var t=this;e.ctrk&&(s(document,"mouseup",o(this)),s(window,"beforeunload",function(){u(t)}),setInterval(function(){u(t)},6e5))},J:function(){try{this.m&&this.m()}catch(e){}}},new a}function _jc_set_jc_diff(){var e=new Date;exports.pingjs.cookie.setData("DIFF",e.getTime(),_jc_o.age)}function bindEvent(e,t,n){e.attachEvent?e.attachEvent("on"+t,function(t){n.call(e,t)}):e.addEventListener&&e.addEventListener(t,n,!1)}function _jc_err_save(e){var t=exports.pingjs.cookie,n=t._getSessionStorage(_ckpre+"unsents")||"";e=encodeURIComponent(e.replace(/^https?:\/\//,"")),n=e+(n?","+n:""),t._setSessionStorage(_ckpre+"unsents",n)}function _jc_err_send(){var e=exports.pingjs.cookie,t=e._getSessionStorage(_ckpre+"unsents")||"";if(t)for(var t=t.split(","),n=0,r=t.length;n<r;n++)_jc_log(decodeURIComponent(t[n]),function(e){_jc_err_remove(e)})}function _jc_err_remove(e){var t=exports.pingjs.cookie,n=t._getSessionStorage(_ckpre+"unsents")||"";if(n){var r=RegExp(encodeURIComponent(e.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+",?","g");n=n.replace(r,"").replace(/,$/,""),n?t._setSessionStorage(_ckpre+"unsents",n):t._delSessionStorage(_ckpre+"unsents")}}function getRandom(){return _jc_o.now.getTime()*1e3+Math.round(Math.random()*2147483647)}function getSSID(){return _jc_o.uv+""+getRandom()+_jc_o.now.getTime()}function _jc_f_init(){_paramsReset(),_jc_err_send(),exports.pingjs.api.queue.run("log_b");var e=getRandom(),t;_jc_o.ref==""?(_jc_o.ref="0",_jc_o.rfd="0"):_jc_o.rfd=_jc_g_dm(_jc_o.ref),_jc_o.uv==""&&(_jc_o.uv=e,exports.pingjs.cookie.setData("SUV",_jc_o.uv.toString(),_jc_o.age));var n=exports.pingjs.cookie.getData("NUV"),r=new Date;n==""?(r.setDate(r.getDate()+1),r=new Date(r.getFullYear(),r.getMonth(),r.getDate()),exports.pingjs.cookie.setData("NUV",r.getTime(),_jc_o.age)):n&&r.getTime()>parseInt(n)&&(_jc_o.nuv=0),_jc_f_bw(),_jc_o.sl=navigator.standalone?1:0;try{top.location!=self.location&&_jc_o.rfd.indexOf(".17173.")==-1&&(_jc_o.rfd=3)}catch(i){_jc_o.rfd=3}_jc_o.ref.indexOf("#")>-1&&(_jc_o.ref=_jc_o.ref.substring(0,_jc_o.ref.indexOf("#"))),typeof seourl!="undefined"&&(_jc_o.bbs=seourl),_jc_o.uid=_jc_f_account();if(_jc_ping_autoPageview===!1){_jc_ping_autoPageview=!0;return}r=new Date;if(_jc_o.uv===e)_jc_o.diff=0;else if(_jc_o.diff){var s=r.getTime()-_jc_o.diff;_jc_o.diff=s<=36e5?-1:Math.ceil(s/36e5)}else _jc_o.diff=-3;_jc_set_jc_diff();var o=exports.pingjs.cookie.getData("ONLINE_TIME");if(o=="")o=_jc_o.now.getTime(),exports.pingjs.cookie.setData("ONLINE_TIME",o);else{var u=_jc_o.now.getTime();_jc_o.ol=Math.round((parseInt(u)-parseInt(o))/1e3);if(isNaN(_jc_o.ol)||_jc_o.ol<0)_jc_o.ol=0;exports.pingjs.cookie.setData("ONLINE_TIME",u)}r=new Date,r.setTime(r.getTime()+18e5),_jc_o.ssid2===""&&_jc_o.ssid!=""&&/Windows Phone.*/i.test(_jc_o.os)&&(_jc_o.ssid2=_jc_o.ssid),_jc_o.ssid!==_jc_o.ssid2||!~_jc_o.ssid.indexOf("|")?(_jc_o.ssid=getSSID(),_jc_o.svn=1,exports.pingjs.cookie.setData(_ckpre+"ssid",_jc_o.ssid+"|"+_jc_o.svn,r.getTime()),exports.pingjs.cookie.setData(_ckpre+"ssid2",_jc_o.ssid+"|"+_jc_o.svn)):(_jc_o.svn=_jc_o.ssid.split("|")[1],_jc_o.svn=/^\d+$/.test(_jc_o.svn)?parseInt(_jc_o.svn)+1:1,_jc_o.ssid=_jc_o.ssid.split("|")[0],exports.pingjs.cookie.setData(_ckpre+"ssid",_jc_o.ssid+"|"+_jc_o.svn,r.getTime()),exports.pingjs.cookie.setData(_ckpre+"ssid2",_jc_o.ssid+"|"+_jc_o.svn),_jc_o.svn=_jc_o.svn==1?-1:_jc_o.svn),exports.pingjs.api.queue.run("log_c");var a=[e,_jc_o.uv,_jc_o.nuv,_jc_o.rfd,_jc_o.ref,_jc_o.da,_jc_o.se,_jc_o.kw,_jc_f_trim(_jc_o.kn),_jc_o.ja,_jc_o.flu,_jc_o.os,_jc_o.scr,_jc_o.clr,_jc_o.ln,_jc_o.ck,_jc_o.sl,_jc_o.bs,_jc_o.ol,_jc_o.mp,_jc_o.ssid,_jc_o.svn,_jc_o.diff,_jc_o.clt,_jc_o.uid,_jc_o.rtype,_jc_o.bbs];_src=_jc_o.u+"/ping.gif?"+a.join("?t?=")+"?t?=",_jc_o.i11=exports.pingjs.api.sendlog(_src),_jc_f_pageclk()}function _jc_f_isType(e,t){return"[object "+t+"]"==={}.toString.call(e)}var _jcexl=new Array(".com.cn",".net.cn",".org.cn",".gov.cn",".com",".cn",".net",".org",".mobi",".biz",".cc",".us",".info",".name",".tv",".asia",".hk"),_ckpre="ued_ping_",_jcDeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1),_jcArg=["uv","ref","ssid","nuv","rtype","kw","rfd","se","uid"],_jc_pcsystem=[[/(Windows NT 5\.0|Windows 2000)/i,"Win 2000"],[/(Windows NT 5\.1|Windows xp)/i,"Win XP"],[/(Windows NT 5\.2|Windows 2003)/i,"Win 2003"],[/(Windows NT 6\.0|Windows Vista)/i,"Win Vista"],[/(Windows NT 6\.1|Windows 7)/i,"Win 7"],[/(Windows NT 6\.2; ARM;)/i,"Windows RT"],[/(Windows NT 6\.2)/i,"Win 8"],[/(Windows NT 6\.3)/i,"Win 8.1"],[/(Windows NT 6\.4)/i,"Win 10/6.4"],[/(Windows NT 10\.0)/i,"Win 10"],[/(XBLWP7|WP7)/i,"Windows Phone"],[/(Windows ?Mobile| WM([0-9]) )/i,"Windows Mobile"],[/(Windows Phone).* (\d+)\.(\d+)/i],[/(Win98|Windows 98)/i,"Win 98"],[/(WinME|Windows ME)/i,"Windows ME"],[/(WinCE|WindowsCE|Windows CE)/i,"Windows CE"],[/(TouchPad)\/(\d+)\.(\d+)/i],[/(Android)[\- ]?([\d]+)\.([\d]+)/i],[/(FreeBSD)/i],[/(OpenBSD)/i],[/(iPhone|iPad|iPod).*OS (\d+)[_.](\d+)/i],[/(iPhone|iPad|iPod|CPU.*OS)/i,"IOS"],[/(BlackBerry)[ ]?[0-9]*[i]?[\/]?([0-9]+)\.([0-9]*)/i],[/(BB10|(Blackberry)|(RIM Tablet OS)|(Playbook))/i,"BlackBerry OS"],[/(CrOS) [a-z0-9_]+ (\d+)\.(\d+)/i],[/(Samsung)/i,"Samsung"],[/(HUAWEI)/i,"Huawei"],[/\(Mobile;.+Firefox\/\d+\.\d+/i,"Firefox OS"],[/(Brew|BREW|BMP)/i,"Brew MP"],[/(Windows NT \d+\.\d+)/i],[/(Windows NT|SUSE|Fedora|Red Hat|PCLinuxOS|Puppy|PCLinuxOS|CentOS|hpwOS|webOS|AppleTV|Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Slackware|Pre|Pixi|WebTV|GoogleTV|SymbianOS)/i],[/(HTC|Sprint APA(9292)|(ADR[A-Za-z0-9]+))/i,"HTC"],[/(Mac)/i,"Mac OS"],[/(J2ME)/i,"J2ME"],[/(Symbian|SymbOS|S60|MeeGo|Series[ ]?60|SymbianOS\/9.1|NOKIA|Series40|Maemo)/i,"Symbian"],[/(Linux)[\/ ]?(\d+)\.(\d+)/i],[/Linux/i,"Linux"],[/(Unix|UNIX|X11)/i,"Unix"],[/(WinNT4.0)/i,"Windows NT 4.0"]],_jc_browser=[[/(MicroMessenger)/i,"wx"],[/(Qzone)/i,"qz"],[/(NewsArticle)/i,"jrtt"],[/(lolapp)/i,"lolapp"],[/(YiXin)/i,"yx"],[/(yhdios|yhdandroid)/i,"yhd"],[/(hao123)/i,"h123"],[/(SogouMobileBrowser)/i,"msg"],[/(Sogousearch)/i,"mss"],[/AliApp\(WX\/.+\)/i,"mww"],[/AliApp\(TB\/.+\)/i,"mtb"],[/(MQQBrowser|Mobile.*V1_AND_SQ_)/i,"mq"],[/(Weibo)/i,"wb"],[/(SohuNews)/i,"sn"],[/(NewsApp)/i,"na"],[/(TencentMicroBlog|TXMicroBlog)/i,"twb"],[/(17173)/,"17173"],[/(QQBrowser|TencentTraveler)/i,"qq"],[/(Maxthon)/i,"ma"],[/(360SE|360EE|360(.*?)browser)/i,"36"],[/(Theworld)/i,"th"],[/( SE )/i,"se"],[/(LBBROWSER)/i,"lb"],[/(TaoBrowser)/i,"tb"],[/(baiduboxapp)/i,"mbda"],[/Mobile.*baidubrowser/i,"mbd"],[/baiduie8|baidubrowser|FlyFlow|BIDUBrowser/i,"bd"],[/(UCBrowser|UC Browser|UCWEB|UC AppleWebKit)/i,"uc"],[/(MiuiBrowser|XiaoMi|MiuiBro)/i,"mui"],[/(QQ\/)/i,"mqq"],[/MSIE (\d+)/i,"ie-n"],[/Trident.+rv:(\d+)/i,"ie11+"],[/Edge\/(\d+)/i],[/(Nokia|BrowserNG|NokiaBrowser|Series60|S40OviBrowser)/i,"nk"],[/HUAWEI.*Version/i,"hw"],[/(SamsungBrowser)/i,"ss"],[/(QHBrowser)/i,"m360"],[/(CrMo|CriOS)/i,"cm"],[/(Opera Mini)/i,"opm"],[/(Opera|Oupeng|OPiOS|OPandroid|OPR\/\d+)/i,"op"],[/(Firefox)/i,"ff"],[/(Chrome)/i,"ch"],[/(MSIE)/i,"ie"],[/(iPhone|iPod)/i,"ms"],[/(iPad)/i,"ipad"],[/(Android)/i,"ad"],[/(Mobile.*Safari)/i,"msa"],[/(Safari)/i,"sa"]],_jc_engine=[[1,"baidu.com","word|wd|w|kw"],[2,"google.","q"],[4,"sogou.com","query|keyword"],[6,"search.yahoo.com","p"],[7,"yahoo.cn","q"],[8,"soso.com","w|key|query"],[11,"youdao.com","q"],[12,"gougou.com","search"],[13,"bing.com","q"],[14,"so.com","q"],[14,"so.360.cn","q"],[14,"v.360.cn","q"],[14,"so.360kan.com","kw"],[14,"haosou.com","q"],[15,"jike.com","q"],[16,"qihoo.com","kw"],[17,"etao.com","q"],[18,"soku.youku.com","keyword"],[18,"soku.com","keyword"],[19,"easou.com","q"],[20,"glb.uc.cn","keyword|word|q"],[21,"yunfan.com","q|kw|key"],[22,"zhongsou.com","w"],[23,"chinaso.com","q|wd"],[24,"sm.cn","q"]],_jc_o={},_jc_d=document,_jc_ping_autoPageview=!0;exports.pingjs.getUrlParse=function(){function t(e){return Object.prototype.toString.apply(e)==="[object Array]"}var e=/^([^\:]+)\:\/\/([^\:\/\?]+)(\:\d+)?(\/[^\?]*)?(\?.*)?$/;return{parse:function(n){var r=n.match(e);if(!r)return null;var i=r[2],s={};if(r[5]){var o=r[5].substr(1).split("&");for(var u=0;u<o.length;u++){var a=o[u].split("="),f=a[0],l=a[1];s.hasOwnProperty(f)?t(s[f])?s[f].push(l):s[f]=[s[f],l]:s[f]=l}}return{hostname:i,query:s}}}}(),exports.pingjs.request=exports.pingjs.getUrlParse.parse(window.location.href).query,exports.pingjs.cookie={opts:{userdata:null,empty:"",ckEnabled:""},getCookieEnabled:function(){var e="";return this.opts.ckEnabled!=""?this.opts.ckEnabled:(this._setCookie(_ckpre+"ck17173","17173"),e=this._getCookie(_ckpre+"ck17173"),this._delCookie(_ckpre+"ck17173"),e==="17173"?(this.opts.ckEnabled=!0,!0):(this.opts.ckEnabled=!1,!1))},_delCookie:function(e){var t=new Date;t.setTime(t.getTime()-1e3),this._setCookie(e,"",t.getTime())},_setCookie:function(e,t,n){var r;n&&(r=new Date,r.setTime(n)),document.cookie=e+"="+t+"; domain="+_jc_g_h()+(r?"; expires="+r.toGMTString():"")+"; path=/;"},_getCookie:function(e){var t=RegExp("(^| )"+e+"=([^;]*)(;|$)").exec(document.cookie);return t?t[2]:this.opts.empty},_userData:function(){try{this.opts.userdata||(this.opts.userdata=document.createElement("input"),this.opts.userdata.type="hidden",this.opts.userdata.style.display="none",this.opts.userdata.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(this.opts.userdata))}catch(e){return!1}return!0},_getUserData:function(e){if(this._userData()){try{return this.opts.userdata.load(document.location.hostname),this.opts.userdata.getAttribute(e)}catch(t){return this.opts.empty}return this.opts.empty}},_setUserData:function(e,t,n){if(this._userData()){var r=this.opts.userdata,i=document.location.hostname;n||(n=new Date,n.setTime(n.getTime()+18e5)),r.expires=n.toUTCString(),r.load(i),r.setAttribute(e,t),r.save(i)}},_setLocalStorage:function(e,t,n){var r=new Date;r.setTime(n);try{window.localStorage?(t=r.getTime()+"|"+t,window.localStorage.setItem(e,t)):this._setUserData(e,t,r)}catch(i){}},_getLocalStorage:function(e){try{if(e=window.localStorage.getItem(e)){var t=e.indexOf("|"),n=e.substring(0,t)-0;return n&&n>(new Date).getTime()?e.substring(t+1):this.opts.empty}}catch(n){return this.opts.empty}},_delLocalStorage:function(e){try{window.localStorage.removeItem(e)}catch(t){}},_setSessionStorage:function(e,t){try{window.sessionStorage?window.sessionStorage.setItem(e,t):this._setUserData(e,t)}catch(n){}},_getSessionStorage:function(e){try{return window.sessionStorage?window.sessionStorage.getItem(e):this.opts.empty}catch(t){return this.opts.empty}},_delSessionStorage:function(e){try{window.sessionStorage.removeItem(e)}catch(t){}},getData:function(e){try{var t;this.getCookieEnabled()?t=this._getCookie(e):t=this._getSessionStorage(e)||this._getLocalStorage(e)||this._getUserData(e);if(!t&&t!=0||typeof t=="undefined")t="";return t}catch(n){return""}},setData:function(e,t,n){try{this.getCookieEnabled()?this._setCookie(e,t,n):n?this._setLocalStorage(e,t,n):this._setSessionStorage(e,t)}catch(r){}},delData:function(e){try{this.getCookieEnabled()?this._delCookie(e):(this._delLocalStorage(e),this._delSessionStorage(e))}catch(t){}}},exports.pingjs.get=function(){var e=arguments,t,n=e.length>0?e:_jcArg;for(var r=0,i=n.length;r<i;r++){var s=n[r],o=_jc_o[s];typeof o!="undefined"&&(t=t||{},o=s==="ref"?encodeURIComponent(o):o,n.length===1?t=o:t[s]=o)}return typeof t=="undefined"?null:t},exports.pingjs.api=function(){function f(e){var t=12e5,n=exports.pingjs.cookie._getCookie(e),r;if(typeof n!="string"||!~n.indexOf(","))n=[1,(new Date).getTime()],r=0;else{var i=(new Date).getTime();n=n.split(","),n[0]=parseInt(n[0]),n[1]=parseInt(n[1]),r=parseInt((i-n[1])/1e3),i>n[1]+t?(n[0]=1,r=0):n[0]++,n[1]=i}return exports.pingjs.cookie._setCookie(e,n.join()),[n[0],r]}function l(e){return encodeURIComponent(decodeURIComponent(e))}var e=!1,t={},n=function(e){if(_jc_f_isType(e,"Array")){var t=e[0];window._jc_api&&window._jc_api.hasOwnProperty(t)&&!c.hasOwnProperty(t)&&(c[t]=window._jc_api[t]),c.hasOwnProperty(t)&&_jc_f_isType(c[t],"Function")?c[t](e):(h(t,function(n){c.hasOwnProperty(t)&&_jc_f_isType(c[t],"Function")&&(c[t](e),n&&n())}),window._jc_ping_cache=window._jc_ping_cache||[],window._jc_ping_cache.push(e))}},r={push:function(){n.apply(exports.pingjs.api,arguments)}},i=function(){var e=window._jc_ping;if(e&&e.length)for(var t=0,n=e.length;t<n;t++){var r=e[t];switch(r[0]){case"_setAutoPageview":1<r.length&&(r=r[1],_jc_ping_autoPageview=r)}}},s=function(e,t){var n=document.createElement("IFRAME");n.setAttribute("src","http://www."+e+".com/lib/stats/tb.html?pmd="+t),n.style.display="none",n.style.width="1",n.style.height="1",document.body.appendChild(n)},o=function(e){if(e!=""){if(_jc_o.clt===2)return _jc_o.mp=e,!0;if(_jc_o.bs==="0")return _jc_o.bs=_jc_o.mp=e,_jc_o.clt=2,!0}return!1},u=function(e){if(window._jc_ping&&e)for(var t=0,n=_jc_ping.length;t<n;t++)if(_jc_ping[t][0]===e)return!0;return!1},a=function(){var e=window,t=exports.pingjs.request;t&&t.pmd&&/^[a-z|0-9]{2,10}$/.test(t.pmd)&&(e._jc_ping=e._jc_ping||[],!u("_trackBrowser")&&e._jc_ping.push(["_trackBrowser",t.pmd]))},c={_trackBrowser:function(e){var t=this,n=["17173","yeyou"],r=exports.pingjs.cookie.getData(_ckpre+"tb");if(e&&e.length&&1<e.length&&_jc_f_isType(e[1],"String")){if(!o(e[1])||r===e[1])return;exports.pingjs.cookie.setData(_ckpre+"tb",e[1]);for(var i=0,u=n.length;i<u;i++)~document.location.hostname.indexOf(n[i])||s(n[i],e[1])}else r&&o(r)},_trackPageview:function(e){_jc_f_init()},_track:function(e){if(e&&e.length>2){var t=e[2].svn,n=!0;if(t===!0||typeof t=="string"){t=typeof t=="string"?t:e[1];var r=f(_ckpre+"tk"+t);e[2].svn=r[0],e[2].ol=r[1]}else delete e[2].svn;e[2].safety===!1&&(delete e[2].safety,n=!1),e[2].u&&(e[2].u=l(e[2].u)),exports.pingjs.api.log(e[1],e[2],n)}},_trackBlockClick:function(e){if(e&&e.length>1){var t={u:e[2]?e[2]:"",ads:e[1],svn:window.location.host};this._track(["_track",113,t])}},_trackBlockFlash:function(e){this._trackBlockClick(e)},_trackClick:function(e){e&&e.length===2&&typeof e[1]=="string"&&this._track(["_track",181,{u:e[1],safety:!1}])}},h=function(e,n){t[e]=t[e]||[],t[e].push(n)},p=function(e,n){t[e]=t[e]||[];var r=t[e];for(var i=r.length,s=0;s<i;s++)r[s](n)};return{queue:{save:h,run:p},apiInit:function(){var t=window._jc_ping,i=!1;if(e)return;e=!0;if(t&&t.length)for(var s=0,o=t.length;s<o;s++)t[s][0]==="_trackBrowser"&&(i=!0),_jc_f_isType(t[s],"Array")&&n(t[s]);!i&&_jc_ping_autoPageview&&c._trackBrowser(),window._jc_ping=r},sendlog:function(e,t){var n=t===!1?!1:!0;return n&&_jc_err_save(e),_jc_log(e,function(e){n&&_jc_err_remove(e)})},log:function(e,t,n){var r=exports.pingjs.get(),i=_jc_o.u+"/pv?appkey="+e,s=[];if(t)for(var o in t)r[o]=t[o];for(var o in r)o==="ref"&&(r[o]=encodeURIComponent(r[o])),s.push(o+"="+r[o]);i+="&"+s.join("&"),i+="&r="+getRandom(),this.sendlog(i,n),t=null},r:function(){return getRandom()},init:function(){var e=this;a(),i(),e.queue.save("log_b",function(){e.apiInit()})},extend:function(e,t){c[e]=t,p(e)}}}(),function(){function e(e){var t=document,n="";if(e in t)n=e;else for(var r=["webkit","ms","moz","o"],i=0;i<r.length;i++){var s=r[i]+e.charAt(0).toUpperCase()+e.slice(1);if(s in t){n=s;break}}return n}function v(){return function(){var e=exports.pingjs.get("da","kn","ja","flu","os","scr","clr","ln","ck","sl","bs","ol","mp","svn","diff","clt","bbs");e.time=d.online()+","+d.stayTime(),exports.pingjs.api.log(183,e)}}function m(){clearTimeout(l);var e;h&&(e="visible"==document[h]),p&&(e=!document[p]),i="undefined"==typeof e?n:e,(!r||!s)&&i&&o?(c=n,a=+(new Date)):r&&s&&(!i||!o)&&(c=t,f+=+(new Date)-a),r=i,s=o,l=setTimeout(m,100)}function g(e){if("focus"!=e.type&&"blur"!=e.type||!e.target||e.target==window)"focus"==e.type||"focusin"==e.type?o=n:o=t,m()}var t=!1,n=!0,r=n,i=n,s=n,o=n,u=+(new Date),a=u,f=0,l,c=n,h=e("visibilityState"),p=e("hidden"),d={online:function(){return+(new Date)-u},stayTime:function(){return c?+(new Date)-a+f:f}};m(),function(){var e=h.replace(/[vV]isibilityState/,"visibilitychange");bindEvent(document,e,m),bindEvent(window,"pageshow",m),bindEvent(window,"pagehide",m),"object"==typeof document.onfocusin?(bindEvent(document,"focusin",g),bindEvent(document,"focusout",g)):(bindEvent(window,"focus",g),bindEvent(window,"blur",g))}(),exports.pingjs.api.queue.save("log_c",function(){bindEvent(window,"unload",v())})}(),window._jc_pingjs=function(e,t){if(e&&t){t.u||(t.u="");switch(e){case"block":_jc_ping.push(["_trackBlockFlash",t.ads,t.u]);break;case"click":if(t&&t.appkey){var n=t.appkey;delete t.appkey,t.safety=!1,_jc_ping.push(["_track",n,t])}}}},exports.pingjs.api.init(),_jc_f_init(),window._jc_uv=exports.pingjs.get("uv"),window._jcrf=exports.pingjs.get("ref"),window._ssid=exports.pingjs.get("ssid"),window._jc_nuv=exports.pingjs.get("nuv"),window._jc_refertype=exports.pingjs.get("rtype"),window._jc_kw=exports.pingjs.get("kw"),window._jc_se=exports.pingjs.get("se"),window._jc_api=window._jc_api||{},window._jcbw=[],window._jcbw[11]=exports.pingjs.get("clt")}exports.pingjs=exports.pingjs||{opts:{}},window._jc_spv_stat||_jc_main(),window._jc_spv_stat=1})("undefined"!=typeof window.ued?window.ued:window.ued={}),function(e){e.pingjs=e.pingjs||{};if(!e.pingjs.adref){var t="adref",n="ad_analysis_source",r="ad_analysis_keyword",i={domain:".17173.com",path:"/",expires:new Date((new Date).getTime()+216e5),raw:!0},s=[{hostname:/\.baidu\.com/,keyword:"wd"},{hostname:/\.sogou\.com/,keyword:"query"},{hostname:/\.360\.cn/,keyword:"q"},{hostname:/\.google\.com/,keyword:"q"},{hostname:/\.soso\.com/,keyword:"w"}];function o(){return e.pingjs.request[t]||""}function u(){var t="";if(!document.referrer)return t;var n=e.pingjs.getUrlParse.parse(document.referrer);for(var r=0;r<s.length;r++){var i=s[r];if(i.hostname.test(n.hostname)){t=n.query[i.keyword];break}}return t}function a(e,t,n){n.raw||(t=encodeURIComponent(String(t)));var r=e+"="+t;n.expires&&(r+="; expires="+n.expires.toGMTString()),n.domain&&(r+="; domain="+n.domain),n.path&&(r+="; path="+n.path),document.cookie=r}function f(e,t){t=t||{},t.expires=new Date(0),a(e,"",t)}function l(){var e=o();if(!e)return;var t=u();if(/\.17173\.com$/.test(window.location.hostname))a(n,e,i),t?a(r,t,i):f(r,i);else{var s="http://passport.17173.com/adref_cross.php";s+="?"+n+"="+e,s+="&"+r+"="+t;var l=document.createElement("div");l.style.display="none",l.innerHTML='<iframe src="'+s+'" width="0" height="0" frameborder="0" border="0" scrolling="no"></iframe>',document.body.appendChild(l)}}l(),e.pingjs.adref=1}}("undefined"!=typeof window.ued?window.ued:window.ued={})