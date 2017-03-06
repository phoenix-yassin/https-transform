(function() {
  adv.AdMBase.extend('Mad17173RankBanner', {
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
      this.base(options);
      this._getData(function() {
        this.emit(adv.ENUM.EVENTS.inited);
      });
    },
    setup: function () {
      this.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        //css
        opt.cssString = '.tg-index-rank-banner{ margin-bottom:.2rem; text-align: center; background-color: #000;}';
        //dom
        var tmpl = function() {/*@preserve
          <a href="@link"><img src="@image" alt=""></a>
        */};
        opt.html = adv.razor(tmpl, {link: opt.ads[0].link, image: opt.ads[0].image});
        this.emit(adv.ENUM.EVENTS.setuped);
      }
    },
    play: function () {
      this.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        var $container = $('.'+opt.advid);
        adv.$.appendStyle(opt.cssString);
        $container.addClass('tg-index-rank-banner').append(opt.html);
        this._showCount();
      }
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();