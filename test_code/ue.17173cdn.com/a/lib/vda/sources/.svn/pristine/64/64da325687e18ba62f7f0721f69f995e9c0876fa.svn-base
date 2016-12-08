(function(jquery){
  adv.AdBase.extend('AdDownloadFinalFloat', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },

  showHtml: function(src, width, height,link) {
    return '<a href="'+link+'" target="_blank"><img src="'+src+'" width="'+width+'" height="'+height+'" /></a><a href="javascript:;" class="addownloadfinalclose" style="position:absolute; right:0; bottom: 0; width:15px; height:15px"></a>';
  },
  setup: function() {
    this.base();
    var self = this;
    var opts = self.options;
    self.html =this.showHtml(opts.src, opts.width, opts.height, opts.link) ;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    this.base();
    var self = this;
    
    jquery('.' + self.options.advid).html(self.html);
    if(self.options.location == 'left') {
      jquery('.' + self.options.advid).css({
        left:0 ,
        position: 'fixed',
        top: self.options.top,
        width: self.options.width,
        height: self.options.height
      });
    } else {
       jquery('.' + self.options.advid).css({
        right:0 ,
        position: 'fixed',
         top: self.options.top,
        width: self.options.width,
        height: self.options.height
      });

    }
    jquery('.addownloadfinalclose').click(function(event) {
       jquery(this).parent('div').hide();
    });


    this.emit(adv.ENUM.EVENTS.played);
  }
});

})(jQuery)
