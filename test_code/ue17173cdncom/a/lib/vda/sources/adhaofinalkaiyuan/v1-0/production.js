!function(e){var i={html:function(e){return'<a class="c-tx2" href="'+e.link+'" target="_blank" id="gb_markteing_pro_link">\u8fdb\u5165\u5b98\u7f51<i class="gb-marketing-pro-arrow"></i></a>'},css:function(){return'<style type="text/css">.gb-marketing-pro-arrow{ width: 15px; height: 7px; background: url(//ue.17173cdn.com/a/news/final/2014/img/arrow.gif) no-repeat 0 0; display: inline-block; vertical-align: middle; margin:0 0 2px 5px;}#gb_markteing_pro_link{ color:#ff0000;}</style>'},searchElem:function(e){return e.find("h2").find("span").text()},replaceElem:function(e){return e.find(".lb-gameinfo-c2").find("p:eq(3)").find("a")}};adv.AdBase.extend("AdHaoFinalKaiyuan",{init:function(i){this.base(i),this.elem=e("."+i.advid),this.emit(adv.ENUM.EVENTS.inited)},setup:function(){this.emit(adv.ENUM.EVENTS.setuped)},play:function(){var a=this.options;if(a.ads&&a.ads.length>0){for(var n,t=i.searchElem(this.elem),r=i.replaceElem(this.elem),p=0;p<a.ads.length;p++)if(n=a.ads[p],-1!=t.indexOf(n.keyword)){r.replaceWith(i.html(n)),e("body").append(i.css()),"Microsoft Internet Explorer"==navigator.appName&&"MSIE6.0"==navigator.appVersion.split(";")[1].replace(/[ ]/g,"")?this.elem.find(".gb-marketing-pro-arrow").css({margin:"7px 0 3px 5px"}):"Microsoft Internet Explorer"==navigator.appName&&"MSIE7.0"==navigator.appVersion.split(";")[1].replace(/[ ]/g,"")&&this.elem.find(".gb-marketing-pro-arrow").css({margin:"2px 0 1px 5px"});break}this.emit(adv.ENUM.EVENTS.played)}}})}(jQuery);