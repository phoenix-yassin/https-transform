adv.AdBase.extend('Ad17173TuTui', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.html = $('.' + this.options.advid);
    this.wrap = this.html.find('ul');
    this.items = this.html.find('.item');
   	this._setupSources();
    this._setupAni();
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  _setupSources:function(){
    var opt= this.options;
    this.items.each(function(i,n){
      var $n = $(n),source = opt.sources[i];
      $n.data('index',i).css('width',140).css('margin-right',0).find('a').attr('href',source.link);
      $n.find('.c1 img').attr('src',source.smallImg);
      $n.find('.c1 .txt').text(source.title);
      $n.find('.c2 img').attr('src',source.bigImg);
    });
  },
  _setupAni:function(){
    var aniTime = 700,me= this;
    this.items.hover(function () {
      var innerWrap = $(this);
      var targetMarginLeft = innerWrap.data('index') * 140;
      innerWrap.stop().animate({width:1000}, aniTime);
      innerWrap.find('.c2').stop().animate( { width: 800 }, aniTime);
      me.wrap.stop().animate({
        'margin-left': -targetMarginLeft
      }, aniTime);
    },function(){
      var innerWrap = $(this);
      me.wrap.stop().animate({'margin-left': 0}, aniTime);
      innerWrap.find('.c2').stop().animate({ width: 0 }, aniTime);
    	innerWrap.stop().animate({width:140}, aniTime);
    });
  },
  play: function() {
    this.html.show();
    this.emit(adv.ENUM.EVENTS.played);
  }
});