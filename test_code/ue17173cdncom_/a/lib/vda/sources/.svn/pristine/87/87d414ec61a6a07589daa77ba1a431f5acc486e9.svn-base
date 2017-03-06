adv.AdBase.extend('AdYeyouGlobalNavTextLinkMark', {
  init: function (options) {
    this.base(options);
    if($(this.options.advid)[0]){
    	this.emit(adv.ENUM.EVENTS.inited);
    }
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
		var showLog = true;
    for(var i = 0 ; i<opt.ads.length; i++) {
      for(var j = 0; j<keywords.length; j++) {
        if(opt.ads[i].keyword == keywords[j]) {
            linkContainer.eq(j).css({
              color: opt.ads[i].color
            }).attr({
              href: opt.ads[i].link
            });
						adv.util.sendIpa(linkContainer.eq(j),'7f58c4210bc20559997891e499d88672',showLog);
            showLog = false;
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