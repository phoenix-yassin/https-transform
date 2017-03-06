adv.AdBase.extend('AdYeyouRightBottom', {
  init: function (options) {
    this.base(options);
		if($('.' +this.options.advid)[0]){
    	this.emit(adv.ENUM.EVENTS.inited);
    }
  },
  _positionFixed: function (el, eltop) {
    if (!window.XMLHttpRequest) {
        el.style.position = 'absolute';
        el.style.top = (document.documentElement.scrollTop + eltop) + 'px';
        window.attachEvent('onscroll', function () {
            el.style.top = (document.documentElement.scrollTop + eltop) + 'px';
        });
    }
  },
  setup: function () {
    this.base();
    //console.log(this.options);
    var adConfig = this.options.adConfig;
    this._adOptions = this.options;

    var tmpl = $('<div id="ad-yeyou-nitifiction" style="width:300px;height:200px;padding:22px 2px 2px;position:absolute;right:0;display:block;z-index:10001;border:1px solid #333;background:#111 url(http://ue1.yeyou.itc.cn/images/www/2013/vk-box.jpg) no-repeat;"><a class="close setlink-close" style="position:absolute;display:block;top:1px;right:1px;"><img style="width:20px;height:19px;" src="http://ue1.yeyou.itc.cn/images/www/2013/close.png"/></a></div>');

    var _html = '';
    if(~adConfig.src.indexOf('.swf')) {
       _html = $(adv.razor('<div><embed src="@src" type="application/x-shockwave-flash" width="300" height="200" bgcolor="#ffffff" quality="high" wmode="opaque" /></div>',adConfig));
    }
    else{
         _html = $(adv.razor('<div><a href="@link" target="_blank"><img style="width:300px;height:200px;" src="@src"/></a></div>',adConfig));
        //_html.find('img').css({width: 300, height: 200}).attr('src', adConfig.src);
    }
    this.clickHtml = _html;
    _html.appendTo(tmpl);
    this.html =  tmpl;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  //点击统计
  _hitRequest: function (adskey, href) {
    if(adskey && typeof _jc_pingjs === 'function') {
    　_jc_pingjs('block',{ads: adskey, u: encodeURIComponent(href)});
    }
  },
  play: function () {
    var _self = this,
        _adOptions = _self._adOptions,
        tmpl = _self.html;
    this.base();
    $('.' +this.options.advid).before(tmpl);

 		adv.util.sendIpa(this.clickHtml,'b8b70c316e74090fd0398d40628ef54f',true);
    var close = tmpl.find('.close');
    close.click(function () {
        tmpl.remove();
        $(window).unbind('resize.ad.notification')
    }).hover(function () {
      close.find('img').attr('src', _adOptions.closeImgHover)
    }, function () {
      close.find('img').attr('src', _adOptions.closeImg)
    });

    var load = new Image();
    load.src = _adOptions.closeImgHover;
    if (_adOptions.closeImg) {
      close.find('img').attr('src', _adOptions.closeImg);
    } else {
      close.remove();
    }

    var ie6 = !!window.ActiveXObject && !window.XMLHttpRequest;
    if (!ie6 && _adOptions.pos === 'fixed') {
        tmpl.css({position: 'fixed', bottom: 0});
    } else {
        _self._positionFixed(document.getElementById('ad-yeyou-nitifiction'), ($(window).height() - 226));
    }

    tmpl.find("a").click(function () {
      var link;
      link = $(this);
        link.attr("data-adskey") && _self._hitRequest(link.attr("data-adskey"), link.attr("href"));
    });


      /*
      通知广告中心广告已播放
      */
    this.emit(adv.ENUM.EVENTS.played);
  }
});