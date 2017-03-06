adv.AdBase.extend('AdYeyouBannerABTest', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  getSource:function(){
    var cookieName = 'AdYeyouBannerABTest'+_jc_uv;
    this.sourceType = adv.cookie.getCookie(cookieName);
    if(!this.sourceType){
      this.sourceType = new Date() % 2 ?'smallSource':'bigSource';
    }
    adv.cookie.setCookie(cookieName,this.sourceType,adv.cookie.DAY*30);
    this.ipaCode = this.sourceType == 'smallSource'? '48549fd31d593a5eea25c55086c7012f':'4d76070805fa725967d281db17730075';
    return this.options[this.sourceType];
  },
  setup: function () {
    this.base();
    var source = this.getSource();
    if(~source.indexOf('swf')) {
      this.html = adv.flash.embed({
        source: source,
        width: 1000,
        height: 80
      });
    }
    else{
      this.html = '<a href="'+this.options.link+'" target="_blank"><img src="' + source+'" alt="" width="1000" height="80" /></a>';
    }
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    var adEl = $('.' +this.options.advid);
    adEl.attr('data-sourcetype',this.sourceType).append(this.html);
    this.emit(adv.ENUM.EVENTS.played);
    adv.util.sendIpa(adEl,this.ipaCode,true);
  }
});