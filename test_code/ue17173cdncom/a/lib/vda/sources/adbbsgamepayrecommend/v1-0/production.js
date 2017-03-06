(function($){
  adv.AdBase.extend('AdBBSGamePayRecommend', {
    init: function(options) {
      this.base(options);
      this.emit(adv.ENUM.EVENTS.inited);
    },
    setup: function(data) {
      if(!data.adskey){
        return;
      }

      var currentForum = $('.forum-name .nvhm').nextAll('a').text() || $('#pt .nvhm').nextAll('a').eq(0).text(),
        match = false;
      var ignoreFeatureSwitch = data.ignoreFeatureSwitch;
      for(var i = 0; i < data.games.length; i++){
        if(data.games[i].game_name === currentForum){
          data = data.games[i];
          match = true;
          break;
        }
      }

      if(!match){
        return;
      }

      var cookie = adv.cookie.getCookie('17173_bbs_show_tg');
      var isThreadPage = this.isThreadPage = location.href.indexOf('thread') > -1;
      var notFirstPage = isThreadPage && $('[name=page]').val() > 1;

      if(!data.game_code || !data.game_name || (isThreadPage && $('#postlist>[id*=post_]').length < 7) || notFirstPage){
        return;
      }

      if(!ignoreFeatureSwitch && cookie == 0){
        return;
      }

      if(cookie === null){
        var showAd = Math.random() > 0.5;
        adv.cookie.setCookie('17173_bbs_show_tg', showAd ? 1 : 0);
        if(!showAd && !ignoreFeatureSwitch){
          return;
        }
      }

      var self = this,
        host = '//d1.17173.itc.cn/',
        date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

      var urls = {
        gameinfo: host + 'newgame/info/js/' + data.game_code + '.js',
        download: host + 'download/game/js/' + data.game_code + '.js',
        giftlist: host + 'hao/giftlist/js/' + data.game_code + '.js',
        gift: host + 'hao/giftinfo/js/' + data.gift_id + '.js'
      }
      var tmpl = '@for(var i = 0; i < 3; i++){<tbody><tr><td class="icn"><img src="//ue.17173cdn.com/a/bbs/index/2016/img/bbs-ico-tg.png"></td><th class="common"><a target="_blank" href="@json[i].href" style="font-weight: bold;" class="xst tg_link_@i">@json[i].title</a><span style="font-size:14px; color:#aaa; margin-left:2em;">推广</span></th><td class="by by-co1"><cite><a target="_blank" href="@json[i].game_url">@json[i].game_name</a></cite><em><span>@json[i].date</span></em></td><td class="num num-co1"><a href="javascript:;" class="xi2">0</a><em> / 0</em></td><td class="by by-co2"><em>1&nbsp;秒前</span></a></em><cite>by:<a href="@json[i].game_url" target="_blank">@json[i].game_name</a></cite></td></tr></tbody>}';
      var tmpl2 = '<div><table cellspacing="0" cellpadding="0"><tbody><tr><td class="pls" rowspan="2"><div class="pi"><div class="authi"><a href="@game_url" target="_blank" class="xw1">@game_name</a></div></div><div><div class="avatar"><a href="@game_url" target="_blank"><img src="@game_logo"></a></div></div></td><td class="plc"><div id="gb_ginfo" class="gb-ginfo"><span class="cate">推广</span><div class="gb-ginfo-detail"><h2><a href="@game_url" target="_blank">@game_name</a></h2><p>@test_info</p><p>@game_desc</p></div></div><div id="gb_hao1" class="gb-hao1 gb-hao1-ex"><a href="@item1.href" target="_blank" class="gb-hao1-gift tg_link_3"><span class="gb-hao-tit">@item1.title2</span><span class="gb-hao-txt">@item1.send_count人已@if(item1.no_gift){预定}else{领取}</span></a><a href="@download_url" target="_blank" class="gb-hao1-dl tg_link_4 @if(download_num<1){gb-hao1-dl-ex}"><span class="gb-hao-tit">客户端下载</span>@if(download_num>0){<span class="gb-hao-txt">@download_num人已下载</span>}</a><a href="@official_url" target="_blank" class="gb-hao1-offi tg_link_5"><span class="gb-hao-tit">游戏官网</span></a></div></td></tr><tr><td class="plc plm"></td></tr><tr><td class="pls"></td><td class="plc" style="overflow:visible;"></td></tr><tr class="ad"><td class="pls"></td><td class="plc"></td></tr></tbody></table></div>';
      var style = '<style type="text/css">#gb_hao1:link,#gb_hao1:visited{text-decoration:none}#gb_hao1{text-align:center;line-height:1.5;font-family:"Microsoft Yahei";padding:15px 0 90px 20px}#gb_hao1 a{display:block;height:48px;padding:7px 5px 0;margin-bottom:10px}#gb_hao1 a span{display:block;_width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#gb_hao1 .gb-hao-tit{font-size:16px;color:#fff}#gb_hao1 .gb-hao-txt{font-size:12px;color:#fff88a}#gb_hao1 .gb-hao1-gift{background:#ff6d55}#gb_hao1 .gb-hao1-gift:hover{background:#ff826e}#gb_hao1 .gb-hao1-dl{background:#63c245}#gb_hao1 .gb-hao1-dl-ex .gb-hao-tit{padding-top:9px}#gb_hao1 .gb-hao1-dl:hover{background:#6ecd51}#gb_hao1 .gb-hao1-offi{background:#57adfd;padding-top:0;height:55px;line-height:55px;margin:0}#gb_hao1 .gb-hao1-offi:hover{background:#6eb9ff}#gb_hao1.gb-hao1-ex{overflow:hidden;*zoom:1}#gb_hao1.gb-hao1-ex a{width:206px;float:left;margin:0 6px 0 0}#gb_hao1.gb-hao1-ex .gb-hao1-offi{margin:0}#gb_ginfo{position:relative;*zoom:1}#gb_ginfo .cate{position:absolute;right:6px;top:10px;color:#999}#gb_ginfo .gb-ginfo-detail{padding:30px 0 0 20px}#gb_ginfo .gb-ginfo-detail h2,#gb_ginfo .gb-ginfo-detail p{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#gb_ginfo .gb-ginfo-detail h2{font-size:24px;font-weight:bold;line-height:2}#gb_ginfo .gb-ginfo-detail h2 a{color:#333}#gb_ginfo .gb-ginfo-detail h2 a span{font-size:22px;color:#999;margin-left:0.5em}#gb_ginfo .gb-ginfo-detail h2 a:hover{text-decoration:none}#gb_ginfo .gb-ginfo-detail p{font-size:14px;color:#777;line-height:1.857}#gb_hao1 a:hover{ text-decoration: none;}</style>';

      $.when($.getScript(urls.gameinfo), $.getScript(urls.download))
        .then(function(){
          var info = DATASTORE['game-detail.info'][data.game_code];
          var download = DATASTORE['game.downnum'][data.game_code];

          //列表页数据
          var json = {
            json: [
              {
                game_name: data.game_name,
                game_url: info.game_url,
                href: download.url,
                date: date,
                title: '《' + data.game_name + '》客户端下载'
              },
              {
                game_name: data.game_name,
                game_url: info.game_url,
                href: info.sp_info.game_official_url,
                date: date,
                title: '《' + data.game_name + '》游戏官网'
              }
            ]
          };
          //详情页数据
          var json2 = {
            game_name: data.game_name,
            game_url: info.game_url,
            game_logo: info.logo_pic,
            game_desc: info.game_type.name + ' / ' + info.game_theme.name + ' / ' + info.game_style.name,
            test_info: self.unixToDatetime(info.curr_test_info.test_time) + ' ' + info.curr_test_info.test_name,
            download_num: download.downnum,
            download_url: download.url,
            official_url: info.sp_info.game_official_url
          }

          if(isThreadPage){
            $(style).appendTo('head');
          }

          if(data.gift_id){ //指定gift_id，取对应礼包
            $.getScript(urls.gift, function(){
              var giftInfo = DATASTORE['hao.giftInfo'][data.gift_id];
              var giftItem = {
                game_url: info.game_url,
                game_name: data.game_name,
                href: giftInfo.gift_url,
                date: date,
                title: giftInfo.gift_name ? '《' + data.game_name + '》' + giftInfo.gift_name + '上架速领' : '预定《' + data.game_name + '》激活码、礼包',
                title2: giftInfo.gift_name || '预订激活码、礼包',
                send_count: giftInfo.send_count
              };
              json.json.splice(0, 0, giftItem);
              json2.item1 = giftItem;
              self.html = adv.razor(tmpl, json);
              self.html2 = adv.razor(tmpl2, json2);
              self.emit(adv.ENUM.EVENTS.setuped);
            })
          } else{ //未指定gift_id, 读取礼包列表
            $.getScript(urls.giftlist, function(){
              var giftlist = DATASTORE['hao.giftlist'][data.game_code];
              if(giftlist.gift_count < 1){ //如果没有礼包，显示预定
                var giftItem = {
                  game_url: info.game_url,
                  game_name: data.game_name,
                  href: giftlist.url,
                  date: date,
                  title: '预定《' + data.game_name + '》激活码、礼包',
                  title2: '预定激活码、礼包',
                  send_count: giftlist.sche_count,
                  no_gift: true
                };
              } else{//有礼包取最后一个(接口按从旧到新排列)
                var index = giftlist.list.length - 1;
                var giftItem = {
                  game_url: info.game_url,
                  game_name: data.game_name,
                  href: giftlist.list[index].gift_url,
                  date: date,
                  title: '《' + data.game_name + '》' + giftlist.list[index].gift_name + '上架速领',
                  title2: giftlist.list[index].gift_name,
                  send_count: giftlist.list[index].send_count
                };
              }
              json.json.splice(0, 0, giftItem);
              json2.item1 = giftItem;
              self.html = adv.razor(tmpl, json);
              self.html2 = adv.razor(tmpl2, json2);
              self.emit(adv.ENUM.EVENTS.setuped);
            })
          }
        })
    },
    play: function() {
      var self = this,
        data = this.options.resources[0].adskey;
      if(this.isThreadPage){
        var html = this.html2;
        $(this.html2).insertBefore($('#postlist>[id*=post_]').eq(6));
      } else{
        var html = this.html;
        $(this.html).insertBefore('#separatorline');
      }

      adv.util.sendIpa($('.tg_link_0'), data.adskey1, true);
      adv.util.sendIpa($('.tg_link_1'), data.adskey2, true);
      adv.util.sendIpa($('.tg_link_2'), data.adskey3, true);
      adv.util.sendIpa($('.tg_link_3'), data.adskey4, true);
      adv.util.sendIpa($('.tg_link_4'), data.adskey5, true);
      adv.util.sendIpa($('.tg_link_5'), data.adskey6, true);
      this.emit(adv.ENUM.EVENTS.played);
    },
    unixToDatetime: function(unix){
      var date = new Date(unix * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var formattedTime = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + hours + ':' + minutes.substr(-2);
      return formattedTime;
    }
  });
})(jQuery)