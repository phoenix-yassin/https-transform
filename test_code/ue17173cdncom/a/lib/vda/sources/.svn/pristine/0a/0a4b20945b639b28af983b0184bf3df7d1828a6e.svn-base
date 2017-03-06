/*! ued-todo-v1.0.0 2015-07-10 */
/* http://www.17173.com/ */

/* Copyright (c) 2013 17173.com */

/* Licensed same as jquery - MIT License */
/* http://www.opensource.org/licenses/mit-license.php */

/* email: changjianwang@cyou-inc.com */
adv.AdBase.extend("AdGameFlyLeft",{init:function(a){this.base(a),this.emit(adv.ENUM.EVENTS.inited)},setup:function(){this.base();var a=this.options.adConfig,b='<div class="'+this.options.selector+'" style="position:absolute;width:'+a.width+"px;height:"+a.height+"px;z-index:90;left:"+a.left+"px;top:"+a.top+'px;overflow:hidden;" onfocus="this.blur()"><a href="'+a.linkUrl+'" target="_blank" data-adskey="'+a.code+'"><img src="'+a.imgSrc+'" border="0" usemap="#left_piao"></a><map name="left_piao" id="left_piao"> <area shape="rect" coords="82,63,105,80" href="javascript:;" alt="" class="close" /><area shape="rect" coords="0,0,105,63" href="'+a.linkUrl+'" target="_blank" alt="" /><area shape="rect" coords="0,88,82,63" href="'+a.linkUrl+'" target="_blank" alt="" /></map></div>';this.html=b,this.emit(adv.ENUM.EVENTS.setuped)},_hide:function(){adv.$("."+this.options.selector).hide()},_hitRequest:function(a,b){a&&"function"==typeof _jc_pingjs&&_jc_pingjs("block",{ads:a,u:encodeURIComponent(b)})},play:function(){var a=this;this.base(),adv.$("body").append(this.html),adv.$("."+this.options.selector).find(".close").on("click",function(){a._hide()}),this.emit(adv.ENUM.EVENTS.played)},stop:function(){this.base(),this.emit(adv.ENUM.EVENTS.stoped)},dispose:function(){}});