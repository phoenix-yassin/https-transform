jQuery(function($) {
  (function (data) {
    var isMobile = (function () {
      var a = navigator.userAgent,
        b = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod'],
        c = false;
     
      for (var i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) > -1) {
          c = true;
          break
        }
      }
      return c
    })();

    if (~location.href.indexOf('nomarket=true') || window.appZhanNeiTuiGuangOff === true || isMobile) {
      return
    }

		var util = {
			createObject: function(src, width, height) {
				return $('<div><object width="' + width + '" height="' + height + '" ><param name="movie" value="' + src + '"><param name="wmode" value="transparent"><embed src="' + src + '"  wmode="transparent" quality="high"  type="application/x-shockwave-flash" width="' + width + '" height="' + height + '"></object></div>')
			},
			getCookie: function(name) {
				var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
				if (arr = document.cookie.match(reg)) {
					return unescape(arr[2])
				}
				return ''
			},
			sendPing: function() {
				var adskey = $(this).attr('adskey'),
					logImg = new Image(),
					href = $(this).attr('href'),
					n;
				if (window._jc_uv) {
				  n = window._jc_uv
				} else {
					n = util.getCookie('NUV');
					if (!n) n = ''
				} if (adskey) {
					logImg.src = "http://log1.17173.com/pv?appkey=113&u=" + encodeURIComponent(href) + "&ads=" + adskey + "&uv=" + n
				}
			},
			bindLogAction: function(wrap) {
				var links = wrap.find('[adskey]');
				links.click(function() {
					util.sendPing.call(this)
				})
			},
			strToDate: function(str) {
				return new Date(Date.parse(str.replace(/-/g, "/")))
			}
		};
		var topbar = $('#yeyou-js-global-topbarnav'),
			animateSpeed = 300,
			backgroundBanner = $('#backgroundBanner');
		if (!backgroundBanner[0]) {
			backgroundBanner = $('.top-background-adv')
		}
		if (backgroundBanner[0] && $('#backgroundBanner').css("display") != "none") return;
		var ad = {
		  init: function () {
		    this.isNewTopbar = !$('#js-global-nav-cnt')[0];
		    if (!topbar[0]) topbar = $('#ue-topbar');
		    if (!topbar[0]) topbar = $('#js-global-topnav');
				$('head').append($('<style type="text/css">' + this.importCss() + '</style>'));
				this.renderMain();
				this.state = 'up';
				this.bindEvent();
				util.bindLogAction(this.wrap);
				util.bindLogAction(this.arrowWrap)
			},
			bindEvent: function() {
				var me = this;
				this.arrowBtn.click(function() {
					if (me.state == 'up') {
						me.down()
					} else {
						me.up()
					}
				}).hover(function() {
					if (me.state == 'up') {
						me.handAni()
					} else {
						me.legAni()
					}
				}, function() {
					if (me.state == 'up') {} else {}
				});
				$(window).resize(function() {
					me.calXStyle()
				})
			},
			calXStyle: function() {
				var wWidth = $(window).width(),
					left;
        var contentWidth = $(document.body).css('min-width') || 1000;
        contentWidth = parseInt(contentWidth,10);
        contentWidth = contentWidth < 1000? 1000:contentWidth;
				left = contentWidth + Math.floor((wWidth - contentWidth) / 2) + 10;
				this.arrowWrap.css('left', left)
			},
			renderMain: function() {
			  this.renderWrap();
			  var top = this.isNewTopbar ? 45 : 36;
			  this.arrowWrap = $('<div class="ad-zhanneituiguang" style="position:absolute;z-index:980;top:' + top + 'px;left:-250px;"></div>');
				this.arrow = util.createObject(data.begin, 150, 150);
				this.arrowBtn = $('<a adskey="' + data.btnKey + '" hidefocus="true" href="javascript://" style="position:absolute;background:#000;opacity:0;filter:alpha(opacity=0);top:0;left:0;width:150px;height:150px;"></a>');
				this.arrowWrap.append(this.arrow);
				this.arrowWrap.append(this.arrowBtn);
				this.calXStyle();
				topbar.after(this.wrap);
				$(document.body).append(this.arrowWrap)
			},
			renderWrap: function() {
				var html = [];
				html.push('<div class="instation-ad" style="position:relative;z-index:980;top:0;left:0;overflow:hidden;">');
				html.push('  <div class="instation-adcon">');
				html.push('   <a href="http://a.17173.com/tg/channel/index.html?id=A0011502101" target="_blank" class="instation-adcon-bg" adskey="' + data.mainKey + '"></a>');
				html.push('   <a href="http://itunes.apple.com/cn/app/id727561988?mt=8" target="_blank" class="download android" adskey="' + data.androidKey + '"></a>');
				html.push('    <a href="http://a.17173.com/tg/channel/index.html?id=A0011502101" target="_blank" class="download iphone" adskey="' + data.iphoneKey + '"></a>');
				html.push('    <a class="txm" adskey="' + data.qrKey + '" href="http://a.17173.com/tg/channel/index.html?id=A0011502101" target="_blank"><!--<img src="http://ue3.17173.itc.cn/images/money/2013/zhanneituiguang/txm1220.jpg" alt="" class="avatar" />--></a>');
				html.push('  </div>');
				html.push('</div>');
				this.wrap = $(html.join(''))
			},
			importCss: function() {
				var html = [];
				html.push('.instation-ad{ width:100%; height:0; margin:0 auto; background:#0cb9bf;overflow:hidden;}');
				html.push('.instation-adcon{ width:960px; margin:0 auto; height:130px; position:relative; background:url(http://ue.17173cdn.com/a/money/2014/instation-ad/images/moneyinbg0408.jpg) no-repeat left top  }');
				html.push('.instation-adcon .download{ display:block; position:absolute; width:154px; height:41px; /*background:url(http://ue3.17173.itc.cn/images/money/2013/zhanneituiguang/monyinbtn1220.png) no-repeat;*/}');
				html.push('.instation-adcon .android{ top:26px; left:669px; height:40px; background:url(http://ue.17173cdn.com/a/money/2014/instation-ad/images/ios.png) no-repeat;}');
				html.push('.instation-adcon .iphone{ top:71px;left:669px;background:url(http://ue.17173cdn.com/a/money/2014/instation-ad/images/android.png) no-repeat}');
				html.push('.instation-adcon .download:hover{ text-decoration:none}');
				html.push('.instation-adcon .download-text{ position:absolute; left:722px; top:82px; width:118px; color:#a79801; line-height:20px; font-size:12px; padding:0; margin:0}');
				html.push('.instation-adcon .txm{ position:absolute; top:8px; right:7px; /*background:#fff; border:1px solid #cec35d;*/ width:115px; height:116px}');
				html.push('.instation-adcon .txm .avatar{ height:113px; width:113px} ');
				html.push('.fb{ font-weight:bold}');
				html.push('.instation-adcon-bg{ position:absolute; top:0; left:0; width:670px; height:100%}');
				return html.join('');
			},
			toggleAni: function(type) {
				if (data[type]) {
					this.arrow.remove();
					this.arrow = util.createObject(data[type], 150, 150);
					this.arrowWrap.prepend(this.arrow);
				}
			},
			handAni: function() {
				this.toggleAni('handAni');
			},
			stopHandAni: function() {
				this.toggleAni('stopHandAni');
			},
			legAni: function() {
				this.toggleAni('legAni');
			},
			stopLegAni: function() {
				this.toggleAni('stopLegAni');
			},
			up: function () {
			  var top = this.isNewTopbar ? 45 : 36;
				this.wrap.stop().animate({
					height: 0
				}, animateSpeed);
				this.arrowWrap.stop().animate({
				  top: top
				}, animateSpeed);
				this.state = 'up';
				this.toggleAni('up');
			},
			down: function () {
			  var top = this.isNewTopbar ? 175 : 164;
				this.wrap.stop().animate({
					height: 132
				}, animateSpeed);
				this.arrowWrap.stop().animate({
					top: top
				}, animateSpeed);
				this.state = 'down';
				this.toggleAni('down');
			}
		};
		if ($('#js-global-nav-cnt')[0]) {
		  ad.init();
		}
		else if (window.Topbar && window.Topbar.isRendered()) {
		  ad.init();
		}
		else {
		  window.Topbar = window.Topbar || {};
      window.Topbar.onRender = function () {
        ad.init();
      };
		}
	})({
		begin: 'http://ue.17173cdn.com/a/money/2014/instation-ad/images/1.swf',
		handAni: 'http://ue.17173cdn.com/a/money/2014/instation-ad/images/2.swf',
		stopHandAni: '',
		down: 'http://ue.17173cdn.com/a/money/2014/instation-ad/images/3.swf',
		legAni: 'http://ue.17173cdn.com/a/money/2014/instation-ad/images/4.swf',
		stopLegAni: '',
		up: 'http://ue.17173cdn.com/a/money/2014/instation-ad/images/5.swf',
		qrCode: 'http://ue3.17173.itc.cn/images/money/2013/zhanneituiguang/txm.jpg',
		androidLink: 'http://a.17173.com/android',
		iphoneLink: 'http://a.17173.com/ios',
		mainKey: 'e56b06c51e1049195d7b26d043c478a0',
		androidKey: 'f52378e14237225a6f6c7d802dc6abbd',
		iphoneKey: 'bad5f33780c42f2588878a9d07405083',
		btnKey: '81ca0262c82e712e50c580c032d99b60',
		qrKey: '70feb62b69f16e0238f741fab228fec2'
	});
})