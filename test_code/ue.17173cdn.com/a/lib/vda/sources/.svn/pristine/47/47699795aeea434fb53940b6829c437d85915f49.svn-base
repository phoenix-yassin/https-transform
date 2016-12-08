(function(jquery){
  adv.AdBase.extend('AdDownloadKeyword', {
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
     return  '<a href="' + link + '" target="_blank" ><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>';
    }
  },
  setup: function() {
    this.base();
    var self = this;
    self.firstTextHtml = '';
    self.secondTextHtml = '';
     var opts = this.options.datas,
     keywordtit= jquery('h1').text();


    var opt;
    while(opts.length){
      opt = opts.shift();

        if(opt.keywords.length &&  keywordtit.indexOf(opt.keywords) >=0 ) {
          self.html = self.showHtml(opt.src, opt.width, opt.height, opt.link);
          adv.$('.' + self.options.advid).append(self.html).show();
        }
    }


    
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    this.base();
    var self = this;
    adv.$('.' + this.options.advid).css({'margin-top':'10px'});

    this.emit(adv.ENUM.EVENTS.played);
  }
});

})(jQuery)
