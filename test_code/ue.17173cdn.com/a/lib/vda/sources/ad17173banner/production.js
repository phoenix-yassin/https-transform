adv.AdBase.extend('Ad17173Banner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var opt = this.options;
    if(opt.source){
      this.html = '<a href="'+opt.link+'" target="_blank"><img src="'+opt.source+'" alt="" width="'+opt.width+'" height="'+opt.height+'" /></a>';
    }
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    if(this.options.source){
      $('.' + this.options.advid).text('').append(this.html).show();
      this.emit(adv.ENUM.EVENTS.played);
    }
  }
});