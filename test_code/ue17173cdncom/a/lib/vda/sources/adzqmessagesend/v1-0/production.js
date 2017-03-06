
/* Copyright (c) 2013 17173.com */

/* email: haihuazhou@cyou-inc.com */
/* Date: 2015-9-23 */
adv.AdBase.extend("AdZqMessageSend", {
	init: function(a) {
		this.base(a);
		$('.zq-fix').hide();
		this.emit(adv.ENUM.EVENTS.inited)
	},
	positionFixed: function(el, eltop) {
		if (!window.XMLHttpRequest) {
			el.style.position = "absolute";
			window.attachEvent("onscroll", function() {
				el.style.top = document.documentElement.scrollTop + eltop + "px"
			})
		}
	},
	setup: function() {
		this.base();
		this.html = [];
		var self = this;
		var data = this.options;
			self.html.push('<div class="zq-fix1" id="AdZqMessageSend">',
			'<a href="javascript:;" class="ico ico-close"></a>',
			'<div class="zq-fix1-c1">',
				'<div class="zq-fix1-item zq-fix1-item-show">',
					'<div class="zq-fix1-hd">',
						'<h3 class="tit"><i class="ico ico-pc"></i>',data.title,'</h3>',
						'<i class="ico ico-plus"></i>',
					'</div>',
					'<div class="zq-fix1-bd">',
						'<div class="zq-fix1-c1-c1">',
							'<div class="logo-pic">',
								'<a href="',data.gameLink,'" target="_blank">',
									'<img src="',data.gameLogo,'" width="90" height="90" alt="" />',
								'</a>',
							'</div>',
							'<div class="enter-box">',
								'<div class="form-item">',
									'<div class="form-group">',
										'<input type="text" class="form-text" name="mobile" placeholder="\u8f93\u624b\u673a\u53f7\u4e0b\u8f7d\u62a2\u73b0\u91d1">',
									'</div>',
									'<a class="btn-get" href="#">\u62a2</a>',
								'</div>',
								'<div class="form-result correct"><i class="ico ico-right"></i>\u77ed\u4fe1\u53d1\u9001\u6210\u529f</div>',
								'<div class="form-result error"><i class="ico ico-wrong"></i><span class="tips"></span></div>',
							'</div>',
						'</div>',
						'<div class="zq-fix1-c1-c2">',
							'<a href="',data.imgData.imgLink,'" target="_blank" class="art-item-pt">',
								'<span class="avatar">',
									'<img src="',data.imgData.imgsrc,'" width="150" height="80" alt="" />',
								'</span>',
								'<span class="txt">',
									'<span class="tit c-tx">',data.imgData.imgTitle,'</span>',
									'<b class="mask"></b>',
								'</span>',
							'</a>',
						'</div>',
						'<div class="zq-fix1-c1-c3">',
							'<ul class="new-list">');
							$.each(data.newsData, function(index, val) {
								self.html.push('<li class="list-item">',
									'<div class="tit"><a href="',val.newsLink,'" target="_blank"><i class="ico-dot"></i>',val.newsTitle,'</a></div>',
								'</li>');
							});
			self.html.push('</ul>',
						'</div>	',
						'<a href="',data.zqLink,'" target="_blank" class="btn-jrzq">\u8fdb\u5165\u4e13\u533a</a>',
					'</div>	',
				'</div>',
			'</div>',
			'<div class="zq-fix1-c2"><i class="ico ico-phone"></i>',data.hswTitle,'</div>',
		'</div>') ;

		this.position;
		if(this.options.position == 'right') {
			this.position = 'left';
		} else {
			this.position = 'right';
		}
		this.css ='<style type="text/css">'+
		'.ad-zhanneituiguang{display:none!important}'+
		'.zq-fix1 .mask { overflow: hidden; position: absolute; z-index: -1; top: 0; left: 0; width: 100%; height: 100%; *height: 200px; background: #000; filter: alpha(opacity=50); opacity: .5; }'+
		'.zq-fix1 .ico{display: inline-block;*display:inline;*zoom:1;background:url(//ue.17173cdn.com/a/9yin/index/2015/img/zq-ico.png) no-repeat; vertical-align: middle;}'+
		'.zq-fix1 .ico-close{position:absolute;z-index:10;top:-10px;left:-10px;width:25px;height: 25px;background-position:0 0;background: url(img/zq-img.png) no-repeat;}'+
		'.zq-fix1 .ico-pc{width:17px;height: 19px;background-position:0 -25px; margin:4px 5px 7px 0}'+
		'.zq-fix1 .ico-phone{width: 18px;height: 19px;background-position:2px 0;margin:4px 2px 7px 0;}'+
		'.zq-fix1{position:fixed; '+this.position+':50%; margin-'+this.position+':510px; top:261px; width:170px; z-index: 602; font-family:"Microsoft YaHei"}'+
		'.zq-fix-box{position: fixed;left: 50%; margin-left:540px; top:306px;  width:170px;_position:absolute;z-index: 500;_top:0;}'+
		'.zq-fix1-c1 .zq-fix1-hd{background: #49b3e9; color:#fff; text-align: center;font-size: 16px;height: 35px;line-height: 35px;position:relative;cursor:pointer;  border-bottom: 1px solid #fff;}'+
		'.zq-fix1-c1 .zq-fix1-bd{padding:10px;background-color:#f3f3f3;}'+
		'.zq-fix1-c1 .ico2-phone{margin:5px 8px 5px 0;}'+
		'.zq-fix1-c2 .ico2-phone{margin-bottom:5px;}'+
		'.zq-fix1-c2{display:none;width:16px;padding: 5px 7px 30px;background: #49b3e9 url(//ue1.17173cdn.com/a/9yin/index/2015/img/zq-img.png) no-repeat -30px bottom;color: #fff; line-height: 1.3; font-family:"Microsoft YaHei";cursor: pointer;position: absolute;'+this.position +': 0; top: 0;}'+
		'.zq-fix1-c1-c1{overflow: hidden;*zoom:1;}'+
		'.zq-fix1-c1-c1 .btn-box{overflow:hidden;*zoom:1;}'+
		'.zq-fix1-c1-c1 .btn-box a{float: left;height: 28px;width: 73px;display:block;line-height: 28px;background: #fff; color: #28a7e7;font-size: 14px;font-weight: bold;text-align: center;border:1px solid #dadada;}'+
		'.zq-fix1-c1-c1 .btn-box a:hover{background: #49b3e9; color: #fff;border-color:#49b3e9}'+
		'.zq-fix1-c1-c1 .btn-box .btn-c1{border-radius:5px 0 0 5px;}'+
		'.zq-fix1-c1-c1 .btn-box .btn-c2{border-radius: 0 5px 5px 0;border-left: 0;}'+
		'.zq-fix1-c1-c1 .logo-pic{text-align: center;margin-bottom: 10px;}'+
		'.zq-fix1-c1-c1 .logo-pic a{display:block;}'+
		'.zq-fix1-c1-c1 .btn-jrzq,.zq-fix1-bd .btn-jrzq{display: block;width: 100%; border-radius:5px;background-color:#d1a23e; font: bold 18px/32px "Microsoft YaHei";color: #fff;text-align: center;margin-top: 10px; }'+
		'.zq-fix1-c1-c1 .btn-jrzq:hover,.zq-fix1-bd .btn-jrzq:hover{background-color:#ca982f; text-decoration: none;}'+
		'.zq-fix1-c1-c2{overflow: hidden;*zoom:1;}'+
		'.zq-fix1-c1-c2 .art-item-pt{position: relative;*zoom:1;display: block;width: 100%;height: 80px;overflow:hidden;color: #fff;text-align: center;cursor: pointer;font-size:12px; }'+
		'.zq-fix1-c1-c2 .art-item-pt .avatar{display: block;}'+
		'.zq-fix1-c1-c2 .art-item-pt  img { display: block; width: 100%; }'+
		'.zq-fix1-c1-c2 .art-item-pt .mask { cursor: pointer; }'+
		'.zq-fix1-c1-c2 .art-item-pt .txt{position: absolute;display: block; bottom: 0; left: 0;z-index: 3;width: 100%;height:20px;line-height: 20px;overflow:hidden; }'+
		'.zq-fix1-c1-c2 .art-item-pt:hover{text-decoration: none;}'+
		'.zq-fix1-c1-c2 .art-item-pt:hover .txt{text-decoration: underline;}'+
		'.zq-fix1-c1-c3{margin-top: 10px;}'+
		'.zq-fix1-c1-c3 .new-list .list-item{line-height: 22px;}'+
		'.zq-fix1-c1-c3 .new-list .tit{ width: 99.5%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }'+
		'.zq-fix1-c1-c3 .new-list .tit a{font-size: 12px; color: #000; font-family: microsoft yahei;}'+
		'.zq-fix1-c1-c3 .new-list .tit a:hover{text-decoration:underline;}'+
		'.zq-fix1-c1-c3 .new-list .ico-dot{width:4px;height:4px;line-height: 0;vertical-align:middle;display:inline-block;background: #c9c9c9; border-radius: 50%; margin: 0 5px 4px 0;* margin: 0 5px 4px 0;overflow: hidden;}'+
		'.zq-fix1-item .zq-fix1-bd{padding: 10px;overflow: hidden;display: none;}'+
		'.zq-fix1-item .ico-plus{width:10px;height: 10px;background-position:0 -45px;position: absolute;right: 12px;top: 12px;overflow:hidden;*zoom:1;}'+
		'.zq-fix1-item-show .zq-fix1-bd{display:block;}'+
		'.zq-fix1-item-show .ico-plus{background-position:0 -87px;}'+
		'.enter-box{font-family: "Microsoft YaHei"; position:relative; height: 55px;}'+
		'.enter-box .form-item{overflow: hidden; *zoom:1;}'+
		'.enter-box .form-group{width:109px; height:26px; float: left; border: 1px solid #ff6d55; background: #fff; padding: 2px 2px; overflow: hidden;}'+
		'.enter-box .form-group .form-text{border: 0; height: 26px; line-height:26px; width: 109px; font-size: 12px;}'+
		'.enter-box .btn-get{float: left;width:35px; cursor:pointer; height: 32px;  background:#ff6d55; color:#fff600; font-size: 18px; text-align: center; line-height: 30px; *line-height: 32px; border-top-right-radius:5px; border-bottom-right-radius: 5px; }'+
		'.enter-box .btn-get:hover{background:#f3543a}'+
		'.enter-box .form-result{color: #454545; height:22px; line-height: 22px; color:#f43131; font-size: 12px; display:none}'+
		'.enter-box .ico-right{background: url(//ue.17173cdn.com/a/9yin/index/2015/img/ico3.png) no-repeat 0 0; width:16px; height: 13px; margin: 0 5px 3px 0}'+
		'.enter-box .ico-wrong{background: url(//ue.17173cdn.com/a/9yin/index/2015/img/ico3.png) no-repeat 0 -30px; width:10px; height: 10px; margin: 0 5px 3px 0}'+
		/*皮肤调整*/
		'.zq-fix1-c1 .zq-fix1-hd{background: #4778b8;}'+
		'.zq-fix1-c1 .zq-fix1-bd{background-color:#e2e2e2;}'+
		/*进入专区 按钮*/
		'.zq-fix1-c1-c1 .btn-jrzq{background:#d1a23e;color: #fff;}'+
		'.zq-fix1-c1-c1 .btn-jrzq:hover{background:#ca982f;}'+
		'.zq-fix1-bd .btn-jrzq{background:#d1a23e;color: #fff;}'+
		'.zq-fix1-bd .btn-jrzq:hover{background:#ca982f;}'+
		/*缩小框背景色*/
		'.zq-fix1-c2{background: #49b3e9 url(//ue1.17173cdn.com/a/9yin/index/2015/img/zq-img.png) no-repeat -30px bottom;}'+
		/*关闭按钮*/
		'.zq-fix1 .ico-close{background:url(//ue1.17173cdn.com/a/9yin/index/2015/img/zq-img.png) no-repeat 0 0;}'+
		':root .mask { filter: none \0; }'+
		'</style>';
		$('head').append(this.css);
		$('body').append(this.html.join(''));

		this.emit(adv.ENUM.EVENTS.setuped);
	},
	play: function() {
		var self = this;


		$('.zq-fix1-item').each(function(){
				var $this = $(this);
				var $tit = $this.find('.zq-fix1-hd');
				// $('body').delegate($tit, 'click', function(event) {
				// });
				$tit.click(function(){
					$this.addClass('zq-fix1-item-show').siblings().removeClass('zq-fix1-item-show');
				})

			});
			$('body').delegate('.zq-fix1 .ico-close', 'click', function(event) {
				$('.zq-fix1 .zq-fix1-c2').fadeIn();
				$('.zq-fix1 .zq-fix1-c1').fadeOut();
				$('.zq-fix1 .ico-close').hide();
			});

			$('body').delegate('.zq-fix1-c2', 'click', function(event) {
				$('.zq-fix1 .ico-close').show();
				$('.zq-fix1 .zq-fix1-c1').fadeIn();
				$('.zq-fix1 .zq-fix1-c2').fadeOut();
			});





			$('input[name=mobile]').focus(function(){
				$(document).keydown(function(event){
					if(event.keyCode==13){//13 回车键
						var mobile = $('input[name=mobile]').val();
					    sendMesage(mobile) ;
					 }
				});
			})
			function sendMesage(mobile) {
				$.ajax({
					url: '//act.17173.com/2014/04/sms0408/index.php?do=SendMsg&callback=?',
					type: 'GET',
					dataType: 'jsonp',
					data: {mobile: mobile, id: self.options.sendid},
					success:function(data){

						if(data.status == 0) {
							$('.zq-fix1 .error').show();
							$('.zq-fix1 .correct').hide();
							$('.zq-fix1 .error .tips').text(data.msg);
						} else{
							$('.zq-fix1 .error').hide();
							$('.zq-fix1 .correct').show();
						}
					}
				})
			}
			$('body').delegate('.btn-get', 'click', function(event) {
				var mobile = $('input[name=mobile]').val();
				sendMesage(mobile) ;
				return false;

			});
			self.positionFixed(document.getElementById("AdZqMessageSend"), 260);


		this.emit(adv.ENUM.EVENTS.played)
	},
	stop: function() {
		this.base();

	    this.emit(adv.ENUM.EVENTS.stoped)
	},
	dispose: function() {}
});

