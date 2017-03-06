adv.AdBase.extend('Ad17173ZhuanquHotRemm', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var advEl = $('.' + this.options.advid),
        ads = this.options.ads,
        ad,link,span;
    for(var i = 0 ;i<ads.length;i++){
      ad = ads[i];
      link = advEl.find('span.col:eq('+(ad.index-1)+') a');
      link.text(ad.game).attr('href',ad.link).addClass('c-red');
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});