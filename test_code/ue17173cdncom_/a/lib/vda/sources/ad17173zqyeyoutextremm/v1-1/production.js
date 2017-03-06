adv.AdBase.extend('Ad17173ZQYeyouTextRemm', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    try{
    var advEl,opt = this.options;
    advEl = $('.' + opt.advid);
    if(advEl[0]){
       var games = opt.games,game,link;
       for(var i = 0 ;i<games.length;i++){
         game = games[i];
         link = advEl.find('.con a:eq('+(game.index-1)+')');
         link.attr('href',game.link).text(game.name).append('<span class="detail">'+game.desc+'</span>');
         game.isHot && link.css('color','#ff5c00');
         adv.util.sendIpa(link,game.ipaCode);
       }
     }
    else{
      $(document.body).bind('appendHtml', function (e, targetEl) {
        advEl = $(targetEl).find('.' + opt.advid);

        if(advEl[0]){
          var games = opt.games,game,link;
          for(var i = 0 ;i<games.length;i++){
            game = games[i];
            link = advEl.find('.con a:eq('+(game.index-1)+')');
            link.attr('href',game.link).text(game.name).append('<span class="detail">'+game.desc+'</span>');
            game.isHot && link.css('color','#ff5c00');
            adv.util.sendIpa(link,game.ipaCode);
          }
        }
      });
    }
    }
    catch(e){}
    this.emit(adv.ENUM.EVENTS.played);
  }
});