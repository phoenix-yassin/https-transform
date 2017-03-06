(function($){
  adv.AdBase.extend('AdBbsTujianLink', {
    init: function (options) {
      var data;
      this.base(options);
      this.wrap = $('.' + this.options.advid);
      while(this.options.ads.length){
        data = this.options.ads.shift();
      	if($('#pt a:eq(1)').text() == data.gameName){
          this.data = data;
          this.emit(adv.ENUM.EVENTS.inited);
        }
			}

    },
    setup: function () {
      this.base();
      this.html = $('<div style="float:left;margin:4px 0 0 30px;padding-left:22px;"><a target="_blank" style="color:#ff6602;font-weight:bold;font-size:14px;" href="'+this.data.link+'">'+this.data.text+'</a><a  target="_blank" style="margin-left:22px;border-radius:3px;text-align:center;line-height:25px;background:#30b0ec;font-size:14px;display:inline-block;zoom:1;width:80px;height:25px;color:#fff;" href="'+this.data.link+'">'+this.data.btnText+'</a></div>');
      this.html.css('background','url("//ue.17173cdn.com/a/lib/vda/sources/adbbstujianlink/gift.png") no-repeat 1px 3px');
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      this.base();
      this.wrap.append(this.html);
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})(jQuery);