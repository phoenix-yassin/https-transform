

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
    .AdZqGamePayTopRecommend{ position: absolute; top:150px; right:20px; width:200px;}\
    #gb_hao, #gb_hao div{ margin:0 auto; padding:0;}\
    #gb_hao :link, #gb_hao :visited{text-decoration: none;}\
    #gb_hao{ width:200px; text-align: center; line-height: 1.5; font-family: "Microsoft Yahei"; padding:6px; border-radius:6px; background:rgba(0,0,0,.08);}\
    #gb_hao .gb-hao-in{ display:block; padding:10px 5px 0; height:48px; background:#fdcd00; border-bottom:3px solid #f5ad00; border-radius: 4px; box-shadow: 0 0 6px rgba(0,0,0,.3); cursor:pointer}\
    #gb_hao .gb-hao-in span{ display:block; _width:100%; white-space:nowrap; overflow:hidden; }\
    #gb_hao .gb-hao-tit{ font-size:16px; color:#b11900;}\
    #gb_hao .gb-hao-txt{ font-size:12px; color:#231815;}\
    #gb_hao .gb-hao-in:hover{ background: #ffd927; border-color:#f5ad00;}\
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
   play: function() {
      var me = this;
      var gameCode = me.data.gamecode;
      if(me.data.prizeId) {
        var url ="//

d1.17173.itc.cn/hao/giftinfo/js/"+me.data.prizeId+".js"
      } else {
        var url = "//

d1.17173.itc.cn/hao/giftlist/js/"+gameCode+".js";
      }



      if(!me.getCookie('randomNum8')  ) {
        me.setCookie('randomNum8', me.isRamdom(), me.data.expiryDate)
      }


      if( ( me.getCookie('randomNum8') && me.getCookie('randomNum8') == 1 ) || (!me.getCookie('randomNum8') && me.isRamdom() == 1  )  ) {

               $.getScript(url, function(){
                if(me.data.prizeId) {
                  $.each(DATASTORE["hao.giftInfo"], function(index, val) {

                    me.html = '<div class="AdZqGamePayTopRecommend">\
                          <div id="gb_hao" class="gb-hao">\
                          <a href="'+val.gift_url+'" target="_blank" class="gb-hao-in">\
                            <span class="gb-hao-tit">'+val.gift_name+'</span>\
                            <span class="gb-hao-txt">'+val.send_count+'人已领取</span>\
                          </a>\
                          <div>\
                        </div>';
                  });
                } else {
                  $.each(DATASTORE["hao.giftlist"], function(index, val) {
                    if(val.list) {
                        me.html = '<div class="AdZqGamePayTopRecommend">\
                          <div id="gb_hao" class="gb-hao">\
                          <a href="'+val.list[val.list.length-1].gift_url+'" target="_blank" class="gb-hao-in">\
                            <span class="gb-hao-tit">'+val.list[val.list.length-1].gift_name+'</span>\
                            <span class="gb-hao-txt">'+val.list[val.list.length-1].send_count+'人已领取</span>\
                          </a>\
                          <div>\
                        </div>';
                    }
                  });
                }

                $('head').append(me.css)
                $('.header-in').prepend(me.html);
                $('.header-in').css({'width':'100%'})


                $('.gb-hao-in').on('mousedown', function() {
                  window._jc_ping = window._jc_ping || [];
                  _jc_ping.push([
                    '_trackBlockClick',
                     me.data.adskey,
                    window.location.href
                 ]);
                });


                });

            this.emit(adv.ENUM.EVENTS.played);


      }


    }
  });



})();

