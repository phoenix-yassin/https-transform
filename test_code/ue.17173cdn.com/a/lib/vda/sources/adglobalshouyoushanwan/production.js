(function($){

		var isMobile = function() {
		var a = navigator.userAgent,
			b = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"],
			c = false;
		for (var i = 0; i < b.length; i++) {
			if (a.indexOf(b[i]) > -1) {
				c = true;
				break;
			}
		}
		return c;
	}();
	
	


adv.AdBase.extend('AdGlobalShouYouShanWan', {
	init: function(options) {
		this.base(options);
		var self = this;


		if (typeof noShanwanAd != "undefined" || window.noToprightFloatAd) {
			return;
		}




		window.youshanwanguanggao = true;
		if (~location.href.indexOf("nomoney=true")) {
			return;
		}
		// if (!$("#GGfloatLeft").length && !$("#GGfloatRight").length && !$("#gg_background_right").length && !$("#gg_background_left").length && !$(".ad-curtain").length) {
		// 	if (self.getCookie("toprightfloatad") && self.getCookie("toprightfloatad") % 2 === 0) {
		// 		syswApp.init()
		// 	} else {
		// 		syswApp.init()
		// 	}
		// }

	


		if (adv.$("#gg_background_right").length ||adv.$("#gg_background_left").length || adv.$(".ad-curtain").length) {
			return ;
		}


		if(adv.$('.topBackgroundAdv_bgbody').length) {
			return;
		}




		if (adv.$(".ad-zhanneituiguang").length) {
			adv.$(".ad-zhanneituiguang").hide();
		}
		if (adv.$(".gb-newfix-box").length) {
			adv.$(".gb-newfix-c1").show();
			adv.$(".gb-newfix-c2").hide();
		}


		self.syswConfig =  {
			conWidth: 1220,
			top: 45,
			marginLeft: 10,
			imageWidth1: "160px",
			imageHeight1: "230px",
			imageWidth2: "180px",
			imageHeight2: "320px",
			imageWidth3: "75px",
			imageHeight3: "75px"
		};
		self.showFlash2 = '<object width="' + self.syswConfig.imageWidth2 + '" height="' + self.syswConfig.imageHeight2 + '"><param name="movie" value=' + self.options.ImageshowSrc2 + '><param name="wmode" value="transparent"><param name="allowscriptaccess" value="always"><embed src=' + self.options.ImageshowSrc2 + ' text-align="center" allowscriptaccess="always" wmode="transparent" quality="high" type="application/x-shockwave-flash" width="' + self.syswConfig.imageWidth2 + '" height="' + self.syswConfig.imageHeight2 + '"></object>';
	

		if (!isMobile) {
			this.emit(adv.ENUM.EVENTS.inited);
		}
		
	},
	setCookie: function(name, value, days) {
		var expires;
		if (days) {
			var date = new Date;
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
			expires = ";expires=" + date.toGMTString();
		} else {
			expires = "";
		}
		document.cookie = name + "=" + value + expires + ";path=/"
	},
	getCookie: function(name) {
		var strCookie = document.cookie;
		var arrCookie = strCookie.split("; ");
		for (var i = 0; i < arrCookie.length; i++) {
			var arr = arrCookie[i].split("=");
			if (arr[0] == name) {
				return arr[1];
			}
		}
		return "";
	},
	positionFixed: function(el, eltop) {
		if (!window.XMLHttpRequest) {
			el.style.position = "absolute";
			window.attachEvent("onscroll", function() {
				el.style.top = document.documentElement.scrollTop + eltop + "px"
			});
		}
	},


	setup: function() {
		this.base();
		var self = this,
			url = window.location.href,
			url1 = window.location.host,
			syswCon, html, showFlash1, style, html1;
			html = '<div class="sysw-con" id="jsSysw"><div class="sysw-hsw" style=" cursor:pointer; position:absolute; "><img src="' + self.options.ImageshowSrc3 + '"/></div><div class="sysw-con2"></div><div class="sysw-btn"></div></div>';
			html1 = '<div class="sysw-con" id="jsSysw"><div class="sysw-hsw" style=" cursor:pointer; position:absolute; "><a href=' + self.options.link + ' hidefocus="true"  style="position:absolute;top:0;left:0;width:' + self.syswConfig.imageWidth3 + ";height:" + self.syswConfig.imageHeight3 + ';"><img src="' + self.options.ImageshowSrc3 + '"/></a></div><div class="sysw-con2"></div></div>';
			showFlash1 = '<div class="sysw-flash"><object width="' + self.syswConfig.imageWidth1 + '" height="' + self.syswConfig.imageHeight1 + '"><param name="movie" value="' + self.options.ImageshowSrc1 + '"><param name="wmode" value="transparent"><param name="allowscriptaccess" value="always"><embed src="' + self.options.ImageshowSrc1 + '" allowscriptaccess="always" wmode="transparent" quality="high" type="application/x-shockwave-flash" width="' +self.syswConfig.imageWidth1 + '" height="' + self.syswConfig.imageHeight1 + '"></object></div><a href=' + self.options.link + '  hidefocus="true"  style="position:absolute;background:#000;opacity:0;filter:alpha(opacity=0);top:0;left:0;width:' + self.syswConfig.imageWidth1 + ";height:" + self.syswConfig.imageHeight1 + ';"></a><span class="sysw-close"><img src="http://ue.17173cdn.com/a/money/2014/shanwan/images/sysw-close.png" /></span>';
			if (url.indexOf("bbs.") === -1) {
				syswCon = ".sysw-con{display: none; z-index:1000; position: fixed; left:50%;}.sysw-hsw{top:208px; display:none; left:102px}.sysw-con2{position:relative; z-index:111; }.sysw-btn{left:105px; top:8px; }";
				$(html).appendTo("body");
				$(".sysw-btn").remove();
				$(".sysw-con2 ").html('<div class="bd">' + self.showFlash2 + "</div>")
			} else {
				syswCon = ".sysw-con{display: none;  z-index:1000; position: fixed;left:99.9%;  bottom:-13px}.sysw-hsw{top:100px; left:183px}.sysw-con2{height:382px;position:relative; z-index:111; } .sysw-btn{left:77px; top:46px; }";
				$(html1).appendTo("body")
			}
			style = '<style type="text/css">' + syswCon + ".sysw-close{ cursor:pointer }.sysw-btn{position:absolute; z-index:100; width:160px; height:230px;} .sysw-close{ position:absolute; right:0px;  height:14px; text-align:center; line-height:14px; bottom:0; }</style>";
			$("head").append(style);
			var availHeight = window.screen.availHeight;
			if (url.indexOf("bbs.") === -1) {
				if (url.indexOf("act.") !== -1) {
					if (url === "http://act.17173.com/") {
						$(".sysw-con").css({
							"margin-left": self.syswConfig.conWidth / 2 - 120 + self.syswConfig.marginLeft + "px",
							top: self.syswConfig.top
						});
						self.positionFixed(document.getElementById("jsSysw"), self.syswConfig.top);
					}
				} else {
					$(".sysw-con").css({
						"margin-left": self.syswConfig.conWidth / 2 - 120 + self.syswConfig.marginLeft + "px",
						top: self.syswConfig.top
					});
					self.positionFixed(document.getElementById("jsSysw"), self.syswConfig.top);
				}
			} else {
				$(".sysw-con").css({
					"margin-left": "-257px",
					top: "auto"
				});
				self.positionFixed(document.getElementById("jsSysw"), availHeight - 520);
			}
			var random = parseInt(self.getCookie("random"), 10),
				qiyucss = '<style type="text/css">.money-qiyu, .AdTopBarDragShow{display:none!important}</style>';
			if (self.options.randomNum === 0) {
				$(".sysw-con").show();

				$("body").append(qiyucss);
			} else if (random == self.options.randomNum) {
				$(".sysw-con").hide();
				self.setCookie("random", 0, 1)
			} else if (!random || random === 0) {
				$(".sysw-con").show();
				$("body").append(qiyucss);
				self.setCookie("random", 1, 1);
			} else if (random < self.options.randomNum) {
				$(".sysw-con").hide();
				self.setCookie("random", random + 1, 1)
			} else {
				$("body").append(qiyucss);
				self.setCookie("random", 0, 1)
			}
			if (url.indexOf("bbs.") === -1) {
				$("#jsSysw").unbind("ad-shangwan").bind("ad-shangwan", function(e, p) {
					if (p === "close") {
						$(".sysw-con2 .bd ").remove();
						$(".sysw-hsw").show()
					}
				})
			} else {
				$("#jsSysw").unbind("ad-shangwan").bind("ad-shangwan", function(e, p) {
					if (p === "close") {
						$(".sysw-con2 .bd ").remove();
						$(".sysw-hsw").show();
					}
				})
			}


		
		if (url.indexOf("bbs.") === -1) {
			$('body').delegate('.sysw-hsw img', 'click', function(event) {
				$(".sysw-con2 ").html('<div class="bd">' + self.showFlash2 + "</div>");
				$(".sysw-hsw").hide();
			});

			$('body').delegate('.sysw-con .sysw-btn a', 'click', function(event) {
			
				$(".sysw-con2 ").html('<div class="bd">' + self.showFlash2 + "</div>");
				$(".sysw-btn").hide();
			});
			

			$('body').delegate('.sysw-close', 'click', function(event) {
				$(".sysw-btn").hide();
				$(".sysw-hsw").show();
			});
			
		} else {

			$('body').delegate('.sysw-hsw a', 'click', function(event) {
			
				$(".sysw-con2 ").html('<div class="bd">' + self.showFlash2 + "</div>");
				$(".sysw-hsw").hide();
			});

			$('body').delegate('.sysw-close', 'click', function(event) {
				$(".sysw-btn").hide();
				$(".sysw-hsw").show();
			});
			
			
		}	

		this.emit(adv.ENUM.EVENTS.setuped);
	},

	play: function() {
		this.base();
		var self = this;
		if (this.options.src) {
			$('.' + this.options.advid).text('').append(this.html);
		}
		this.emit(adv.ENUM.EVENTS.played);
	},
	stop: function() {
		this.base();
		this.emit(adv.ENUM.EVENTS.stoped);
	}
});



	})(jQuery)
	