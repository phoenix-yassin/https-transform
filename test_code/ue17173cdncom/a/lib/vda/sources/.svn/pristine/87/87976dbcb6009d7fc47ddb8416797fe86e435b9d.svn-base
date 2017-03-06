adv.AdBase.extend('Ad17173MediaBanner', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function (data) {
    this.base();
    this.data = data || this.options;
    this.html = adv.razor('<a href="@link" target="_blank"><img src="@source" alt="" width="1100" height="60" /></a>',data);
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    if(~navigator.userAgent.indexOf('iPad')){
			$('.' + this.options.advid).text('').append(this.html).show();
    }
    else{
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.data.jsFile;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});