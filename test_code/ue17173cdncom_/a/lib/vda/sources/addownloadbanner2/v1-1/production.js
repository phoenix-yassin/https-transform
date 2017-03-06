(function(){
  var  jsonpGet = function (url, callback) {
    var funId = 'advjsonp' + new Date() * 1 +Math.floor(Math.random()*10000);
    window[funId] = callback;
    url+="&callback="+funId;
    var jsEl = document.createElement('script');
    jsEl.src = url;
    document.getElementsByTagName('head')[0].appendChild(jsEl);
  };

  adv.AdBase.extend('AdDownloadBanner2', {
    init: function (options) {
      var me = this;
      this.base(options);
      adv.net.proxy('//

ac.o2.qq.com/php/show.php',{
        v:1,
        loc_id:'823_27822f4cbae6337ab923316cc5f7fec0',
        data_type:'json'
      },function(result){
        if(result.data){
          me.o2Option = result.data;
          me.emit(adv.ENUM.EVENTS.inited);
        }
      });
    },
    setup: function () {
    var _self = this;
      this.base();
      var adConfig = this.options.adConfig;
      adConfig.height = adConfig.height || 'auto';
      adConfig.width = adConfig.width || 'auto';

    var _html = '';
    if(_self.o2Option.res_url.indexOf('.swf') >= 0) {
          _html = '<a target="_blank" href="'+ _self.o2Option.link_to +'" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;display: block;background:#fff; opacity:0; filter:alpha(opacity=0)"></a>' +  adv.flash.embed({
           source: _self.o2Option.res_url,
           width: adConfig.width,
           height: adConfig.height
         }).outerHtml();
/*      	adv.$('.' +_self.options.advid).on('mouseup',function(){
          window.open(_self.o2Option.link_to)
        })*/
    } else {
      _html = '<a href="' + _self.o2Option.link_to + '" data-adskey="' + adConfig.code + '" target="_blank"><img src="' + _self.o2Option.res_url + '" border="0" height="' + adConfig.height + '" width="' + adConfig.width + '"></a>';
    }

      this.html =  _html;
      this.emit(adv.ENUM.EVENTS.setuped);
    },
    _hitRequest: function (adskey, href) {
      if(adskey && typeof _jc_pingjs === 'function') {
      _jc_pingjs('block',{ads: adskey, u: encodeURIComponent(href)});
      }
    },
    play: function () {
      var _self = this;
      this.base();

      adv.$('.' +this.options.advid).css('position','relative').css("height","100%").html(this.html);

  //	adv.$('.' +this.options.advid).find('a').on('click', function() {
  //		var $link = adv.$(this);
  //		$link.attr('data-adskey')&& _self._hitRequest($link.attr('data-adskey'), $link.attr('href'));
  //	});

      this.emit(adv.ENUM.EVENTS.played);
    },
    stop: function () {
      this.base();
      this.emit(adv.ENUM.EVENTS.stoped);
    },
    dispose: function () {

    }
  });
})();