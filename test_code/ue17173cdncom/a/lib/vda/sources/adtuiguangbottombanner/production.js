
(function($) {



function isMobile() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = false;
  for (var v = 0; v < Agents.length; v++) {
     if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }
  }
  return flag;
}

if( isMobile()) {
  return false;
}


  jQuery.extend( jQuery.easing, {
    easeout: function (x, t, b, c, d) {
      return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easein: function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
      return c/2*((t-=2)*t*t*t*t + 2) + b;
    }
  });
 jQuery('wrapper').hide()
  adv.AdBase.extend('AdTuiGuangBottomBanner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    var me = this;
    me.bodyWidth = $('body').width();

    me.minWidth = 1000;


    me.html = '<div class="gb-tg-b">\
          <b class="mask"></b>\
          <div class="gb-tg-b-con">\
            <a href="'+data.link+'" target="_blank">\
              <img src="'+data.source+'" width="960" height="150" alt="" class="tg-img-b" />\
             </a>\
          </div>\
            <a href="#" class="gb-tg-close"></a>\
        </div>\
        <div class="gb-tg-l">\
          <a href="#"  class="gb-tg-l-con" >\
            <img src="'+data.hsw+'" width="100" height="110" alt="" class="tg-img-l" />\
           </a>\
        </div>';

    this.css = '<style>.gb-tg-b{width: 100%; height: 130px; position: fixed;  left: 0; bottom: 0; z-index: 100;}' +
      '.gb-tg-b .mask{position: absolute; left: 0; bottom: 0; width: 100%; height:130px; background: #000; opacity: .8; filter:alpha(opacity:80); z-index: -1}' +
      '.gb-tg-b .gb-tg-b-con{position: absolute; left: 0; bottom: 0; text-align: center; width: 100%; z-index: 5;}' +
      '.gb-tg-b .gb-tg-b-con a{display:inline-block; *display:block; *height:150px; *width:960px;}' +
      '.gb-tg-b .tg-img-b{display: block; margin: 0 auto; border:none}' +
      '.gb-tg-b .gb-tg-close{width:30px; height: 30px; background:#000 url(//ue.17173cdn.com/a/module/zq/2016/tuiguang/img/ico-tg-close.gif) no-repeat center center; border: 1px solid #848484; border-radius: 50%;position: absolute; left: 50%; margin-left: 500px; top: 5px; z-index: 9}' +
      '.gb-tg-l{width:154px; z-index: 100; display:none; height: 120px; background: url(//ue.17173cdn.com/a/module/zq/2016/tuiguang/img/bg-tg.png) no-repeat; position:fixed; left: 0;  bottom: 0;}' +
      '.gb-tg-l .tg-img-l{display: block; border:none}' +
      '.gb-tg-l .gb-tg-l-con{display: block;}</style>';



    this.emit(adv.ENUM.EVENTS.setuped);

  },
  expand: function() {
    var me = this;
    if( (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7." && location.host=='download.17173.com' ) || (navigator.appName == "Microsoft Internet Explorer" &&
      navigator.appVersion.match(/8./i)=="8." && location.host=='download.17173.com' ) || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") ) {
        adv.$('.gb-tg-l').css({left: '-100%'})
        adv.$('.gb-tg-l').hide();
        adv.$('.gb-tg-b').show();
        adv.$('.gb-tg-b-con').show()
        adv.$('.gb-tg-b').css({ left: 0});
    }  else {
      $('.gb-tg-l').animate({
        left: '-100%'
      }, 300, function() {
        $('.gb-tg-b').show();
        $('.gb-tg-b-con').show();
         me.showall = 1;
        $('.gb-tg-b').animate({
          left: '0%'
        }, 800, 'easein')
      })

    }



  },
  collapse: function() {
    var me = this;

    if( (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7." && location.host=='download.17173.com' ) || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8." && location.host=='download.17173.com' ) ||
     (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") ) {
        adv.$('.gb-tg-l').show();
        adv.$('.gb-tg-l-con').show()

        adv.$('.gb-tg-b').css({ left: '-100%'});
        adv.$('.gb-tg-b').hide();
      if (me.bodyWidth >  me.minWidth) {
          adv.$('.gb-tg-l').css({ left: 0})
       } else {
          adv.$('.gb-tg-l').css({left: -110});
       }
    } else {
      $('.gb-tg-l').show();
      $('.gb-tg-l-con').show()
      $('.gb-tg-b').animate({
          left: '-100%'
        }, 800, 'easein', function() {
          $('.gb-tg-b').hide();
          if (me.bodyWidth >  me.minWidth) {
            $('.gb-tg-l').animate({
              left: '0%'
            }, 500)
          } else {
            $('.gb-tg-l').animate({
              left: '-110px'
            }, 500)
          }
      })

    }

  },
  setCookie: function(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
      ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
  },

  getCookie: function(c_name) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=")
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1
        c_end = document.cookie.indexOf(";", c_start)
        if (c_end == -1) c_end = document.cookie.length
        return unescape(document.cookie.substring(c_start, c_end))
      }
    }
    return ""
  },
  showHtml:function() {
    var me = this;
     adv.$('body').append(me.html);
     if(me.getCookie('gbtuiguangbanner4')) {

      adv.$('.gb-tg-b').hide();
      adv.$('.gb-tg-b').css({left: '-100%'})
      adv.$('.gb-tg-l').show();
      adv.$('.gb-tg-l-con').show()
      if (me.bodyWidth >  me.minWidth) {
        adv.$('.gb-tg-l').css({left: 0})

      }else {
        adv.$('.gb-tg-l').css({left: -110})
     }
    } else {
      adv.$('.gb-tg-l').css({'left':'-100%'})
      adv.$('.gb-tg-l').hide();
      me.setCookie('gbtuiguangbanner4', 1, 1);
    }

    if( (navigator.userAgent.indexOf("MSIE")>0 && navigator.userAgent.indexOf("MSIE 7.0")>0 && location.host=='download.17173.com' )  || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") ) {


    } else if((navigator.userAgent.indexOf("MSIE")>0 && navigator.userAgent.indexOf("MSIE 8.0")>0 && location.host=='download.17173.com' ) ){

       window.onresize = function(){
           me.bodyWidth = $('body').width();
            if(me.bodyWidth <= me.minWidth) {
               $('.gb-tg-l').css({left: -110})
            } else {
               $('.gb-tg-l').css({left: 0 })
            }
       }

     }else  {

       $(window).resize(function() {
       me.bodyWidth = $('body').width();
        if( !$('.gb-tg-b').is(':visible')) {
          if(me.bodyWidth <= me.minWidth) {
             $('.gb-tg-l').css({ left: -110})
          } else {
             $('.gb-tg-l').css({left: 0 })

          }
        }
      });
     }






  },
  play: function() {
    var me = this;
    $('head').append(me.css);
    var keyword = me.data.keyword;
    // 过滤
    // 下载站
    if(keyword!='0')  {
      if(location.host == 'download.17173.com' && me.data.gameCode == _gameCode) {
          var h1  =  $('h1').text();
          if(h1.indexOf(keyword)!= -1) {
            me.showHtml();
            me.emit(adv.ENUM.EVENTS.played);

          }
        }
        if(location.host == 'hao.17173.com'   && me.data.gameCode == window.fahaoDefaults.game_code) {
          var h2Title = $('h2.tit').text()
          if(h2Title.indexOf(keyword)!= -1) {
            me.showHtml();
            me.emit(adv.ENUM.EVENTS.played);
          }
        }
        if(location.host =='newgame.17173.com') {
          // $('.movieContainer').css({'z-index': 0})
            var h1Title1  =  $('h1.tit').text();
            if(h1Title1.indexOf(keyword)!= -1  && $('.game-last-main').length) {
              me.showHtml();
              me.emit(adv.ENUM.EVENTS.played);

            }

        }
        if(location.host == 'news.17173.com') {
          var h1Title = $('h1.gb-final-tit-article').text()
          if(h1Title.indexOf(keyword)!= -1) {
            me.showHtml();
            me.emit(adv.ENUM.EVENTS.played);
          }
        }

    }


    if( me.data.zqUrl!='0' && location.href.indexOf( me.data.zqUrl) != -1) {
      me.showHtml();
      me.emit(adv.ENUM.EVENTS.played);

    }



    adv.$('.gb-tg-close').on('click',function(){
       me.collapse();
      return false;
    })
    // $('.gb-tg-close').click(function() {
    //   me.collapse();
    //   return false;
    // })
     adv.$('.gb-tg-l-con').on('click',function(){
     me.expand();
      return false;
    })
    // $('.gb-tg-l-con').click(function() {
    //   me.expand();
    //   return false;
    // })


  }
});



})(jQuery)

