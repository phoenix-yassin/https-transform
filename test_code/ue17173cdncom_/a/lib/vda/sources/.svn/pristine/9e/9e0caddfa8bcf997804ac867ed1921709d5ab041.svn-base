
(function (adv) {
  'use strict';

  var defaultConfig = {
    randomPos: true,
    randomType: adv.ENUM.RANDOMS.firstTime
  };
  adv.DrBase.extend('DrLimitTimesAble', {
    init: function (options) {
      this.base(options);
      this.options = adv.merge({}, defaultConfig, options);
      this.ad = this.options.ad;
      this.cookieName = this.ad.type;
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function () {
      var me = this;
      var times = adv.cookie.getCookie(this.cookieName) || 0;
      if (times >= me.options.times) return;
      times++;
      adv.cookie.setCookie(this.cookieName, times, me.options.timeSpan);
      var base = this.base;
      adv.adCenter.loadSource(this.ad.type, function () {
        me.ad.instance = new adv[me.ad.type](me.ad);
        base.call(me);
        me.emit(adv.ENUM.EVENTS.setuped);
      });
    },
    play:function() {
      this.base();
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})(adv);