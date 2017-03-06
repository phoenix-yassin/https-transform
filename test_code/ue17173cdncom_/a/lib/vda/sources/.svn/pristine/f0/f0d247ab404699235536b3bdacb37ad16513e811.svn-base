(function($) {
  adv.AdBase.extend('AdOtherQQBanner', {
    init: function(options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function() {
      this.container = $('.adsystem-mark').filter('[data-ad-type="AdOtherQQBanner"]');
      this.iframeHtml = '<iframe src="'+this.options.src+'" frameborder="0" width="'+this.options.width+'" height="'+this.options.height+'"  scrolling="no" ></iframe>';
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function() {
      this.container.html(this.iframeHtml);
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})(jQuery);