adv.AdBase.extend('Ad17173Corner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var opt = this.options,
        horCfg = opt.horizontal,
        verCfg = opt.vertical;
    if(~horCfg.source.indexOf('.swf')){
      this.htmlHor = adv.flash.embed({
        source: horCfg.source,
        width: horCfg.width,
        height: horCfg.height
      });      
    }
    else{
      this.htmlHor = $('<a target="_blank" href="' + horCfg.link + '"><img width="' + horCfg.width + '" height="' + horCfg.height + '" border="0" src="' + horCfg.source + '"></a>');
    }
    if(~verCfg.source.indexOf('.swf')){
      this.htmlVer = adv.flash.embed({
        source: verCfg.source,
        width: verCfg.width,
        height: verCfg.height
      });
    }
    else{
      this.htmlVer = $('<a target="_blank" href="' + verCfg.link + '"><img width="' + verCfg.width + '" height="' + verCfg.height + '" border="0" src="' + verCfg.source + '"></a>');
    }
  	this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var opt = this.options,
        el = $('.' + opt.advid);
    el.find('.ad-h-l').text('').append(this.htmlHor);
    el.find('.ad-h-r').text('').append(this.htmlVer);
    this.emit(adv.ENUM.EVENTS.played);
  }
});