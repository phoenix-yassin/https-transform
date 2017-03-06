(function() {
  adv.AdMBase.extend('Mad17173TopBanner', {
    _getData: function(callback) {
      var self = this;
      var opt = self.options;
      adv.net.proxy('//17173im.qtmojo.com/main/s',{
        user: 'm_17173_com|m_index|'+opt.advid.toLocaleLowerCase(),
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
              itemConfig.image = adItem.custom.BS;
              itemConfig.thumb = adItem.custom.SS;
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
      var opt = self.options;
      if (opt.ads.length > 0) {
        var image = opt.ads[0].image,
            thumb = opt.ads[0].thumb,
            link = opt.ads[0].link;

        //css
        opt.cssString = '.tg-index-top-banner{ position: relative; text-align: center; background-color: #000;}\
          .tg-index-top-banner .tg-index-timer{ position: absolute; z-index: 5; top:.8em; right:.8em; width:31px; height: 31px; color:#fff; text-align: center; line-height: 31px; background: rgba(0,0,0,.3); border-radius: 100%;}\
          .tg-index-top-banner .tg-index-timer::after{ content: \' \'; position: absolute; z-index: -1; top:3px; left:3px; width:25px; height:25px; background: rgba(0,0,0,.7); border-radius: 100%;}';

        //dom
        var tmpl = function() {/*@preserve
          <a href="@link" alt="">
          <img src="@image" alt="" data-role="big">
          <span class="tg-index-timer" data-role="timer">3</span>
          <img src="@thumb" alt="" data-role="small">
          </a>
        */};
        opt.html = adv.razor(tmpl, {link: link, image: image, thumb: thumb});
        self.emit(adv.ENUM.EVENTS.setuped);
      }
    },
    play: function () {
      this.base();
      var opt = this.options;
      if (opt.ads.length > 0) {
        var $container = $('.'+opt.advid);

        adv.$.appendStyle(opt.cssString);
        $container.hide().addClass('tg-index-top-banner').append(opt.html);
        $container.find('[data-role=big]').load(function() {
          $container.find('[data-role=small]').hide();
          $container.slideDown(700, function() {
            var i = 3,
            timer = setInterval(function() {
              i--;
              $container.find('[data-role=timer]').text(i);
              if (i == 0) {
                clearInterval(timer);
                $container.slideUp(700, function() {
                  $container.find('[data-role=big]').hide();
                  $container.find('[data-role=timer]').hide();
                  $container.find('[data-role=small]').show();
                  $container.slideDown(300, function() {});
                });
              }
            }, 1000);
          });
        });

        this._showCount();
      }
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();