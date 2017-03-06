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
    adv.$('.'+self.options.advid).css({
      padding: '0' ,
      'width': self.options.width,
      'height': self.options.height
    });

    // if(self.options.advid == 'addownloadfinalbanner1') {
    //   adv.$('head').append('<style>.addownloadfinalbanner1{   }</style>')
    //   adv.$('.addownloadfinalbanner1').css({
    //     'margin': '0',
    //     float:'right'
        
    //   });
    // }

    if(self.options.advid == 'addownloadfinalbanner3') {
       adv.$('.' + self.options.advid).css({
        'float': 'right',
        'margin': '0',
        'margin-left':503,
        'position':'absolute'
      });

    }

  


 
    this.emit(adv.ENUM.EVENTS.played);
  }
});

})(jQuery)
