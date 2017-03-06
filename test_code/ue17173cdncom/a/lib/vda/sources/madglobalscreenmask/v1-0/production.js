(function() {
  if (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger') {
    return false;
  }
  adv.AdMBase.extend('MadGlobalScreenMask', {
    _getData: function(callback) {
      var self = this;
      var opt = self.options;
      adv.net.proxy('//17173im.qtmojo.com/main/s',{
        user: 'm_17173_com|global|'+opt.advid,
        db: '17173im',
        border: '0',
        local: 'yes',
        t: '128'
      },function(result) {
        if (result.data != null) {
          var data = result.data;
          for (var i = 0; i < data.root.length; i++) {
            var adItem = data.root[i].chan;
            if (!!adItem.id && !!adItem.at) {
              var itemConfig = {};
              itemConfig.image = adItem.custom.S;
              itemConfig.link = adItem.cc + adItem.custom.U;
              itemConfig.showCount = adItem.sc;
              opt.ads.push(itemConfig);
            }
          }
          callback.call(self);
        }
      });
    },
    _showCount: function() {
      var opt = this.options;
      for (var i = 0; i < opt.ads.length; i++) {
        var showCountLink = opt.ads[i].showCount;
        var counter = new Image();
        counter.src = showCountLink;
      }
    },
    init: function (options) {
      var self = this;
      this.base(options);
      self._getData(function() {
        self.emit(adv.ENUM.EVENTS.inited);
      });
    },
    setup: function () {
      var self = this;
      self.base();
      var opt = this.options;
      var ignoreBaiduS6 = false;
      if (window.location.hostname == 'lol.17173.com'
        && window.location.href.indexOf('baidu_s6') > -1
        && new Date().getTime() >= new Date('2016/10/14 00:00:00').getTime()
        && new Date().getTime() < new Date('2016/11/1 00:00:00').getTime()
      ) {
        ignoreBaiduS6 = true;
      }
      if (opt.ads.length > 0 && !ignoreBaiduS6) {
        var image = opt.ads[0].image,
        link = opt.ads[0].link;

        var bbsClass = window.location.hostname == 'bbs.17173.com'? 'tg-fullscreen-bbs':'';
        //css
        opt.cssString = '.tg-fullscreen{ position: fixed; z-index: 1100; top:0; right:0; bottom:0; left:0; background:rgba(0,0,0,.5);}\
          .tg-fullscreen .tg-fullscreen-in{ position: absolute; top:50%; left:50%; width:84%; max-width:550px; text-align: center; white-space: nowrap; -webkit-transform:translate(-50%,-50%); -ms-transform:translate(-50%,-50%); transform:translate(-50%,-50%);}\
          .tg-fullscreen img{ max-width: 100%; max-height: 100%; vertical-align: top;}\
          .tg-fullscreen .tg-fullscreen-close{ display: inline-block; width:25px; height: 25px; margin:-12px 0 0 -12px; font: normal 24px/25px "sans-serif"; color:#fff; text-align: center; text-decoration: none; background-color: #000; border:2px solid #fff; border-radius: 100%; vertical-align: top}\
          .tg-fullscreen-bbs .tg-fullscreen-close{ -webkit-transform:scale(.77); -ms-transform:scale(.77); transform:scale(.77);}\
          @media only screen and (orientation:landscape){.tg-fullscreen .tg-fullscreen-in{height: 90%;}}';
        //dom
        var tmpl = function() {/*@preserve
          <div class="tg-fullscreen @advid @bbsClass">
            <div class="tg-fullscreen-in">
              <a href="@link"><img src="@image" alt=""></a><a href="javascript:;" class="tg-fullscreen-close">\u00d7</a>
            </div>
          </div>
        */};
        opt.html = adv.razor(tmpl, {link: link, image: image, advid: opt.advid, bbsClass: bbsClass});
        this.emit(adv.ENUM.EVENTS.setuped);
      }
    },
    play: function () {
      this.base();
      var opt = this.options;
      if (opt.ads.length > 0 && !!!adv.cookie.getCookie(opt.advid)) {
        var $container = adv.$('body');
        adv.$.appendStyle(opt.cssString);
        $container.append(opt.html);
        adv.$('.' + opt.advid).find('.tg-fullscreen-close').on('click', function() {
          adv.$('.' + opt.advid).hide();
          var now = new Date();
          var todayEnd = new Date(now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' 23:59:59').getTime();
          adv.cookie.setCookie(opt.advid, 'ignoreThis', todayEnd - Date.now(), '17173.com', '/');
        });
        this._showCount();
      }
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();