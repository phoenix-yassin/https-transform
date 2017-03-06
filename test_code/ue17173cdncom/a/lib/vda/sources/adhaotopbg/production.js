adv.AdBase.extend('AdHaoTopbg', {
  init: function (options) {
    this.base(options);
  
    this.emit(adv.ENUM.EVENTS.inited);
  },

  showHtml: function(val) {
    


  },
  setup: function () {
    this.base();
    var self = this;
    var b, c, d,advTit = $('.lb-state .tit').text()&&$('.lb-state .tit').text().split(' ')[0] || $('h2 .red').eq(0).text() || $('#gamename').text();
    var advEls  =$('.' + self.options.advid);
    $.each(this.options.datas, function(index, val) {
         if(advTit == val.keywords){
            shanwancss = '<style type="text/css">#jsSysw,.AdTopBarDragShow{display:none!important}</style>';
            $("body").append(shanwancss);
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
              });
              if (advEls.length < 2) {
                var $advEl = $('<div class="'+self.options.advid+'"></div>');
                c.add(d).appendTo($advEl);
                $('body').append($advEl);
              } else {
                c.add(d).appendTo(advEls.eq(1));
              }

         } 
         $(window).bind("resize.bgad", function() {
          b = ($(window).width() - val.topWidth) / 2 ;
          c&&c.width(b);
          d&&d.width(b)

        });

     
       


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