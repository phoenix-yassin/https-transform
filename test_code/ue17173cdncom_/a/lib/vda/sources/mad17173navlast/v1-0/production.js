(function() {
  adv.AdMBase.extend('Mad17173NavLast', {
    _getData: function(callback) {
      var self = this;
      var opt = self.options;
      adv.net.proxy('//

17173im.qtmojo.com/main/s',{
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
              itemConfig.title = adItem.custom.T;
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
      var self = this;
      self.base();
      self.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      this.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        var title = opt.ads[0].title, link = opt.ads[0].link;
        var $container = $('.'+opt.advid);
        $container.find('a:last').html('<span>'+title+'</span>').attr('href', link).removeAttr('data-content');
        this._showCount();
      }
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();