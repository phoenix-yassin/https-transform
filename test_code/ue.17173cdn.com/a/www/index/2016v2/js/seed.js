(function () {
  var advConfigs = window.advConfigs = [];

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
    var rlt = 'http://';
    var n = 0;
    for (var i = 0; i < path.length; i++) {
      n += path.charCodeAt(i);
    }
    n = Math.round(n % 3) + 1;
    rlt += 's' + n + '.17173cdn.com';
    return rlt + path;
  };
  var script;
  if (!document.getElementById('scriptadvcore')) {
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://ue.17173cdn.com/a/www/index/2016v2/js/vda.js?v0.8.3';
    script.id = 'scriptadvcore';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

})();