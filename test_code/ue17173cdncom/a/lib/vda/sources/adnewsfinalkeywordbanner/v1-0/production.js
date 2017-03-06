(function(){
  adv.AdBase.extend('AdNewsFinalKeywordBanner', {
  init: function (options) {
    this.base(options);
    this.conBanner = $('#mod_article');
    this.title = $('h1').text();
    this.emit(adv.ENUM.EVENTS.inited);
  },
  showHtml: function(src, width, height,link) {
    if (src.indexOf('.swf') >= 0) {
        return adv.flash.embed({      
          source: src,
          width: width,
          height: height
        });      } else {
       return  '<div style="text-align:center"><a href="' + link + '" target="_blank" style="display:block; text-align:center" ><img width="'+width+'" height="'+height+'"  src="' + src + '" /></a></div>';
      }
  },
  setup: function () {
    this.base();
    var self = this;
    var opts =  self.options;
    
    $.each(this.options.ads, function(index, val) {

      if(val.keyword.length) {
        var keywordsArr = val.keyword.split(',');
        var filterKeyWord = val.filters.split(',');
            for (var j = 0; j<filterKeyWord.length; j++) {
              if(self.title.indexOf(filterKeyWord[j]) != -1  && self.title.indexOf(filterKeyWord[j]) != '' ) {
              } else {
                for(var k = 0; k< keywordsArr.length; k++) {
                  if(self.title.indexOf(keywordsArr[k]) != -1 ) {
                    self.html = self.showHtml(val.src, val.width, val.height, val.link);
                    self.pv = val.pvCode;
                  }
                }
              }
            }
          }
    });

    if(self.html) {
      this.emit(adv.ENUM.EVENTS.setuped);
    }


  },
  play: function () {
    this.base();
    var self = this;
    if(this.options.advid == 'adnewsfinalkeywordbanner1' ) {
      this.conBanner.prepend(self.html);
      this.conBanner.find('a').css({'margin-bottom':'10px'});
      adv.adCenter.sendPv(self.pv);
    } else {
      $('.' + this.options.advid).text('').append(self.html).show();

    }
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function () {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }
 
});


})()