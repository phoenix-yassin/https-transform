adv.AdBase.extend('AdYeyouIndexHotGameMark', {
  init: function (options) {
  this.base(options);
  this.container =$('.' + this.options.advid);
  this.emit(adv.ENUM.EVENTS.inited);
  },
 
  setup: function () {
    this.base();
    var self = this;

    $.each(this.options.datas, function(index, val) {
      self.container.find('a').each(function(){
        if($(this).find('.c1').text() == val.name ) {
          $(this).parents('li').addClass('hot');       
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