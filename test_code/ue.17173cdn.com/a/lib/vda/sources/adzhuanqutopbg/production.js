adv.AdBase.extend('AdZhuanquTopBg', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    this.contentWidth = $(this.options.contentClass).width();
    this.screenWidth = $('body').width();
    this.topClass = $(this.options.topBgClass);
    this.gapWidth = (this.screenWidth - this.contentWidth)/2;
    this.style ='<style>.menu li.menu10 ,.menu li.menu10 a{width :126px;} .menu li,.menu li a{ width:108px; color:#fffac5}.menu .menu07,.menu .menu07 a{ width:128px;} .link-box{ width:100%; position:absolute; left:0; top:45px;}.top-link1, .top-link3{position:absolute; left:0; top:0; height:'+this.options.topBgHeight+'px; width:'+this.gapWidth+'px }.top-link3{ right:0; left:auto}.top-link2{ width:100%; height:'+this.options.topHeight+'px; position:absolute; left:0; top:0; z-index:2  }</style>';
    this.topClass.addClass('adsystem-mark').attr({
      "data-ad-type": 'AdZhuanquTopBg',
      "data-ad-name": 'topBg'
    });
    this.classname = this.options.navIconClass;
    if(typeof this.options.navIconSrc != 'undefined') {
      this.classname = this.options.navIconClass;
      this.navHtml = $('<li class="adsystem-mark '+this.options.navClass+' menu10" data-ad-type="AdZhuanquTopBg" data-ad-name="navIcon"><a href="'+this.options.navIconLink+'" target="_blank" title="" style="color:#fecb32"><img src="'+this.options.navIconSrc+'"  width="'+this.options.navIconWidth+'" height="'+this.options.navIconHeight+'" class="png" style="float: left;  margin: 17px 0 0 6px;" /> '+this.options.navIconText+'</a></li>');
      this.navHtml.insertBefore(this.classname);
      $('head').append(this.style);
    }
    if(typeof this.options.topBgImg != 'undefined'  &&  this.options.topBgImg.length > 0) {
      this.link='<div class="link-box"><a href="'+this.options.topBgLink+'" target="_blank" class="top-link1"></a><a href="'+this.options.topBgLink+'" target="_blank" class="top-link2"></a><a href="'+this.options.topBgLink+'" target="_blank" class="top-link3"></a></div>';
      this.topClass.css({ "background": "url("+this.options.topBgImg+") no-repeat  top center" }); 
    }
     this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    var self = this;
    if(typeof this.options.topBgImg != 'undefined' && this.options.topBgImg.length > 0) {
      this.topClass.css({ "background": "url("+this.options.topBgImg+") no-repeat  top center" }); 
      $(window).resize(function(){
         self.screenWidth = $('body').width();
         self.gapWidth = (self.screenWidth - self.contentWidth)/2;
         $('.top-link1').css({width: self.gapWidth});
     	   $('.top-link3').css({width: self.gapWidth});
      });
      $('body').prepend(this.link);
    }
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});