(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/now-ui-dashboard.back"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-paginate */ "./node_modules/vuejs-paginate/dist/index.js");
/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: [],
      paginateOptions: [5, 10, 25, 50],
      paginateSelect: 10,
      search: "",
      sortBy: "full_name",
      // orderBy: "asc",
      orderByAsc: true
    };
  },
  computed: {
    orderedUsers: function orderedUsers() {
      return _.orderBy(this.users, this.sortBy, this.orderBy);
    },
    pagination: function pagination() {
      return {
        pageCount: 1,
        currentPage: 1,
        from: 1,
        to: 1,
        total: 1
      };
    },
    orderBy: function orderBy() {
      if (this.orderByAsc) {
        return "asc";
      } else {
        return "desc";
      }
    }
  },
  created: function created() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("/api/users", {
        params: {
          paginate: this.paginateSelect,
          page: page,
          sortBy: this.sortBy,
          orderBy: this.orderBy,
          search: this.search
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.users = data.data;
        _this.pagination.pageCount = data.meta.last_page;
        _this.pagination.currentPage = data.meta.current_page;
        _this.pagination.from = data.meta.from;
        _this.pagination.to = data.meta.to;
        _this.pagination.total = data.meta.total;
      });
    },
    setOrder: function setOrder(sortBy) {
      this.sortBy = sortBy;
      this.orderByAsc = !this.orderByAsc;
      this.fetch();
    },
    showOrder: function showOrder(linkOrder) {
      if (linkOrder === this.sortBy) {
        if (this.orderBy === "asc") {
          return "sorting_asc";
        } else {
          return "sorting_desc";
        }
      }
    }
  },
  components: {
    paginate: vuejs_paginate__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['old', 'id'],
  data: function data() {
    return {
      user: {}
    };
  },
  created: function created() {
    if (this.old.length !== 0) {
      this.user = this.old;
    } else if (this.id) {
      this.fetch(this.id);
    }
  },
  methods: {
    fetch: function fetch(id) {
      var _this = this;

      axios.get('/api/users/' + id).then(function (_ref) {
        var data = _ref.data;
        //           console.log(data);
        _this.user = data.data;
      });
    },
    autocomplite: function autocomplite() {
      autocomplite_fields(this.user.full_name);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nthead > tr > th.sorting_asc[data-v-1f022106],\r\nthead > tr > th.sorting_desc[data-v-1f022106],\r\nthead > tr > th.sorting[data-v-1f022106],\r\nthead > tr > td.sorting_asc[data-v-1f022106],\r\nthead > tr > td.sorting_desc[data-v-1f022106],\r\nthead > tr > td.sorting[data-v-1f022106] {\r\n\tpadding-right: 30px;\n}\nthead > tr > th[data-v-1f022106]:active,\r\nthead > tr > td[data-v-1f022106]:active {\r\n\toutline: none;\n}\nthead .sorting[data-v-1f022106],\r\nthead .sorting_asc[data-v-1f022106],\r\nthead .sorting_desc[data-v-1f022106],\r\nthead .sorting_asc_disabled[data-v-1f022106],\r\nthead .sorting_desc_disabled[data-v-1f022106] {\r\n\tcursor: pointer;\r\n\tposition: relative;\n}\nthead .sorting[data-v-1f022106]:before,\r\nthead .sorting[data-v-1f022106]:after,\r\nthead .sorting_asc[data-v-1f022106]:before,\r\nthead .sorting_asc[data-v-1f022106]:after,\r\nthead .sorting_desc[data-v-1f022106]:before,\r\nthead .sorting_desc[data-v-1f022106]:after,\r\nthead .sorting_asc_disabled[data-v-1f022106]:before,\r\nthead .sorting_asc_disabled[data-v-1f022106]:after,\r\nthead .sorting_desc_disabled[data-v-1f022106]:before,\r\nthead .sorting_desc_disabled[data-v-1f022106]:after {\r\n\tposition: absolute;\r\n\tbottom: 0.9em;\r\n\tdisplay: block;\r\n\topacity: 0.3;\n}\nthead .sorting[data-v-1f022106]:before,\r\nthead .sorting_asc[data-v-1f022106]:before,\r\nthead .sorting_desc[data-v-1f022106]:before,\r\nthead .sorting_asc_disabled[data-v-1f022106]:before,\r\nthead .sorting_desc_disabled[data-v-1f022106]:before {\r\n\tright: 1em;\r\n\tcontent: \"\\2191\";\n}\nthead .sorting[data-v-1f022106]:after,\r\nthead .sorting_asc[data-v-1f022106]:after,\r\nthead .sorting_desc[data-v-1f022106]:after,\r\nthead .sorting_asc_disabled[data-v-1f022106]:after,\r\nthead .sorting_desc_disabled[data-v-1f022106]:after {\r\n\tright: 0.5em;\r\n\tcontent: \"\\2193\";\n}\nthead .sorting_asc[data-v-1f022106]:before,\r\nthead .sorting_desc[data-v-1f022106]:after {\r\n\topacity: 1;\n}\nthead .sorting_asc_disabled[data-v-1f022106]:before,\r\nthead .sorting_desc_disabled[data-v-1f022106]:after {\r\n\topacity: 0;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 col-md-6" }, [
        _c("div", { staticClass: "form-inline" }, [
          _c("label", [
            _vm._v("\n\t\t\t\t\tПоказать\n\t\t\t\t\t"),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.paginateSelect,
                    expression: "paginateSelect"
                  }
                ],
                staticClass:
                  "custom-select custom-select-sm form-control form-control-sm d-flex mx-1",
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.paginateSelect = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    _vm.fetch
                  ]
                }
              },
              _vm._l(_vm.paginateOptions, function(option, i) {
                return _c("option", { key: i, domProps: { value: option } }, [
                  _vm._v(_vm._s(option))
                ])
              }),
              0
            ),
            _vm._v(" записей\n\t\t\t\t")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-6" }, [
        _c("div", { staticClass: "form-inline float-right" }, [
          _c("label", [
            _vm._v("\n\t\t\t\t\tПоиск:\n\t\t\t\t\t"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              staticClass: "form-control form-control-sm ml-1",
              attrs: { type: "search" },
              domProps: { value: _vm.search },
              on: {
                blur: _vm.fetch,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "table",
      {
        staticClass: "table table-striped table-bordered table-responsive-md",
        staticStyle: { width: "100%" },
        attrs: { id: "" }
      },
      [
        _c("thead", { staticClass: "text-primary" }, [
          _c("tr", [
            _c(
              "th",
              {
                staticClass: "sorting",
                class: _vm.showOrder("full_name"),
                on: {
                  click: function($event) {
                    _vm.setOrder("full_name")
                  }
                }
              },
              [_vm._v("Автор")]
            ),
            _vm._v(" "),
            _c("th", [_vm._v("Eng")]),
            _vm._v(" "),
            _c(
              "th",
              {
                staticClass: "sorting",
                class: _vm.showOrder("email"),
                on: {
                  click: function($event) {
                    _vm.setOrder("email")
                  }
                }
              },
              [_vm._v("E-mail")]
            ),
            _vm._v(" "),
            _c("th", [_vm._v("Роль")]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.users, function(user, index) {
            return _c("tr", { key: index }, [
              _c("td", [
                _c("a", { attrs: { href: user.editLink } }, [
                  _vm._v(_vm._s(user.full_name))
                ])
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(user.last_name_en) + " " + _vm._s(user.initials_en)
                )
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.email))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.role))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(user.articles))])
            ])
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 col-md-5" }, [
        _c("div", { staticClass: "form-inline" }, [
          _vm._v(
            "Записи с " +
              _vm._s(_vm.pagination.from) +
              " до " +
              _vm._s(_vm.pagination.to) +
              " из " +
              _vm._s(_vm.pagination.total) +
              " записей"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-7" }, [
        _c(
          "div",
          { staticClass: "float-right" },
          [
            _c("paginate", {
              attrs: {
                "page-count": _vm.pagination.pageCount,
                "click-handler": _vm.fetch,
                "prev-text": "Предыдущая",
                "next-text": "Следующая",
                "container-class": "pagination mb-0",
                "page-class": "page-item",
                "prev-class": "page-item",
                "next-class": "page-item",
                "page-link-class": "page-link",
                "prev-link-class": "page-link",
                "next-link-class": "page-link"
              },
              model: {
                value: _vm.pagination.currentPage,
                callback: function($$v) {
                  _vm.$set(_vm.pagination, "currentPage", $$v)
                },
                expression: "pagination.currentPage"
              }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("span", [_vm._v("Статьи")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-8 col-sm-7 col-xs-7" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6" }, [_vm._v("Полное имя")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.full_name,
                        expression: "user.full_name"
                      }
                    ],
                    staticClass: "form-control mr-2",
                    attrs: {
                      type: "text",
                      name: "full_name",
                      placeholder: "Ф.И.О.",
                      required: ""
                    },
                    domProps: { value: _vm.user.full_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "full_name", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-4 col-sm-5 col-xs-5 text-right" },
                [
                  _c("label", { staticClass: "d-block" }, [
                    _vm._v("Автозаполнение")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary btn-simple btn-round py-2 my-0",
                      attrs: { type: "button" },
                      on: { click: _vm.autocomplite }
                    },
                    [_vm._v("Заполнить")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-7 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6", attrs: { for: "email" } }, [
                    _vm._v("Email")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.email,
                        expression: "user.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      name: "email",
                      placeholder: "Email",
                      required: ""
                    },
                    domProps: { value: _vm.user.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-5 pl-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6", attrs: { for: "alias" } }, [
                    _vm._v("Логин")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.alias,
                        expression: "user.alias"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "alias", disabled: _vm.id },
                    domProps: { value: _vm.user.alias },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "alias", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "h6 mt-2" }, [
              _vm._v("Данные на русском")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "last_name_ru" } }, [
                    _vm._v("Фамилия")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.last_name_ru,
                        expression: "user.last_name_ru"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "last_name_ru" },
                    domProps: { value: _vm.user.last_name_ru },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "last_name_ru", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 px-1" }, [
                _c("label", { attrs: { for: "first_name_ru" } }, [
                  _vm._v("Имя")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.first_name_ru,
                      expression: "user.first_name_ru"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "first_name_ru" },
                  domProps: { value: _vm.user.first_name_ru },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "first_name_ru", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 px-1" }, [
                _c("label", { attrs: { for: "patronymic_ru" } }, [
                  _vm._v("Отчество")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.patronymic_ru,
                      expression: "user.patronymic_ru"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "patronymic_ru" },
                  domProps: { value: _vm.user.patronymic_ru },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "patronymic_ru", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 pl-1" }, [
                _c("label", { attrs: { for: "initials_ru" } }, [
                  _vm._v("Инициалы")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.initials_ru,
                      expression: "user.initials_ru"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "initials_ru" },
                  domProps: { value: _vm.user.initials_ru },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "initials_ru", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "h6 mt-2" }, [
              _vm._v("Данные на английском")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "last_name_en" } }, [
                    _vm._v("Last Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.last_name_en,
                        expression: "user.last_name_en"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "last_name_en" },
                    domProps: { value: _vm.user.last_name_en },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "last_name_en", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 px-1" }, [
                _c("label", { attrs: { for: "first_name_en" } }, [
                  _vm._v("First Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.first_name_en,
                      expression: "user.first_name_en"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "first_name_en" },
                  domProps: { value: _vm.user.first_name_en },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "first_name_en", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 px-1" }, [
                _c("label", { attrs: { for: "patronymic_en" } }, [
                  _vm._v("Middle Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.patronymic_en,
                      expression: "user.patronymic_en"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "patronymic_en" },
                  domProps: { value: _vm.user.patronymic_en },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "patronymic_en", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 pl-1" }, [
                _c("label", { attrs: { for: "initials_en" } }, [
                  _vm._v("Initials")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.initials_en,
                      expression: "user.initials_en"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "initials_en" },
                  domProps: { value: _vm.user.initials_en },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "initials_en", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "h6 mt-2" }, [_vm._v("ORCID")]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-7 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.orcid,
                        expression: "user.orcid"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "orcid" },
                    domProps: { value: _vm.user.orcid },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "orcid", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("label", { staticClass: "h6 mt-2" }, [
              _vm._v("Степень и звание")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6 pr-1" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "graduate_ru" } }, [
                    _vm._v("На русском")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.graduate_ru,
                        expression: "user.graduate_ru"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "graduate_ru" },
                    domProps: { value: _vm.user.graduate_ru },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "graduate_ru", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 pl-1" }, [
                _c("label", { attrs: { for: "graduate_en" } }, [
                  _vm._v("На английском")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.graduate_en,
                      expression: "user.graduate_en"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "graduate_en" },
                  domProps: { value: _vm.user.graduate_en },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "graduate_en", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "h6 mt-3" }, [
              _vm._v("Место работы (должность)")
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6" }, [_vm._v("На русском")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.description_ru,
                        expression: "user.description_ru"
                      }
                    ],
                    staticClass: "form-control description",
                    attrs: {
                      name: "description_ru",
                      id: "",
                      cols: "100",
                      rows: "3"
                    },
                    domProps: { value: _vm.user.description_ru },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.user,
                          "description_ru",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "h6 mt-2" }, [
                    _vm._v("На английском")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.description_en,
                        expression: "user.description_en"
                      }
                    ],
                    staticClass: "form-control description",
                    attrs: {
                      name: "description_en",
                      id: "",
                      cols: "100",
                      rows: "3"
                    },
                    domProps: { value: _vm.user.description_en },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.user,
                          "description_en",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(4)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "title  mb-0" }, [_vm._v("Персональные данные")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "title mb-0" }, [
        _vm._v("Сведения о месте работы")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "table",
          {
            staticClass:
              "table table-striped table-bordered table-responsive-md",
            staticStyle: { width: "100%" },
            attrs: { id: "jobsTable" }
          },
          [
            _c("thead", [
              _c("th", {}),
              _vm._v(" "),
              _c("th", {}, [_vm._v("На русском")]),
              _vm._v(" "),
              _c("th", {}, [_vm._v("На английском")])
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("1")]),
                _vm._v(" "),
                _c("td", [_vm._v("Русское название 111")]),
                _vm._v(" "),
                _c("td", [_vm._v("Английское название 111")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("22")]),
                _vm._v(" "),
                _c("td", [_vm._v("Русское название 2222")]),
                _vm._v(" "),
                _c("td", [_vm._v("Английское название 2222")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("2")]),
                _vm._v(" "),
                _c("td", [_vm._v("Русское название 33")]),
                _vm._v(" "),
                _c("td", [_vm._v("Английское название 333")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("24")]),
                _vm._v(" "),
                _c("td", [_vm._v("Русское название 44")]),
                _vm._v(" "),
                _c("td", [_vm._v("Английское название 444")])
              ])
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "title mb-0" }, [_vm._v("Биография")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h6", [_vm._v("Сохранить изменения")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("input", {
            staticClass: "btn btn-primary btn-round btn-block",
            attrs: { type: "submit", value: "Сохранить" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card", attrs: { id: "photoCard" } }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h6", [_vm._v("Фотография")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "d-none", attrs: { id: "image" } }, [
            _c("img", { attrs: { src: "", alt: "" } }),
            _vm._v(" "),
            _c("label", [
              _c(
                "a",
                {
                  staticClass: "text-info text-center p-1",
                  attrs: { href: "#", id: "destroyImage" }
                },
                [_vm._v("Поменять фотографию")]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center", attrs: { id: "downloadImage" } },
            [
              _c("label", { staticClass: "d-block mb-0" }, [
                _vm._v("Фотография не загружена")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary btn-simple btn-round",
                  attrs: {
                    type: "button",
                    "data-toggle": "modal",
                    "data-target": "#setFileModal"
                  }
                },
                [_vm._v("Загрузить")]
              )
            ]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "d-none",
            attrs: { type: "text", name: "avatar", value: "" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js").default;
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/back/users/UserList.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/back/users/UserList.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=1f022106&scoped=true& */ "./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& */ "./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f022106",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/users/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=style&index=0&id=1f022106&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_1f022106_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=1f022106&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserList.vue?vue&type=template&id=1f022106&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_1f022106_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/back/users/UserProfile.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/back/users/UserProfile.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=6528c9cc& */ "./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/back/users/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=6528c9cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/back/users/UserProfile.vue?vue&type=template&id=6528c9cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_6528c9cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/now-ui-dashboard.back.js":
/*!***********************************************!*\
  !*** ./resources/js/now-ui-dashboard.back.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//CORE
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js"); // PLUGINS


__webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js"); // require('jquery-colorbox');


__webpack_require__(/*! ./now-ui-dashboard/plugins/bootstrap-notify */ "./resources/js/now-ui-dashboard/plugins/bootstrap-notify.js"); // require('./now-ui-dashboard/plugins/chartjs.min');


__webpack_require__(/*! ./now-ui-dashboard/plugins/perfect-scrollbar.jquery.min */ "./resources/js/now-ui-dashboard/plugins/perfect-scrollbar.jquery.min.js"); // THEME


__webpack_require__(/*! ./now-ui-dashboard/now-ui-dashboard */ "./resources/js/now-ui-dashboard/now-ui-dashboard.js"); // require('./now-ui-dashboard/now-ui-dashboard.min');
// Load Datatables
// try {
//   require('datatables.net-bs4')($);
//   require('datatables.net-fixedcolumns-bs4')($);
//   require('datatables.net-fixedheader-bs4')($);
//   require('datatables.net-buttons-bs4')($);
//   require('datatables.net-select-bs4')($);
//   require('datatables.net-responsive-bs4')($);
//   require('datatables.net-rowgroup-bs4')($);
//   require('datatables.net-scroller-bs4')($);
// } catch (e) {}
//bs-custom-file-input
// import bsCustomFileInput from 'bs-custom-file-input';
// $(document).ready(function() {
//   bsCustomFileInput.init();
// });


window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
window.VueRouter = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component("user-list", __webpack_require__(/*! ./components/back/users/UserList.vue */ "./resources/js/components/back/users/UserList.vue").default);
Vue.component("user-profile", __webpack_require__(/*! ./components/back/users/UserProfile.vue */ "./resources/js/components/back/users/UserProfile.vue").default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: "#app"
});

/***/ }),

/***/ "./resources/js/now-ui-dashboard/now-ui-dashboard.js":
/*!***********************************************************!*\
  !*** ./resources/js/now-ui-dashboard/now-ui-dashboard.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!

 =========================================================
 * Now UI Dashboard - v1.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// (function() {
//   isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
//   if (isWindows) {
//     // if we are on windows OS we activate the perfectScrollbar function
//     $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
//     $('html').addClass('perfect-scrollbar-on');
//   } else {
//     $('html').addClass('perfect-scrollbar-off');
//   }
// })();
transparent = true;
transparentDemo = true;
fixedTop = false;
navbar_initialized = false;
backgroundOrange = false;
sidebar_mini_active = false;
toggle_initialized = false;
var is_iPad = navigator.userAgent.match(/iPad/i) != null;
var scrollElement = navigator.platform.indexOf('Win') > -1 ? $('.main-panel') : $(window);
seq = 0, delays = 80, durations = 500;
seq2 = 0, delays2 = 80, durations2 = 500;
$(document).ready(function () {
  if ($('.full-screen-map').length == 0 && $('.bd-docs').length == 0) {
    // On click navbar-collapse the menu will be white not transparent
    $('.collapse').on('show.bs.collapse', function () {
      $(this).closest('.navbar').removeClass('navbar-transparent').addClass('bg-white');
    }).on('hide.bs.collapse', function () {
      $(this).closest('.navbar').addClass('navbar-transparent').removeClass('bg-white');
    });
  }

  nowuiDashboard.initMinimizeSidebar();
  $navbar = $('.navbar[color-on-scroll]');
  scroll_distance = $navbar.attr('color-on-scroll') || 500; // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

  if ($('.navbar[color-on-scroll]').length != 0) {
    nowuiDashboard.checkScrollForTransparentNavbar();
    $(window).on('scroll', nowuiDashboard.checkScrollForTransparentNavbar);
  }

  $('.form-control').on('focus', function () {
    $(this).parent('.input-group').addClass('input-group-focus');
  }).on('blur', function () {
    $(this).parent('.input-group').removeClass('input-group-focus');
  }); // Activate bootstrapSwitch

  $('.bootstrap-switch').each(function () {
    $this = $(this);
    data_on_label = $this.data('on-label') || '';
    data_off_label = $this.data('off-label') || '';
    $this.bootstrapSwitch({
      onText: data_on_label,
      offText: data_off_label
    });
  });
});
$(document).on('click', '.navbar-toggle', function () {
  $toggle = $(this);

  if (nowuiDashboard.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    nowuiDashboard.misc.navbar_menu_visible = 0;
    setTimeout(function () {
      $toggle.removeClass('toggled');
      $('#bodyClick').remove();
    }, 550);
  } else {
    setTimeout(function () {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function () {
      $('html').removeClass('nav-open');
      nowuiDashboard.misc.navbar_menu_visible = 0;
      setTimeout(function () {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    });
    $('html').addClass('nav-open');
    nowuiDashboard.misc.navbar_menu_visible = 1;
  }
});
$(window).resize(function () {
  // reset the seq for charts drawing animations
  seq = seq2 = 0;

  if ($('.full-screen-map').length == 0 && $('.bd-docs').length == 0) {
    $navbar = $('.navbar');
    isExpanded = $('.navbar').find('[data-toggle="collapse"]').attr('aria-expanded');

    if ($navbar.hasClass('bg-white') && $(window).width() > 991) {
      if (scrollElement.scrollTop() == 0) {
        $navbar.removeClass('bg-white').addClass('navbar-transparent');
      }
    } else if ($navbar.hasClass('navbar-transparent') && $(window).width() < 991 && isExpanded != 'false') {
      $navbar.addClass('bg-white').removeClass('navbar-transparent');
    }
  }

  if (is_iPad) {
    $('body').removeClass('sidebar-mini');
  }
});
nowuiDashboard = {
  misc: {
    navbar_menu_visible: 0
  },
  initMinimizeSidebar: function initMinimizeSidebar() {
    if ($('.sidebar-mini').length != 0) {
      sidebar_mini_active = true;
    }

    $('#minimizeSidebar').click(function () {
      var $btn = $(this);

      if (sidebar_mini_active == true) {
        $('body').removeClass('sidebar-mini');
        sidebar_mini_active = false;
        nowuiDashboard.showSidebarMessage('Sidebar mini deactivated...');
      } else {
        $('body').addClass('sidebar-mini');
        sidebar_mini_active = true;
        nowuiDashboard.showSidebarMessage('Sidebar mini activated...');
      } // we simulate the window Resize so the charts will get updated in realtime.


      var simulateWindowResize = setInterval(function () {
        window.dispatchEvent(new Event('resize'));
      }, 180); // we stop the simulation of Window Resize after the animations are completed

      setTimeout(function () {
        clearInterval(simulateWindowResize);
      }, 1000);
    });
  },
  showNotification: function showNotification(data) {
    color = data.color;
    $.notify({
      // icon: "now-ui-icons ui-1_bell-53",
      icon: data.icon,
      message: data.message
    }, {
      type: data.color,
      timer: 8000,
      placement: {
        from: data.from,
        align: data.align
      }
    });
  }
};

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

/***/ }),

/***/ "./resources/js/now-ui-dashboard/plugins/bootstrap-notify.js":
/*!*******************************************************************!*\
  !*** ./resources/js/now-ui-dashboard/plugins/bootstrap-notify.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*



     Creative Tim Modifications

     Lines: 238, 239 was changed from top: 5px to top: 50% and we added margin-top: -13px. In this way the close button will be aligned vertically
     Line:222 - modified when the icon is set, we add the class "alert-with-icon", so there will be enough space for the icon.




*/

/*
 * Project: Bootstrap Notify = v3.1.5
 * Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
 * Author: Mouse0270 aka Robert McIntosh
 * License: MIT License
 * Website: https://github.com/mouse0270/bootstrap-growl
 */

/* global define:false, require: false, jQuery:false */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  // Create the defaults once
  var defaults = {
    element: 'body',
    position: null,
    type: "info",
    allow_dismiss: true,
    allow_duplicates: true,
    newest_on_top: false,
    showProgressbar: false,
    placement: {
      from: "top",
      align: "right"
    },
    offset: 20,
    spacing: 10,
    z_index: 1060,
    delay: 5000,
    timer: 1000,
    url_target: '_blank',
    mouse_over: null,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    onClick: null,
    icon_type: 'class',
    template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="now-ui-icons ui-1_simple-remove"></i></button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
  };

  String.format = function () {
    var args = arguments;
    var str = arguments[0];
    return str.replace(/(\{\{\d\}\}|\{\d\})/g, function (str) {
      if (str.substring(0, 2) === "{{") return str;
      var num = parseInt(str.match(/\d/)[0]);
      return args[num + 1];
    });
  };

  function isDuplicateNotification(notification) {
    var isDupe = false;
    $('[data-notify="container"]').each(function (i, el) {
      var $el = $(el);
      var title = $el.find('[data-notify="title"]').html().trim();
      var message = $el.find('[data-notify="message"]').html().trim(); // The input string might be different than the actual parsed HTML string!
      // (<br> vs <br /> for example)
      // So we have to force-parse this as HTML here!

      var isSameTitle = title === $("<div>" + notification.settings.content.title + "</div>").html().trim();
      var isSameMsg = message === $("<div>" + notification.settings.content.message + "</div>").html().trim();
      var isSameType = $el.hasClass('alert-' + notification.settings.type);

      if (isSameTitle && isSameMsg && isSameType) {
        //we found the dupe. Set the var and stop checking.
        isDupe = true;
      }

      return !isDupe;
    });
    return isDupe;
  }

  function Notify(element, content, options) {
    // Setup Content of Notify
    var contentObj = {
      content: {
        message: _typeof(content) === 'object' ? content.message : content,
        title: content.title ? content.title : '',
        icon: content.icon ? content.icon : '',
        url: content.url ? content.url : '#',
        target: content.target ? content.target : '-'
      }
    };
    options = $.extend(true, {}, contentObj, options);
    this.settings = $.extend(true, {}, defaults, options);
    this._defaults = defaults;

    if (this.settings.content.target === "-") {
      this.settings.content.target = this.settings.url_target;
    }

    this.animations = {
      start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
      end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
    };

    if (typeof this.settings.offset === 'number') {
      this.settings.offset = {
        x: this.settings.offset,
        y: this.settings.offset
      };
    } //if duplicate messages are not allowed, then only continue if this new message is not a duplicate of one that it already showing


    if (this.settings.allow_duplicates || !this.settings.allow_duplicates && !isDuplicateNotification(this)) {
      this.init();
    }
  }

  $.extend(Notify.prototype, {
    init: function init() {
      var self = this;
      this.buildNotify();

      if (this.settings.content.icon) {
        this.setIcon();
      }

      if (this.settings.content.url != "#") {
        this.styleURL();
      }

      this.styleDismiss();
      this.placement();
      this.bind();
      this.notify = {
        $ele: this.$ele,
        update: function update(command, _update) {
          var commands = {};

          if (typeof command === "string") {
            commands[command] = _update;
          } else {
            commands = command;
          }

          for (var cmd in commands) {
            switch (cmd) {
              case "type":
                this.$ele.removeClass('alert-' + self.settings.type);
                this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
                self.settings.type = commands[cmd];
                this.$ele.addClass('alert-' + commands[cmd]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[cmd]);
                break;

              case "icon":
                var $icon = this.$ele.find('[data-notify="icon"]');

                if (self.settings.icon_type.toLowerCase() === 'class') {
                  $icon.removeClass(self.settings.content.icon).addClass(commands[cmd]);
                } else {
                  if (!$icon.is('img')) {
                    $icon.find('img');
                  }

                  $icon.attr('src', commands[cmd]);
                }

                self.settings.content.icon = commands[command];
                break;

              case "progress":
                var newDelay = self.settings.delay - self.settings.delay * (commands[cmd] / 100);
                this.$ele.data('notify-delay', newDelay);
                this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[cmd]).css('width', commands[cmd] + '%');
                break;

              case "url":
                this.$ele.find('[data-notify="url"]').attr('href', commands[cmd]);
                break;

              case "target":
                this.$ele.find('[data-notify="url"]').attr('target', commands[cmd]);
                break;

              default:
                this.$ele.find('[data-notify="' + cmd + '"]').html(commands[cmd]);
            }
          }

          var posX = this.$ele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
          self.reposition(posX);
        },
        close: function close() {
          self.close();
        }
      };
    },
    buildNotify: function buildNotify() {
      var content = this.settings.content;
      this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
      this.$ele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);

      if (!this.settings.allow_dismiss) {
        this.$ele.find('[data-notify="dismiss"]').css('display', 'none');
      }

      if (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) {
        this.$ele.find('[data-notify="progressbar"]').remove();
      }
    },
    setIcon: function setIcon() {
      this.$ele.addClass('alert-with-icon');

      if (this.settings.icon_type.toLowerCase() === 'class') {
        this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon);
      } else {
        if (this.$ele.find('[data-notify="icon"]').is('img')) {
          this.$ele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
        } else {
          this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />');
        }
      }
    },
    styleDismiss: function styleDismiss() {
      this.$ele.find('[data-notify="dismiss"]').css({
        position: 'absolute',
        right: '10px',
        top: '50%',
        marginTop: '-13px',
        zIndex: this.settings.z_index + 2
      });
    },
    styleURL: function styleURL() {
      this.$ele.find('[data-notify="url"]').css({
        backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: this.settings.z_index + 1
      });
    },
    placement: function placement() {
      var self = this,
          offsetAmt = this.settings.offset.y,
          css = {
        display: 'inline-block',
        margin: '0px auto',
        position: this.settings.position ? this.settings.position : this.settings.element === 'body' ? 'fixed' : 'absolute',
        transition: 'all .5s ease-in-out',
        zIndex: this.settings.z_index
      },
          hasAnimation = false,
          settings = this.settings;
      $('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
        offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settings.placement.from)) + parseInt($(this).outerHeight()) + parseInt(settings.spacing));
      });

      if (this.settings.newest_on_top === true) {
        offsetAmt = this.settings.offset.y;
      }

      css[this.settings.placement.from] = offsetAmt + 'px';

      switch (this.settings.placement.align) {
        case "left":
        case "right":
          css[this.settings.placement.align] = this.settings.offset.x + 'px';
          break;

        case "center":
          css.left = 0;
          css.right = 0;
          break;
      }

      this.$ele.css(css).addClass(this.settings.animate.enter);
      $.each(Array('webkit-', 'moz-', 'o-', 'ms-', ''), function (index, prefix) {
        self.$ele[0].style[prefix + 'AnimationIterationCount'] = 1;
      });
      $(this.settings.element).append(this.$ele);

      if (this.settings.newest_on_top === true) {
        offsetAmt = parseInt(offsetAmt) + parseInt(this.settings.spacing) + this.$ele.outerHeight();
        this.reposition(offsetAmt);
      }

      if ($.isFunction(self.settings.onShow)) {
        self.settings.onShow.call(this.$ele);
      }

      this.$ele.one(this.animations.start, function () {
        hasAnimation = true;
      }).one(this.animations.end, function () {
        self.$ele.removeClass(self.settings.animate.enter);

        if ($.isFunction(self.settings.onShown)) {
          self.settings.onShown.call(this);
        }
      });
      setTimeout(function () {
        if (!hasAnimation) {
          if ($.isFunction(self.settings.onShown)) {
            self.settings.onShown.call(this);
          }
        }
      }, 600);
    },
    bind: function bind() {
      var self = this;
      this.$ele.find('[data-notify="dismiss"]').on('click', function () {
        self.close();
      });

      if ($.isFunction(self.settings.onClick)) {
        this.$ele.on('click', function (event) {
          if (event.target != self.$ele.find('[data-notify="dismiss"]')[0]) {
            self.settings.onClick.call(this, event);
          }
        });
      }

      this.$ele.mouseover(function () {
        $(this).data('data-hover', "true");
      }).mouseout(function () {
        $(this).data('data-hover', "false");
      });
      this.$ele.data('data-hover', "false");

      if (this.settings.delay > 0) {
        self.$ele.data('notify-delay', self.settings.delay);
        var timer = setInterval(function () {
          var delay = parseInt(self.$ele.data('notify-delay')) - self.settings.timer;

          if (self.$ele.data('data-hover') === 'false' && self.settings.mouse_over === "pause" || self.settings.mouse_over != "pause") {
            var percent = (self.settings.delay - delay) / self.settings.delay * 100;
            self.$ele.data('notify-delay', delay);
            self.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
          }

          if (delay <= -self.settings.timer) {
            clearInterval(timer);
            self.close();
          }
        }, self.settings.timer);
      }
    },
    close: function close() {
      var self = this,
          posX = parseInt(this.$ele.css(this.settings.placement.from)),
          hasAnimation = false;
      this.$ele.attr('data-closing', 'true').addClass(this.settings.animate.exit);
      self.reposition(posX);

      if ($.isFunction(self.settings.onClose)) {
        self.settings.onClose.call(this.$ele);
      }

      this.$ele.one(this.animations.start, function () {
        hasAnimation = true;
      }).one(this.animations.end, function () {
        $(this).remove();

        if ($.isFunction(self.settings.onClosed)) {
          self.settings.onClosed.call(this);
        }
      });
      setTimeout(function () {
        if (!hasAnimation) {
          self.$ele.remove();

          if (self.settings.onClosed) {
            self.settings.onClosed(self.$ele);
          }
        }
      }, 600);
    },
    reposition: function reposition(posX) {
      var self = this,
          notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
          $elements = this.$ele.nextAll(notifies);

      if (this.settings.newest_on_top === true) {
        $elements = this.$ele.prevAll(notifies);
      }

      $elements.each(function () {
        $(this).css(self.settings.placement.from, posX);
        posX = parseInt(posX) + parseInt(self.settings.spacing) + $(this).outerHeight();
      });
    }
  });

  $.notify = function (content, options) {
    var plugin = new Notify(this, content, options);
    return plugin.notify;
  };

  $.notifyDefaults = function (options) {
    defaults = $.extend(true, {}, defaults, options);
    return defaults;
  };

  $.notifyClose = function (selector) {
    if (typeof selector === "undefined" || selector === "all") {
      $('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
    } else if (selector === 'success' || selector === 'info' || selector === 'warning' || selector === 'danger') {
      $('.alert-' + selector + '[data-notify]').find('[data-notify="dismiss"]').trigger('click');
    } else if (selector) {
      $(selector + '[data-notify]').find('[data-notify="dismiss"]').trigger('click');
    } else {
      $('[data-notify-position="' + selector + '"]').find('[data-notify="dismiss"]').trigger('click');
    }
  };

  $.notifyCloseExcept = function (selector) {
    if (selector === 'success' || selector === 'info' || selector === 'warning' || selector === 'danger') {
      $('[data-notify]').not('.alert-' + selector).find('[data-notify="dismiss"]').trigger('click');
    } else {
      $('[data-notify]').not(selector).find('[data-notify="dismiss"]').trigger('click');
    }
  };
});

/***/ }),

/***/ "./resources/js/now-ui-dashboard/plugins/perfect-scrollbar.jquery.min.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/now-ui-dashboard/plugins/perfect-scrollbar.jquery.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* perfect-scrollbar v0.6.13 */
!function t(e, n, r) {
  function o(i, s) {
    if (!n[i]) {
      if (!e[i]) {
        var a = "function" == typeof require && require;
        if (!s && a) return require(i, !0);
        if (l) return l(i, !0);
        var c = new Error("Cannot find module '" + i + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      var u = n[i] = {
        exports: {}
      };
      e[i][0].call(u.exports, function (t) {
        var n = e[i][1][t];
        return o(n ? n : t);
      }, u, u.exports, t, e, n, r);
    }

    return n[i].exports;
  }

  for (var l = "function" == typeof require && require, i = 0; i < r.length; i++) {
    o(r[i]);
  }

  return o;
}({
  1: [function (t, e, n) {
    "use strict";

    function r(t) {
      t.fn.perfectScrollbar = function (t) {
        return this.each(function () {
          if ("object" == _typeof(t) || "undefined" == typeof t) {
            var e = t;
            l.get(this) || o.initialize(this, e);
          } else {
            var n = t;
            "update" === n ? o.update(this) : "destroy" === n && o.destroy(this);
          }
        });
      };
    }

    var o = t("../main"),
        l = t("../plugin/instances");
    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i; }
    e.exports = r;
  }, {
    "../main": 7,
    "../plugin/instances": 18
  }],
  2: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      var n = t.className.split(" ");
      n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ");
    }

    function o(t, e) {
      var n = t.className.split(" "),
          r = n.indexOf(e);
      r >= 0 && n.splice(r, 1), t.className = n.join(" ");
    }

    n.add = function (t, e) {
      t.classList ? t.classList.add(e) : r(t, e);
    }, n.remove = function (t, e) {
      t.classList ? t.classList.remove(e) : o(t, e);
    }, n.list = function (t) {
      return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ");
    };
  }, {}],
  3: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      return window.getComputedStyle(t)[e];
    }

    function o(t, e, n) {
      return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t;
    }

    function l(t, e) {
      for (var n in e) {
        var r = e[n];
        "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r;
      }

      return t;
    }

    var i = {};
    i.e = function (t, e) {
      var n = document.createElement(t);
      return n.className = e, n;
    }, i.appendTo = function (t, e) {
      return e.appendChild(t), t;
    }, i.css = function (t, e, n) {
      return "object" == _typeof(e) ? l(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n);
    }, i.matches = function (t, e) {
      return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0;
    }, i.remove = function (t) {
      "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
    }, i.queryChildren = function (t, e) {
      return Array.prototype.filter.call(t.childNodes, function (t) {
        return i.matches(t, e);
      });
    }, e.exports = i;
  }, {}],
  4: [function (t, e, n) {
    "use strict";

    var r = function r(t) {
      this.element = t, this.events = {};
    };

    r.prototype.bind = function (t, e) {
      "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1);
    }, r.prototype.unbind = function (t, e) {
      var n = "undefined" != typeof e;
      this.events[t] = this.events[t].filter(function (r) {
        return !(!n || r === e) || (this.element.removeEventListener(t, r, !1), !1);
      }, this);
    }, r.prototype.unbindAll = function () {
      for (var t in this.events) {
        this.unbind(t);
      }
    };

    var o = function o() {
      this.eventElements = [];
    };

    o.prototype.eventElement = function (t) {
      var e = this.eventElements.filter(function (e) {
        return e.element === t;
      })[0];
      return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e;
    }, o.prototype.bind = function (t, e, n) {
      this.eventElement(t).bind(e, n);
    }, o.prototype.unbind = function (t, e, n) {
      this.eventElement(t).unbind(e, n);
    }, o.prototype.unbindAll = function () {
      for (var t = 0; t < this.eventElements.length; t++) {
        this.eventElements[t].unbindAll();
      }
    }, o.prototype.once = function (t, e, n) {
      var r = this.eventElement(t),
          o = function o(t) {
        r.unbind(e, o), n(t);
      };

      r.bind(e, o);
    }, e.exports = o;
  }, {}],
  5: [function (t, e, n) {
    "use strict";

    e.exports = function () {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }

      return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      };
    }();
  }, {}],
  6: [function (t, e, n) {
    "use strict";

    var r = t("./class"),
        o = t("./dom"),
        l = n.toInt = function (t) {
      return parseInt(t, 10) || 0;
    },
        i = n.clone = function (t) {
      if (t) {
        if (t.constructor === Array) return t.map(i);

        if ("object" == _typeof(t)) {
          var e = {};

          for (var n in t) {
            e[n] = i(t[n]);
          }

          return e;
        }

        return t;
      }

      return null;
    };

    n.extend = function (t, e) {
      var n = i(t);

      for (var r in e) {
        n[r] = i(e[r]);
      }

      return n;
    }, n.isEditable = function (t) {
      return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]");
    }, n.removePsClasses = function (t) {
      for (var e = r.list(t), n = 0; n < e.length; n++) {
        var o = e[n];
        0 === o.indexOf("ps-") && r.remove(t, o);
      }
    }, n.outerWidth = function (t) {
      return l(o.css(t, "width")) + l(o.css(t, "paddingLeft")) + l(o.css(t, "paddingRight")) + l(o.css(t, "borderLeftWidth")) + l(o.css(t, "borderRightWidth"));
    }, n.startScrolling = function (t, e) {
      r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"));
    }, n.stopScrolling = function (t, e) {
      r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"));
    }, n.env = {
      isWebKit: "WebkitAppearance" in document.documentElement.style,
      supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      supportsIePointer: null !== window.navigator.msMaxTouchPoints
    };
  }, {
    "./class": 2,
    "./dom": 3
  }],
  7: [function (t, e, n) {
    "use strict";

    var r = t("./plugin/destroy"),
        o = t("./plugin/initialize"),
        l = t("./plugin/update");
    e.exports = {
      initialize: o,
      update: l,
      destroy: r
    };
  }, {
    "./plugin/destroy": 9,
    "./plugin/initialize": 17,
    "./plugin/update": 21
  }],
  8: [function (t, e, n) {
    "use strict";

    e.exports = {
      handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipePropagation: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !1,
      wheelSpeed: 1,
      theme: "default"
    };
  }, {}],
  9: [function (t, e, n) {
    "use strict";

    var r = t("../lib/helper"),
        o = t("../lib/dom"),
        l = t("./instances");

    e.exports = function (t) {
      var e = l.get(t);
      e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), l.remove(t));
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18
  }],
  10: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n(t) {
        return t.getBoundingClientRect();
      }

      var r = function r(t) {
        t.stopPropagation();
      };

      e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function (r) {
        var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
            s = o > e.scrollbarYTop ? 1 : -1;
        i(t, "top", t.scrollTop + s * e.containerHeight), l(t), r.stopPropagation();
      }), e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function (r) {
        var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
            s = o > e.scrollbarXLeft ? 1 : -1;
        i(t, "left", t.scrollLeft + s * e.containerWidth), l(t), r.stopPropagation();
      });
    }

    var o = t("../instances"),
        l = t("../update-geometry"),
        i = t("../update-scroll");

    e.exports = function (t) {
      var e = o.get(t);
      r(t, e);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  11: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n(n) {
        var o = r + n * e.railXRatio,
            i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
        o < 0 ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;
        var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
        c(t, "left", s);
      }

      var r = null,
          o = null,
          s = function s(e) {
        n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault();
      },
          u = function u() {
        l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s);
      };

      e.event.bind(e.scrollbarX, "mousedown", function (n) {
        o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault();
      });
    }

    function o(t, e) {
      function n(n) {
        var o = r + n * e.railYRatio,
            i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
        o < 0 ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;
        var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
        c(t, "top", s);
      }

      var r = null,
          o = null,
          s = function s(e) {
        n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault();
      },
          u = function u() {
        l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s);
      };

      e.event.bind(e.scrollbarY, "mousedown", function (n) {
        o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault();
      });
    }

    var l = t("../../lib/helper"),
        i = t("../../lib/dom"),
        s = t("../instances"),
        a = t("../update-geometry"),
        c = t("../update-scroll");

    e.exports = function (t) {
      var e = s.get(t);
      r(t, e), o(t, e);
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  12: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n(n, r) {
        var o = t.scrollTop;

        if (0 === n) {
          if (!e.scrollbarYActive) return !1;
          if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation;
        }

        var l = t.scrollLeft;

        if (0 === r) {
          if (!e.scrollbarXActive) return !1;
          if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation;
        }

        return !0;
      }

      var r = !1;
      e.event.bind(t, "mouseenter", function () {
        r = !0;
      }), e.event.bind(t, "mouseleave", function () {
        r = !1;
      });
      var i = !1;
      e.event.bind(e.ownerDocument, "keydown", function (c) {
        if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
          var u = l.matches(e.scrollbarX, ":focus") || l.matches(e.scrollbarY, ":focus");

          if (r || u) {
            var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;

            if (d) {
              if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;else for (; d.shadowRoot;) {
                d = d.shadowRoot.activeElement;
              }
              if (o.isEditable(d)) return;
            }

            var p = 0,
                f = 0;

            switch (c.which) {
              case 37:
                p = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
                break;

              case 38:
                f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
                break;

              case 39:
                p = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
                break;

              case 40:
                f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
                break;

              case 33:
                f = 90;
                break;

              case 32:
                f = c.shiftKey ? 90 : -90;
                break;

              case 34:
                f = -90;
                break;

              case 35:
                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                break;

              case 36:
                f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                break;

              default:
                return;
            }

            a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), i = n(p, f), i && c.preventDefault();
          }
        }
      });
    }

    var o = t("../../lib/helper"),
        l = t("../../lib/dom"),
        i = t("../instances"),
        s = t("../update-geometry"),
        a = t("../update-scroll");

    e.exports = function (t) {
      var e = i.get(t);
      r(t, e);
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  13: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n(n, r) {
        var o = t.scrollTop;

        if (0 === n) {
          if (!e.scrollbarYActive) return !1;
          if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation;
        }

        var l = t.scrollLeft;

        if (0 === r) {
          if (!e.scrollbarXActive) return !1;
          if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation;
        }

        return !0;
      }

      function r(t) {
        var e = t.deltaX,
            n = -1 * t.deltaY;
        return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n];
      }

      function o(e, n) {
        var r = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");

        if (r) {
          if (!window.getComputedStyle(r).overflow.match(/(scroll|auto)/)) return !1;
          var o = r.scrollHeight - r.clientHeight;
          if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && n < 0)) return !0;
          var l = r.scrollLeft - r.clientWidth;
          if (l > 0 && !(0 === r.scrollLeft && e < 0 || r.scrollLeft === l && e > 0)) return !0;
        }

        return !1;
      }

      function s(s) {
        var c = r(s),
            u = c[0],
            d = c[1];
        o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed), i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), l(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()));
      }

      var a = !1;
      "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s);
    }

    var o = t("../instances"),
        l = t("../update-geometry"),
        i = t("../update-scroll");

    e.exports = function (t) {
      var e = o.get(t);
      r(t, e);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  14: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      e.event.bind(t, "scroll", function () {
        l(t);
      });
    }

    var o = t("../instances"),
        l = t("../update-geometry");

    e.exports = function (t) {
      var e = o.get(t);
      r(t, e);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19
  }],
  15: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n() {
        var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
        return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer;
      }

      function r() {
        c || (c = setInterval(function () {
          return l.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void i(t)) : void clearInterval(c);
        }, 50));
      }

      function a() {
        c && (clearInterval(c), c = null), o.stopScrolling(t);
      }

      var c = null,
          u = {
        top: 0,
        left: 0
      },
          d = !1;
      e.event.bind(e.ownerDocument, "selectionchange", function () {
        t.contains(n()) ? d = !0 : (d = !1, a());
      }), e.event.bind(window, "mouseup", function () {
        d && (d = !1, a());
      }), e.event.bind(window, "keyup", function () {
        d && (d = !1, a());
      }), e.event.bind(window, "mousemove", function (e) {
        if (d) {
          var n = {
            x: e.pageX,
            y: e.pageY
          },
              l = {
            left: t.offsetLeft,
            right: t.offsetLeft + t.offsetWidth,
            top: t.offsetTop,
            bottom: t.offsetTop + t.offsetHeight
          };
          n.x < l.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > l.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < l.top + 3 ? (l.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > l.bottom - 3 ? (n.y - l.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r();
        }
      });
    }

    var o = t("../../lib/helper"),
        l = t("../instances"),
        i = t("../update-geometry"),
        s = t("../update-scroll");

    e.exports = function (t) {
      var e = l.get(t);
      r(t, e);
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  16: [function (t, e, n) {
    "use strict";

    function r(t, e, n, r) {
      function o(n, r) {
        var o = t.scrollTop,
            l = t.scrollLeft,
            i = Math.abs(n),
            s = Math.abs(r);

        if (s > i) {
          if (r < 0 && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation;
        } else if (i > s && (n < 0 && l === e.contentWidth - e.containerWidth || n > 0 && 0 === l)) return !e.settings.swipePropagation;

        return !0;
      }

      function a(e, n) {
        s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t);
      }

      function c() {
        w = !0;
      }

      function u() {
        w = !1;
      }

      function d(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }

      function p(t) {
        return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE);
      }

      function f(t) {
        if (p(t)) {
          Y = !0;
          var e = d(t);
          g.pageX = e.pageX, g.pageY = e.pageY, v = new Date().getTime(), null !== y && clearInterval(y), t.stopPropagation();
        }
      }

      function h(t) {
        if (!Y && e.settings.swipePropagation && f(t), !w && Y && p(t)) {
          var n = d(t),
              r = {
            pageX: n.pageX,
            pageY: n.pageY
          },
              l = r.pageX - g.pageX,
              i = r.pageY - g.pageY;
          a(l, i), g = r;
          var s = new Date().getTime(),
              c = s - v;
          c > 0 && (m.x = l / c, m.y = i / c, v = s), o(l, i) && (t.stopPropagation(), t.preventDefault());
        }
      }

      function b() {
        !w && Y && (Y = !1, clearInterval(y), y = setInterval(function () {
          return l.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void (m.y *= .8)) : void clearInterval(y);
        }, 10));
      }

      var g = {},
          v = 0,
          m = {},
          y = null,
          w = !1,
          Y = !1;
      n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)), r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)));
    }

    var o = t("../../lib/helper"),
        l = t("../instances"),
        i = t("../update-geometry"),
        s = t("../update-scroll");

    e.exports = function (t) {
      if (o.env.supportsTouch || o.env.supportsIePointer) {
        var e = l.get(t);
        r(t, e, o.env.supportsTouch, o.env.supportsIePointer);
      }
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  17: [function (t, e, n) {
    "use strict";

    var r = t("../lib/helper"),
        o = t("../lib/class"),
        l = t("./instances"),
        i = t("./update-geometry"),
        s = {
      "click-rail": t("./handler/click-rail"),
      "drag-scrollbar": t("./handler/drag-scrollbar"),
      keyboard: t("./handler/keyboard"),
      wheel: t("./handler/mouse-wheel"),
      touch: t("./handler/touch"),
      selection: t("./handler/selection")
    },
        a = t("./handler/native-scroll");

    e.exports = function (t, e) {
      e = "object" == _typeof(e) ? e : {}, o.add(t, "ps-container");
      var n = l.add(t);
      n.settings = r.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function (e) {
        s[e](t);
      }), a(t), i(t);
    };
  }, {
    "../lib/class": 2,
    "../lib/helper": 6,
    "./handler/click-rail": 10,
    "./handler/drag-scrollbar": 11,
    "./handler/keyboard": 12,
    "./handler/mouse-wheel": 13,
    "./handler/native-scroll": 14,
    "./handler/selection": 15,
    "./handler/touch": 16,
    "./instances": 18,
    "./update-geometry": 19
  }],
  18: [function (t, e, n) {
    "use strict";

    function r(t) {
      function e() {
        a.add(t, "ps-focus");
      }

      function n() {
        a.remove(t, "ps-focus");
      }

      var r = this;
      r.settings = s.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function () {
        var e = t.scrollLeft,
            n = null;
        return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n;
      }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d(), r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : s.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = s.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = s.toInt(u.css(r.scrollbarXRail, "marginLeft")) + s.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : s.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? s.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = s.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = s.toInt(u.css(r.scrollbarYRail, "marginTop")) + s.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null;
    }

    function o(t) {
      return t.getAttribute("data-ps-id");
    }

    function l(t, e) {
      t.setAttribute("data-ps-id", e);
    }

    function i(t) {
      t.removeAttribute("data-ps-id");
    }

    var s = t("../lib/helper"),
        a = t("../lib/class"),
        c = t("./default-setting"),
        u = t("../lib/dom"),
        d = t("../lib/event-manager"),
        p = t("../lib/guid"),
        f = {};
    n.add = function (t) {
      var e = p();
      return l(t, e), f[e] = new r(t), f[e];
    }, n.remove = function (t) {
      delete f[o(t)], i(t);
    }, n.get = function (t) {
      return f[o(t)];
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/event-manager": 4,
    "../lib/guid": 5,
    "../lib/helper": 6,
    "./default-setting": 8
  }],
  19: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
    }

    function o(t, e) {
      var n = {
        width: e.railXWidth
      };
      e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);
      var r = {
        top: t.scrollTop,
        height: e.railYHeight
      };
      e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, r), s.css(e.scrollbarX, {
        left: e.scrollbarXLeft,
        width: e.scrollbarXWidth - e.railBorderXWidth
      }), s.css(e.scrollbarY, {
        top: e.scrollbarYTop,
        height: e.scrollbarYHeight - e.railBorderYWidth
      });
    }

    var l = t("../lib/helper"),
        i = t("../lib/class"),
        s = t("../lib/dom"),
        a = t("./instances"),
        c = t("./update-scroll");

    e.exports = function (t) {
      var e = a.get(t);
      e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
      var n;
      t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) {
        s.remove(t);
      }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) {
        s.remove(t);
      }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0));
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-scroll": 20
  }],
  20: [function (t, e, n) {
    "use strict";

    var r,
        o,
        l = t("./instances"),
        i = function i(t) {
      var e = document.createEvent("Event");
      return e.initEvent(t, !0, !0), e;
    };

    e.exports = function (t, e, n) {
      if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
      if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
      if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
      "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(i("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(i("ps-x-reach-start")));
      var s = l.get(t);
      "top" === e && n >= s.contentHeight - s.containerHeight && (n = s.contentHeight - s.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(i("ps-y-reach-end"))), "left" === e && n >= s.contentWidth - s.containerWidth && (n = s.contentWidth - s.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(i("ps-x-reach-end"))), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && n < r && t.dispatchEvent(i("ps-scroll-up")), "top" === e && n > r && t.dispatchEvent(i("ps-scroll-down")), "left" === e && n < o && t.dispatchEvent(i("ps-scroll-left")), "left" === e && n > o && t.dispatchEvent(i("ps-scroll-right")), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(i("ps-scroll-y"))), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(i("ps-scroll-x")));
    };
  }, {
    "./instances": 18
  }],
  21: [function (t, e, n) {
    "use strict";

    var r = t("../lib/helper"),
        o = t("../lib/dom"),
        l = t("./instances"),
        i = t("./update-geometry"),
        s = t("./update-scroll");

    e.exports = function (t) {
      var e = l.get(t);
      e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), i(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""));
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-geometry": 19,
    "./update-scroll": 20
  }]
}, {}, [1]);

/***/ }),

/***/ "./resources/sass/now-ui-dashboard.scss":
/*!**********************************************!*\
  !*** ./resources/sass/now-ui-dashboard.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************!*\
  !*** multi ./resources/js/now-ui-dashboard.back.js ./resources/sass/now-ui-dashboard.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! c:\OSPanel\domains\idea.lv\resources\js\now-ui-dashboard.back.js */"./resources/js/now-ui-dashboard.back.js");
module.exports = __webpack_require__(/*! c:\OSPanel\domains\idea.lv\resources\sass\now-ui-dashboard.scss */"./resources/sass/now-ui-dashboard.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);