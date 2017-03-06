(function (data) {
  var ad = {
    speed: 600,
    init: function () {
      $('head').append($('<style type="text/css">' + this.css() + '</style>'));
      this.generalWrap();
      $('.ad-sy-pn1').append(this.html);
      this.bindEvent();
    },
    bindEvent: function () {
      var me = this;
      this.html.find('.ad-sy-item').hover(function () {
        var $this = $(this),
          index = $this.attr('data-index'),
          marginLeft = -6 -index * 135;
        $this.stop().animate({
          width: 980
        },ad.speed);
        $('.ad-sy-list1').stop().animate({
          "margin-left": marginLeft
        }, ad.speed);
      }, function () {
        var $this = $(this);
        $this.stop().animate({
          width: 135
        }, ad.speed);
        $('.ad-sy-list1').stop().animate({
          "margin-left": -6
        }, ad.speed);
      });
    },
    generalWrap: function () {
      var html = [];
      html.push('<div class="pn-in">');
      html.push('	<div class="ad-sy-box1">');
      html.push('		<ul class="ad-sy-list1">');
      for (var i = 0; i < data.length; i++) {
        html.push('			<li class="ad-sy-item" data-index="' + i + '">');
        html.push('<div class="ad-sy-animtewrap">');
        html.push('				<div class="ad-sy-c1">');
        html.push('					<a href="' + data[i].link + '" target="_blank">');
        html.push('						<span class="avatar-box"><img alt="' + data[i].name + '" src="' + data[i].sImg + '" class="avatar" /></span>');
        html.push('						<span class="txt-box"><span class="txt">' + data[i].name + '</span></span>');
        html.push('					</a>');
        html.push('				</div>');
        html.push('				<div class="ad-sy-c2">');
        html.push('					<a href="' + data[i].link + '" target="_blank">');
        html.push('						<span class="avatar-box"><img alt="' + data[i].name + '" src="' + data[i].bImg + '" class="avatar" /></span>');
        html.push('					</a>');
        html.push('				</div>');
        html.push('</div>');
        html.push('			</li>');
      }
      html.push('		</ul>');
      html.push('	</div>');
      html.push('</div>');
      this.html = $(html.join(''));
    },
    css: function () {
      var css = [];
      css.push('.ad-sy-pn1 .pn-in{padding:20px 19px 5px 19px; background:url(//

ue.17173cdn.com/a/www/index/2014/images/b1.png) no-repeat 647px -340px;}');
      css.push('.ad-sy-pn1 .ad-sy-box1{ width:928px; overflow:hidden}');
      css.push('.ad-sy-list1{ width:9000px; overflow: hidden;height:120px; margin-left:-6px;}');
      css.push('.ad-sy-list1 .ad-sy-item, .ad-sy-list1 .ad-sy-c1, .ad-sy-list1 .ad-sy-c2{ float:left;}');
      css.push('.ad-sy-list1 .ad-sy-c1 a, .ad-sy-list1 .ad-sy-c1 .avatar-box, .ad-sy-list1 .ad-sy-c1 .txt-box, .ad-sy-list1 .ad-sy-c1 .txt, .ad-sy-list1 .ad-sy-c2 a{ display:block;}');
      css.push('.ad-sy-list1 .ad-sy-c1 a{ *zoom:1; }');
      css.push('.ad-sy-list1 .ad-sy-item{ width:135px;overflow:hidden;}');
      css.push('.ad-sy-list1 .ad-sy-c1{ width:107px; height:120px; padding:0 28px 0 0; overflow:visible; text-align:center;}');
      css.push('.ad-sy-list1 .ad-sy-c1 .avatar-box{ padding:0; border:none;}');
      css.push('.ad-sy-list1 .ad-sy-c1 .avatar{ width:95px; height:95px; margin:0 auto;}');
      css.push('.ad-sy-list1 .ad-sy-c1 .txt-box{ text-align:center; white-space:nowrap; height:25px;}');
      css.push('.ad-sy-list1 .ad-sy-c1 .txt{ padding-top:5px;}');
      css.push('.ad-sy-list1 .ad-sy-c2{  display:block:padding-left:6px; }');
      css.push('.ad-sy-list1 .ad-sy-c2 .avatar{ width:770px; height:120px;}');
      css.push('.ad-sy-list1 .ad-sy-animtewrap{ width:980px;}');
      return css.join('');
    }
  };

  ad.init();
})([
  {
    name: '呆包3',
    link: '//

www.17173.com',
    sImg: 'img/1.jpg',
    bImg: 'img/banner.jpg'
  },
  {
    name: '叼爆3',
    link: '//

www.17173.com',
    sImg: 'img/2.jpg',
    bImg: 'img/banner.jpg'
  },
  {
    name: '大菠萝3',
    link: '//

www.17173.com',
    sImg: 'img/3.jpg',
    bImg: 'img/banner.jpg'
  },
  {
    name: '大宝3',
    link: '//

www.17173.com',
    sImg: 'img/4.jpg',
    bImg: 'img/banner.jpg'
  },
  {
    name: '迪艾波3',
    link: '//

www.17173.com',
    sImg: 'img/5.jpg',
    bImg: 'img/banner.jpg'
  },
  {
    name: '达拉不撸3',
    link: '//

www.17173.com',
    sImg: 'img/6.jpg',
    bImg: 'img/banner.jpg'
  },
  {
    name: '迪亚布罗3',
    link: '//

www.17173.com',
    sImg: 'img/7.jpg',
    bImg: 'img/banner.jpg'
  }
]);