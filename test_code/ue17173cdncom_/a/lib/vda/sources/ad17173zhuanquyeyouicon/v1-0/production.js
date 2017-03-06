adv.AdBase.extend('Ad17173ZhuanquYeyouIcon', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  replaceLink:function(item){
    var link = this.advEl.find('.item:eq('+(item.index-1)+')').find('a');
    link.attr('href',item.link);
    link.find('img').attr('src',item.img);
    link.find('.txt').text(item.name);
    item.isHot ? link.find('.txt').addClass('c-red'):link.find('.txt').removeClass('c-red');
  },
  play: function() {
    var opt = this.options,me = this,ads = opt.ads;
    this.advEl = $('.' + opt.advid);
    if(this.advEl[0]){
      for(var i = 0 ;i< ads.length;i++){
        me.replaceLink(ads[i]);
      }
    }
    else{
        $(document.body).bind('appendHtml', function (e, targetEl) {
          me.advEl = $(targetEl).find('.' + opt.advid);
          for(var i = 0 ;i< ads.length;i++){
            if(me.advEl[0]){
              me.replaceLink(ads[i]);
            }
          }
        });
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});