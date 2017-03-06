(function(){
  adv.AdBase.extend('AdNewsRightVideo', {
  init: function (options) {
    this.base(options);
    this.AdNewsRightVideo =  $('#AdNewsRightVideo');
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
       return  $('<a href="' + link + '" target="_blank" ><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>');
      }
  },
  setup: function () {
    this.base();
    var self   =  this;
    self.RightVideoHtml = self.showHtml(this.options.src, this.options.width, this.options.height, this.options.link);
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    this.AdNewsRightVideo.html(this.RightVideoHtml);
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});
  
})();