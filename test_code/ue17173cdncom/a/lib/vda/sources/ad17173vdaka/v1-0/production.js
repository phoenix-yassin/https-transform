adv.AdBase.extend('Ad17173VDaKa', {
  blockClassPrefix: '.ad-v-daka-',
  init: function(options) {
    this.base(options);
    this.emit(adv.ENUM.EVENTS.inited);
  },
  setup: function(data) {
    this.data = data || this.options;
    if (this.data.items.length > 0) {
      var tmpl = function() {/*@preserve
        <i data-href="@link" class="tg-ico-v @advid" style="display: inline-block; width: 16px; cursor: pointer; background: url(@image) 0 50% no-repeat;"><b style="visibility:hidden;">&nbsp;</b></i>
      */};
      for (var i = 0; i < this.data.items.length; i++) {
        this.data.items[i].advid = this.options.advid;
        this.data.items[i].html = adv.razor(tmpl, this.data.items[i]);
      }
      this.emit(adv.ENUM.EVENTS.setuped);
    }
  },
  play: function() {
    var self = this;
    for (var i = 0; i < self.data.items.length; i++) {
      var config = self.data.items[i];
      self._addVIcon(config);
      if (typeof adv.adCenter.on == 'function') {
        if ($.inArray(5, config.blocks) >= 0) {
          var _config = config;
          adv.adCenter.on(adv.ENUM.EVENTS.played, 'ad17173tequan', function(data) {
            self._addVIcon(_config);
          });
          adv.adCenter.on(adv.ENUM.EVENTS.played, 'ad17173tequan2', function(data) {
            self._addVIcon(_config);
          });
        } else if ($.inArray(7, config.blocks) >= 0) {
          var _config = config;
          adv.adCenter.on(adv.ENUM.EVENTS.played, 'ad17173WenziTuijian1', function(data) {
            self._addVIcon(_config);
          });
          adv.adCenter.on(adv.ENUM.EVENTS.played, 'ad17173WenziTuijian2', function(data) {
            self._addVIcon(_config);
          });
        }
      }
    }
    self._bindEvents();
    self.emit(adv.ENUM.EVENTS.played);
  },
  _addVIcon: function(config) {
    var self = this;
    var blockSelector = self._getBlockSelector(config);
    var $targets = $(blockSelector).find('a['+config.advid+'-loaded!=true]:contains(\''+config.keyword+'\')');
    // news page - article title
    if ($.inArray(6, config.blocks) >= 0) {
      $targets = $targets.add('.gb-final-tit-article['+config.advid+'-loaded!=true]:contains(\''+config.keyword+'\')');
    }
    $targets.each(function() {
      var innerHTML = $(this).html(),
        regx = new RegExp('('+config.keyword+')(?![^\<]*\"\s+\>)', 'g');
      var newHTML = innerHTML.replace(regx, '$1'+$.trim(config.html));
      $(this).html(newHTML).attr(config.advid+'-loaded', true);
    });
  },
  _getBlockSelector: function(config) {
    var selector = [];
    for (var i = 0; i < config.blocks.length; i++) {
      selector.push(this.blockClassPrefix + config.blocks[i]);
    }
    return selector.join(',');
  },
  _bindEvents: function() {
    $('.'+this.options.advid).on('click', function(evt) {
      evt.preventDefault();
      if(evt.stopPropagation) {
        evt.stopPropagation();  
      } else {  
        evt.cancelBubble = true;
      }
      window.open($(this).attr('data-href'));
    });
  }
});