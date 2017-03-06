(function() {
  adv.AdMBase.extend('MadNewgameIndexRecommend2', {
    _getData: function(callback) {
      var self = this;
      var opt = self.options;
      adv.net.proxy(advConfigs.API_ADDRESSS.alllget,{
        user: 'm_17173_com|newgame|'+opt.advid,
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
              itemConfig.name = adItem.custom.T;
              itemConfig.logo = adItem.custom.S;
              itemConfig.gameType = adItem.custom.TY;
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
      this.base(options);
      this._getData(function() {
        this.emit(adv.ENUM.EVENTS.inited);
      });
    },
    setup: function () {
      this.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        //dom
        var tmpl = '@for(var i = 0; i < data.length; i++) {\
              <li>\
                <a href="@data[i].link">\
                  <figure class="tg-newgame-banner-img"><img src="@data[i].logo" alt=""></figure>\
                  <p class="tg-newgame-banner-name">@data[i].name</p>\
                  <p class="tg-newgame-banner-info">@data[i].gameType</p>\
                </a>\
              </li>\
        }';
        opt.html = adv.razor(tmpl, {data: opt.ads});
      }
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      var self = this;
      self.base();
      var opt = self.options;
      if (opt.ads.length > 0) {
        var $container = $('.MadNewgameIndexRecommend');
        adv.util.poll(function(){
          return $container.length > 0 && $container.find('li').length > 0;
        },function(){
          $container.find('li').after(opt.html);
        }, function() {},5000,500);
        self._showCount();
      }
      self.emit(adv.ENUM.EVENTS.played);
    }
  });
})();