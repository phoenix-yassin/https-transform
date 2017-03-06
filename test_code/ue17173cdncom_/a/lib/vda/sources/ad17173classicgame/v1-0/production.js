adv.AdBase.extend('Ad17173ClassicGame', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data || this.options;
    if (!!this.data.image && !!this.data.link) {
      var tmpl = function() {/*@preserve
        <li>
          <a href="@link" target="_blank" class="con">
            <img src="@image" alt="" width="85" height="85"/>
            <span class="txt">@gameName</span>
          </a>
          <div class="other"><a href="@leftLink" target="_blank">@leftBtn</a>|<a href="@rightLink" target="_blank">@rightBtn</a><b class="mask"></b></div>
        </li>
      */};
      this.data.advid = this.options.advid;
      this.data.html = adv.razor(tmpl, this.data);
      this.emit(adv.ENUM.EVENTS.setuped);
    }
  },
  play: function() {
    var $container = $('.'+this.data.advid);
    $container.find('li:last').replaceWith(this.data.html);
    this.emit(adv.ENUM.EVENTS.played);
  }
});