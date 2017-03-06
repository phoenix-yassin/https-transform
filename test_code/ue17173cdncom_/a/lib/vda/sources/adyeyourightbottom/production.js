adv.AdBase.extend('AdYeyouRightBottom', {
  /*
  初始化参数的操作请放在这个方法里执行,广告实例化时会自动调用此方法
  options即为configs.js里的配置,也就是投放时的代码
  */
  init: function (options) {
    /*
    调用父类的方法,初始化参数和状态自动转化,此方法必须调用
    执行完成后,可以通过this.options访问options
    */
    this.base(options);

    /*自定义的初始化逻辑*/


    /*
    初始化操作完成后,手动触发此事件,以通知广告中心自动去调用setup
    如果初始化操作是异步的,请在异步完成后再触发此事件,以保证在setup之前所有初始化操作都已完成.
    如果不想让广告继续运行,则不要触发此事件即可
    */
    this.emit(adv.ENUM.EVENTS.inited);
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
  //预加载素材,dom元素预拼接等准备工作请在此方法执行,inited触发后会自动调用此方法,请勿手动调用此方法
  setup: function () {
    this.base();
    //console.log(this.options);
    var adConfig = this.options.adConfig;
    this._adOptions = this.options;

    var tmpl = $('<div id="ad-yeyou-nitifiction" style="width:300px;height:200px;padding:22px 2px 2px;position:absolute;right:0;display:block;z-index:10001;border:1px solid #333;background:#111 url(//

ue1.yeyou.itc.cn/images/www/2013/vk-box.jpg) no-repeat;"><a class="close" style="position:absolute;display:block;top:1px;right:1px;"><img style="width:20px;height:19px;" src="//

ue1.yeyou.itc.cn/images/www/2013/close.png"/></a></div>');

    var _html = '';
    if(~adConfig.src.indexOf('img')) {
        _html = $('<a target="_blank"><img /></a>');
        _html.find('img').css({width: 300, height: 200}).attr('src', adConfig.src);
        _html.attr('href', adConfig.link);
        if(adConfig && adConfig.code) {
            _html.attr('data-adskey', adConfig.code);
        }
    }
    else{
        _html = $('<embed type="application/x-shockwave-flash" width="300" height="200" bgcolor="#ffffff" quality="high" wmode="opaque" />');
        _html.attr('src', adConfig.src);
    }

    _html.appendTo(tmpl);
    this.html =  tmpl;

    //this.html = '<div>'+this.options.customProperty+'</div>';
    /*
    通知广告中心setup完毕,可以立即播放(play)了
    如果不触发此事件,则广告不会自动播放
    */
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
    var _self = this,
        _adOptions = _self._adOptions,
        tmpl = _self.html;
    this.base();

    //console.log($('.' +this.options.advid))
    $('.' +this.options.advid).before(tmpl);
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
  },
  //可选的实现,停止广告播放,如果不实现此方法,则默认的stop实现会直接隐藏广告的dom元素.
  stop: function () {
    this.base();
    /*
    通知广告中心广告已停止
    */
    this.emit(adv.ENUM.EVENTS.stoped);
  },
  //可选的实现,如果广告占用的资源需要手动去回收,请在此方法里处理.
  dispose: function () {

  }
});