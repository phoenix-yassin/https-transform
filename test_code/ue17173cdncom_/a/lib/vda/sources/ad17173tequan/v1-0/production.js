adv.AdBase.extend('Ad17173TeQuan', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var opt = this.options,
        el = $('.' + opt.advid);
    opt.hot?el.addClass('item-top'):el.removeClass('item-top');
    opt.btnHot && el.find('.btn-tq').css('color','red');
    el.find('a').attr('href',opt.link);
    el.find('img').attr('src',opt.source);
    el.find('.tit').text(opt.gameName);
    el.find('.desc').text(opt.desc);
    el.find('.btn-tq').text(opt.btnName);
    this.emit(adv.ENUM.EVENTS.played);
  }
});