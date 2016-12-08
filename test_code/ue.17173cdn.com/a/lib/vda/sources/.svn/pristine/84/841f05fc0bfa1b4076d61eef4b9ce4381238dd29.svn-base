adv.AdBase.extend('AdNewgameMiniGame', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.base();
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    this.base();
    var opt = this.options, adNumber = opt.ads.length;
    if (adNumber > 0) {
      var replaceNumber = adNumber + $('.' + opt.advid).find('.gb-list2-item').length - 6;
      $('.'+this.options.advid+' .gb-list2-item:lt('+replaceNumber+')').remove();

      var html = '';
      for (var i = 0; i < adNumber; i++) {
        var adConfig = opt.ads[i];
        html += '<li class="gb-list2-item">\
                <a target="_blank" href="'+adConfig.link+'" class="gb-list2-con">\
                  <span class="gb-list2-c1"><img src="'+adConfig.source+'" alt="'+adConfig.title+'" class="avatar"></span>\
                  <span class="gb-list2-c2"><span class="txt">'+adConfig.title+'</span></span>\
                </a>\
              </li>';
      }
      $('.'+this.options.advid+' .game-list1').prepend(html);
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});