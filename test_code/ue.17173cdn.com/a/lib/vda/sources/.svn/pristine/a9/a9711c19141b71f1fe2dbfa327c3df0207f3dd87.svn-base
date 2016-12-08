adv.AdBase.extend('Ad17173ZhuanquHotLink', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var self = this,
        opt = this.options;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  _setGame:function(game){
    var link,
    	advEl = $('.' +  this.options.advid);
    advEl.find('a').each(function(i,n){
      if($.trim($(n).text()) == game.name){
        link = $(n);
      }
    });
    if(link){
      link.addClass('link-tg');
      var toolTip = $('<div style="display: none;position:absolute;width:120px;z-index:1000;padding: 0 5px;text-align: center;border: 1px solid #828282;background-color: #fff899;">'+game.desc+'</div>');
      var offset = link.offset();
      $(document.body).append(toolTip);
      game.ipaCode && adv.util.sendIpa(link,game.ipaCode);
      link.hover(function(){
        toolTip.show();
      },function(){
        toolTip.hide();
      }).mousemove(function(e){
        toolTip.css({
          left:e.pageX - 50,
          top:e.pageY + 20
        });
      });
    }
  },
  play: function() {
    var opt = this.options;
    var games = opt.games,game;
    while(games.length)this._setGame(games.shift());
    this.emit(adv.ENUM.EVENTS.played);
  }
});