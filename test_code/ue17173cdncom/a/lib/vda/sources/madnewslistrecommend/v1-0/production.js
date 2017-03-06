(function() {
  adv.AdMBase.extend('MadNewsListRecommend', {
    _getData: function(callback) {
      var self = this;
      var opt = self.options;
      adv.net.proxy('//17173im.qtmojo.com/main/s',{
        user: 'm_17173_com|m_news_list|'+opt.advid,
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
              itemConfig.text = adItem.custom.C;
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
      var self = this;
      this.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        //css
        opt.cssString = '.tg-art-item{ display: block; overflow: hidden; position: relative; line-height: 1.5;}\
          .tg-art-item .tg-tit{ overflow: hidden; color:#0084cb; text-overflow:ellipsis; white-space: nowrap;}\
          .tg-art-item .tg-desc{ overflow: hidden; position: relative; height: 3em; margin-top: .2em; font-size: 81.25%;}\
          .tg-art-item .tg-desc::before{ content: \' \'; position: absolute; z-index: 2; bottom:.1em; right:0; width:3.2em; height: 1.5em; background: #fff;}\
          .tg-art-item .tg-desc::after{ content: \'\\5e7f\\544a\'; position: absolute; z-index: 3; bottom:.2em; right:0; font-size:12px; line-height: 1.3; color:#999; border:1px solid #999;}\
          .tg-art-item-c1{position: relative;overflow: hidden;float: left;max-width: 160px;margin-right: .8em; background-color: #000;}\
          .tg-art-item-c1 img{position: absolute;top: 0;left: 0;right: 0;bottom: 0;width: auto;margin: auto;}\
          .tg-art-item-c2{ overflow: hidden; position: relative;}\
          .tg-list-index .tg-art-item-c1{width: 35%;height: 4.2em;}\
          .tg-list-index .tg-art-item .tg-desc::after{ padding:0 .3em; border-radius: 4px;}\
          .tg-list-news .tg-art-item-c1{ width:30%;height: 4.3125em;}\
          .tg-list-news .tg-art-item .tg-desc{ color: #999;}\
          .tg-list-news .tg-art-item .tg-desc::after{ padding:0 .5em; border-radius: .75em;}';

        //dom
        var tmpl = '@for(var i = 0; i < data.length; i++) {\
          <li>\
            <a href="@data[i].link" class="tg-art-item">\
              <figure class="tg-art-item-c1">\
                <img src="@data[i].image" alt="">\
              </figure>\
              <div class="tg-art-item-c2">\
                <p class="tg-tit">@data[i].title</p>\
                <p class="tg-desc">@data[i].text</p>\
              </div>\
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
        adv.util.poll(function(){
          return $('.'+opt.advid).length > 0 && $('.'+opt.advid).find('li').length >= 3;
        },function(){
          adv.$.appendStyle(opt.cssString);
          var $container = $('.'+opt.advid);
          $container.parent('div').addClass('tg-list-news');
          $container.find('li').eq(2).append(opt.html);
        }, function() {},5000,500);
        self._showCount();
      }
      self.emit(adv.ENUM.EVENTS.played);
    }
  });
})();