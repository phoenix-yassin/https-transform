adv.AdBase.extend('AdNewgameNewserverList', {
  init: function(options) {
    this.base(options);
    $('.'+this.options.advid).show();

    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    var me = this;
    me.counts30w = 0;

     $.each(data.ads, function(index, val) {
      if(val.adshowtype ==  '30w') {
        me.counts30w ++;
      }

    })


    this.tmplFn10w = function(){/*@preserve
       <div class="mod-game mt35">
          <div class="avatar">
            <a href="@link" target="_blank"><img src="@source" width="680" height="150" alt=""/></a>
          </div>
          <div class="info">
            <h1 class="tit"><a href="@link" target="_blank">@title</a></h1>
            <div class="txt">
              <p><span class="c-tx1">开服时间：</span>@openDate</p>

              <div class="server-box">
                <p class="c-tx1 fl">新服务器：</p>
                  <div class="server">
                    @for(var i=0; i< serverList.length; i++ ){
                      <p> @serverList[i] </p>
                  }
                </div>
              </div>


            </div>
            <div class="links">
              <a href="@actUrl" target="_blank" >@buttonText1</a>
              <a href="@giftUrl" target="_blank" class="btn-gift">@buttonText2</a>
              <a href="@gwUrl" target="_blank"  >进入官网</a>
              <a href="@registerUrl" target="_blank" >注册帐号</a>
            </div>
          </div>
        </div>
    */}




     // 只投放一个30w的时候
     this.tmplFn30w = function() {/*@preserve
        <div class="mod-top">
          <div class="mod-c1">
            <ul class="comm-plist comm-plist-ex2">
              <li>
                <i class="tag1"></i>
                <div class="tit"><a href="@link1" target="_blank">@title<span class="tit-sub">@smallTile</span></a></div>
                <div class="detail">
                  <div class="detail-c1 avatar">
                    <a href="@link1" target="_blank">
                      <img src="@source" width="280" height="200" alt="">
                    </a>
                  </div>
                  <div class="detail-c2">
                    <div class="txt">
                      <p><span class="c-tx1">开服时间：</span>@openDate</p>
                      <p><span class="c-tx1">新服务器：</span></p>
                        <div class="server">
                          @for(var i=0; i< serverList.length; i++ ){
                            <p> @serverList[i] </p>
                          }
                        </div>


                    </div>
                    <div class="links">
                      <a href="@actUrl" target="_blank" >@buttonText1</a>
                      <a href="@giftUrl" target="_blank" class="btn-gift">@buttonText2</a>
                      <a href="@gwUrl" target="_blank"  >进入官网</a>
                      <a href="@registerUrl" target="_blank" >注册帐号</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="mod-c2">
                <embed name="MainPlayer" width="446" height="288" align="middle" id="MainPlayer" src="//

v.17173.com/live/playerVideo/PreloaderFileCustomer.swf&amp;url=@video" flashvars="m10=0&amp;m16=1&amp;m15=0" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" allowfullscreeninteractive="true">
        </div>

     */}






    // 投放2个30w的时候
     this.tmplFn30w1 = function() {/*@preserve
        <li>
            <i class="tag1"></i>
            <div class="tit"><a href="@link1" target="_blank">@title<span class="tit-sub">@smallTile</span></a></div>
            <div class="detail">
              <div class="detail-c1 avatar ">
                <a href="javascript:;"  data-video="@video" class="js-showvideo">
                  <img src="@source" width="280" height="200" alt=""/>
                  <i class="cover"></i>
                </a>
              </div>
              <div class="detail-c2">
                <div class="txt">
                  <p><span class="c-tx1">开服时间：</span>@openDate</p>
                  <p><span class="c-tx1">新服务器：</span></p>
                    <div class="server">
                      @for(var i=0; i< serverList.length; i++ ){
                        <p> @serverList[i] </p>
                      }
                    </div>
                </div>
                <div class="links">
                  <a href="@actUrl" target="_blank" >@buttonText1</a>
                  <a href="@giftUrl" target="_blank" class="btn-gift" >@buttonText2</a>
                  <a href="@gwUrl" target="_blank"  >进入官网</a>
                  <a href="@registerUrl" target="_blank" >注册帐号</a>
                </div>
              </div>
            </div>
          </li>

     */}



    // 投放3个30w的时候
     this.tmplFn30w2 = function() {/*@preserve
       <li>
            <i class="tag1"></i>
            <div class="tit"><a href="@link1" target="_blank">@title</a></div>
            <div class="avatar">
              <a href="javascript:;"  data-video="@video" class="js-showvideo">
                <img src="@source" width="280" height="200" alt=""/>
                <i class="cover"></i>
              </a>
            </div>
            <div class="txt">
              <p><span class="c-tx1">开服时间：</span>@openDate</p>
              <p><span class="c-tx1">新服务器：</span></p>
                  <div class="server">
                    @for(var i=0; i< serverList.length; i++ ){
                      <p> @serverList[i] </p>
                    }
                  </div>

              </p>
            </div>
            <div class="links">
              <a href="@actUrl" target="_blank" >@buttonText1</a>
                  <a href="@giftUrl" target="_blank" class="btn-gift" >@buttonText2</a>
                  <a href="@gwUrl" target="_blank"  >进入官网</a>
                  <a href="@registerUrl" target="_blank" >注册帐号</a>
            </div>
          </li>

     */}



         // 投放悬浮
     this.tmplFn30wfloat = function() {/*@preserve
        <a href="@link1" target="_blank" class="link"><span class="txt">@text</span><span class="go">go!</span></a>
     */}

    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
  var me = this;
  var getMaxHeight = [];
  $.each(me.data.ads, function(index, val) {
  if(val.adshowtype == '10w' ) {
        me.html10w = $(adv.razor(me.tmplFn10w,{link: val.link, source: val.source, actUrl: val.actUrl, giftUrl: val.giftUrl, gwUrl: val.gwUrl, registerUrl: val.registerUrl,
            openDate: val.openDate, serverList: val.serverList, title:val.title, buttonText1: val.buttonText1, buttonText2: val.buttonText2}));
        $('.'+me.options.advid).find('.pn-bd').append(me.html10w);
        //元素, 统计代码,是否发送曝光
        adv.util.sendIpa(me.html10w.find('.links a:eq(0)'),  val.adskey1, true);   //游戏下载
        adv.util.sendIpa(me.html10w.find('.links a:eq(1)'),  val.adskey2, true);  //独家礼包
        adv.util.sendIpa(me.html10w.find('.links a:eq(2)'),  val.adskey3, true);   //进入官网
        adv.util.sendIpa(me.html10w.find('.links a:eq(3)'),  val.adskey4, true);  //注册帐号
        adv.util.sendIpa(me.html10w.find('.avatar a'),  val.adskey5, true);  //注册帐号
        adv.util.sendIpa(me.html10w.find('.tit a'),  val.adskey6, true);  //标题

  }

// 一个三十万
  if(val.adshowtype == '30w' && me.counts30w  == 1 ) {
     me.html30w = $(adv.razor(me.tmplFn30w,{link1: val.link1, source: val.source, actUrl: val.actUrl, giftUrl: val.giftUrl, gwUrl: val.gwUrl, registerUrl: val.registerUrl,
     openDate: val.openDate, serverList: val.serverList, title:val.title, smallTile:val.smallTile, video: val.video, buttonText1: val.buttonText1, buttonText2: val.buttonText2}));
      $('.'+me.options.advid).find('.pn-bd').append(me.html30w);
      adv.util.sendIpa(me.html30w.find('.links a:eq(0)'),  val.adskey1, true); //游戏下载
      adv.util.sendIpa(me.html30w.find('.links a:eq(1)'),  val.adskey2, true); //独家礼包
      adv.util.sendIpa(me.html30w.find('.links a:eq(2)'),  val.adskey3, true);  //进入官网
      adv.util.sendIpa(me.html30w.find('.links a:eq(3)'),  val.adskey4, true);  //注册帐号
      adv.util.sendIpa(me.html30w.find('.avatar a'),  val.adskey7, true);  //图片
      adv.util.sendIpa(me.html30w.find('.mod-c2'),  val.adskey5, true);
      adv.util.sendIpa(me.html30w.find('.tit a'),  val.adskey8, true);  //标题



       // 浮窗部分
      me.html30wfloat = $(adv.razor(me.tmplFn30wfloat,{link1: val.link1, text: val.text}));
      $('.'+val.elmentid).append(me.html30wfloat);
      adv.util.sendIpa(me.html30wfloat,  val.adskey6, true);


  }



// 两个三十万
  if( !$('.'+me.options.advid).find('.show30wtwo').length && me.counts30w  == 2 ) {
    $('.'+me.options.advid).find('.pn-bd').append('<ul class="comm-plist comm-plist-ex2 mt35 show30wtwo"></ul>');
  }



  if(val.adshowtype == '30w' && me.counts30w  == 2 ) {
    me.html30w1 = $(adv.razor(me.tmplFn30w1,{ source: val.source, actUrl: val.actUrl, link1: val.link1, giftUrl: val.giftUrl, gwUrl: val.gwUrl,
    registerUrl: val.registerUrl,  openDate: val.openDate, serverList: val.serverList, title:val.title, smallTile:val.smallTile, video: val.video, buttonText1: val.buttonText1, buttonText2: val.buttonText2}));

   $('.'+me.options.advid).find('.pn-bd').find('.show30wtwo').append(me.html30w1);
    adv.util.sendIpa(me.html30w1.find('.links a:eq(0)'),  val.adskey1, true);  //游戏下载1
    adv.util.sendIpa(me.html30w1.find('.links a:eq(1)'),  val.adskey2, true); //独家礼包1
    adv.util.sendIpa(me.html30w1.find('.links a:eq(2)'),  val.adskey3, true); //进入官网1
    adv.util.sendIpa(me.html30w1.find('.links a:eq(3)'),  val.adskey4, true);//注册帐号1
    adv.util.sendIpa(me.html30w1.find('.avatar'),  val.adskey5, true);    //视频位1
    getMaxHeight.push(me.html30w1.find('.server').height());
    adv.util.sendIpa(me.html30w1.find('.tit a'),  val.adskey8, true);  //标题

      // 浮窗部分
    me.html30wfloat = $(adv.razor(me.tmplFn30wfloat,{link1: val.link1, text: val.text}));
    $('.'+val.elmentid).append(me.html30wfloat);
    adv.util.sendIpa(me.html30wfloat,  val.adskey6, true);


  }

  if( !$('.'+me.options.advid).find('.show30wthree').length && me.counts30w  == 3  ) {
    $('.'+me.options.advid).find('.pn-bd').append('<ul class="comm-plist mt35 show30wthree"></ul>');
  }

   if(val.adshowtype == '30w' && me.counts30w  == 3 ) {
      me.html30w2= $(adv.razor(me.tmplFn30w2,{source: val.source, actUrl: val.actUrl, link1: val.link1, giftUrl: val.giftUrl, gwUrl: val.gwUrl,
      registerUrl: val.registerUrl,  openDate: val.openDate, serverList: val.serverList, title:val.title, smallTile:val.smallTile,  video: val.video, buttonText1: val.buttonText1, buttonText2: val.buttonText2}));

    $('.'+me.options.advid).find('.pn-bd').find('.show30wthree').append(me.html30w2);

    me.html30wfloat = $(adv.razor(me.tmplFn30wfloat,{link1: val.link1, text: val.text}));
    $('.'+ val.elmentid).append(me.html30wfloat);
    adv.util.sendIpa(me.html30w2.find('.links a:eq(0)'),  val.adskey1, true); //游戏下载1
    adv.util.sendIpa(me.html30w2.find('.links a:eq(1)'),  val.adskey2, true); //独家礼包1
    adv.util.sendIpa(me.html30w2.find('.links a:eq(2)'),  val.adskey3, true);//进入官网1
    adv.util.sendIpa(me.html30w2.find('.links a:eq(3)'),  val.adskey4, true);//注册帐号1
    adv.util.sendIpa(me.html30w2.find('.avatar'),  val.adskey5, true); //视频位
    adv.util.sendIpa(me.html30w2.find('.tit a'),  val.adskey8, true);  //标题


    adv.util.sendIpa(me.html30wfloat,  val.adskey6, true);
    getMaxHeight.push(me.html30w2.find('.server').height());


  }

  });
  var maxHeight = Math.max.apply(null, getMaxHeight);
  $('.show30wthree .server').height(maxHeight)
  $('.show30wtwo .server').height(maxHeight)



  me.emit(adv.ENUM.EVENTS.played);

  $('.AdNewgameNewserverList').on('click', '.js-showvideo', function() {
      var videoUrl = $(this).data('video');
      $('body').append('<a class="dialog-mask" style="display: block;" href="javascript:;"></a>')
      $('body').append('<div class="dialog1" style="display: block;" > <a href="javascript:;" class="close">×</a> <div class="show-video">'+
      '<embed name="MainPlayer" width="800" height="500" align="middle" id="MainPlayer" src="//

v.17173.com/live/playerVideo/PreloaderFileCustomer.swf&amp;url='+videoUrl+'" flashvars="m10=0&amp;m16=1&amp;m15=0" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" allowfullscreeninteractive="true"></div> </div>');
  })


  $('body').on('click', '.dialog1 .close', function() {

      $('.dialog1').remove();
      $('.dialog-mask').remove();
  })

  }
});
