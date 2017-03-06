(function(jquery){
  adv.AdBase.extend('AdDownloadFinalBanner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  showHtml: function(src, width, height,link) {
    if (src.indexOf('.swf') >= 0) {
      return  adv.flash.embed({
        source: src,
        width: width,
        height: height
      });
    } else {
     return  '<a href="' + link + '" target="_blank"><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>';
    }
  },
  setup: function() {
    this.base();
    var self = this;

     var opts = this.options;
     self.html = this.showHtml(opts.src, opts.width, opts.height, opts.link);


    
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    this.base();
    var self = this;

    adv.$('.' + self.options.advid).html(self.html).show();

  


 
    this.emit(adv.ENUM.EVENTS.played);
  }
});

})(jQuery)
