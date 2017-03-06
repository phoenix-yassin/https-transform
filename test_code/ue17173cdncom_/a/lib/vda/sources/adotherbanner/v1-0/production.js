/*! ued-todo-v1.0.0 2015-07-14 */
/* //

www.17173.com/ */

/* Copyright (c) 2013 17173.com */

/* Licensed same as jquery - MIT License */
/* //

www.opensource.org/licenses/mit-license.php */

/* email: changjianwang@cyou-inc.com */
adv.AdBase.extend("AdOtherBanner",{init:function(a){this.base(a),this.emit(adv.ENUM.EVENTS.inited)},setup:function(){this.base();var a=this.options;a.height=a.height||"auto",a.width=a.width||"auto";var b="";b=a.imgSrc.indexOf(".swf")>=0?adv.flash.embed({source:a.imgSrc,width:a.width,height:a.height,params:{flashvars:a.linkUrl}}):'<a href="'+a.linkUrl+'" data-adskey="'+a.code+'" target="_blank"><img src="'+a.imgSrc+'" border="0" height="'+a.height+'" width="'+a.width+'"></a>',this.html=b,this.emit(adv.ENUM.EVENTS.setuped)},_hitRequest:function(a,b){a&&"function"==typeof _jc_pingjs&&_jc_pingjs("block",{ads:a,u:encodeURIComponent(b)})},play:function(){var a=this;this.base(),adv.$("."+this.options.advid).html(this.html),adv.$("."+this.options.advid).find("a").on("click",function(){var b=adv.$(this);b.attr("data-adskey")&&a._hitRequest(b.attr("data-adskey"),b.attr("href"))}),this.emit(adv.ENUM.EVENTS.played)},stop:function(){this.base(),this.emit(adv.ENUM.EVENTS.stoped)},dispose:function(){}});