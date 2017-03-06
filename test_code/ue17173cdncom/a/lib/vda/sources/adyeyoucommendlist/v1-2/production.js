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
    var ipaCodes = [
      '1a000659bb19f87518befde9ea47cebe',
      '4179466ff5f7794cd20563dc6147a6ba',
      '4afdf3703f8c893ae0f05e4ebf13f21b',
      '84a3fe479b1d8f7f45098d95123f59d9',
      'b69030d927db16439c7d7c5d3668bfc9',
      'ec330168ba8357997ebd0603f035de0f',
      '730fd82f9f1d760d9575dbf37d100da0',
      '0a2d8a5ce515bba09730456b621e8128',
      'cf25836778377504331afb4a85fb96ad'
    ];
    $("." + this.options.advid).find('.list-item').each(function(i,n){
    	adv.util.sendIpa($(this),ipaCodes[i],true);
    });
	},
	stop: function() {
		this.base(), this.emit(adv.ENUM.EVENTS.stoped)
	},
	dispose: function() {}
});