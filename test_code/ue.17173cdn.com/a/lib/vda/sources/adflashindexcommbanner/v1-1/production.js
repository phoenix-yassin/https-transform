adv.AdBase.extend('AdFlashIndexCommBanner', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  showHtml: function(src, width, height,link) {
  if (src.indexOf('.swf') >= 0) {
     return '<embed type="application/x-shockwave-flash" width="'+width+'" height="'+height+'"  quality="high" wmode="opaque" src="' + src + '" />';
    } else {
     return  '<a href="' + link + '" target="_blank" ><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>';
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
        $('.' + this.options.advid).css({width: self.options.width, height: self.options.height})
      }
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  },
  dispose: function () {

  }
});