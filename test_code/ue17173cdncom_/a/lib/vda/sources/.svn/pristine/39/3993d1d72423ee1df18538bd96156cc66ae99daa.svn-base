(function() {
    function TopBackgroundAdv(a) {
      this.options = a;
      this.buttonId = "topBackgroundAdv_btn" + 1 * new Date();
      this.wrapId = "topBackgroundAdv_wrap" + 1 * new Date();
    }
    TopBackgroundAdv.prototype.getParam = function(a) {
        var b = location.href, c = b.substring(b.indexOf("?") + 1, b.length).split("&"), d = {};
        for (i = 0; j = c[i]; i++)
            d[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        var e = d[a.toLowerCase()];
        return "undefined" == typeof e ? "" : e
    }, TopBackgroundAdv.prototype.template = function() {
        var a = [], b = this.options.topWidth ? this.options.topWidth : 980, c = this.options.topHeight ? this.options.topHeight : 60;
        a.push('<div id="' + this.wrapId + '" class="top-background-adv" style="width: ' + b + "px; height: " + c + 'px; margin: 0px auto; position: relative;">'), a.push('  <a href="' + this.options.url + '" target="_blank">'), a.push('    <img src="' + this.options.topSrc + '" width="' + b + '" height="' + c + '">'), a.push("  </a>");
        var d = this.options.closeButton;
        if (d && d.img) {
            var e = d.top ? d.top : 6, f = d.right ? d.right : 0;
            a.push('  <div class="setlink-close" id="' + this.buttonId + '" style="position: absolute; z-index: 100; top: ' + e + "px; right: " + f + 'px; cursor: pointer;">'), a.push('  <img src="' + d.img + '" class="closeimg">'), a.push("  </div>")
        }
        return a.push("</div>"), a.join("")
    }, TopBackgroundAdv.prototype.play = function() {
        var a = this.getParam("hidebg");
        if (!a) {
            $('.'+this.options.advid).after(this.template());
            var b = $(document.body).css("background") || "", c = this, d = $("#" + c.wrapId);
            $("#" + c.buttonId).click(function() {
                $("#" + c.wrapId).remove(), $(".topBackgroundAdv_bgbody").remove(), $(document.body).css({background: b,"overflow-x": "auto"}), $(window).unbind("resize.bgad")
            });
            var e = d.offset().top, f = this.options.bgColor ? this.options.bgColor : "#fff";
            $(document.body).css("background", f + " url(" + this.options.bgSrc + ") no-repeat 50% " + e + "px"), this.options.bgBodyClickable && $(function() {
                c.bgBodyGem()
            })
      			adv.util.sendIpa($('#'+this.wrapId),'9dd20d99211588a0fb77af02dd51093d',true);
        }
    }, TopBackgroundAdv.prototype.bgBodyGem = function() {
        var a = this, b = ($(window).width() - this.options.topWidth) / 2 - 330, c = $('<a class="topBackgroundAdv_bgbody" href="' + this.options.bgBadyLink + '" target="_blank"></a>');
        c.css({position: "absolute",top: 32,left: 0,"margin-left": b,display: "block",width: 330,height: this.options.bgBadyHeight});
        var d = c.clone();
        d.css({"margin-left": b + this.options.topWidth + 330}), $(document.body).css({"overflow-x": "hidden"}), c.add(d).appendTo(document.body), $(window).bind("resize.bgad", function() {
            b = ($(window).width() - a.options.topWidth) / 2 - 330, c.css("margin-left", b), d.css("margin-left", b + a.options.topWidth + 330)
        })
        adv.util.sendIpa(c,'9dd20d99211588a0fb77af02dd51093d',false);
      	adv.util.sendIpa(d,'9dd20d99211588a0fb77af02dd51093d',false);
    };
  
  adv.AdBase.extend('AdYeyouTopBackground', {
    init: function (options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function () {
      this.base();      
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    showAdMark:function(){
      $('.top-background-adv .setlink-close img').attr('src',this.options.closeButton.adMarkImg);
    },

    play: function () {
      this.base();
      new TopBackgroundAdv(this.options).play();
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();