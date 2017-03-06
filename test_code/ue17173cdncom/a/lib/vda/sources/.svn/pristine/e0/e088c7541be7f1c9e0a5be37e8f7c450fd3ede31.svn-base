adv.AdBase.extend('Ad17173RemmImg', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var el = $('.' + this.options.advid), opt = this.options,ads = opt.ads,item;
    for(var i = 0;i < ads.length;i++){
      item = el.find('.gtype-item:eq('+i+') .gtype-list-game .item:eq(4) a');
      item.attr('href',ads[i].link).find('img').attr('src',ads[i].source);
      item.find('.txt .t').text(ads[i].title);
      item.find('.txt .desc').text(ads[i].desc);
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});