/*! ued-todo-v1.0.0 2015-07-07 */
/* http://www.17173.com/ */

/* Copyright (c) 2013 17173.com */

/* Licensed same as jquery - MIT License */
/* http://www.opensource.org/licenses/mit-license.php */

/* email: changjianwang@cyou-inc.com */
adv.AdBase.extend("AdDownloadBanner", {
	init: function(a) {
		this.base(a), this.emit(adv.ENUM.EVENTS.inited)
	},
	setup: function() {
		this.base();
		var a = this.options.adConfig;
		a.height = a.height || "auto", a.width = a.width || "auto";
		var b = "";
		b = a.imgSrc.indexOf(".swf") >= 0 ? adv.flash.embed({
			source: a.imgSrc,
			width: a.width,
			height: a.height,
			params: {
				flashvars: a.linkUrl
			}
		}) : '<a href="' + a.linkUrl + '" data-adskey="' + a.code + '" target="_blank" ><img src="' + a.imgSrc + '" border="0" height="' + a.height + '" width="' + a.width + '"></a>', this.html = b, this.emit(adv.ENUM.EVENTS.setuped)
	},
	_hitRequest: function(a, b) {
		a && "function" == typeof _jc_pingjs && _jc_pingjs("block", {
			ads: a,
			u: encodeURIComponent(b)
		})
	},
	play: function() {
		this.base();
 		adv.$("." + this.options.advid).html(this.html);
 		adv.$("." + this.options.advid).css({'*zoom':'1', 
 			// 'margin-left': 0,
 			width: this.options.adConfig.width, 
 			height: this.options.adConfig.height
 		});
 		if(this.options.advid == 'AdDownloadBannerTop') {
 			
 		}
 		this.emit(adv.ENUM.EVENTS.played);

	},
	stop: function() {
		this.base(), this.emit(adv.ENUM.EVENTS.stoped)
	},
	dispose: function() {}
});