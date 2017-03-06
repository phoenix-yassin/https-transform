adv.AdBase.extend('Ad17173ZhuanquHotRemm', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var advEl = $('.' + this.options.advid),
        games = this.data.games,
        game,link,span;
    for(var i = 0 ;i<games.length;i++){
      game = games[i];
      link = advEl.find('span:eq('+(game.index-1)+') a');
      link.text(game.game).attr('href',game.link).addClass('tg-c-red');
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});