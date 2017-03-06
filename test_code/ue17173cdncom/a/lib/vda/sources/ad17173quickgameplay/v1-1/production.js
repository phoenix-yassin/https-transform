/*
advConfigs.config({
  type: 'Ad17173QuickGamePlay',
  advid:'Ad17173YeyouQuickLink',
  version:'v1.1.001',
  ads:[{
    index:1,
    name:'风暴阿雄1',//游戏名称
    isMobile:true,//是否手游 true=是,false=否
    link:'//www.17173com10087'//广告链接
  },{
    index:2,
    name:'风暴阿雄2',
    link:'//www.17173com10087'
  },{
    index:3,
    name:'天堂小明',
    link:'//www.17173com10087'
  },{
    index:4,
    name:'风暴阿雄3',
    link:'//www.17173com10087'
  },{
    index:5,
    name:'风暴阿雄4',
    link:'//www.17173com10087'
  }]
});
*/
adv.AdBase.extend('Ad17173QuickGamePlay', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var advEl = $('.' + this.options.advid),
        ads = this.options.ads,
        ad,link;
    advEl.find('.tit').text('快速玩游戏：');
    for(var i = 0 ;i< ads.length;i++){
      ad = ads[i];
      link = advEl.find('a:eq('+(ad.index-1)+')');
      if(link[0]){
      	link.attr('href',ad.link).text(ad.name);
      }
      else{
        link = $(adv.razor('<a href="@link" target="_blank" class="link">@name</a>',ad));
        advEl.append(link);
      }
      i === 0 && link.css('font-weight','bold');
     	if(ad.isMobile) {
        for(var j = 0;j<ads.length;j++){
          if(i != j && ads[j].name == ad.name){
            link.css('text-decoration', 'underline');
          }
        }
      }
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});