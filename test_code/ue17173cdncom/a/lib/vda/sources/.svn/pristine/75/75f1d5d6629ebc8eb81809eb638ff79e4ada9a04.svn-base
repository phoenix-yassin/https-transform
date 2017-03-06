(function($) {
  adv.AdBase.extend('AdHaoFinalKaiyuan', {
    init: function(options) {
      this.base(options);
      this.elem = $('.' + options.advid);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function() {
      var opt = this.options;
      opt.cssString = '.gb-marketing-pro-arrow{ width: 15px; height: 7px; background: url(http://ue.17173cdn.com/a/news/final/2014/img/arrow.gif) no-repeat 0 0; display: inline-block; vertical-align: middle; margin:0 0 2px 5px;}#gb_markteing_pro_link{ color:#ff0000;}';
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function() {
      var opt = this.options;
      if (opt.ads && opt.ads.length > 0) {
        var gameName = haoConfig.gameName;

        for (var i = 0, a; i < opt.ads.length; i++) {
          a = opt.ads[i];
          if (a.keyword == gameName) {
            //dom
            var tmpl = function() {/*@preserve
              <b class="gray">官网：</b><a href="@link" class="red" target="_blank">进入官网<i class="gb-marketing-pro-arrow"></i></a>
            */};
            opt.html = adv.razor(tmpl, a);

            this.elem.html(opt.html);
            adv.$.appendStyle(opt.cssString);

            if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0") {
               this.elem.find('.gb-marketing-pro-arrow').css({
                margin: '7px 0 3px 5px'
              });
            } else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
              this.elem.find('.gb-marketing-pro-arrow').css({
                margin: '2px 0 1px 5px'
              });
            }
            break;
          }
        }
        this.emit(adv.ENUM.EVENTS.played);
      }
    }
  });
})(jQuery);