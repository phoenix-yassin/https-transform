function InitSchedule(){for(ADM_S.sort(ADM_sort),iAI=0;iAI<ADM_S.length;iAI++)ADM_S[iAI].i=iAI}function ADM_sort(n,t){return n.p>t.p?1:n.p==t.p?0:-1}function ADM_Start(o){eval("typeof("+o.t+"_main)")=="function"&&eval(o.t+"_main(o)")}function DoSchedule(){var n=-1;for(dAI=0;dAI<ADM_S.length;dAI++)switch(ADM_S[dAI].s){case 0:if(n==-1&&(n=ADM_S[dAI].p),n==ADM_S[dAI].p){ADM_S[dAI].s=1,ADM_Start(ADM_S[dAI]);break}case 1:setTimeout("DoSchedule()",300);return}}function WriteAd(n,t){var i=document.getElementById(n);i==null&&(i=document.createElement("div"),i.id=n,ADM_CE==1?document.getElementById(ADM_DIV).insertAdjacentElement("beforeBegin",i):document.getElementById(ADM_DIV).insertBefore(i,null)),i.innerHTML=t}function AddSchedule(n){n!=null&&n instanceof ADM&&(ADM_S[ADM_S.length]=n)}function ADM(n,t){this.t=n,this.p=t,this.s=0,this.i=0,this.style="position:absolute;"}function ADM_Check(n){return n.CookieHour&&ADM_CheckCookie(n.t+n.p+location.host.substring(0,location.host.indexOf(".")),n)}function ADM_CheckCookie(n,t){var i=new Date,r=String(i.getYear())+String(i.getMonth()+1)+String(i.getDate());return ADM_GetCookie(n)==r?!0:(i.setTime(i.getTime()+parseFloat(typeof t.CookieHour=="undefined"?24:parseFloat(t.CookieHour))*36e5),ADM_SetCookie(n,r,i),!1)}function ADM_GetCookie(n){for(var r=n+"=",u=r.length,f=document.cookie.length,t=0,i;t<f;){if(i=t+u,document.cookie.substring(t,i)==r)return ADM_GetCookieVal(i);if(t=document.cookie.indexOf(" ",t)+1,t==0)break}return null}function ADM_GetCookieVal(n){var t=document.cookie.indexOf(";",n);return t==-1&&(t=document.cookie.length),unescape(document.cookie.substring(n,t))}function ADM_SetCookie(n,t){var i=ADM_SetCookie.arguments,r=ADM_SetCookie.arguments.length,u=r>2?i[2]:null,f=r>3?i[3]:null,e=r>4?i[4]:null,o=r>5?i[5]:!1;document.cookie=n+"="+escape(t)+(u==null?"":"; expires="+u.toGMTString())+(f==null?"":"; path="+f)+(e==null?"":"; domain="+e)+(o==!0?"; secure":"")}function ADM_Media(n,t,i,r,u,f){var e="";return n.indexOf(".swf")!=-1?ADM_CE==1?(e="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='"+ADM_F+"' id='"+(u==null?r.t:u)+"' width='"+t+"' height='"+i+"' ",r.style&&(e+=" style='"+r.style+"'"),r.extfunc&&(e+=" "+r.extfunc+" "),e+=" ><param name='movie' value='"+n+"'>",r.play&&(e+="<param name='play' value='"+r.play+"'>"),r.wmode&&r.wmode!=""&&(e+="<param name='wmode' value='"+r.wmode+"'>"),typeof r.loop!="undefined"&&(e+="<param name='loop' value='"+r.loop+"'>"),e+="<param name='quality' value='autohigh'><param name='allowScriptAccess' value='always'><\/object>"):(e="<embed ",r.style&&(e+=" style='"+r.style+"'"),r.extfunc&&(e+=" "+r.extfunc+" "),e+=" src='"+n+"' quality='autohigh' id='"+(u==null?r.t:u)+"' name='"+(u==null?r.t:u)+"' width='"+t+"' height='"+i+"' ",r.wmode&&r.wmode!=""&&(e+=" allowScriptAccess='always' wmode='"+r.wmode+"' "),typeof r.loop!="undefined"&&(e+=" loop='"+r.loop+"' "),e+="type='application/x-shockwave-flash' pluginspage='//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash'><\/embed>"):(n.indexOf(".gif")!=-1||n.indexOf(".jpg")!=-1)&&(e="<a href='"+(f==null?r.href:f)+"' target='_blank'><img ",r.style&&(e+=" style='"+r.style+"'"),r.extfunc&&(e+=" "+r.extfunc+" "),e+=" id='"+(u==null?r.t:u)+"' src='"+n+"' border='0' width='"+t+"' height='"+i+"'><\/a>"),e}function ADM_FSCommand(n,t){var i="";return ADM_CE==1&&(i="<Script language='Javascript' for='"+(t==null?n.t:t)+"' event='FSCommand(command,args)'>\n"+(t==null?n.t:t)+"_DoFSCommand(command,args);\n<\/Script>\n"),i}function ADM_Close(n,t){ADM_S[n].s=2;var i=document.getElementById(t);i&&(i.style.display="none")}function FULL_main(n){var i,t;if(setTimeout(function(){n.s=2},15e3),ADM_Check(n)){n.s=2;return}if(i=!1,n.StartTime.length==n.EndTime.length&&n.EndTime.length==n.src.length&&n.src.length==n.href.length){for(FAi=0;FAi<n.src.length;FAi++){var r=new Date(n.StartTime[FAi]),u=new Date(n.EndTime[FAi]),f=new Date;if(r<=u&&f<u&&f>=r){if(t=document.getElementById("fullscreenad"),t!=null){t.style.display="block",n.style="",t.innerHTML=ADM_Media(n.src[FAi],760,480,n,"",n.href[FAi]),i=!0,setTimeout("ADM_Close("+n.i+",'fullscreenad')",isNaN(parseInt(n.timeout))?7e3:parseInt(n.timeout));return}n.s=2;return}}i||ADM_Close(n.i,"fullscreenad")}}function POP_STRUCT(n){n.s=2;var f=n.name?n.name:"",t=n.superad?screen.width-9:parseInt(n.width?n.width:350)-4,i=n.superad?screen.height-56:parseInt(n.height?n.height:250)-4,r=n.t=="POPUP"?n.left?n.left:0:screen.width+10,u=n.t=="POPUP"?n.top?n.top:0:screen.height+10;return window.open("about:blank","","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,width="+t+",height="+i+",top="+u+",left="+r)}function POP_WINDOW(n){var t="<html><head><meta http-equiv='content-type' content='text/html; charset=gb2312'><title>";return t+=n.title?n.title:n.superad?"SOHU.com \u9473\u5c7e\u59c7\u9a9e\u57ae\u61a1":"SOHU.com "+n.t+" Ad",t+="<\/title>",t+="\n<Script language='Javascript'>\n",n.t=="POPUP"&&(t+="function Load(){\n",t+=ADM_CE==1?"setTimeout('blur();',":"setTimeout('self.opener.focus()',",t+=isNaN(parseInt(n.timeout))?7e3:n.timeout,t+=");\n}\n"),t+="<\/Script>",t+="<\/head><body scroll=no style='margin:0;border:none'>",t+="<iframe id='iFrame' ",n.t=="POPUP"&&(t+=" onload='Load()' "),t+=" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no width=100% height=100% src='"+n.src+"'>wait<\/iframe>",t+"<\/body><\/html>"}function POPUP_main(n){if(setTimeout(function(){n.s=2},15e3),ADM_Check(n)){n.s=2;return}if(n.src&&n.src!=""){var t=POP_STRUCT(n);t&&t.document.write(POP_WINDOW(n))}}function POPUNDER_main(n){if(setTimeout(function(){n.s=2},15e3),ADM_Check(n)){n.s=2;return}if(n.src&&n.src!=""){var t=POP_STRUCT(n);t&&(ADM_CE==1?t.blur():t.opener.focus(),t.moveTo(n.left?n.left:0,n.top?n.top:0),t.document.write(POP_WINDOW(n)))}}function FLOAT_main(n){var i,r,t;for(setTimeout(function(){n.s=2},15e3),i=!1,CAI=0;CAI<ADM_S.length;CAI++)if(ADM_S[CAI].t=="BOOKTURN"){i=!0;break}for(r=!1,CAC=0;CAC<ADM_S.length;CAC++)if(ADM_S[CAC].t=="COUPLET"){r=!0;break}n.style+="z-index:10;",n.leftHref||(n.leftHref=""),n.rightHref||(n.rightHref=""),isNaN(parseInt(n.offsetX))&&(n.offsetX=30),screen.width<1024&&(n.offsetX+=100),isNaN(parseInt(n.offsetY))&&(n.offsetY=i&&r?0:20),t="",n.leftSrc&&n.leftSrc!=""&&(t+=ADM_Media(n.leftSrc,80,80,n,ADM_DIV+"left",n.leftHref)),n.wmode2&&(n.wmode=n.wmode2),n.rightSrc&&n.rightSrc!=""&&(t+=ADM_Media(n.rightSrc,80,80,n,ADM_DIV+"right",n.rightHref)),t!=""&&(WriteAd(ADM_DIV+"FLOAT",t),ADM_O1=document.getElementById(ADM_DIV+"left"),ADM_O2=document.getElementById(ADM_DIV+"right"),(ADM_O1!=null||ADM_O2!=null)&&window.setInterval("FLOAT_position("+n.offsetX+","+(parseInt(n.offsetY)+80)+")",400)),n.s=2}function FLOAT_position(n,t){ADM_CE==1?(ADM_O1!=null&&(ADM_O1.style.top=parseInt(parseInt(document.body.scrollTop)+parseInt(document.body.clientHeight)-t)+"px",ADM_O1.style.left=parseInt(parseInt(document.body.scrollLeft)+n)+"px"),ADM_O2!=null&&(ADM_O2.style.top=parseInt(parseInt(document.body.scrollTop)+parseInt(document.body.clientHeight)-t)+"px",ADM_O2.style.left=parseInt(parseInt(document.body.scrollLeft)+parseInt(document.body.clientWidth)-80-n)+"px")):(ADM_O1!=null&&(ADM_O1.style.top=parseInt(.75*(parseInt(document.body.scrollTop)+parseInt(document.body.clientHeight)-t))+"pt",ADM_O1.style.left=parseInt(.75*(parseInt(document.body.scrollLeft)+n))+"pt"),ADM_O2!=null&&(ADM_O2.style.top=parseInt(.75*(parseInt(document.body.scrollTop)+parseInt(document.body.clientHeight)-t))+"pt",ADM_O2.style.left=parseInt(.75*(parseInt(document.body.scrollLeft)+parseInt(document.body.clientWidth)-80-n))+"pt"))}function LIUMEITI_main(o){if(setTimeout(function(){o.s=2},15e3),ADM_Check(o)){o.s=2;return}o.width||(o.width=200),o.height||(o.height=150),o.top||(o.top="0"),o.left||(o.left="-0"),o.src&&o.src!=""&&(o.style+="top:"+(parseInt(document.body.scrollTop)+(String(o.top).indexOf("-")==-1?parseInt(o.top):parseInt(document.body.clientHeight)+parseInt(o.top)-o.height)),o.style+=";left:"+(String(o.left).indexOf("-")==-1?parseInt(o.left):parseInt(document.body.clientWidth)-o.width+parseInt(o.left)),ADM_RESIZE[ADM_RESIZE.length]="document.getElementById('"+ADM_DIV+"lmt').style.left=(('"+o.left+"'.indexOf('-')==-1)?"+o.left+":(parseInt(document.body.clientWidth)-"+(o.width+parseInt(o.left))+"))",WriteAd(ADM_DIV+"LIUMEITI",ADM_Media(o.src,o.width,o.height,o,ADM_DIV+"lmt")),o.eval&&o.eval!=""&&eval(o.eval),setTimeout("ADM_Close("+o.i+",'"+ADM_DIV+"lmt')",isNaN(parseInt(o.timeout))?7e3:parseInt(o.timeout)))}function isde(n){return!(typeof n=="undefined")}function BOOKTURN_main(n){var i,t;setTimeout(function(){n.s=2},1e4),n.top||(n.top="0"),n.left||(n.left="-0"),n.loop||(n.loop=!1),n.loop2||(n.loop2=!0),n.CookieHour||(n.CookieHour=0),n.width=isde(n.width)?parseInt(n.width):350,n.height=isde(n.height)?parseInt(n.height):250,n.width2=isde(n.width2)?parseInt(n.width2):80,n.height2=isde(n.height2)?parseInt(n.height2):80,n.src&&n.srcButton?(i=ADM_Check(n),n.style+="z-index:10000;",i&&(n.style+="visibility:hidden;"),n.style+="top:"+(parseInt(document.body.scrollTop)+(String(n.top).indexOf("-")==-1)?parseInt(n.top):parseInt(document.body.clientHeight)+parseInt(n.top)-n.height)+"px",n.style+=";right:0px",t=ADM_Media(n.src,n.width,n.height,n,ADM_DIV+"book1"),n.wmode=n.wmode2?n.wmode2:"",n.style=n.style.substring(0,n.style.lastIndexOf("z-index:10000;")),i||(n.style+="visibility:hidden;"),n.style+="z-index:1010;",n.style+="top:"+(parseInt(document.body.scrollTop)+(String(n.top).indexOf("-")==-1)?parseInt(n.top):parseInt(document.body.clientHeight)+parseInt(n.top)-n.height)+"px",n.style+=";right:0px",t+=ADM_Media(n.srcButton,n.width2,n.height2,n,ADM_DIV+"book2"),ADM_RESIZE[ADM_RESIZE.length]="document.getElementById('"+ADM_DIV+"book1').style.left=(('"+n.left+"'.indexOf('-')==-1)?"+n.left+":(parseInt(document.body.clientWidth)-"+(n.width+parseInt(n.left))+"))",ADM_RESIZE[ADM_RESIZE.length]="document.getElementById('"+ADM_DIV+"book2').style.left=(('"+n.left+"'.indexOf('-')==-1)?"+n.left+":(parseInt(document.body.clientWidth)-"+(n.width2+parseInt(n.left))+"))",t+=ADM_FSCommand(n,ADM_DIV+"book1"),t+=ADM_FSCommand(n,ADM_DIV+"book2"),WriteAd(ADM_DIV+"book",t),document.getElementById(ADM_DIV).i=n.i,i&&(n.s=2)):n.s=2}function ADAREAbook1_DoFSCommand(){ADM_S[document.getElementById(ADM_DIV).i].s=2,document.getElementById(ADM_DIV+"book1").style.visibility="hidden";var n=document.getElementById(ADM_DIV+"book2");n.style.visibility="visible",n.style.display="block"}function ADAREAbook2_DoFSCommand(){document.getElementById(ADM_DIV+"book2").style.visibility="hidden";var n=document.getElementById(ADM_DIV+"book1");n.style.visibility="visible",n.style.display="block",n.Play()}function COUPLET_main(n){var r,i,t;if(ADM_CE==1&&screen.width<1e3||ADM_CE==0&&document.body.scrollWidth<1e3){n.s=2;return}for(setTimeout(function(){n.s=2},15e3),r=!1,CAI=0;CAI<ADM_S.length;CAI++)if(ADM_S[CAI].t=="BOOKTURN"){r=!0;break}if(ADM_Check(n)){n.s=2;return}n.offsetX||(n.offsetX=0),n.offsetY||(n.offsetY=r?250:100),(n.src||n.src2)&&(n.src||(n.src=n.src2),n.wmode||(n.wmode="opaque"),n.src2||(n.src2=n.src),i=n.src.toLowerCase()==n.src2.toLowerCase(),n.style+="top:"+n.offsetY,n.style+=";left:"+(parseInt(document.body.scrollLeft)+n.offsetX),t=ADM_Media(n.src,120,270,n,ADM_DIV+"Couplet1"),n.style=n.style.substring(0,n.style.lastIndexOf("left:")),n.style+="left:"+(parseInt(document.body.scrollLeft)+parseInt(document.body.clientWidth)-120-n.offsetX),i?t+="<div id='"+ADM_DIV+"CoupletCache' style='display:none'>"+n.i+"<\/div>":(n.wmode2&&(n.wmode=n.wmode2),t+=ADM_Media(n.src2,120,270,n,ADM_DIV+"Couplet2"),t+=ADM_FSCommand(n,ADM_DIV+"Couplet2"),ADM_RESIZE[ADM_RESIZE.length]="document.getElementById('"+ADM_DIV+"Couplet2').style.left=parseInt(document.body.scrollLeft)+parseInt(document.body.clientWidth)-"+(120+n.offsetX)),t+=ADM_FSCommand(n,ADM_DIV+"Couplet1"),ADM_CE==1&&i&&(t+="\n<Script language='javascript' for='"+ADM_DIV+"Couplet1' event='OnReadyStateChange(a)'>\n",t+=""+ADM_DIV+"Couplet1_Cache(a);\n",t+="<\/Script>"),WriteAd(ADM_DIV+"Couplet",t),ADM_CE==1&&i&&document.getElementById(ADM_DIV+"Couplet1").PercentLoaded()==100?ADAREACouplet1_Cache(4):ADM_CE==0&&i&&ADAREACouplet1_Check(),n.timeout&&setTimeout("ADAREACouplet1_DoFSCommand()",n.timeout)),n.s=2}function ADAREACouplet1_Check(){if(document.getElementById(ADM_DIV+"Couplet1").PercentLoaded()==100){ADAREACouplet1_Cache(4);return}setTimeout("ADAREACouplet1_Check()",100)}function ADAREACouplet1_Cache(n){if(n==4){var i=document.getElementById(ADM_DIV+"CoupletCache"),t=ADM_S[parseInt(i.innerHTML)];i.innerHTML=ADM_Media(t.src,120,270,t,ADM_DIV+"Couplet2")+ADM_FSCommand(t,ADM_DIV+"Couplet2"),i.style.display="block",ADM_RESIZE[ADM_RESIZE.length]="document.getElementById('"+ADM_DIV+"Couplet2').style.left=parseInt(document.body.scrollLeft)+parseInt(document.body.clientWidth)-"+(120+t.offsetX)}}function ADAREACouplet1_DoFSCommand(){document.getElementById(ADM_DIV+"Couplet1").style.visibility="hidden",document.getElementById(ADM_DIV+"Couplet2").style.visibility="hidden"}function ADAREACouplet2_DoFSCommand(n,t){ADAREACouplet1_DoFSCommand(n,t)}function VIDEO_main(n){if(setTimeout(function(){n.s=2},15e3),ADM_CE!=1||ADM_Check(n)){n.s=2;return}n.codebase||(n.codebase="//videoad.sohu.com/video/videoadserver16/version1024/mcadplayer.cab"),n.adpicurl||(n.adpicurl="//videoad.sohu.com/video/videoadserver16/back.jpg"),n.title||(n.title="SUPERCAST"),n.cx||(n.cx=350),n.cy||(n.cy=280),n.popx||(n.popx=screen.width-n.cx+1),n.popy||(n.popy=screen.height-n.cy-25),n.billserver||(n.billserver="61.135.145.33"),n.loop||(n.loop=-1),n.soundtime||(n.soundtime=1),n.mode||(n.mode=1),n.buttonmode||(n.buttonmode=2),n.slidemode||(n.slidemode=2),n.timeout||(n.timeout=7e3),n.playcount||(n.playcount=2),n.wmppopx||(n.wmppopx=screen.width-350),n.hideafterplayover||(n.hideafterplayover=0),n.wmppopy||(n.wmppopy=screen.height),n.popuphtmurl||(n.popuphtmurl="//videoad.sohu.com/video/videoadserver16/brimilk1/popuphtm1.htm"),n.divxadurl&&n.divxadurl!=""&&(ADM_GetCookie("VIDEO")!=null?VIDEO_media(n.i):VIDEO_code(n)),n.s=2}function VIDEO_code(n){var t="<OBJECT classid='clsid:2D0C7226-747E-11D6-83F0-00E04C4A2F90' codebase='"+n.codebase+"' onerror='VIDEO_media("+n.i+")' style='width:0px;height:0px'><param name='adurl' value='"+n.divxadurl+"'><param name='adpicurl' value='"+n.adpicurl+"'><param name='clickurl' value='"+n.adclickurl+"'><param name='cx' value='"+n.cx+"'><param name='cy' value='"+n.cy+"'><param name='popx' value='"+n.popx+"'>";t+="<param name='popy' value='"+n.popy+"'><param name='billserver' value='"+n.billserver+"'><param name='loop' value='"+n.loop+"'><param name='soundtime' value='"+n.soundtime+"'><param name='mode' value='"+n.mode+"'><param name='buttonmode' value='"+n.buttonmode+"'><param name='hideafterplayover' value='"+n.hideafterplayover+"'><param name='windowtitle' value='"+n.title+"'><param name='SlideMode' value='"+n.slidemode+"'><\/OBJECT>",WriteAd(ADM_DIV+"Video",t)}function VIDEO_media(n){var t,i;ADM_GetCookie("VIDEO")==null&&(t=new Date,t.setTime(t.getTime()+(n.plugindelay?parseFloat(n.plugindelay)*36e5:6048e5)),ADM_SetCookie("VIDEO","videodelay",t)),n=ADM_S[n],n.wmvadurl&&n.wmvadurl!=""&&(i=n.popuphtmurl+"?OpenerName="+window.location+"&wmvadurl="+n.wmvadurl+"&adpicurl="+n.adpicurl+"&adclickurl="+n.adclickurl+"&timeout="+n.timeout+"&soundtime="+n.soundtime+"&playcount="+n.playcount+"&windowtitle="+n.title,n.download&&(i+="&download="+n.download+"&"),window.open(i,"","left="+n.wmppopx+",top="+n.wmppopy+", width=350, height=250"))}function IMVIDEO_main(n){if(setTimeout(function(){n.s=2},15e3),ADM_Check(n)){n.s=2;return}if(n.IMWidth||(n.IMWidth=350),n.IMHeight||(n.IMHeight=250),n.Str||(n.Str="IM"),n.VideoID>0){var t=n.IMWidth,i=n.IMHeight+26,r=screen.availWidth-t-10,u=screen.availHeight,f="//im.imchina.com.cn/client/client.aspx?id="+n.VideoID+"&url=//im.imchina.com.cn/cgi-bin/adgate.cgi&width="+n.IMWidth+"&height="+n.IMHeight,e="left="+r+",top="+u+",width="+t+",height="+i+",scrollbars=0,resizable=0,toolbar=0,location=0,menubar=0,status=0,directories=0,dependent=0,titlebar=0",o=n.Str+n.VideoID;window.open(f,o,e)}n.s=2}var VideoPlay;eval(function(n,t,i,r,u,f){if(u=function(n){return(n<t?"":u(parseInt(n/t)))+((n=n%t)>35?String.fromCharCode(n+29):n.toString(36))},!"".replace(/^/,String)){while(i--)f[u(i)]=r[i]||u(i);r=[function(n){return f[n]}],u=function(){return"\\w+"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}('g D=8(2){4.2=2;4.x=18;4.C()};D.17={C:8(){9.z(\'<B 7="\'+4.2.7+\'" e="16:14;13:12;m:\'+4.2.c.m+\'o;"><\/B>\');p(4.2.c.r.11(".10")!=-1){g h=Z Y(4.2.c.r,"h",4.2.c.m,4.2.c.d,"6","#X");h.A("W","V");h.A("U","T");h.S("R",4.2.y);h.z(4.2.7)}n{9.b(4.2.7).Q=\'<a P="\'+4.2.y+\'" O="N"><M r="\'+4.2.c.r+\'" L="0" m="\'+4.2.c.m+\'" d="\'+4.2.c.d+\'" /><\/a>\'}g 5=4},K:8(){g 5=4;p(4.x==J){5.k(5.2.t);s(8(){5.l(5.2.u);9.b(5.2.7).w=8(){q(5.f);5.k(5.j())};9.b(5.2.7).v=8(){q(5.f);5.l(5.j())}},4.2.I*H)}n{9.b(5.2.7).e.d=4.2.t+"o";9.b(5.2.7).w=8(){q(5.f);5.k(5.j())};9.b(5.2.7).v=8(){q(5.f);5.l(5.j())}}},l:8(i){g 5=4;p(i>4.2.t){i=i-3;9.b(4.2.7).e.d=i+"o";4.f=s(8(){5.l(i)},15)}n{}},k:8(i){g 5=4;9.b(4.2.7).e.G="";p(i<4.2.u){i=i+3;9.b(4.2.7).e.d=i+"o";4.f=s(8(){5.k(i)},15)}n{}},j:8(){F E(9.b(4.2.7).e.d)}}',62,71,"||config||this|me||id|function|document||getElementById|source|height|style|setTime|var|mouseover_ad||curHeight|sliceDown|sliceUp|width|else|px|if|clearTimeout|src|setTimeout|min|max|onmouseout|onmouseover|startPlay|url|write|addParam|div|init|GGsliceContent|parseInt|return|display|1000|time|true|execute|border|img|_blank|target|href|innerHTML|clickthru|addVariable|opaque|wmode|high|quality|ffffff|sohuFlash|new|swf|indexOf|hidden|overflow|auto||margin|prototype|false".split("|"),0,{})),eval(function(n,t,i,r,u,f){if(u=function(n){return(n<t?"":u(parseInt(n/t)))+((n=n%t)>35?String.fromCharCode(n+29):n.toString(36))},!"".replace(/^/,String)){while(i--)f[u(i)]=r[i]||u(i);r=[function(n){return f[n]}],u=function(){return"\\w+"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}('h 1h=e(3){2.3=3;2.1g()};1h.2a={p:0,1g:e(){c.m(\'<D 4="\'+2.3.4+\'" i="28:27;u:L;H:\'+2.3.g.H+\'w;I:\'+2.3.g.I+\'w;"><\/D>\');c.m("<1d 26=\'25\' 24=\'"+2.3.4+"23"+"\' 22=\'21(1f,1e)\'>\\n"+""+2.3.4+"E(1f,1e);\\n"+"<\\/1d>");20("1Z."+2.3.4+"E = e(){c.j(\'"+2.3.4+"\').i.u=\'L\'; };")},J:e(t){h o=[0,0];k(t){o=2.J(t.1Y);o[0]+=t.1X||0;o[1]+=t.1W||0;K o}z{K o}},1V:e(){c.m(\'<D 4="\'+2.3.4+\'q" i="1U:1T;b:\'+2.3.5.b+\';\'+2.3.5.f+\'"><\/D>\');k(2.3.5.d.10(".Z")!=-1){h 9=Y X(2.3.5.b.d,"9",2.3.5.b,2.3.5.f,"7","#W");9.r("C","B");9.r("V","1S");9.A("1R",2.3.y);9.m(2.3.4+\'q\');c.m(\'<11 1Q="1P:1O-1N-1M-1L-1K" 1J="19://1I.18.17/1H/16/1G/15/1F.1E#1D=6,0,29,0" b="14" f="13"><1c 1b="1C" 1a="\'+2.3.5.d+\'"><1c 1b="C" 1a="B"><12 d="\'+2.3.5.d+\'" C="B" 1B="19://1A.18.17/1z/1y" 1x="1w/x-16-15" b="14" f="13"><\/12><\/11>\')}z{c.j(2.3.4+\'q\').U=\'<a T="\'+2.3.y+\'" 5="S"><R d="\'+2.3.5.d+\'" Q=0 b="\'+2.3.5.b+\'" f="\'+2.3.5.f+\'"><\/a>\'}h l=2;c.j(2.3.4+"q").1v=e(){k(c.j(l.3.4).i.u=="L"){1u(l.O);l.s()}};k(2.3.1t){F(e(){l.s()},1s)}},s:e(){2.p++;h l=2;k(2.p>2.3.s){K 0}z k(2.p==2.3.s){F(e(){l.M()},N*1r*2.3.1q)}k(2.3.g.d.10(".Z")!=-1){h 9=Y X(2.3.1p,"9",2.3.g.b,2.3.g.f,"8","#W");9.r("C","B");9.r("V","1o");9.r("1n","1m");9.A("1l",2.3.g.d);9.A("1k",2.3.y);9.A("1j",2.3.4);9.m(2.3.4)}z{c.j(2.3.4).U=\'<a T="\'+2.3.y+\'" 5="S"><R d="\'+2.3.g.d+\'" Q="0" b="\'+2.3.g.b+\'" f="\'+2.3.g.f+\'" /><\/a>\'}h v=c.j(2.3.4);h P=c.j(2.3.4+"q");h G=2.J(P);v.i.I=(G[0]-2.3.g.b+2.3.5.b)+"w";v.i.H=(G[1]+2.3.5.f)+"w";v.i.u=\'\';2.O=F(2.3.4+"E()",2.3.1i*N)},M:e(){2.p=0}}',62,135,"||this|config|id|target||||mouseover_ad||width|document|src|function|height|source|var|style|getElementById|if|thisPtr|write||xy|active_time|_target|addParam|active|element|display|tmp|px||url|else|addVariable|high|quality|div|ad_DoFSCommand|setTimeout|pos|top|left|getPosition|return|none|clearActive|1000|timeHandle|tmp2|border|img|_blank|href|innerHTML|wmode|ffffff|sohuFlash|new|swf|indexOf|object|embed|74|280|flash|shockwave|com|macromedia|http|value|name|param|Script|args|command|init|GGmouseShow|time|callback|linkurl|flashurl|always|AllowScriptAccess|transparent|contain|interval|60|800|autoplay|clearTimeout|onmouseover|application|type|getflashplayer|go|www|pluginspage|movie|version|cab|swflash|cabs|pub|download|codebase|444553540000|96B8|11cf|AE6D|D27CDB6E|clsid|classid|clickthru|opaque|pointer|cursor|execute|offsetTop|offsetLeft|offsetParent|window|eval|FSCommand|event|_ad|for|Javascript|language|absolute|position||prototype".split("|"),0,{})),eval(function(n,t,i,r,u,f){if(u=function(n){return(n<62?"":u(parseInt(n/62)))+((n=n%62)>35?String.fromCharCode(n+29):n.toString(36))},"0".replace(0,u)==0){while(i--)f[u(i)]=r[i];r=[function(n){return f[n]||n}],u=function(){return"[2-689b-zA-N]"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}('h i=8(z,A){2.p=z;2.4=A;2.B()};i.prototype={B:8(){2.9=0;2.q=false;2.C=D},r:8(){e=E Date();e.setTime(e.getTime()+86400*1000);5.b=2.p+"="+escape(2.9)+"; e="+e.toGMTString()+"; path=/"},s:8(){h t=2.p+"=";6(5.b.c>0){f=5.b.u(t);6(f!=-1){f+=t.c;j=5.b.u(";",f);6(j==-1)j=5.b.c;g unescape(5.b.substring(f,j))}}g""},v:8(){g F(G.floor(G.v()*2.4.c))},execute:8(){h 3;6(""!=2.s()){2.9=F(2.s());3=2.9%2.4.c;6(!2.q)2.9++;2.r()}w{6(2.C){3=2.v();3=3>=2.4.c?0:3}w{3=0}2.9=2.q?3:(3+1);2.r()}6(H(2.k)=="8"){2.k(3);g D}6(!2.4[3].l){5.m(\'<n I="J:K" o="L"><\/n>\');5.getElementById(\'L\').parentElement.I.J="K";g}6(2.4[3].l.u(".swf")!=-1){5.m(\'<n o="i\'+2.4[3].o+\'"><\/n>\');h d=E sohuFlash(2.4[3].l,"d",2.4[3].x,2.4[3].y,"7");d.M("quality","high");d.M("wmode","opaque");d.addVariable("clickthru",2.4[3].N);d.m("i"+2.4[3].o)}w{5.m(\'<a href="\'+2.4[3].N+\'" target="_blank"><img src="\'+2.4[3].l+\'" x="\'+2.4[3].x+\'" y="\'+2.4[3].y+\'" border=0><\/a>\')}6(H(2.4[3].k)=="8"){2.4[3].k()}}};',[],50,"||this|pos|ad|document|if||function|viewTime||cookie|length|flashContent|expires|offset|return|var|GGrandomAlternate|end|callback|source|write|div|id|ad_id|updateLock|setViewTime|getViewTime|search|indexOf|random|else|width|height|AD_ID|AD_data|init|randomPos|true|new|parseInt|Math|typeof|style|display|none|justforfindparent|addParam|url".split("|"),0,{})),eval(function(n,t,i,r,u,f){if(u=function(n){return(n<t?"":u(parseInt(n/t)))+((n=n%t)>35?String.fromCharCode(n+29):n.toString(36))},!"".replace(/^/,String)){while(i--)f[u(i)]=r[i]||u(i);r=[function(n){return f[n]}],u=function(){return"\\w+"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}('j 2i=e(4){3.4=4;3.2h()};2i.2w={5:1C,C:1C,6:1C,B:1C,1e:R,1E:R,1c:R,17:R,1Q:R,16:R,1N:R,2h:e(){j 2g=3.4.5.c+3.4.5.n+3.4.6.c+3.4.6.n;7(h.1f.29>=(2g+3.4.18)){3.1c=1D}3.17=3.4.5.q.W(".V")!=-1;3.16=3.4.6.q.W(".V")!=-1;3.1Q=3.4.5.10.W(".V")!=-1;3.1N=3.4.6.10.W(".V")!=-1;7(3.4.5!=\'19\'&&3.4.5.2f){h.J(\'<O d="\'+3.4.5.d+\'" 9="13:1B;c:\'+3.4.5.c+\'b;g:\'+3.4.5.g+\'b;z-1A:1S;5:\'+3.4.5.n+\'b;f:\'+3.4.5.f+\'b;1z:m;i:m;" 1y="3.1x()"><\/O>\');3.5=h.A(3.4.5.d);3.1I();h.J(\'<O d="\'+3.4.5.d+\'11" 9="13:1B;c:\'+3.4.5.p+\'b;g:\'+3.4.5.s+\'b;z-1A:2v;5:\'+3.4.5.n+\'b;f:\'+3.4.5.f+\'b;1z:m;i:m;" 1y="3.1x()"><\/O>\');3.C=h.A(3.4.5.d+"11");3.1K()}7(3.4.6!=\'19\'&&3.4.6.2f){h.J(\'<O d="\'+3.4.6.d+\'" 9="13:1B;c:\'+3.4.6.c+\'b;g:\'+3.4.6.g+\'b;z-1A:1S;5:\'+3.4.6.n+\'b;f:\'+3.4.6.f+\'b;1z:m;i:m;" 1y="3.1x()"><\/O>\');3.6=h.A(3.4.6.d);3.1H();h.J(\'<O d="\'+3.4.6.d+\'11" 9="13:1B;c:\'+3.4.6.p+\'b;g:\'+3.4.6.s+\'b;z-1A:1S;5:\'+3.4.6.n+\'b;f:\'+3.4.6.f+\'b;1z:m;i:m;" 1y="3.1x()"><\/O>\');3.B=h.A(3.4.6.d+"11");3.1J()}},1I:e(){7(3.17){j N=1w 1v(3.4.1u,"2u",3.4.5.c,3.4.5.g,"8","#1t");N.y("1s","1r");N.y("1q","1p");N.y("1o","1n");N.x("13","5");N.x("1m",3.4.5.q);N.x("1l",3.4.12+".S");N.J(3.4.5.d)}o{3.5.1k=\'<a k="\'+3.4.5.D+\'" I="H"><1j q="\'+3.4.5.q+\'" c="\'+3.4.5.c+\'" g="\'+3.4.5.g+\'" 1i="0" 1h="#1R"><\/a><F 1g="1R" d="1R"> <w v="u" t="0,\'+(3.4.5.g-20)+\',20,\'+3.4.5.g+\'" d="28" k="Z:Y(0)" r="" /><w v="u" t="0,0,\'+3.4.5.c+\',\'+(3.4.5.g-20)+\'" k="\'+3.4.5.D+\'" I="H" r="" /><w v="u" t="20,\'+(3.4.5.g-20)+\',\'+(3.4.5.c)+\',\'+3.4.5.g+\'" k="\'+3.4.5.D+\'" I="H" r="" /><\/F>\'}},1K:e(){7(3.1Q){j M=1w 1v(3.4.1u,"2e",3.4.5.p,3.4.5.s,"8","#1t");M.y("1s","1r");M.y("1q","1p");M.y("1o","1n");M.x("1m",3.4.5.10);M.x("2d",3.4.12+".15");M.x("1l",3.4.12+".14");M.J(3.4.5.d+\'11\')}o{3.C.1k=\'<a k="\'+3.4.5.D+\'" I="H"><1j q="\'+3.4.5.10+\'" c="\'+3.4.5.p+\'" g="\'+3.4.5.s+\'" 1i="0" 1h="#1P"><\/a><F 1g="1P" d="1P"> <w v="u" t="0,0,\'+3.4.5.p+\',G" d="26" k="Z:Y(0)" r="" /><w v="u" t="0,G,\'+3.4.5.p+\',\'+(3.4.5.s-G)+\'" k="\'+3.4.5.D+\'" I="H" r="" /><w v="u" t="0,\'+(3.4.5.s-G)+\',\'+3.4.5.p+\',\'+3.4.5.s+\'" d="24" k="Z:Y(0)" r="" /><\/F>\'}},1H:e(){7(3.16){j L=1w 1v(3.4.1u,"2t",3.4.6.c,3.4.6.g,"8","#1t");L.y("1s","1r");L.y("1q","1p");L.y("1o","1n");L.x("13","6");L.x("1m",3.4.6.q);L.x("1l",3.4.12+".S");L.J(3.4.6.d)}o{3.6.1k=\'<1j q="\'+3.4.6.q+\'" c="\'+3.4.6.c+\'" g="\'+3.4.6.g+\'" 1i="0" 1h="#1O"><F 1g="1O" d="1O"> <w v="u" t="\'+(3.4.5.c-20)+\',\'+(3.4.5.g-20)+\',\'+3.4.6.c+\',\'+3.4.6.g+\'" k="Z:Y(0)" d="22" r="" /><w v="u" t="0,0,\'+3.4.6.c+\',\'+(3.4.5.g-20)+\'" k="\'+3.4.6.D+\'" I="H" r="" /><w v="u" t="0,\'+(3.4.5.g-20)+\',\'+(3.4.5.c-20)+\',\'+3.4.6.g+\'" k="\'+3.4.6.D+\'" I="H" r="" /><\/F>\'}},1J:e(){7(3.1N){j K=1w 1v(3.4.1u,"2e",3.4.6.p,3.4.6.s,"8","#1t");K.y("1s","1r");K.y("1q","1p");K.y("1o","1n");K.x("1m",3.4.6.10);K.x("2d",3.4.12+".15");K.x("1l",3.4.12+".14");K.J(3.4.6.d+"11")}o{3.B.1k=\'<1j q="\'+3.4.6.10+\'" c="\'+3.4.6.p+\'" g="\'+3.4.6.s+\'" 1i="0" 1h="#1M"><F 1g="1M" d="1M"> <w v="u" t="0,0,\'+3.4.6.p+\',G" k="Z:Y(0)" d="1Z" r="" /><w v="u" t="0,G,\'+3.4.6.p+\',\'+(3.4.6.s-G)+\'" k="\'+3.4.6.D+\'" k="\'+3.4.6.D+\'" I="H" r="" /><w v="u" t="0,\'+(3.4.6.s-G)+\',\'+3.4.6.p+\',\'+3.4.6.s+\'" d="1X" k="Z:Y(0)" r="" /><\/F>\'}},T:e(){7(1L E.2c!=\'19\'){P=E.2c}o 7(1L h.2b!=\'19\'&&h.2b!=\'2s\'){P=h.2r.2a}o 7(1L h.1f!=\'19\'){P=h.1f.2a}j Q=h.1f.29;7(3.5){7(Q<(3.4.18+3.4.5.c+3.4.6.c+3.4.5.n)){3.5.9.5=3.4.5.n+"b"}o{3.5.9.5=Q/2-3.4.18/2-3.4.5.c-3.4.5.n+"b"}3.C.9.5=3.4.5.n+"b";7(3.1e){3.5.9.f=P+3.4.5.f+"b";3.C.9.f=P+3.4.5.f+"b"}o{3.5.9.f=3.4.5.f+"b";3.C.9.f=3.4.5.f+"b"}}7(3.6){7(Q<3.4.18+3.4.5.c+3.4.6.c+3.4.6.n){3.6.9.5=Q-3.4.6.n-3.4.6.c+"b"}o{3.6.9.5=Q/2+3.4.18/2+3.4.6.n+"b"}3.B.9.5=Q-3.4.6.p-3.4.6.n+"b";7(3.1e){3.6.9.f=P+3.4.6.f+"b";3.B.9.f=P+3.4.6.f+"b"}o{3.6.9.f=3.4.6.f+"b";3.B.9.f=3.4.6.f+"b"}}},S:e(){7(3.5){7(3.17){3.1K()}3.5.9.i="m";3.C.9.i="X"}7(3.6){7(3.16){3.1J()}3.6.9.i="m";3.B.9.i="X"}1G(3.1d);1F(3.1b)},15:e(){7(3.5){7(3.17){3.1I()}3.5.9.i="X";3.C.9.i="m"}7(3.6){7(3.16){3.1H()}3.6.9.i="X";3.B.9.i="m"}1G(3.1d);1F(3.1b)},14:e(){7(3.5){3.C.9.i="m"}7(3.6){3.B.9.i="m"}1G(3.1d);7(3.1c){1F(3.1b)}},1a:e(){j l=3;3.T();7(3.5){3.5.9.i="X";7(3.4.5.q.W(".V")==-1){j 27=h.A("28");27.U=e(){l.S()};j 25=h.A("26");25.U=e(){l.15()};j 23=h.A("24");23.U=e(){l.14()}}}7(3.6){3.6.9.i="X";7(3.4.6.q.W(".V")==-1){j 21=h.A("22");21.U=e(){l.S()};j 1Y=h.A("1Z");1Y.U=e(){l.15()};j 1W=h.A("1X");1W.U=e(){l.14()}}}7(E.1V){E.1U("2q",e(){l.T()})}o{E.1T("T",e(){l.T()},1D)}7(3.1e){3.1d=2p(e(){l.T()},2o)}7(3.1c){3.1b=2n(e(){l.S()},3.4.2m*2l)}},2k:e(){7(3.1E){j l=3;7(E.1V){E.1U("1E",e(){l.1a()})}o{E.1T("2j",e(){l.1a()},1D)}}o{3.1a()}}}',62,157,"|||this|config|left|right|if||style||px|width|id|function|top|height|document|visibility|var|href|objPtr|hidden|margin|else|close_width|src|alt|close_height|coords|rect|shape|area|addVariable|addParam||getElementById|right_s|left_s|url|window|map|30|_blank|target|write|right_s_dl|right_dl|left_s_dl|left_dl|div|scroll_top|ClientW|true|close|resize|onclick|swf|indexOf|visible|void|javascript|close_src|_s|className|position|closeAll|replay|right_isflash|left_isflash|pageWidth|undefined|show|timer2|autoClose|timer|follow|body|name|usemap|border|img|innerHTML|closefunction|advfiles|always|AllowScriptAccess|transparent|wmode|high|quality|ffffff|contain|sohuFlash|new|blur|onfocus|overflow|index|absolute|null|false|onload|clearTimeout|clearInterval|drawRight|drawLeft|drawRightS|drawLeftS|typeof|right_lian_s|right_s_isflash|right_lian|left_lian_s|left_s_isflash|left_lian|90|addEventListener|attachEvent|ActiveXObject|rightSmallReplay|rightPiaoSmallReplay|rightSmallClose|rightPiaoSmallClose||rightClose|rightPiaoClose|leftSmallReplay|leftPiaoSmallReplay|leftSmallClose|leftPiaoSmallClose|leftClose|leftPiaoClose|clientWidth|scrollTop|compatMode|pageYOffset|replayfunction|diulian_small|status|totalWidth|init|GGfloat|load|execute|1000|time|setTimeout|500|setInterval|onresize|documentElement|BackCompat|diulian_right|diulian_left|190|prototype".split("|"),0,{})),eval(function(n,t,i,r,u,f){if(u=function(n){return(n<t?"":u(parseInt(n/t)))+((n=n%t)>35?String.fromCharCode(n+29):n.toString(36))},!"".replace(/^/,String)){while(i--)f[u(i)]=r[i]||u(i);r=[function(n){return f[n]}],u=function(){return"\\w+"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}('c n={1G:8(f){i.A(\'<j G="b"><a 1F="\'+f.D+\'" 1E="1D" 1C="n.y()"><1B 1A=1z 1y="\'+f.1x+\'" 1w=C 1v=0><\/a><\/j><j G="3" 4="1u:1t;k:r" 1s="n.s()"><\/j><1r\'+\'1q 1p="7" 1o="1n" 1m="1l(F,E)">1k(F,E);<\/1j\'+\'1i>\');2.B=\'1h=\'+f.1g+\'&1f=\'+f.D;2.e=1e 1d("1c://1b.1a.19/18.17","7","C","16","6","#14");2.e.m("13","12");2.e.m("11","10");2.e.m("Z",2.B);2.e.A("3");2.b=i.l("b");2.3=i.l("3");2.7=i.l("7")},h:8(d){c 9=[0,0];Y(d){9=2.h(d.X);9[0]+=d.W||0;9[1]+=d.V||0;z 9}U{z 9}},y:8(){c 5=2.h(2.b);5[1]+=v;2.3.4.T="S";2.3.4.R="0";2.3.4.Q="0";2.3.4.P="0";2.3.4.O="0";2.3.4.N="M";2.3.4.u=5[0]+"g";2.3.4.t=5[1]+"g";2.3.4.k="L";2.3.4.q=\'p\';c x=2;2.o=K(8(){x.w()},15);2.7.J()},w:8(){c 5=2.h(2.b);5[1]+=v;2.3.4.u=5[0]+"g";2.3.4.t=5[1]+"g"},s:8(){2.3.4.k="r";2.3.4.q=\'p\';I(2.o);2.7.H()}}',62,105,"||this|focus_over|style|pos||focus_ad|function|xy||focus_up|var|element|sohuFlashFocover|config|px|getPosition|document|div|visibility|getElementById|addParam|FocusCoverAD|timeHandle|block|display|hidden|down|top|left|26|setPosition|me|up|return|write|sVars|380|url|args|common|id|Rewind|clearInterval|Play|setInterval|visible|white|backgroundColor|paddingBottom|paddingTop|paddingLeft|paddingRight|1000|zIndex|else|offsetTop|offsetLeft|offsetParent|if|FlashVars|opaque|wmode|high|quality|ffffff||340|swf|adoshell3|com|17173|www|http|sohuFlash|new|linkurl|focusCover|flashurl|pt|scri|focus_ad_DoFSCommand|fscommand|event|javascript|language|for|ipt|scr|onmouseout|absolute|position|border|width|focusUp|src|25|height|img|onmouseover|_blank|target|href|show".split("|"),0,{})),eval(function(n,t,i,r,u,f){if(u=function(n){return(n<t?"":u(parseInt(n/t)))+((n=n%t)>35?String.fromCharCode(n+29):n.toString(36))},!"".replace(/^/,String)){while(i--)f[u(i)]=r[i]||u(i);r=[function(n){return f[n]}],u=function(){return"\\w+"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}('7 15=4(r,9){2.r=r;2.9=9;2.13()};15.1L={x:-1K,y:F,f:5.14,G:5.w&&!5.14,t:m,13:4(){5.1J(\'<12 1I="11" 6="1H:1G;z-1F:1E;B: P;"><\/12>\');2.3=5.w("11")},1D:4(x,y){2.x=x;2.y=y},d:4(){Y(5.10&&5.10!="1C")?5.1B:5.1A},K:4(Z,H){a(1z H!="1y")2.3.6.v=H+"c";2.3.1x=Z;2.t=1w;Y m},u:4(e){a(2.t){7 D=(2.G)?e.1v:h.l+2.d().V;7 Q=(2.G)?e.1u:h.k+2.d().S;7 W=2.f&&!g.X?2.d().1t-h.l-2.x:g.1s-e.l-2.x-F;7 T=2.f&&!g.X?2.d().1r-h.k-2.y:g.1q-e.k-2.y-F;7 U=(2.x<0)?2.x*(-1):-1p;a(W<2.3.E)2.3.6.s=2.f?2.d().V+h.l-2.3.E+"c":g.1o+e.l-2.3.E+"c";n a(D<U)2.3.6.s="1n";n 2.3.6.s=D+2.x+"c";a(T<2.3.C)2.3.6.R=2.f?2.d().S+h.k-2.3.C-2.y+"c":g.1m+e.k-2.3.C-2.y+"c";n 2.3.6.R=Q+2.y+"c";2.3.6.B="1l"}},I:4(){2.t=m;2.3.6.B="P";2.3.6.s="-1k";2.3.6.1j=\'\';2.3.6.v=\'\'},1i:4(){7 8=2;7 O=5.w(2.r);7 b=O.1h("A");N(7 i=0;i<b.M;i++){N(7 j=0;j<2.9.M;j++){a(2.9[j].1g.q(/\\//p,"").q(/L:/p,"")==b[i].1f.q(/\\//p,"").q(/L:/p,"")){b[i].J=2.9[j].1e;b[i].o=j;b[i].1d=4(){8.K(8.9[2.o].1c,8.9[2.o].v);8.3.J=8.9[2.o].1b};b[i].1a=4(){8.I()}}}}a(2.f){5.19(\'18\',4(e){8.u(e)})}n{5.17(\'16\',4(e){8.u(e)},m)}}}',62,110,"||this|tipobj|function|document|style|var|obj|config|if|aList|px|ieTrueBody||ie|window|event|||clientY|clientX|false|else|rel|gi|replace|contain|left|enableTip|positionTip|width|getElementById|||||visibility|offsetHeight|curX|offsetWidth|20|ns6|thewidth|hideTip|className|setTip|http|length|for|parentArea|hidden|curY|top|scrollTop|bottomedge|leftedge|scrollLeft|rightedge|opera|return|thetext|compatMode|dhtmltooltip|div|init|all|ggLinkTip|mousemove|addEventListener|onmousemove|attachEvent|onmouseout|tipStyle|content|onmouseover|parentStyle|href|gameUrl|getElementsByTagName|execute|backgroundColor|1000px|visible|pageYOffset|5px|pageXOffset|1000|innerHeight|clientHeight|innerWidth|clientWidth|pageY|pageX|true|innerHTML|undefined|typeof|body|documentElement|BackCompat|setPosition|100|index|absolute|position|id|write|50|prototype".split("|"),0,{})),VideoPlay={videoTime:15,adjustTime:60,cookieName:"videoplayed",callParam:"",appendJs:!1,setCookie:function(n,t){var i=new Date;i.setTime(i.getTime()+1e3*t);var r=document.domain.split("."),u=r.length,f=document.domain.substring(u+1);document.cookie=this.cookieName+"="+escape(n)+"; expires="+i.toGMTString()+"; path=/; domain="+f},getCookie:function(n){var t=n+"=";if(document.cookie.length>0&&(offset=document.cookie.indexOf(t),offset!=-1))return offset+=t.length,end=document.cookie.indexOf(";",offset),end==-1&&(end=document.cookie.length),unescape(document.cookie.substring(offset,end))},watch:function(n){"enter"==n&&this.enterCall(this.callParam)},enterCall:function(n){this.getCookie(this.cookieName)=="playing"?(this.callParam=n,setTimeout('VideoPlay.watch("enter")',2e3)):(this.setCookie("playing",this.videoTime+this.adjustTime),n())},playDone:function(){this.setCookie("playdone",0)}},VideoPlay.adjustTime=8,VideoPlay.adjustTime=8,window.ActiveXObject?window.attachEvent("onunload",function(){VideoPlay.playDone()}):window.addEventListener("unload",function(){VideoPlay.playDone()},!1);var ADM_DIV="ADAREA",ADM_LOADED=!1,ADM_O1,ADM_O2,AD,ADM_Ver="1.0",ADM_S=[],ADM_RESIZE=[],ADM_F="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0",ADM_CE=document.all?1:document.getElementById?0:-1;document.write("<div id='"+ADM_DIV+"'><\/div>"),ADM_CE>-1&&(window.onload=function(){ADM_LOADED||(ADM_LOADED=!0,InitSchedule(),DoSchedule())},window.onresize=function(){for(oAI=0;oAI<ADM_RESIZE.length;oAI++)eval(ADM_RESIZE[oAI])});
