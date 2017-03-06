adv.AdBase.extend('AdYeyouGlobalNavTextLinkMark', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
 
  setup: function () {
    this.base();
    var self = this;
    var opt = this.options;
   var keywords =[];
   var linkContainer = $(opt.advid);
   for (var k = 0; k <linkContainer.length; k++){
     keywords.push(linkContainer.eq(k).text());
   }

  for(var i = 0 ; i<opt.ads.length; i++) {
    for(var j = 0; j<keywords.length; j++) {
      if(opt.ads[i].keyword == keywords[j]) {
          linkContainer.eq(j).css({
            color: opt.ads[i].color
          });

         linkContainer.eq(j).attr({
            href: opt.ads[i].link
          })
      }

    }

  }
   
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});