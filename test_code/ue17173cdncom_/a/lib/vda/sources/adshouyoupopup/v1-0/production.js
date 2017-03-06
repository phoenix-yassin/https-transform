adv.AdBase.extend('AdShouyouPopup', {
    init: function(options) {
        this.base(options);
        this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function(data) {
        this.data = data;
        this.emit(adv.ENUM.EVENTS.setuped);
    },
    render: function() {
        var b = this.data.sources;
        var length = b.length;
        $(".ad-video").remove();
        if (length > 0) {
            var str = '';
            if (b[0].type == 1) {
                str += '<div class="ad-video ad-video-img"><div class="ad-video-tit">手游媒体视窗广告<a id="videoClose"></a></div><a href="' + b[0].link + '" target="_blank" title="' + b[0].title + '" id="adcon"><embed name="yz_12973_fA_ff" width="300" height="200" src="' + b[0].url + '" quality="high" wmode="transparent" scale="exactfit" allowscriptaccess="always" pluginspage="//

www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash">';
            } else {
                str += '<div class="ad-video ad-video-img"><div class="ad-video-tit">手游媒体视窗广告<a id="videoClose"></a></div> <a href="' + b[0].link + '" target="_blank" title="' + b[0].title + '" id="adcon"><img src="' + b[0].url + '" width="300" height="200">';
            }
            str += '</a></div>';
            $(str).insertBefore(".g-footer");
        }
    },
    bindEvent: function(){
        $(document).on('click', '#videoClose', function(){
            $(this).parents('.ad-video').remove();
        })
    },
    play: function() {
        var opt = this.options;
        this.render();
        this.bindEvent();
        this.emit(adv.ENUM.EVENTS.played);
    }
});