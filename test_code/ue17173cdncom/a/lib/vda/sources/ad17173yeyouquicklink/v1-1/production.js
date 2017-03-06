adv.AdBase.extend('Ad17173YeyouQuickLink', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var advEl = $('.' + this.options.advid),
        games = this.options.games,
        game,link;
    for(var i = 0 ;i<games.length;i++){
      game = games[i];
      link = advEl.find('a:eq('+(game.index-1)+')');
      if(link[0]){
      	link.attr('href',game.link).text(game.name);
      }
      else{
        link = $('<a href="'+game.link+'" target="_blank" class="link">'+game.name+'</a>');
        advEl.append(link);
      }
      adv.util.sendIpa(link,game.ipaCode);
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});