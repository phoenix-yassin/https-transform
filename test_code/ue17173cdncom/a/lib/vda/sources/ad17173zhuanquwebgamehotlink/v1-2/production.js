adv.AdBase.extend('Ad17173ZhuanquWebGameHotLink', {
  init: function(options) {
    this.base(options);
    this.exposure = true;
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  _setTooltip:function(link,game){
      link.addClass('link-tg-yy');
      link.attr('href',game.link);
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
      if(this.data.adskey){
      	adv.util.sendIpa(link,this.data.adskey,this.exposure);
        this.exposure = false;
      }
  },
  _setGame:function(advEl,game){
    var me  = this;
    var liIndex = Math.ceil(game.index / 3) - 1,
        linkIndex = (game.index - 1) % 3;
    var link = advEl.find('li:eq('+ liIndex +')').find('.con a:eq('+ linkIndex +')');
    var desc = link.find('span').text();
    link.html(adv.razor('<em class="tg-bg-red">@name</em><span class="detail">@desc</span>',{name:game.name,desc:desc}));
    me._setTooltip(link,game);
  },
  play: function() {
    var opt = this.options,me = this;
    var games = this.data.games,game;
    var advEl = $('.' + opt.advid);
    if(advEl[0]){
    	while(games.length)me._setGame(advEl,games.shift());
    }
    else{
        $(document.body).bind('appendHtml', function (e, targetEl) {
          advEl = $(targetEl).find('.' + opt.advid);
          if(advEl[0]){
            while(games.length)me._setGame(advEl,games.shift());
          }
        });
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});