adv.AdBase.extend('AdZqFinalBottom', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;

  var tmplFn = function(){/*@preserve
        <div class="recd-mhxy">
              <div class="recd-mhxy-pt">
                <div class="pic">
                  <a href="@picLink" target="_blank">
                    <img src="@picUrl" width="115" height="135" alt="">
                  </a>
                </div>
                <div class="text">
                  <h3 class="tit"><a href="@topLink" target="_blank">@topText</a></h3>
                  <ul class="recd-mhxy-new">
                    <li class="item"><a href="@link1" target="_blank" class="item-con"> <span class="tit1"><span class="tit-con">@text1</span></span></a></li>
                    <li class="item"><a href="@link2" target="_blank" class="item-con"> <span class="tit1"><span class="tit-con">@text2</span></span></a></li>
                    <li class="item"><a href="@link3" target="_blank" class="item-con"> <span class="tit1"><span class="tit-con">@text3</span></span></a></li>
                  </ul>
                </div>
              </div>
          </div>
  */}


  this.css = '<style>.recd-wrap{width:608px;margin:0 auto;overflow:hidden;}'+
'.recd-wrap .recd-yeyou{float:right;}'+
'.recd-wrap .app17173-code{padding:7px 5px 8px 5px;width:298px;float:left;}'+
'.recd-wrap .app17173-code-l{width:210px;}'+
'.recd-mhxy{margin:0 auto;overflow:hidden;*zoom:1;width: 297px; font-family: "Microsoft Yahei"; font-size: 12px;background: #f4f8fc; border: 1px solid #dddddd; border-left: 0; }'+
'.recd-mhxy a{color:#a19b8f;text-decoration: none;}'+
'.recd-mhxy a:hover{ text-decoration: underline;}'+
'.recd-mhxy img{border: none;}'+
'.recd-mhxy-pt{overflow:hidden;*zoom:1;}'+
'.recd-mhxy-pt .pic{float:left;width:115px;margin-right:9px;}'+
'.recd-mhxy-pt .pic a{display: block;}'+
'.recd-mhxy-pt .text{overflow: hidden;*zoom:1;}'+
'.recd-mhxy-pt .text .tit{color: #333333; font-size: 14px;font-weight: bold;margin-bottom: 6px;margin-top:15px;}'+
'.recd-mhxy-pt .text .tit a{color: #333333;}'+
'.recd-mhxy-new{list-style: none;margin: 0;padding: 0;}'+
'.recd-mhxy-new .item{line-height:26px; *overflow: hidden; *float: left; *width: 100%;background: url(//

ue1.17173cdn.com/a/money/2016/img/ico.png) no-repeat 0 center;padding-left: 13px;}'+
'.recd-mhxy-new .item-con{display: block;}'+
'.recd-mhxy-new .item .tit1{display: block;overflow: hidden;*zoom:1; color: #666666; font-weight: normal;font-size: 14px; }'+
'.recd-mhxy-new .item .tit-con{display: block;width: 99.8%; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}</style>';


   this.html = adv.razor(tmplFn,{picLink: data.picLink, picUrl: data.picUrl, topLink: data.topLink, topText: data.topText, link1:data.link1,
      link2:data.link2, link3:data.link3, text1:data.text1, text2:data.text2, text3:data.text3});
      this.emit(adv.ENUM.EVENTS.setuped);

  },

  play: function() {
    var me = this;
   if($('.app17173-code').length >0) {
    $('head').append(me.css)
      $('.app17173-code').wrap('<div class="clarefix recd-wrap '+me.options.advid+'"></div>')
      $('.' + me.options.advid).append(me.html);
    }
    else {
      $('head').append(me.css)
      $('<div class="clarefix recd-wrap '+me.options.advid+'"></div>').insertAfter('#relevant_1')
      $('.' + me.options.advid).append(me.html);
    }


    this.emit(adv.ENUM.EVENTS.played);
  }
});
