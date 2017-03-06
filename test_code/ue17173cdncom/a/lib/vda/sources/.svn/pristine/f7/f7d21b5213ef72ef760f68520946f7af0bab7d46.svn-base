(function($){

adv.AdBase.extend('AdOtherBKBanner', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    this.container = $('.adsystem-mark').filter('[data-ad-type="AdOtherBKBanner"]');
   if (this.options.src.indexOf('.swf') > 0) {
      this.html = '<a href="' + this.options.link + '" target="_blank" ><embed type="application/x-shockwave-flash" wmode="transparent" width="770" height="80" bgcolor="#ffffff" quality="high" wmode="opaque" src="' + this.options.src + '" /></a>';
    } else {
      this.html = '<a href="' + this.options.link + '" target="_blank" ><img width="770" height="80"  src="' + this.options.src + '" /></a>';
    }
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.container.html(this.html);
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.emit(adv.ENUM.EVENTS.stoped);
  },
});
})(jQuery);
