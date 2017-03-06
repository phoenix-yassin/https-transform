if(FLASHCHANNEL.wandh==''){FLASHCHANNEL.wandh = '640,480'}


var ___flashgame = {};
(function(f) {
    var _ad = {};
    var gamesrc, gamew, gameh;
    function drawGame() {
        if ((/\.flv/g).test(gamesrc)) {
            $('#unityPlayer').hide();
            $('.progress-bar').hide();
            loadvid(gamesrc, 'flashgame', gamew, gameh);

        }else if((/\.mp4/g).test(gamesrc)){
			 $('#unityPlayer').hide();
            $('.progress-bar').hide();
            loadvid(gamesrc, 'flashgame', gamew, gameh);
		}else if((/\.f4v/g).test(gamesrc)){
			 $('#unityPlayer').hide();
            $('.progress-bar').hide();
            loadvid(gamesrc, 'flashgame', gamew, gameh);
		} else if ((/\.swf/g).test(gamesrc)) {

            $('#unityPlayer').hide();
            $('#flashgame').html(drawSwf2(gamew, gameh, gamesrc));
            _nid = setTimeout('_process()', 500);
        } else if ((/\.unity/g).test(gamesrc)) {
            $('.progress-bar').hide();
            $('#flashgame').hide();


            var config = {
                width: gamew,
                height: gameh,
                params: {enableDebugging: "1"}

            };
            var u = new UnityObject2(config);

            jQuery(function() {
                var $missingScreen = jQuery("#unityPlayer").find(".missing");
                var $brokenScreen = jQuery("#unityPlayer").find(".broken");
                $missingScreen.hide();
                $brokenScreen.hide();

                u.observeProgress(function(progress) {
                    switch (progress.pluginStatus) {
                        case "broken":
                            $brokenScreen.find("a").click(function(e) {
                                e.stopPropagation();
                                e.preventDefault();
                                u.installPlugin();
                                return false;
                            });
                            $brokenScreen.show();
                            break;
                        case "missing":
                            $missingScreen.find("a").click(function(e) {
                                e.stopPropagation();
                                e.preventDefault();
                                u.installPlugin();
                                return false;
                            });
                            $missingScreen.show();
                            break;
                        case "installed":
                            $missingScreen.remove();
                            break;
                        case "first":
                            break;
                    }
                });
                u.initPlugin(jQuery("#unityPlayer")[0], gamesrc);
            });


      } else if ((/\.html|\.htm/g).test(gamesrc)) {
            $('.progress-bar').hide();
            $('#unityPlayer').hide();
            $('#flashgame').html('<iframe align=center marginWidth=0 marginHeight=0 src="' + gamesrc + '" frameBorder=0 width="' + gamew + '" scrolling=no height="' + gameh + '"></iframe>');

        }
    }

    function drawSwf2(p_width, p_height, p_Src) {
        var str = '<object id="gameobj" width="' + p_width + '" height="' + p_height + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//

download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0">'
                + '	<param name="allowScriptAccess" value="never" />'
                + ' <PARAM NAME="allowNetworking" VALUE="internal">'
                + '	<param name="wmode" value="transparent" />'
                + '	<param name="movie" value="' + p_Src + '" />'
                + '	<param name="quality" value="high" />'
                + '	<embed name="gameobj" wmode="transparent"  id="gameobj_em" width="' + p_width + '" height="' + p_height + '" allowScriptAccess="never" allowNetworking="internal" src="' + p_Src + '" quality="high"  pluginspage="//

www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" />'
                + '</object>';
        return str;
    }

    function drawSwf(w, h, src, a) {
        var str = '<object id="gameobj" width="' + w + '" height="' + h + '" name="ckplayer_a1" data="//

i2.17173.itc.cn/2013/flash/2013/assets/ckplayer.swf"  classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//

download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0">' + '       <param name="allowScriptAccess" value="never" />' + '      <param name="movie" value="' + src + '" />'
                + ' <param name="quality" value="high" />' + '      <param name="bgcolor" value="#000" />'+'<PARAM NAME="allowNetworking" VALUE="internal">'
                + ' <param name="wmode" value="transparent" />' + '     <param name="flashvars" value="' + a + '"/>' + '        <embed name="gameobj" flashvars="' + a + '" wmode="transparent" id="gameobj_em" width="' + w + '" height="' + h + '"allowNetworking="internal" allowScriptAccess="never" src="' + src + '" quality="high" bgcolor="#000" pluginspage="//

www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" />' + '</object>';
        return str;
    }

    function addSwf(w, h, src, a) {
        var str = '<object id="adflash" width="' + w + '" height="' + h + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//

download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0">'
                + ' <param name="allowScriptAccess" value="never" />'
                + '    <param name="movie" value="' + src + '" />'
                + '    <param name="quality" value="high" />'
                + '    <param name="bgcolor" value="#000" />'
                + '    <param name="wmode" value="transparent" />'
                + '    <embed name="adflash" wmode="transparent" id="gameobj_em" width="' + w + '" height="' + h + '" allowScriptAccess="never" src="' + src + '" quality="high" bgcolor="#000" pluginspage="//

www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" />'
                + '</object>';
        return str;
    }

    function init(b, a, c) {
        gamesrc = b;
        if (a != '') {
            var a = a.split(",");
            if (a.length > 1) {
                gamew = a[0];
                gameh = a[1];
                c && c(gamew, gameh);
            }
        }
    }

    f.init = init;

    f.addSwf = addSwf;
    f.drawGame = drawGame;

})(___flashgame);



adv.AdBase.extend('AdFlashFinalGameCover', {
  init: function(options) {
    this.base(options);
    // $('#flashgame').hide();

    this.container = $('.' + this.options.advid);
    ___flashgame.init(FLASHCHANNEL.infoContent, FLASHCHANNEL.wandh, function(w, h) {
        if (h < 510) {
            var m_h = (510 - h) / 2;
            $(".flash-con1").css({"margin-top": m_h});
        }
        if (w <= 640) {
            $(".game-info2").hide();
            $(".flash-con1").css({"width": w, "height": h});
        } else {
            $(".flash-right").hide();
            $(".flash-left").css({width: "100%"});
            $(".flash-left .bd").addClass("bd01");
            //$('.flash-con1').addClass('flash-con01');
            $(".flash-right").hide();
            $(".game-info2").show();
            $(".flash-con1").css({"width": w, "height": h});
        }

    });

    this.emit(adv.ENUM.EVENTS.inited);
  },

  setup: function() {
    this.base();
    this._ad = this.options.data;
    // $('.flashad-box').show();
    this.container.show();
    this.container.css({
        width: 800,
        height: 530,
        'padding':'47px 9%'
    });
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  cdown: function() {
    var self = this;
     var str ;
         if(this.options.data.swf ) {
             str = '<div class="flashad-container"><div class="flashad-cnt"><div class="flashad-time">\u5e7f\u544a&nbsp;<font color="#FFFF00"><span>0</span></font>&nbsp;\u79d2&nbsp;&nbsp;</div></div></div> '+ ___flashgame.addSwf(800, 500,self._ad.swf[0], '');
         } else {
            str = '<div class="flashad-container"><div class="flashad-cnt"><div class="flashad-time">\u5e7f\u544a&nbsp;<font color="#FFFF00"><span>0</span></font>&nbsp;\u79d2&nbsp;&nbsp;</div></div></div><div class="adsystem-mark" data-ad-type="AdOtherQQBanner"></div> ';
         }
         //if(advConfigs.length >0) {
        // str = '<div class="flashad-container"><div class="flashad-cnt"><div class="flashad-time">\u5e7f\u544a&nbsp;<font color="#FFFF00"><span>0</span></font>&nbsp;\u79d2&nbsp;&nbsp;</div></div></div><div class="adsystem-mark" data-ad-type="AdOtherQQBanner"></div> ';
          //} else {
       // }
        // $('.flashad-box').html(str);
        self.container.html(str);
        if (((/unity/g).test(FLASHCHANNEL.infoContent)) || ((/html/g).test(FLASHCHANNEL.infoContent))) {
            $('.flash-con1').hide();
        }
        else {
            $('#unityPlayer').hide();
        }
        ___flashgame.drawGame();
        var timer = setInterval(function() {
            if (self._ad.time == 0) {
                // $('.flashad-box').hide();
                self.container.hide();
                clearInterval(timer)
                $('.flash-con1').show();
                    $('#flashgame').show();

            }
            $('.flashad-time span').html(self._ad.time);
            self._ad.time--;
        }, 1000);
  },
  play: function() {
    this.base();
    this.cdown();
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function() {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  },
  dispose: function() {

  }
});