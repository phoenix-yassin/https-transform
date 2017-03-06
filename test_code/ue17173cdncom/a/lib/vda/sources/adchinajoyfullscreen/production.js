/*by mingjihuang@cyou-inc.com 2014-07-21 17:16:20 v1.0.3beta*/
adv.AdBase.extend('AdChinaJoyFullScreen', {
  init: function (options) {
    this.base(options);
    this.cookieName = 'AdChinaJoyFullScreen';
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    var me = this;
    var embed = adv.flash.embed({
      source: this.options.source,
      width: 1000,
      height: 300
    });
    var isIE = !!window.ActiveXObject;
    var isIE6 = isIE && !window.XMLHttpRequest;
    var isIE8 = isIE && !!document.documentMode;
    if (isIE && !isIE6 && !isIE8) {
      $('.wrap').css("zoom", 1);
    }
    this.html = $('<div id="chinajoyFullScreen" style="position:relative;height:0;width:1000px;margin:0 auto;overflow:hidden;"></div>');
    this.html.append(embed[0]);
    this.closeBtn = $('<a href="javascript:;" style="position:absolute;width:' + this.options.closeBtnWidth + 'px;height:' + this.options.closeBtnHeight + 'px;right:0;bottom:0;z-index:100;"><img src="' + this.options.closeBtn + '"/></a>');
    this.html.append(this.closeBtn);
    this.closeBtn.click(function () {
      me.stop();
    });
    var reclyEmbed = adv.flash.embed({
      source: this.options.recly,
      width: 20,
      height: 80
    });
    this.reclyHtml = $('<div id="chinajoyFullScreenRecly" style="position:absolute;height:20px;width:80px;top:0;left:0;z-index:1010;"><a href="javascript:;" style="display:inline-block;position:absolute;left:0px;top:0px; width:20px;height:80px;z-index:1011;background:#000;filter:alpha(opacity=1);opacity:0.01;"></a></div>');
    this.reclyHtml.append(reclyEmbed[0]);
    this.reclyHtml.click(function () {
      me.play();
    });
    $(document.body).append(this.reclyHtml)
    $('.nav').after(this.html);
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    var me = this;
    this.base();
    this.reclyHtml.hide();
    this.html.css("height", 0).show();
    clearTimeout(me.timer);
    this.html.stop().animate({
      height:300
    }, 1500, function () {
      me.emit(adv.ENUM.EVENTS.played);
      me.timer = setTimeout(function () {
        me.stop();
      }, 6000);
    })
  },
  stop: function () {
    var me = this;
    this.html.stop().animate({
      height: 0
    }, 1000, function () {
      me.reclyHtml.show();
    });
  }
});
