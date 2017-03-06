var ZqHotGame = function (contain, config) {
  this.contain = contain;
  this.config = config;
  this.init()
};
ZqHotGame.prototype = {
  x: -50, y: 20, ie: document.all, ns6: document.getElementById && !document.all, enableTip: false, init: function () {
    document.write('<div id="dhtmltooltip" style="position:absolute;z-index:1000;visibility: hidden;padding: 0 5px;text-align: center;border: 1px solid #828282;background-color: #fff899;"></div>');
    this.tipobj = document.getElementById("dhtmltooltip")
  }, setPosition: function (x, y) {
    this.x = x;
    this.y = y
  }, ieTrueBody: function () {
    return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
  }, setTip: function (thetext, thewidth) {
    if (typeof thewidth != "undefined")
      this.tipobj.style.width = thewidth + "px";
    this.tipobj.innerHTML = thetext;
    this.enableTip = true;
    return false
  }, positionTip: function (e) {
    if (this.enableTip) {
      var curX = (this.ns6) ? e.pageX : event.clientX + this.ieTrueBody().scrollLeft;
      var curY = (this.ns6) ? e.pageY : event.clientY + this.ieTrueBody().scrollTop;
      var rightedge = this.ie && !window.opera ? this.ieTrueBody().clientWidth - event.clientX - this.x : window.innerWidth - e.clientX - this.x - 20;
      var bottomedge = this.ie && !window.opera ? this.ieTrueBody().clientHeight - event.clientY - this.y : window.innerHeight - e.clientY - this.y - 20;
      var leftedge = (this.x < 0) ? this.x * (-1) : -1000;
      if (rightedge < this.tipobj.offsetWidth)
        this.tipobj.style.left = this.ie ? this.ieTrueBody().scrollLeft + event.clientX - this.tipobj.offsetWidth + "px" : window.pageXOffset + e.clientX - this.tipobj.offsetWidth + "px";
      else if (curX < leftedge)
        this.tipobj.style.left = "5px";
      else
        this.tipobj.style.left = curX + this.x + "px";
      if (bottomedge < this.tipobj.offsetHeight)
        this.tipobj.style.top = this.ie ? this.ieTrueBody().scrollTop + event.clientY - this.tipobj.offsetHeight - this.y + "px" : window.pageYOffset + e.clientY - this.tipobj.offsetHeight - this.y + "px";
      else
        this.tipobj.style.top = curY + this.y + "px";
      this.tipobj.style.visibility = "visible"
    }
  }, hideTip: function () {
    this.enableTip = false;
    this.tipobj.style.visibility = "hidden";
    this.tipobj.style.left = "-1000px";
    this.tipobj.style.backgroundColor = '';
    this.tipobj.style.width = ''
  }, execute: function () {
    var obj = this;
    var parentArea = document.getElementById(this.contain);
    var aList = parentArea.getElementsByTagName("A");
    for (var i = 0; i < aList.length; i++) {
      for (var j = 0; j < this.config.length; j++) {
        if (this.config[j].gameUrl.replace(/\//gi, "").replace(/http:/gi, "") == aList[i].href.replace(/\//gi, "").replace(/http:/gi, "")) {
          aList[i].className =aList[i].className + " " + this.config[j].parentStyle;
          aList[i].rel = j;
          if ("" != this.config[j].goUrl) {
            aList[i].href = this.config[j].goUrl
          }
          aList[i].onmouseover = function () {
            obj.setTip(obj.config[this.rel].content, obj.config[this.rel].width);
            obj.tipobj.className +=obj.tipobj.className +" " + obj.config[this.rel].tipStyle
          };
          aList[i].onmouseout = function () {
            obj.hideTip()
          }
        }
      }
    }
    if (this.ie) {
      document.attachEvent('onmousemove', function (e) {
        obj.positionTip(e)
      })
    } else {
      document.addEventListener('mousemove', function (e) {
        obj.positionTip(e)
      }, false)
    }
  }
}