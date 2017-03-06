adv.AdBase.extend('Ad17173YeyouKaifuText', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  template:function(){/*@preserve
			<li class="item">
				<div class="c2">
					<div class="art-item">
          	<a href="@link" target="_blank" class="c-red1">@gameName</a>
            <a href="@link" target="_blank" style="*position:absolute"><img src="@img" alt=""/></a>
					</div>
				</div>
				<div class="c3"><a href="@link" target="_blank" class="c-red1">@serverName</a></div>
				<div class="c5"><a href="@link" target="_blank" class="c-red1">试玩</a></div>
			</li>
  */},
  play: function() {
    var advEl = $('.' + this.options.advid);
    advEl.find('.rank-bd').css('height',540);
    var html = adv.razor(this.template,this.data);
    advEl.find('.list-rank-total').prepend(html);
    this.emit(adv.ENUM.EVENTS.played);
  }
});