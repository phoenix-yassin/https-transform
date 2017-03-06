adv.AdBase.extend('AdShouyouBanner', {
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
        $(".ad-bodybg").remove();
        var yPosition = location.host === 'news.shouyou.com' || location.href.indexOf('test-news') > -1 ? 30 : 32;
        var str = '<div class="ad-bodybg"><a id="bgClose" style="width:60px;margin-left:440px;">关闭广告</a><div class="tonglan"><a href="' + b[0].imglink + '" target="_blank" title=""><img src="' + b[0].img + '" alt="' + b[0].imgtitle + '" width="1000" height="60" id="tonglan"/>' + '</a></div><a href="' + b[0].link + '" target="_blank" id="bglink" alt="" title="' + b[0].title + '"></a></div>';
        $("body").css("background", 'url(' + b[0].bgimg + ') center ' + yPosition + 'px no-repeat');
        $(str).insertBefore(".m-header");
    },
    bindEvent: function() {
        $(document).on('click', '#bgClose', function(){
          $("body").css("background","none");
          $(this).parent().hide();
        })
    },
    play: function() {
        var opt = this.options;
        this.render();
        this.bindEvent();
        this.emit(adv.ENUM.EVENTS.played);
    }
});
