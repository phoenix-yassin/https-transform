(function() {
  function TopBackgroundAdv(n) {
      this.options = n;
      this.buttonId = "topBackgroundAdv_btn" + new Date() * 1;
      this.wrapId = "topBackgroundAdv_wrap" + new Date() * 1;
  }
  TopBackgroundAdv.prototype.getParam = function(n) {
      var t = location.href, f = t.substring(t.indexOf("?") + 1, t.length).split("&"), u = {}, r;
      for (i = 0; j = f[i]; i++)
          u[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
      return r = u[n.toLowerCase()],
      typeof r == "undefined" ? "" : r;
  };
  TopBackgroundAdv.prototype.template = function() {
      var n = [], i = this.options.topWidth ? this.options.topWidth : 980, r = this.options.topHeight ? this.options.topHeight : 60, t, u, f;
      return n.push('<div id="' + this.wrapId + '" class="top-background-adv" style="width: ' + i + "px; height: " + r + 'px; margin: 0px auto; position: relative;">'),
      n.push('  <a href="' + this.options.url + '" target="_blank">'),
      n.push('    <img src="' + this.options.topSrc + '" width="' + i + '" height="' + r + '">'),
      n.push("  <\/a>"),
      t = this.options.closeButton,
      t && t.img && (u = t.top ? t.top : 6,
      f = t.right ? t.right : 0,
      n.push('  <div id="' + this.buttonId + '" style="position: absolute; z-index: 100; top: ' + u + "px; right: " + f + 'px; cursor: pointer;">'),
      n.push('  <img src="' + t.img + '">'),
      n.push("  <\/div>")),
      n.push("<\/div>"),
      n.join("")
  };
  TopBackgroundAdv.prototype.play = function() {
      var u = this.getParam("hidebg"), n, t, i, r;
      u || $('.topbar').after(this.template()),
      n = this,
      t = $("#" + n.wrapId),
      $("#" + n.buttonId).click(function() {
          t.remove(),
          $(document.body).css("background", "")
      }),
      i = t.offset().top,
      r = this.options.bgColor ? this.options.bgColor : "#fff";
      if(!ue.isIPad){
      	$(document.body).css("background", r + " url(" + this.options.bgSrc + ") no-repeat center " + i + "px");
      }
      $(function() {
          window._jc_ping && _jc_ping.push(['_trackBlock', $('.top-background-adv a'), 'd06b9a063d9a9d94f02f7148cc0c466c']);
      });
  };

  adv.AdBase.extend('Ad17173Background', {
    init: function(options) {
      this.base(options);
      var self = this;
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function(data) {
      this.data = data;
			this._topBackgroundAdv = new TopBackgroundAdv(data);
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function() {
			window._jc_ping && _jc_ping.push([
          '_trackBlock',
          $('.top-background-adv a'),
          'd06b9a063d9a9d94f02f7148cc0c466c'
      ]);
    	$('.festival-box').hide();
      this._topBackgroundAdv.play();
      this.emit(adv.ENUM.EVENTS.played);
    },
    showAdMark:function(){
      $('#' + this._topBackgroundAdv.buttonId + ' img').attr('src',this.data.closeButton.adMarkImg)
    },
    stop: function() {
      this.emit(adv.ENUM.EVENTS.stoped);
    }
  });
})();