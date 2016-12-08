adv.AdBase.extend('Ad17173Album', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function() {
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function() {
    var opt = this.options.ads[0];
    var result="";
    result +='<a target="_blank" href='+opt.link+'>';
    result +='<img src ='+this.options.ads[0].src+'>';
    result +='</a>';
    $('.' + this.options.advid).append(result).show();
    if(opt.show==="false"){
      $(".Ad17173People").hide();
    }else{
      $(".Ad17173People").show();
    }
  }
});