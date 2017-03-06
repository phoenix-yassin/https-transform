adv.AdBase.extend('AdFlashFinalCommon', {
  init: function(options) {
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
  setup: function() {
    this.base();
    var self = this;
    self.firstTextHtml = '';
    self.secondTextHtml = '';
     var opt = this.options;
    if(opt.src) {
      this.html = self.showHtml(opt.src, opt.width, opt.height, opt.link)
    }

    if(opt.text) {
      this.html1  = '<a href="' + opt.link + '" target="_blank" class="flashfinaltextshow" style="padding:0 3px" data-index='+opt.index+'><font color="'+opt.color+'">' + opt.text + '</font></a>'
    }


    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    this.base();
    var self = this;

     if(this.options.text ){
        if($('.' + this.options.advid).find('.flashfinaltextshow').length > 0  ) {
          if(this.options.index > $('.' + this.options.advid).find('.flashfinaltextshow').data('index')) {
            $('.' + this.options.advid).append(this.html1).show();
          } else {
            $('.' + this.options.advid).prepend(this.html1).show();
          }
        } else {
          $('.' + this.options.advid).text('').append(this.html1).show();
        }
      }
        
    if(this.options.src){
      $('.' + this.options.advid).text('').append(this.html).show();
      $('.' + this.options.advid).css({width: self.options.width, height: self.options.height})
    }


  
   
    this.emit(adv.ENUM.EVENTS.played);
  }
});
