noShanwanAd=true;
window.noToprightFloatAd = true;
(function() {
    function TopBackgroundAdv(a) {
      this.options = a,
      this.buttonId = "topBackgroundAdv_btn" + 1 * new Date(),
      this.wrapId = "topBackgroundAdv_wrap" + 1 * new Date();
    }
    TopBackgroundAdv.prototype.getParam = function(a) {
      var b = location.href,
        c = b.substring(b.indexOf("?") + 1, b.length).split("&"),
        d = {};
      for (i = 0; j = c[i]; i++) {
        d[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
      }
      var e = d[a.toLowerCase()];
      return "undefined" == typeof e ? "" : e;
    },
    TopBackgroundAdv.prototype.template = function() {
      var a = [],
        b = this.options.topWidth ? this.options.topWidth : 1040,
        c = this.options.topHeight ? this.options.topHeight :120;
      var d = this.options.closeButton;
      if (d && d.img) {
        var e = d.top ? d.top : 6,
          f = d.right ? d.right : 0;
        a.push('  <div id="' + this.buttonId + '" style="position: absolute; z-index: 100; top: ' + e + "px; right: " + f + 'px; cursor: pointer;">'),
        a.push('  <img src="' + d.img + '">'), a.push("</div>");
      }
      return a.push("</div>"), a.join("");
    },
    TopBackgroundAdv.prototype.play = function() {
      setTimeout(function(){$('.gb-newfix-close').trigger('click');}, 400);
      $('.ad-zhanneituiguang').hide();
      var a = this.getParam("hidebg"), container = $('.' + this.options.advid1).text('');
      if (!a) {
        // document.write(this.template());
        var b = $(document.body).css("background") || "",
          c = this,
          d = $("#" + c.wrapId);
        $("#" + c.buttonId).click(function() {
          $(this).remove(),
          $(".topBackgroundAdv_bgbody").remove(),
          $(document.body).css({
            background: b,
            "overflow-x": "auto"
          }),
          $('.wrap').css({'border': 'none'});
          $(window).unbind("resize.bgad");
        });
        var //e=d.offset().top,
          f = this.options.bgColor ? this.options.bgColor : "#fff";
        //$(document.body).css("background",f+" url("+this.options.bgSrc+") no-repeat 50% "+e+"px"),
        $(document.body).css("background", f + " url(" + this.options.bgSrc + ") no-repeat 50% 45px"),
        this.options.bgBodyClickable && $(function() {
          c.bgBodyGem();
        });
        if(this.options.topSrc.indexOf('.swf') >= 0){
          container.html('<embed type="application/x-shockwave-flash" width="'+this.options.topWidth+'" height="'+this.options.topHeight+'"  quality="high" wmode="opaque" src="' + this.options.topSrc + '" />')
        } else {
          container.html('<a class="topbgad" href="'+this.options.url+'" target="_blank"><img src='+this.options.topSrc+' width="100%"  height='+this.options.topHeight+'></a>');

        }
        container.css({
          'text-align':'center',
          'width': 1042,
          'margin': '0 auto'
        });
      }
      $('.wrap').css({
        'border': '1px solid white',
        'border-top': 'none',
        'border-bottom': 'none'
      });
    },
    TopBackgroundAdv.prototype.bgBodyGem = function() {
      var a = this,
        b = ($(window).width() - this.options.topWidth) / 2 - 350,
        c = $('<a class="topBackgroundAdv_bgbody" href="' + this.options.url + '" target="_blank"></a>');
      c.css({
        position: "absolute",
        top: 45,
        left: 0,
        "margin-left": b,
        display: "block",
        width: 350,
        height: this.options.bgBodyHeight
      });
      var d = c.clone();
      d.css({
        "margin-left": b + this.options.topWidth + 350
      }),
      $(document.body).css({
        "overflow-x": "hidden"
      }),
      c.add(d).appendTo( $('.' + this.options.advid2)),
      $(window).bind("resize.bgad", function() {
        b = ($(window).width() - a.options.topWidth) / 2 - 350,
        c.css("margin-left", b),
        d.css("margin-left", b + a.options.topWidth + 350);
      });
    };
    function  getCookie(name) {
            var strCookie = document.cookie;
            var arrCookie = strCookie.split("; ");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if (arr[0] == name) {
                    return arr[1];
                }
            }
            return "";
      }

    adv.AdBase.extend('AdNewsFinalTopAndBg', {
      init: function(options) {
        this.base(options);
        var self = this;
        self._topBackgroundAdv = new TopBackgroundAdv(options);
        this.emit(adv.ENUM.EVENTS.inited);
      },
      setup: function() {

        this.emit(adv.ENUM.EVENTS.setuped);

      },
      play: function() {

        this._topBackgroundAdv.play();
        this.emit(adv.ENUM.EVENTS.played);
      },
      stop: function() {
        this.emit(adv.ENUM.EVENTS.stoped);
      }
     
    });

  })();