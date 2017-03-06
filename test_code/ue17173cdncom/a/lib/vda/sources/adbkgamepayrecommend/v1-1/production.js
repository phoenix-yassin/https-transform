
(function(){
  adv.AdBase.extend('AdBkGamePayRecommend', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
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

  setup: function(data) {
    this.data = data;
    this.css = '<style type="text/css" media="screen">\
      #gb_hao1, #gb_hao1 div{ margin:0 auto; padding:0;}\
      #gb_hao1 :link, #gb_hao1 :visited{text-decoration: none;}\
      #gb_hao1{ text-align: center; line-height: 1.5; font-family: "Microsoft Yahei";}\
      #gb_hao1 a{ display:block; height:48px; padding:7px 5px 0; margin-bottom:10px; cursor:pointer}\
      #gb_hao1 a span{ display:block; _width:100%; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}\
      #gb_hao1 .gb-hao-tit{ font-size:16px; color:#fff;}\
      #gb_hao1 .gb-hao-txt{ font-size:12px; color:#fff88a;}\
      #gb_hao1 .gb-hao1-gift{ background:#ff6d55;}\
      #gb_hao1 .gb-hao1-gift:hover{ background:#ff826e;}\
      #gb_hao1 .gb-hao1-dl{ background:#63c245;}\
      #gb_hao1 .gb-hao1-dl-ex .gb-hao-tit{ padding-top:9px;}\
      #gb_hao1 .gb-hao1-dl:hover{ background:#6ecd51;}\
      #gb_hao1 .gb-hao1-offi{ background:#57adfd; padding-top:0; height:55px; line-height: 55px; margin:0;}\
      #gb_hao1 .gb-hao1-offi:hover{ background:#6eb9ff;}\
      #gb_hao1.gb-hao1-ex{ overflow:hidden; *zoom:1;} \
      #gb_hao1.gb-hao1-ex a{ width:206px; float:left; margin:0 6px 0 0;}\
      #gb_hao1.gb-hao1-ex .gb-hao1-offi{ margin:0;}\
    </style>';
    var me = this;
    if($('#classtitle1 a').text() == this.data.gameName || $('.crumbs-box a:eq(4)').text().indexOf(this.data.gameName) != -1 ){
        var gameCode = me.data.gamecode, prizeId = me.data.prizeId;
        if(me.data.prizeId) {
          var prizeUrl ="//d1.17173.itc.cn/hao/giftinfo/js/"+prizeId+".js"
        } else {
          var prizeUrl = "//d1.17173.itc.cn/hao/giftlist/js/"+gameCode+".js";
        }

        var downloadUrl = '//d1.17173.itc.cn/download/game/js/'+gameCode+'.js';
        var gwUrl = '//d1.17173.itc.cn/newgame/info/js/'+gameCode+'.js';
        me.html= '<div class="AdBkGamePayTopRecommend"><div id="gb_hao1" class="gb-hao1">';
        $.getScript(prizeUrl, function() {
          if(me.data.prizeId) {
            $.each(DATASTORE["hao.giftInfo"], function(index, val) {
                  me.html += '<a href="'+val.gift_url+'" target="_blank" class="gb-hao1-gift">\
                  <span class="gb-hao-tit">'+val.gift_name+'</span>\
                    <span class="gb-hao-txt">'+val.send_count+'人已领取</span>\
                   </a>';
            });
          }  else {
            $.each(DATASTORE["hao.giftlist"], function(index, val) {

              if(val.list) {
                 me.html += '<a href="'+val.list[val.list.length-1].gift_url+'" target="_blank" class="gb-hao1-gift">\
                  <span class="gb-hao-tit">'+val.list[val.list.length-1].gift_name+'</span>\
                    <span class="gb-hao-txt">'+val.list[val.list.length-1].send_count+'人已领取'+'</span>\
                   </a>';
              } else {
                  me.html += '<a href="'+val.url+'" target="_blank" class="gb-hao1-gift">\
                  <span class="gb-hao-tit">预订激活码、礼包</span>\
                  <span class="gb-hao-txt">'+val.sche_count+'人预订</span>\
                   </a>';

              }
            });

          }

         $.getScript(downloadUrl, function() {
            $.each(DATASTORE["game.downnum"], function(index, val) {
              me.html+='<a href="'+val.url+'" target="_blank" class="gb-hao1-dl '+(val.downnum > 0 ?'':'gb-hao1-dl-ex')+ '">\
            <span class="gb-hao-tit ">客户端下载</span>\
            '+(val.downnum>0?'<span class="gb-hao-txt">'+val.downnum+'人已下载</span>': '')+'\
          </a>';


            })

             $.getScript(gwUrl, function() {
                $.each(DATASTORE["game-detail.info"], function(index, val) {
                  me.html +='<a href="'+val.sp_info.game_official_url+'" target="_blank" class="gb-hao1-offi">\
                          <span class="gb-hao-tit">游戏官网</span>\
                        </a>';
                })

                me.html+='</div></div>';
                me.emit(adv.ENUM.EVENTS.setuped);

              })
          })

    });

  }
    },

    showButton: function() {
      var me = this;
       if($('#classtitle1 a').text() == this.data.gameName ){
          $('head').append(me.css)
          $('.side-r1').prepend(me.html);

          $('.gb-hao1-gift').click(function(){
              window._jc_ping = window._jc_ping || [];
                _jc_ping.push([
                  '_trackBlockClick',
                   me.data.adskey1,
                  window.location.href
               ]);
          })


           $('.gb-hao1-dl').click(function(){
             window._jc_ping = window._jc_ping || [];
                _jc_ping.push([
                  '_trackBlockClick',
                   me.data.adskey2,
                  window.location.href
               ]);
          })

          $('.gb-hao1-offi').click(function(){
             window._jc_ping = window._jc_ping || [];
                _jc_ping.push([
                  '_trackBlockClick',
                   me.data.adskey3,
                  window.location.href
               ]);
          })
           this.emit(adv.ENUM.EVENTS.played);


        }


        if($('.crumbs-box a:eq(4)').text().indexOf(this.data.gameName) != -1 )  {
            $('head').append(me.css)
            $('.side-r1').prepend(me.html);
            $('.gb-hao1-gift').click(function(){
              window._jc_ping = window._jc_ping || [];
                _jc_ping.push([
                  '_trackBlockClick',
                   me.data.adskey4,
                  window.location.href
               ]);
          })


           $('.gb-hao1-dl').click(function(){
             window._jc_ping = window._jc_ping || [];
                _jc_ping.push([
                  '_trackBlockClick',
                   me.data.adskey5,
                  window.location.href
               ]);
          })

          $('.gb-hao1-offi').click(function(){
             window._jc_ping = window._jc_ping || [];
                _jc_ping.push([
                  '_trackBlockClick',
                   me.data.adskey6,
                  window.location.href
               ]);
          })

          this.emit(adv.ENUM.EVENTS.played);

        }

    },

    play: function() {
      var me = this;
       if(me.data.ignoreFeatureSwitch) {
          me.showButton()
        }  else {
           if(!me.getCookie('randomNum8')  ) {
              me.setCookie('randomNum8', me.isRamdom(), 365)
            }
            if( ( me.getCookie('randomNum8') && me.getCookie('randomNum8') == 1 ) || (!me.getCookie('randomNum8') && me.isRamdom() == 1  )  ) {
                me.showButton()
            }
        }

    }
  });



})();

