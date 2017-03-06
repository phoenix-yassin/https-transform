(function($){
adv.AdBase.extend('AdNewsBottomBanner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var self = this;
    this.container = $('.adsystem-mark').filter('[data-ad-type="AdNewsBottomBanner"]');
    this.container.css({
      'text-align': 'center'
    });

    if (this.options.src.indexOf('.swf') >= 0) {
      self.html = '<embed type="application/x-shockwave-flash" width="'+this.options.width+'" height="'+this.options.height+'" bgcolor="#ffffff" quality="high" wmode="opaque" src="' + this.options.src + '" />';
    } else {
      self.html = '<a href="' + this.options.url + '" target="_blank" ><img width="'+this.options.width+'" height="'+this.options.height+'"  src="' + this.options.src + '" /></a>';
    }
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    this.container.html(this.html);
   
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function() {
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});
})(jQuery)