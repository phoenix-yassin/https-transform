adv.AdBase.extend('AdYeyouIndexHotGameMark', {
  init: function (options) {
  this.base(options);
  this.container =$('.' + this.options.advid);
  this.emit(adv.ENUM.EVENTS.inited);
  },
 
  setup: function () {
    this.base();
    var self = this;
		var ipaCodes = [
      'ea04c5d54bb9373c03f2fd67fa6bc202',
      '7ccd3c69fc0f138bafac666eef7f294b',
      '3bc4ea66c2228a40715708c26d469368'
    ];
    $.each(this.options.datas, function(index, val) {
      self.container.find('a').each(function(){
        if($(this).find('.c1').text() == val.name ) {
          $(this).parents('li').addClass('hot');
          $(this).attr({'href': val.url});
          adv.util.sendIpa($(this),ipaCodes[index],true);
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