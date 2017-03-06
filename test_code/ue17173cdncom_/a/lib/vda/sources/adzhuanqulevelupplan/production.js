/*! 20131010 mingjihuang(at)cyou-inc.com */
adv.AdBase.extend('AdZhuanquLevelUpPlan', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    var n;
    var css = function () {
      var css = '.gb-zqfix-box-v2,.gb-zqfix-box-mark{display:none;} .fl {float:left;}.fr{float:right;}.qn-rbox-logo {background-repeat:no-repeat;}.mod-rbox{width:200px;position:fixed;right:2px;bottom:2px;z-index:102;}.mod-rbox-tit{height:90px;position:relative;}.qn-rbox-logo{display:block;width:200px;height:90px;background:url(//

ue3.17173.itc.cn/images/qn/2013/rbox/qn-box-logo.png) no-repeat;position:absolute;top:0;left:0;}.mod-rbox-closed{display:block;position:absolute;right:5px;bottom:10px;background:url(//

ue3.17173.itc.cn/images/qn/2013/rbox/close-btn.png) no-repeat;width:19px;height:18px;}.mod-rbox-closed:hover{background:url(//

ue3.17173.itc.cn/images/qn/2013/rbox/close-btn-hover.png) no-repeat;}.mod-rbox-info{padding:0px 6px;}.mod-rbox-oh{font:normal 12px/1.9em "宋体";color:#bac3cc;}.rbox-info-value .rbox-info-v-b{color:#ea6844;}.rbox-info-value a{color:#67a1f3;}.rbox-info-value a:hover{text-decoration:underline;}.mod-rbox-oh-l{width:55%;}.mod-rbox-oh-2{width:43%;position:relative;}.rbox-hot-vote{position:absolute;display:block;width:36px;height:22px;background:url(//

ue1.17173.itc.cn/images/qn/2013/rbox/new-rbox-btn1.png) no-repeat 0 0;left:40px;top:20px;color:white;font:normal 14px/22px Arial, Helvetica, sans-serif;text-align:center;}.rbox-hot-vote:hover{background-position:0px -30px;}.rbox-hot-voted{position:absolute;display:block;width:36px;height:22px;background:url(//

ue1.17173.itc.cn/images/qn/2013/rbox/new-rbox-btn1.png) no-repeat 0px -60px;left:40px;top:20px;color:white;font:normal 14px/22px Arial, Helvetica, sans-serif;text-align:center;}.mod-rbox-line{border-top:1px solid #444444;border-bottom:1px solid #121212;margin:10px 6px 0px;}.mod-rbox-reg-if{padding:0 0 0 3px;width:180px;}.mod-rbox-link{background:url(//

ue1.17173.itc.cn/images/qn/2013/rbox/new-rbox-btn.png) 0px -150px repeat-x;width:180px;height:26px;line-height:26px;font-size:12px;font-weight:bold;text-align:center;margin:0 auto;overflow:hidden;}.mod-rbox-link a{display:block;float:left;width:59px;border-right:1px solid #161616;color:white;}.mod-rbox-link a:hover{background:url(//

ue1.17173.itc.cn/images/qn/2013/rbox/new-rbox-btn.png) 0px -180px repeat-x;}.mod-rbox .reg-box-hd h1{color: #949494;}.mod-rbox-reg{padding-bottom:0;}.mod-rbox-bottom{height:38px;background:#161616;padding-top:10px;border-top:1px solid #303030}.mod-rbox-1 .mod-rbox-oh{color:#444;}.mod-rbox-1 .mod-rbox-line{border:none;border-top:1px solid #cacaca;}.mod-rbox-1 .mod-rbox-link a{border-right:1px solid #fff;}.mod-rbox-1 .mod-rbox-bottom{height:38px;background:#ebebeb;padding-top:10px;border-top:1px solid #dedede}.mod-rbox-in{background:#0a3158 url(//

ue3.17173.itc.cn/images/qn/2013/rbox/new-rbox-tit.png) top repeat-x;margin-top:-34px;padding:34px 3px 3px;border:1px solid #011734}.mod-rbox-inc{background:#1e1e1e;}.mod-rbox-1 .mod-rbox-in{background:#bac1cb url(//

ue2.17173.itc.cn/images/qn/2013/rbox/new-rbox-tit-1.png) top repeat-x;margin-top:-34px;padding:34px 3px 3px;border:1px solid #758190}.mod-rbox-1 .mod-rbox-inc{background:#fff;}.rbox-spic{position:fixed;display:none;right: 2px;bottom: 2px;z-index: 102;}.rbox-spic-a{display:block;background:url(//

ue1.17173.itc.cn/images/qn/2013/rbox/rbox-spic.jpg) no-repeat;width:14px;height:84px;color:#f8bf4d;font:normal 12px/1.1em "宋体";padding:8px;text-align:center;padding-top:20px;}.rbox-spic-1 .rbox-spic-a{color:#333;background:url(//

ue1.17173.itc.cn/images/qn/2013/rbox/rbox-spic-1.jpg) no-repeat;}';
      return css;
    };
    var html = function () {
      var html = '<div class="mod-rbox qn-rbox"><div class="mod-rbox-tit"> <i class="qn-rbox-logo" id="mod-rbox-logo"></i><a href="javascript:;" id="mod-rbox-close" class="mod-rbox-closed"></a></div><div class="mod-rbox-in"><div class="mod-rbox-inc"><div class="mod-rbox-info"><div class="mod-rbox-oh"><div class="mod-rbox-oh-l fl"><span class="rbox-info-name">开发：</span><span class="rbox-info-value" id="mod-rbox-developer"></span></div><div class="mod-rbox-oh-2 fr"><span class="rbox-info-name">排名：</span><span class="rbox-info-value"> <b class="rbox-info-v-b" id="mod-rbox-rank"></b></span></div></div><div class="mod-rbox-oh"><div class="mod-rbox-oh-l fl"><span class="rbox-info-name">运营：</span><span class="rbox-info-value" id="mod-rbox-spinfo"></span></div><div class="mod-rbox-oh-2 fr"><span class="rbox-info-name">热度：</span><span class="rbox-info-value"> <b class="rbox-info-v-b" id="rbox-mod-votes"></b></span><a href="javascript:;" class="rbox-hot-vote" id="mod-rbox-submitlike">+1</a></div></div><div class="mod-rbox-oh"><span class="rbox-info-name">产地：</span><span class="rbox-info-value" id="rbox-mod-area"></span></div><div class="mod-rbox-oh"><span class="rbox-info-name">测试：</span><span class="rbox-info-value" id="rbox-mod-test"></span></div><div class="mod-rbox-oh"><span class="rbox-info-name">类型：</span><span class="rbox-info-value" id="rbox-mod-type"></span></div></div><div class="mod-rbox-line"></div><div class="mod-rbox-reg"><iframe scrolling="no" frameborder="0" allowTransparency="true" class="mod-rbox-reg-if" id="mod-rbox-reg-if" src=""></iframe></div><div class="mod-rbox-bottom"><div class="mod-rbox-link"><a href="#" target="_blank"  class="rbox-download mod-rbox-log" id="mod-rbox-download">下载</a><a href="#" target="_blank"  class="rbox-gift mod-rbox-log" id="mod-rbox-gift">礼包</a><a href="#" target="_blank"  class="rbox-gweb mod-rbox-log" id="mod-rbox-site">官网</a></div></div></div></div></div>';
      return html;
    };
    while(this.options.ads.length){
      n = this.options.ads.shift();
      if(~n.site.indexOf(location.href)){
    		 var i=document.createElement("div"),r=!!window.ActiveXObject&&!window.XMLHttpRequest,u={$:function(n){return document.getElementById(n)},createHtml:function(n){return i.innerHTML=n,i.removeChild(i.firstChild)},on:function(n,t,i){n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent&&n.attachEvent("on"+t,i)},show:function(n){n.style.display="block"},hide:function(n){n.style.display="none"},setStyle:function(n,t){var i=n.style.cssText;i[i.length-1]!==";"&&(i+=";"),n.style.cssText=i+t},setIe6Img:function(n,t){$("#"+n).css({cursor:"pointer",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=noscale, src='"+t+"')",background:"none"})},setCookie:function(n,t,i,r){var f=n+"="+escape(t),u;i&&(u=new Date,u.setTime(u.getTime()+i),f+="; expires="+u.toGMTString()),r&&(f+="; path="+r),document.cookie=f}},f="cookie_game_votes",e=function(){var t={},n=function(n,t){return t===undefined&&(t=n.url,n=n.name),'<a href="'+t+'" target="_blank">'+n+"<\/a>"},i=function(t){var o={},i={},e,r,s,h,c,u;try{o=window.DATASTORE["game-top.info"][t]}catch(l){}try{i=window.DATASTORE["game-detail.info"][t]}catch(l){}e=null,i.curr_test_info&&(e=new Date(parseInt(i.curr_test_info.test_time+"000")),e=e.getFullYear()+"-"+(e.getMonth()*1+1)+"-"+e.getDate()),r={id:t,name:i.game_name,type:n(i.game_frame)+" / "+n(i.game_type)+" / "+n(i.game_theme),developer:n(i.dev_company),operator:n(i.sp_info),officialSiteName:"\u56fd\u670d\u5b98\u7f51",officialSiteUrl:i.sp_info.game_official_url,rank:o.rank_num,totalGames:o.total_game_count,votes:o.heats_num,voteUrl:i.vote_url,downloadUrl:i.download_url,testDate:e,placeOfProduction:i.game_area.name},i.curr_test_info&&(r.status=i.curr_test_info.test_type,r.testTitle=i.curr_test_info.test_type),c=new RegExp("(^| )"+f+r.id+"=([^;]*)(;|$)"),(h=document.cookie.match(c))&&(s=unescape(h[2])),s&&s>r.votes&&(r.votes=s);try{u=window.DATASTORE["hao.giftlist"][t],u&&u.list&&u.list.length&&(r.giftName=u.list[0].gift_name,r.giftUrl=u.list.length<2?u.list[0].gift_url:u.url)}catch(l){}return r};return function(n,r){function u(){if(f++,f==3){var u=i(n);t[n]=u,r&&r(u)}}if(t[n]){r&&r(t[n]);return}var f=0;$.ajax({url:"//

d1.17173.itc.cn/newgame/info/js/"+n+".js",dataType:"script",scriptCharset:"gbk",success:u}),$.ajax({url:"//

d1.17173.itc.cn/game-top/info/js/"+n+".js",dataType:"script",scriptCharset:"gbk",success:u}),$.ajax({url:"//

d1.17173.itc.cn/hao/giftlist/js/"+n+".js",dataType:"script",scriptCharset:"utf-8",success:u})}}(),t={init:function(){this.$w=$(window),this.initEl(),e(n.gameId,function(i){$("#specialFloatAd").hide(),t.gameInfo=i,$("#mod-rbox-developer").append(i.developer),$("#mod-rbox-rank").text(i.rank),$("#mod-rbox-spinfo").append(i.operator),$("#rbox-mod-votes").append(i.votes),$("#rbox-mod-area").text(i.placeOfProduction),$("#rbox-mod-test").text(i.testTitle),$("#rbox-mod-type").append(i.type),i.downloadUrl&&$("#mod-rbox-download").attr("href",i.downloadUrl),$("#mod-rbox-download").attr("adskey",n.downloadCode),i.giftUrl&&$("#mod-rbox-gift").attr("href",i.giftUrl),$("#mod-rbox-gift").attr("adskey",n.giftCode),i.officialSiteUrl&&$("#mod-rbox-site").attr("href",i.officialSiteUrl),$("#mod-rbox-site").attr("adskey",n.siteCode),n.downloadUrl&&$("#mod-rbox-download").attr("href",n.downloadUrl),n.giftUrl&&$("#mod-rbox-gift").attr("href",n.giftUrl)}),this.bindAction()},initEl:function(){$("head").append($('<style type="text/css">'+css()+"<\/style>")),t.container=$(html());var i=[];i.push('<div class="rbox-spic">'),i.push(' <a href="javascript:;" class="rbox-spic-a">\u5c55\u5f00\u6e38\u620f\u76f4\u901a<\/a>'),i.push("<\/div>"),t.smallContainer=$(i.join("")),$(document.body).append(this.container),$(document.body).append(t.smallContainer),this.switchTheme(),n.regSitePageHeight&&$("#mod-rbox-reg-if").height(n.regSitePageHeight),n.regSitePageWidth&&(t.container.width(n.regSitePageWidth+12),$("#mod-rbox-reg-if").width(n.regSitePageWidth)),$("#mod-rbox-reg-if").attr("src",n.regSite),r&&($("#mod-rbox-submitlike").attr("href","#yongnimeiie6"),t.container.css("position","absolute"),t.smallContainer.css("position","absolute"),t.keepfixed(),setTimeout(function(){t.keepfixed()},300)),$(".gp-game-"+n.gameId).remove(),setTimeout(function(){$(".gp-game-"+n.gameId).remove()},500)},switchTheme:function(){n.theme&&n.theme=="light"&&(t.container.addClass("mod-rbox-1"),t.smallContainer.addClass("rbox-spic-1")),n.logoUrl&&($("#mod-rbox-logo").css("background","url("+n.logoUrl+")"),r&&u.setIe6Img("mod-rbox-logo",n.logoUrl))},keepfixed:function(){var n=t.$w.scrollTop()*1+t.$w.height();t.container.css({top:n-t.container.outerHeight()-2}),t.smallContainer.css({top:n-t.smallContainer.outerHeight()-2})},bindAction:function(){r&&t.$w.bind("scroll resize",function(){t.keepfixed()}),$("#mod-rbox-submitlike").click(function(){t.sumitLike(function(n){n.status=="ok"?($("#rbox-mod-votes").text(n.count),$("#mod-rbox-submitlike").addClass("rbox-hot-voted").removeClass("rbox-hot-vote")):n.status=="fault"?alert("\u6295\u7968\u5931\u8d25"):n.status=="repeat"&&($("#mod-rbox-submitlike").addClass("rbox-hot-voted").removeClass("rbox-hot-vote"),alert("\u611f\u8c22\u60a8\u7684\u6295\u7968\uff0c\u6b22\u8fce\u660e\u5929\u518d\u6295\u54e6~"))})}),$("#mod-rbox-close").click(function(){t.container.hide(),t.smallContainer.show()}),t.smallContainer.click(function(){t.container.show(),t.smallContainer.hide()}),$(".mod-rbox-log").mouseup(function(){var n=$(this).attr("adskey"),i=new Image,r=$(this).attr("href"),t="";_jc_uv&&(t=_jc_uv),n&&(i.src="//

log1.17173.com/pv?appkey=113&u="+encodeURIComponent(r)+"&ads="+n+"&uv="+t)})},sumitLike:function(n){var i={status:""},r=t.gameInfo;i.count=parseInt($("#rbox-mod-votes").text()),$.ajax({url:"//

top.17173.com/api-voteJp.html",dataType:"jsonp",data:{gameCode:r.id,referer:document.referrer},error:function(){i.status="fault",n(i)},success:function(t){if(t){var e=t.ret;e==0?(i.count++,u.setCookie(f+r.id,i.count,864e5),i.status="ok"):i.status=e==1004?"repeat":"fault",n(i)}}})}};t.init();
      }
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});