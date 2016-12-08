adv.AdBase.extend('Ad17173TeQuan', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data || this.options;
    if (!!this.data.image && !!this.data.link) {
      var tmpl = function() {/*@preserve
        <li class="item">
          <a href="@link" target="_blank" class="con">
            <img src="@image" width="250" height="70" alt="">
            <span class="detail" style="color:@fontColor;">
              <span class="tit">@title</span>
              <span class="txt">@desc</span>
            </span>
            <span class="btn-tq">@btnText</span>
          </a>
        </li>
      */};
      this.data.advid = this.options.advid;
      this.data.html = adv.razor(tmpl, this.data);
      this.emit(adv.ENUM.EVENTS.setuped);
    }
  },
  play: function() {
    $('.'+this.data.advid).next('.rank-hao').find('li.item').slice(-2).remove();
    if (this.data.index == 0) {
      $('.'+this.data.advid).prepend(this.data.html);
    } else {
      $('.'+this.data.advid).append(this.data.html);
    }
    $('.'+this.data.advid).show();
    this.emit(adv.ENUM.EVENTS.played);
  }
});