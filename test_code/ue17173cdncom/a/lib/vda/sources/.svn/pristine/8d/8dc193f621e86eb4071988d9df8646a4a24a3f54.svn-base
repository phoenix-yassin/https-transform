adv.AdBase.extend('Ad17173ZQImageRecmd', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var advEl = $('.' + this.options.advid);
    var link = advEl.find('li:eq(3) a');
    link.attr('href',this.data.link);
    link.find('img').attr('src',this.data.image);
    link.find('.txt1').html(this.data.txt + '<b class="mask"></b>');
    this.emit(adv.ENUM.EVENTS.played);
  }
});