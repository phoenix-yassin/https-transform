adv.AdBase.extend('AdShouyouFocus', {
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
        var str = "";
        for (var i = 0; i < b.length; i++) {
            str += '<li class="pic-box"><a title="' + b[i].title + '" href="' + b[i].link + '" target="_blank"><img src="' + b[i].img + '" width="600" height="260"><p class="pic-tit focus-tit">' + b[i].title + '</p></a></li>';
        }
        $('#u-focus li').each(function(){
            var $img = $(this).find('img'),
                originalSrc = $img.data('original');
            $img.attr('src', originalSrc);
        })
        var tmp = $("#u-focus").html();
        $("#u-focus").html(str + tmp);
    },
    play: function() {
        var opt = this.options;
        this.render();
        this.emit(adv.ENUM.EVENTS.played);
    }
});