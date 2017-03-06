adv.AdBase.extend('Ad17173Duilian', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var self = this,
        opt = this.options;
    this.htmlLeft = '<a href="'+opt.link+'" target="_blank"><img src="'+opt.source_left+'" alt="" width="'+opt.width+'" height="'+opt.height+'" /></a>';
    this.htmlRight = '<a href="'+opt.link+'" target="_blank"><img src="'+opt.source_right+'" alt="" width="'+opt.width+'" height="'+opt.height+'" /></a>';
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var advEl = $('.' + this.options.advid);
    advEl.eq(0).text('').append(this.htmlLeft);
    advEl.eq(1).text('').append(this.htmlRight);
    this.emit(adv.ENUM.EVENTS.played);
  }
});