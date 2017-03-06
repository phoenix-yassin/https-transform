adv.AdBase.extend('AdFlashHotGameItem', {

  init: function (options) {
    this.base(options);
    this.container = $('.adsystem-mark').filter('[data-ad-type=AdFlashHotGameItem]');
    this.emit(adv.ENUM.EVENTS.inited);
  },

  setup: function () {
    this.base();
    var self = this;
    this.html =[];
    $.each(this.options.data, function(index, val) {
      self.container.find('li').eq(index+5).html('<a href="'+val.link+'" target="_blank"><img src="'+val.src+'" alt="'+val.alt+'"><span class="txt " style="color:'+val.color+'">'+val.title+'</span></a>');
      // self.html.push('<li><a href="',val.link,'" target="_blank"><img src="',val.src,'" alt="',val.alt,'"><span class="txt">',val.title,'</span></a></li>')
    });
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});