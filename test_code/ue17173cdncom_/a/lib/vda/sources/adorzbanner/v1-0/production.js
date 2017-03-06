adv.AdBase.extend('AdOrzBanner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var data = this.options.ads[0];
    this.html = adv.razor('<a href="@link" target="_blank"><img src="@source" alt="" width="@width" height="@height" /></a>',this.options.ads[0]);
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    $('.' + this.options.advid).text('').append(this.html).show();
    this.emit(adv.ENUM.EVENTS.played);
  }
});