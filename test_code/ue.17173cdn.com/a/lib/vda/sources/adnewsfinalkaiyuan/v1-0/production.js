!function(e){var a={html:function(e){return'<a target="_blank" href="'+e.link+'" id="gb_markteing_pro_link">'+e.keyword+'\u5b98\u7f51<i class="gb-marketing-pro-arrow"></i></a>'},css:function(){return'<style type="text/css">.gb-final-ico-arrow-r1{ background: url(//

ue.17173cdn.com/a/news/final/2014/img/arrow1.gif) no-repeat 0 0;}.gb-marketing-pro-arrow{ width: 15px; height: 7px; background: url(//

ue.17173cdn.com/a/news/final/2014/img/arrow.gif) no-repeat 0 0; display: inline-block; vertical-align: middle; margin:0 0 0 5px;}#gb_markteing_pro_link{ color:#ff0000;}</style>'},searchElem:function(e){return article.tag},replaceElem:function(e){return e.find(".gb-final-item1").find("a")}};adv.AdBase.extend("AdNewsFinalKaiyuan",{init:function(a){this.base(a),this.elem=e("."+a.advid),this.emit(adv.ENUM.EVENTS.inited)},setup:function(){this.emit(adv.ENUM.EVENTS.setuped)},play:function(){var i=this.options,n=this;if(i.ads&&i.ads.length>0){for(var r,t=0;t<i.ads.length;t++)if(r=i.ads[t],-1!=a.searchElem(n.elem).indexOf(r.keyword)){var l=setInterval(function(){var i=e(".gb-final-mod-gameinfo1-c2");i.length>0&&(clearInterval(l),a.replaceElem(e("#gamelink")).replaceWith(a.html(r)),e("body").append(a.css()),i.find("a").attr("href",r.link),"Microsoft Internet Explorer"==navigator.appName&&"MSIE6.0"==navigator.appVersion.split(";")[1].replace(/[ ]/g,"")&&n.elem.find(".gb-marketing-pro-arrow").css({margin:"18px 0 10px 5px"}))},500);break}this.emit(adv.ENUM.EVENTS.played)}}})}(jQuery);