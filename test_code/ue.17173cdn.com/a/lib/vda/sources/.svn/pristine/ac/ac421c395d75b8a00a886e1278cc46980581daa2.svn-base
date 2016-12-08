(function(){
  var bihua = function(n,fn) {
      var i = {
          createObject: function(n, t, i) {
              return $('<object width="' + t + '" height="' + i + '" ><param name="movie" value="' + n + '"><param name="wmode" value="transparent"><embed src="' + n + '"  wmode="transparent" quality="high"  type="application/x-shockwave-flash" width="' + t + '" height="' + i + '"><\/object>')
          }
      }
        , u = 180
        , r = 500
        , t = 1190
        , f = {
          init: function() {
              this.renderMain();
              this.bindEvent();
              this.animateTimer = null
          },
          bindEvent: function() {
              var n = this;
              $(window).scroll(function() {
                  if (!n.isrecycle) {
                      var u = $(window).scrollTop()
                        , i = 470 + u;
                      i = i > t ? t : i;
                      clearTimeout(this.animateTimer);
                      this.animateTimer = setTimeout(function() {
                          n.wrap.stop().animate({
                              height: i
                          }, r)
                      }, 30)
                  }
              }).resize(function() {
                  n.wrap.css("left", n.calcPosition())
              });
              this.recycleBtn.click(function() {
                  n.recycle()
              });
              this.closeBtn.click(function() {
                  n.close()
              });
              this.replayBtn.click(function() {
                  n.rePlay()
              })
          },
          rePlay: function() {
              this.isrecycle = !1;
              clearTimeout(this.animateTimer);
              this.wrap.stop().animate({
                  height: 470
              }, r);
              this.reclyContent.hide()
          },
          close: function() {
              this.wrap.remove()
          },
          recycle: function() {
              this.isrecycle = !0;
              clearTimeout(this.animateTimer);
              this.wrap.stop().animate({
                  height: 142
              }, r);
              this.reclyContent.show()
          },
          renderMain: function() {
              this.wrap = $('<div style="position:absolute;z-index:1020;top:41px;left:' + this.calcPosition() + 'px;width:180px;height:470px;overflow:hidden;"><\/div>');
              this.content = i.createObject(n.bgSource, 180, t);
              this.contentLink = $('<a hidefocus="true" href="' + n.link + '" style="position:absolute;background:#000;opacity:0;filter:alpha(opacity=0);top:0;left:0;width:180px;height:' + t + 'px;" target="_blank"><\/a>');
              this.recycleBtn = $('<a href="javascript://" style="position:absolute;z-index:1030;bottom:0;right:0;width:45px;height:18px;"  class="setlink-close"><img class="bihua-close" style="width:45px;height:18px" src="' + n.closeImg + '"/><\/a>');
              this.floatContent = $('<div style="position:absolute;z-index:1030;bottom:0;left:0;width:180px;height:142px;"><\/div>');
              ~n.floatSource.indexOf("swf") ? this.floatContent.append(i.createObject(n.floatSource, 180, 142)) : this.floatContent.append('<img src="' + n.floatSource + '" style="width:180px;height:142px"/>');
              this.floatLink = $('<a hidefocus="true" href="' + n.link + '" style="position:absolute;background:#000;opacity:0;filter:alpha(opacity=0);top:0;left:0;width:180px;height:142px;" target="_blank"><\/a>');
              this.floatContent.append(this.floatLink);
              this.floatContent.append(this.recycleBtn);
              this.reclyContent = $('<div style="display:none;position:absolute;z-index:1040;bottom:0;left:0;width:180px;height:142px;"><\/div>');
              ~n.recycleSource.indexOf("swf") ? this.reclyContent.append(i.createObject(n.recycleSource, 180, 142)) : this.reclyContent.append('<img src="' + n.recycleSource + '" style="width:180px;height:142px"/>');
              this.reclyLink = $('<a hidefocus="true" href="' + n.link + '" style="position:absolute;background:#000;opacity:0;filter:alpha(opacity=0);top:0;left:0;width:180px;height:142px;" target="_blank"><\/a>');
              this.reclyContent.append(this.reclyLink);
              this.closeBtn = $('<a href="javascript://" style="position:absolute;z-index:1030;top:0;left:0;width:45px;height:18px;" class="setlink-close"><img style="width:45px;height:18px" class="bihua-close" src="' + n.closeImg + '"/><\/a>');
              this.replayBtn = $('<a href="javascript://" style="position:absolute;z-index:1030;top:0;right:0;width:45px;height:18px;" class="setlink-close"><img style="width:45px;height:18px" src="' + n.replayImg + '"/><\/a>');
              this.reclyContent.append(this.closeBtn);
              this.reclyContent.append(this.replayBtn);
              this.wrap.append(this.content);
              this.wrap.append(this.contentLink);
              this.wrap.append(this.floatContent);
              this.wrap.append(this.reclyContent);
              $(document.body).append(this.wrap);
              var me = this;
              window.jQuery && window.jQuery(function() {
                  _jc_ping && _jc_ping.push(['_trackBlock', me.wrap, 'bf16ce064f9cfc0827548c4332534978']);
              });
          },
          renderrecycleSource: function() {},
          calcPosition: function() {
              return Math.floor(($(window).width() - 1100) / 2 - u)
          }
      };
      AD = new ADM("ADMBIHUA",2);
      AddSchedule(AD);
      window._ADMBIHUA_3 = null ;
      window.ADMBIHUA_main = function(t) {
          _ADMBIHUA_3 = t;
          f.init();
        	fn && fn();
          setTimeout(function() {
              _ADMBIHUA_3.s = 2
          }, n.queuetime)
      }
  };

  adv.AdBase.extend('Ad17173BiHua', {
    init: function(options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function(data) {
      this.data = data;
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function() {
      var me = this;
      var opt = this.options;
      bihua(this.data,function(){
        me.emit(adv.ENUM.EVENTS.played);
      });      
    },
    showAdMark:function(){
      $('.bihua-close').attr('src',this.data.adMarkImg).css('width',67).parent('a').css('width',67);
    }
  });

})();