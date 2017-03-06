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
        index = advEl.find('a').length-1,
        ad,link;
    while(ads.length){
      ad = ads.pop();
      link = advEl.find('.row a:eq('+index+')');
      link.text(ad.game).attr('href',ad.link);
      if(ad.hot)link.addClass('c-red');
      index--;
    }
/*    for(var i = 0 ;i<ads.length;i++){
      ad = ads[i];
      link = advEl.find('.row a:eq('+(ad.index-1)+')');
      link.text(ad.game).attr('href',ad.link);
      if(ad.hot)link.addClass('c-red');
    }*/
    this.emit(adv.ENUM.EVENTS.played);
  }
});