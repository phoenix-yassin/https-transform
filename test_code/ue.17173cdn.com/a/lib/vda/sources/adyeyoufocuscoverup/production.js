/*! ued-todo-v1.0.0 2015-05-13 */
/* //

www.17173.com/ */

/* Copyright (c) 2013 17173.com */

/* Licensed same as jquery - MIT License */
/* //

www.opensource.org/licenses/mit-license.php */

/* email: changjianwang@cyou-inc.com */
var root=this;adv.AdBase.extend("AdYeyouFocusCoverUp",{_timer:function(func,time,autostart){return this.set=function(func,time,autostart){if(this.init=!0,"object"==typeof func){var paramList=["autostart","time"];for(var arg in paramList)void 0!=func[paramList[arg]]&&eval(paramList[arg]+" = func[paramList[arg]]");func=func.action}return"function"==typeof func&&(this.action=func),isNaN(time)||(this.intervalTime=time),autostart&&!this.isActive&&(this.isActive=!0,this.setTimer()),this},this.once=function(a){var b=this;return isNaN(a)&&(a=0),window.setTimeout(function(){b.action()},a),this},this.play=function(a){return this.isActive||(a?this.setTimer():this.setTimer(this.remaining),this.isActive=!0),this},this.pause=function(){return this.isActive&&(this.isActive=!1,this.remaining-=new Date-this.last,this.clearTimer()),this},this.stop=function(){return this.isActive=!1,this.remaining=this.intervalTime,this.clearTimer(),this},this.toggle=function(a){return this.isActive?this.pause():a?this.play(!0):this.play(),this},this.reset=function(){return this.isActive=!1,this.play(!0),this},this.clearTimer=function(){window.clearTimeout(this.timeoutObject)},this.setTimer=function(a){var b=this;"function"==typeof this.action&&(isNaN(a)&&(a=this.intervalTime),this.remaining=a,this.last=new Date,this.clearTimer(),this.timeoutObject=window.setTimeout(function(){b.go()},a))},this.go=function(){this.isActive&&(this.action(),this.setTimer())},this.init?new this._timer(func,time,autostart):(this.set(func,time,autostart),this)},_gemFocusSide:function(){var a,b=this.el.offset().left-230-10,c=this.el.offset().top||0;return a=$('<a target="_blank" style="position:absolute; left:'+b+"px; top:"+c+'px; z-index:999; width:230px; height:260px; display:block; overflow:hidden;" class="component-focus-cover-side" href="'+this._coverConfig.link+'" ><img src="'+this._coverConfig.focus.side+'" style="width:230px;height:260px;" /></a>')},_initSideElement:function(){this._coverSideElement=this._gemFocusSide(),$(".wrap").before(this._coverSideElement)},_initElement:function(){return this._initSideElement(),this._initCover(),this},_gemTabPanel:function(){var a;return a=[],this._coverConfig.title=this._coverConfig.title||"",this._coverConfig.desc=this._coverConfig.desc||"",a.push("<li>"),a.push('  <a href="'+this._coverConfig.link+'" class="img-target" data-ui-data="link"><img data-src="'+this._coverConfig.img+'" data-ui-data="img" /></a>'),a.push('  <img data-src="'+this._coverConfig.thumb+'" alt="" data-ui-data="thumb" />'),a.push('   <div class="label">'),a.push('      <h2 class="title" data-ui-data="title">'+this._coverConfig.title+"</h2>"),a.push('        <h3 class="desc" data-ui-data="desc">'+this._coverConfig.desc+"</h3>"),a.push("  </div>"),a.push("</li>"),$('[data-ui-mark="data"]').append(a.join("")),a},_regEvent:function(){return this._regFocusSide(),this},_resetPosition:function(){var a=this,b=a.el.offset().left-230-10,c=this.el.offset().top||0;a._coverSideElement.css({left:b,top:c})},_regFocusSide:function(){var a=this;return this._coverSideElement.bind("mouseenter",function(b){return a._showCover(b)}),$(window).resize(function(){a._resetPosition()}),$(window).scroll(function(){a._resetPosition()}),this},_initCover:function(){return this._$(".component-focus-cover-cover").size()?void 0:this._coverElement=this._gemCover()},_showCover:function(a){var b,c,d,e,f=this;return null!=(c=$(".focus-num").data("slideshow"))&&c.stop(),null!=(d=$(".focus-num").data("tabs"))&&d.click(0),this._initCover(),this._coverVisible?this:(this._coverVisible=!0,this._coverElement.get(0).style.visibility="visible",null!=(e=this.timer)&&e.stop(),b=a?8e3:5e3,f.timer=f._timer(function(){return f._hideCover(1)},b,!0),this)},_hideCover:function(a){return this._coverVisible=!1,this._coverElement.get(0).style.visibility="hidden",this},_hideCoverTrigger:function(){var a;return null!=(a=this.timer)?a.play():void 0},_gemCover:function(){var a,b,c,d=this;return b=$('<div class="component-focus-cover-cover"><embed /></div>'),b.css({position:"relative",width:320,height:445,top:-445,overflow:"hidden","z-index":1001}),c=b.children("embed"),a={type:"application/x-shockwave-flash",src:d.adConfig.swf_loader,width:320,height:445,bgcolor:"#ffffff",quality:"high",wmode:"opaque",flashvars:"flashurl="+d._coverConfig.focus.cover+"&linkurl="+d._coverConfig.link},$.each(a,function(a,b){return c.attr(a,b)}),root.focus_ad_DoFSCommand=function(a){"colose"===a?d._hideCover():void 0},b.appendTo(this.el),b},_$:function(a){return this.el.find(a)},init:function(a){this.base(a),this.adConfig={adProperty:this.options.adProperty,swf_loader:this.options.swf_loader,autoplay:this.options.autoplay};this.el=$("."+this.options.advid),this._coverConfig=this.adConfig.adProperty,this.emit(adv.ENUM.EVENTS.inited)},setup:function(){this.base(),this._initElement(),this.emit(adv.ENUM.EVENTS.setuped)},play:function(){var a=this;this.base(),this._regEvent(),this.adConfig.autoplay&&setTimeout(function(){return a._showCover()},1e3),this.emit(adv.ENUM.EVENTS.played)}});