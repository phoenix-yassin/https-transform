! function(e) {
	var a = {
		html: function(e) {
			return '<a target="_blank" href="' + e.link + '" id="gb_markteing_pro_link">' + e.keyword + '\u5b98\u7f51<i class="gb-marketing-pro-arrow"></i></a>'
		},

		html1: function(e) {
			return '<a href="'+e.link+'" target="_blank">进入官网<i class="gb-final-ico-arrow-r1"></i></a>';
		},
		css: function() {
			return '<style type="text/css">.gb-final-ico-arrow-r1{ background: url(//ue.17173cdn.com/a/news/final/2014/img/arrow1.gif) no-repeat 0 0;}.gb-marketing-pro-arrow{ width: 15px; height: 7px; background: url(//ue.17173cdn.com/a/news/final/2014/img/arrow.gif) no-repeat 0 0; display: inline-block; vertical-align: middle; margin:0 0 0 5px;}#gb_markteing_pro_link{ color:#ff0000;}.gb-final-comm-case-ft-c2{width: 81px; position: absolute; right: 0; top:0;_top:2px; border-left:none}\
	 .gb-final-comm-case-ft-c2 a{ color:#000; }\
	.gb-final-comm-case-ft-c2 a .gb-final-ico-arrow-r1{ margin:12px 0 14px 3px;}</style>'
		},
		searchElem: function(e) {
			return article.tag
		},
		replaceElem: function(e) {
			return e.find(".gb-final-item1").find("a")
		}
	};
	adv.AdBase.extend("AdNewsFinalKaiyuan", {
		init: function(a) {
			this.base(a), this.elem = e("." + a.advid), this.emit(adv.ENUM.EVENTS.inited)
		},
		setup: function() {
			this.emit(adv.ENUM.EVENTS.setuped)
		},
		play: function() {
			var i = this.options,
				n = this;
			if (i.ads && i.ads.length > 0) {
				for (var r, t = 0; t < i.ads.length; t++)
					if (r = i.ads[t], -1 != a.searchElem(n.elem).indexOf(r.keyword)) {
						var l = setInterval(function() {
							var i = e(".gb-final-comm-case-ft-c2");
							i.length > 0 && (clearInterval(l), a.replaceElem(e("#gamelink")).replaceWith(a.html(r)), e("body").append(a.css()), i.html(a.html1(r)), "Microsoft Internet Explorer" == navigator.appName && "MSIE6.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "") && n.elem.find(".gb-marketing-pro-arrow").css({
								margin: "18px 0 10px 5px"
							}))
						}, 500);
						break
					}
				this.emit(adv.ENUM.EVENTS.played)
			}
		}
	})
}(jQuery);


