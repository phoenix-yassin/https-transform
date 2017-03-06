/*! ued-todo-v1.0.0 2015-04-02 */
/* //www.17173.com/ */

/* Copyright (c) 2013 17173.com */

/* Licensed same as jquery - MIT License */
/* //www.opensource.org/licenses/mit-license.php */

/* email: changjianwang@cyou-inc.com */
/* Date: 2015-04-02 */

adv.AdBase.extend("AdYeyouCommendList", {
	init: function(a) {
		this.base(a), this.emit(adv.ENUM.EVENTS.inited)
	},
	setup: function() {
		this.base();
		var a = this.options.adConfig,
			b = '<ul class="comm-plist">';
		$.each(a, function(a, c) {
			b += '<li class="list-item" > <a href="' + c.link + '"  data-adskey="' + c.code + '" target="_blank" class="art-item-pt"> <span class="avatar"> <img src="' + c.img + '" width="80" height="80" alt="' + c.game + '"> </span><span class="txt">',
		    b += c.hot ? '  <span class="tit" style="color:red;">' + c.game + '</span> ':' <span class="tit" >' + c.game + '</span> ',
		    b += '</span> </a> </li>'
		}), b += "</ul>", this.html = b, this.emit(adv.ENUM.EVENTS.setuped)
	},
	_hitRequest: function(a, b) {
		return null == b && (b = "")
	},
	play: function() {
		var a = this;
		this.base(), $("." + this.options.advid).append(this.html), $("." + this.options.advid).find("a").click(function() {
			var b;
			b = $(this), a._hitRequest(b.attr("data-adskey"), b.attr("href"))
		}), this.emit(adv.ENUM.EVENTS.played)
	},
	stop: function() {
		this.base(), this.emit(adv.ENUM.EVENTS.stoped)
	},
	dispose: function() {}
});