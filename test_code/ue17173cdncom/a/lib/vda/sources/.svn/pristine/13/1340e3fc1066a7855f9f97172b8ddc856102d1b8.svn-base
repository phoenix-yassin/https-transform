(function() {
  adv.AdBase.extend('AdZqToolbarGiftTg', {
    init: function (options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function (data) {
      var self = this, gameCode;
      self.base();
      // data = data || self.options;
      // self.data = data;
      adv.util.poll(function() {
        if (window.ued && !!ued.gameCode) {
          gameCode = ued.gameCode;
        }
        return !!gameCode;
      },function() {
        var isTarget = false;
        // fix an error with razor when key is not defined
        self.data = {
          gameCode: gameCode,
          spText: '',
          spURL: '',
          spPvCode: '',
          giftURL: '',
          giftText: '',
          giftPvCode: ''
        };
        for (var i = 0; i < data.items.length; i++) {
          var btnCfg = data.items[i];
          if (btnCfg.gameCode == gameCode) {
            isTarget = true;
            if (btnCfg.index == 0) {
              self.data.spText = btnCfg.text;
              self.data.spURL = btnCfg.link;
              self.data.spPvCode = btnCfg.pvCode;
            } else {
              self.data.giftText = btnCfg.text;
              self.data.giftURL = btnCfg.link;
              self.data.giftPvCode = btnCfg.pvCode;
            }
          }
        }
        if (isTarget) {
          self.data.advid = self.options.advid;
          //dom
          var tmpl = function() {/*@preserve
            <div class="zq-tb-box-channel1">
              @if(spURL){
                <a href="@spURL" target="_blank" class="zq-tb-bt1"><i class="zq-tb-bt1-gw"></i>@spText</a>
              }
              @if(giftURL){
              <a href="@giftURL" target="_blank" class="zq-tb-bt1 zq-tb-bt1-ex"><i class="zq-tb-bt1-lb"></i>@giftText</a>
              }
            </div>
          */};
          self.data.html = adv.razor(tmpl, self.data);
          self.emit(adv.ENUM.EVENTS.setuped);
        }
      }, function() {},10000, 500);
    },
    play: function () {
      var self = this;
      self.base();
      var opt = self.options;
      ued.zqToolbarReady = ued.zqToolbarReady || function(func) {
        (ued._zqToolbarReadyArgs = ued._zqToolbarReadyArgs || []).push(func);
      }
      ued.zqToolbarReady(function(scope) {
        scope.trigger('showGiftTg', {id: opt.advid, btnsHtml: self.data.html});
        self.emit(adv.ENUM.EVENTS.played);
      });
      if (!!self.data.spPvCode) {
        adv.adCenter.sendPv(self.data.spPvCode);
      }
      if (!!self.data.giftPvCode) {
        adv.adCenter.sendPv(self.data.giftPvCode);
      } 
    }
  });
})();