adv.AdBase.extend('Ad17173ZhuanquYeyouLink', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  replaceLink:function(item,exposure){
    var liIndex = Math.ceil(item.index / 3) - 1,
        linkIndex = (item.index - 1) % 3;
    var link = this.advEl.find('li:eq('+ liIndex +')').find('.con a:eq('+ linkIndex +')');
    link.attr('href',item.link);
    link.text(item.name);
    item.desc && link.append('<span class="detail">'+item.desc+'</span>');
    item.isHot ? link.addClass('tg-c-red'):link.removeClass('tg-c-red');
    this.data.adskey && adv.util.sendIpa(link,this.data.adskey,exposure);
  },
  play: function() {
    var opt = this.options,me = this,ads = this.data.games;
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
              me.replaceLink(ads[i],i === 0);
            }
          }
        });
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});