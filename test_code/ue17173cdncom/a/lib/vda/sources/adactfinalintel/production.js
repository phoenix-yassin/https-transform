adv.AdBase.extend('AdActFinalIntel', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
  
  var tmplFn = function(){/*@preserve
        <div class="AdActFinalIntel"> 
          <div class="adactfinalintel-box">
            <a class="adactfinalclose" href="javascript:;" >x</a>
            <a  class="imgbigshow" target="_blank" href="@link"> <img src="@source" alt="" width="300" height="300" /></a>
          </div>
          <a  class="imgminishow"   href="javascript:;"><img src="@hsw" alt="" width="35" height="35" /></a>
          </div>
    */}

     this.css  = '<style>.AdActFinalIntel{ position: fixed; right: 0px; bottom: 0px ; width: 300px; height: 300px;  }'+
          '.adactfinalclose{position: absolute; right: 0; top: 0; color: #fff; font-size: 24px;}'+
          '.imgminishow{display: none; width: 35px; height: 35px;}</style>';
    
   
     this.html = adv.razor(tmplFn,{link: data.link, source: data.source, hsw: data.hsw});
     this.emit(adv.ENUM.EVENTS.setuped);
      
  },

  play: function() {
  var me = this;
  var browser=navigator.appName 
  var b_version=navigator.appVersion 
  var version=b_version.split(";"); 
  if(version[1]) {
      var trim_Version = version[1].replace(/[ ]/g,""); 

  }

  me.css1 = '<style>.AdActFinalIntel{ right: 0px;  width: 300px; height: 300px; position: absolute;bottom:auto; top:400px;} </style>';
    setTimeout(function(){
        if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") {
        $('body').append(me.css1);
        }
        $('body').append(me.css)

        $('body').append(me.html)

        me.emit(adv.ENUM.EVENTS.played);

    }, 30000)
    $('body').on('click', '.adactfinalclose', function(){
      $('.adactfinalintel-box').fadeOut()
      $('.AdActFinalIntel .imgminishow').fadeIn();

    })

    $('body').on('click', '.imgminishow', function(){

      $('.adactfinalintel-box').fadeIn()
      $('.AdActFinalIntel .imgminishow').fadeOut(); 
    })

 

  } 
});