(function(){
  adv.AdBase.extend('AdNewsKeyword', {
  init: function (options) {
  
    this.base(options);
    this.bottomBanner = $('#AdBottomBanner');
    this.conBanner = $('#mod_article');
    this.bottomActive = 0;
    this.conActive = 0;
    this.title = $('h1').text();
    this.emit(adv.ENUM.EVENTS.inited);
  },
  showHtml: function(src, width, height,link) {
    if (src.indexOf('.swf') >= 0) {
       return '<div style="text-align:center"><embed type="application/x-shockwave-flash" width="'+width+'" height="'+height+'" bgcolor="#ffffff" quality="high" wmode="opaque" src="' + src + '" /></div>';
      } else {
       return  '<div style="text-align:center"><a href="' + link + '" target="_blank" style="display:block; text-align:center" ><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a></div>';
      }
  },
  setup: function () {
    this.base();
    var self = this;

    $.each(this.options, function(index, val) {
      if (index === "bottoms") {
        $.each(val, function(i, v) {
          for (var k = 0; k < v.keyword.length; k++) {
            if (self.title.indexOf(v.keyword[k]) >= 0) {
              self.bottomActive = 1;
              if(v.src.length <= 0) {
                self.bottomBannerHtml ='';
                return ;
              }
              self.bottomBannerHtml = self.showHtml(v.src, v.width, v.height, v.link);
            }
          }
        });
      }
      if (index === "banner") {
        $.each(val, function(i, v) {
          for (var j = 0; j < v.keyword.length; j++) {
            if (self.title.indexOf(v.keyword[j]) >= 0) {
              self.conActive = 1;
              self.conBannerHtml = self.showHtml(v.src, v.width, v.height, v.link);
            }
          }
        });
      }
    });
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    if (this.bottomActive === 1) {
      this.bottomBanner.html(this.bottomBannerHtml);
    }
    if (this.conActive === 1) {
      this.conBanner.prepend(this.conBannerHtml);
      this.conBanner.find('a').css({'margin-bottom':'10px'});
    }
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
 
});


})()