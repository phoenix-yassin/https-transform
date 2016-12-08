!function(e) {
    adv.AdBase.extend("AdZqCodeBook", {
        init: function(a) {
            this.base(a),
            this.emit(adv.ENUM.EVENTS.inited)
        },
        setup: function(data) {
          var me = this;
          this.data = data;
          this.businCss = ' <style type="text/css">\
          .busin-player-btn{position: absolute;right: 0;top: 167px;display: block;width: 190px;height: 58px;border-bottom:3px solid #c54a00;background:url(http://ue.17173cdn.com/a/lib/vda/sources/adnewgamecodebook/img/btn2.gif) top center no-repeat ;     box-shadow: 1px 1px 3px 1px #333;  color:#fffdea;font:bold 20px/58px "Microsoft Yahei";-webkit-border-radius: 5px;border-radius: 5px;text-align:center;}\
          .busin-player-btn:hover{text-decoration: none;}\
          .busin-dialog{position: fixed; display:none; z-index:800;top: 20%;left: 50%;margin-left: -250px;width: 500px;background-color: #fff;border-radius: 10px;font: normal 14px/1.5 "Microsoft Yahei","Simsun";_border:1px solid #ddd;}\
          .busin-dialog .busin-dialog-close{color:#fff;position: absolute;top: -30px;right: 0;width:1em;height:1em;text-align: center;font:bold 30px/1 "Simsun";text-decoration:none; }\
          .busin-dialog .busin-dialog-logo{position: absolute;left: 50%;top:-56px;margin-left: -85px;width: 170px;height: 130px;overflow: hidden;}\
          .busin-dialog .busin-dialog-c1{height:135px;background:url(http://ue.17173cdn.com/a/lib/vda/sources/adnewgamecodebook/img/busin-dialog-bg.jpg) no-repeat;border-radius: 10px 10px 0 0;padding-top: 85px; }\
          .busin-dialog-c1 .busin-dialog-info{font-size: 16px;color:#ffea00; padding:0 52px; text-align:center}\
          .busin-dialog-c1 .busin-dialog-tt{background: url(http://ue.17173cdn.com/a/lib/vda/sources/adnewgamecodebook/img/busin-ico.png) no-repeat -30px 3px;padding-left: 20px;display: inline-block;*display: inline;margin:0 15px;}\
          .busin-dialog-c1 .busin-dialog-tit{font:bold 42px/1.5 "Microsoft Yahei";text-align: center;color:#fff;margin-bottom:10px; }\
          .busin-dialog-c2 .busin-dialog-submit{display: block;border: none;line-height:50px; cursor:pointer;text-align:center; background-color: #ff7200;width: 200px;height: 50px;color:#fff;font-size:20px;margin:0 auto;-webkit-border-radius: 5px;border-radius: 5px;}\
          .busin-dialog-c2 .busin-dialog-submit:hover{background-color: #ff8726;}\
          .busin-dialog-c2 .js-bmbutton{margin-top:20px;}\
          .busin-dialog-mask{width: 100%;height: 100%;background: #000;opacity:.5;filter: alpha(opacity=50);_display:none;position: fixed;z-index: 799;top: 0;;left: 0; display:none}\
          .busin-dialog-c2{padding-bottom: 10px;min-height: 80px;}\
          .busin-dialog-c2 .form-pos{width: 380px;margin:0 auto;}\
          .busin-dialog-c2 .form-pos .form-group{position: relative;width: 100%;line-height: 45px;margin-bottom: 15px;}\
          .busin-dialog-c2 .form-pos .form-label{position: absolute;left: 0;top:0;float: none;text-align: left;padding: 0 0 0 1em;font-size: 16px;color:#999;}\
          .busin-dialog-c2 .form-pos .form-input{background:#f0f0f0;width:100%;}\
          .busin-dialog-c2 .form-pos .form-input input{padding-left:20%;width: 80%;background:#f0f0f0;height: 45px;line-height: 45px\\9;border: none;}\
          .busin-dialog-c2 .form-pos .error{color:#ff0000;position: absolute;top: 0;right:5px;line-height: 45px; display:none; left:auto; background:none; border:none}\
          .busin-dialog-c2 .busin-dialog-tit{text-align: center;color:#999;font-size: 18px;padding: 20px 0;}\
          .busin-dialog-c2 .busin-dialog-line{display:inline-block;*display: inline;*zoom:1;width: 30px;height: 1px;line-height: 0;overflow: hidden;background-color: #e5e5e5;vertical-align: middle;margin: 0 20px;}\
         .busin-dialog-c2  .busin-dialog-success{color:#999;text-align: center;padding:80px 0; }\
         .busin-dialog-c2  .busin-dialog-success .busin-dialog-tit{font-size: 26px;text-align: center;color:#ff7200;padding: 0 0 10px 0;}\
         .busin-dialog-success-info{text-align: center;}\
      </style>'
          me.dialog = '<div class="busin-dialog adZqCodeBook-dialog" style="display:none">\
              <div class="busin-dialog-in">\
                  <a href="javascript:;"  class="busin-dialog-close">\u00d7</a>\
                  <a href="javascript:;" class="busin-dialog-logo">\
                      <img src="'+me.data.logo+'" width="170" height="130" alt="" />\
                  </a>\
                  <div class="busin-dialog-c1">\
                      <h2 class="busin-dialog-tit">'+me.data.tit+'!</h2>\
                      <p class="busin-dialog-info">'+me.data.tips+'</p>\
                  </div>\
                  <div class="busin-dialog-c2">\
                      <h2 class="busin-dialog-tit"><span class="busin-dialog-line"></span>\u6211\u8981\u62a5\u540d<span class="busin-dialog-line"></span></h2>\
                      <form action="" class="form-pos">\
                          <div class="form-group">\
                              <label for="" class="form-label">\u624b\u673a\u53f7</label>\
                              <div class="form-input">\
                                  <input type="text" value="" placeholder="" name="mobile">\
                              </div>\
                              <p class="error">\u624b\u673a\u4e0d\u80fd\u4e3a\u7a7a</p>\
                          </div>\
                          <div class="form-group">\
                              <label for="" class="form-label">\u90ae\u7bb1</label>\
                              <div class="form-input">\
                                  <input type="text" value="" placeholder="" name="email">\
                              </div>\
                               <p class="error">\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a</p>\
                          </div>\
                          <div class="form-group">\
                                <button type="button" class="busin-dialog-submit" id="jsSubmitUserInfo">\u63d0\u4ea4</button>\
                          </div>\
                      </form>\
                      <a class="busin-dialog-submit js-bmbutton"  data-type="1">我要报名</a>\
                  </div>\
              </div>\
          </div>\
          <div class="busin-dialog-mask" style="display:none"></div>';

        this.emit(adv.ENUM.EVENTS.setuped)
        },

      getMobile: function() {
        var me = this;
        $.ajax({
          url: 'http://passport.17173.com/site/getMobile?callback=abc',
          type: 'GET',
          dataType: 'jsonp',
          jsonpCallback:'abc',
          success: function(data) {
            if(data.data.mobile ) {
              me.mobile = data.data.mobile;
              $('.busin-dialog').find('input[name=mobile]').val(me.mobile);

            }

          }
        })
    

      },
       
       setCookie: function(c_name, value, expiredays) {
          var exdate = new Date()
          exdate.setDate(exdate.getDate() + expiredays)
          document.cookie = c_name + "=" + escape(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
        },

        getCookie: function(c_name) {
          if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
              c_start = c_start + c_name.length + 1
              c_end = document.cookie.indexOf(";", c_start)
              if (c_end == -1) c_end = document.cookie.length
              return unescape(document.cookie.substring(c_start, c_end))
            }
          }
          return ""
        },
      bindEvent: function() {
        var me = this;
          $('#jsBook, .adZqCodeBook-dialog .js-bmbutton').click(function() {
            me.dataType = $(this).data('type');
            if (Passport.isLoggedIn()) {
              $('.adZqCodeBook-dialog').show();
              $('.busin-dialog-mask').show()
              $('.adZqCodeBook-dialog .form-pos').show()
              $('.busin-dialog-c2 .busin-dialog-tit').show()
              $('.adZqCodeBook-dialog .js-bmbutton').hide()


              me.uid = Passport.data('uid');
              me.username = Passport.data('username');
              $('.adZqCodeBook-dialog').find('input[name=email]').val(me.username);
              me.getMobile()
            } else {
              Passport.Dialog.show({
                modal: true,
                onHide: function() {
                }
              });
            }
          })

          $('.busin-dialog-close').click(function() {
            $('.adZqCodeBook-dialog').hide();
            $('.busin-dialog-mask').hide();
            $('.adZqCodeBook-dialog .form-input input').val('');
             $('.adZqCodeBook-dialog .error').hide();
          })


          Passport.on(Passport.EVENTS.loginSuccess, function() {
            if(me.dataType == 1)  {
              $('.adZqCodeBook-dialog').show();
              $('.busin-dialog-mask').show();
              $('.adZqCodeBook-dialog .form-pos').show()
              $('.busin-dialog-c2 .busin-dialog-tit').show()
              $('.adZqCodeBook-dialog .js-bmbutton').hide()

              me.uid = Passport.data('uid');
              me.username = Passport.data('username');
              $('.adZqCodeBook-dialog').find('input[name=email]').val(me.username);
               me.getMobile()
            }

          });
          $('.adZqCodeBook-dialog .form-input input').change(function() {
            $(this).parents('.form-input').siblings('.error').hide()
          })


          $('#jsSubmitUserInfo').click(function() {
            var passport_id = me.uid,
            game_code = me.data.gameCode,
            mobile = $('.adZqCodeBook-dialog input[name=mobile]').val(),
            email = $('.adZqCodeBook-dialog input[name=email]').val();

            if(!mobile  ) {
               $('.adZqCodeBook-dialog input[name=mobile]').parents('.form-input').siblings('.error').text('\u624b\u673a\u4e0d\u80fd\u4e3a\u7a7a').show();
               return false;
            }

            if(isNaN(mobile) || mobile.length != 11) {
              $('.adZqCodeBook-dialog input[name=mobile]').parents('.form-input').siblings('.error').text('\u624b\u673a\u53f7\u5fc5\u987b\u4e3a11\u4f4d\u6570\u5b57').show();
              return false;
            }

            if(!email) {
              $('.adZqCodeBook-dialog input[name=email]').parents('.form-input').siblings('.error').text('\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a').show();
              return false;
            }

            if(email.indexOf('@') == -1 || email.indexOf('.com')== -1) {
              $('.adZqCodeBook-dialog input[name=email]').parents('.form-input').siblings('.error').text('\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e').show();
              return false;

            }



            var infoData = {
              passport_id: passport_id,
              game_code : game_code,
              mobile: mobile,
              email : email,
              channel: 2
            }

            me.sendInfo(infoData);


          });


           $('#jsBook').click(function(){
              window._jc_ping = window._jc_ping || [];
                _jc_ping.push([
                  '_trackBlockClick',
                   'ZZBjUb',
                  window.location.href
               ]);
            })
      },

 
      sendInfo: function(data) {
          $.ajax({
            url: 'http://hao.17173.com/api/Schegame?',
            type: 'GET',
            dataType: 'jsonp',
            data: data,
            success: function(data) {
              if(data.result == 'success') {
                $('.busin-dialog-c2').html(' <div class="busin-dialog-success">\
                    <h3 class="busin-dialog-tit">\
                        \u606d\u559c\u60a8\uff0c\u62a5\u540d\u6210\u529f!\
                    </h3>\
                    <p class="busin-dialog-info">\u6838\u5fc3\u73a9\u5bb6\u7279\u6743\u4fe1\u606f\uff0c\u5c06\u901a\u8fc7\u77ed\u4fe1\u6216\u90ae\u4ef6\u544a\u77e5\uff0c\u656c\u8bf7\u7559\u610f</p>\
                </div>')
               
              } else {
                alert(data.message);
                return false;
              }


            }
          })


      },


        play: function() {
          var me = this;
          $('.header-in').append('<a href="javascript:;"  class="busin-player-btn adZqCodeBook" id="jsBook" data-type=1>'+me.data.buttonTitle+'</a>');
            $('head').append(me.businCss);
            $('body').append( me.dialog)
            if(!me.getCookie('showPoeDialog1') && me.data.ispopup) {
              $('.adZqCodeBook-dialog').show();
              $('.busin-dialog-mask').show()
              $('.adZqCodeBook-dialog .form-pos').hide()
              $('.busin-dialog-c2 .busin-dialog-tit').hide()
              me.setCookie('showPoeDialog1', 1 ,1)
            }
            $('.'+me.options.advid).show();
           
            me.bindEvent();
          
             var browser=navigator.appName 
            var b_version=navigator.appVersion 
            var version=b_version.split(";"); 
            var trim_Version=version[1].replace(/[ ]/g,""); 
            if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){ 
              $('head').append('<style>.busin-dialog{position: absolute!important}</style>')
            } 

          this.emit(adv.ENUM.EVENTS.played)
           
        }
    })
}(jQuery);
