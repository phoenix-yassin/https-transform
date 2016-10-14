adv.AdBase.extend('Ad17173FocusCover', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  coverTimer:null,
  topTmpl:'<div style="position:absolute;float:left; display:inline;z-index:100;top:0;left:0;width:365px;"><a class="tg-focus-top" href="@link" target="_blank" style=""><img src="@sourceUp" width="@width" height="@sourceUpHeight" alt=""></a></div>',
  coverTmpl:'<div style="display:none;position: absolute;top:26;left:0;z-index: 100;width:365px;height:475px;"></div>',
  closeTmpl:'<div style="position:absolute;z-index:120;right:0;bottom:0;background:#000;opacity:0;filter:alpha(opacity=0);width:24px;height:24px;cursor:pointer;"></div>',
  setup: function(data) {
    this.data = data;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  render:function(){
    var advEl =$('.' + this.options.advid),data = this.data;
    advEl.css('margin-top','25px').parent('.col1').css('position','relative');
    if(window.STATUS_ISIE6){
      advEl.css('margin-top','25px').parent('.col1').css('padding-top','25px');
    }
    this.topEl = $(adv.razor(this.topTmpl,data));
    this.swfEl = $(this.coverTmpl).append(adv.flash.embed({
      source: '//ue.17173cdn.com/a/lib/vda/sources/ad17173focuscover/adoshell3.swf',
      width: data.width,
      height: data.sourceCoverHeight,
      params:{
        flashurl : data.sourceCover,
        linkurl : data.link
      }
    }));
    this.closeEl = $(this.closeTmpl);
    this.swfEl.append(this.closeEl);
    this.topEl.append(this.swfEl);
    advEl.before(this.topEl);

    if(data.sourceContent.thumb && data.sourceContent.image){
      adv.util.poll(function(){
        return ue.instances && ue.instances.slideshow;
      },function(){
        ue.instances.slideshow.add({
          thumb : data.sourceContent.thumb,
          image : data.sourceContent.image,
          link : data.link,
          title:'',
          desc:''
        });
      },null,8000,200);
    }
    this.data.ipaCode && adv.util.sendIpa(this.topEl[0],this.data.ipaCode,true);
    this.data.ipaCode && adv.util.sendIpa($('.focus-con-item .img-box a'),this.data.ipaCode,false);
  },
  bindEvent:function(){
    var me = this;
    this.closeEl.on('click',function(){
      me.swfEl.hide();
    });

    this.topEl.find('.tg-focus-top').on('mouseover',function(){
      me.show();
    });

    var $w = $(window);
    var _firstShow = function(){
      if($w.scrollTop()  > 550){
        me.show(5000);
      	$w.unbind('scroll',_firstShow);
      }
    };
    $(window).scroll(_firstShow);
    _firstShow();
  },
  show:function(time){
    var me = this;
    time = time || 8000;
    me.swfEl.show();
    clearTimeout(this.coverTimer);
    this.coverTimer = setTimeout(function(){
      me.swfEl.hide();
    },time);
  },
  play: function() {
    var opt = this.options;
    this.render();
    this.bindEvent();
    this.emit(adv.ENUM.EVENTS.played);
  }
});