adv.AdBase.extend('AdShouyouFull', {
    init: function(options) {
        this.base(options);
        this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function(data) {
        this.data = data;
        this.emit(adv.ENUM.EVENTS.setuped);
    },
    render: function() {
        var self = this;
        var b = this.data.sources[0];
        $(".m-banner").siblings().remove();
        setTimeout(function() {
            var str = '<div class="m-ad-2" id="adStart" style="background-image:url(' + b.btnimg + ')"><a class="u-tga">重播</a></div>' +
                '<div class="banner-ad banner-ad-1 banner-ad-con" id="banner-ad"><div class="banner-ad-swf">' +
                '<a href="' + b.link + '" target="_blank" title="' + b.title + '">' +
                '<embed src="' + b.swf + '" allowscriptaccess="always" quality="high" type="application/x-shockwave-flash" wmode="transparent" width="1000" height="400">' +
                '</a></div><a id="adClose" style="z-index:9999;background:url(//ue.shouyoucdn.com/a/index/2016/images/close_banner_swf.jpg) no-repeat;position:absolute;top:0;right:0;width:66px;display:block;height:18px;">关闭</a></div>';
            var a = $(".banner-wrap").html();
            $(".banner-wrap").html(a + str);
            $("#banner-ad").show(1000);
            $("#adStart").fadeIn();
            self.emit(adv.ENUM.EVENTS.played);
        }, 2000);

        setTimeout(function(){
            $("#banner-ad").hide(1000);
        }, 7000)

    },
    bindEvent: function() {
        var _this = this;
        $(document).on('click', '#adStart', function(){
            if($("#banner-ad").is(':animated')){
                return;
            }
            $("#banner-ad").stop().show(1000);
        }).on('click', '#adClose', function(){
            $("#banner-ad").stop().hide(1000);
        })
    },
    play: function() {
        this.render();
        this.bindEvent();
        // this.emit(adv.ENUM.EVENTS.played);
    }
});