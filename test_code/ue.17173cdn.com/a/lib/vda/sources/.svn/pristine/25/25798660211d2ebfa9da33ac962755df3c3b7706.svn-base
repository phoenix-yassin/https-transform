(function() {
  adv.AdBase.extend('AdOtherScript', {
    init: function (options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function () {
      this.base();
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      var me = this;
      this.base();
      adv.adCenter.loadScript(adv.util.guid(),this.options.source,function(){
        adv.otherScriptLength--;
      	me.emit(adv.ENUM.EVENTS.played);
      });
    }
  });
})();