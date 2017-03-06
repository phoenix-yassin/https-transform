/*!  v0.1.9.4  2015-07-16 09:07:34 */
!function(a,b){if(!b._benSetupCore){b._benSetupCore=!0;var c={extend:function(){a.extend.apply(this,arguments)},setCookie:function(a,b,c,d){var e=a+"="+escape(b);if(c){var f=new Date;f.setTime(f.getTime()+c),e+="; expires="+f.toGMTString()}d&&(e+="; domain="+d),document.cookie=e},getCookie:function(a){var b,c=new RegExp("(^| )"+a+"=([^;]*)(;|$)");return b=document.cookie.match(c),b?unescape(b[2]):null}},d=!1,e=/xyz/.test(function(){})?/\bbase\b/:/.*/,f=function(){};f.extend=function(a,b){function f(){!d&&this.init&&this.init.apply(this,arguments)}if(2==arguments.length){var g=a.split("")[0];if(g.toUpperCase()!=g)throw new Error("Class must begin with Uppercase letters:"+a);return void(c[a]=this.extend(b))}var h=this.prototype,b=arguments[0];d=!0;var i=new this;d=!1;for(var j in b)i[j]="function"==typeof b[j]&&"function"==typeof h[j]&&e.test(b[j])?function(a,b){return function(){var c=this.base;this.base=h[a];var d=b.apply(this,arguments);return this.base=c,d}}(j,b[j]):b[j];return f.prototype=i,f.prototype.constructor=f,f.extend=arguments.callee,f},c.Class=f,b.ue=c}}(jQuery,this),function(a,b){Object.prototype.toString;a.fn.findUI=function(a,b){var c="[data-ui-"+a;return b&&(c+='="'+b+'"'),c+="]",this.find(c)},a.findUI=function(b,c){var d="[data-ui-"+b;return c&&(d+='="'+c+'"'),d+="]",a(d)},a.fn.findMark=function(a){var b='[data-ui-mark="'+a+'"]';return this.find(b)},a.fn.uiData=function(a){return this.attr("data-ui-"+a)};b.extend({processAll:function(c){a(c).find("[data-ui-control]").each(function(){var c=a(this),d=c.attr("data-ui-control");d&&b[d]&&(b.controlInstance[d]=b.controlInstance[d]||[],b.controlInstance[d].push(new b[d](this)))})},controlInstance:{}}),b.Class.extend("UI",{initMark:function(){var b=this;this.mark={},this.box&&this.box.findUI("mark").each(function(){b.mark[a(this).uiData("mark")]=a(this)})},init:function(){var b,c=el_options={};if(arguments[1])b=arguments[0],c=arguments[1];else{var d=a.isPlainObject(arguments[0]);d?c=arguments[0]:b=arguments[0]}b&&(this.box=a(b)),this.opt=a.extend({},c,el_options)}})}(jQuery,ue),function(a,b){a.fn.farmerSlide=function(a){this.each(function(c,d){new b.Slide(d,a)})};var c=!!window.ActiveXObject,d=c&&!window.XMLHttpRequest;b.UI.extend("Slide",{init:function(c,d){this.base(c,d),this.opt=a.extend({},b.Slide.defaultOptions,this.opt),this.currentIndex=0,this.isAnimating=!1,this.box.findMark("imageContainer")[0]||this.box.append(this.opt.template),this.opt.boxWidth=365,this.opt.boxHeight=395,this.initMark(),this.setup()},setup:function(){var b=this;b.mark.imageContainer.width(b.opt.boxWidth).height(b.opt.boxHeight),b.mark.data&&b.mark.data.hide(),b.loadData(),b.initThumbs(),b.start(),b.mark.loading&&!b.data[0].img&&b.mark.loading.hide(),a(new Image).load(function(){b.data[0].loaded=!0,b.preDownLoadImage.call(b)}).attr("src",b.data[0].img)},loadData:function(){var b=this;b.data=[],b.mark.data?b.mark.data.find("li").each(function(){var c=a(this),d={},e=c.findUI("data","img"),f=(e.uiData("slide-animate"),c.findUI("data","thumb")),g=c.findUI("data","desc"),h=c.findUI("data","link"),i=c.findUI("data","title");f=f||e,d.img=e.attr("data-src")||e.attr("src"),d.thumbImg=f.attr("data-src")||f.attr("src"),d.desc=g.text()||"",d.title=i.text()||"",d.link=h.attr("href")||"",d.index=b.data.length,b.data.push(d)}):b.opt.data&&(b.data=b.opt.data),b.randomShow&&b.data.sort(function(){return Math.random()-.5}),b.total=b.data.length,b.mark.length.text(b.total)},preDownLoadImage:function(){var b=this,c=new Image;a.each(b.data,function(d){a(c).load(function(){b.data[d].loaded=!0}).attr("src",this.img)})},pushData:function(){},start:function(){var a=this;a.setCurrentImage(),a.bindAction(),a.autoToggle()},_setCurrentImage:function(a,b){var c=this,d=c.data[a];c.mark.loading&&c.mark.loading.hide(),c.mark.img.attr("src",d.img),c.mark.title&&c.mark.title.text(d.title),c.mark.desc&&c.mark.desc.text(d.desc),c.mark.link&&(c.mark.link.attr("href",d.link),c.mark.title&&c.mark.title.attr("href",d.link),c.mark.desc&&c.mark.desc.attr("href",d.link)),c.onPageLoaded(a),b&&b()},setCurrentImage:function(b,c){var d=this;b=void 0===b?d.currentIndex:b,d.currentIndex=b;var e=d.data[b];e.loaded?d._setCurrentImage(b,c):(d.mark.loading&&d.mark.loading.show(),a(new Image).load(function(){e.loaded=!0,d._setCurrentImage(b,c)}).attr("src",e.img))},autoToggle:function(){var a=this;a.opt.autoPlay&&(a.thumbDirect="right",a.clearTimer(),a.timer=setTimeout(function(){a.isAuto=!0,a.nextPage()},a.opt.interval))},initThumbs:function(){var b=this,c="";a.each(b.data,function(a){c+=b.getThumbItem(a)}),b.mark.thumbs.empty(),b.mark.thumbs.append(c);var d=b.mark.thumbs.find(".focus-thumb-item");b.thumbItemWidth=d.outerWidth(!0),b.totalVisableThumb=Math.ceil(b.mark.thumbsbox.innerWidth()/b.thumbItemWidth),b.noRepeat=b.totalVisableThumb>=b.total,b.noRepeat||(b.mark.thumbsClone=b.mark.thumbs.clone(),b.mark.thumbs.after(b.mark.thumbsClone)),b.getThumbGrid()},getThumbGrid:function(){var b=this;b.mark.thumbGrid=a('<div class="focus-thumb-grid"></div>'),b.mark.thumbsbox.append(b.mark.thumbGrid)},getThumbItem:function(a){var b=this,c=b.data[a],d='<p class="focus-thumb-item" data-ui-thumb-item><a href="javascript://"><img data-ui-rel="'+a+'" src="'+c.thumbImg+'"/></a></p>';return d},onThumbAniFinish:function(a){var b=this;b.mark.index.text(a+1);var c=b.mark.thumbs.find(".focus-thumb-item:eq("+a+")");c.addClass("current"),b.noRepeat||(c=b.mark.thumbsClone.find(".focus-thumb-item:eq("+a+")"),c.addClass("current")),b.autoToggle(),b.isAnimating=!1},setCurrentThumb:function(a){this.isAnimating=!0;var b=this,a=parseInt(a),c=parseInt(b.mark.thumbs.css("marginLeft")),d=-a*b.thumbItemWidth,e=Math.abs(c/b.thumbItemWidth);if(!b.isAuto)for(var f=0;f<b.totalVisableThumb;f++){var g=(1*e+f)%b.total;if(a===g){var h=parseInt(b.mark.thumbGrid.css("left")),i=f*b.thumbItemWidth;return h!=i&&b.mark.thumbGrid.animate({left:i},b.opt.thumbAniInterval,""),b.box.find(".focus-thumb-item").removeClass("current"),void b.onThumbAniFinish.call(b,a)}}if(c!=d){if("right"==b.thumbDirect){var j=-b.total*b.thumbItemWidth;c==j&&(b.mark.thumbs.css("margin-left",0),c=d=0),d=c-b.thumbItemWidth}else"left"==b.thumbDirect&&(a===b.total-1&&(c=-b.total*b.thumbItemWidth,b.mark.thumbs.css("margin-left",c)),d=c+b.thumbItemWidth);b.box.find(".focus-thumb-item").removeClass("current"),b.mark.thumbs.animate({"margin-left":d},b.thumbAniInterval,"",function(){b.onThumbAniFinish.call(b,a)})}else b.onThumbAniFinish(a)},onPageLoaded:function(a){this.setCurrentThumb(a)},goToPage:function(a){var b=this;if(a>=0&&!b.isAnimating&&a<b.total){var c=b.data[b.currentIndex],e=c.aniType||b.opt.defaultAni;b.opt.fuckIe6&&d&&(e="");var f=b.currentIndex;b.setCurrentImage(a,function(){b.animateLists[e]&&(b.box.find(".ben-slide-clonebox").remove(),b.animateLists[e].call(b,f,a))})}},nextPage:function(){var a=this,b=1*a.currentIndex+1;b>=a.total&&(b=0),a.goToPage(b)},prevPage:function(){var a=this,b=a.currentIndex-1;0>b&&(b=a.total-1),a.goToPage(b)},getBoxClone:function(b){var c=this.data[b],d=a('<div class="ben-slide-clonebox"><a href="'+c.link+'" target="_blank"><img src="'+c.img+'" /></a></div>');return d},appendBoxClone:function(a){this.mark.imageContainer.append(a)},onAnimateBegin:function(){var a=this;a.clearTimer()},onAnimateFinish:function(){var a=this;a.box.find(".ben-slide-clonebox").remove(),a.autoToggle()},clearTimer:function(){clearTimeout(this.timer),clearTimeout(this.thumbTimer)},bindAction:function(){var b=this;b.mark.next&&b.mark.next.click(function(){b.isAuto=!1,b.thumbDirect="right",b.nextPage()}),b.mark.prev&&b.mark.prev.click(function(){b.isAuto=!1,b.thumbDirect="left",b.prevPage()}),b.mark.thumbs&&b.mark.thumbsbox.click(function(c){var d=a(c.target).uiData("rel");void 0!==d&&null!==d&&(b.thumbDirect="right",b.isAuto=!1,b.goToPage(d))})},animateLists:{random:function(a,b){var c=["slideRight","slideLeft","lineRight","lineTop","lineLeft","lineBottom","fadeIn"],d=Math.floor(7*Math.random());this.animateLists[c[d]].call(this,a,b)},slideLeft:function(a,b){this.animateLists.line.call(this,a,b,{direction:"left",total:1})},slideRight:function(a,b){this.animateLists.line.call(this,a,b,{direction:"right",total:1})},lineRight:function(a,b){this.animateLists.line.call(this,a,b,{direction:"right",total:1})},lineTop:function(a,b){this.animateLists.line.call(this,a,b,{direction:"top",total:10})},lineLeft:function(a,b){this.animateLists.line.call(this,a,b,{direction:"left",total:10})},lineBottom:function(a,b){this.animateLists.line.call(this,a,b,{direction:"bottom",total:10})},line:function(b,c,d){{var e=this,f=e.opt.boxWidth,g=e.opt.boxHeight;e.data[b].img,e.data[c].img}e.onAnimateBegin(b,c);var d=a.extend({},{direction:"top",delayType:"quence",total:5},d||{}),h=this.opt.easing?this.opt.easing:"",j=1200/e.opt.animateSpeed,k=d.total;for(i=0;k>i;i++){switch(d.direction){case"right":var l=f,m=Math.ceil(g/k),n=m*i,o=0,p=n,q=l,r=n,s=-q,t=n,u=0,v=-n,w=0;break;case"top":var l=Math.ceil(this.opt.boxWidth/k),m=this.opt.boxHeight,n=0,o=l*i,p=-m,q=o,r=m,s=o,t=0,u=o,v=0,w=-o;break;case"left":var l=this.opt.boxWidth,m=Math.ceil(this.opt.boxHeight/k),n=m*i,o=0,p=n,q=-l,r=n,s=-q,t=n,u=0,v=-n,w=0;break;case"bottom":var l=Math.ceil(this.opt.boxWidth/k),m=this.opt.boxHeight,n=0,o=l*i,p=m,q=o,r=-m,s=o,t=0,u=o,v=0,w=-o}switch(d.delayType){case"zebra":default:var x=i%2==0?0:150;break;case"random":var x=900*Math.random();break;case"quence":var x=100*i}var y=e.getBoxClone(b);y.find("img").css({left:w,top:v}),y.css({top:n,left:o,width:l,height:m}),e.appendBoxClone(y),y.show(),y.delay(x).animate({top:p,left:q},j,h);var z=e.getBoxClone(c);z.find("img").css({left:w,top:v}),z.css({top:r,left:s,width:l,height:m}),e.appendBoxClone(z),z.show();var A=i==k-1?function(){e.onAnimateFinish(b,c)}:"";z.delay(x).animate({top:t,left:u},j,h,A)}},fadeIn:function(a,b){{var c=this,d=c.opt.boxWidth,e=c.opt.boxHeight;c.data[a].img,c.data[b].img}c.onAnimateBegin(a,b);var f=c.getBoxClone(a);f.css({top:0,left:0,width:d,height:e}),c.appendBoxClone(f),f.show(),f.fadeOut(1e3,function(){c.onAnimateFinish(a,b)})}}}),b.Slide.defaultOptions={data:null,fuckIe6:!1,randomShow:!1,autoPlay:!0,animateSpeed:1.5,defaultAni:"fadeIn",thumbAniInterval:200,interval:2500}}(jQuery,ue),function(a,b,c){c.UI.extend("Lazyload",{init:function(b,d){var e=this;e.base(b,d),e.opt=a.extend({},c.Lazyload.defaultOptions,e.opt),e.$w=a(window),e.calcSize(!0),e.wraps=e.box.children("div").not(".ad"),e.needLoadCount=e.wraps.length,e.loadedCount=0,e.bindAction(),e.scrollTimer=setTimeout(function(){e.calcSize(),e.update()},100)},loadImg:function(b){var c=this,d=b.find("img");b.attr("lazyload-loaded","loaded"),d.each(function(b,d){var e=a(d);~d.src.toLowerCase().indexOf(c.opt.placeholderName)&&e.addClass("img-placeholder").load(function(){e.removeClass("img-placeholder")}).attr("src",e.attr("data-src"))})},update:function(){var b=this;b.needLoadCount!==b.loadedCount?b.wraps.each(function(c,d){$wrap=a(d);var e=b.calcPosition($wrap,b.opt.preloadHeight);e.below||e.above||"loaded"===$wrap.attr("lazyload-loaded")||(b.loadedCount++,b.loadImg($wrap))}):b.$w.unbind("resize",b.onResize).unbind("scroll",b.onScroll)},calcSize:function(a){a&&(this.wHeight=this.$w.height()),this.scrollTop=this.$w.scrollTop(),this.screenHeight=this.wHeight+this.scrollTop},bindAction:function(){var b=this;b.onResize=function(){clearTimeout(b.resizeTimer),b.resizeTimer=setTimeout(function(){b.calcSize(!0),b.update()},500)},b.onScroll=function(){clearTimeout(b.scrollTimer),b.scrollTimer=setTimeout(function(){b.calcSize(),b.update()},100)},b.$w.bind("resize",b.onResize).bind("scroll",b.onScroll),a(document.body).bind("appendHtml",function(c,d){b.loadImg(a(d))})},calcPosition:function(a,b){var c=a.offset().top,d=this.screenHeight<=c-b,e=this.scrollTop>=c+a.height()+b;return{below:d,above:e}}}),c.Lazyload.defaultOptions={preloadHeight:100,placeholderName:"lazyloadplaceholder.gif"}}(jQuery,this,ue),function(a,b,c){c.UI.extend("GameInfoTip",{init:function(b,d){this.base(b,d),this.opt=a.extend({},c.GameInfoTip.defaultOptions,this.opt),this.container=a("#ue-gameinfotip-container"),this.initFilter(),this.filters=a("#ue-nav-filter a"),this.bindAction()},isIpad:navigator.userAgent.indexOf("iPad")>-1,bindAction:function(){var b=this,c=a("#ue-nav-toggle");this.box.each(function(c,d){b.initTip(a(d))}),c.on("click","li",function(){a(this).hasClass("ue-nav-hot")?b.showNavFilter():b.showSearch()}),this.filters.on("click",function(){var c,d=a(this);c=d.attr("data-filter"),c?(b.filters.removeClass("active"),d.addClass("active"),c&&b["to"+c]()):b.sendLog("//www.17173.com/game-indexs-sameip")}),this.isIpad&&document.addEventListener("touchstart",function(){b.box.hide(),b.box.attr("isShow","false")},!1),this.container.find("a").click(function(){var c=a(this);c.hasClass("c-red")&&b.sendLog(c.attr("href")+(b.currentFilter?"?logkey=game-indexs-"+b.currentFilter:""))})},sendLog:function(a){"function"==typeof _jc_pingjs&&_jc_pingjs("click",{appkey:181,u:encodeURIComponent(a)})},initFilter:function(){this.container.find(".list-game-hot-channel li:gt(0) a").addClass("ue-gameinfotip-static")},currentFilter:"Default",showSearch:function(){a("#ue-nav-search").show(),a("#ue-nav-filter").hide()},showNavFilter:function(){a("#ue-nav-search").hide(),a("#ue-nav-filter").show()},toDefault:function(){this.sendLog("//www.17173.com/game-indexs-default"),this.currentFilter="Default",this.container.find(".ue-gameinfotip-sameip").removeClass("c-red"),this.container.find(".ue-gameinfotip-top10").removeClass("c-red"),this.container.find(".ue-gameinfotip-default").addClass("c-red")},toSameIp:function(){this.sendLog("//www.17173.com/game-indexs-sameip"),this.currentFilter="SameIp",this.container.find(".ue-gameinfotip-default").removeClass("c-red"),this.container.find(".ue-gameinfotip-top10").removeClass("c-red"),this.container.find(".ue-gameinfotip-sameip").addClass("c-red")},toTop10:function(){this.sendLog("//www.17173.com/game-indexs-top10"),this.currentFilter="Top10",this.container.find(".ue-gameinfotip-default").removeClass("c-red"),this.container.find(".ue-gameinfotip-sameip").removeClass("c-red"),this.container.find(".ue-gameinfotip-top10").addClass("c-red")},showTip:function(a,b){var c=a.offset();b.css({left:c.left+.5*a.width()-30,top:c.top-b.height()-10}).show()},initTip:function(b){var c,d=this,e=b.data("gamename"),f=this.container.find("a"),g=b.hasClass("game-info-tip-ex");f.each(function(b,d){var f=a(d);f.hasClass("c-red")&&f.hasClass("link")&&!f.hasClass("ue-gameinfotip-static")&&f.addClass("ue-gameinfotip-default"),d.innerHTML==e&&(c=f,f.addClass(g?"ue-gameinfotip-sameip":"ue-gameinfotip-top10"))});var h,i;c&&g&&(this.isIpad?(b[0].addEventListener("touchstart",function(a){a.stopPropagation()}),c[0].addEventListener("touchstart",function(a){var e=b.attr("isShow");clearTimeout(i),a.stopPropagation(),d.showTip(c,b),b.attr("isShow","true"),i=setTimeout(function(){b.attr("isShow","false"),b.hide()},d.opt.autoCloseTime),"true"!=e&&a.preventDefault()},!1)):(c.mouseenter(function(){clearTimeout(h),d.showTip(c,b)}).mouseleave(function(){h=setTimeout(function(){b.hide()},d.opt.delayHideTime)}),b.mouseenter(function(){clearTimeout(h)}).mouseleave(function(){b.hide()})))}}),c.GameInfoTip.defaultOptions={delayHideTime:300,autoCloseTime:3e3}}(jQuery,this,ue),function(a,b,c){c.UI.extend("GameRemm",{init:function(b,d){this.base(b,d),this.opt=a.extend({},c.GameInfoTip.defaultOptions,this.opt),this.gTypeItems=this.box.find(".gtype-item"),this.bindAction(),this.randomGTypeItem()},randomGTypeItem:function(){var b=this;this.box.find(".gtype-box").each(function(){var c=Math.floor(4*Math.random()),d=a(this).find(".gtype-item").removeClass("active").eq(c).addClass("active");b.loadVote(d)})},randomTabs:function(){Math.floor(2*Math.random())&&this.box.find(".tab-gremm li:eq(1)").trigger("click")},getParams:function(a){var b=a.data("channel"),c=a.data("webid"),d=a.data("kind");return{channel:b,web_id:c,kind:d}},voteReq:function(b,c,d){a.ajax({url:"//hits.17173.com/support/support_opb.php?jsonp=?&action="+c,type:"GET",dataType:"jsonp",data:b,success:function(a){d(a)}})},addVote:function(a){this.voteReq(this.getParams(a),1,function(b){9==b.flag&&alert("\u60a8\u7684IP\u5df2\u7ecf\u6295\u8fc7\u7968\u4e86,\u611f\u8c22\u60a8\u7684\u53c2\u4e0e!"),1==b.flag&&a.find(".support").text(b.support)})},loadVote:function(a){var b=a.find(".support");!b.text()&&this.voteReq(this.getParams(a),0,function(a){1==a.flag&&b.text(a.support)})},bindAction:function(){var b=this;this.gTypeItems.on("click",function(){var c=a(this);a(this).hasClass("active")||(b.loadVote(c),c.addClass("active").siblings().removeClass("active"))}),this.box.find(".gtype-item").each(function(c,d){var e=a(d);e.find(".btn-fav").on("click",function(c){return b.addVote(e),a(this).unbind("click").css("cursor","default"),c.preventDefault(),!1})})}}),c.GameRemm.defaultOptions={}}(jQuery,this,ue),function(){$("#pprt_register_link").attr("href",Passport.URL_REGISTER),$("#pprt_login").click(function(){!Passport.isLoggedIn()&&Passport.Dialog.show()}),$("#pprt_logout").click(function(a){Passport.isLoggedIn()&&Passport.logout(a)});var a=function(){$("#pprt_nickname").html(Passport.data("nickname")+'<u class="arrow"></u>'),$("#pprt_infobox_nickname").html(Passport.data("nickname")),$("#pprt_register_link,#pprt_login").hide(),$("#pprt_nickname,#pprt_logout").show(),$("#pprt_infobox_portrait").attr("src",Passport.getUserPortrait(Passport.data("uid"),0))},b=function(){$("#pprt_nickname,#pprt_logout").hide(),$("#pprt_register_link,#pprt_login").show()};Passport.on(Passport.EVENTS.loginSuccess,a),Passport.on(Passport.EVENTS.logoutSuccess,b),Passport.isLoggedIn()?a():b(),$("#pprt_close_info").click(function(){$("#js-passport").hide(),$("#pprt_nickname").removeClass("bt-status-drop")}),$("#pprt_nickname").click(function(a){var b=$("#js-passport"),c=b.css("display");"none"===c?(b.show(),$("#pprt_nickname").addClass("bt-status-drop")):($("#pprt_nickname").removeClass("bt-status-drop"),b.hide()),a.stopPropagation()}),$("#js-passport").click(function(a){a.stopPropagation()}),$(document).click(function(){$("#pprt_nickname").removeClass("bt-status-drop"),$("#js-passport").hide()})}(),function(){var a=function(a){a.length&&a.each(function(){var a=$(this);a.hasClass("ue-link-tab")&&a.find("li.item").click(function(){$(this).hasClass("current")&&window.open($(this).find("a").attr("href"))}),$(".tab:eq(0)",a).tabs($(".tab-pn:eq(0) > div",a),{tabs:"li"})})},b=function(a,b){a.length&&a.each(function(){var a=$(this);$(".slide-nav",a).tabs($(".slide-box .item",a),{event:"mouseover",effect:"fade",fadeOutSpeed:"300",rotate:!0}).slideshow(),b&&$(".slide-nav").data("slideshow").play()})};a($(".js-tab")),b($(".js-slide"),!0),$(document.body).bind("appendHtml",function(c,d){var e=$(d);b(e.find(".js-slide")),a(e.hasClass("js-tab")?e:e.find(".js-tab"))}),$(".js-news-zf li").mouseenter(function(){$(this).addClass("active").siblings().removeClass("active")}),$(".js-list-topnews").each(function(){$("li:nth-child(6n+1):not(:last-child) a",$(this)).css("font-weight","bold"),$("li:nth-child(6n):not(:last-child)",$(this)).after('<li class="sep"></li>')}),$(".js-rank").each(function(){var a=$(this);$("li",a).mouseenter(function(){$(this).addClass("active").siblings().removeClass("active")})}),$(document.body).on("click",".data-ui-defer",function(a){var b=$(this),c=b.uiData("defer"),d=b.uiData("selfreplace"),e=b.attr("href"),f=$(c),g=b.uiData("multilink");if(g){var h=g.split(","),i=b.uiData("linkindex"),j=i;void 0===i&&$.trim(f.html())&&(j=1,e=h[1])}f[0]&&!f.hasClass("defer-loaded")&&(f.addClass("loading"),$.get(e,{r:1*new Date},function(a){f.removeClass("loading"),g?f.fadeOut(400,function(){f.html(a).show(),$(document.body).trigger("appendHtml",f),j++,j=j>=h.length?0:j,d&&(b=f.find(d)),b.attr("data-ui-linkindex",j),b.attr("href",h[j])}):(f.html(a),$(document.body).trigger("appendHtml",f),f.addClass("defer-loaded"))})),a.preventDefault()});var c=$(".data-ui-defer[data-ui-multilink]");c.each(function(a,b){var c,d,e=$(b),f=e.attr("data-multilink-random");f&&(c=e.attr("data-ui-multilink"),c=c?c.split(","):[],d=Math.floor(Math.random()*c.length),e.attr("href",c[d]),e.attr("data-ui-linkindex",d),e.trigger("click"))}),$("#addBookMark").click(function(){if(window.ActiveXObject)try{var a=window.location.href,b=window.title;window.external.addFavorite(a,b)}catch(c){alert("\u8bf7\u6309Ctrl+D\u5c06\u672c\u9875\u6dfb\u52a0\u5230\u6536\u85cf\u5939")}else alert("\u8bf7\u6309Ctrl+D\u5c06\u672c\u9875\u6dfb\u52a0\u5230\u6536\u85cf\u5939")}),$("#setHomePage").click(function(){window.ActiveXObject?(document.body.style.behavior="url(#default#homepage)",document.body.setHomePage(window.location.href)):alert("\u8bf7\u62d6\u52a8\u672c\u7f51\u7ad9\u5730\u5740\u65c1\u8fb9\u7684\u5c0f\u56fe\u6807\u5230\u4e3b\u9875\u6309\u94ae")}),$("form").submit(function(){$(this).find("input").each(function(){var a=$(this).val();a&&$(this).val($.trim(a))})}),$("form input").on("click",function(){this.onclick=null,$(this).unbind("click"),$(this).unbind("keypress")}),window.STATUS_ISIE6&&$(".focus-in").hover(function(){$(".btn-focus").show()},function(){$(".btn-focus").hide()});var d,e=window.location.href.split("#")[1];if(e&&(d=e.match(/eye=(\d)/),d&&(d=d[1]))){d--,window.location.href="#eye";var f=$.findUI("control","Slide").findMark("data");f.prepend(f.find("li:eq("+d+")"))}if(window.focus_float_config&&window.FocusAlternate){var f,g=[];f=focus_float_config[FocusAlternate.pos],f&&f.url&&(f.title=f.title||"",f.desc=f.desc||"",g.push("<li>"),g.push('	<a href="'+f.url+'" class="img-target" data-ui-data="link"><img src="'+f.focusContent.image+'" data-ui-data="img" /></a>'),g.push('	<img src="'+f.focusContent.thumb+'" alt="" data-ui-data="thumb" />'),g.push('	<div class="label">'),g.push('		<h2 class="title" data-ui-data="title">'+f.title+"</h2>"),g.push('		<h3 class="desc" data-ui-data="desc">'+f.desc+"</h3>"),g.push("	</div>"),g.push("</li>"),$('[data-ui-mark="data"]').append(g.join("")))}if(ue.processAll(document.getElementById("forsetLink49")),new ue.Lazyload($(".wrap")),window.stopGuide=function(){window.DONT_RUN_GUIDE=!0,pageGuide&&pageGuide.stop()},$("#fix-nav-side").hide(),ue.NavSide={hideOverTop:function(){},dispose:function(){}},new ue.GameInfoTip($(".ue-gameinfotip")),new ue.GameRemm($("#ue-gameremm")),!window.STATUS_ISIE6&&!window.STATUS_ISIE7){jQuery.extend(jQuery.easing,{easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c}});var h,i=$("#newgame-indb-wrap"),j=i.find("span"),k=j.offset().top,l=function(){var a=$(window).scrollTop(),b=a+$(window).height();if(k>a&&b>k){$(window).unbind("scroll",l),l=function(){},i.css({position:"relative",display:"inline-block","vertical-align":"top",height:21,overflow:"hidden",width:120}),j.css({position:"absolute"});for(var c=1*j.text().replace(/[\(\)]/gi,""),d="",e=5;e>=0;e--)d+="<span>("+(c-e)+")</span>",0!==d&&(d+="<br/>");j.text("").prepend(d),j.animate({top:-126},2500,"easeOutCubic")}};$(window).bind("scroll",function(){clearTimeout(h),h=setTimeout(function(){l()},200)}),l()}}(),function(){"use strict";$(".rank-tit").click(function(){var b,c,d=$(".rank-hot-panel"),e=$(".rank-hot-item"),f=$(this),g="true"===f.parent().attr("data-active");d.removeClass("loading"),e.attr("data-active","false").removeClass("on"),g?(e.eq(0).addClass("on"),f.parent().removeClass("on")):(f.parent().addClass("on"),c=f.siblings(".rank-hot-panel"),f.parent().attr("data-active","true"),c.attr("data-rank-loaded")||(b=c.attr("data-ranklisturl"),a(b,c)))}),$("#rank-switch").click(function(){var b=$(this),c=$(".rank-load-newgamelist"),d=c.find("ul");b.hasClass("status-show-all")?(b.removeClass("status-show-all"),c.prev(".rank-hd").find(".c5").text("\u5347\u964d"),d.eq(1).hide(),d.eq(0).show()):(b.addClass("status-show-all"),c.prev(".rank-hd").find(".c5").text("\u9886\u53f7"),d.eq(0).hide(),d.eq(1).show(),d.length<2&&a(c.attr("data-ranklisturl"),c))});var a=function(a,b){b.addClass("loading"),b.attr("data-rank-loaded","true"),a&&$.get(a,function(a){b.removeClass("loading").append(a).find("li").hover(function(){$("li",$(this).parent()).removeClass("active"),$(this).addClass("active")}),$(document.body).trigger("appendHtml",b)})}}();