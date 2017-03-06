adv.AdBase.extend('AdHaoTopbg', {
  init: function (options) {
    this.base(options); 
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function (data) {
    this.base();
    var self = this;
    self.data = data || self.options;
    var gameName = haoConfig.gameName || $('h2 .orange').eq(0).text();
    $.each(self.data.datas, function(index, val) {
      if (gameName == val.keywords) {
        self.data.config = val;
        window.appZhanNeiTuiGuangOff = true;
        adv.$.appendStyle('.ad-zhanneituiguang,.AdTopBarDragShow{display: none!important} #jsSysw{display:none!important}');
        self.emit(adv.ENUM.EVENTS.setuped);
      }
    });
  },
  play: function () {
    this.base();
    var self = this;
    var b, c, d;
    var $container = $('.' + self.options.advid);
    $('body').css({ background: '#fff'});
    $container.eq(0).css({
      'background': 'url('+self.data.config.bgSrc+') center top no-repeat'
    });
    b = ($(window).width() - self.data.config.topWidth) / 2,
    c = $('<a class="topBackgroundAdv_bgbody" href="' +self.data.config.bgBodyLink + '" target="_blank"></a>');
    c.css({
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: b,
      height: self.data.config.bgBodyHeight
    });
    var d = c.clone();
     d.css({
      'right':0,
      'left':'auto'
    }),
      $(document.body).css({
        'overflow-x': 'hidden'
    });
    c.add(d).appendTo($container);
    $('.pn-ffs').length > 0 && $('.pn-ffs').addClass('wc');
    $('.package-list').length > 0 && $('.package-list').addClass('package-list-tg');
    $(window).bind('resize.bgad', function() {
      b = ($(window).width() - self.data.config.topWidth) / 2 ;
      c&&c.width(b);
      d&&d.width(b);
    });
    this.emit(adv.ENUM.EVENTS.played);
  }
});