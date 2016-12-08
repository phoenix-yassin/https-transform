(function(){
adv.AdBase.extend('AdNewsMandwow', {
  init: function(options) {
    this.base(options);
    this.iframe = $('#AdvIframe');
    this.iframe.parent('div').addClass('adsystem-mark');
    this.iframe.parent('div').attr({
      'data-ad-type': 'AdNewsMandwow'
    });
    this.matter = $('#matter');
    this.active = 0;
    this.active1 = 0;
    this.title = $('h1').text();
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var self = this;
    this.container = $('.adsystem-mark').filter('[data-ad-type="AdNewsMandwow"]');
    this.container.css({
      'text-align': 'center'
    });
    $.each(this.options, function(index, val) {
      if (index === "bottoms") {
        $.each(val, function(i, v) {
          for (var i = 0; i < v.keyword.length; i++) {
            if (self.title.indexOf(v.keyword[i]) >= 0) {
              self.active = 1;
              if(v.src.length <= 0) {
                 self.html ='';
                 return ;
              }
              if (v.src.indexOf('.swf') > 0) {
                self.html = '<embed type="application/x-shockwave-flash" width="960" height="60" bgcolor="#ffffff" quality="high" wmode="opaque" src="' + v.src + '" />';
              } else {
                self.html = '<a href="' + v.link + '" target="_blank" ><img width="960" height="60"  src="' + v.src + '" /></a>';
              }
            }
          }
        });
      }
      if (index === "banner") {
        $.each(val, function(i, v) {
          for (var j = 0; j < v.keyword.length; j++) {
            if (self.title.indexOf(v.keyword[j]) >= 0) {
              self.active1 = 1;
              if (v.src.indexOf('.swf') > 0) {
                self.banner = '<div class="adsystem-mark" data-ad-type="AdNewsConBanner" style="text-align:center;"><embed type="application/x-shockwave-flash" width="557" height="60" bgcolor="#ffffff" quality="high" wmode="opaque" src="' + v.src + '"></embed></div>';
              } else {
                self.banner = '<div class="adsystem-mark" data-ad-type="AdNewsConBanner"><a href="' + v.link + '" target="_blank" style="text-align:center; display:block"><img width="557" height="60" src="' + v.src + '"/></a></div>';
              }
            }
          }
        });
      }
    });
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    if (this.active === 1) {
      this.iframe.remove();
      this.container.html(this.html);
    }
    if (this.active1 === 1) {
      $('#matter').prepend(this.banner);
    }
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function() {
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});
})()