adv.AdBase.extend('AdYeyouInfoBlockBanner', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  showHtml: function(src, width, height,link) {
    if(src.indexOf('.swf') != -1) {
     return '<embed type="application/x-shockwave-flash" width="'+width+'" height="'+height+'"  quality="high" wmode="opaque" src="' + src + '" />';

    } else {
        return  '<a href="' + link + '" target="_blank" style="width:'+width+'px" ><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>';
    }
  },
  setup: function () {
    this.base();
    var self = this;
    self.pic = self.showHtml(this.options.src, this.options.width, this.options.height, this.options.link)

    self.html = '<li class="list-item list-item-ex">'+
                  '<div class="art-item-c1">'+
                    '<div class="cate"><a href="'+this.options.link+'" target="_blank">品牌宣传<i></i></a></div>'+
                    '<h3 class="tit"><a href="'+this.options.link+'" target="_blank">'+this.options.title+'</a></h3>'+
                  '</div>'+
                  '<div class="art-item-c2">'+
                    '<div class="avatar">'+ self.pic +'</div>'+
                  '</div>'+
                '</li>';
   
    
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
   
    $('.' + this.options.advid).find('.comm-ptlist li').eq(0).after(this.html);
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
  
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});