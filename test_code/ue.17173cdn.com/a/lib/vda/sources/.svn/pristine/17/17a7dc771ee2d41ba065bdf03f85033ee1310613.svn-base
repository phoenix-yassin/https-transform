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
      link = advEl.find('.row a:eq('+(ad.index-1)+')');
      link.attr('href',ad.link);
      span = link.find('.txt');
      span.text(ad.game);
      link.find('img').attr('src',ad.source);
      if(ad.hot)span.addClass('c-red');
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});