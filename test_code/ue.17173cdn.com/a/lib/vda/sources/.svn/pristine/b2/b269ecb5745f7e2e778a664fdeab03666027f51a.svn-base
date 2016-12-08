adv.AdBase.extend('AdNewsFinalText', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },

  setup: function () {
    this.base();
    var opt = this.options;

    if(opt.link) {
      this.html1  = '<a href="' + opt.link + '" target="_blank" class="newsfinaltextshow" style="padding:0 3px" data-index='+opt.index+'><font color="'+opt.color+'">' + opt.text + '</font></a>'
    }
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    if(this.options.text ){
        if($('.' + this.options.advid).find('.newsfinaltextshow').length > 0  ) {
          if(this.options.index > $('.' + this.options.advid).find('.newsfinaltextshow').data('index')) {
            $('.' + this.options.advid).append(this.html1).show();
          } else {
            $('.' + this.options.advid).prepend(this.html1).show();
          }
        } else {
          $('.' + this.options.advid).text('').append(this.html1).show();
        }
      }
   
    this.emit(adv.ENUM.EVENTS.played);
  }
});