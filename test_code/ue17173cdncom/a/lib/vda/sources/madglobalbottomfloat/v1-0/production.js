(function() {

  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=="micromessenger") return;

  adv.AdMBase.extend('MadGlobalBottomFloat', {
    _jsonp: function (url, callback) {
      var self = this;
      var opt = self.options;
      var funId = opt.advid + new Date() * 1;
      window[funId] = callback;
      url = url + '&callback=' + funId;
      var jsEl = document.createElement('script');
      jsEl.src = url;
      document.getElementsByTagName('head')[0].appendChild(jsEl);
    },
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
              itemConfig.isSale = adItem.custom.priority == '16'? false: true;
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
    _disableAth: function() {
      var ued = 'undefined' !==  typeof window.ued ? window.ued: window.ued= {};
      ued.Ath = {disabled: true};
      adv.util.poll(function(){
        return window.addToHomescreen;
      },function(){
        addToHomescreen.destroy();
      },function(){
      },3000,100);
    },
    init: function (options) {
      var self = this;
      this.base(options);
      if (typeof jQuery == 'undefined') {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//ue.17173cdn.com/a/lib/jquery-2.1.1.min.js';
        script.id = 'madjQuery';
          script.onload = script.onreadystatechange = function () {
            if (script.ready) {
              return false;
            }
            if (!script.readyState || script.readyState == "loaded" || script.readyState == 'complete') {
              script.onreadystatechange = null;
              script.ready = true;
              self._getData(function() {
                self.emit(adv.ENUM.EVENTS.inited);
              });
            }
          };
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        self._getData(function() {
          self.emit(adv.ENUM.EVENTS.inited);
        });
      }
    },
    setup: function () {
      var self = this;
      self.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        var image = opt.ads[0].image,
        link = opt.ads[0].link;

        //css
        opt.cssString = '.tg-footer-fix{ overflow: hidden; position: fixed; z-index: 680; bottom: 0; left:0; width:100%; text-align: center; background-color:rgba(0,0,0,.5);}\
          .tg-footer-fix .tg-footer-fix-in{ display: inline-block; position: relative; max-width: 100%; height: 40px; padding-right:40px; box-sizing:border-box; vertical-align: middle;}\
          .tg-footer-fix img{ max-width:100%; max-height: 100%; border:0;}\
          .tg-footer-fix .tg-footer-fix-close{ position: absolute; top:0; right:0; width:40px; height: 40px; font: normal 40px/40px "sans-serif"; color:#fff; text-decoration: none; background: #555;}\
          .madglobalbottomfloat-hide{display: none;}';

        //dom
        var tmpl = function() {/*@preserve
          <div class="tg-footer-fix @advid" style="display:none;">
            <div class="tg-footer-fix-in">
              <a href="@link"><img src="@image" alt=""></a>
              <a href="javascript:;" class="tg-footer-fix-close">\u00d7</a>
            </div>
          </div>
        */};
        opt.html = adv.razor(tmpl, {link: link, image: image, advid: opt.advid});
      }
      self.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      var self = this;
      self.base();
      var opt = self.options;
      var ignoreIndex = false;

      if (!opt.isSale && location.hostname == 'm.17173.com' && location.pathname == '/') {
        ignoreIndex = true;
      }

      if (opt.ads.length > 0 && !ignoreIndex && !!!adv.cookie.getCookie(opt.advid)) {

        self._disableAth();
        adv.$.appendStyle(opt.cssString);
        var $container = adv.$(opt.html);
        $container.find('img').on('load', function() {
          if ($container.length > 0) {
            $container.show();
          }
        });
        adv.$('body').append($container);
        $container.find('.tg-footer-fix-close').on('click', function() {
          $container.hide();
          var now = new Date();
          var todayEnd = new Date(now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' 23:59:59').getTime();
          adv.cookie.setCookie(opt.advid, 'ignoreThis', todayEnd - Date.now(), '17173.com', '/');
        });
        self._showCount();
        self.emit(adv.ENUM.EVENTS.played);
      }
    }
  });
})();