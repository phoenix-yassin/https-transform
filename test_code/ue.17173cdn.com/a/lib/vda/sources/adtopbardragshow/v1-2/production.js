


(function() {
  

  adv.AdBase.extend('AdTopBarDragShow', {
    init: function(options) {
      this.base(options);
      this.options = options;
      var isMobile = (function () {
    var a = navigator.userAgent,
      b = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod'],
      c = false;
      for (var i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) > -1) {
          c = true;
          break
        }
      }
      return c
    })();

      if (~location.href.indexOf('nomarket=true') || window.appZhanNeiTuiGuangOff == true || isMobile  ) {
        return
      }
      this.emit(adv.ENUM.EVENTS.inited);
    },


    setup: function(data) {
      var me = this;
      var contentWidth = 1000;
      try {
        contentWidth = $(document.body).css('min-width') || 1000;
        contentWidth = parseInt(contentWidth,10) || 1000;
        contentWidth = contentWidth < 1000? 1000:contentWidth;

      } catch(err){

      }
  
      this.css = '<style>\
      .zq-wrap, .wrap, .wrapper{_zoom:1}\
      .gb-tg-pull, .gb-tg-pull div{ margin:0; padding:0;}\
      .gb-tg-pull img{ border:0;}\
      .gb-tg-pull :link, .gb-tg-pull :visited{\
          text-decoration: none\
      }\
      .gb-tg-pull{ width:100%; position:relative; *zoom:1; z-index:100}\
      .gb-tg-pull b{z-index:-1; position:absolute; top:0; left:0; width:90px; height:90px; background:#000; filter:alpha(opacity:50); opacity:.50}\
      :root .gb-tg-pull b{ filter:none \\0}\
      .adtopbardragshowbar-box{/* position:absolute; left:50% position:relative; width:100%; zoom:1*/}\
      .gb-tg-pull .gb-tg-pull-c1{ height:130px; overflow:hidden;}\
      .gb-tg-pull .gb-tg-pull-c1 a{ display:block; height:100%;}\
      .gb-tg-pull .gb-tg-pull-c2{ position: absolute; left:50%; /* bottom:-111px;top:0px;*/  margin-left:'+(parseInt(contentWidth/2, 10)+ 60)+'px; z-index:100}\
      .gb-tg-pull .gb-tg-pull-c2 a{ display:block; position: relative; *zoom:1; padding:16px 6px 6px 6px; width:90px; height:90px; border-radius:0 0 48px 48px;}\
      .gb-tg-pull .gb-tg-pull-c2 img{ display:block; width:90px; height:90px; border-radius: 50%;}\
      .gb-tg-pull .gb-tg-pull-c2 .gb-tg-pull-txt, .gb-tg-pull .gb-tg-pull-c2 .gb-tg-pull-back{position: absolute; left:6px; top:16px; width:90px; height:90px;overflow:hidden; border-radius:50%;}\
      .gb-tg-pull .gb-tg-pull-c2 .gb-tg-pull-txt{cursor: pointer;    height:24px; padding-top:66px; line-height: 24px; font-size:14px; color:#222; text-align: center; z-index: 1;  font-family: "Microsoft Yahei"}\
      .gb-tg-pull .gb-tg-pull-c2 .gb-tg-pull-txt b{ left:-10px; top:66px; width:110px; height:110px; background: #ffcd00; filter:alpha(opacity:90); opacity:.90;  border-radius:50%;  left:0px\\0; width:90px\\0; height:24px\\0; }\
      .gb-tg-pull .gb-tg-pull-c2 .gb-tg-pull-back{ z-index: 2; border-radius:50%; overflow:hidden; display:none}\
      .gb-tg-pull .gb-tg-pull-c2 .gb-tg-pull-back i{ display: block; width:42px; height:22px; position:absolute; left:50%; top:50%; margin:-11px 0 0 -21px; background: url(http://ue.17173cdn.com/a/module/tg-pull/2016/img/gb-tg-pull-arrow.png) no-repeat;}\
    </style>';


       var tmplFn = function(){/*@preserve
          <div class="gb-tg-pull @advid">
            <div class="gb-tg-pull-c1 adtopbardragshowcon" >
              <a href="@link" target="_blank" style="background:@color url(@source) center top  no-repeat"></a>
            </div>
              <div class="gb-tg-pull-c2 adtopbardragshowbar on">
                <a href="javascript:;" style="background: @color" >
                  <img src="@hsw" alt="" width="90" height="90"/>
                  <span class="gb-tg-pull-txt">\u770b\u770b<b></b></span>
                  <span class="gb-tg-pull-back"><i></i><b></b></span>
                </a>
              </div>
          </div>
      */}

     
      this.html = $(adv.razor(tmplFn,{link: data.link, source: data.source, hsw: data.hsw, color: data.color, advid: me.options.advid}));
      this.emit(adv.ENUM.EVENTS.setuped);

    },
  
    hideZhangyu:function(){
       adv.util.poll(function(){
       return $('.ad-zhanneituiguang').length;
      },function(){
        $('.instation-ad').remove();
        $('.ad-zhanneituiguang').remove();
      },function(){
      },8000, 500)
    },
    play: function() {
      var me = this;
     $('head').append('<style>.instation-ad, .ad-zhanneituiguang{display:none !important} </style>')
     

      adv.util.poll(function(){
       return $('#ue-topbar').length;
      },function(){
        me.hideZhangyu();
        $('head').append(me.css);
        $('#ue-topbar').after(me.html);


       
        setTimeout(function(){
          $('.gb-tg-pull-back').show();
          $(".adtopbardragshowcon").stop().animate({height:0}, 400, function(){
  
            $('.gb-tg-pull-back').hide();
            $('.adtopbardragshowbar').removeClass('on')

          });

        }, 3000)



        $('.adtopbardragshowbar').click(function(event) {
          var self = this;
            if($(this).hasClass('on')) {
              $(".adtopbardragshowcon").stop().animate({height:0}, 400, function() {
  
                  $(self).removeClass('on');
                $('.gb-tg-pull-back').hide()    

              });
              

          } else {
              $(".adtopbardragshowcon").stop().animate({height:130},400, function(){
                $('.gb-tg-pull-back').show()
              });
              $(self).addClass('on');
          }
        });
        
        adv.util.sendIpa($('.adtopbardragshowcon a'),  'AjauQr', true);   
        adv.util.sendIpa($('.adtopbardragshowbar a'),  'Enaayq', true);   

         


        me.emit(adv.ENUM.EVENTS.played);


      },function(){
    
      },8000,500)

      
    
    }
  });

})();