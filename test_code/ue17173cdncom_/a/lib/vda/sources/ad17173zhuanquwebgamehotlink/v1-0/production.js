/*

advConfigs.config({
  type: 'Ad17173ZhuanquWebGameHotLink',
  advid:'ad17173ZhuanquWebGameHotLink1',
  version:'v1.0.001',
  games:[{
    name:'流亡黯道', //游戏名称
    index:1,
    desc:'哎呦不错这个叼',//广告文本,
    link:'//

www.17173.com' //广告链接
  }]
});
*/
adv.AdBase.extend('Ad17173ZhuanquWebGameHotLink', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    var self = this,
        opt = this.options;
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
  },
  _setGame:function(advEl,game){
    var me  = this;
    var liIndex = Math.ceil(game.index / 3) - 1,
        linkIndex = (game.index - 1) % 3;
    var link = advEl.find('li:eq('+ liIndex +')').find('.link:eq('+ linkIndex +')');
    var desc = link.find('span').text();
    link.html(adv.razor('<span class="link-tg">@name</span><span class="detail">@desc</span>',{name:game.name,desc:desc}));
    me._setTooltip(link,game);
  },
  play: function() {
    var opt = this.options,me = this;
    var games = opt.ads,game;
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