if(typeof sas=="undefined")var sas=new Object();if(typeof sas.ued=="undefined")sas.ued=new Object();if(typeof sas.ued.util=="undefined")sas.ued.util=new Object();if(typeof sas.ued.FlashObjectUtil=="undefined")sas.ued.FlashObjectUtil=new Object();sas.ued.FlashObject=function(swf,id,w,h,ver,c,useExpressInstall,quality,xiRedirectUrl,redirectUrl,detectKey){if(!document.createElement||!document.getElementById)return;this.DETECT_KEY=detectKey?detectKey:'detectflash';this.skipDetect=sas.ued.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();this.useExpressInstall=useExpressInstall;if(swf)this.setAttribute('swf',swf);if(id)this.setAttribute('id',id);if(w)this.setAttribute('width',w);if(h)this.setAttribute('height',h);if(ver)this.setAttribute('version',new sas.ued.PlayerVersion(ver.toString().split(".")));this.installedVer=sas.ued.FlashObjectUtil.getPlayerVersion(this.getAttribute('version'),useExpressInstall);if(c)this.addParam('bgcolor',c);var q=quality?quality:'high';this.addParam('quality',q);var xir=(xiRedirectUrl)?xiRedirectUrl:window.location;this.setAttribute('xiRedirectUrl',xir);this.setAttribute('redirectUrl','');if(redirectUrl)this.setAttribute('redirectUrl',redirectUrl)};sas.ued.FlashObject.prototype={setAttribute:function(name,value){this.attributes[name]=value},getAttribute:function(name){return this.attributes[name]},addParam:function(name,value){this.params[name]=value},getParams:function(){return this.params},addVariable:function(name,value){this.variables[name]=value},getVariable:function(name){return this.variables[name]},getVariables:function(){return this.variables},createParamTag:function(n,v){var p=document.createElement('param');p.setAttribute('name',n);p.setAttribute('value',v);return p},getVariablePairs:function(){var variablePairs=new Array();var key;var variables=this.getVariables();for(key in variables){variablePairs.push(key+"="+variables[key])}return variablePairs},getFlashHTML:function(){var flashNode="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall"))this.addVariable("MMplayerType","PlugIn");flashNode='<embed type="application/x-shockwave-flash" src="'+this.getAttribute('swf')+'" width="'+this.getAttribute('width')+'" height="'+this.getAttribute('height')+'"';flashNode+=' id="'+this.getAttribute('id')+'" name="'+this.getAttribute('id')+'" ';var params=this.getParams();for(var key in params){flashNode+=[key]+'="'+params[key]+'" '}var pairs=this.getVariablePairs().join("&");if(pairs.length>0){flashNode+='flashvars="'+pairs+'"'}flashNode+='/>'}else{if(this.getAttribute("doExpressInstall"))this.addVariable("MMplayerType","ActiveX");flashNode='<object id="'+this.getAttribute('id')+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute('width')+'" height="'+this.getAttribute('height')+'">';flashNode+='<param name="movie" value="'+this.getAttribute('swf')+'" />';var params=this.getParams();for(var key in params){flashNode+='<param name="'+key+'" value="'+params[key]+'" />'}var pairs=this.getVariablePairs().join("&");if(pairs.length>0){flashNode+='<param name="flashvars" value="'+pairs+'" />'}flashNode+="</object>"}return flashNode},write:function(elementId){if(this.useExpressInstall){var expressInstallReqVer=new sas.ued.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(expressInstallReqVer)&&!this.installedVer.versionIsValid(this.getAttribute('version'))){this.setAttribute('doExpressInstall',true);this.addVariable("MMredirectURL",escape(this.getAttribute('xiRedirectUrl')));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title)}}else{this.setAttribute('doExpressInstall',false)}if(this.skipDetect||this.getAttribute('doExpressInstall')||this.installedVer.versionIsValid(this.getAttribute('version'))){var n=(typeof elementId=='string')?document.getElementById(elementId):elementId;n.innerHTML=this.getFlashHTML()}else{if(this.getAttribute('redirectUrl')!=""){document.location.replace(this.getAttribute('redirectUrl'))}}}};sas.ued.FlashObjectUtil.getPlayerVersion=function(reqVer,xiInstall){var PlayerVersion=new sas.ued.PlayerVersion(0,0,0);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){PlayerVersion=new sas.ued.PlayerVersion(x.description.replace(/([a-z]|[A-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."))}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");for(var i=3;axo!=null;i++){axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);PlayerVersion=new sas.ued.PlayerVersion([i,0,0])}}catch(e){}if(reqVer&&PlayerVersion.major>reqVer.major)return PlayerVersion;if(!reqVer||((reqVer.minor!=0||reqVer.rev!=0)&&PlayerVersion.major==reqVer.major)||PlayerVersion.major!=6||xiInstall){try{PlayerVersion=new sas.ued.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","))}catch(e){}}}return PlayerVersion};sas.ued.PlayerVersion=function(arrVersion){this.major=parseInt(arrVersion[0])||0;this.minor=parseInt(arrVersion[1])||0;this.rev=parseInt(arrVersion[2])||0};sas.ued.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major)return false;if(this.major>fv.major)return true;if(this.minor<fv.minor)return false;if(this.minor>fv.minor)return true;if(this.rev<fv.rev)return false;return true};sas.ued.util={getRequestParameter:function(param){var q=document.location.search||document.location.href.hash;if(q){var startIndex=q.indexOf(param+"=");var endIndex=(q.indexOf("&",startIndex)>-1)?q.indexOf("&",startIndex):q.length;if(q.length>1&&startIndex>-1){return q.substring(q.indexOf("=",startIndex)+1,endIndex)}}return""}};if(Array.prototype.push==null){Array.prototype.push=function(item){this[this.length]=item;return this.length}}var getQueryParamValue=sas.ued.util.getRequestParameter;var sohuFlash=sas.ued.FlashObject;
function Cookie(document,name,hours,path,domain,secure){this.$document=document;this.$name=name;this.$expiration=hours?new Date((new Date()).getTime()+hours*3600000):null;this.$path=path?path:null;this.$domain=domain?domain:null;this.$secure=secure;};Cookie.prototype.store=function (){var cookieval="";for(var prop in this){if((prop.charAt(0)=='$')||((typeof this[prop])=='function')) continue;if(cookieval!="") cookieval+='&';cookieval+=prop+':'+escape(this[prop]);}var cookie=this.$name+'='+cookieval;if(this.$expiration)cookie+='; expires='+this.$expiration.toGMTString();if(this.$path) cookie+='; path='+this.$path;if(this.$domain) cookie+='; domain='+this.$domain;if(this.$secure) cookie+='; secure';this.$document.cookie=cookie;};Cookie.prototype.load=function(){var allcookies=this.$document.cookie;if(allcookies=="") return false;var start=allcookies.indexOf(this.$name+'=');if(start==-1) return false;start+=this.$name.length+1;var end=allcookies.indexOf(';',start);if(end==-1) end=allcookies.length;var cookieval=allcookies.substring(start,end);var a=cookieval.split('&');for(var i=0; i<a.length; i++) a[i]=a[i].split(':');for(var i=0; i<a.length; i++) this[a[i][0]]=unescape(a[i][1]);return true;};Cookie.prototype.remove = function(){var cookie;cookie = this.$name + '=';if (this.$path) cookie += '; path=' + this.$path;if (this.$domain) cookie += '; domain=' + this.$domain;cookie += '; expires=Fri, 02-Jan-1970 00:00:00 GMT';this.$document.cookie = cookie;};

function showUrl(sourceUrl,title){window.open(sourceUrl+"?title="+title+"&parentid=","_blank");}
function dbSelect(val){switch(val){case"wow":document.frmWOWSEARCHBOX.action="//wow.db.17173.com/Search.aspx";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="KVAL";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"tl":document.frmWOWSEARCHBOX.action="//tl.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="str";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"aion":document.frmWOWSEARCHBOX.action="//aion.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"jx3":document.frmWOWSEARCHBOX.action="//jx3.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"dnf":document.frmWOWSEARCHBOX.action="//dnf.db.17173.com/equips.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="name";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"sg2":document.frmWOWSEARCHBOX.action="//sg2.db.17173.com/search.html";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="search";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"luna":document.frmWOWSEARCHBOX.action="//luna.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"wof":document.frmWOWSEARCHBOX.action="//wof.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"pk1937":document.frmWOWSEARCHBOX.action="//gdb.17173.com/jsp/gamedb/searchNew.jsp";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="varValue";document.frmWOWSEARCHBOX.gameCode.value="10053";document.frmWOWSEARCHBOX.classStr.value="0,3,4,5,6,1,7";document.frmWOWSEARCHBOX.varName.value="RecordName";break;case"loong":document.frmWOWSEARCHBOX.action="//loong.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"dn":document.frmWOWSEARCHBOX.action="//dn.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"yzol":document.frmWOWSEARCHBOX.action="//yzol.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"qn":document.frmWOWSEARCHBOX.action="//qn.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"lol":document.frmWOWSEARCHBOX.action="//lol.db.17173.com/index.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break;case"ldj":document.frmWOWSEARCHBOX.action="//ldj.db.17173.com/search.php";document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].name="key";document.frmWOWSEARCHBOX.gameCode.value="";document.frmWOWSEARCHBOX.classStr.value="";document.frmWOWSEARCHBOX.varName.value="";break}}function dbSubmit(){if(document.frmWOWSEARCHBOX.getElementsByTagName('input')[0].value=='\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9\u5173\u952e\u5b57'){document.frmWOWSEARCHBOX.getElementsByTagName('input')[0].value=''}if(document.frmWOWSEARCHBOX.getElementsByTagName('select')[0].value=='sg2'){window.open("//sg2.db.17173.com/search.html?count=20&search="+escape(document.frmWOWSEARCHBOX.getElementsByTagName("input")[0].value))}else if(document.frmWOWSEARCHBOX.getElementsByTagName('select')[0].value=='wow'){window.open("//wow.db.17173.com/")}else{document.frmWOWSEARCHBOX.method="post";document.frmWOWSEARCHBOX.submit()}}



(function(a){a.fn.tips=function(b){var c={tip:0,delay:30,triggerClass:"trigger-current",relative:false,position:["center","top"],offset:[0,0],event:"mouseover"};b=jQuery.extend({},c,b);return this.each(function(){var g=a(this);var d=b.tip;if(!d){d=g.next();if(!d.length){d=g.parent().next()}}function p(r,x,q){var t=x.outerHeight();var y=x.outerWidth();var z=r.outerWidth(),u=r.outerHeight();var v=q.relative?r.position().top:r.offset().top,s=q.relative?r.position().left:r.offset().left;if(q.position[1]=="top"){v=v-t}else{if(q.position[1]=="bottom"){v=v+u}else{if(q.position[1]=="center"){v=v+u/2-t/2}}}if(q.position[0]=="left"){s=s-y}else{if(q.position[0]=="right"){s=s+z}else{if(q.position[0]=="center"){s=s+z/2-y/2}}}s+=q.offset[0];v+=q.offset[1];return{top:v,left:s}}var l=false;var n=false;var e=false;var i=false;if(b.event=="mouseover"){o()}else{if(b.event=="click"){k()}}function j(q){if(n&&i){q.hide()}else{if(n&&!e){q.hide()}else{q.hide()}}}function h(q){var r=p(g,q,b);q.css({left:r.left,top:r.top,position:"absolute"});q.show()}function m(q){l=true;n=false;h(d)}function f(q){l=false;n=true;d.bind("mouseenter",function(r){e=true;i=false}).bind("mouseleave",function(r){e=false;i=true;j(d);return d});if(b.delay){timer=setTimeout(function(){if(!e){j(d);return d}},b.delay)}else{j(d);return d}}function k(){g.bind("click",function(q){m(q)}).bind("mouseleave",function(q){f(q)})}function o(){g.bind("mouseenter",function(q){m(q)}).bind("mouseleave",function(q){f(q)})}})}})(jQuery);

$(function(){function adBoardStyle01(triggerObj,source){if(triggerObj.length<=0||source.length<=0)return false;var tipHtml=[];tipHtml.push('<div class="trigger-tip">');tipHtml.push('	<div class="t-ext clearfix">');tipHtml.push('		<div class="t-pic fl"><a href="#" target="_blank" class="pic"><img class="ai" src="" alt="" /></a></div>');tipHtml.push('		<div class="t-btn-group fr"><a href="#" target="_blank" class="btn official-btn">\u5b98\u7f51</a><a href="#" target="_blank" class="btn zhuanqu-btn">\u4e13\u533a</a><a href="#" target="_blank" class="btn download-btn">\u4e0b\u8f7d</a><a href="#" target="_blank" class="btn fahao-btn">\u53d1\u53f7</a></div>');tipHtml.push('	</div>');tipHtml.push('	<div class="t-title"><a href="#" target="_blank" class="title">&nbsp;</a></div>');tipHtml.push('</div>');triggerObj.after(tipHtml.join(''));triggerObj.tips({offset:[40,0]});var objAttrArray=["src","href","alt","txt"];triggerObj.next().each(function(i){if(i>=source.length){return false}var self=$(this);var itemSource=source[i];var officialBtn=self.find(".official-btn"),zhuanquBtn=self.find(".zhuanqu-btn"),downloadBtn=self.find(".download-btn"),fahaoBtn=self.find(".fahao-btn"),pic=self.find(".pic"),ai=self.find(".ai"),title=self.find(".title");setAttr(pic,itemSource,"imageUrl",objAttrArray[1]);setAttr(ai,itemSource,"imageSrc",objAttrArray[0]);setAttr(ai,itemSource,"imageAlt",objAttrArray[2]);setAttr(officialBtn,itemSource,"officialSiteUrl",objAttrArray[1]);setAttr(zhuanquBtn,itemSource,"zhuanquUrl",objAttrArray[1]);setAttr(downloadBtn,itemSource,"downloadUrl",objAttrArray[1]);setAttr(fahaoBtn,itemSource,"fahaoUrl",objAttrArray[1]);setAttr(title,itemSource,"textUrl",objAttrArray[1]);setAttr(title,itemSource,"text",objAttrArray[3])});function getAttr(source,param){return source[param]}function setAttr(obj,source,param,objAttrArray){var value=getAttr(source,param);if(!value)value="";if(objAttrArray=="src"){obj.attr("src",value)}else if(objAttrArray=="href"){if(value==""){obj.addClass("btn-disabled");return false}obj.attr("href",value)}else if(objAttrArray=="alt"){obj.attr("alt",value)}else if(objAttrArray=="txt"){obj.text(value)}}}if(window.adBottomBoard){adTriggerStyle01($(".main-5-lt-2 .js-tab-1"),adBottomBoard);adBoardStyle01($(".trigger"),adBottomBoard)}function adTriggerStyle01(triggerObj,source){triggerObj.find(".more3").each(function(i){if((i)>=source.length){return false}var triggerId=triggerObj.find(".trigger").length;var self=$(this);var itemSource=source[triggerId];var title=itemSource.title;var textUrl=itemSource.textUrl;var popLiHtml=[];popLiHtml.push('<li class="pop"><a href="'+textUrl+'" target="_blank" class="trigger trigger-tip-theme01">'+title+'<i class="ico-pop" title="\u63a8\u5e7f">&nbsp;</i></a></li>');self.after(popLiHtml.join('')).hide()})}});


//jiaodiantu
var GGfocusCover=function(config){
  this.play=false;
  this.config=config;
  this.init();
};

GGfocusCover.prototype={
  init:function(){
    var config=this.config;
    document.write('<div id="focus_up" class="ad ad-focus-top"><a href="'+config.url+'" target="_blank"><img height=26 src="'+config.focusUp+'" width="365" border="0"></a></div><div id="focus_over" style="position:absolute;visibility:hidden" onmouseout="FocusCoverAD.down()"></div><scr'+'ipt for="focus_ad" language="javascript" event="fscommand(common,args)">focus_ad_DoFSCommand(common,args);</scri'+'pt>');
    this.focus_up=document.getElementById("focus_up");
    this.focus_over=document.getElementById("focus_over");
    this.focus_ad=document.getElementById("focus_ad");
  },
  fillSwf:function(){
    var config=this.config;
    this.sVars='flashurl='+config.focusCover+'&linkurl='+config.url;
    this.sohuFlashFocover=new sohuFlash("//www.17173.com/adoshell3.swf","focus_ad","365","475","8","#ffffff");
    this.sohuFlashFocover.addParam("quality","high");
    this.sohuFlashFocover.addParam("wmode","opaque");
    this.sohuFlashFocover.addParam("FlashVars",this.sVars);
    this.sohuFlashFocover.write("focus_over");
  },
  getPosition:function(element){
    var offset =$(this.focus_up).offset();
    return [offset.left,offset.top];
  },
  up:function(){
    var pos=this.getPosition(this.focus_up);
    pos[1]+=26;
    this.focus_over.style.zIndex="1000";
    this.focus_over.style.paddingRight="0";
    this.focus_over.style.paddingLeft="0";
    this.focus_over.style.paddingTop="0";
    this.focus_over.style.paddingBottom="0";
    this.focus_over.style.backgroundColor="white";
    this.focus_over.style.left=pos[0]+"px";
    this.focus_over.style.top=pos[1]+"px";
    this.focus_over.style.visibility="visible";
    this.focus_over.style.display='block';
    this.fillSwf();
    var me=this;
    this.timeHandle=setInterval(function(){
      me.setPosition();
    },15);
    this.play=true;
  },
  setPosition:function(){
    var pos=this.getPosition(this.focus_up);
    pos[1]+=25;
    this.focus_over.style.left=pos[0]+"px";
    this.focus_over.style.top=pos[1]+"px";
  },
  down:function(){
    this.focus_over.style.visibility="hidden";
    this.focus_over.style.display='block';
    this.play=false;
    clearTimeout(this.timeOut);
    clearInterval(this.timeHandle);
  },
  execute:function(){
    var me=this;
    this.focus_over.onmouseover=function(){
      clearTimeout(me.timeOut1);
    };
    this.focus_over.onmouseout=function(){
      clearTimeout(me.timeOut1);
    };
    this.focus_up.onmouseover=function(){
      clearTimeout(me.timeOut1);
      if(!me.play){
        me.timeOut=setTimeout(function(){
          me.down();
        },8000);
        me.up();
      }
    };
    this.focus_up.onmouseout=function(){
    };
    (function(){
      $(window).scroll(function(){
        var top=parseInt($(window).scrollTop());
        if(top>550&&typeof(me.showTime)=="undefined"){
          me.showTime=1;
          me.timeOut=setTimeout(function(){
            me.down();
          },5000);
          me.up();
        }
      });
    }());
  }
};