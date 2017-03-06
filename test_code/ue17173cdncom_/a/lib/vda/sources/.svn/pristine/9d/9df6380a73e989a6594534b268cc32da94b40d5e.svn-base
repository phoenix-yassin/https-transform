adv.AdBase.extend('AdNewsFinalIconRecom', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
 
  setup: function () {
    this.base();
    var self = this;
    var opt = this.options;
    this.html = [];
    this.html.push('<div class="gb-final-comm-case gb-final-pn-star-col">',
          '<div class="gb-final-comm-case-hd">',
            '<h2 class="gb-final-tit">',opt.ads[0].title,'</h2>',
          '</div>',
          '<div class="gb-final-comm-case-bd">',
            '<div class="gb-final-carousel-con">',
              '<ul class="gb-final-list2 gb-final-comm-plist gb-final-comm-plist-ex4" >');
      for(var i = 0 ; i<opt.ads.length; i++) {
         this.html.push('<li class="gb-final-list2-item">',
                  '<a class="gb-final-list2-con" href="',opt.ads[i].link,'" target="_blank"><span class="gb-final-list2-c1" style="width:',opt.ads[i].width,'px;  height:',opt.ads[i].height,'px"><img class="gb-final-avatar" alt="" src="',opt.ads[i].source,'" width="',opt.ads[i].width,'" height="',opt.ads[i].height,'"> </span><span class="gb-final-list2-c2"><span class="gb-final-txt">',opt.ads[i].title1,'</span></span> </a></li>');

      }
              
    this.html.push('</ul>',
                  '</div>',
                '</div>',
              '</div>');


    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
     var self = this;
     if(this.options.advid){
        $('.' + this.options.advid).prepend(this.html.join(''));
      }
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});