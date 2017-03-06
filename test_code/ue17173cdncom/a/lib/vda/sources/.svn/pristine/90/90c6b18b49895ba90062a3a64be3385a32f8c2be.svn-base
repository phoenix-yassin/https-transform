adv.AdBase.extend('Ad17173ZhuanquYeyouIcon', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  replaceLink:function(item){
    var link = this.advEl.find('li:eq('+(item.index-1)+')').find('a');
    link.attr('href',item.link);
    link.find('img').attr('src',item.img);
    link.find('.txt').text(item.name);
    item.isHot ? link.find('.txt').addClass('tg-c-red'):link.find('.txt').removeClass('tg-c-red');
  },
  render:function(ads){
    var me = this;
		me.advEl.addClass('classNameForSetLinkSearch').attr('adskey',me.options.adskey);
    for(var i = 0 ;i< ads.length;i++){
      me.replaceLink(ads[i]);
    }
  },
  play: function() {
    var opt = this.options,me = this,ads = this.data.games;
    this.advEl = $('.' + opt.advid);
    if(me.advEl[0]){
      me.render(ads);
    }
    else{
        $(document.body).bind('appendHtml', function (e, targetEl) {
          me.advEl = $(targetEl).find('.' + opt.advid);
          if(me.advEl[0]){
          	me.render(ads);
          }
        });
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});