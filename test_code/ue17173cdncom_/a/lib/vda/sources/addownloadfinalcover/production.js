(function(jquery){
  adv.AdBase.extend('AdDownloadFinalCover', {
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
    self.times = 8;
    var opts = this.options;
    adv.$('.' + self.options.advid).css("position",'relative'); 
    adv.$('.' + self.options.advid).css("width",960);
    adv.$('.' + self.options.advid).css("height", 580);
    adv.$('.' + self.options.advid).css( "margin",'0 auto');

    self.html = this.showHtml(opts.src, opts.width, opts.height, opts.link);
    
    self.html1 =  '<a href="javascript:;" class="js-adcoverclose" style="position:absolute; width:25px; height:25px; right:0; bottom:0; z-index:10; background:url(about:blank);"></a>';
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  djs: function() {
    var self = this;
    setInterval(function(){
        if(self.times > 0) {
          self.times -- ;
      } else {
         adv.$('.' + self.options.advid).hide();
      }
    },1000)
  },
  play: function() {
    this.base();
    var self = this;
    adv.$('.' + self.options.advid).append(self.html1).show();
    adv.$('.' + self.options.advid).append(self.html);
    adv.$('.'+self.options.advid).find('.js-adcoverclose').on( 'click', function() {
        adv.$('.' + self.options.advid).hide();
    });
   

    self.djs();


    this.emit(adv.ENUM.EVENTS.played);
  }
});

})(jQuery)
