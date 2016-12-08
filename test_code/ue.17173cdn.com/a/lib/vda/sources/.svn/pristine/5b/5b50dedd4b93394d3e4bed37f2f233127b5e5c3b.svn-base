adv.AdBase.extend('Ad17173Corner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    data = data || this.options;
    var horCfg = data.horizontal,
        verCfg = data.vertical;
    this.data = data;
    if(!data.jsfile){
      if(~horCfg.source.indexOf('.swf') || ~horCfg.source.indexOf('.flv')){
        this.htmlHor = adv.flash.embed({
          source: horCfg.source,
          width: horCfg.width,
          height: horCfg.height
        });
      }
      else{
        this.htmlHor = $('<a target="_blank" href="' + horCfg.link + '"><img width="' + horCfg.width + '" height="' + horCfg.height + '" border="0" src="' + horCfg.source + '"></a>');
      }
      if(~verCfg.source.indexOf('.swf') || ~verCfg.source.indexOf('.flv')){
        this.htmlVer = adv.flash.embed({
          source: verCfg.source,
          width: verCfg.width,
          height: verCfg.height
        });
      }
      else{
        this.htmlVer = $('<a target="_blank" href="' + verCfg.link + '"><img width="' + verCfg.width + '" height="' + verCfg.height + '" border="0" src="' + verCfg.source + '"></a>');
      }
    }
  	this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var opt = this.options,
        el = $('.' + opt.advid),
        script;
    if(this.data.jsfile){
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.data.jsfile;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
    else{
      el.find('.ad-h-l').text('').append(this.htmlHor);
      el.find('.ad-h-r').text('').append(this.htmlVer);
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});