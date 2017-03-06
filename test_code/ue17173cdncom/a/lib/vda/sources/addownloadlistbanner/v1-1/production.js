(function(jquery){
  adv.AdBase.extend('AdDownloadListBanner', {
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
     return  '<a href="' + link + '" target="_blank" class="addownloadlistbannerconfict" ><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>';
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

    adv.$('.' + self.options.advid).append(self.html).show();
    adv.$('.' + self.options.advid).css({
      margin:'0 auto',
      width: self.options.width,
      height: self.options.height

     })

  

    // if(adv.$('.'+self.options.advid).find('.addownloadlistbannerconfict').length >=2) {
      
    //   // adv.$('.addownloadlistbannerconfict').eq(1).css({
    //   //   'margin-top': 10
    //   // });


    // }

 
    this.emit(adv.ENUM.EVENTS.played);
  }
});

})(jQuery)
