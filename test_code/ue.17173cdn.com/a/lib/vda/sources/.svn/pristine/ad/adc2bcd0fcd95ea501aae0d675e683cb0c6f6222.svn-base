(function () {
  var isIe = !!window.ActiveXObject, isIe6 = isIe && !window.XMLHttpRequest;
  var isMobile = (function () {
    var a = navigator.userAgent,
      b = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod'],
      c = false;

    for (var i = 0; i < b.length; i++) {
      if (a.indexOf(b[i]) > -1) {
        c = true;
        break;
      }
    }
    return c;
  })();
  if (isMobile) return;
  var setIe6Img = function (id, img) {
    var el = $('#' + id);
    el.text('');
    if (~img.indexOf('swf')) {
      el.css('background','none');
      el.css('filter','none');
      el.html('<object type="application/x-shockwave-flash" data="' + img + '" width="100%" height="100%"><param name="movie" value="' + img + '" /><param name="wmode" value="transparent" /></object>');
    }
    else if (!isIe6) {
      var bgImg = "transparent url('" + img + "') no-repeat";
      el.css('background', bgImg);
    }
    else {
      el.css({
        cursor: "pointer",
        filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=noscale, src='" + img + "')",
        background: 'none'
      });
    }
  };
  function SpecialFloatAd(option) {
    this.offsetHeight = 0;
    this.enableClose = true;
    this.option = option;
  }
  
  SpecialFloatAd.prototype.execute = function () {
    if ($('.mod-rbox')[0]) return;
    var me = this;
    if (!window.$) {
      setTimeout(function () {
        SpecialFloatAd.prototype.execute.call(me);
      }, 200);
      return;
    }
    if (isIe6) {
      this.$window = $(window);
    }
    if (window.gamepopupInstance) {
      window.gamepopupInstance.bind('maxsized', function () {
        me.maxsize();
      });
      window.gamepopupInstance.bind('minimized', function () {
        me.minimize();
      });
    }
    $(function () {
      $('.ad-zhanneituiguang').hide();
      window.specialFloatAdInstance = me;
      var option = me.option;
      $('.adsystem-mark').filter('[data-ad-type="AdZhuanquFloatad"]').html('<div id="specialFloatAd" style="z-index:1001;position: fixed;right: 0;top: 0;width:220px;height:225px;padding:0;margin:0"><a id="specialFloatAdLink"  style="display:block;padding:0;margin:0;width:100%;height:100%;background:url(#);cursor:pointer;" hidefocus="true" href="' + option.url + '" target="_blank"><div id="specialFloatAdImg" style="padding:0;margin:0;width:220px;height:225px;"></div></a></div>');
      me.container = $('#specialFloatAd');
      setIe6Img('specialFloatAdImg', option.source);
      if (isIe6) {
        me.container.css('position', 'absolute');
      }
      me.overLink = $('<a hidefocus="true" href="' + option.url + '" target="_blank" style="position:absolute;background:#000;opacity:0;filter:alpha(opacity=0);top:0;left:0;width:100%;height:100%"></a>');
      me.container.append(me.overLink);
      me.resetPosition();
      //关闭
      if (option.closeBtn && me.enableClose) {
        me.closeBtn = $('<a style="display:block;z-index:1010;position:absolute;padding:0;margin:0;width:' + option.closeBtn.width + 'px;height:' + option.closeBtn.height + 'px;background:url(#);cursor:pointer;top:' + option.closeBtn.top + 'px;right:' + option.closeBtn.right + 'px" hidefocus="true" href="javascript:;"></a>');
        me.closeBtnBg = $('<div id="specialFloatAdCloseBtnImg" style="padding:0;margin:0;width:100%;height:100%;"></div>');
        me.closeBtn.append(me.closeBtnBg);
        me.container.append(me.closeBtn);
        setIe6Img('specialFloatAdCloseBtnImg', option.closeBtn.img);
        me.closeBtn.click(function(e) {
          me.minimize();
          e.preventDefault();
          return false;
        });
      }
    });
  };
  SpecialFloatAd.prototype.disableClose = function () {
    this.enableClose = false;
    this.closeBtn && this.closeBtn.hide();
  };
  SpecialFloatAd.prototype.resetPosition = function () {
    //this.offsetHeight = offsetHeight || 0;
    this.container.css('top', 0);
    var me = this;
    if (isIe6) {
      me.keepfixed();
      setTimeout(function () {
        me.keepfixed();
      }, 300);
      me.$window.bind('scroll resize', function () {
        me.keepfixed();
      });
    }
  };
  SpecialFloatAd.prototype.keepfixed = function () {
    //var clienHeight = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
    var controly = this.$window.scrollTop();
    this.container.css({ top: controly });
  };
  SpecialFloatAd.prototype.minimize = function () {
    var me = this;
    me.overLink.hide();
    this.container.animate({
      width: 30,
      height: 45
    }, 300);
    setIe6Img('specialFloatAdImg', this.option.minisizedImg);
    this.closeBtn && this.closeBtn.hide();
    me.container
    .find('#specialFloatAdImg')
    .bind('click', function (e) {
      me.maxsize();
      e.preventDefault();
      return false;
    });
  };
  SpecialFloatAd.prototype.maxsize = function () {
    this.overLink.show();
    this.container.animate({
      width: 220,
      height: 225
    }, 300);
    setIe6Img('specialFloatAdImg', this.option.source);
    if (this.enableClose) {
      this.closeBtn && this.closeBtn.show();
    }
    this.container.find('#specialFloatAdImg').unbind('click');
  };
  var SpecialFloatAd = SpecialFloatAd;
 
 // 
  adv.AdBase.extend('AdZhuanquFloatad', {
    init: function (options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function () {
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      new SpecialFloatAd(this.options).execute();   //播放
      this.emit(adv.ENUM.EVENTS.played);
    },
    stop: function () {
      this.emit(adv.ENUM.EVENTS.stoped);
    },
    dispose: function () {

    }
  });
  
})();