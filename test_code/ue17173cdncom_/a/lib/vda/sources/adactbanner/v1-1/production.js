adv.AdBase.extend('AdActBanner', {
  init: function (options) {

    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
	var _self = this;
    this.base();
    var adConfig = this.options.adConfig;
	adConfig.height = adConfig.height || 'auto';
	adConfig.width = adConfig.width || 'auto';
	
	var _html = '';
	if(adConfig.imgSrc.indexOf('.swf') >= 0) {
        _html = adv.flash.embed({
			 source: adConfig.imgSrc,
			 width: adConfig.width,
			 height: adConfig.height,
			 params: {
			   flashvars: adConfig.linkUrl
			 }
		   });
	} else {
        _html = '<a href="' + adConfig.linkUrl + '" data-adskey="' + adConfig.code + '" target="_blank"><img src="' + adConfig.imgSrc + '" border="0" height="' + adConfig.height + '" width="' + adConfig.width + '"></a>';
	}

    this.html =  _html;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  _hitRequest: function (adskey, href) {
    if(adskey && typeof _jc_pingjs === 'function') {
		_jc_pingjs('block',{ads: adskey, u: encodeURIComponent(href)});
    }
  },
  play: function () {
    var _self = this;
    this.base();

    adv.$('.' +this.options.advid).html(this.html);
    adv.$('.' +this.options.advid).css({
      width: _self.options.adConfig.width,
      height: _self.options.adConfig.height
    });
	
//	adv.$('.' +this.options.advid).find('a').on('click', function() {
//		var $link = adv.$(this);
//		$link.attr('data-adskey')&& _self._hitRequest($link.attr('data-adskey'), $link.attr('href'));
//	});

    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  },
  dispose: function () {

  }
});