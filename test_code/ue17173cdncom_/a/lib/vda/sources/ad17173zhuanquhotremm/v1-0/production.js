/*
advConfigs.config({
  type: 'Ad17173ZhuanquHotRemm',
  advid:'ad17173ZhuanquHotRemm1',
  version:'v1.0.001',
  ads: [{
    index:10,
    game:'四字真言',
    link: '111'
  }]
});
*/
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
      span = advEl.find('span:eq('+(ad.index-1)+')');
      span.prependTo(advEl);
      advEl.find('span:lt(3)').css('width','50');
      link = span.find('a');
      link.text('DNF');
      /*span.css({"width":30,"text-align":"right"});*/
      advEl.append(adv.razor('<span style="width:54px;" class="col col-3"><a href="@link" target="_blank" class="c-red">@game</a></span>',{link:ad.link,game:ad.game}));
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});