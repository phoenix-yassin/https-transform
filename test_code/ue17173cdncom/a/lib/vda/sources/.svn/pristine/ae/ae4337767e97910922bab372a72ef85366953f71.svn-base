adv.AdBase.extend('AdNewgameFinalExchanged', {
  init: function(options) {
    this.base(options);
    this.options = options;
    this.emit(adv.ENUM.EVENTS.inited);
  },

  buildHtml: function(gameData, data) {
    return  '<div class="fix-sameip">'+
              '<div class="fix-sameip-c1">'+
                '<div class="fix-sameip-c1-in">'+
                  '<i class="fix-sameip-close"></i>'+
                  '<h3 class="tit">'+gameData.game_name+'</h3>'+
                '<div class="logo-pic">'+
                  '<img src="'+gameData.logo_pic+'" width="84" height="84" alt="" />'+
                '</div>'+
                '<div class="btn-box">'+
                  '<a href="http://newgame.17173.com/game-info-'+gameData.game_code+'.html" target="_blank" class="btn-c1">进入专区</a>'+
                  '<a href="http://hao.17173.com/sche-info-'+gameData.game_code+'.html" target="_blank" class="btn-c2">礼包领取</a>'+
                '</div>'+
                '<a href="http://newgame.17173.com/game-info-'+data.gameCode+'.html" target="_blank"  class="btn-gload">游戏下载'+
                  '<span class="ewm">'+
                    '<img src="'+data.ewmLink+'" width="120" height="120" alt="" />'+
                  '</span>'+
                '</a>'+
                '<p class="intr">'+
                  '<a href="http://newgame.17173.com/game-info-'+data.gameCode+'.html" target="_blank">'+gameData.game_intro+'</a>'+
                '</p>'+
              '</div>'+
            '</div>'+
            '<div class="fix-sameip-c2">'+
              gameData.game_name+
            '</div>'+
          '</div>';
  },
  setup: function(data) {
    var self = this;
    this.data = data;
      $.ajax({
        url: 'http://newgame.internal.17173.com/api-gameDetailInfoJs-'+data.gameCode+'.html?callback=?',
        type: 'GET',
        dataType: 'jsonp',
        success:function(data1){
          if(data.pcGameCode == gameCode && data1.game_code) {
            $('.'+self.options.advid).html(self.buildHtml(data1, data));
          }
        }
      })
    
    
    this.css = '<style>#fixed_qr_code{display:none!important}'+
    '.fix-sameip-c1-in{padding:9px;border:1px solid #eee;border-radius:5px}'+
    '.fix-sameip .tit{margin-bottom:5px;text-align:center;font:700 16px/1.7 "Microsoft YaHei"}'+
    '.fix-sameip .logo-pic{margin:0 auto;margin-bottom:10px;padding:5px;width:85px;height:85px;border:1px solid #dcdcdc;border-radius:20px}'+
    '.fix-sameip .logo-pic img{border-radius:20px}'+
    '.fix-sameip-close{position:absolute;top:17px;right:-10px;z-index:10;width:25px;height:25px;background:url(http://ue1.17173cdn.com/a/newgame/index/2016/fix-sameip/img/fix-sameip-sp.png) no-repeat 0 0}'+
    '.fix-sameip-close:hover{background-position:-30px 0}'+
    '.fix-sameip .btn-gload{position:relative;display:block;margin-bottom:10px;width:100%;height:32px;background:#ffcd00;color:#414141;text-align:center;font:500 16px/32px "Microsoft YaHei";}'+
    '.fix-sameip .btn-gload .ewm{position:absolute;top:40px;left:0;width:100%;height:120px;background:#fff;display: none;}'+
    '.fix-sameip .btn-gload:hover {font-weight:bold}'+
    '.fix-sameip .btn-gload:hover .ewm{display: block;}'+
    '.fix-sameip .btn-box{overflow:hidden;margin-bottom:10px;background: #fafcff;}'+
    '.fix-sameip .btn-box a{float:left;display:block;width:73px;height:28px;border:1px solid #dadada;background:#fafcff;color:#4277d0;text-align:center;font-size:14px;line-height:28px}'+
    '.fix-sameip .btn-box a:hover{color:#333;background: #fff;}'+
    '.fix-sameip .btn-box .btn-c1{border-radius:5px 0 0 5px}'+
    '.fix-sameip .btn-box .btn-c2{border-left:0;border-radius:0 5px 5px 0}'+
    '.fix-sameip .intr{overflow:hidden;height:120px;color:#666;font:400 12px/20px "Microsoft YaHei"}'+
    '.fix-sameip .intr a{color:#666}'+
    '.fix-sameip-c2{position:absolute;z-index:11;top:0;left:0;display:none;padding:5px 7px 35px;width:1pc;background:#ffcd00 url(http://ue1.17173cdn.com/a/newgame/index/2016/fix-sameip/img/fix-sameip-sp.png) no-repeat -60px bottom;color:#333;font-family:"Microsoft YaHei";line-height:1.3;cursor:pointer}';
  
    if($(window).width() > ( parseInt($('.content').width(),10) + 380) ) {
      this.css+='.fix-sameip{z-index:1000; background:#fff; position:fixed;top:280px;left:50%; margin-left:'+(parseInt($('.content').width()/2,10)+40)+'px;width:170px;font: normal 14px/1.7 "Microsoft YaHei";}'+
      '.fix-sameip-c1{padding-top:29px;background: url(http://ue3.17173cdn.com/a/newgame/index/2016/fix-sameip/img/fix-bg.png) no-repeat 2px top;}</style>';
    } else {
       this.css+='.fix-sameip{z-index:1000; background:#fff; position:fixed;top:280px;right:8px; width:170px;font: normal 14px/1.7 "Microsoft YaHei";}'+
      '.fix-sameip-c1{padding-top:29px;background: url(http://ue3.17173cdn.com/a/newgame/index/2016/fix-sameip/img/fix-bg.png) no-repeat 2px top;}</style>';

    }

     $('.'+self.options.advid).on( 'click', '.fix-sameip-close',function(){
       $('.fix-sameip-c1').fadeOut();
       $('.fix-sameip-c2').fadeIn();
    })

    $('.'+self.options.advid).on('click', '.fix-sameip-c2', function(){

        $('.fix-sameip-c2').fadeOut();
      $('.fix-sameip-c1').fadeIn(); 

    })
     
    this.emit(adv.ENUM.EVENTS.setuped);

  },



  play: function() {
    var me = this;
   if( this.data.pcGameCode == gameCode) {
      $('head').append(me.css)
      this.emit(adv.ENUM.EVENTS.played);
    } 
   


    

        


  }
});