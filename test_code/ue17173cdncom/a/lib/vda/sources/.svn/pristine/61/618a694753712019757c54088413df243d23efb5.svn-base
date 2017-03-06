!function($) {
    var t = {
        html: function(e) {
            return '<a href="' + e.link + '" target="_blank" id="gb_markteing_pro_link">\u8fdb\u5165\u5b98\u7f51<i class="gb-marketing-pro-arrow"></i></a>'
        },
        css: function() {
            return '<style type="text/css">.gb-marketing-pro-arrow{ width: 15px; height: 7px; background: url(http://ue.17173cdn.com/a/news/final/2014/img/arrow.gif) no-repeat 0 0; display: inline-block; vertical-align: middle; margin:0 0 2px 5px;}#gb_markteing_pro_link{ color:#ff0000;}#gb_markteing_pro_link:hover{ text-decoration: underline; background: none;}</style>'
        },
        searchElem: function(e) {
            return document.getElementsByTagName("h1")[0].innerHTML
        }
    };
    adv.AdBase.extend("AdDownloadFinalRuKou", {
        init: function(e) {
            this.base(e);
            this.elem = document.getElementsByClassName(e.advid)[0]
            if(!document.getElementsByClassName(e.advid)[0]) {
                return false
            }
            this.emit(adv.ENUM.EVENTS.inited)
        },
        setup: function() {
            this.emit(adv.ENUM.EVENTS.setuped)
        },
        play: function() {
            var options = this.options;
            var element = this.elem;
            var ahas = 0;

            if (options.ads && options.ads.length > 0) {
                 for(var i = 0 ;i<options.ads.length; i++) {
                    if(t.searchElem().indexOf(options.ads[i].keyword) != -1   && t.searchElem().indexOf(options.ads[i].filterkeywords) == -1 ) {
                        element.innerHTML = t.html(options.ads[i]) + t.css(); 
                        if("Microsoft Internet Explorer" == navigator.appName && "MSIE6.0" == navigator.appVersion.split(";")[1].replace(/[ ]/g, "")) {
                            var l = element.getElementsByTagName("i")[0];
                            l.style.margin = "4px 0 0 5px", l.style.verticalAlign = "bottom"
                        }
                        this.emit(adv.ENUM.EVENTS.played)
                        }
                    }
                    
                } 

               
                
        }
    })
}(jQuery);
