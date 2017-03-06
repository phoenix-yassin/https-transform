(function($) {
  if ($!==jQuery) return;
  adv.AdBase.extend('Ad17173GamerHead', {
    init: function(options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function() {
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function() {
      var result = "";
      if (this.options.ads[0].src) {
        result += '<a target="_blank" href=' + this.options.ads[0].link + '>';
        result += '<img src =' + this.options.ads[0].src + '>';
        result += '</a>';
        $('.' + this.options.advid).html(result).show();
        $(".Ad17173GamerHead").css({
          "position": "absolute",
          "left": "190px",
          "top": "10px"
        });

        if( $('.' + this.options.advid).length) {
          this.emit(adv.ENUM.EVENTS.played);
        }
      }
    }
  });
})(jQuery);