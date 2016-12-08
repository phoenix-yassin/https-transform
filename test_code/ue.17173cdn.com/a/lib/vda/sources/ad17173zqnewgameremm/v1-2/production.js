adv.AdBase.extend('Ad17173ZQNewGameRemm', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var advEl,opt = this.options,ads,ad;
    if(opt.ads){
      ads = opt.ads;
    }
    else{
      ads = [opt];
    }
    advEl = $('.' + opt.advid);
    if(advEl[0]){
      for(var i = 0 ;i<ads.length;i++){
        ad = ads[i];
        var link = advEl.find('.item:eq('+(ad.index-1)+')').find('a');
        link.attr('href',ad.link);
        link.find('img').attr('src',ad.img);
        link.find('.txt').text(ad.name);
        ad.isHot ? link.addClass('c-red') : link.removeClass('c-red');
        ad.ipaCode && adv.util.sendIpa(link,ad.ipaCode);
      }
    }
    else{
        $(document.body).bind('appendHtml', function (e, targetEl) {
          for(var i = 0 ;i<ads.length;i++){
            ad = ads[i];
            advEl = $(targetEl).find('.' + opt.advid);
            if(advEl[0]){
              var link = advEl.find('.item:eq('+(ad.index-1)+')').find('a');
              link.attr('href',ad.link);
              link.find('img').attr('src',ad.img);
              link.find('.txt').text(ad.name);
              ad.isHot ? link.addClass('c-red') : link.removeClass('c-red');
              ad.ipaCode && adv.util.sendIpa(link,ad.ipaCode);
            }
          }
        });
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});