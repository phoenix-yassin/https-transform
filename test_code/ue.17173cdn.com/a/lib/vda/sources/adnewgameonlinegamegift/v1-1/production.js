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

	    var currentGmaeCode = getCurrentGameCode()
	      , currentConfig
	      , configs = data.configs

	    for (var i = 0, len = configs.length; i < len; i++) {
	      if (configs[i].gameCode === currentGmaeCode) {
	        currentConfig = configs[i]
	      }
	    }

	    if (!currentConfig) { return }

	    var gameGiftActions = new GameGiftActions(currentConfig)
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
	    url: 'http://d1.17173.itc.cn/hao/giftinfo/js/' + this.giftId + '.js'
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
	    url: 'http://d1.17173.itc.cn/hao/giftlist/js/'
	      + this.gameCode + '.js'
	  , dataType: 'script'
	  , scriptCharset: 'utf-8'
	  , success: function() {
	      var DataStore = window.DATASTORE || {}
	        , giftListInfo = DataStore['hao.giftlist']
	            && DataStore['hao.giftlist'][+gameCode]

	      if (!giftListInfo) { return }

	      if (!giftListInfo.gift_count) { return }

	      var currentGift = giftListInfo.list[0]
	        , gift = {
	            taken_number: giftListInfo.sche_count
	          , name: currentGift.gift_name
	          , url: currentGift.gift_url
	          }

	      options.success(gift)
	    }
	  })
	}

	GameGiftActions.prototype.makeGiftButton = function(gift) {
	  return (
	    h('a', {
	        target: '_blank'
	      , 'class': style.locals.buttonLink
	      , href: gift.url
	    }, [
	      h('span', { 'class': style.locals.labelTitle }, gift.name)
	    , h('span', { 'class': style.locals.labelHelper }
	        , gift.taken_number + ' 人已领取')
	    ])
	  )
	}

	GameGiftActions.prototype.render = function() {
	  return this.fetchGift({ success: $.proxy(function(gift) {

	    var giftButton = this.makeGiftButton(gift)
	      , adSection = $('.info-c2')
	      , downloadButton = adSection.find('.bt2').eq(0).clone()

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
	exports.push([module.id, "._39HYj_SpQBgB7jWOkl-_tP {\n  display: block;\n  _width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n._45wz0M8VsZOspvFmmJvTr {\n  display: inline-block;\n}\n\n._2ui-9zkbl8VjR3imn0Sryd:hover {\n  background: #ff826e;\n}\n\n._2ui-9zkbl8VjR3imn0Sryd:link ._2ui-9zkbl8VjR3imn0Sryd:visited {\n  text-decoration: none;\n}\n\n._2ui-9zkbl8VjR3imn0Sryd {\n  background: #ff6d55;\n  height: 48px;\n  width: 206px;\n  padding: 7px 5px 0;\n  text-decoration: none;\n  margin-right: 10px;\n  text-align: center;\n  vertical-align: bottom;\n}\n\n._3CdQuqUpGYPRpDgD84S4Li {\n  font-size: 16px;\n  color: #fff;\n}\n\n.bNHBCDHhDv4SL8rqoR4Ah {\n  font-size: 12px;\n  color: #fff88a;\n}\n\n._3uALrqLLQcDd6W0s-ZtQWZ {\n position: absolute;\n right: 0;\n top: 36px;\n width: 326px;\n}\n", ""]);

	// exports
	exports.locals = {
		"_spanBlock": "_39HYj_SpQBgB7jWOkl-_tP",
		"_inlineBlock": "_45wz0M8VsZOspvFmmJvTr",
		"buttonLink": "_2ui-9zkbl8VjR3imn0Sryd _45wz0M8VsZOspvFmmJvTr",
		"labelTitle": "_3CdQuqUpGYPRpDgD84S4Li _39HYj_SpQBgB7jWOkl-_tP",
		"labelHelper": "bNHBCDHhDv4SL8rqoR4Ah _39HYj_SpQBgB7jWOkl-_tP",
		"gameGiftActions": "_3uALrqLLQcDd6W0s-ZtQWZ"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
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
	//   http://tinyurl.com/h5xbagg
	//
	// XXX:
	//   Internet Explorer imposes a maximum limit of 32 individual styleSheet.
	//   http://tinyurl.com/zyrt7yo

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


/***/ }
/******/ ]);