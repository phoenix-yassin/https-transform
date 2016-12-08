adv.AdBase.extend('Ad17173QuickGamePlay', {
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
    advEl.find('.tit').text('快速玩游戏：');
    for(var i = 0 ;i< games.length;i++){
      game = games[i];
      link = advEl.find('a:eq('+(game.index-1)+')');
      if(link[0]){
      	link.attr('href',game.link).text(game.name);
      }
      else{
        link = $(adv.razor('<a href="@link" target="_blank" class="link">@name</a>',game));
        advEl.append(link);
      }
      i === 0 && link.css('font-weight','bold');
     	if(game.isMobile) {
        for(var j = 0;j<games.length;j++){
          if(i != j && games[j].name == game.name){
            link.css('text-decoration', 'underline');
          }
        }
      }
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});