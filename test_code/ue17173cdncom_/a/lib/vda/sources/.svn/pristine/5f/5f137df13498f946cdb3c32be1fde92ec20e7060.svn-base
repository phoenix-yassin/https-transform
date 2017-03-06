adv.AdBase.extend('Ad17173FullVerCorner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var opt = this.options,
        horCfg = opt.horizontal,
        verCfg = opt.vertical;
    this.htmlHor = adv.flash.embed({
      source: horCfg.source,
      width: horCfg.width,
      height: horCfg.height
    });
    this.htmlVer = adv.flash.embed({
      source: verCfg.source,
      width: verCfg.width,
      height: verCfg.height
    });
  	this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var opt = this.options,
        el = $('.' + opt.advid);
    el.eq(0).text('').append(this.htmlHor).show();
    el.eq(1).text('').append(this.htmlVer);
    this.emit(adv.ENUM.EVENTS.played);
  }
});