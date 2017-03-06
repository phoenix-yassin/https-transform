(function(){
  var  jsonpGet = function (url, callback) {
    var funId = 'advjsonp' + new Date() * 1 +Math.floor(Math.random()*10000);
    window[funId] = callback;
    url+="&callback="+funId;
    var jsEl = document.createElement('script');
    jsEl.src = url;
    document.getElementsByTagName('head')[0].appendChild(jsEl);
  };
  adv.AdBase.extend('AdDownloadFinalBanner2', {
    init: function(options) {
      var me = this;
      this.base(options);
      adv.net.proxy('//ac.o2.qq.com/php/show.php',{
        v:1,
        loc_id:'824_52e4baeacc1d3749fe2cce0f3b9e8610',
        data_type:'json'
      },function(result){
        if(result.data){
          me.o2Option = result.data;
          me.emit(adv.ENUM.EVENTS.inited);
        }
      });
    },
    showHtml: function(src, width, height,link) {
      var me = this,html;
      if (src.indexOf('.swf') >= 0) {
        html ='<a target="_blank" href="'+ link +'" style="position: absolute;top: 0;left: 0;width: 100%;height: 80px;display: block;background:#fff; opacity:0; filter:alpha(opacity=0)"></a>' +  adv.flash.embed({
          source: src,
          width: width,
          height: height
        }).outerHtml();
      	/*adv.$('.' + me.options.advid).on('mouseup',function(){
          window.open(link);
        })*/
      } else {
        html = '<a href="' + link + '" target="_blank"><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a>';
      }
      return html;
    },
    setup: function() {
      this.base();
      var self = this;
      var opts = this.options;
      self.html = this.showHtml(self.o2Option.res_url, opts.width, opts.height, self.o2Option.link_to);
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    play: function() {
      this.base();
      var self = this;
      adv.$('.' + self.options.advid).css('position','relative').css('padding','0').css("height",this.options.height + "px").html(self.html).show();
      this.emit(adv.ENUM.EVENTS.played);
    }
  });

})()