/*! ued-todo-v1.0.0 2015-06-16 */
/* http://www.17173.com/ */

/* Copyright (c) 2013 17173.com */

/* Licensed same as jquery - MIT License */
/* http://www.opensource.org/licenses/mit-license.php */

/* email: changjianwang@cyou-inc.com */
adv.AdBase.extend("AdYeyouBannerBottomAd",{init:function(a){this.base(a),this.emit(adv.ENUM.EVENTS.inited)},setup:function(){this.base();var a=this.options.adConfig,b="";"img"==a.type?(b=$('<a target="_blank"><img /></a>'),b.find("img").css({width:1e3,height:80}).attr("src",a.imgSrc),b.attr("href",a.linkUrl),a&&a.code&&b.attr("data-adskey",a.code)):"swf"==a.type&&(b=$('<embed type="application/x-shockwave-flash" width="1000" height="80" bgcolor="#ffffff" quality="high" wmode="opaque" />'),b.attr("src",a.imgSrc)),this.html=b,this.emit(adv.ENUM.EVENTS.setuped)},_hitRequest:function(a,b){a&&"function"==typeof _jc_pingjs&&_jc_pingjs("block",{ads:a,u:encodeURIComponent(b)})},play:function(){var a=this;this.base(),$("."+this.options.advid).append(this.html),$("."+this.options.advid).find("a").click(function(){var b;b=$(this),b.attr("data-adskey")&&a._hitRequest(b.attr("data-adskey"),b.attr("href"))}),this.emit(adv.ENUM.EVENTS.played)},stop:function(){this.base(),this.emit(adv.ENUM.EVENTS.stoped)},dispose:function(){}});