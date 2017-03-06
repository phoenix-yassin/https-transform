adv.AdBase.extend('Ad17173BackgroundToggle', {
  init: function(options) {
    this.base(options);
    this.defaultBackground = $(document.body).css('background') || '#fff';
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    this.sourceslength = data.sources.length;
    this.currentIndex = Math.floor(Math.random() * this.sourceslength);
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  tmpl:function(){/*@preserve
<div style="width: @topWidth@px; height: @topHeight@px; margin: 0px auto; position: relative;">
  <a href="@link" target="_blank">
    <img class="backgoundtoggle-top" src="@currentSource.top" width="@topWidth" height="@topHeight">
  </a>
  <div style="position: absolute;width:43px;height:37px; z-index: 100; top: 20px; right: 0; cursor: pointer;">
    <img class="backgoundtoggle-btn"  src="@toggleImg" width="43" height="37" alt="" />
  </div>
</div>
  */},
  render: function () {
    var data = this.data;
    var source = data.sources[this.currentIndex];
    data.px = 'px';
    data.currentSource = source;
    this.wrap = $(adv.razor(this.tmpl,data));
    this.closeBtn = $(adv.razor('<div style="position: absolute; z-index: 100; top: 0; right: 0px; cursor: pointer;"><img src="@closeImg"></div>',data));
    this.wrap.append(this.closeBtn);
    $('.topbar').after(this.wrap);
    this.wrapTop = this.wrap.offset().top;
    if(!ue.isIPad){
    	$(document.body).css('background', data.bgColor + ' url(' + source.bg + ') no-repeat 50% ' + this.wrapTop + 'px');
    }
  },
	close:function() {
    this.wrap.remove();
    $(document.body).css('background', this.defaultBackground);
  },
  bindEvent: function () {
    var me = this,
        data = this.data;
    me.closeBtn.hover(function () {
      me.closeBtn.find('img').attr('src', data.closeHoverImg);
    }, function() {
      me.closeBtn.find('img').attr('src', data.closeImg);
    });
    //关闭
    me.closeBtn.click(function () {
      me.close();
    });

    me.wrap.find('.backgoundtoggle-btn').click(function() {
      me.toggle();
    }).hover(function(){
      $(this).attr('src',data.hoverImg);
    },function(){
      $(this).attr('src',data.toggleImg);
    });
  },
  toggle: function () {
    var source;
    this.currentIndex += 1;
    this.currentIndex = this.currentIndex % this.sourceslength;
    source = this.data.sources[this.currentIndex];
    if(!ue.isIPad){
    	$(document.body).css('background', this.data.bgColor + ' url(' + source.bg + ') no-repeat 50% ' + this.wrapTop + 'px');
    }
    this.wrap.find('.backgoundtoggle-top').attr('src', source.top);
  },
  play: function() {
    this.render();
    this.bindEvent();
    this.emit(adv.ENUM.EVENTS.played);
  },
  showAdMark:function(){
    this.closeBtn.find('img').attr('src', '//

ue.17173cdn.com/a/lib/vda/sources/ad17173backgroundtoggle/v1-0/close_ad.png');
    this.data.closeImg = '//

ue.17173cdn.com/a/lib/vda/sources/ad17173backgroundtoggle/v1-0/close_ad.png';
    this.data.closeHoverImg = '//

ue.17173cdn.com/a/lib/vda/sources/ad17173backgroundtoggle/v1-0/close_ad_hover.png';
  },
  stop: function() {
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});