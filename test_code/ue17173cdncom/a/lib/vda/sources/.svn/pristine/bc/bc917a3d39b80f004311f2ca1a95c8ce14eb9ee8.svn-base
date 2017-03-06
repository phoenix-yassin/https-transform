(function() {
  adv.AdBase.extend('AdYeyouArtText', {
    init: function (options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function () {
      this.base();      
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function () {
      this.base();
      var opt = this.options;
      var p1 = 0,p2 = 27,aniSpeed = 1000,aniTime = opt.aniTime*1000;
      this.wrap = $('.' + opt.advid);
      this.wrap.find('.tag').text(opt.title.tit);
      this.wrap.css('position', 'relative');
      var link1 = this.wrap.find('.tit');
      link1.find('a').text(opt.ads[0].title).attr('href',opt.ads[0].link);
      link1.css({
        position: 'absolute',
        top:p1
      });
      var link2 = link1.clone();
      link2.find('a').text(opt.ads[1].title).attr('href', opt.ads[1].link);
      link2.css({
        position: 'absolute',
        top:p2
      });
      link1.after(link2);
      var tempLink1,tempLink2;
      var toggleLink = function () {
        setTimeout(function () {
          tempLink1 = link1, tempLink2 = link2;
          link1.animate({ top: -27 }, aniSpeed, function () {
            link1.css('top', p2);
            link1 = tempLink2;
          });
          link2.animate({ top: 0 }, aniSpeed, function () {
            link2 = tempLink1;
            toggleLink();
          });
        }, aniTime);
      };
      toggleLink();
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();