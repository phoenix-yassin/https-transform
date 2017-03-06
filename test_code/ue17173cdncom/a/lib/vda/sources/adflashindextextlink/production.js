adv.AdBase.extend('AdFlashIndexTextLink', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },

  setup: function () {
    this.base();

    var opt = this.options;

    if(opt.link) {
      this.html  = '<a href="' + opt.link + '" target="_blank" title="' + opt.text + '"  class="flashindextextshow" data-index='+opt.index+' style="color:'+opt.color+';">' + opt.text + '</a>'
    }
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();


    if(this.options.link){
      if($('.' + this.options.advid).find('.flashindextextshow').length > 0) {
         if(this.options.index > $('.' + this.options.advid).find('.flashindextextshow').data('index')) {
             $('.' + this.options.advid).append(this.html).show();
          } else {
             $('.' + this.options.advid).prepend(this.html).show();
          }
      } else {
        $('.' + this.options.advid).text('').append(this.html).show();
      }
    }
    if($('.' + this.options.advid).find('.flashindextextshow').length > 1) {
      $('.flashindextextshow').eq(0).after('|')
    }
    this.emit(adv.ENUM.EVENTS.played);
  }
});