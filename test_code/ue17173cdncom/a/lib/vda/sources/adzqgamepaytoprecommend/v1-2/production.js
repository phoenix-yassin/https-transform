

(function(){

  adv.AdBase.extend('AdZqGamePayTopRecommend', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    var me = this;



  this.css = '<style type="text/css" media="screen">\
    .AdZqGamePayTopRecommend{ position: absolute; top:'+me.data.top+'px; right:'+me.data.right+'px; width:200px;}\
      #tg_hao_zqtop a:link,#tg_hao_zqtop a:visited,#tg_hao_zqtop a:hover,#tg_hao_zqtop a:active{ text-decoration: none;}\
    #tg_hao_zqtop .tg-hao-zqtop-gift,#tg_hao_zqtop .tg-hao-zqtop-dl{ display: block; width:144px; height: 44px; margin:-15px -10px 0 -10px; white-space:nowrap;  padding:20px 20px 10px 70px; background: url(//ue.17173cdn.com/a/module/hao/2016/img/tg-hao-zqtop.png) no-repeat; box-sizing:content-box;overflow:hidden;}\
    #tg_hao_zqtop .tg-hao-zqtop-tit{ display: block; font:normal 16px/20px "Microsoft Yahei"; overflow:hidden}\
    #tg_hao_zqtop .tg-hao-zqtop-txt{ font:normal 12px/14px "Simsun"; overflow:hidden ; display:block}\
    #tg_hao_zqtop .tg-hao-zqtop-txt b{ color:#e90202; font-weight: bold;}\
    #tg_hao_zqtop .tg-hao-zqtop-gift{ color:#7d2700;}\
    #tg_hao_zqtop .tg-hao-zqtop-gift:hover{ background-position: 0 -72px;}\
    #tg_hao_zqtop .tg-hao-zqtop-dl{ color:#294200; background-position: 0 -144px;}\
    #tg_hao_zqtop .tg-hao-zqtop-dl:hover{ background-position: 0 -216px;}\
  </style>';


    this.emit(adv.ENUM.EVENTS.setuped);

    },
  isRamdom: function() {
    return parseInt(2*Math.random());

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
  showButton:function(url,url1) {
    var  me = this;
     me.html = '<div class="AdZqGamePayTopRecommend" id="tg_hao_zqtop">';
      $.getScript(url, function(){
                  $.each(DATASTORE["hao.giftInfo"], function(index, val) {
                    me.html += '<a href="'+( me.data.prizeLink? me.data.prizeLink : val.gift_url)+'" target="_blank" class="tg-hao-zqtop-gift">\
                      <span class="tg-hao-zqtop-tit">'+(me.data.prizeTitle ? me.data.prizeTitle: val.gift_name)+'</span>\
                      <span class="tg-hao-zqtop-txt" '+(me.data.prizeSmallTitle ? 'style="color:'+me.data.color+'"':'')+'> '+(me.data.prizeSmallTitle ? me.data.prizeSmallTitle : '<b>'+val.send_count+'</b>\u4eba\u5df2\u9886\u53d6')+'</span>\
                    </a>';
                  });


                  $.getScript(url1, function() {
                      $.each(DATASTORE["game.downnum"], function(index, val) {
                         me.html += '<a href="'+(me.data.downloadLink ? me.data.downloadLink : val.url)+'" target="_blank" class="tg-hao-zqtop-dl">\
                          <span class="tg-hao-zqtop-tit">'+(me.data.downloadTitle? me.data.downloadTitle :'\u6700\u65b0\u5ba2\u6237\u7aef\u4e0b\u8f7d')+'</span>\
                          <span class="tg-hao-zqtop-txt" '+(me.data.downloadSmallTitle ? 'style="color:'+me.data.color+'"':'')+'>'+(me.data.downloadSmallTitle ? me.data.downloadSmallTitle :'<b>'+val.downnum+'</b>\u4eba\u5df2\u4e0b\u8f7d')+'</span>\
                        </a>';
                      })

                         me.html += '</div>'

                $('head').append(me.css)
                if($('.header-in').length ) {
                  $('.header-in').prepend(me.html);

                } else if($('.header-c1').length) {

                   $('.header-c1').prepend(me.html);
                } else {
                    $('.header').prepend(me.html);
                    $('.header').css({position:'relative'})

                }

                $('.tg-hao-zqtop-gift').click(function() {
                  window._jc_ping = window._jc_ping || [];
                  _jc_ping.push([
                    '_trackBlockClick',
                     me.data.adskey,
                    window.location.href
                 ]);
                });


                 $('.tg-hao-zqtop-dl').click(function() {
                  window._jc_ping = window._jc_ping || [];
                  _jc_ping.push([
                    '_trackBlockClick',
                     me.data.adskey1,
                    window.location.href
                 ]);
                });

         })



    });

            this.emit(adv.ENUM.EVENTS.played);

  },
   play: function() {
      var me = this;
      var gameCode = me.data.gamecode;
      if(me.data.prizeId) {
        var url ="//d1.17173.itc.cn/hao/giftinfo/js/"+me.data.prizeId+".js"
      } else {
        var url = "//d1.17173.itc.cn/hao/giftlist/js/"+gameCode+".js";
      }

     var  url1 = '//d1.17173.itc.cn/download/game/js/'+gameCode+'.js';



      if(me.data.ignoreFeatureSwitch) {
        me.showButton(url, url1);

      } else {

          if(!me.getCookie('randomNum9')  ) {
            me.setCookie('randomNum9', me.isRamdom(), 365)
          }

          if( ( me.getCookie('randomNum9') && me.getCookie('randomNum9') == 1 ) || (!me.getCookie('randomNum9') && me.isRamdom() == 1  ) ) {
            me.showButton(url, url1);
          }
      }



    }
  });



})();
