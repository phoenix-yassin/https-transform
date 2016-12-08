(function() {

  adv.AdBase.extend('AdYeyouIndexGameRank', {
    init: function(options) {
      this.base(options);
      this.options = options;
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function(data) {
      var me = this;
      this.data = data;

      var tmplFn = function() {
        /*@preserve
                <tr class="@viewType">
                  <td colspan="4" class="mod-tg">
                    <a href="@link" target="_blank" class="in">
                      <span class="go" >进入游戏&nbsp;&raquo;</span>
                      <span class="tip"><i class="ico-recomm"></i></span>
                      <span class="tit" @if(redMark){ style="color:red" } >@gameName</span>
                      <img src="@source" alt="" width="310" height="100"/>
                    </a>
                  </td>
                </tr>


              */
      }

      this.html = $(adv.razor(tmplFn,{link: data.link, source: data.source, gameName: data.gameName, viewType: me.options.advid, redMark:data.redMark}));
      this.emit(adv.ENUM.EVENTS.setuped);

    },

    play: function() {
      var me = this;


      var browser = navigator.appName
      var b_version = navigator.appVersion
      var version = b_version.split(";");
      var trim_Version = version[1].replace(/[ ]/g, "");


      if (me.data.viewType == 'news') {
        setTimeout(function(){
          $('#modulelink4 .first').after(me.html)
          $('#modulelink4 tr:gt(11)').hide();
          me.emit(adv.ENUM.EVENTS.played);
        },300)
        
      } else {
         setTimeout(function(){
          $('#modulelink3 .first').after(me.html);
          $('#modulelink3 tr:gt(11)').hide();
          me.emit(adv.ENUM.EVENTS.played);
        },300)
      }




    }
  });

})();