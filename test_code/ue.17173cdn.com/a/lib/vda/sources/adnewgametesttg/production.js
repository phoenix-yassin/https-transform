


(function(){
  adv.AdBase.extend('AdNewgameTestTg', {
  init: function (options) {
    this.base(options);
    this.container =  $('.adsystem-mark').filter('[data-ad-type="adNewgameTestTg"]');
    $('.week').css({"height":'573px'} );
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    this.base();
    this.html= [];
    this.html.push('<div class="hd"><span class="xq">',this.options.day,'</span>',
            '<span class="tit"><a href="',this.options.url1,'" target="_blank" class="c-tx2">',this.options.gameName,'</a></span>',
            '<span class="tg">\u63a8\u5e7f</span>',
            '<span class="ico-arrow"></span>',
          '</div>',
                  '<div class="bd">',
            '<div class="info">',
              '<p class="mb10">',this.options.testInfo,'</p>',
              '<p>',this.options.gameInfo,'</p>',
            '</div>',
            '<div class="clearfix">',
              '<div class="pic">');
                        if(this.options.source.indexOf('.swf') <0) {
              this.html.push('<a href="',this.options.imgLink,'" target="_blank">',
                                           '<img src="',this.options.source,'" width="',this.options.imgWidth,'" height="',this.options.imgHeight,'" alt="">',
                                          '</a>');
                        } else {
                          this.html.push('<embed type="application/x-shockwave-flash" width="'+this.options.imgWidth+'" height="'+this.options.imgHeight+'" bgcolor="#ffffff" quality="high" wmode="opaque" src="' + this.options.source + '" />');
                          
                        }

            this.html.push( '</div>',
                                  '<div class="link">',
                                      '<a href="',this.options.url1,'" target="_blank" class="btn">\u8fdb\u5165\u5b98\u7f51</a>',
                                      '<a href="',this.options.url2,'" target="_blank" class="btn">\u6ce8\u518c\u5e10\u53f7</a>',
                                      '<a href="',this.options.url3,'" target="_blank" class="btn">\u7279\u6743\u793c\u5305</a>',
                                  '</div>',
                              '</div>',
                          '</div>');

    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
     this.container.html(this.html.join(''));
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});
  
})();