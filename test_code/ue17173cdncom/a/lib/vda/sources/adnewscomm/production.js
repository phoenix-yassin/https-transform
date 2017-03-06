adv.AdBase.extend('AdNewsComm', {
  init: function (options) {
    this.base(options);
    this.firstBanner = $('#AdFirstBanner');
    this.bottomBanner = $('#AdBottomBanner');
    this.rightButton = $('#AdRightButton');
    this.textLink = $('#AdTextLink');
    this.emit(adv.ENUM.EVENTS.inited);
  },
  showHtml: function(src, width, height,link) {
    if (src.indexOf('.swf') >= 0) {
       return '<embed type="application/x-shockwave-flash" width="'+width+'" height="'+height+'"  quality="high" wmode="opaque" src="' + src + '" />';
      } else {
       return  '<a href="' + link + '" target="_blank" ><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>';
      }

  },
  setup: function () {
    this.base();
    var self = this;
  
    $.each(this.options, function(index, val) {
      // 第一通栏
        if( index == 'AdFirstBanner' ) {
            self.firstBanner.css({'width': val.width, 'margin': '0 auto'});
           self.firstBannerHtml = self.showHtml(val.src, val.width, val.height, val.link);
        }
      // 底部通栏
       if(index == 'AdBottomBanner') {
          self.bottomBannerHtml =  self.showHtml(val.src, val.width, val.height, val.link);
        }
        // 新闻中心文章页右通发按钮2
        if(index == 'AdRightButton') {
            self.bottomBannerHtml = self.showHtml(val.src, val.width, val.height, val.link);
        }
        if(index == 'AdTextLink') {
          self.textLinkHtml = '<a href="'+val.link1+'" target="_blank" style="color:'+val.text1Color+'">'+val.text1+'</a><a href="'+val.link2+'" target="_blank" style="color:'+val.text2Color+'">'+val.text2+'</a>';
        }
      });
    
    this.emit(adv.ENUM.EVENTS.setuped);

  },
  play: function () {
    this.base();
    var self = this;
  $.each(this.options, function(index, val) {
      if( index == 'AdFirstBanner' ) {
         self.firstBanner.html(self.firstBannerHtml);
      }
      if(index == 'AdBottomBanner') {
         self.bottomBanner.html(self.bottomBannerHtml);
      }

      if(index == 'AdRightButton') {
          self.rightButton.html(self.bottomBannerHtml);
      }
      if(index == 'AdTextLink') {
        self.textLink.html(self.textLinkHtml);
       }

    });
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  },
  dispose: function () {

  }
});