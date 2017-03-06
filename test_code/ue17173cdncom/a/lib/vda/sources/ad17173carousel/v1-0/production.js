adv.AdBase.extend('Ad17173Carousel', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data || this.options;
    if (this.data.items.length == 2) {
      var tmpl = function() {/*@preserve
        <div class="slide-wrap slide-tg-avatar ue-slide-pad" data-ui-toggle="3" data-ui-index="@initIndex">
          <div class="slide-con">
            <ul class="slide-list" data-ui-mark="panel">
              @for(var i = 0; i < items.length; i++) {
                <li data-ui-mark="item">
                  <a href="@items[i].link" target="_blank" class="con" style="background-image:url(@items[i].image)"></a>
                </li>
              }
            </ul>
          </div>
          <div class="slide-nav" data-ui-mark="nav"></div>
          <a href="javascript:;" class="slide-btn slide-btn-prev" data-ui-mark="prev"><i class="ico ico-prev">上一页</i><b class="mask"></b></a>
          <a href="javascript:;" class="slide-btn slide-btn-next" data-ui-mark="next"><i class="ico ico-next">下一页</i><b class="mask"></b></a>
        </div>
      */};
      this.data.advid = this.options.advid;
      this.data.initIndex = Math.floor(Math.random() * this.data.items.length);
      this.data.html = adv.razor(tmpl, this.data);
      this.emit(adv.ENUM.EVENTS.setuped);
    }
  },
  play: function() {
    var self = this;
    var $container = $('.'+this.data.advid);
    self.preloadNum = 0;
    self.preloadImage(function() {
      $container.empty().append(self.data.html).show();
      self.slide = new ue.SlidePad($container.find('.slide-tg-avatar'));
      self.data.items[0].adskey && adv.util.sendIpa($container.find('li:eq(0)'),self.data.items[0].adskey,true);
      self.data.items[1].adskey && adv.util.sendIpa($container.find('li:eq(1)'),self.data.items[1].adskey,true);
      self.data.items[0].adskey && adv.util.sendIpa($container.find('li:eq(2)'),self.data.items[0].adskey,false);
      self.data.items[1].adskey && adv.util.sendIpa($container.find('li:eq(3)'),self.data.items[1].adskey,false);
      self.data.items[0].adskey && adv.util.sendIpa($container.find('li:eq(4)'),self.data.items[0].adskey,false);
      self.data.items[1].adskey && adv.util.sendIpa($container.find('li:eq(5)'),self.data.items[1].adskey,false);
      self.onResizehandler();
      var timer = null;
      $(window).on('resize', function() {
        if (!!timer) {
          return;
        }
        timer = setTimeout(function() {
          self.onResizehandler();
          clearTimeout(timer);
          timer = null;
        }, 100);
      });
      self.emit(adv.ENUM.EVENTS.played);
    });
  },
  preloadImage: function(callback) {
    var self = this;
    var $img = $(new Image());
    $img.load(function() {
      self.preloadNum++;
      if (self.data.items.length > self.preloadNum) {
        self.preloadImage(callback);
      } else {
        callback();
      }
    });
    var src = this.data.items[self.preloadNum].image;
    $img.attr('src', src);
  },
  onResizehandler: function() {
    $('.'+this.data.advid).find('li').css({
      'width': $('body').width() + 'px'
    });
    if ($('body').width() > $(window).width()) {
      this.slide.mark.prev.css({ 'margin-left': '0px', 'left': '50px'});
      this.slide.mark.next.css({'margin-right': '0px', 'right': '50px'});
    } else {
      this.slide.mark.prev.css({ 'margin-left': '-576px', 'left': '50%'});
      this.slide.mark.next.css({'margin-right': '-576px', 'right': '50%'});
    }
    this.slide.calcSize();
    this.slide.mark.panel.stop();
    this.slide.resetPosition();
    this.slide.toggling = false;
  }
});