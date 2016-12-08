adv.AdBase.extend('Ad17173DuilianB', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    var self = this;
    this.html = adv.razor('<a href="@link" target="_blank"><img src="@source" alt="" width="@width" height="@height"/></a>',data);
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var advEl = $('.' + this.options.advid);
    advEl.text('').append(this.html);
    this.emit(adv.ENUM.EVENTS.played);
  }
});