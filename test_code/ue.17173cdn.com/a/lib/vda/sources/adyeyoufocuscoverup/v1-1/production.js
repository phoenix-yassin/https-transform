var root = this;
adv.AdBase.extend('AdYeyouFocusCoverUp', {
  _timer : function (func, time, autostart) {
    return this.set = function (func, time, autostart) {
      if (this.init = !0, "object" == typeof func) {
        var paramList = ["autostart", "time"];
        for (var arg in paramList)void 0 != func[paramList[arg]] && eval(paramList[arg] + " = func[paramList[arg]]");
        func = func.action
      }
      return"function" == typeof func && (this.action = func), isNaN(time) || (this.intervalTime = time), autostart && !this.isActive && (this.isActive = !0, this.setTimer()), this
    }, this.once = function (time) {
      var timer = this;
      return isNaN(time) && (time = 0), window.setTimeout(function () {
        timer.action()
      }, time), this
    }, this.play = function (reset) {
      return this.isActive || (reset ? this.setTimer() : this.setTimer(this.remaining), this.isActive = !0), this
    }, this.pause = function () {
      return this.isActive && (this.isActive = !1, this.remaining -= new Date - this.last, this.clearTimer()), this
    }, this.stop = function () {
      return this.isActive = !1, this.remaining = this.intervalTime, this.clearTimer(), this
    }, this.toggle = function (reset) {
      return this.isActive ? this.pause() : reset ? this.play(!0) : this.play(), this
    }, this.reset = function () {
      return this.isActive = !1, this.play(!0), this
    }, this.clearTimer = function () {
      window.clearTimeout(this.timeoutObject)
    }, this.setTimer = function (time) {
      var timer = this;
      "function" == typeof this.action && (isNaN(time) && (time = this.intervalTime), this.remaining = time, this.last = new Date, this.clearTimer(), this.timeoutObject = window.setTimeout(function () {
        timer.go()
      }, time))
    }, this.go = function () {
      this.isActive && (this.action(), this.setTimer())
    }, this.init ? new this._timer(func, time, autostart) : (this.set(func, time, autostart), this)
  },
  _gemFocusSide: function() {
    var html;
    var left = this.el.offset().left - 230 - 30,
        top = this.el.offset().top || 0;
    html = $('<a target="_blank" style="position:absolute; left:'+left+'px; top:'+top+'px; z-index:999; width:230px; height:260px; display:block; overflow:hidden;" class="component-focus-cover-side" href="'+ this._coverConfig.link +'" ><img src="'+ this._coverConfig.focus.side +'" style="width:230px;height:260px;" /></a>');

    return html;
  },
  _initSideElement: function() {
    this._coverSideElement = this._gemFocusSide();
    $('.wrapper').before(this._coverSideElement);

  },
  _initElement: function() {
    this._initSideElement();
//    this._gemTabPanel();
    this._initCover();
    return this;
  },
  //在大眼睛里添加一个配置项
  _gemTabPanel: function() {
      var focusHtml;
      focusHtml = [];
      this._coverConfig.title = this._coverConfig.title || '';
      this._coverConfig.desc = this._coverConfig.desc || '';
      focusHtml.push('<li>');
      focusHtml.push('  <a href="' + this._coverConfig.link + '" class="img-target" data-ui-data="link"><img data-src="' + this._coverConfig.img + '" data-ui-data="img" /></a>');
      focusHtml.push('  <img data-src="' + this._coverConfig.thumb + '" alt="" data-ui-data="thumb" />');
      focusHtml.push('   <div class="label">');
      focusHtml.push('      <h2 class="title" data-ui-data="title">' + this._coverConfig.title + "</h2>");
      focusHtml.push('        <h3 class="desc" data-ui-data="desc">' + this._coverConfig.desc + "</h3>");
      focusHtml.push('  </div>');
      focusHtml.push('</li>');
      //console.log(1,$('[data-ui-mark="data"]').html(),focusHtml.join(''));
      $('[data-ui-mark="data"]').append(focusHtml.join(''));
      return focusHtml;

  },
  _regEvent : function() {
    this._regFocusSide();
    return this;
  },
  _resetPosition: function() {
    var self = this;
    var left = self.el.offset().left - 230 - 30,
        top = this.el.offset().top || 0;
    self._coverSideElement.css({left: left, top: top});
  },
  _regFocusSide : function() {
    var self = this;
    this._coverSideElement.bind('mouseenter', function(e) {
      return self._showCover(e);
    });

    $(window).resize(function(){
      self._resetPosition();
    });
    $(window).scroll( function() {
      self._resetPosition();
    });
    return this;
  },
  _initCover : function() {
    return this._$(".component-focus-cover-cover").size() ? void 0 : this._coverElement = this._gemCover();
  },
  _showCover : function(e) {

    var t, _ref, _ref1, _ref2, self = this;

    null != (_ref = $(".focus-num").data("slideshow")) && _ref.stop();
    null != (_ref1 = $(".focus-num").data("tabs")) && _ref1.click(0);
    this._initCover();
    if(this._coverVisible) {
      return this;
    } else {
      this._coverVisible = !0;
      this._coverElement.get(0).style.visibility = "visible";
      null != (_ref2 = this.timer) && _ref2.stop();
      t = e ? 8e3 : 5e3;
      self.timer = self._timer(function() {
        return self._hideCover(1);
      }, t, !0);
    }
    return this;

  },
  _hideCover : function(e) {
    var _ref, _ref1;
//    null != (_ref = $(".focus-num").data("slideshow")) && _ref.play();
//    null != (_ref1 = this.timer) && _ref1.stop();
    this._coverVisible = !1;
    this._coverElement.get(0).style.visibility = "hidden" ;
    return this;
  },
  _hideCoverTrigger : function() {
    var _ref;
    return null != (_ref = this.timer) ? _ref.play() : void 0
  },
  _gemCover : function() {
    var cfg, cover, embed, self = this;
    cover = $('<div class="component-focus-cover-cover"><embed /></div>');
    cover.css({
      position: "relative",
      width: 560,
      height: 300,
      top: -300,
      overflow: "hidden",
      "z-index": 1001
    });
    embed = cover.children("embed");
    cfg = {
      type: "application/x-shockwave-flash",
      src: self.adConfig.swf_loader,
      width: 560,
      height: 300,
      bgcolor: "#ffffff",
      quality: "high",
      wmode: "opaque",
      flashvars: "flashurl=" + self._coverConfig.focus.cover + "&linkurl=" + self._coverConfig.link
    };
    $.each(cfg, function(k, v) {
      return embed.attr(k, v)
    });
    root.focus_ad_DoFSCommand = function(command) {
      "colose" === command ? self._hideCover() : void 0
    };

    cover.appendTo(this.el);
    return cover;
  },
  _$ : function(s) {
    return this.el.find(s);
  },

  /*
  初始化参数的操作请放在这个方法里执行,广告实例化时会自动调用此方法
  options即为configs.js里的配置,也就是投放时的代码
  */
  init: function (options) {
    /*
    调用父类的方法,初始化参数和状态自动转化,此方法必须调用
    执行完成后,可以通过this.options访问options
    */
    this.base(options);

    /*自定义的初始化逻辑*/
    this.adConfig = {
        adProperty: this.options.adProperty,
        swf_loader: this.options.swf_loader,
        autoplay: this.options.autoplay
    };

    var self = this;
    this.el = $('.' +this.options.advid);
    this._coverConfig = this.adConfig.adProperty;

    /*
    初始化操作完成后,手动触发此事件,以通知广告中心自动去调用setup
    如果初始化操作是异步的,请在异步完成后再触发此事件,以保证在setup之前所有初始化操作都已完成.
    如果不想让广告继续运行,则不要触发此事件即可
    */
    this.emit(adv.ENUM.EVENTS.inited);
  },
  //预加载素材,dom元素预拼接等准备工作请在此方法执行,inited触发后会自动调用此方法,请勿手动调用此方法
  setup: function () {
    this.base();

    this._initElement();

    /*
    通知广告中心setup完毕,可以立即播放(play)了
    如果不触发此事件,则广告不会自动播放
    */
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  //播放广告,setuped事件触发后,广告中心会自动调用此方法,也可以响应用户事件里调用此方法
  play: function () {
    var self = this;
    this.base();

    this._regEvent();
    this.adConfig.autoplay && setTimeout(function() {
      return self._showCover();
    }, 1e3);


      /*
      通知广告中心广告已播放
      */
    this.emit(adv.ENUM.EVENTS.played);
  }
});