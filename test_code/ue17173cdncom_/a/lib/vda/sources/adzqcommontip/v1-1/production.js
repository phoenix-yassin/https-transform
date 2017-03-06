
/*by zhouhaihua@cyou-inc.com 2014-07-21 17:16:20 v1.0.3beta*/
adv.AdBase.extend('AdZqCommonTip', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    this.container = $('.adsystem-mark').filter('[data-ad-type="AdZqCommonTip"]');
    this.boxHeight = this.container.parent('div').height();
    this.container.parent('div').css({height: this.boxHeight});
    this.style= '<style> .zq-tips-box {font-size:12px;background:url(//

ue.17173cdn.com/cache/lib/v3/vda/sources/adzqcommontip/img/tips-img-top.png) left top no-repeat;_background:url(//

ue.17173cdn.com/cache/lib/v3/vda/sources/adzqcommontip/img/tips-img-top-ie6.png) left top no-repeat; line-height:16px; color:#000; position: absolute; z-index:100;  width:26px; }'+
            '.zq-tip-top{display:block; width:20px; padding-left:6px;}'+
            '.zq-tip-bottom{display:block; background:url(//

ue.17173cdn.com/cache/lib/v3/vda/sources/adzqcommontip/img/tips-img-bottom.png) center bottom no-repeat;_background:url(//

ue.17173cdn.com/cache/lib/v3/vda/sources/adzqcommontip/img/tips-img-bottom-ie6.png) center bottom no-repeat; width:20px; padding-bottom:6px; overflow:hidden; *zoom:1}'+
            '.zq-tip-con{display:block; border:0!important;   background:#ffe400!important; width:auto !important; line-height:18px !important; height:auto!important; font-size:12px!important; float:none !important; padding:5px 3px !important; color:#e1221f!important; font-weight:bold!important}</style>';


    this.container.css({'position':'relative'});
    this.container.parents('div').css({'overflow':'visible'})
    this.html = '<span class="zq-tips-box" >'+
                  '<span class="zq-tip-top" >'+
                    '<span class="zq-tip-bottom">'+
                      '<a class="zq-tip-con" href="'+this.options.linkUrl+'" target="_blank" >'+this.options.name+'</a></span></span></span>';
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    var me = this;
    this.container.append(this.html);
    $('.zq-tips-box').css({'right':-20,'top':-7 });
    $('head').append(this.style);

   $('.zq-tips-box a:eq(0)').bind('click',function() {
    if( me.options.adskey) {
      window._jc_ping = window._jc_ping || [];
      _jc_ping.push([
          '_trackBlockClick',
           me.options.adskey,
           $(this).attr('href')
      ]);

    }


  });

  this.emit(adv.ENUM.EVENTS.played);
  }
});

