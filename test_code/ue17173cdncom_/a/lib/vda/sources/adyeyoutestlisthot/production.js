//adyeyoutestlisthot
/*by mingjihuang@cyou-inc.com 2014-07-21 17:16:20 v1.0.3beta*/
adv.AdBase.extend('AdYeyouTestlistHot', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    var datas = this.options.datas;
    var container = $('.adsystem-mark').filter('[data-ad-type="AdYeyouTestlistHot"]');
    adv.util.forEach(datas, function (data) {
      var link = container.find('a:contains(' + data.name + ')');
      link.attr('href', data.url).after('<img src="//

ue1.yeyou.itc.cn/images/www/2012/s-hot-pic.gif" style="vertical-align:middle; margin-bottom:8px; *margin:7px 0 15px 0;" />');
    });
    this.emit(adv.ENUM.EVENTS.played);
  }
});
