(function(){
  function SlideToggleAd(data,advid) {
    this.parent = $('.' + advid);
    this.parent.text('');
    this.data = data;
    this.wrap = null;
    this.ul = null;
    this.swfs = [];
    
    this.swfContent = {};
    this.template();
    this.render();
    this.initAnimate();
  }
  SlideToggleAd.prototype.template = function () {
    var html = [], data = this.data;
    this.pnin = $('<div class="pn-in"></div>');
    this.wrap = $('<div class="ad-con"></div>');
    this.innerWrap = $('<div class="ad-thumb-list"></div>');
    for (var i = 0, len = data.length; i < len; i++) {
      var dataI = data[i];
      html.push('<div class="item-container" style="width:255px" data-index="' + i + '">');
      html.push('<div class="item" style="width:235px">');
      html.push('   <p class="img-box">');
      html.push('      <a href="' + dataI.url + '" target="_blank"><img width="235" height="130" alt="' + dataI.title + '" src="' + dataI.smallImg + '" class="avatar" style="width:235px" /></a>');
      html.push('   </p>');
      html.push('   <p class="txt-box">');
      html.push('      <a href="' + dataI.url + '" target="_blank">' + dataI.title + '</a>');
      html.push('          <span class="sep">|</span>');
      html.push('      <a href="' + dataI.url + '" target="_blank">\u5b98\u7f51</a>');
      html.push('   </p>');
      html.push('</div>');
      var id = 'slideToggleAdPosition' + i;
      html.push('<div class="ad-detail" id="' + id + '" style="top: 0; right: 0;height:130px;" >');
      if (~dataI.bigImg.indexOf('swf')) {
        var flashContent = new sohuFlash(dataI.bigImg, "flashContent", 745, 130, "7");
        flashContent.addParam("quality", "high");
        flashContent.addParam("wmode", "opaque");
        flashContent.addVariable("clickthru", dataI.url);
        this.swfs.push(id);
        this.swfContent[id] = flashContent;
      }
      else {
        html.push('    <a href="' + dataI.url + '" target="_blank"><img src="' + dataI.bigImg + '" alt="' + dataI.title + '" width="745" height="130" /></a>');
      }
      html.push('</div>');
      html.push('</div>');
    }
    this.innerWrap.append(html.join(''));
  };
  SlideToggleAd.prototype.initAnimate = function () {
    var me = this, aniTime = 700, easin = null;
    var isIE = !!window.ActiveXObject;
    var isIE6 = isIE && !window.XMLHttpRequest;
    this.innerWrap.find('.item-container').hover(function () {
      var innerWrap = $(this);
      var targetMarginLeft = innerWrap.attr('data-index') * 255;
      var currentMarginLeft = parseInt(me.innerWrap.css('margin-left'));
      innerWrap.stop().animate({
        width: 1000
      }, aniTime, easin);
      var animateObj = { width: 745 };
      if (!isIE6) animateObj.opacity = 1;
      innerWrap.find('.ad-detail').stop().animate(animateObj, aniTime, easin);
      if (targetMarginLeft != currentMarginLeft) {
        me.innerWrap.stop().animate({
          'margin-left': -targetMarginLeft
        }, aniTime, easin);
      }
    }, function () {
      var innerWrap = $(this);
      me.innerWrap.stop().animate({
        'margin-left': 0
      }, aniTime, easin);
      var animateObj = { width: 0 };
      if (!isIE6) animateObj.opacity = 0.2;
      innerWrap.find('.ad-detail').stop().animate(animateObj, aniTime, easin);
      innerWrap.stop().animate({
        width: 255
      }, aniTime, easin);
    });
  };
  SlideToggleAd.prototype.render = function () {
    this.wrap.append(this.innerWrap);
    this.pnin.append(this.wrap);
    this.parent.append(this.pnin);
    var ipaCodes = [
      '5ee85520328d0d9c9aa58f6fa4f9a4bc',
      'b57756bd975da9d690debfe0a0939f2f',
      '0f7038ba0b0174e0e38e688a184fae4b',
      'f79575cfb85141e72249c370b8430576'
		];
    this.innerWrap.find('.item-container').each(function(i,n){
    	adv.util.sendIpa($(this),ipaCodes[i],true);
    });
    for (var i = 0; i < this.swfs.length; i++) {
      this.swfContent[this.swfs[i]].write(this.swfs[i]);
    }
  };
  adv.AdBase.extend('AdYeyouSlideToggle', {
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
      new SlideToggleAd(this.options.ads,this.options.advid);
      this.emit(adv.ENUM.EVENTS.played);
    }
  });
})();