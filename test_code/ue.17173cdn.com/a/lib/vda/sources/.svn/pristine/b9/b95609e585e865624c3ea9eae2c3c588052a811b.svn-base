adv.AdBase.extend('AdZhuanquMandwow', {
  /*
  初始化参数的操作请放在这个方法里执行,广告实例化时会自动调用此方法
  options即为configs.js里的配置,也就是投放时的代码
  */
  init: function (options) {
    /*
    调用父类的方法,初始化参数和状态自动转化,此方法必须调用
    执行完成后,可以通过this.options访问options
    */
    this.base(options);
    /*自定义的初始化逻辑*/
   	//alert(this.options.customProperty);   
    /*
    初始化操作完成后,手动触发此事件,以通知广告中心自动去调用setup
    如果初始化操作是异步的,请在异步完成后再触发此事件,以保证在setup之前所有初始化操作都已完成.
    如果不想让广告继续运行,则不要触发此事件即可
    */
    this.emit(adv.ENUM.EVENTS.inited);
  },
  //预加载素材,dom元素预拼接等准备工作请在此方法执行,inited触发后会自动调用此方法,请勿手动调用此方法
  setup: function () {
    /*
    通知广告中心setup完毕,可以立即播放(play)了
    如果不触发此事件,则广告不会自动播放
    */
    this.style ='<style> .menu li,.menu li a{ width:110px;}#wrapper-top {background:url('+this.options.customImg+') center 0px no-repeat;}</style>';
    this.container = $('.adsystem-mark').filter('[data-ad-type="AdZhuanquMandwow"]');
    this.html = '<a href="'+this.options.customText+'" target="_blank" title="">'+this.options.customText+'</a>';
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  //播放广告,setuped事件触发后,广告中心会自动调用此方法,也可以响应用户事件里调用此方法
  play: function () {
    /*通知广告中心广告已播放*/
    this.container.append(this.html);
    $('head').append(this.style);
    this.emit(adv.ENUM.EVENTS.played);
  },
  //可选的实现,停止广告播放,如果不实现此方法,则默认的stop实现会直接隐藏广告的dom元素.
  stop: function () {
    /*
    通知广告中心广告已停止
    */
    this.emit(adv.ENUM.EVENTS.stoped);
  },
  //可选的实现,如果广告占用的资源需要手动去回收,请在此方法里处理.
  dispose: function () {

  }
});