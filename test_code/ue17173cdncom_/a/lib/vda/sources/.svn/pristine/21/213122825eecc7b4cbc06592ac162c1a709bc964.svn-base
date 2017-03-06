adv.AdBase.extend('AdNewGameLingHao', {
  init: function (options) {
    this.base(options);
    var data;
    var regs = /game-info-(\d*)\.html/ig.exec(location.href);
    while(this.options.ads.length){
      data = this.options.ads.shift();
      if (regs[1] && !isNaN(parseInt(regs[1])) && regs[1] == data.gameId) {
        this.data = data;
        this.emit(adv.ENUM.EVENTS.inited);
      }
    }
  },
  setup: function () {
    this.base();
    this.html = $('<div class="AdNewGameLingHao-tag" style="position:absolute;right:210px;top:42px;padding-left:17px;width:27px;height:20px;font-family: \'\5b8b\4f53\';color: #fff;font-size: 12px;">'+this.data.text+'</div>');
    this.html.css('background','url("'+this.data.image+'")')
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    var wrap = $('.' + this.options.advid);
    wrap.find('.js-tip-get-card').attr('href',this.data.link);
    wrap.find('.name-box').css('margin-bottom',30);
    wrap.find('.channel-box').css('top',66);
    $('.' + this.options.advid).append(this.html);
    this.emit(adv.ENUM.EVENTS.played);
  }
});
