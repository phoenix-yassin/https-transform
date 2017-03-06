adv.AdBase.extend('AdZqFinalBottom', {
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data;
  
   String.getBlength = function (str) {
          for (var i = str.length, n = 0; i--; ) {
              n += str.charCodeAt(i) > 255 ? 2 : 1;
          }
          return n;
      }
    //按指定字节截取字符串
    String.cutByte = function(str,len,endstr){
        var len = +len
            ,endstr = typeof(endstr) == 'undefined' ? "..." : endstr.toString();
        function n2(a){ var n = a / 2 | 0; return (n > 0 ? n : 1)} //用于二分法查找
        if(!(str+"").length || !len || len<=0){return "";}
        if(this.getBlength(str) <= len){return str;} //整个函数中最耗时的一个判断,欢迎优化
        var lenS = len - this.getBlength(endstr)
            ,_lenS = 0
            , _strl = 0
        while (_strl <= lenS){
            var _lenS1 = n2(lenS -_strl)
            _strl += this.getBlength(str.substr(_lenS,_lenS1))
            _lenS += _lenS1
        }
        return str.substr(0,_lenS-1) + endstr
    }

  var tmplFn = function(){/*@preserve
        <div class="zq-final-recd">
      <div class="zq-final-c1">
        <a href="@picLink" target="_blank" class="zq-final-avatar"><img src="@source" alt="" width="285" height="60"/></a>
      </div>
      <div class="zq-final-c2">
        <a href="@link1" target="_blank">@text1</a>
        <a href="@link2" target="_blank">@text2</a>
        <a href="@link3" target="_blank">@text3</a>
        <a href="@link4" target="_blank">@text4</a>
      </div>
    </div>


  */}


  this.css = '<style>.recd-wrap{width:608px;margin:0 auto;overflow:hidden; margin-top: 40px;}\
.recd-wrap .app17173-code{padding:7px 5px 8px 5px;width:298px;float:left; height:120px; overflow:hidden}\
.recd-wrap .app17173-code-l{width:219px;}\
.recd-wrap .zq-final-recd{overflow:hidden;*zoom:1;*float: left;width: 297px; height:135px; font-family: "Microsoft Yahei"; font-size: 12px;background: #fff; border: 1px solid #dddddd; border-left: 0;}\
.recd-wrap .zq-final-recd .zq-final-c1{ padding:6px 6px 9px 6px; overflow:hidden; *zoom:1; }\
.recd-wrap .zq-final-recd .zq-final-avatar{ display:block;}\
.recd-wrap .zq-final-recd .zq-final-avatar img{ display:block; width:285px; height:60px;}\
.recd-wrap .zq-final-recd .zq-final-c2{ overflow:hidden; *zoom:1; display:block!important}\
.recd-wrap .zq-final-recd .zq-final-c2 a{ float:left; width:48%; white-space: nowrap;     padding-left: 2px;  overflow:hidden; line-height: 27px; text-align: left; font-size:12px; color:#266595; background: #dbedff; margin:0 0 3px 3px; border-radius:4px;}\
</style>';


   this.html = adv.razor(tmplFn,{picLink: data.picLink, source: data.source, link1:data.link1, 
      link2:data.link2, link3:data.link3, link4:data.link4, text1:String.cutByte(data.text1,22, ''), text2:String.cutByte(data.text2,22, ''), text3:String.cutByte(data.text3,22, ''), text4:String.cutByte(data.text4,22, '')});
      this.emit(adv.ENUM.EVENTS.setuped);

  },

  play: function() {
    var me = this;

    var el;
    if($('#content').length){
      el = $('#content').find('.app17173-code');
    }
    else{
      el =  $('.app17173-code');
    }

    if(el.length >0) {
      $('head').append(me.css)
      el.wrap('<div class="clarefix recd-wrap '+me.options.advid+'"></div>')
      $(me.html).insertAfter(el)

      $('.zq-final-recd .zq-final-c2 a').eq(me.data.redMark-1).css({color:'red'});
      // $('.' + me.options.advid).append(me.html);
      this.emit(adv.ENUM.EVENTS.played);

    } 
    else {
      // $('head').append(me.css)
      // $('<div class="clarefix recd-wrap '+me.options.advid+'">'+me.html+'</div>').insertAfter('#relevant_1');
      // $('.'+me.options.advid).find('.zq-final-c2 a').eq(me.data.redMark-1).css({color:'red'});
      // $('.zq-final-recd').css({'margin': '0 auto'})
      // // $('.' + me.options.advid).append(me.html);
      // this.emit(adv.ENUM.EVENTS.played);

    }


  }
});