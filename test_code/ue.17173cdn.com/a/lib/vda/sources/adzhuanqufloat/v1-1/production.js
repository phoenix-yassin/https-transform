!function() {
    function a(a) {
        this.offsetHeight = 0,
        this.enableClose = !0,
        this.option = a,
        this.option.closeBtn && !this.option.closeBtn.img && (this.option.closeBtn.img = "http://i3.17173.itc.cn/2013/www/2013/gg/guanbi.png")
    }
    var b = !!window.ActiveXObject
      , c = b && !window.XMLHttpRequest
      , d = function() {
        for (var a = navigator.userAgent, b = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"], c = !1, d = 0; d < b.length; d++)
            if (a.indexOf(b[d]) > -1) {
                c = !0;
                break
            }
        return c
    }();
    if (!d) {
        var e = function(a, b) {
            var d = $("#" + a);
            if (d.text(""),
            ~b.indexOf("swf"))
                d.css("background", "none"),
                d.css("filter", "none"),
                d.html('<object type="application/x-shockwave-flash" data="' + b + '" width="100%" height="100%"><param name="movie" value="' + b + '" /><param name="wmode" value="transparent" /></object>');
            else if (c)
                d.css({
                    cursor: "pointer",
                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=noscale, src='" + b + "')",
                    background: "none"
                });
            else {
                var e = "transparent url('" + b + "') no-repeat";
                d.css("background", e)
            }
        }
        ;
        a.prototype.execute = function() {
            if (!$(".mod-rbox")[0]) {
                var b = this;
                if (!window.$)
                    return void setTimeout(function() {
                        a.prototype.execute.call(b)
                    }, 200);
                c && (this.$window = $(window)),
                window.gamepopupInstance && (window.gamepopupInstance.bind("maxsized", function() {
                    b.maxsize()
                }),
                window.gamepopupInstance.bind("minimized", function() {
                    b.minimize()
                }));
                $(".ad-zhanneituiguang").hide();
                window.specialFloatAdInstance = b;
                var a = b.option;
                $(".adsystem-mark").filter('[data-ad-type="AdZhuanquFloat"]').html('<div id="specialFloatAd" style="z-index:1001;position: fixed;right: 0;top: 0;width:' + a.width + "px;height:" + a.height + 'px;padding:0;margin:0"><a id="specialFloatAdLink"  style="display:block;padding:0;margin:0;width:100%;height:100%;background:url(#);cursor:pointer;" hidefocus="true" href="' + a.url + '" target="_blank"><div id="specialFloatAdImg" style="padding:0;margin:0;width:' + a.width + "px;height:" + a.height + 'px;"></div></a></div>'),
                  b.container = $("#specialFloatAd"),
                  e("specialFloatAdImg", a.source),
                  c && b.container.css("position", "absolute"),
                  b.overLink = $('<a hidefocus="true" class="specialFloatCon" href="' + a.url + '" target="_blank" style="position:absolute;background:#000;opacity:0;filter:alpha(opacity=0);top:0;left:0;width:100%;height:100%"></a>'),
                  b.container.append(b.overLink),
                  b.resetPosition(),
                  a.closeBtn && b.enableClose && (b.closeBtn = $('<a style="display:block;z-index:1010;position:absolute;padding:0;margin:0;width:' + a.closeBtn.width + "px;height:" + a.closeBtn.height + "px;background:url(#);cursor:pointer;top:" + a.closeBtn.top + "px;right:" + a.closeBtn.right + 'px" hidefocus="true" href="javascript:;"></a>'),
                                                  b.closeBtnBg = $('<div id="specialFloatAdCloseBtnImg" style="padding:0;margin:0;width:100%;height:100%;"></div>'),
                                                  b.closeBtn.append(b.closeBtnBg),
                                                  b.container.append(b.closeBtn),
                                                  e("specialFloatAdCloseBtnImg", a.closeBtn.img),
                                                  b.closeBtn.click(function(a) {
                  return b.minimize(),
                    a.preventDefault(),
                    !1
                }));
            }
        }
        ,
        a.prototype.disableClose = function() {
            this.enableClose = !1,
            this.closeBtn && this.closeBtn.hide()
        }
        ,
        a.prototype.resetPosition = function() {
            this.container.css("top", 0);
            var a = this;
            c && (a.keepfixed(),
            setTimeout(function() {
                a.keepfixed()
            }, 300),
            a.$window.bind("scroll resize", function() {
                a.keepfixed()
            }))
        }
        ,
        a.prototype.keepfixed = function() {
            var a = this.$window.scrollTop();
            this.container.css({
                top: a
            })
        }
        ,
        a.prototype.minimize = function() {
            var a = this
              , b = a.option;
            a.overLink.hide(),
            this.container.animate({
                width: b.sWidth,
                height: b.sHeight
            }, 300),
            e("specialFloatAdImg", this.option.minisizedImg),
            this.closeBtn && this.closeBtn.hide(),
            a.container.find("#specialFloatAdImg").bind("click", function(b) {
                return a.maxsize(),
                b.preventDefault(),
                !1
            });
            a.container.find('em').hide();
        }
        ,
        a.prototype.maxsize = function() {
            var a = this
              , b = a.option;
            this.overLink.show(),
            this.container.animate({
                width: b.width,
                height: b.height
            }, 300),
            e("specialFloatAdImg", this.option.source),
            this.enableClose && this.closeBtn && this.closeBtn.show(),
            this.container.find("#specialFloatAdImg").unbind("click");
             a.container.find('em').show();
        }
        ;
        var a = a;
        adv.AdBase.extend("AdZhuanquFloat", {
            init: function(a) {
                this.base(a),
                this.options.type && this.emit(adv.ENUM.EVENTS.inited)
            },
            setup: function() {
                this.emit(adv.ENUM.EVENTS.setuped)
            },
            play: function() {
                var b = new a(this.options);
                b.execute(),
                $("body").delegate(".gb-newfix-close", "click", function() {
                    b.minimize()
                }),
                this.emit(adv.ENUM.EVENTS.played)
            },
            stop: function() {
                this.emit(adv.ENUM.EVENTS.stoped)
            },
            dispose: function() {}
        })
    }
}();
