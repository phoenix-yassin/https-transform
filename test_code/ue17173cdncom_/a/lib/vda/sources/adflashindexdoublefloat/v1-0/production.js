window.noToprightFloatAd = true;
adv.AdBase.extend('AdFlashIndexDoubleFloat', {
  init: function(options) {
    this.base(options);
    this.container = $('.adsystem-mark').filter('[data-ad-type=AdFlashIndexDoubleFloat]');
    this.emit(adv.ENUM.EVENTS.inited);
  },
	
  setup: function() {
    this.base();
    var left1 = (document.body.clientWidth - this.options.datas.pageWidth)/2 - this.options.datas.left.width - this.options.datas.left.margin;
    this.html = '<div id="GGFloatLeft" style="position: absolute; width: '+this.options.datas.left.width+'px; height: '+this.options.datas.left.height+'px; '+
    'z-index: 90; left: '+left1+'px; top:'+this.options.datas.left.top+'px; overflow: hidden; visibility: visible;"> '+
    '<span  style="position:absolute; bottom:0; left:0; width:20px; height:30px ; z-index:100; cursor:pointer; background:#fff; opacity:0; filter:alpha(opacity=0)" class="doublefloatclose" ></span>'+
    '<a href="'+this.options.datas.left.url+'" target = "_blank" style="position:absolute; left:0; top:0; z-index:-1; width:100%; height:100%">';
    if(~this.options.datas.left.src.indexOf('.swf')){
      this.html += $('<div>').append(adv.flash.embed({
        source: this.options.datas.left.src,
        width: this.options.datas.left.width,
        height: this.options.datas.left.height
      })[0]).html();
    }
    else{
    this.html += '<img src = "'+this.options.datas.left.src+'" width = "'+this.options.datas.left.width+'" height = "'+this.options.datas.left.height+'">';
    }
    this.html +='</a></div>'+
    '<div id="GGFloatLefts" style="display:none; width: '+this.options.datas.left.close_width+'px; position: absolute; height: '+this.options.datas.left.close_height+'px; z-index: 190; left: 5px; top: '+this.options.datas.left.top+'px;">'+
    '<a href="javascript:;" class="jsfloatreplay" style="width:20px; height:27px; position:absolute; top:0; left:0; background:#fff; opacity:0; filter:alpha(opacity=0)"></a>'+
    '<a href="'+this.options.datas.left.url+'" target="_blank"  ><img src="'+this.options.datas.left.close_src+'"  /></a><a href="javascript:;"  style="position:absolute; bottom:0; right:0; width:20px; height:27px;background:#fff; opacity:0; filter:alpha(opacity=0)" class="doublefloatclose1" ></a></div>'+
    '<div id="GGFloatRight" style="position: absolute; width: '+this.options.datas.right.width+'px; height: '+this.options.datas.right.height+'px; '+
    'z-index: 90; right : '+left1+'px; top:'+this.options.datas.right.top+'px; overflow: hidden; visibility: visible;" onfocus="this.blur()"> '+
    '<a href="'+this.options.datas.right.url+'" target = "_blank" style="position:absolute; left:0; top:0 ; z-index:1">';

    if(~this.options.datas.right.src.indexOf('.swf')){
      this.html += $('<div>').append(adv.flash.embed({
        source: this.options.datas.right.src,
        width: this.options.datas.right.width,
        height: this.options.datas.right.height
      })[0]).html();
    }
    else{
    	this.html += '<img src = "'+this.options.datas.right.src+'" width = "'+this.options.datas.right.width+'" height = "'+this.options.datas.right.height+'">';
    }

    this.html +='</a>'+
    '<a href="javascript:;" style="position:absolute; bottom:0; right:0; width:20px; height:30px ; z-index:10; background:#fff; opacity:0; filter:alpha(opacity=0)" class="doublefloatclose" ></a></div>'+
    '<div id="GGFloatRights" style="display:none; width: '+this.options.datas.right.close_width+'px; position: absolute; height: '+this.options.datas.right.close_height+'px; z-index: 190; right: 5px; top: '+this.options.datas.left.top+'px;">'+
    '<a href="javascript:;" class="jsfloatreplay" style="width:20px; height:27px; position:absolute; top:0; left:0;background:#fff; opacity:0; filter:alpha(opacity=0)"></a>'+
    '<a href="'+this.options.datas.right.url+'" target="_blank"  ><img src="'+this.options.datas.right.close_src+'"  /></a><a href="javascript:;" style="background:#fff; opacity:0; filter:alpha(opacity=0); position:absolute; bottom:0; right:0; width:20px; height:27px" class="doublefloatclose1"></a></div>';
    this.bindEvent();
    this.emit(adv.ENUM.EVENTS.setuped); 
  },
  bindEvent: function() {
    $('body').delegate('.doublefloatclose', 'click', function(event) {
      $('#GGFloatLeft').hide();
      $('#GGFloatRight').hide();
      $('#GGFloatLefts').show();
      $('#GGFloatRights').show();

    });
     $('body').delegate('.doublefloatclose1', 'click', function(event) {
      
      $('#GGFloatLefts').hide();
      $('#GGFloatRights').hide();

    });

      $('body').delegate('.jsfloatreplay', 'click', function(event) {
      
        $('#GGFloatLeft').show();
        $('#GGFloatRight').show();
        $('#GGFloatLefts').hide();
        $('#GGFloatRights').hide();

    });

      if($('#GGFloatLeft:visible')) {
        setTimeout(function() { 
          $('#GGFloatLeft').hide();
          $('#GGFloatRight').hide();
          $('#GGFloatLefts').show();
          $('#GGFloatRights').show();},
           this.options.datas.time*1000
          )
      }
  },
  play: function() {
    this.base();
    // this.container.html(this.html)
    var  displaycss = '<style type="text/css">.AdTopBarDragShow{display:none!important}</style>';
    $('head').append(displaycss)

    $('.' + this.options.advid).text('').append(this.html).show();
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function() {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }

});