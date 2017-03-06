adv.AdBase.extend('Ad17173ZhuanquYeyouRemm', {
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
        game,link;
    for(var i = 0 ;i<games.length;i++){
      game = games[i];
      link = advEl.find('a:eq('+(game.index-1)+')');
      if(!link[0]){
        link = $('<a href="'+game.link+'" target="_blank" class="link">'+game.name+'</a>');
        advEl.append(link);
      }
      else{
      	link.attr('href',game.link).text(game.name);
      }
      game.isHot ? link.addClass('tg-c-red') : link.removeClass('tg-c-red');
      if(game.hotIpaCode && game.isHot){
        adv.util.sendIpa(link,game.hotIpaCode);
      }
      else if(game.ipaCode){
       adv.util.sendIpa(link,game.ipaCode);
      }
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});