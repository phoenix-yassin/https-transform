!function($) {
    var t = {
        html: function(e) {
            return '<a href="' + e.link + '" target="_blank" id="gb_markteing_pro_link">\u8fdb\u5165\u5b98\u7f51<i class="gb-marketing-pro-arrow"></i></a>'
        },
        css: function() {
            return '<style type="text/css">.gb-marketing-pro-arrow{ width: 15px; height: 7px; background: url(//

ue.17173cdn.com/a/news/final/2014/img/arrow.gif) no-repeat 0 0; display: inline-block; vertical-align: middle; margin:0 0 2px 5px;}#gb_markteing_pro_link{ color:#ff0000;}#gb_markteing_pro_link:hover{ text-decoration: underline; background: none;}</style>'
        },
        searchElem: function(e) {
            return document.getElementsByTagName("h1")[0].innerHTML
        },
        replaceElem: function(e) {
            return  document.getElementsByClassName('gameinfo')[0].getElementsByTagName('span')[5]
        }
    };
    adv.AdBase.extend("AdDownloadFinalRuKou", {
        init: function(e) {
            this.base(e),
            this.emit(adv.ENUM.EVENTS.inited)
        },
        setup: function() {
            this.emit(adv.ENUM.EVENTS.setuped)
        },
        play: function() {
            var options = this.options;
            var element = t.replaceElem();
            if (options.ads && options.ads.length > 0) {
                 for(var i = 0 ;i<options.ads.length; i++) {
                    if(t.searchElem().indexOf(options.ads[i].keyword) != -1) {
                        for (var k = 0; k< options.filterkeywords.length; k++) {
                            if(t.searchElem() != options.filterkeywords[k]) {
                                element.innerHTML = t.html(options.ads[i]) + t.css();
                            }
                        }
                    }
                }

                this.emit(adv.ENUM.EVENTS.played)
            }
        }
    })
}(jQuery);
