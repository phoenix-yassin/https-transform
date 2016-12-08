(function () {
  var advConfigs = window.advConfigs = [];
  /*advConfigs.ADV_SYSTEM_DEBUG = true;
  advConfigs.DEBUG_AD={
    DrAlterAble:"http://10.5.15.99:10086/ad/sources/dralterable/production.js"
  };*/

  advConfigs.configFiles = [];
  advConfigs.enableAdMark = true;
  advConfigs.ADV_CONFIGS={
    LoaderType:'DefaultLoader' //default,lazy.
  };
  advConfigs.config = function(config) {
    if(!config){
      return;
    }
    else if (window.adv) {
      adv.adCenter.config(config);
    } else {
      advConfigs.push(config);
    }
  };


  advConfigs.loadConfigFile = function(file){
    if(!file){
      return;
    }
    else if (window.adv) {
      adv.adCenter.loadConfigFile(file);
    } else {
      advConfigs.configFiles.push(file);
    }
  };

  advConfigs.RANDOMS = {
    allways: 'allways',
    firstTime: 'firstTime'
  };
  advConfigs.POSITION = {
    topLeft: 'topLeft',
    topCenter: 'topCenter',
    topRight: 'topRight',
    middleLeft: 'middleLeft',
    middleCenter: 'middleCenter',
    middleRight: 'middleRight',
    bottomLeft: 'bottomLeft',
    bottomCenter: 'bottomCenter',
    bottomRight: 'bottomRight'
  };

  advConfigs.urlHash = function(path){
    var rlt = '//';
    // var n = 0;
    // for (var i = 0; i < path.length; i++) {
    //   n += path.charCodeAt(i);
    // }
    // n = Math.round(n % 3) + 1;
    rlt += 's' + '.17173cdn.com';
    return rlt + path;
  };

  var script;
  if (!document.getElementById('scriptadvcore')) {
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//ue.17173cdn.com/a/www/index/2016v2/js/vda-ssl.js?v0.8.5';
    //2p
    //script.src = 'http://ue.2pcdn.com/a/lib/vda/vda.js';
    //http://ue.2pcdn.com/a/lib/v1/images/favicon.ico
    //script.src = 'http://ue.17173cdn.com/cache/lib/v3/vda/adv-pak.min.js';
    script.id = 'scriptadvcore';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
})();
