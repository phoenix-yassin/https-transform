(function() {
  adv.AdMBase.extend('Mad17173Waterfall', {
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
      var opt = this.options;
      if (opt.ads.length > 0) {
        var image = opt.ads[0].image,
        title = opt.ads[0].title,
        link = opt.ads[0].link;
        //css
        opt.cssString = '.tg-index-yl{ position: absolute; bottom: 0; left:0; padding:0 .5em; font-size: 62.5%; color:#fff; background: rgba(0,0,0,.5);}';
        //dom
        var tmpl = function() {/*@preserve
          <div class="item">
            <a class="art-item" href="@link">
              <figure class="img-box">
                <img alt="" src="@image">
                <span class="tg-index-yl">\u5E7F\u544A</span>
              </figure>
              <p class="txt-box">@title</p>
            </a>
          </div>
        */};
        opt.html = adv.razor(tmpl, {link: link, image: image, title: title});
      }
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      this.base();
      var opt = this.options;
      var $container = $('.'+opt.advid);
      if (opt.ads.length > 0 && $container.find('.list-flow').length > 1) {
        adv.$.appendStyle(opt.cssString);
        $container.find('.list-flow').eq(1).prepend(opt.html);
        this._showCount();
      }
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();