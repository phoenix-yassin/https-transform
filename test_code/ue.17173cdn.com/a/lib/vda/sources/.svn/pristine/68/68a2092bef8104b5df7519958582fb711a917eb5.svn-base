adv.AdBase.extend('AdYeyouHotGameMark', {
  init: function (options) {
  this.base(options);
  this.container = $('.adsystem-mark').filter('[data-ad-type=AdYeyouHotGameMark]');
    this.emit(adv.ENUM.EVENTS.inited);
  },
 
  setup: function () {
    this.base();
    var self = this;

    $.each(this.options.datas, function(index, val) {
      self.container.find('a').each(function(){
        if($(this).text() ==val.name ) {
          $(this).append('<b class="cover" style="position:absolute; top:-6px; left:0; background:#ff4800;width:100%; _width:'+(12*val.name.length+24)+'px;   height:24px; z-index:-1"></b>');
          $(this).css({'position':'relative','color':'#fff', 'z-index':2,'font-weight':'bold'});
          $(this).attr({'href': val.url});
        }
      });        
    });
    
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
   
    
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
  
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});


