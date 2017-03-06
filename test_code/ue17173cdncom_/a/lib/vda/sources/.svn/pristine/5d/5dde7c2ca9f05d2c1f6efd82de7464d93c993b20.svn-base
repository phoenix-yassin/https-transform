adv.AdBase.extend('AdYeyouTestTableBanner', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  showHtml: function(src, width, height,link) {
    if(src.indexOf('.swf') != -1) {
      return  '<div style="position:relative"><span class="cate">开测推荐</span><embed type="application/x-shockwave-flash" width="'+width+'" height="'+height+'"  quality="high" wmode="opaque" src="' + src + '" /></div>';
    } else {
        return  '<a href="' + link + '" target="_blank" ><span class="cate">开测推荐</span><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>';
    }
  },
  setup: function () {
    this.base();
    var self = this;


      self.html = self.showHtml(this.options.src, this.options.width, this.options.height, this.options.link)


    
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
   
    $('.' + this.options.advid).html(this.html);
    $('.' + this.options.advid).css({'zoom':1})

    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
  
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});