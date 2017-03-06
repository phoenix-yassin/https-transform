/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1)
	  , GameSection = __webpack_require__(2)
	  , FeatureSwitch = __webpack_require__(9)

	var AB_TEST_KEY = 'AdMobileNewsAndNewgameGameInfo.v1'

	FeatureSwitch
	  .registryFeature(AB_TEST_KEY, FeatureSwitch.TYPES.RANDOM_WETHER)

	adv.AdBase.extend('AdMobileNewsAndNewgameGameInfo', {
	  init: function(options) {
	    this.base(options);
	    this.emit(adv.ENUM.EVENTS.inited);
	  }
	, setup: function(data) {
	    var ignoreFeatureSwitch = data && data.ignoreFeatureSwitch

	    if (!ignoreFeatureSwitch && !FeatureSwitch.checkFeature(AB_TEST_KEY)) {
	      return this.emit(adv.ENUM.EVENTS.played)
	    }

	    $('div[data-name="AdNewsAndNewgameGameInfo"]').each(function() {
	      var el = $(this)
	        , gameCode = el.data('game-code')
	      if (!gameCode) { return }

	      var gameSection = new GameSection(gameCode)
	      el.replaceWith(gameSection.render().el)
	    })

	    this.emit(adv.ENUM.EVENTS.played);
	  }
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1)
	  , style = __webpack_require__(3)
	  , injectStyles = __webpack_require__(5)
	  , assert = __webpack_require__(6)
	  , h = __webpack_require__(7)
	  , sec2date = __webpack_require__(8)

	injectStyles(style.toString(), 'ad-game-info-section')

	function GameSection(gameCode) {
	  assert('Number', arguments)
	  this.gameCode = gameCode
	  this.el = $('<div>')
	}

	GameSection.prototype.fetchGameInfo = function(onSuccess) {
	  assert('Function', arguments)

	  return $.ajax({
	    url: '//

d1.17173.itc.cn/newgame/info/js/' + this.gameCode + '.js'
	  , dataType: 'script'
	  , scriptCharset: 'utf-8'
	  , success: $.proxy(function() {
	      var DataStore = window.DATASTORE || {}
	        , game = DataStore['game-detail.info']
	            && DataStore['game-detail.info'][this.gameCode]

	      onSuccess(game)
	    }, this)
	  })
	}

	GameSection.prototype.makeElement = function(game) {
	  var styles = style.locals
	    , officalUrl = game.sp_info && game.sp_info.game_official_url
	        || game.zq_url
	        || game.game_url
	    , giftUrl = ['//

hao.17173.com/sche-info-'
	        , game.game_code, '.html'].join('')

	  function printTestInfo() {
	    var testInfo = game.curr_test_info

	    if (!testInfo || !testInfo.test_time) {
	      return
	    }

	    return h('p', [ sec2date(testInfo.test_time), ' ', testInfo.test_type ])
	  }

	  function printGameStyle() {
	    var gameInfo = []
	    $.each(['game_type', 'game_theme', 'game_frame'], function(index, attrName) {
	      if (!game[attrName]) { return }
	      gameInfo.push(game[attrName].name)
	    })

	    if (!gameInfo.length) { return }

	    return h('p', gameInfo.join(' / '))
	  }

	  return (
	    h('div', { 'class': styles.container }, [
	      h('div', { 'class': styles.topSection }, [
	        h('a', { 'class': styles.topSectionGameLogo
	          , href: game.game_url, target: '_blank' }, [
	          h('img', {
	            src: game.logo_pic, alt: game.name
	          })
	        ])
	      , h('div', { 'class': styles.topSectionGameInfo }, [
	          h('h2', { 'class': styles.topSectionGameTitle }, [
	            h('a', { href: game.game_url, target: '_blank' }, [
	              game.game_name
	            ])
	          ])
	        , printTestInfo()
	        , printGameStyle()
	        ])
	      ])
	    , h('div', { 'class': styles.bottomSection }, [
	        h('div', { 'class': styles.linkActions }, [
	          h('a', { 'class': styles.buttonGift
	            , 'data-bi-type': 'GIFT_BUTTON'
	            , 'href': giftUrl, 'target': '_blank' }, [
	            '礼包'
	          ])
	        , h('a', { 'class': styles.buttonDownload
	            , 'data-bi-type': 'DOWNLOAD_BUTTON'
	            , 'href': game.download_url, 'target': '_blank' }, [
	            '下载'
	          ])
	        , h('a', { 'class': styles.buttonOffical
	            , 'data-bi-type': 'OFFICAL_BUTTON'
	            , 'style': 'margin: 0;'
	            , 'href': officalUrl, 'target': '_blank' }, [
	            '官网'
	          ])
	        ])
	      ])
	    ])
	  )
	}

	var rIsNewgame = /newgame\.17173\.com/i
	  , isNewgame = rIsNewgame.test(window.location.href)

	var BI_TYPES = isNewgame
	  ? { GIFT_BUTTON: 'quiMju'
	    , DOWNLOAD_BUTTON: '6RVJRb'
	    , OFFICAL_BUTTON: 'fyArEr'
	    }
	  : { GIFT_BUTTON: 'ZnmIFb'
	    , DOWNLOAD_BUTTON: 'Qv2u63'
	    , OFFICAL_BUTTON: 'Mzee6b'
	    }

	function trackBiBlockClicked(TYPE) {
	  window._jc_ping = window._jc_ping || [];
	  var key = BI_TYPES[TYPE]
	  _jc_ping.push([
	    '_trackBlockClick'
	  , key
	  , window.location.href
	  ])
	}

	GameSection.prototype.render = function() {
	  this.fetchGameInfo($.proxy(function(game) {
	    var element = this.makeElement(game)
	    element.find('a[data-bi-type]').mousedown(function() {
	      var el = $(this)
	      trackBiBlockClicked(el.data('bi-type'))
	    })
	    this.el.append(element)
	  }, this))
	  return this
	}

	module.exports = GameSection


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".ad-ca49b {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.ad-60438 {\n  overflow: hidden;\n  *zoom: 1;\n}\n\n.ad-5017e {\n  line-height: 1.75;\n  background: #f5f5f5;\n  padding: .625em;\n  font-size: 16px;\n}\n\n.ad-726ff {\n}\n\n.ad-726ff img {\n  width: 100%;\n  height: auto;\n}\n\n.ad-350b8 {\n  width: 30.7%;\n  margin-right: 3%;\n  text-decoration: none;\n  display: inline-block;\n  vertical-align: top;\n  font-size: 0;\n}\n\n.ad-ecadd {\n  display: inline-block;\n  vertical-align: top;\n  width: 63%;\n}\n\n.ad-ebebf {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.ad-ebebf a {\n  color: #333;\n}\n\n.ad-ebebf a:visited .ad-ebebf a:link {\n  text-decoration: none;\n}\n\n.ad-ecadd p {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #999;\n  font-size: .75em;\n  line-height: 1.5;\n  margin: 0 auto !important;\n  padding: 0 !important;\n}\n\n.ad-b172a {\n}\n\n.ad-d2110 {\n  padding-top: .625em;\n}\n\n.ad-b172a a {\n  float: left;\n  width: 32.33%;\n  margin-right: 1.5%;\n  line-height: 2;\n  text-align: center;\n  font-size: 1em;\n  border-style: solid;\n  border-width: 1px;\n  box-sizing: border-box;\n  border-radius: 1em;\n}\n\n.ad-5017e a:link, .ad-5017e a:visited {\n  text-decoration: none;\n}\n\n.ad-baf72 {\n  border-color: #ff6d55;\n  color: #ff6d55;\n}\n\n.ad-96711 {\n  border-color: #63c245;\n  color: #63c245;\n}\n\n.ad-c8698 {\n  border-color: #57adfd;\n  color: #57adfd;\n}\n", ""]);

	// exports
	exports.locals = {
		"_marginReset": "ad-ca49b",
		"_bfc": "ad-60438",
		"container": "ad-5017e",
		"topSection": "ad-726ff ad-60438",
		"topSectionGameLogo": "ad-350b8",
		"topSectionGameInfo": "ad-ecadd ad-60438",
		"topSectionGameTitle": "ad-ebebf ad-ca49b",
		"bottomSection": "ad-b172a ad-ca49b ad-60438",
		"linkActions": "ad-d2110 ad-ca49b ad-60438",
		"buttonGift": "ad-baf72",
		"buttonDownload": "ad-96711",
		"buttonOffical": "ad-c8698"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License //

www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(6)

	// See more :
	//   https://www.thecssninja.com/javascript/noscope
	//   //

tinyurl.com/h5xbagg
	//
	// XXX:
	//   Internet Explorer imposes a maximum limit of 32 individual styleSheet.
	//   //

tinyurl.com/zyrt7yo

	module.exports = function(cssText, name) {
	  assert('String String', arguments)

	  var id = 'injected-css'

	  if (name) {
	    id = [id, name].join('-')
	  }

	  style = document.createElement('style')
	  style.type = 'text/css'
	  style.id = id

	  document.body.appendChild(style)

	  if (style.styleSheet) {
	    style.styleSheet.cssText = cssText
	  } else {
	    style.appendChild(document.createTextNode(cssText))
	  }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 *  # basic type
	 *
	 *  'Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'
	 *  'Object', 'Boolean', 'Array'
	 *
	 *  # special type
	 *
	 *  +---------------+--------------------------------------+
	 *  |     type      |             description              |
	 *  +---------------+--------------------------------------+
	 *  | Any           | matches any type                     |
	 *  | jQueryElement | jQuery Element                       |
	 *  | DomElement    | Dom Element                          |
	 *  | Element       | jQuery Element or Dom Element        |
	 *  +---------------+--------------------------------------+
	 *
	 */

	var ArrayProto = Array.prototype
	  , ObjProto = Object.prototype
	  , FuncProto = Function.prototype
	  , toString = ObjProto.toString
	  , nativeIsArray = Array.isArray

	var utils = {
	  each: function(array, iteratee) {
	    for (var i = 0, length = array.length; i < length; i++) {
	      iteratee(array[i], i, array);
	    }
	  }
	}

	var validateMehtods = {}

	utils.each([
	  'Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'
	], function(name) {
	  var methodName = 'is' + name

	  utils[methodName] = function(obj) {
	    return toString.call(obj) === '[object ' + name + ']';
	  }

	  validateMehtods[name] = function(val) {
	    return utils[methodName](val)
	  }
	})

	// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	// IE 11 (#1621), and in Safari 8 (#1929).
	if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	  utils.isFunction = function(obj) {
	    return typeof obj == 'function' || false;
	  }
	}

	validateMehtods['Any'] = function() { return true }
	validateMehtods['Array'] = function(val) { return utils.isArray(val) }

	validateMehtods['Object'] = function(obj) {
	  var type = typeof obj;
	  return type === 'function' || type === 'object' && !!obj
	}

	validateMehtods['Boolean'] = function(obj) {
	  return obj === true || obj === false
	    || toString.call(obj) === '[object Boolean]'
	}

	utils.isDomElement = function(el) {
	  return (
	    typeof HTMLElement === "object"
	      ? el instanceof HTMLElement
	      : el && typeof el === "object"
	          && el !== null
	          && el.nodeType === 1
	          && typeof el.nodeName==="string"
	  )
	}

	validateMehtods['DomElement'] = function(el) {
	  return utils.isDomElement(el)
	}

	utils.isJQueryElement = function(el) {
	  return utils.isFunction(el['addClass'])
	}

	validateMehtods['jQueryElement'] = function(el) {
	  return utils.isJQueryElement(el)
	}

	validateMehtods['Element'] = function(el) {
	  return utils.isJQueryElement(el) || utils.isDomElement(el)
	}

	utils.isArray = nativeIsArray || function(obj) {
	  return toString.call(obj) === '[object Array]'
	}

	function invalidType(index, expectedType) {
	  throw Error('ArrayValue(arguments) #'
	    + (index + 1) + ': Expected ' + expectedType)
	}

	function missingType(expectedType) {
	  throw Error('expectedType #' + expectedType + ' is missing')
	}

	module.exports = function(schema, valueArray) {

	  var schema = schema.split(' ')

	  utils.each(schema, function(schemaName, index) {
	    if (index > valueArray.length - 1) { return }

	    var currenetValue = valueArray[index]
	      , validate = validateMehtods[schemaName]

	    if (!validate) { return missingType(schemaName) }

	    if (!validate(currenetValue)) {
	      invalidType(index, schemaName)
	    }
	  })
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1)

	module.exports = function(tag, attrs, content) {
	  var style

	  if (!$.isPlainObject(attrs)) {
	    content = attrs
	    attrs = {}
	  }

	  var component = $('<' + tag + '>', attrs)

	  if ($.isArray(content)) {
	    for (var i = 0, len = content.length; i < len; i++) {
	      component.append(content[i])
	    }
	  } else if (content && !!content.addClass) {
	    component.html(content)
	  } else if (content) {
	    component.text(content)
	  }

	  return component
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	function zeropadTime(number) {
	  if (+number < 10) {
	    return '0' + number
	  }
	  return number
	}

	module.exports = function(sec, options) {
	  options = options || {}
	  options.withoutYear = options.withoutYear || false

	  var time = new Date(sec * 1000)
	    , date = ''

	  if (!options.withoutYear) {
	    date = time.getFullYear() + '-'
	  }

	  date += (zeropadTime(time.getMonth() + 1)) + '-'
	    + zeropadTime(time.getDate())

	  date += ' ' + zeropadTime((time.getHours() + 1))
	    + ':' + zeropadTime(time.getMinutes())
	  return date
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var cookie = __webpack_require__(10)
	  , assert = __webpack_require__(6)

	function getFeatureName(featureName) {
	  return 'ued_feature_' + featureName
	}

	var SCOPE_TYPES = {
	  RANDOM_WETHER: 'random-whether'
	}

	var scopesMap = {}
	scopesMap[SCOPE_TYPES.RANDOM_WETHER] = function() {
	  return Math.random() < 0.5 ? 1 : 0
	}

	var FeatureSwitch = {
	  registryFeature: function(featureName, splitedScope) {
	    assert('String String', arguments)

	    featureName = getFeatureName(featureName)

	    if (cookie(featureName) === null) {
	      cookie(featureName, scopesMap[splitedScope]())
	    }
	  }
	, checkFeature: function(featureName) {
	    return !!+cookie(getFeatureName(featureName))
	  }
	}

	FeatureSwitch.TYPES = SCOPE_TYPES

	module.exports = FeatureSwitch;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Set, get or remove cookie.
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {Mixed}
	 * @api public
	 */

	var cookie = function(name, value, options) {
	  return arguments.length === 1
	    ? get(name) : set(name, value, options)
	};

	function get(name) {
	  var value = document.cookie.match(
	    new RegExp('(?:\\s|^)' + name + '\\=([^;]*)'))
	  return value ? decodeURIComponent(value[1]) : null
	}

	function set(name, value, options) {
	  options = options || {}

	  var date, expires, expiresGMTString
	    , pair = name + '=' + encodeURIComponent(value)
	    , path = options.path ? '; path=' + options.path : ''
	    , domain = options.domain ? '; domain=' + options.domain : ''
	    , maxage = options['max-age']
	    , secure = options.secure ? '; secure' : ''

	  if (options.expires) {
	    expiresGMTString = options.expires
	  } else if (maxage) {
	    date = new Date()
	    date.setTime(date.getTime() + maxage * 1000)
	    expiresGMTString = date.toGMTString()
	  }

	  if (expiresGMTString) {
	    expires = '; expires=' + expiresGMTString
	  }

	  document.cookie = [pair, expires, path, domain, secure].join('')
	}

	function remove(name) {
	  set(name, '', { 'max-age': 0 })
	}

	cookie.get = get
	cookie.set = set
	cookie.remove = remove

	module.exports = cookie


/***/ }
/******/ ]);