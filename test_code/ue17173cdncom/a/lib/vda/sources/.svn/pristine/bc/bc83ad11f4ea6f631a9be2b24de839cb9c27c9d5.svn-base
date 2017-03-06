/*! ued-todo-v1.0.0 2015-05-19 */
/* http://www.17173.com/ */

/* Copyright (c) 2013 17173.com */

/* Licensed same as jquery - MIT License */
/* http://www.opensource.org/licenses/mit-license.php */

/* email: changjianwang@cyou-inc.com */
adv.AdBase.extend("AdYeyouCommendList",{init:function(a){this.base(a),this.emit(adv.ENUM.EVENTS.inited)},setup:function(){this.base();var a=this.options.adConfig,b='<ul class="list-con-gg">';$.each(a,function(a,c){b+='<li><div class="li-in"><span class="pic"><a href="'+c.link+'" target="_blank" data-adskey="'+c.code+'"><img src="'+c.img+'" width="50" height="50" alt="'+c.game+'"><b class="cover"></b></a></span>',b+=c.hot?'<span class="txt"><a href="'+c.link+'" title="'+c.game+'" style="color:red;" target="_blank" data-adskey="'+c.code+'">'+c.game+"</a></span>":'<span class="txt"><a href="'+c.link+'" title="" target="_blank" data-adskey="'+c.code+'">'+c.game+"</a></span>",b+="</div></li>"}),b+="</ul>",this.html=b,this.emit(adv.ENUM.EVENTS.setuped)},_hitRequest:function(a,b){a&&"function"==typeof _jc_pingjs&&_jc_pingjs("block",{ads:a,u:encodeURIComponent(b)})},play:function(){var a=this;this.base(),$("."+this.options.advid).append(this.html),$("."+this.options.advid).find("a").click(function(){var b;b=$(this),a._hitRequest(b.attr("data-adskey"),b.attr("href"))}),this.emit(adv.ENUM.EVENTS.played)},stop:function(){this.base(),this.emit(adv.ENUM.EVENTS.stoped)},dispose:function(){}});