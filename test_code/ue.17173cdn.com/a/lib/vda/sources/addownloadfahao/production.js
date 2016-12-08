(function($){
var isIe6 = !!window.ActiveXObject && !window.XMLHttpRequest;
adv.AdBase.extend('AdDownloadFahao', {
  init: function (options) {
    var data;
    this.base(options);
    if(!document.getElementsByClassName('AdDownloadFahao')[0]) {
        return false;
    }
    this.wrap = adv.$('.' + this.options.advid);
    this.titleEl = this.wrap.find('.detail_title');
    while(this.options.ads.length){
      data = this.options.ads.shift();
      if (~this.titleEl[0].innerHTML.indexOf(data.gameName)) {
        this.data = data;
        this.emit(adv.ENUM.EVENTS.inited);
      }
    }
  },
  setup: function () {
    this.base();
    if(isIe6){
      this.html = adv.$('<div style="margin:40px 0 12px 0;padding-left:22px;"><a target="_blank" style="color:#ff6602;font-weight:bold;font-size:14px;" href="'+this.data.link+'">'+this.data.text+'</a><a  target="_blank" style="margin-left:22px;border-radius:3px;text-align:center;line-height:25px;background:#30b0ec;font-size:14px;display:inline-block;zoom:1;width:80px;height:25px;color:#fff;" href="'+this.data.link+'">'+this.data.btnText+'</a></div>');
    }
    else{
      this.html = adv.$('<div style="margin:20px 0 12px 0;padding-left:22px;"><a target="_blank" style="color:#ff6602;font-weight:bold;font-size:14px;" href="'+this.data.link+'">'+this.data.text+'</a><a  target="_blank" style="margin-left:22px;border-radius:3px;text-align:center;line-height:25px;background:#30b0ec;font-size:14px;display:inline-block;zoom:1;width:80px;height:25px;color:#fff;" href="'+this.data.link+'">'+this.data.btnText+'</a></div>');
		}
    this.html[0].style.background='url("http://ue.17173cdn.com/a/lib/vda/sources/addownloadfahao/gift.png") no-repeat 1px 3px';    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    this.wrap[0].insertBefore(this.html[0],this.wrap.find('.detail_table')[0]);
    this.emit(adv.ENUM.EVENTS.played);
  }
});
})(jQuery);