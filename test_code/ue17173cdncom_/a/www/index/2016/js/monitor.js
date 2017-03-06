(function(){
  var onReadyTime,onLoadTime;
  //白屏时间
  var whiteScreenEndTime = +new Date();
  var whiteScreenTime = whiteScreenEndTime - whiteScreenStartTime; //头部资源加载时间
  //资源加载完毕
  var loadEd=false;
  var firstScreenLoaded=false;
  var firstScreenLoadTime = 0;
  var domContentLoadedTime =0;
  var operationAbleTime = 0;
  var ueMonitor = {
    getTimes: function() {
      var api,
          timing,
          performance = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance;
      if (!performance || !(timing = performance.timing)) return api;
			api = {};
      for (var k in timing) {
        if (timing.hasOwnProperty && timing.hasOwnProperty(k)) {
          api[k] = timing[k];
        }
        else{
          api[k] = timing[k];
        }
      }
      var firstPaint = 0;
      // Chrome
      if (window.chrome && window.chrome.loadTimes) {
        firstPaint = window.chrome.loadTimes().firstPaintTime * 1000;
        api.firstPaintTime = firstPaint - (window.chrome.loadTimes().startLoadTime*1000);
      }
      // IE
      else if (typeof window.performance.timing.msFirstPaint === 'number') {
        firstPaint = window.performance.timing.msFirstPaint;
        api.firstPaintTime = firstPaint - window.performance.timing.navigationStart;
      }
      api.firstPaint = firstPaint;
      //onready
      api.domContentReadyTime = timing.domContentLoadedEventEnd - timing.fetchStart;
      // onload
      api.loadTime = timing.loadEventEnd - timing.fetchStart;
      // dom完整构建时间(包括非延迟加载的静态资源)
      api.domCompleteTime = timing.domComplete - timing.domInteractive;
      // 缓存检测时间
      api.appCacheTime = timing.domainLookupStart - timing.fetchStart;
      // DNS查找时间
      api.lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart;
      // 建立TCP连接所花的时间
      api.connectTime = timing.connectEnd - timing.connectStart;
      // 发起请求到响应结束(接收到最后一个字节的响应数据时)
      api.requestTime = timing.responseEnd - timing.requestStart;
      // 文档解析时间
      api.initDomTreeTime = timing.domInteractive - timing.responseEnd;
      // load事件时间
      api.loadEventTime = timing.loadEventEnd - timing.loadEventStart;
      return api;
    },
    firstScreenLoaded:function(){
      firstScreenLoadTime = new Date() - whiteScreenStartTime;
      firstScreenLoaded = true;
      ueMonitor.report();
    },
    domContentLoaded:function(){
      domContentLoadedTime = new Date() - whiteScreenStartTime;
    },
    operationAbleInited:function(){
      operationAbleTime = new Date() - whiteScreenStartTime;
    },
    report:function(){
      if(!loadEd || !firstScreenLoaded )return;
      var timing = this.getTimes();
      if(timing){
        _jc_pingjs && _jc_pingjs('click', {
          appkey: '184',
          ld : timing.loadTime.toFixed(2),
          dr : domContentLoadedTime.toFixed(2),
          ct : timing.connectTime.toFixed(2),
          dns : timing.lookupDomainTime.toFixed(2),
          rt : timing.requestTime.toFixed(2),
          ws : whiteScreenTime.toFixed(2),
          fsl: firstScreenLoadTime.toFixed(2),
          opa:operationAbleTime.toFixed(2),
          tm:1,
          ua:navigator.userAgent,
          pf:navigator.platform
        });
      }
      else{
        _jc_pingjs && _jc_pingjs('click', {
          appkey: '184',
          ld : onLoadTime.toFixed(2),
          dr : domContentLoadedTime.toFixed(2),
          ct : '',
          dns : '',
          rt : '',
          ws : whiteScreenTime.toFixed(2),
          fsl: firstScreenLoadTime.toFixed(2),
          tm:0,
          ua:navigator.userAgent,
          pf:navigator.platform
        });
      }
      ueMonitor.report = function(){};
    }
  };
  window.ueMonitor = ueMonitor;
/*	$(function(){
    onReadyTime = new Date() - whiteScreenStartTime;
  });*/
	$(window).on('load',function(){
    onLoadTime = new Date() - whiteScreenStartTime;
    loadEd = true;
    setTimeout(function(){
      ueMonitor.report();
    },1000);
  });
})();