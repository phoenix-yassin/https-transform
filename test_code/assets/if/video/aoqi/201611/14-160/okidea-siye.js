(function(){
	var htt =  'https:' == document.location.protocol ? '' : 'http:',

		okideaad_id = "38577",//广告位id
		okideaad_date = "201611/14-160",
		okhref_17173 = htt+"//Cvda.17173.com/click?media_code=17173&ad_code=171731039&resource_code=1046&order_code=1011459",//173的监测链接

		//设置广告基本参数
		OkIdea_sy1={
			"1":okideaad_id,
			"2":okideaad_id,
			"3":okideaad_id,
			"res_url":"",
			"res1":htt+"//images.17173.com/2016/www/if/video/aoqi/"+okideaad_date+"/A1.swf",
			"res1f":htt+"//images.17173.com/2016/www/if/video/aoqi/"+okideaad_date+"/A2.swf",
			"href1":okhref_17173,
			"top1":40,
			"res2":htt+"//images.17173.com/2016/www/if/video/aoqi/"+okideaad_date+"/B1.swf",
			"res2f":htt+"//images.17173.com/2016/www/if/video/aoqi/"+okideaad_date+"/B2.swf",
			"href2":okhref_17173,
			"top2":162,
			"res3":htt+"//images.17173.com/2016/www/if/video/aoqi/"+okideaad_date+"/C1.swf",
			"res3f":htt+"//images.17173.com/2016/www/if/video/aoqi/"+okideaad_date+"/C2.swf",
			"href3":okhref_17173,
			"top3":292,
			"close_btn":htt+"//images.17173.com/2016/www/if/video/aoqi/"+okideaad_date+"/close.jpg",
			"oi_log":htt+"//adelr.okideaad.com/count?",
			"show_time":6
		}

	$(document).ready(function(){
		$('.festival-box').hide();
	});


	//ue.NavSide.hideOverTop(600);
	var OkIdea_siye_in,oi_sy_fold;
	var oi_sy_played,oi_sy_time_area,oi_time,oi_now_timeArea;
	//预设广告内容
	OkIdea_siye_in='<div id="OkIdea_sy_fold" class="OkIdea_sy_fold" style="width:100px; height:430px; position:absolute; right:0px; top:40px; z-index:999;"><div class="oi_fold" style="width:100px; height:90px; position:relative; visibility:hidden;"><a style="position:absolute; z-index:1000; left:0px; top:0px; display:inline-block; width:100px; height:90px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="javascript:_aoqi_sy.replay(1)"></a><embed width="100" height="90" src="'+OkIdea_sy1.res_url+OkIdea_sy1.res1f+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="'+htt+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div><div class="oi_fold oi_fold2" style="width:100px; height:90px; position:relative; margin-top:60px; visibility:visible;"><a style="position:absolute; z-index:1000; left:0px; top:0px; display:inline-block; width:100px; height:90px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="javascript:_aoqi_sy.replay(2)"></a><embed width="100" height="90" src="'+OkIdea_sy1.res_url+OkIdea_sy1.res2f+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="'+htt+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div><div class="oi_fold" style="width:100px; height:90px; position:relative;margin-top:60px; visibility:visible;"><a style="position:absolute; z-index:1000; left:0px; top:0px; display:inline-block; width:100px; height:90px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="javascript:_aoqi_sy.replay(3)"></a><embed width="100" height="90" src="'+OkIdea_sy1.res_url+OkIdea_sy1.res3f+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="'+htt+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div><a href="javascript:_aoqi_sy.closeall()" style="position:absolute; display:inline-block; width:55px; height:15px; right:0px; bottom:0px; z-index:1000;"><img src="'+OkIdea_sy1.res_url+OkIdea_sy1.close_btn+'" alt="close all" width="55" height="15" /></a></div>';
			
			oi_sy_fold='<div id="OkIdea_sy_show" class="OkIdea_sy_show"  style="width:420px; height:300px; position:absolute; right:100px; top:40px; z-index:1001;">'+OkIdea_sy_bigswf(1)+OkIdea_sy_bighref(1)+'</div>';
	function OkIdea_sy_bighref(c){
		var oi_sy_bighref='<a class="OkIdea_sy_href" style="position:absolute; z-index:1001; left:0px; top:0px; display:inline-block; width:359px; height:300px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="'+OkIdea_sy1["href"+c]+'" target="_blank"></a><a class="OkIdea_sy_href2" style="position:absolute; z-index:1001; left:360px; top:15px; display:inline-block; width:60px; height:285px; background:#000;filter:alpha(opacity=1);opacity:0.01;" href="'+OkIdea_sy1["href"+c]+'" target="_blank"></a>';
		return oi_sy_bighref;
	}
	function OkIdea_sy_bigswf(c){
		
		var oi_sy_bigswf='<embed width="420" class="oi_sy_swf" id="oi_sy_swf" height="300" src="'+OkIdea_sy1.res_url+OkIdea_sy1["res"+c]+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="'+htt+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always">';
		return oi_sy_bigswf;
	}

	//写入广告的函数
	function oi_sy_putIn(){
		if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
			return;
		}else{
			$("body").prepend(OkIdea_siye_in+oi_sy_fold);
			$("#OkIdea_sy").css({top:($(window).height()-$("#OkIdea_sy").height())/2+$(window).scrollTop()});
			sy_sign_log("show","","1");
			//首页模块分析与首页经营分析，异步追加（广告）监控
			$(function(){
				//alert("函数执行了！");
				_jc_ping.push([
				　'_trackBlock',
				　$('.oi_fold2'),
				　'a7c8b91e720933fa51e33c0fed29de09',
				   true
				]);
				_jc_ping.push([
				　'_trackBlock',
				　$('.OkIdea_sy_show .OkIdea_sy_href,.OkIdea_sy_show .OkIdea_sy_href2'),
				　'a7c8b91e720933fa51e33c0fed29de09',
				 false
				]);
			})
		}

	}

	window._aoqi_sy={
		close:null,
		playover:null,
		replay:null,
		closeall:null
	}
	//写入接口队列
	AD=new ADM("oi_sy_in",3);
	AddSchedule(AD);
	var _oi_sy_in_3;
	window.oi_sy_in_main=function(o){
		_oi_sy_in_3=o;
		oi_sy_putIn();
	}

	//大图关闭
	_aoqi_sy.close=function(second,m){
		$("#OkIdea_sy_show").hide();
		$("#oi_sy_swf").remove();
		$(".oi_fold").css({visibility:"visible"});
		m=m+"";
		sy_sign_log("close","&time="+second,m);
		_oi_sy_in_3.s=2;
	}
	//播放完毕
	_aoqi_sy.playover=function(n){
		$("#OkIdea_sy_show").hide();
		$("#oi_sy_swf").remove();
		$(".oi_fold").css({visibility:"visible"});
		_oi_sy_in_3.s=2;
		sy_sign_log("play_all","&time="+OkIdea_sy1.show_time*1000,n)
	}
	//重播
	_aoqi_sy.replay=function (s){
		$("#oi_sy_swf").remove();
		$(".oi_fold").css({visibility:"visible"});
		$(".oi_fold:eq("+(parseInt(s)-1)+")").css({visibility:"hidden"});
		$("#OkIdea_sy_show").css({"top":OkIdea_sy1["top"+s],"display":"block"});
		$("#OkIdea_sy_show").prepend(OkIdea_sy_bigswf(s));
		//document.getElementById("oi_sy_swf").innerHTML=OkIdea_sy_bigswf(s);
		$("#OkIdea_sy_show").show();
		var oi_s=s+"";
		sy_sign_log("replay","",oi_s)
	}
	//关闭回收位
	_aoqi_sy.closeall=function(){
		$("#OkIdea_sy_fold,#OkIdea_sy_show").remove();
		sy_sign_log("recycle","","1");
		_oi_sy_in_3.s=2;
	}
	//sign log
	function sy_sign_log(log_type,data,m){
		//$.getJSON(OkIdea_sy1.oi_log+log_type+"_ad_id="+OkIdea_sy1[m]+data,{},function(data){});
		var log_img = new Image();
		log_img.src = OkIdea_sy1.oi_log+log_type+"_ad_id="+OkIdea_sy1[m]+data;
	}

})();
