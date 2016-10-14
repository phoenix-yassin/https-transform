adv.AdBase.extend('Ad17173Duilian', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    var self = this;
    this.htmlLeft = adv.razor('<a href="@link" target="_blank"><img src="@source_left" alt="" width="@width" height="@height"/></a>',data);
    this.htmlRight =adv.razor('<a href="@link" target="_blank"><img src="@source_right" alt="" width="@width" height="@height"/></a>',data);
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var advEl = $('.' + this.options.advid);
    advEl.eq(0).text('').append(this.htmlLeft);
    advEl.eq(1).text('').append(this.htmlRight);
    this.emit(adv.ENUM.EVENTS.played);
  }
});