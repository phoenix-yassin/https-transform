(function() {
  adv.AdMBase.extend('MadNewsArticleBottom', {
    _getData: function(callback) {
      var self = this;
      var opt = self.options;
      adv.net.proxy('http://17173im.qtmojo.com/main/s',{
        user: 'm_17173_com|m_news_detail|'+opt.advid,
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
              itemConfig.name = adItem.custom.N;
              itemConfig.logo = adItem.custom.S;
              itemConfig.gameType = adItem.custom.TY;
              itemConfig.star = adItem.custom.XJ;
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
        opt.cssString = '.tg-final-banner{ position: relative; margin-bottom: 1px;}\
          .tg-final-banner a{ display: block; overflow: hidden; padding:.625em 20px; text-decoration: none; background-color: #f5f5f5;}\
          .tg-final-banner .tg-final-banner-c1{ float: left; width:28.5%; margin:0; text-align: center;}\
          .tg-final-banner .tg-final-banner-c1 img{ width:60%; max-width: 100px; max-height: 100px; border:0; border-radius: 20px;}\
          .tg-final-banner .tg-final-banner-c2{ overflow: hidden; position: relative; padding-left: 0.625rem; width: 50.8%; line-height: 1.33; box-sizing:border-box;}\
          .tg-final-banner .tg-final-banner-c2::after{ content: \'\\5e7f\\544a\'; position: absolute; top:0; right:0; padding:0 .3em; font-size: 75%; line-height: 1.3; color: #ff5c00; border:1px solid #ff5c00; border-radius: 4px;}\
          .tg-final-banner .tg-tit{ margin:0; font-size: 0.875rem; color:#333;}\
          .tg-final-banner .tg-info{ margin:0; padding:.1em 0; font-size:0.75rem; color:#999;}\
          .tg-final-banner .tg-rate,.tg-final-banner .tg-rate-in{ overflow: hidden; height: 12px; background: url(http://ue1.17173cdn.com/a/module/m/gb/2015/img/ico-star.png) no-repeat; background-size: 69px;}\
          .tg-final-banner .tg-rate{ position: relative; width:69px; background-position: 0 top;}\
          .tg-final-banner .tg-rate-in{ content: \' \'; position: absolute; background-position: 0 bottom;}\
          .tg-final-banner .tg-final-banner-c3{ position: absolute; top:0; right:0; width:21%; height: 100%; background-color: #eaeaea;}\
          .tg-final-banner .tg-final-banner-c3::after{ content: \' \'; position: absolute; top:0; bottom:0; left:40%; width: .75rem; height: .75rem; margin:auto; border-top: 2px solid #aaa; border-right: 2px solid #aaa; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);}';
        
        //dom
        var tmpl = '@for(var i = 0; i < data.length; i++) {\
            <div class="tg-final-banner">\
              <a href="@data[i].link">\
                <figure class="tg-final-banner-c1"><img src="@data[i].logo" alt=""></figure>\
                <div class="tg-final-banner-c2">\
                  <p class="tg-tit">@data[i].name</p>\
                  <p class="tg-info">\u7c7b\u578b: @data[i].gameType</p>\
                  <div class="tg-rate"><div class="tg-rate-in" style="width:@(data[i].star*20)%;"></div></div>\
                </div>\
                <span class="tg-final-banner-c3"></span>\
              </a>\
            </div>}';

        opt.html = adv.razor(tmpl, {data: opt.ads});
      }
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      this.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        var $container = $('.'+opt.advid);
        adv.$.appendStyle(opt.cssString);
        $container.prepend(opt.html);
        this._showCount();
      }
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();