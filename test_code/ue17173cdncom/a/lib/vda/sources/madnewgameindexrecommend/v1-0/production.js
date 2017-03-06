(function() {
  adv.AdMBase.extend('MadNewgameIndexRecommend', {
    _getData: function(callback) {
      var self = this;
      var opt = self.options;
      adv.net.proxy('//17173im.qtmojo.com/main/s',{
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
        //css
        opt.cssString = '.tg-newgame-banner{margin-top:.875em;}\
          .tg-newgame-banner .tg-newgame-banner-tit{ font-size: 1.125em; line-height: 2;}\
          .tg-newgame-banner .tg-newgame-banner-list{ overflow: hidden; margin:0; padding:0; list-style:none;}\
          .tg-newgame-banner .tg-newgame-banner-list li{ float: left; width:50%;}\
          .tg-newgame-banner a{ display: block; overflow: hidden; color:#000; line-height: 1.33; text-decoration: none;}\
          .tg-newgame-banner .tg-newgame-banner-img{ float: left; width:30%; max-width: 100px; margin:0 .625em 0 0;}\
          .tg-newgame-banner .tg-newgame-banner-img img{ max-width: 100%; max-height: 100%; border:0; border-radius: 20%;}\
          .tg-newgame-banner p{ margin:0; font-size: inherit;}\
          .tg-newgame-banner .tg-newgame-banner-name{ padding-top: .2em;}\
          .tg-newgame-banner .tg-newgame-banner-info{ font-size: 87.5%; color:#999;}';

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
        var listHtml = adv.razor(tmpl, {data: opt.ads});
        var wrapperFunc = function() {/*@preserve
            <h3 class="tg-newgame-banner-tit">编辑推荐</h3>
            <ul class="tg-newgame-banner-list">
              @listHtml
            </ul>
        */};
        opt.html = adv.razor(wrapperFunc, {listHtml: listHtml})
      }
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      this.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        adv.$.appendStyle(opt.cssString);
        var $container = $('.'+opt.advid);
        $container.addClass('tg-newgame-banner');
        $container.append(opt.html);
        this._showCount();
      }
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();