adv.AdBase.extend('Mad17173TopbarCorner', {
  _getData: function(callback) {
    var self = this;
    var opt = self.options;
    adv.net.proxy(advConfigs.API_ADDRESSS.alllget,{
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
              itemConfig.title = adItem.custom.W;
              itemConfig.icon = adItem.custom.S;
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
  init: function(options) {
    var self = this;
    self.base(options);
    var pageWhiteList = [
      'm.17173.com/',
      'news.17173.com/',
      'bbs.17173.com/',
      'newgame.17173.com/',
      'newgame.17173.com/testing-list.html',
      'newgame.17173.com/game-list.html',
      'top.17173.com/'
    ];
    if (pageWhiteList.indexOf(window.location.hostname + window.location.pathname) > -1 ) {
      self._getData(function() {
        self.emit(adv.ENUM.EVENTS.inited);
      });
    }
  },
  setup: function() {
    this.base();
    var opt = this.options;
    if (opt.ads.length > 0) {
      var icon = opt.ads[0].icon,
      title = opt.ads[0].title,
      link = opt.ads[0].link;
      //css
      opt.cssString = '.topbar .tg-topbar-jian{ right:.8em;}\
        .gb-topbar .tg-topbar-jian{ right:0; margin-right: 3em; width: 22px;}\
        .tg-topbar-jian{ overflow: hidden; position: absolute; top:0; color:#000; white-space: nowrap; text-decoration: none;}\
        .tg-topbar-jian::before{ content: \' \'; display: inline-block; width: 22px; height: 25px; margin-right: .2em; margin-bottom: .2em; vertical-align: middle; background: url('+icon+') no-repeat 50% 50%; background-size: contain;}\
        body>.hd{position:relative;}\
        body>.hd .tg-topbar-jian{ right:.8em; top:50%; -webkit-transform:translateY(-50%) scale(.77); -ms-transform:translateY(-50%) scale(.77); transform:translateY(-50%) scale(.77);}';
      //dom
      var tmpl = function() {/*@preserve
        <a href="@link" class="tg-topbar-jian">@title</a>
      */};
      opt.html = adv.razor(tmpl, {link: link, title: title});
      this.emit(adv.ENUM.EVENTS.setuped);
    }
  },
  play: function() {
    var self = this;
    self.base();
    var opt = self.options;
    if (opt.ads.length > 0) {
      adv.util.poll(function(){
          return adv.$('.'+opt.advid).length > 0;
        },function() {
          var $container = $('.'+opt.advid);
          adv.$.appendStyle(opt.cssString);
          var $elem = $(opt.html);
          $elem.css({
            'margin-right': (1 + $container.find('.gb-topbar-tool a').length * 2) +'em'
          });
          $container.append($elem);
        },function(){
        },5000,500);
      self._showCount();
    }
    self.emit(adv.ENUM.EVENTS.played);
  }
});