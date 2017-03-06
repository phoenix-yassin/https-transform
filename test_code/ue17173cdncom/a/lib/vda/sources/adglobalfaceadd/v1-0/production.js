
(function(){
  adv.AdBase.extend('AdGlobalFaceAdd', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    var self = this;
    self.data = data;


    pandora.on('RENDER_ATTITUDE', function(attitude){
      attitude.setBusinessFace({
        title : self.data.title,
         url : self.data.url,
         faces : self.data.faces
      });
    }, true);
    this.emit(adv.ENUM.EVENTS.setuped);

  },
  play: function() {
      var me = this;
      
      this.emit(adv.ENUM.EVENTS.played);

    }
  });
})();

