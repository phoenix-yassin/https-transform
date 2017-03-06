(function($){



	adv.AdBase.extend("AdGlobalMoneyQiYu", {
	_addCSS: function(t) {
		var i = document.createElement("style"),
			e = document.head || document.getElementsByTagName("head")[0];
		if (i.type = "text/css", i.styleSheet) {
			var o = function() {
				try {
					i.styleSheet.cssText = t
				} catch (e) {}
			};
			i.styleSheet.disabled ? setTimeout(o, 10) : o()
		} else {
			var n = document.createTextNode(t);
			i.appendChild(n)
		}
		e.appendChild(i)
	},
	_getWindowWidth: function() {
		return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)
	},
	_on: function(t, i, e) {
		t.addEventListener ? t.addEventListener(i, e, !1) : t.attachEvent && t.attachEvent("on" + i, e)
	},
	_positionFixed: function(t, i) {
		window.XMLHttpRequest || (t.style.position = "absolute", t.style.top = document.documentElement.scrollTop + i + "px", window.attachEvent("onscroll", function() {
			t.style.top = document.documentElement.scrollTop + i + "px"
		}))
	},
	_setIe6Img: function(t, i) {
		var e = this;
		t && adv.$("." + e.options.advid).find(t).css({
			cursor: "pointer",
			filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + i + "')",
			background: "none"
		})
	},
	_notmutex: function() {
		return this._addCSS(".AdDownloadFlyRight1{display:none;}"), ~location.href.indexOf("nomoney=true") ? !1 : window.disableAdGlobalMoneyQiYu1 ? !1 : window.noToprightFloatAd ? !1 : (window.youqiyuguanggao = !0, this._addCSS(".ad-zhanneituiguang{display: none!important;}"), !0)
	},
	_atimer: function() {
		var t, i = this;
		return {
			start: function(e) {
				"undefined" == typeof e || 0 > e || (t = setTimeout(function() {
					clearTimeout(t), adv.$("." + i.options.advid).find(".close")[0].click()
				}, 1e3 * e))
			},
			stop: function() {
				t && clearTimeout(t)
			}
		}
	},
	init: function(t) {

		this.base(t), this.options.type && this._notmutex && this.emit(adv.ENUM.EVENTS.inited);
	},
	setup: function() {
		this.base();



		var t = this.options,
			i = "",
			e = "",
			o = "position: absolute;bottom: 0;left: 0; top:auto; background: #fff;color: #000;font-weight: bold;text-decoration: none;padding:0;margin:0;line-height:13px; width: 13px; height:18px";
		this.closeEl = adv.$('<a class="close" href="javascript://" style="' + o + '"><img src="//ue1.17173.itc.cn/a/www/index/2013/images/close.gif" /></a>'), this.html = adv.$('<div id="moneyQiYu" class="money-qiyu ' + this.options.advid + '" style="position: fixed;width:180px ;/*width:180px;height:320px;*/top: 80px;z-index:1010; "></div>'), this.bigWrapEl = adv.$('<div class="big-box"></div>'), this.smallWrapEl = adv.$('<div class="small-box" style="display:none;position: fixed;width:30px;height:35px;top: 80px;z-index:1010; "></div>'), this.bigWrapEl.append(this.closeEl), t.height = t.height || "auto", t.width = t.width || "auto", i = t.bigImg.indexOf(".swf") >= 0 ? adv.flash.embed({
			source: t.bigImg,
			width: t.width,
			height: t.height,
			params: {
				flashvars: t.link
			}
		}) : '<a class="bigImg" href="' + t.link + '" target="_blank" style="width:' + t.width + "px; height:" + t.height + "px; background:url(" + t.bigImg + '); background-repeat:no-repeat; display:block;overflow:hidden;"></a>', e = t.smallImg.indexOf(".swf") >= 0 ? adv.flash.embed({
			source: t.smallImg,
			width: t.sWidth,
			height: t.sHeight,
			params: {
				flashvars: t.link
			}
		}) : '<img style="cursor: pointer;" src="' + t.smallImg + '" border="0" height="' + t.sHeight + '" width="' + t.sWidth + '">', this.bigWrapEl.append(i), this.smallWrapEl.append(e), this.html.append(this.bigWrapEl), this.html.append(this.smallWrapEl), this.emit(adv.ENUM.EVENTS.setuped)
	},
	_getLeft: function() {

		var contentWidth =  1000;
			try{
				contentWidth = $(document.body).css('min-width') || 1000;
		   		contentWidth = parseInt(contentWidth,10) || 1000;
       			contentWidth = contentWidth < 1000? 1000:contentWidth;
			}catch(err) {

			}

		var t = this,
			i = this.options,
			e = t._getWindowWidth();
		return window.contentWidthAdGlobalMoneyQiYu1 && (contentWidth), contentWidth + Math.floor((e - contentWidth) / 2) + 10
	},
    showAdMark:function(){
      $('#moneyQiYu .close img').attr('src','//ue.17173cdn.com/a/lib/vda/sources/adglobalmoneyqiyu/v1-1/close_ad.png');
    },

	play: function() {
		var t = this,
			i = this.options,
			e = t.html;

		this.base();

		if(location.host != 'download.17173.com') {
			$('head').append('<style>.ad-zhanneituiguang, .AdTopBarDragShow{display:none!important}</style>');
		}  else {
			adv.$('head').append('<style>.ad-zhanneituiguang, .AdTopBarDragShow{display:none!important}</style>');

		}

		if(location.host == 'bbs.17173.com') {
			adv.$("body").append(e), e.css({
				right: 0
			});
		} else {
			adv.$("body").append(e), e.css({
				left: t._getLeft()
			});
		}

		var o = !!window.ActiveXObject && !window.XMLHttpRequest;
		o ? (t._positionFixed(document.getElementById("moneyQiYu"), i.top), t._setIe6Img(".bigImg", i.bigImg)) : e.css({
			position: "fixed",
			top: i.top
		});

		adv.$('.AdTopBarDragShow').css({
			display: 'none'
		});
		var n = adv.$("." + t.options.advid),
			d = n.find(".small-box"),
			s = n.find(".big-box"),
			a = t._atimer();
		n.find(".close").on("click", function() {
			s.hide(), d.show(), a.stop()
		}), d.on("click", function() {
			s.show(), d.hide(), a.stop()
		}), t._on(window, "resize", function() {
			setTimeout(function() {

					if(location.host == 'bbs.17173.com') {
						e.css({
							right: 0,
							left: 'auto'
						})
					} else {
						e.css({
							left: t._getLeft(),
							right: 'auto'
						})
					}

			}, 500)
		}), a.start(i.atime), this.emit(adv.ENUM.EVENTS.played)
	}
});


})(jQuery)
