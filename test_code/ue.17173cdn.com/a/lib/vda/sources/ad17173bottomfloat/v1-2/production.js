adv.AdBase.extend('Ad17173BottomFloat', {
  init: function(options) {
    var me  = this;
		this.queue(function(){
    	me.emit(adv.ENUM.EVENTS.inited);
    });
    this.base(options);
    this.isIe6 = !!window.ActiveXObject && !window.XMLHttpRequest;
  },
  queue:function(fn){
		window.AD=new ADM("ADMBottomFloat",4);
    AddSchedule(AD);
    window._ADMBottomFloat_10=null;
    window.ADMBottomFloat_main=function(t){
      _ADMBottomFloat_10=t;
      fn();
      _ADMBottomFloat_10.s=2;
    };
  },
  calPosition: function () {
    var wWidth = $(window).width(), left;
    left = Math.floor((wWidth - this.data.contentWidth) / 2);
    this.rightEl && this.rightEl.css('left', left);
    this.leftEl && this.leftEl.css('left', left - 120);
    this.recEl && this.recEl.css('left', left - 100);
  },
  keepfixed: function () {
    var $w = $(window);
    var controly = $w.scrollTop() * 1 + $w.height();
    this.rightEl && this.rightEl.css('top', controly - this.rightEl.height());
    this.leftEl && this.leftEl.css('top', controly - this.leftEl.height());
    this.recEl && this.recEl.css('top', controly - this.recEl.height());
  },
  rightTmpl:function(){/*@preserve
<div style="position: fixed; width: 650px; height: 100px; bottom: 0px; z-index: 2000;">
	<a href="@link" target="_blank">
  	<img style="width:650px;height:100px;" src="@sourceRight">
  </a>
  <a href="javascript://" style="position: absolute;right: 0;top: 0;background: #fff;color: #000;font-weight: bold;text-decoration: none;padding:0;margin:0;line-height:19px;" class="ad-close">
  	<img src="@closeBtn" >
  </a>
</div>
*/},
  leftTmpl:function(){/*@preserve
<div style="position: fixed; width: 120px; height: 260px; bottom: 0px; z-index: 2000;">
</div>
*/},
  recTmpl:function(){/*@preserve
<div style="position: fixed; width: 100px; height: 180px; text-align: center; bottom: 0px; z-index: 2000;">
	@source
	<a href="javascript://" style="position: absolute;top: 0;background: #fff;color: #000;font-weight: bold;text-decoration: none;padding:0;margin:0;line-height:19px;right:0;" class="ad-destory">
  	<img src="@closeBtn">
  </a>
  <a href="javascript://" style="position: absolute;bottom: 0;background: #fff;color: #000;font-weight: bold;text-decoration: none;padding:0;margin:0;line-height:19px;right: 0;" class="ad-replay">
  	<img src="@replayImg" >
  </a>
</div>
*/},
  setup: function(data) {
    this.data = data;
    var opt = data,me = this;
    this.rightEl = $(adv.razor(this.rightTmpl,opt));

    this.leftSourceStr = adv.flash.embed({
      source: opt.sourceLeft,
      width: 120,
      height: 260
    }).outerHtml();
  	this.leftEl = $(adv.razor(this.leftTmpl,''));

    var recSourceStr = ~opt.recSource.indexOf('.swf') ? adv.flash.embed({
        source: opt.recSource,
        width:100,
        height:180
      }).outerHtml() :
    	adv.razor('<img src="@recSource" style="width:100px;height:180px;"/>',opt);

    this.recEl = $(adv.razor(this.recTmpl,{source:recSourceStr,closeBtn:opt.closeBtn,replayImg:opt.replayImg}));

    this.calPosition();
    this.bindEvent();
    $(document.body).append(this.rightEl);
    $(document.body).append(this.leftEl);
    $(document.body).append(this.recEl);
    if (this.isIe6) {
      this.rightEl.css('position', 'absolute');
      this.leftEl.css('position', 'absolute');
      this.recEl.css('position', 'absolute');
      this.keepfixed();
      setTimeout(function () {
        me.keepfixed();
      }, 300);
    }
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  bindEvent:function(){
    var me = this;
    this.rightEl.find('.ad-close').on('click',function(){
      me.stop();
    });
    this.recEl.find('.ad-replay').on('click',function(){
      me.play(true);
    });
    this.recEl.find('.ad-destory').on('click',function(){
      me.destory();
    });
    $(window).resize(function () {
      me.calPosition();
      if (me.isIe6) me.keepfixed();
    });
    me.isIe6 && $(window).scroll(function () {
      me.keepfixed();
    });
  },
  play: function(noEmit) {
		this.rightEl.show();
    //flash需要重新播放
    this.leftEl.html(this.leftSourceStr);
    this.leftEl.show();
    this.recEl.hide();
    this.emit(adv.ENUM.EVENTS.played);
  },
  showAdMark:function(){
    this.rightEl.find('.ad-close img').attr('src',this.data.adMarkImg).parent('a');
    this.recEl.find('.ad-destory img').attr('src',this.data.adMarkImg).parent('a');
  },
  stop:function(){
		this.rightEl.hide();
    this.leftEl.hide();
    this.recEl.show();
  },
  destory:function(){
		this.rightEl.remove();
    this.leftEl.remove();
    this.recEl.remove();
  }
});