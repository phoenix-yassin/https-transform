adv.AdBase.extend('AdNewsFinalBanner', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  showHtml: function(src, width, height,link) {
    if (src.indexOf('.swf') >= 0) {
        return adv.flash.embed({      
          source: src,
          width: width,
          height: height
        });
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

    $('.' + this.options.advid).css({
      'text-align': 'center'
    });
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
     var self = this;
     if(this.options.src){
        $('.' + this.options.advid).html(this.html);
      }
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});