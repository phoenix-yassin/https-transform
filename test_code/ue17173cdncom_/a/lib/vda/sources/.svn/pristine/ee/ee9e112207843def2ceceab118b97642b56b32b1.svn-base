(function(jquery){
  adv.AdBase.extend('AdDownloadFinalKeyword', {
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
     var opts = this.options.datas,
     keywordtit= jquery('h1').text();


    var opt;
    while(opts.length){
      opt = opts.shift();
      for(var i = 0; i<opt.keywords.length ; i++) {
          if(keywordtit.indexOf(opt.keywords[i]) >=0 ) {
            self.html = self.showHtml(opt.src, opt.width, opt.height, opt.link);
            adv.$('.' + self.options.advid).append(self.html).show();
          }
        }
    }

     // adv.util.forEach(opt, function(val ,index ) {
     //  console.log(index,opt)
        
     // });

    



    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    this.base();
    var self = this;
    adv.$('.' + this.options.advid).css({'margin-top':'10px'})
 
    // if(this.options.src){
    //   jquery('.' + this.options.advid).text('').append(this.html).show();
    // }


  
   
    this.emit(adv.ENUM.EVENTS.played);
  }
});

})(jQuery)
