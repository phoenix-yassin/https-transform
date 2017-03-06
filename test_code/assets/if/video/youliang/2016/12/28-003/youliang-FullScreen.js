(function(){

	var closeAd;

	var htt =  'https:' == document.location.protocol ? '' : 'http:',

		youliangAd_id = "10003",//广告位id
		youliangAd_date = "2016/12/28-003",
		ylhref_17173 = htt+"//Cvda.17173.com/click?media_code=17173&ad_code=171731000&resource_code=1000&order_code=1012246",//173的监测链接
		
	//set arguments
		Youliang_qp1={
		"flash_src": htt+"//images.17173.com/2016/www/if/video/youliang/"+youliangAd_date +"/show.swf",
		"flash_h":400,
		"flash_w":400,
		"flash_fold":htt+"//images.17173.com/2016/www/if/video/youliang/"+youliangAd_date +"/hidden.swf",
		"fold_w":20,
		"fold_h":80,
		"yl_qp_id":youliangAd_id,
		"yl_url":ylhref_17173,
		"show_time":8,
	//	"interval_time":30,
		"times":4
		}

	window._aoqi_dtqp ={
		close:null,
		playover:null,
		replay:null
	}


	var yl_qp1_video_in,yl_qp_fold,yl_qp_played,yl_qp_time_area,yl_time,yl_now_timeArea,yl_coo,coostr;
	//check cookie, interval time
	yl_time = new Date().getTime();
	yl_now_timeArea = Math.floor((yl_time-9*60*60*1000)/(12*60*60*1000));

	yl_coo = getCookie("yl_dtqp_"+Youliang_qp1.yl_qp_id);
	if(yl_coo==null){
		yl_qp_time_area=null;
	}else{
		yl_coo = yl_coo.split('&');
		yl_qp_time_area = yl_coo[0];
	}
	if((yl_qp_time_area==null)||(yl_qp_time_area!=yl_now_timeArea)){
		yl_qp_played=1;
		coostr = yl_now_timeArea+'&'+yl_qp_played;
	}else if(yl_qp_time_area==yl_now_timeArea){
		yl_qp_played = yl_coo[1];
		yl_qp_played==null?yl_qp_played=1:yl_qp_played=parseInt(yl_qp_played)+1;
		coostr = yl_coo[0]+'&'+yl_qp_played
	}
	SetCookie("yl_dtqp_"+Youliang_qp1.yl_qp_id,coostr);

	function Youliang_qp_p1(display){
		var p1_control;
		display==1?p1_control="block":p1_control="none";
		yl_qp1_video_in='<div id="Youliang_qp" class="Youliang_qp" style="position:absolute;width:'+Youliang_qp1.flash_w+'px;height:'+Youliang_qp1.flash_h+'px;margin-left:'+(-Youliang_qp1.flash_w/2)+'px;top:200px; left:50%; z-index:99998;display:'+p1_control+';"><a class="Youliang_qp_href" href="'+Youliang_qp1.yl_url+'" target="_blank" title="" style="display:inline-block;position:absolute;left:0px;top:0px; width:325px;height:400px;z-index:99999;background:#000;filter:alpha(opacity=1);opacity:0.01;"></a><a class="Youliang_qp_href" href="'+Youliang_qp1.yl_url+'" target="_blank" title="" style="display:inline-block;position:absolute;right:0px;top:0px; width:75px;height:377px;z-index:99999;background:#000;filter:alpha(opacity=1);opacity:0.01;"></a><a href="javascript:;" onclick="_aoqi_dtqp.close()" style="display:inline-block;position:absolute;right:0px;bottom:0px; width:75px;height:23px;z-index:99999;background:#000;filter:alpha(opacity=1);opacity:0.01;" ></a><embed width="'+Youliang_qp1.flash_w+'" height="'+Youliang_qp1.flash_h+'" src="'+Youliang_qp1.flash_src+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="'+htt+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div>';
		return yl_qp1_video_in;
	}
	function Youliang_qp_p2(display){
		var p2_control;
		display==1?p2_control="block":p2_control="none";
		yl_qp_fold='<div id="Youliang_qp_fold" class="Youliang_qp_fold" style="position:absolute;left:0px;top:32px; width:'+Youliang_qp1.fold_w+'px;height:'+Youliang_qp1.fold_h+'px;z-index:5;display:'+p2_control+';"><a href="'+Youliang_qp1.yl_url+'" class="Youliang_qp_href" target="_blank" title="" style="display:inline-block;position:absolute;left:0px;top:0px; width:20px;height:45px;z-index:6;background:#000;filter:alpha(opacity=1);opacity:0.01;"></a><a href="javascript:_aoqi_dtqp.replay()" title="\u91cd\u64ad" style="display:inline-block;position:absolute;left:0px;top:45px; width:20px;height:35px;z-index:6;background:#000;filter:alpha(opacity=1);opacity:0.01;";></a><embed width="'+Youliang_qp1.fold_w+'" height="'+Youliang_qp1.fold_h+'" src="'+Youliang_qp1.flash_fold+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="'+htt+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div>'
		return yl_qp_fold;
	}

	AD=new ADM("yl_qp_in",2);
	AddSchedule(AD);
	var _yl_qp_in_2;
	window.yl_qp_in_main =function(o){
		_yl_qp_in_2=o;
		yl_qp_putIn();
	}

	function yl_qp_putIn(){
		
		if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){
				$("body").prepend(Youliang_qp_p1(0)+Youliang_qp_p2(0));
			}else{

				if(yl_qp_played<=Youliang_qp1.times){
					$("body").prepend(Youliang_qp_p1(1));
					closeAd = window.setTimeout(function(){_aoqi_dtqp.playover()},8000);
					}
				else if(yl_qp_played>Youliang_qp1.times){
					$("body").prepend(Youliang_qp_p2(1));
						_yl_qp_in_2.s=2;
					}
				else{};
			}
		
		//$("#Youliang_qp").css({top:($(window).height()-$("#Youliang_qp").height())/2+$(window).scrollTop()});
		$("#Youliang_qp").css({'top':'200px'});
		//首页模块分析与首页经营分析，异步追加（广告）监控
		$(function(){
			_jc_ping.push([
				'_trackBlock',
				$('.Youliang_qp .Youliang_qp_href:eq(0),.Youliang_qp_fold .Youliang_qp_href'),
				'5d73e93f6f3d3bbf30b234349aeaad39',
				true
			]);
			_jc_ping.push([
				'_trackBlock',
				$('.Youliang_qp .Youliang_qp_href:eq(1)'),
				'5d73e93f6f3d3bbf30b234349aeaad39',
				false
			]);

		});
	} 

	//关闭大图广告
	_aoqi_dtqp.close=function(second){
		clearTimeout(closeAd);
		$("body").prepend(Youliang_qp_p2(1));
		$("#Youliang_qp").remove();
		_yl_qp_in_2.s=2;
	}
	//播放完毕
	_aoqi_dtqp.playover=function(){
		// alert("调用播放完毕");
		$("#Youliang_qp").remove();
		$("body").prepend(Youliang_qp_p2(1));
		clearTimeout(closeAd);
		_yl_qp_in_2.s=2;
	}
	//重播大图广告
	_aoqi_dtqp.replay=function(){
			clearTimeout(closeAd);
			$("body").prepend(Youliang_qp_p1(1));
			$("#Youliang_qp_fold").remove();
			closeAd = window.setTimeout(function(){_aoqi_dtqp.playover()},8000);				
	}
	//cookie处理部分
	function getCookie(name)      
	{
		var yl_arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(yl_arr != null) return unescape(yl_arr[2]); return null;
	}
	function SetCookie(name,value)
	{
		var yl_Days = 14; 
		var yl_exp = new Date();    
		yl_exp.setTime(yl_exp.getTime() + yl_Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + yl_exp.toGMTString();
	}

	$(document).ready(function(){
		$(window).scroll(function(){
			$("#Youliang_qp").css({top:213});
		}).resize(function(){
			$("#Youliang_qp").css({top:213});
		});
	});

})();