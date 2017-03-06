adv.AdBase.extend('AdNewgameFinalButton', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  showHtml: function(src, width, height,link) {
    if (src.indexOf('.swf') >= 0) {
        return '<embed type="application/x-shockwave-flash" width="'+width+'" height="'+height+'" bgcolor="#ffffff" quality="high" wmode="opaque" src="' + src + '" />';
    } else {
        return  '<a href="' + link + '" target="_blank" style="display:block"><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>';
      }
  },
  setup: function () {
    this.base();
    var self = this;
    var opt = this.options;
    if(opt.src) {
      this.html = self.showHtml(opt.src, opt.width, opt.height, opt.link)
    }
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
     var self = this;
     if(this.options.src){
        $('.' + this.options.advid).text('').append(this.html).show();
      }
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});