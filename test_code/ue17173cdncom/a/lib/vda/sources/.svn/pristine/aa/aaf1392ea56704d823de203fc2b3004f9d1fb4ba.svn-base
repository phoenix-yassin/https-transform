adv.AdBase.extend('AdHaoTopRightBanner', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data || this.options;
    if (!!this.data.image && !!this.data.link) {
      var tmpl = function() {/*@preserve
        <img src="@thumb" width="200" height="60" alt="@title">
        <a href="@link" target="_blank" style="display: none;" title="@title">
          <img src="@image" width="260" height="135" alt="">
        </a>
      */};
      this.data.advid = this.options.advid;
      this.data.html = adv.razor(tmpl, this.data);
      this.emit(adv.ENUM.EVENTS.setuped);
    }
  },
  play: function() {
    var $container = $('.'+this.data.advid);
    $container.removeClass('remm-box').addClass('tg-box').empty().append(this.data.html);

    $container.find('img').hover(function() {
      $container.find('a').show();
    }, function() {
      $container.find('a').hide();
    });
    this.emit(adv.ENUM.EVENTS.played);
  }
});