adv.AdBase.extend('AdZhaiRenBangPicList', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    var link = $('.' + this.options.advid).find('li:last a');
    link.find('img').attr('src',this.options.image);
    link.find('.txt').text(this.options.text);
    link.attr('href',this.options.link);
    this.emit(adv.ENUM.EVENTS.played);
  }
});