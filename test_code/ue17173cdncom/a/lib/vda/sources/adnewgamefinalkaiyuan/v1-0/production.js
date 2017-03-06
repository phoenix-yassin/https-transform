! function(e) {
	var i = {
		html: function(e) {
			return '<span class="con"><a onclick="trackEvent(\'\u6e38\u620f\u7ec8\u6781\u9875\',\'\u6e38\u620f\u7ec8\u6781\u9875:\u57fa\u672c\u8d44\u6599:\u8fd0\u8425\u5546\u5b98\u7f51\u94fe\u63a5\');" href="' + e.link + '" target="_blank" id="gb_markteing_pro_link">\u8fdb\u5165\u5b98\u7f51<i class="gb-marketing-pro-arrow"></i></a></span>'
		},
		css: function() {
			return '<style type="text/css">.gb-marketing-pro-arrow{ width: 15px; height: 7px; background: url(//ue.17173cdn.com/a/news/final/2014/img/arrow.gif) no-repeat 0 0; display: inline-block; vertical-align: middle; margin:0 0 2px 5px;}#gb_markteing_pro_link{ color:#ff0000;}</style>'
		},
		searchElem: function(e) {
			return gameCode || window.location.href.match(/-(\d*)\./)[1]
		},
		replaceElem: function(e) {
			return e.find(".tit").filter(':contains("\u5b98\u65b9")').next()
		}
	};
	adv.AdBase.extend("AdNewgameFinalKaiyuan", {
		init: function(i) {
			this.base(i), this.elem = e("." + i.advid), this.emit(adv.ENUM.EVENTS.inited)
		},
		setup: function() {
			this.emit(adv.ENUM.EVENTS.setuped)
		},
		play: function() {
			var t = this.options;
			if (t.ads && t.ads.length > 0) {
				for (var a, n = i.searchElem(this.elem), r = i.replaceElem(this.elem), o = 0; o < t.ads.length; o++)
					if (a = t.ads[o], n==a.keyword) {
						e("body").append(i.css()), r.replaceWith(i.html(a)), "Microsoft Internet Explorer" == navigator.appName && "MSIE6.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "") ? this.elem.find(".gb-marketing-pro-arrow").css({
							margin: "4px 0 0 5px",
							verticalAlign: "bottom"
						}) : "Microsoft Internet Explorer" == navigator.appName && "MSIE7.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "") && this.elem.find(".gb-marketing-pro-arrow").css({
							margin: "2px 0 2px 5px"
						});
						break
					}
				this.emit(adv.ENUM.EVENTS.played)
			}
		}
	})
}(jQuery);