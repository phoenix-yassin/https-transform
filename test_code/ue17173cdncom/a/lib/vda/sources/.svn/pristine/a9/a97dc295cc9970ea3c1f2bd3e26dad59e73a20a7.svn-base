adv.AdBase.extend('Ad17173Corner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    var horCfg = data.horizontal,
        verCfg = data.vertical;
    this.data = data;
    if(horCfg.source){
      if(~horCfg.source.indexOf('.swf') || ~horCfg.source.indexOf('.flv')){
        this.htmlHor = adv.flash.embed({
          source: horCfg.source,
          width: horCfg.width,
          height: horCfg.height
        });
      }
      else{
        this.htmlHor = $(adv.razor('<a target="_blank" href="@link"><img width="@width" height="@height" border="0" src="@source"></a>',horCfg));
      }
    }
    if(verCfg.source){
      if(~verCfg.source.indexOf('.swf') || ~verCfg.source.indexOf('.flv')){
        this.htmlVer = adv.flash.embed({
          source: verCfg.source,
          width: verCfg.width,
          height: verCfg.height
        });
      }
      else{
        this.htmlVer = $(adv.razor('<a target="_blank" href="@link"><img width="@width" height="@height" border="0" src="@source"></a>',verCfg));
      }
    }
  	this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var opt = this.options,
        el = $('.' + opt.advid),
        script;
    if(this.data.jsfile && !~navigator.userAgent.indexOf('iPad')){
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.data.jsfile;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
    this.htmlHor &&  el.find('.tg-h-l').text('').append(this.htmlHor);
    this.htmlVer && el.find('.tg-h-r').text('').append(this.htmlVer);
    this.emit(adv.ENUM.EVENTS.played);
  }
});