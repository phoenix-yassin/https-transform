/*! ued-todo-v1.0.0 2015-04-28 */
/* //www.17173.com/ */

/* Copyright (c) 2013 17173.com */

/* Licensed same as jquery - MIT License */
/* //www.opensource.org/licenses/mit-license.php */

/* email: changjianwang@cyou-inc.com */
adv.AdBase.extend("AdMobileNewsFirstBanner",{init:function(a){this.base(a),this.emit(adv.ENUM.EVENTS.inited)},showHtml:function(a){var a=this.options.adConfig,b=a.width||"100%",c=a.height||"auto",d=a.link||"#",e=a.src,f=a.code;return'<a href="'+d+'" target="_blank" data-adskey="'+f+'"><img src="'+e+'" style="width:'+b+"; height:"+c+'" /></a>'},setup:function(){var a=this;this.base();var b=this.options.adConfig,c=a.showHtml(b);this.html=c,this.emit(adv.ENUM.EVENTS.setuped)},_hitRequest:function(a,b){return null==b&&(b="")},play:function(){var a=this;this.base(),adv.$("#"+this.options.advid).append(this.html),adv.$("#"+this.options.advid).css("margin","10px auto"),adv.$("#"+this.options.advid).find("a").on("click",function(){var b;b=adv.$(this),a._hitRequest(b.attr("data-adskey"),b.attr("href"))}),this.emit(adv.ENUM.EVENTS.played)},stop:function(){this.base(),this.emit(adv.ENUM.EVENTS.stoped)},dispose:function(){}});