(function($){

adv.AdBase.extend('AdOther818IndexTop', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    this.container = $('.adsystem-mark').filter('[data-ad-type="AdOther818IndexTop"]');
    this.html =  '<a class="img" href="'+this.options.url+'" target="_blank">'+
                      '<img src="'+this.options.pic+'" alt="'+this.options.title+'" width="225" height="300"/><span class="cover"><b class="bg"></b></span></a>'+
                      '<div class="title">'+
                      '<h3><a href="'+this.options.url+'" target="_blank">'+this.options.title+'</a></h3>'+
                      '</div>'+
                      '<div class="des">'+this.options.desc+'</div>';
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.container.html(this.html);
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.emit(adv.ENUM.EVENTS.stoped);
  },
});
})(jQuery);