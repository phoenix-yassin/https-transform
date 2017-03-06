
(function() {


   function isMobile() {
      var userAgentInfo = navigator.userAgent;  
      var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
      var flag = false;  
      for (var v = 0; v < Agents.length; v++) {  
         if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }  
      }
      return flag;  
    }
    adv.AdBase.extend('AdYeyouBannerAd3', {
     init: function(options) {
      this.base(options);


     if(isMobile()) {
        return false;
      }

      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function(data) {
      var me = this;
      me.data = data;
      var tmplFn = function(){/*@preserve
         <div style=" width:100%; height:0"></div><a  class="link" style="background:url(@source) center top; position:absolute; left:0; width:100%;     height:300px;"  href="@link" target="_blank" ></a>
         <a style="widht:100%; height:300px; display:block" href="@link" target="_blank" class="link1"></a>  

      */}

      this.html = $(adv.razor(tmplFn,{link: data.link, source: data.source}));
      this.emit(adv.ENUM.EVENTS.setuped);

    },
    
    play: function() {
      var me = this;
      $('.'+me.options.advid).html(me.html)
      $('.'+me.options.advid).css({ height:'300px', 'zoom':1});

      var browser=navigator.appName 
      var b_version=navigator.appVersion 
      var version=b_version.split(";"); 
      var trim_Version=version[1].replace(/[ ]/g,""); 
      if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") { 

        $('head').append('<style>.adYeyouBannerAd3 .link{ left:auto!important}</style>')
      }

        $(window).resize(function() {
         if($(window).width() <1024) {
            $('.'+me.options.advid).css({'position':'relative'});
         }  else {
             $('.'+me.options.advid).css({'position':'static'});
         }
       })


      me.emit(adv.ENUM.EVENTS.played);

      }
  });

})();