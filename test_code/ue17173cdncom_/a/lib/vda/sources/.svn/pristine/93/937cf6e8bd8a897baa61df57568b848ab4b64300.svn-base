adv.AdBase.extend('AdHaoFinalTopbg', {
  init: function (options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },

  showHtml: function(val) {
    


  },
  setup: function () {
    this.base();
    var self = this;
    var b, c, d,advTit = $('.lb-state .tit').text() || $('h2 .c-tx1').text();
    var advEls  =$('.' + self.options.advid);
    $.each(this.options.datas, function(index, val) {
      for(var i = 0 ; i < val.keywords.length; i++) {
         if(advTit.indexOf(val.keywords[i]) >= 0){
            $('body').css({
              background: '#fff'
            });
            advEls.eq(0).css({
              'background': 'url('+val.bgSrc+') center top no-repeat'
            });
              b = ($(window).width() - val.topWidth) / 2,
              c = $('<a class="topBackgroundAdv_bgbody" href="' +val.bgBodyLink + '" target="_blank"></a>');
              c.css({
                position: "absolute",
                top: 45,
                left: 0,
                display: "block",
                width: b,
                height: val.bgBodyHeight
              });
              var d = c.clone();
               d.css({
                "right":0,
                "left":'auto'
              }),
                $(document.body).css({
                  "overflow-x": "hidden"
              }),
              c.add(d).appendTo(advEls.eq(1));
              $('head').append('<style>.AdTopBarDragShow{display:none}</style>')

             
         } 
         $(window).bind("resize.bgad", function() {
          b = ($(window).width() - val.topWidth) / 2 ;
          c.width(b);
          d.width(b)

        });

      }
     
       


    });

   
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    this.base();
     var self = this;
    
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
});