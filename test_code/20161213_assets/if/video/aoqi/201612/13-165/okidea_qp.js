(function(){

	var htt =  'https:' == document.location.protocol ? '' : 'http:',

		okideaad_id = "38635",//广告位id
		okideaad_date = "201612/13-165",
		okhref_17173 = htt+"//Cvda.17173.com/click?media_code=17173&ad_code=171731000&resource_code=1000&order_code=1012062",//173的监测链接
		
	//set arguments
		OkIdea_qp1={
		"flash_src": htt+"//images.17173.com/2016/www/if/video/aoqi/"+okideaad_date+"/1.swf",
		"flash_h":400,
		"flash_w":400,
		"flash_fold": htt+"//images.17173.com/2016/www/if/video/aoqi/"+okideaad_date+"/2.swf",
		"fold_w":20,
		"fold_h":80,
		"oi_qp_id":okideaad_id,
		"oi_url":okhref_17173,
		"oi_log":htt+"//adelr.okideaad.com/count?",
		"show_time":8,
	//	"interval_time":30,
		"times":4
		}

	window._aoqi_dtqp ={
		close:null,
		playover:null,
		replay:null
	}


	var oi_qp1_video_in,oi_qp_fold,oi_qp_played,oi_qp_time_area,oi_time,oi_now_timeArea,oi_coo,coostr;
	//check cookie, interval time
	oi_time = new Date().getTime();
	oi_now_timeArea = Math.floor((oi_time-9*60*60*1000)/(12*60*60*1000));

	oi_coo = getCookie("oi_dtqp_"+OkIdea_qp1.oi_qp_id);
	if(oi_coo==null){
		oi_qp_time_area=null;
	}else{
		oi_coo = oi_coo.split('&');
		oi_qp_time_area = oi_coo[0];
	}
	if((oi_qp_time_area==null)||(oi_qp_time_area!=oi_now_timeArea)){
		oi_qp_played=1;
		coostr = oi_now_timeArea+'&'+oi_qp_played;
	}else if(oi_qp_time_area==oi_now_timeArea){
		oi_qp_played = oi_coo[1];
		oi_qp_played==null?oi_qp_played=1:oi_qp_played=parseInt(oi_qp_played)+1;
		coostr = oi_coo[0]+'&'+oi_qp_played
	}
	SetCookie("oi_dtqp_"+OkIdea_qp1.oi_qp_id,coostr);
	//Ԥ��������
	function OkIdea_qp_p1(display){
		var p1_control;
		display==1?p1_control="block":p1_control="none";
		oi_qp1_video_in='<div id="OkIdea_qp" class="OkIdea_qp" style="position:absolute;width:'+OkIdea_qp1.flash_w+'px;height:'+OkIdea_qp1.flash_h+'px;margin-left:'+(-OkIdea_qp1.flash_w/2)+'px;top:200px; left:50%; z-index:99998;display:'+p1_control+';"><a class="OkIdea_qp_href" href="'+OkIdea_qp1.oi_url+'" target="_blank" title="" style="display:inline-block;position:absolute;left:0px;top:0px; width:328px;height:400px;z-index:99999;background:#000;filter:alpha(opacity=1);opacity:0.01;"></a><a class="OkIdea_qp_href" href="'+OkIdea_qp1.oi_url+'" target="_blank" title="" style="display:inline-block;position:absolute;right:0px;top:0px; width:71px;height:382px;z-index:99999;background:#000;filter:alpha(opacity=1);opacity:0.01;"></a><a href="javascript:;" onclick="_aoqi_dtqp.close()" style="display:inline-block;position:absolute;right:0px;bottom:0px; width:70px;height:18px;z-index:99999;background:#000;filter:alpha(opacity=1);opacity:0.01;" ></a><embed width="'+OkIdea_qp1.flash_w+'" height="'+OkIdea_qp1.flash_h+'" src="'+OkIdea_qp1.flash_src+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="'+htt+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div>';
		return oi_qp1_video_in;
	}
	function OkIdea_qp_p2(display){
		var p2_control;
		display==1?p2_control="block":p2_control="none";
		oi_qp_fold='<div id="OkIdea_qp_fold" class="OkIdea_qp_fold" style="position:absolute;left:0px;top:32px; width:'+OkIdea_qp1.fold_w+'px;height:'+OkIdea_qp1.fold_h+'px;z-index:5;display:'+p2_control+';"><a href="'+OkIdea_qp1.oi_url+'" class="OkIdea_qp_href" target="_blank" title="" style="display:inline-block;position:absolute;left:0px;top:0px; width:20px;height:45px;z-index:6;background:#000;filter:alpha(opacity=1);opacity:0.01;"></a><a href="javascript:_aoqi_dtqp.replay()" title="\u91cd\u64ad" style="display:inline-block;position:absolute;left:0px;top:45px; width:20px;height:35px;z-index:6;background:#000;filter:alpha(opacity=1);opacity:0.01;"></a><embed width="'+OkIdea_qp1.fold_w+'" height="'+OkIdea_qp1.fold_h+'" src="'+OkIdea_qp1.flash_fold+'" quality="autohigh" wmode="transparent" type="application/x-shockwave-flash" plugspace="'+htt+'//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" allowscriptaccess="always"></div>'
		return oi_qp_fold;
	}

	AD=new ADM("oi_qp_in",2);
	AddSchedule(AD);
	var _oi_qp_in_2;
	window.oi_qp_in_main =function(o){
		_oi_qp_in_2=o;
		oi_qp_putIn();
	}

	function oi_qp_putIn(){
		
		if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){
				$("body").prepend(OkIdea_qp_p1(0)+OkIdea_qp_p2(0));
			}else{

				if(oi_qp_played<=OkIdea_qp1.times){
					$("body").prepend(OkIdea_qp_p1(1));
					}
				else if(oi_qp_played>OkIdea_qp1.times){
					$("body").prepend(OkIdea_qp_p2(1));
						_oi_qp_in_2.s=2;
					}
				else{};
			}
		
		//$("#OkIdea_qp").css({top:($(window).height()-$("#OkIdea_qp").height())/2+$(window).scrollTop()});
		$("#OkIdea_qp").css({'top':'200px'});
		qp_sign_log("show","");
		//首页模块分析与首页经营分析，异步追加（广告）监控
		$(function(){
			_jc_ping.push([
				'_trackBlock',
				$('.OkIdea_qp .OkIdea_qp_href:eq(0),.OkIdea_qp_fold .OkIdea_qp_href'),
				'5d73e93f6f3d3bbf30b234349aeaad39',
				true
			]);
			_jc_ping.push([
				'_trackBlock',
				$('.OkIdea_qp .OkIdea_qp_href:eq(1)'),
				'5d73e93f6f3d3bbf30b234349aeaad39',
				false
			]);

		});
	}

	//�ر�
	_aoqi_dtqp.close=function(second){
		$("#OkIdea_qp").remove();
		$("body").prepend(OkIdea_qp_p2(1));
		_oi_qp_in_2.s=2;
		qp_sign_log("close","&time="+second)
	}
	//�������
	_aoqi_dtqp.playover=function(){
		$("#OkIdea_qp").remove();
		$("body").prepend(OkIdea_qp_p2(1));
		_oi_qp_in_2.s=2;
		qp_sign_log("play_all","&time="+OkIdea_qp1.show_time*1000);
	}
	//�ز�
	_aoqi_dtqp.replay=function(){
		$("body").prepend(OkIdea_qp_p1(1));
		$("#OkIdea_qp_fold").remove();
		qp_sign_log("replay","");
	}
	//cookie��������
	function getCookie(name)//ȡcookies����       
	{
		var oi_arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(oi_arr != null) return unescape(oi_arr[2]); return null;
	}
	function SetCookie(name,value)//����cookie
	{
		var oi_Days = 14; //�� cookie ��������XX ��
		var oi_exp = new Date();    //��ȡ��ʱʱ��;
		oi_exp.setTime(oi_exp.getTime() + oi_Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + oi_exp.toGMTString();
	}
	//sign log
	function qp_sign_log(log_type,data){
		var log_img = new Image();
		log_img.src = OkIdea_qp1.oi_log+log_type+"_ad_id="+OkIdea_qp1.oi_qp_id+data;
	}

	/*var log_img = new Image();
	log_img.src = OkIdea_qp1.oi_log+log_type+"_ad_id="+OkIdea_qp1.oi_qp_id;*/

	//����ʱ��λ���ڵ�ָ��λ��
	$(document).ready(function(){
		$(window).scroll(function(){
			$("#OkIdea_qp").css({top:213});
		}).resize(function(){
			$("#OkIdea_qp").css({top:213});
		});
	});

})();