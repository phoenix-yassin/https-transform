!function(t){var a={item:function(t){return['<li class="item" data-kw="1"><div class="c1" data-time="',t.time.join("-"),'">',t.time[1],"-",t.time[2],'</div><div class="c2"><div class="art-item">','<a href="',t.titlink,'" target="_blank">',t.title,'</a><a href="',t.ztlink,'" target="_blank" class="ad-csb-live"><img src="http://ue2.17173cdn.com/a/www/index/2015/img/ico-ad-live.png" alt="" width="26" height="16" /></a></div></div>','<div class="c3 c-gray1">',t.status,'</div><div class="c4 c-gray1">','<a href="',t.downloadLink,'" target="_blank" class="btn-dl">\u4e0b\u8f7d</a></div>',,'<div class="c5"><a href="',t.operateLink,'" target="_blank" class="c-blue">',t.operate,"</a></div></li>"].join("")}};adv.AdBase.extend("Ad17173Kaiyuan",{init:function(t){this.base(t),this.emit(adv.ENUM.EVENTS.inited)},setup:function(){this.emit(adv.ENUM.EVENTS.setuped)},play:function(){for(var i,e,n,d=this.options,s=t("."+d.advid).find(".list-rank-total:eq(0)"),l=0;l<d.ads.length;l++){i=d.ads[l],e=parseInt(i.time.join("")),n=s.find(".c1");t:for(var r,c,v=0;v<n.length;v++)if(c=t(n[v]),"undefined"!=typeof c.attr("data-time")&&(r=parseInt(c.attr("data-time").replace(/-/g,"")),e>=r||v==n.length-1)){c.parent().before(a.item(i));break t}}s.find("li:gt(28)").not("[data-kw]").remove();var o=s.find("li").length-29;if(o>0)for(var e,i=s.find("li"),n=1,l=i.length-1;l>=0;l--)e=t(i[l]),o>=n&&"1"!=e.data("kw")&&(e.remove(),n++);this.emit(adv.ENUM.EVENTS.played)}})}(jQuery);