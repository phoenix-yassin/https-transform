adv.AdBase.extend('AdYeyouBannerAd', {

  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    this.base();
    var adConfig = this.options.adConfig;

    var _html = '';
    if(!~adConfig.imgSrc.indexOf('swf')) {
        _html = $('<a target="_blank"><img /></a>');
        _html.find('img').css({width: 1000, height: 80}).attr('src', adConfig.imgSrc);
        _html.attr('href', adConfig.linkUrl);
        if(adConfig && adConfig.code) {
            _html.attr('data-adskey', adConfig.code);
        }
    }
    else if(~adConfig.imgSrc.indexOf('swf')) {
        _html = $('<embed type="application/x-shockwave-flash" width="1000" height="80" bgcolor="#ffffff" quality="high" wmode="opaque" />');
        _html.attr('src', adConfig.imgSrc);
    }

    this.html =  _html;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  //点击统计
  _hitRequest: function (adskey, href) {
    if(adskey && typeof _jc_pingjs === 'function') {
    　_jc_pingjs('block',{ads: adskey, u: encodeURIComponent(href)});
    }
  },
  //播放广告,setuped事件触发后,广告中心会自动调用此方法,也可以响应用户事件里调用此方法
  play: function () {
    var _self = this;
    this.base();

    //console.log($('.' +this.options.advid))
    $('.' +this.options.advid).append(this.html);
    $('.'+this.options.advid).css({'zoom':1})
    $('.' +this.options.advid).find("a").click(function () {
      var link;
      link = $(this);
        link.attr("data-adskey") && _self._hitRequest(link.attr("data-adskey"), link.attr("href"));
    });

    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
  
    this.emit(adv.ENUM.EVENTS.stoped);
  },
  dispose: function () {

  }
});