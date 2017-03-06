window.noToprightFloatAd = true;
adv.AdBase.extend('AdFlashIndexDoubleFloat', {
  init: function(options) {
    this.base(options);
    this.container = $('.adsystem-mark').filter('[data-ad-type=AdFlashIndexDoubleFloat]');
    this.sourceCount = 3;
    this.sources = [];
    this.getSource(0,'822_2b70ce3b0e6e07a47132e8e047c59425');
    this.getSource(1,'826_d21716e24ad9f63bc6d8524f53c7e06d');
    this.getSource(2,'827_a5606d445c8cb39e1874fe2e4243c3ea');
  },
  getSource :function(index,locid){
    var me = this;
    adv.net.proxy('http://ac.o2.qq.com/php/show.php',{
      v:1,
      loc_id:locid,
      data_type:'json'
    },function(result){
      if(result.data){
        me.sourceCount--;
        me.sources[index] = result.data;
        if(me.sourceCount === 0){
          me.emit(adv.ENUM.EVENTS.inited);
        }
      }
    });
  },
  retsetPosition:function(){
    var left1 = (document.body.clientWidth - this.options.datas.pageWidth)/2 - this.options.datas.left.width - this.options.datas.left.margin;
    $('#GGFloatLeft').css('left',left1);
    $('#GGFloatRight').css('right',left1);
  },
  setup: function() {
    this.base();
    var me = this;
    this.options.datas.left.close_src = me.sources[2].res_url;
    this.options.datas.left.url = me.sources[0].link_to;
    this.options.datas.left.src = me.sources[0].res_url;
    
    this.options.datas.right.close_src = me.sources[2].res_url;
    this.options.datas.right.url = me.sources[1].link_to;
    this.options.datas.right.src = me.sources[1].res_url;
    
    var left1 = (document.body.clientWidth - this.options.datas.pageWidth)/2 - this.options.datas.left.width - this.options.datas.left.margin;
    this.html = '<div id="GGFloatLeft" style="position: absolute; width: '+this.options.datas.left.width+'px; height: '+this.options.datas.left.height+'px; '+
    'z-index: 90; left: '+left1+'px; top:'+this.options.datas.left.top+'px; overflow: hidden; visibility: visible;"> '+
    '<img src="http://ue.17173cdn.com/a/lib/vda/sources/adflashindexdoublefloat/v1-1/close.png"  style="position:absolute; bottom:0; left:0; width:12px; height:12px ; z-index:100; cursor:pointer; background:#fff; " class="doublefloatclose" />'
    if(~this.options.datas.left.src.indexOf('.swf')){
      this.html += '<a href="'+this.options.datas.left.url+'" target="_blank" style="position:absolute; left:0;width:100%;height:100%; top:0; z-index:2;display: block;background:#fff; opacity:0; filter:alpha(opacity=0)"></a>';
      this.html += $('<div>').append(adv.flash.embed({
        source: this.options.datas.left.src,
        width: this.options.datas.left.width,
        height: this.options.datas.left.height
      })[0]).html();
    }
    else{
    	this.html += '<a href="'+this.options.datas.left.url+'"  target="_blank" style="position:absolute; left:0; top:0; z-index:-1; width:100%; height:100%"><img src = "'+this.options.datas.left.src+'" width = "'+this.options.datas.left.width+'" height = "'+this.options.datas.left.height+'"></a>';
    }
    this.html +='</div>'+
    '<div id="GGFloatLefts" style="display:none; width: '+this.options.datas.left.close_width+'px; position: absolute; height: '+this.options.datas.left.close_height+'px; z-index: 190; left: 5px; top: '+this.options.datas.left.top+'px;">'+
    '<a href="javascript:;" class="jsfloatreplay" style="width:20px; height:27px; position:absolute; top:0; left:0; background:#fff; opacity:0; filter:alpha(opacity=0)"></a>'+
    '<a href="'+me.sources[2].link_to+'" target="_blank"><img src="'+this.options.datas.left.close_src+'"  /></a><a href="javascript:;"  style="position:absolute; bottom:0; right:0; width:20px; height:27px;background:#fff; opacity:0; filter:alpha(opacity=0)" class="doublefloatclose1" ></a></div>'+
    '<div id="GGFloatRight" style="position: absolute; width: '+this.options.datas.right.width+'px; height: '+this.options.datas.right.height+'px; '+
    'z-index: 90; right : '+left1+'px; top:'+this.options.datas.right.top+'px; overflow: hidden; visibility: visible;" onfocus="this.blur()"> ';

    if(~this.options.datas.right.src.indexOf('.swf')){
      this.html += '<a href="'+this.options.datas.right.url+'" target="_blank" style="position:absolute; left:0;width:100%;height:100%; top:0; z-index:2;display: block;background:#fff; opacity:0; filter:alpha(opacity=0)"></a>';
      this.html += $('<div>').append(adv.flash.embed({
        source: this.options.datas.right.src,
        width: this.options.datas.right.width,
        height: this.options.datas.right.height
      })[0]).html();
    }
    else{
    	this.html += '<a href="'+this.options.datas.right.url+'"  target="_blank" style="position:absolute; left:0; top:0; z-index:-1; width:100%; height:100%"><img src = "'+this.options.datas.right.src+'" width = "'+this.options.datas.right.width+'" height = "'+this.options.datas.right.height+'"></a>';
    }

    this.html +='<a href="javascript:;" style="position:absolute; bottom:0; right:0; width:12px; height:12px ; z-index:10; background:#fff; " class="doublefloatclose" ><img src="http://ue.17173cdn.com/a/lib/vda/sources/adflashindexdoublefloat/v1-1/close.png" alt="" /></a></div>'+
    '<div id="GGFloatRights" style="display:none; width: '+this.options.datas.right.close_width+'px; position: absolute; height: '+this.options.datas.right.close_height+'px; z-index: 190; right: 5px; top: '+this.options.datas.left.top+'px;">'+
    '<a href="javascript:;" class="jsfloatreplay" style="width:20px; height:27px; position:absolute; top:0; left:0;background:#fff; opacity:0; filter:alpha(opacity=0)"></a>'+
    '<a href="'+this.options.datas.right.url+'" target="_blank"><img src="'+this.options.datas.right.close_src+'"  /></a><a href="javascript:;" style="background:#fff; opacity:0; filter:alpha(opacity=0); position:absolute; bottom:0; right:0; width:20px; height:27px" class="doublefloatclose1"></a></div>';
    this.bindEvent();
    this.emit(adv.ENUM.EVENTS.setuped);
  },
  bindEvent: function() {
    var me = this;
    $('body').delegate('.doublefloatclose', 'click', function(event) {
      $('#GGFloatLeft').hide();
      $('#GGFloatRight').hide();
      $('#GGFloatLefts').show();
      $('#GGFloatRights').show();

    });
/*    $('body').delegate('.link-to','mouseup',function(e){
      if(e.which == 1){
        window.open($(this).attr('data-href'));
        e.preventDefault();
        return false;
      }
    });*/
     $('body').delegate('.doublefloatclose1', 'click', function(event) {
      
      $('#GGFloatLefts').hide();
      $('#GGFloatRights').hide();

    });
		$(window).bind('resize',function(){
      me.retsetPosition();
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
    $('.' + this.options.advid).text('').append(this.html).show();
    this.emit(adv.ENUM.EVENTS.played);
  },
  stop: function() {
    this.base();
    this.emit(adv.ENUM.EVENTS.stoped);
  }

});