
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
         <a href="@link" target="_blank"  style="position:absolute; left:-460px; top:0; height:300px; text-align:center; overflow:hidden;background:url(@source) center top">
           </a>
      */}

      this.html = $(adv.razor(tmplFn,{link: data.link, source: data.source}));
      this.emit(adv.ENUM.EVENTS.setuped);

    },
    
   // <img src="@source"  width="1920" height="300"/>
    play: function() {
      var me = this;
      $('.'+me.options.advid).html(me.html)
      $('.'+me.options.advid).css({'position':'relative', height:'300px', 'zoom':1});



      if($(window).width() <1024) {
        $('.'+me.options.advid).css({'overflow':'hidden'});
      } 

      if($(window).width() >1060) {
        var width2 = $(window).width();
        $('body').css({'overflow-x': 'hidden'});
         $('.'+me.options.advid).find('a').css({
               'width': width2 ,'left': -(width2-1000)/2
        });


      }
 
      $(window).resize(function() {
        var width1  = $(window).width();
         if($(window).width() <1024) {
            $('.'+me.options.advid).css({'overflow':'hidden'});
         }  else {
             $('.'+me.options.advid).css({'overflow':'visible'});
         }

         

         if($(window).width() > 1060) {
            $('body').css({'overflow-x': 'hidden', 'width':width1})
             $('.'+me.options.advid).find('a').css({
              'width': width1  ,'left': -(width1-1000)/2
            });
          } else if($(window).width() > 1024 && $(window).width() < 1060 ){
            $('.'+me.options.advid).find('a').css({width: '1060px','left':  -(width1-1000) })
            $('body').css({'width': '1060px','overflow-x': 'visible'})

          } else {
            $('.'+me.options.advid).find('a').css({width: '1000px','left': 0 })

          }

      })
      adv.util.sendIpa( $('.'+me.options.advid),  me.data.adskey, true);   //开服活动

      me.emit(adv.ENUM.EVENTS.played);

      }
  });

})();