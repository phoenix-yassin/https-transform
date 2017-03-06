(function() {
  adv.AdMBase.extend('Mad17173Gallery', {
    _getData: function(callback) {
      var self = this;
      var opt = self.options;
      adv.net.proxy('//

17173im.qtmojo.com/main/s',{
        user: 'm_17173_com|m_index|'+opt.advid,
        db: '17173im',
        border: '0',
        local: 'yes',
        t: '128'
      },function(result) {
        if (result.data != null) {
          var data = result.data;
          for (var i = 0; i < data.root.length; i++) {
            var adItem = data.root[i].chan;
            if (!!adItem.id && !!adItem.name) {
              var itemConfig = {};
              itemConfig.image = adItem.parts.part[0].s;
              itemConfig.link = adItem.cc + adItem.parts.part[0].c;
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
      this.base(options);
      this._getData(function() {
        this.emit(adv.ENUM.EVENTS.inited);
      });
    },
    setup: function () {
      var self = this;
      self.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        //css
        opt.cssString = '.tg-index-foucs{ position: relative;}\
          .tg-index-foucs .tg-index-sign{ position: absolute; left:10px; bottom:10px; width:2em; padding:0 .3em; font-size:12px; line-height:1.3; color:#fff; background: rgba(0,0,0,.5); box-shadow:0 0 2px #fff; border-radius: 3px;}';
        //dom
        var tmpl = '@for(var i = 0; i < data.length; i++) {\
          <li class="swiper-slide">\
            <a href="@data[i].link" class="tg-index-foucs">\
              <img alt="" src="@data[i].image"/>\
              <p class="tg-index-sign">\u5E7F\u544A</p>\
            </a>\
          </li>\
        }';
        opt.html = adv.razor(tmpl, {data: opt.ads});
      }
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      var self = this;
      this.base();
      var opt = this.options;
      var $container = $('.'+opt.advid);
      if (opt.ads.length > 0) {
        adv.$.appendStyle(opt.cssString);

        adv.util.poll(function(){
          return ued && ued.focusSlide;
        },function(){
          ued.focusSlide.prependSlide(opt.html);
          ued.focusSlide.wrapper[0].style.width = ued.focusSlide.virtualSize + 'px';
          ued.focusSlide.slideTo(0);
          ued.focusSlide.startAutoplay();
          self._showCount();
        },function(){
        },7000,500);

      }
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();