! function(e) {
	var t = {
		html: function(e) {
			return '<a href="' + e.link + '" target="_blank" id="gb_markteing_pro_link">\u8fdb\u5165\u5b98\u7f51<i class="gb-marketing-pro-arrow"></i></a>'
		},
		css: function() {
			return '<style type="text/css">.gb-marketing-pro-arrow{ width: 15px; height: 7px; background: url(//

ue.17173cdn.com/a/news/final/2014/img/arrow.gif) no-repeat 0 0; display: inline-block; vertical-align: middle; margin:0 0 2px 5px;}#gb_markteing_pro_link{ color:#ff0000;}#gb_markteing_pro_link:hover{ text-decoration: underline; background: none;}</style>'
		},
		searchElem: function(e) {
			return document.getElementsByTagName("h1")[0].innerHTML
		},
		replaceElem: function(e) {
			return e.getElementsByTagName("span")[3]
		}
	};
	adv.AdBase.extend("AdDownloadKaiyuan", {
		init: function(e) {
			this.base(e), this.elem = document.getElementsByClassName(e.advid)[0];
			if(!document.getElementsByClassName(e.advid)[0]) {
				return false;
			}
			this.emit(adv.ENUM.EVENTS.inited)
		},
		setup: function() {
			this.emit(adv.ENUM.EVENTS.setuped)
		},
		play: function() {
			var e = this.options;
			if (e.ads && e.ads.length > 0) {
				for (var n, a = t.searchElem(this.elem), i = t.replaceElem(this.elem), r = 0; r < e.ads.length; r++)
					if (n = e.ads[r], -1 != a.indexOf(n.keyword)) {
						if (i.innerHTML = t.html(n) + t.css(), "Microsoft Internet Explorer" == navigator.appName && "MSIE6.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "")) {
							var l = i.getElementsByTagName("i")[0];
							l.style.margin = "4px 0 0 5px", l.style.verticalAlign = "bottom"
						}
						break
					}
				this.emit(adv.ENUM.EVENTS.played)
			}
		}
	})
}(jQuery);