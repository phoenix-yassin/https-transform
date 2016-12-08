adv.AdBase.extend('Ad17173Banner2', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    var pos = adv.cookie.getCookie(this.options.advid);
    pos = pos || adv.util.random(data.sources);
    pos = pos >= data.sources.length ? 0 : pos;
    this.currentIndex = 1*pos;
    pos++;
    adv.cookie.setCookie(this.options.advid, pos, adv.cookie.DAY);
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  render:function(){
    var me = this,
        sources = this.data.sources,
        advEl = $('.' + this.options.advid),
        tabBtn,
        source;
    for(var i = 0; i < sources.length;i++){
      source = sources[i];
      tabBtn = advEl.find('.tab-tg li a:eq('+i+')');
      tabBtn.attr('data-index',i);
      tabBtn.text(source.text);
      source.adskey && adv.util.sendIpa(advEl.find('.tab-pn div:eq('+i+')'),source.adskey,true);
      advEl.find('.tab-pn a:eq('+i+')').attr('href',source.link).find('img').attr('src',source.source);
    }
    me.slide();
    advEl.show();
  },
  slide:function(){
    var advEl = $('.' + this.options.advid);
    this.currentIndex = this.currentIndex % this.data.sources.length;
    advEl.find('.tab-tg li').removeClass('current').eq(this.currentIndex).addClass('current');
    advEl.find('.tab-pn>div').hide().eq(this.currentIndex).show();
  },
  bindEvent:function(){
    var me = this,
        advEl = $('.' + this.options.advid),
    	tabBtn = advEl.find('.tab-tg li a');
    tabBtn.on('mouseover',function(){
      me.currentIndex = $(this).attr('data-index');
      me.slide();
    });
  },
  autoToggle:function(){
    var me = this;
    this.timer = setTimeout(function(){
      var advEl = $('.' + me.options.advid);
      me.currentIndex++;
      me.slide();
      me.autoToggle();
    },3000);
  },
  play: function() {
    var opt = this.options;
    this.render();
    this.bindEvent();
    this.autoToggle();
    this.emit(adv.ENUM.EVENTS.played);
  }
});