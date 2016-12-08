(function(){
  adv.AdBase.extend('AdNewgameTestTopbg', {
  init: function (options) {
    this.base(options);
    this.container =  $('.adsystem-mark').filter('[data-ad-type="AdNewGameTopBg"]');
    this.container2 =$('body');
    this.emit(adv.ENUM.EVENTS.inited);
    $('.ad-zhanneituiguang').hide();
    window.appZhanNeiTuiGuangOff = true;
  },
  setup: function () {
    this.base();
     var a = this,
     b = ($(window).width() - this.options.topWidth) / 2 - 450,
     e = ($(window).width()) / 2 - this.options.topWidth/2,
     c = this.options.link.length > 0 ? $('<a class="topBackgroundAdv_bgbody" href="' + this.options.link + '" target="_blank"></a>') :  $('<span class="topBackgroundAdv_bgbody"  ></span>');
     c.css({
        position: "absolute",
        top: 45,
        left: 0,
       "margin-left": b,
        display: "block",
        width: 450,
        height: this.options.bgBodyHeight
      });
      var d = c.clone();
     d.css({
        right: 0,
        left: "auto"
      });
      $(document.body).css({
        "overflow-x": "hidden"
      });
     c.add(d).appendTo(this.container2);
     if(this.options.link.length > 0) {
        this.topHref =$('<a class="topBackgroundAdv_bgtop" href="' + this.options.link + '" target="_blank"></a>');
     } else {

       this.topHref =$('<span class="topBackgroundAdv_bgtop"  ></span>');
     }
   
     this.topHref.css({
       position:"absolute",
       top:45,
       left:0,
       'z-index': 999,
       "margin-left": e,
       height: this.options.topHeight,
       width: this.options.topWidth
     });
     
     this.topHref.appendTo(this.container2);
     $(window).bind("resize.bgad", function() {
        b = ($(window).width() - a.options.topWidth) / 2 - 450;
        e = ($(window).width()) / 2 -a.options.topWidth/2;
        c.css("margin-left", b);
        d.css("margin-left", b + a.options.topWidth + 450);
        a.topHref.css('margin-left', e );
      });
   
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
    this.container.css("background", " url(" + this.options.source + ") no-repeat top center");
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});
  
  
  
})();