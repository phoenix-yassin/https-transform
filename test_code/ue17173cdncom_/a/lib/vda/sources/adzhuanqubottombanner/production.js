(function($){var pageset={cfg:null,tpl:[],cnt:null,zqbb:null,close:null,doT:function(tpl,a){return tpl.replace(/{{(.*?)?}}/g,function($1,$2){return a[$2]})},reset:function(){this.zqbb.hide();this.cnt.css({top:this.cfg.height})},setup:function(fn){var me=this;me.cfg.otherwise=(me.cfg.otherwise+" ").replace(/(,|\s)/g,".17173.com,");if(me.cfg.otherwise.indexOf(location.host)==-1){var h=$(document).height()-me.cfg.height;me.tpl.push('<style type="text/css">.vda-rel{width:100%;position:relative;margin:0 auto;}#vda-zqbb{position:absolute;top:'+h+"px;left:0;width:100%;text-align:center;height:{{height}}px;overflow:hidden;}#vda-cnt{width:100%;position:absolute;left:0;top:{{height}}px;}#vda-cnt span{position:absolute;top:0;right:-50px;width:45px;height:18px;background:url(//

ue1.17173cdn.com/a/lib/vda/sources/adzhuanqubottombanner/close.png) no-repeat 0 0;cursor:pointer;font-size:13px;}</style>");me.tpl.push('<div id="vda-zqbb"><div id="vda-cnt">');me.tpl.push('<div class="vda-rel" style="width:{{width}}px;"><span id="vda-close"></span></div>');me.tpl.push(/\.swf/g.test(me.cfg.src)?'<embed width="{{width}}" height="{{height}}" wmode="transparent" quality="high" src="{{src}}" type="application/x-shockwave-flash"></embed>':'<a href="{{to}}" target="_blank"><img src="{{src}}" border="0" height="{{height}}" width="{{width}}"></a>');me.tpl.push("</div></div>");$("body").append(me.doT(me.tpl.join(""),me.cfg));me.cnt=$("#vda-cnt");me.zqbb=$("#vda-zqbb");me.close=$("#vda-close");me.close.bind("click",function(){me.reset()});fn.call(this)}},play:function(){var $html=$(document),dh=$html.height(),h=dh-$(window).height(),ch=0-this.cfg.height,me=this;$(window).scroll(function(e){if(h<=$(window).scrollTop()){me.zqbb.show();me.cnt.animate({top:0},500)}else if(h-$(window).scrollTop()>10){me.reset()}}).resize(function(e){h=dh-$(window).height()})},stop:function(){},dispose:function(){}};adv.AdBase.extend("AdZhuanquBottomBanner",{init:function(options){this.base(options);pageset.cfg=this.options;this.emit(adv.ENUM.EVENTS.inited)},setup:function(){this.base();var me=this;pageset.setup(function(){me.emit(adv.ENUM.EVENTS.setuped)})},play:function(){this.base();pageset.play();this.emit(adv.ENUM.EVENTS.played)},stop:function(){this.base();pageset.stop();this.emit(adv.ENUM.EVENTS.stoped)},dispose:function(){pageset.dispose()}})})(jQuery);