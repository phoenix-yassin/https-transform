adv.AdBase.extend('AdNewsPlacement', {

  init: function(options) {
    this.base(options);

    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data || this.options;
    // \u904d\u5386\u914d\u7f6e\u6570\u7ec4
    for (var i = 0; i < this.data.items.length; i++) {
      var item = this.data.items[i];
      // \u5982\u679cgamCode\u4e0e\u5f53\u524d\u9875article.gamecode\u76f8\u540c\uff0c\u6216\u8005\u6295\u653egameName\u548c\u5f53\u524d\u9875article.tag\u91cc\u67d0\u4e00\u9879\u5168\u5339\u914d\uff0c\u5219\u5224\u65ad\u547d\u4e2d\u6295\u653e

      if ((item.gameCode == article.gamecode) || (!!item.gameName && $.inArray(item.gameName, $.trim(article.tag).split(',')) > -1)) {
        var tmpl = function() {/*@preserve
          <div class="gb-final-game @advid">
            <div class="gb-final-game-tg" >
              <a href="@officialURL" target="_blank">
                <img src="@image" width="660" height="120" alt=""/>
              </a>
            </div>
            <div class="gb-final-game-info">
              <h3 class="gb-final-game-tit">@gameName<span class="gb-final-game-desc">@gameType/@gameTheme/@gameFrame</span></h3>
              <div class="gb-final-game-dl">
                <div id="@actModuleId"></div>
                <a class="gb-final-bt-dl" href="@downloadURL" target="_blank">\u4e0b\u8f7d</a>
                <a class="gb-final-bt-gf" href="@officialURL" target="_blank">\u5b98\u7f51</a>
              </div>
            </div>
          </div>
        */};
        item.advid = this.options.advid;
        item.actModuleId = this.options.advid+'_act_module';
        //css
        this.options.cssString = '.gb-final-game{border-bottom: 1px solid #eee; padding-bottom: 12px; font-family: "MicroSoft Yahei"}\
          .gb-final-game-tg{margin-bottom: 14px; *zoom:1; width:660px; height:120px;}\
          .gb-final-game-tg img{display: block; margin: 0 auto; border: 0;}\
          .gb-final-game-info{overflow: hidden; *zoom:1;}\
          .gb-final-game-tit{float: left; width:316px; white-space: nowrap; overflow: hidden; font-weight: bold; font-size:18px; line-height:32px; color: #333; padding: 0; margin: 0}\
          .gb-final-game-desc{font-size: 12px; display: inline-block; vertical-align: middle; color: #999; margin: 0 0 0 10px; font-weight: normal;}\
          .gb-final-game-dl{overflow: hidden; *zoom:1;}\
          .gb-final-game-dl .gb-final-bt-gf{border-radius: 3px; line-height:32px; background:#00a0e9; width:60px; color: #fff; font-size: 14px; margin-left:5px; display:block; float: right; text-align: center; text-decoration: none;}\
          .gb-final-game-dl .gb-final-bt-gf:hover{background:#008ee3}\
          .gb-final-game-dl .gb-final-bt-dl{border-radius: 3px; line-height:32px; background:#7cc430; width:60px; color: #fff; font-size: 14px; margin-left:5px; display:block; float: right; text-align: center; text-decoration: none;}\
          .gb-final-game-dl .gb-final-bt-dl:hover{background:#69b624}\
          .gb-final-bt-lb{border-radius: 3px; line-height:30px; height:30px; border: 1px solid #ff5c00; background:#fff; width:173px; color: #ff5c00; font-size: 16px; margin-left:5px; display: inline; float: right; text-align: center; text-decoration: none;}\
          .gb-final-bt-lb .gb-final-join{color:#999; font-size: 12px; display: inline-block; vertical-align: middle; margin: 0 0 3px 5px;}\
          #'+item.actModuleId+' .zq-actcompt4 { padding: 0;width: 198px;text-align: center; }\
          #'+item.actModuleId+' .zq-actcompt4 .zq-actcompt-tit{display: none;}\
          #'+item.actModuleId+' .zq-actcompt .zq-actcompt-btn{ background: #fff; width: 186px; font-size: 16px; line-height: 30px; height: 30px; text-align: left; padding-left: 10px; margin: 0 auto 0;}\
          #'+item.actModuleId+' .zq-actcompt .zq-actcompt-btn-begin{ border-color: #999; color: #ff5c00;}\
          #'+item.actModuleId+' .zq-actcompt .zq-actcompt-btn-in{ display: none; width: 186px; padding-left: 10px; border-color: #ff5c00; color: #ff5c00;}\
          #'+item.actModuleId+' .zq-actcompt .zq-actcompt-btn-end{ width: 176px; padding-left: 20px; border-color: #999; color: #999;}\
          #'+item.actModuleId+' .zq-actcompt{ border:none; position: relative; float:right; margin-bottom: 0; margin-left: 5px;}\
          #'+item.actModuleId+' .zq-actcompt p{color: #999; font-size: 12px; font-weight: normal; position: absolute; top:5px; left: 78px;}\
          #'+item.actModuleId+' .zq-actcompt:hover{ cursor: pointer;}\
          #'+item.actModuleId+' .zq-actcompt .zq-actcompt-joins{color: #999;}\
          #'+item.actModuleId+' .zq-actcompt .zq-actcompt-fb{font-weight: normal;color: #ff5c00;}\
          #'+item.actModuleId+' .zq-actcompt .zq-actcompt-countdown{color: #999;}';
        this.options.hoverCssString = '.gb-final-bt-lb:hover{background:#ff5c00; color: #fff}\
          .gb-final-bt-lb:hover .gb-final-join{color:#ffff00}\
          #'+item.actModuleId+' .zq-actcompt:hover .zq-actcompt-btn{background: #ff5c00; color: #fff;}\
          #'+item.actModuleId+' .zq-actcompt:hover .zq-actcompt-p,#'+item.actModuleId+' .zq-actcompt:hover .zq-actcompt-p .zq-actcompt-or { color: #ff0;}';
         this.options.html = adv.razor(tmpl, item);
        this.options.config = item;
        this.emit(adv.ENUM.EVENTS.setuped);
      }
    }
  },
  play: function() {
    var self = this;
    // \u63d2\u5165\u7ed3\u6784\u6837\u5f0f
    adv.$.appendStyle(self.options.cssString);
    // \u63d2\u5165\u7ed3\u6784

    $('.gb-final-mod-article').before(self.options.html);
    // \u521d\u59cb\u5316\u6d3b\u52a8\u7ec4\u4ef6
    pandora.use(['actmodule'], function(ActModule) {
      var actModuleId = self.options.advid+'_act_module';
      var actConfig = $.extend({'element':'#'+actModuleId,'style':'4','showImg':false}, self.options.config);
      new ActModule(actConfig);
      adv.util.poll(function() {
        return $('.'+self.options.advid+' .zq-actcompt-btn').length;
      },function() {
        var $container = $('.'+self.options.advid);
        // \u5982\u679c\u6d3b\u52a8\u8fdb\u884c\u4e2d \u5f15\u5165\u8fdb\u884c\u65f6\u6837\u5f0f
        if ($container.find('.zq-actcompt-btn-in').length > 0) {
          $container.find('.zq-actcompt-btn-in').text('\u72ec\u5bb6\u793c\u5305').show().css({'display':'block'});
          adv.$.appendStyle(self.options.hoverCssString);
        }
        // \u663e\u793a\u63a8\u5e7f\u4f4d
        $container.show();
        // \u70b9\u51fb\u53c2\u4e0e\u4eba\u533a\u57df\uff0c\u4e5f\u89e6\u53d1\u53c2\u4e0e\u6d3b\u52a8\u6548\u679c
        $container.find('.zq-actcompt-joins').click(function(evt) {
          $container.find('.zq-actcompt-btn').trigger('click');
        });
        // BI\u7edf\u8ba1
        window._jc_ping = window._jc_ping || [];
        // \u56fe\u7247
        $container.find('.gb-final-game-tg a').mousedown(function() {
          var $this = $(this);
          _jc_ping.push([
            '_trackBlockClick',
            'I3UnEz',
            $this.attr('href')
          ]);
        });
        // \u5b98\u7f51
        $container.find('a.gb-final-bt-gf').mousedown(function() {
          var $this = $(this);
          _jc_ping.push([
            '_trackBlockClick',
            '7fUbA3',
            $this.attr('href')
          ]);
        });
        // \u4e0b\u8f7d
        $container.find('a.gb-final-bt-dl').mousedown(function() {
          var $this = $(this);
          _jc_ping.push([
            '_trackBlockClick',
            'VNrINv',
            $this.attr('href')
          ]);
        });
      },function() {
      },15000);
    });
    self.emit(adv.ENUM.EVENTS.played);
  }
});