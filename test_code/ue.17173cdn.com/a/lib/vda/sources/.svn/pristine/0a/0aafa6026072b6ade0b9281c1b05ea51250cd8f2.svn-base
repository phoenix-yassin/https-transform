(function($) {
  var im = {
    cfg: '',
    write: function() {
      $('.adsystem-mark').filter('[data-ad-type="' + this.cfg.type + '"]').html('<a href="'+this.cfg.link+'" target="_blank"><img src="'+this.cfg.src+'" height="'+this.cfg.height+'" width="'+this.cfg.width+'"></a>');
    },
    init: function(a) {
      this.cfg = a;
    }
  };

  adv.AdBase.extend('Ad17173BottomBanner', {
    init: function(options) {
      this.base(options);
      im.init(this.options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function() {
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function() {
      im.write();
      this.emit(adv.ENUM.EVENTS.played);
    },
    stop: function() {
      this.emit(adv.ENUM.EVENTS.stoped);
    },
    dispose: function() {

    }
  });
})(jQuery);