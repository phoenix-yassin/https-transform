(function() {
  adv.AdBase.extend('AdOtherScript', {
    init: function (options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function () {
      this.base();
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      this.base();
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.options.source;
      document.getElementsByTagName('head')[0].appendChild(script);
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();