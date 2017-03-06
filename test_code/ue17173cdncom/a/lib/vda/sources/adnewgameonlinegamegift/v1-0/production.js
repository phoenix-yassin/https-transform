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

	var adv = window.adv
	  , $ = __webpack_require__(1)
	  , GameGiftActions = __webpack_require__(2)
	  , FeatureSwitch = __webpack_require__(8)

	var AB_TEST_KEY = 'AdNewgameOnlineGameGift.v1'

	FeatureSwitch
	  .registryFeature(AB_TEST_KEY, FeatureSwitch.TYPES.RANDOM_WETHER)

	function getCurrentGameCode() {
	  var matched = location.href.match(/game-info-(\d+).html/)
	  if (matched && matched[1]) { return matched[1] }
	}

	adv.AdBase.extend('AdNewgameOnlineGameGift', {
	  init: function(options) {
	    this.base(options);
	    this.emit(adv.ENUM.EVENTS.inited);
	  }
	, setup: function(data) {
	    var ignoreFeatureSwitch = data && data.ignoreFeatureSwitch

	    if (!ignoreFeatureSwitch && !FeatureSwitch.checkFeature(AB_TEST_KEY)) {
	      return this.emit(adv.ENUM.EVENTS.played)
	    }

	    var currentGameCode = getCurrentGameCode()
	      , currentGame
	      , games = data.games

	    for (var i = 0, len = games.length; i < len; i++) {
	      if (games[i].gameCode === currentGameCode) {
	        currentGame = games[i]
	      }
	    }

	    if (!currentGame) { return }

	    var gameGiftActions = new GameGiftActions(currentGame)
	    gameGiftActions.render()

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
	  , h = __webpack_require__(7)

	injectStyles(style.toString(), 'game-gift-actions')

	function GameGiftActions(config) {
	  this.gameCode = config.gameCode
	  this.giftId = config.giftId
	}

	GameGiftActions.prototype.fetchGift = function(options) {
	  options = options || {}

	  var gameCode = this.gameCode

	  if (this.giftId) {
	    return this.fetchGiftFromGameId(options)
	  }
	  return this.fetchGiftFromGameCode(options)
	}

	GameGiftActions.prototype.fetchGiftFromGameId = function(options) {
	  options = options || {}

	  return $.ajax({
	    url: '//d1.17173.itc.cn/hao/giftinfo/js/' + this.giftId + '.js'
	  , dataType: 'script'
	  , scriptCharset: 'utf-8'
	  , success: $.proxy(function() {
	      var DataStore = window.DATASTORE || {}
	        , currentGift = DataStore['hao.giftInfo']
	            && DataStore['hao.giftInfo'][+this.giftId]

	      options.success({
	          taken_number: currentGift.send_count
	        , name: currentGift.gift_name
	        , url: currentGift.gift_url
	      })
	    }, this)
	  })
	}

	GameGiftActions.prototype.fetchGiftFromGameCode = function(options) {
	  options = options || {}

	  var gameCode = this.gameCode

	  return $.ajax({
	    url: '//d1.17173.itc.cn/hao/giftlist/js/'
	      + this.gameCode + '.js'
	  , dataType: 'script'
	  , scriptCharset: 'utf-8'
	  , success: function() {
	      var DataStore = window.DATASTORE || {}
	        , giftListInfo = DataStore['hao.giftlist']
	            && DataStore['hao.giftlist'][+gameCode]

	      if (!giftListInfo) { return }

	      if (!giftListInfo.list) {
	        return options.success({
	          name: '预订激活码、礼包'
	        , taken_label: giftListInfo.sche_count + ' 人已预订'
	        , url: giftListInfo.url
	        })
	      }


	      var currentGift = giftListInfo.list[giftListInfo.list.length - 1]
	        , gift = {
	            taken_number: currentGift.send_count
	          , name: currentGift.gift_name
	          , url: currentGift.gift_url
	          }

	      options.success(gift)
	    }
	  })
	}

	GameGiftActions.prototype.makeGiftButton = function(gift) {
	  var styles = style.locals
	    , takenLabel = gift.taken_label || gift.taken_number + ' 人已领取'

	  return (
	    h('a', {
	        target: '_blank'
	      , 'class': styles.buttonLink
	      , href: gift.url
	    }, [
	      h('span', {
	        'class': styles.labelTitle
	      }, gift.name)
	    , h('span', { 'class': styles.labelHelper }
	        , takenLabel)
	    ])
	  )
	}

	function trackBiBlock(key) {
	  window._jc_ping = window._jc_ping || [];
	  _jc_ping.push([
	    '_trackBlockClick'
	  , key
	  , window.location.href
	  ])
	}

	var GIFT_BUTTON_BI_KEY = '2YRR3i' // BI: 2016_端游游戏库_推广礼包按钮

	GameGiftActions.prototype.render = function() {
	  return this.fetchGift({ success: $.proxy(function(gift) {

	    var giftButton = this.makeGiftButton(gift)
	      , adSection = $('.info-c2')
	      , downloadButton = adSection.find('.bt2').eq(0).clone()

	    giftButton.mousedown(function() {
	      trackBiBlock(GIFT_BUTTON_BI_KEY)
	    })

	    // IE 6, 7 without inline-block's `vertical-align: bottom`
	    downloadButton.css('marginTop', '20px')

	    var section = h('div', { 'class': style.locals.gameGiftActions }, [
	      giftButton
	    , downloadButton
	    ])

	    adSection.append(section)
	    adSection.find('.channel-box').hide()
	  }, this)})
	}

	module.exports = GameGiftActions


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".ad-11ffd {\n  display: block;\n  _width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ad-8de83 {\n  display: inline-block;\n}\n\n.ad-24451:hover {\n  background: #ff826e;\n}\n\n.ad-24451:link .ad-24451:visited {\n  text-decoration: none;\n}\n\n.ad-24451 {\n  background: #ff6d55;\n  height: 48px;\n  width: 198px;\n  padding: 7px 5px 0;\n  text-decoration: none;\n  margin-right: 7px;\n  text-align: center;\n  vertical-align: bottom;\n}\n\n.ad-b4a3b {\n  font-size: 16px;\n  color: #fff;\n}\n\n.ad-7ec9a {\n  padding-top: 9px;\n}\n\n.ad-7785e {\n  font-size: 12px;\n  color: #fff88a;\n}\n\n.ad-ef81b {\n z-index: 10;\n position: absolute;\n font-size: 0;\n right: -5px;\n top: 36px;\n width: 315px;\n}\n", ""]);

	// exports
	exports.locals = {
		"_spanBlock": "ad-11ffd",
		"_inlineBlock": "ad-8de83",
		"buttonLink": "ad-24451 ad-8de83",
		"labelTitle": "ad-b4a3b ad-11ffd",
		"labelOnlyTitle": "ad-7ec9a ad-b4a3b ad-11ffd",
		"labelHelper": "ad-7785e ad-11ffd",
		"gameGiftActions": "ad-ef81b"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License //www.opensource.org/licenses/mit-license.php
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
	//   //tinyurl.com/h5xbagg
	//
	// XXX:
	//   Internet Explorer imposes a maximum limit of 32 individual styleSheet.
	//   //tinyurl.com/zyrt7yo

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
/***/ function(module, exports, __webpack_require__) {

	var cookie = __webpack_require__(9)
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
/* 9 */
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