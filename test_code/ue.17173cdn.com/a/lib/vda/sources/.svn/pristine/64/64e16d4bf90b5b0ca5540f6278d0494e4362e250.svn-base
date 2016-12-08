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
        b = this.options.topWidth ? this.options.topWidth : 980,
        c = this.options.topHeight ? this.options.topHeight : 60;
      var d = this.options.closeButton;
      if (d && d.img) {
        var e = d.top ? d.top : 6,
          f = d.right ? d.right : 0;
        a.push('  <div id="' + this.buttonId + '" style="position: absolute; z-index: 100; top: ' + e + "px; right: " + f + 'px; cursor: pointer;">'),
        a.push('  <img src="' + d.img + '">'), a.push("  </div>");
      }
      return a.push("</div>"), a.join("");
    },
    TopBackgroundAdv.prototype.play = function() {
      var a = this.getParam("hidebg");
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
          $('.wrap').css({
            'border': 'none'
          });
          $(window).unbind("resize.bgad");
        });
        var //e=d.offset().top,
          f = this.options.bgColor ? this.options.bgColor : "#fff";
        //$(document.body).css("background",f+" url("+this.options.bgSrc+") no-repeat 50% "+e+"px"),
        $(document.body).css("background", f + " url(" + this.options.bgSrc + ") no-repeat 50% 45px"),
        this.options.bgBodyClickable && $(function() {
          c.bgBodyGem()
        })
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
        c = $('<a class="topBackgroundAdv_bgbody" href="' + this.options.bgBodyLink + '" target="_blank"></a>');
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
      c.add(d).appendTo(document.body),
      $(window).bind("resize.bgad", function() {
        b = ($(window).width() - a.options.topWidth) / 2 - 350,
        c.css("margin-left", b),
        d.css("margin-left", b + a.options.topWidth + 350);
      })
    };
    function  getCookie(name) {
            var strCookie = document.cookie;
            var arrCookie = strCookie.split("; ");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if (arr[0] == name) {
                    return arr[1]
                }
            }
            return ""
      };

    adv.AdBase.extend('AdNewgameTop', {
      init: function(options) {
        this.base(options);
        if($('.sysw-con').length > 0 || $('.money-qiyu').length > 0) {
          return ;
        }
        var self = this;
        var cur = location.pathname.match(/\d+/g)[0],
          keyArr = [];
        $.each(this.options, function(index, val) {
          index != 'type' && index != 'id' && keyArr.push(index);
          if (index === cur) {
            self._topBackgroundAdv = new TopBackgroundAdv(val);
          }
        });
        this.patt1 =new RegExp('(game-[a-zA-z]+|album-list)-(' + keyArr.join('|') + ')');
        this.emit(adv.ENUM.EVENTS.inited);
      },
      setup: function() {
        this.shouldPlay = false;
        if (this.patt1.test(window.location.pathname) &&  getCookie("random").length <= 0 &&  getCookie("toprightfloatad").length <= 0 ) {
          this.shouldPlay = true;
        } 
        this.emit(adv.ENUM.EVENTS.setuped);

      },
      play: function() {
         if(this.shouldPlay) {
            this._topBackgroundAdv.play();
          }
        this.emit(adv.ENUM.EVENTS.played);
      },
      stop: function() {
        this.emit(adv.ENUM.EVENTS.stoped);
      },
      dispose: function() {
      }
    });

  })();