adv.AdBase.extend('AdRightCornerWindow', {
  init: function (options) {
    this.base(options);
    //声明广告在页面9宫格中所处位置,用于广告冲突管理.
    this.position = adv.ENUM.POSITION.bottomRight;
    //在适当的时候触发初始化完成的事件
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function () {
    var data = this.options;
    this.html = [];
    this.html.push('<div style="position:absolute;bottom:0;right:0;width:400px;height:200px;">');
    this.html.push('<a id=' + this.id + ' href="' + data.url + '" target="_blank">');
    this.html.push('  <img src="' + data.source + '" width="400" height="200" border="0">');
    this.html.push('</a>');
    this.html.push('</div>');
    this.html = this.html.join('');
    this.html = adv.$(this.html);
    this.base();
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  play: function () {
    document.body.appendChild(this.html[0]);
    this.base();
    this.emit(adv.ENUM.EVENTS.played);
  }
});
