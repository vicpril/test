(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/front/front"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/alert/alert.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/alert/alert.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _buttonClose = __webpack_require__(/*! ../button/button-close */ "./node_modules/bootstrap-vue/es/components/button/button-close.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BAlert'; // @vue/component

var _default2 = {
  name: NAME,
  components: {
    BButtonClose: _buttonClose.default
  },
  model: {
    prop: 'show',
    event: 'input'
  },
  props: {
    variant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'variant');
      }
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    dismissLabel: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'dismissLabel');
      }
    },
    show: {
      type: [Boolean, Number],
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      countDownTimerId: null,
      dismissed: false,
      localShow: this.show,
      showClass: this.fade && this.show
    };
  },
  watch: {
    show: function show(newVal) {
      this.showChanged(newVal);
    },
    dismissed: function dismissed(newVal) {
      if (newVal) {
        this.localShow = false;
        this.$emit('dismissed');
      }
    }
  },
  mounted: function mounted() {
    this.showChanged(this.show);
  },
  destroyed
  /* istanbul ignore next */
  : function destroyed() {
    this.clearCounter();
  },
  methods: {
    dismiss: function dismiss() {
      this.clearCounter();

      if (typeof this.show === 'number') {
        this.$emit('dismiss-count-down', 0);
        this.$emit('input', 0);
      } else {
        this.$emit('input', false);
      }

      this.dismissed = true;
    },
    clearCounter: function clearCounter() {
      if (this.countDownTimerId) {
        clearInterval(this.countDownTimerId);
        this.countDownTimerId = null;
      }
    },
    showChanged: function showChanged(show) {
      var _this = this;

      // Reset counter status
      this.clearCounter(); // Reset dismiss status

      this.dismissed = false; // Set localShow state

      this.localShow = Boolean(show); // No timer for boolean values

      if (show === true || show === false || show === null || show === 0) {
        return;
      } // Start counter (ensure we have an integer value)


      var dismissCountDown = parseInt(show, 10) || 1;
      this.countDownTimerId = setInterval(function () {
        if (dismissCountDown < 1) {
          _this.dismiss();

          return;
        }

        dismissCountDown--;

        _this.$emit('dismiss-count-down', dismissCountDown);

        _this.$emit('input', dismissCountDown);
      }, 1000);
    },
    onBeforeEnter: function onBeforeEnter() {
      var _this2 = this;

      if (this.fade) {
        // Add show class one frame after inserted, to make transitions work
        (0, _dom.requestAF)(function () {
          _this2.showClass = true;
        });
      }
    },
    onBeforeLeave: function onBeforeLeave()
    /* istanbul ignore next: does not appear to be called in vue-test-utils */
    {
      this.showClass = false;
    }
  },
  render: function render(h) {
    var $slots = this.$slots;
    var $alert = h(false);

    if (this.localShow) {
      var $dismissBtn = h(false);

      if (this.dismissible) {
        $dismissBtn = h('b-button-close', {
          attrs: {
            'aria-label': this.dismissLabel
          },
          on: {
            click: this.dismiss
          }
        }, [$slots.dismiss]);
      }

      $alert = h('div', {
        staticClass: 'alert',
        class: _defineProperty({
          fade: this.fade,
          show: this.showClass,
          'alert-dismissible': this.dismissible
        }, "alert-".concat(this.variant), this.variant),
        attrs: {
          role: 'alert',
          'aria-live': 'polite',
          'aria-atomic': true
        }
      }, [$dismissBtn, $slots.default]);
      $alert = [$alert];
    }

    return h('transition', {
      props: {
        mode: 'out-in',
        // Disable use of built-in transition classes
        'enter-class': '',
        'enter-active-class': '',
        'enter-to-class': '',
        'leave-class': 'show',
        'leave-active-class': '',
        'leave-to-class': ''
      },
      on: {
        beforeEnter: this.onBeforeEnter,
        beforeLeave: this.onBeforeLeave
      }
    }, $alert);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/alert/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/alert/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _alert = __webpack_require__(/*! ./alert */ "./node_modules/bootstrap-vue/es/components/alert/alert.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BAlert: _alert.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/badge/badge.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/badge/badge.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var _pluckProps = __webpack_require__(/*! ../../utils/pluck-props */ "./node_modules/bootstrap-vue/es/utils/pluck-props.js");

var _link = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BBadge';
var linkProps = (0, _link.propsFactory)();
delete linkProps.href.default;
delete linkProps.to.default;

var props = _objectSpread({}, linkProps, {
  tag: {
    type: String,
    default: 'span'
  },
  variant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'variant');
    }
  },
  pill: {
    type: Boolean,
    default: false
  } // @vue/component

});

exports.props = props;
var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = !props.href && !props.to ? props.tag : _link.default;
    var componentData = {
      staticClass: 'badge',
      class: ["badge-".concat(props.variant || (0, _config.getComponentConfig)(NAME, 'variant')), {
        'badge-pill': Boolean(props.pill),
        active: props.active,
        disabled: props.disabled
      }],
      props: (0, _pluckProps.default)(linkProps, props)
    };
    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/badge/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/badge/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _badge = __webpack_require__(/*! ./badge */ "./node_modules/bootstrap-vue/es/components/badge/badge.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BBadge: _badge.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb-item.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb-item.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _breadcrumbLink = __webpack_require__(/*! ./breadcrumb-link */ "./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb-link.js");

// @vue/component
var _default = {
  name: 'BBreadcrumbItem',
  functional: true,
  props: _breadcrumbLink.props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('li', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'breadcrumb-item',
      class: {
        active: props.active
      },
      attrs: {
        role: 'presentation'
      }
    }), [h(_breadcrumbLink.default, {
      props: props
    }, children)]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb-link.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb-link.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _pluckProps = __webpack_require__(/*! ../../utils/pluck-props */ "./node_modules/bootstrap-vue/es/utils/pluck-props.js");

var _link = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = _objectSpread({}, (0, _link.propsFactory)(), {
  text: {
    type: String,
    default: null
  },
  html: {
    type: String,
    default: null
  },
  ariaCurrent: {
    type: String,
    default: 'location'
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BBreadcrumbLink',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var suppliedProps = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = suppliedProps.active ? 'span' : _link.default;
    var componentData = {
      props: (0, _pluckProps.default)(props, suppliedProps)
    };

    if (suppliedProps.active) {
      componentData.attrs = {
        'aria-current': suppliedProps.ariaCurrent
      };
    }

    if (!children) {
      componentData.domProps = (0, _html.htmlOrText)(suppliedProps.html, suppliedProps.text);
    }

    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _toString = __webpack_require__(/*! ../../utils/to-string */ "./node_modules/bootstrap-vue/es/utils/to-string.js");

var _breadcrumbItem = __webpack_require__(/*! ./breadcrumb-item */ "./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb-item.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var props = {
  items: {
    type: Array,
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BBreadcrumb',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var childNodes = children; // Build child nodes from items if given.

    if ((0, _array.isArray)(props.items)) {
      var activeDefined = false;
      childNodes = props.items.map(function (item, idx) {
        if (_typeof(item) !== 'object') {
          item = {
            text: (0, _toString.default)(item)
          };
        } // Copy the value here so we can normalize it.


        var active = item.active;

        if (active) {
          activeDefined = true;
        }

        if (!active && !activeDefined) {
          // Auto-detect active by position in list.
          active = idx + 1 === props.items.length;
        }

        return h(_breadcrumbItem.default, {
          props: _objectSpread({}, item, {
            active: active
          })
        });
      });
    }

    return h('ol', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'breadcrumb'
    }), childNodes);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/breadcrumb/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/breadcrumb/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _breadcrumb = __webpack_require__(/*! ./breadcrumb */ "./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb.js");

var _breadcrumbItem = __webpack_require__(/*! ./breadcrumb-item */ "./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb-item.js");

var _breadcrumbLink = __webpack_require__(/*! ./breadcrumb-link */ "./node_modules/bootstrap-vue/es/components/breadcrumb/breadcrumb-link.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BBreadcrumb: _breadcrumb.default,
  BBreadcrumbItem: _breadcrumbItem.default,
  BBreadcrumbLink: _breadcrumbLink.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/button-group/button-group.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/button-group/button-group.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  vertical: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  ariaRole: {
    type: String,
    default: 'group'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BButtonGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: _defineProperty({
        'btn-group': !props.vertical,
        'btn-group-vertical': props.vertical
      }, "btn-group-".concat(props.size), Boolean(props.size)),
      attrs: {
        role: props.ariaRole
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/button-group/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/button-group/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _buttonGroup = __webpack_require__(/*! ./button-group */ "./node_modules/bootstrap-vue/es/components/button-group/button-group.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BButtonGroup: _buttonGroup.default,
  BBtnGroup: _buttonGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/button-toolbar/button-toolbar.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/button-toolbar/button-toolbar.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _keyCodes = __webpack_require__(/*! ../../utils/key-codes */ "./node_modules/bootstrap-vue/es/utils/key-codes.js");

var ITEM_SELECTOR = ['.btn:not(.disabled):not([disabled]):not(.dropdown-item)', '.form-control:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(','); // @vue/component

var _default = {
  name: 'BButtonToolbar',
  props: {
    justify: {
      type: Boolean,
      default: false
    },
    keyNav: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    if (this.keyNav) {
      // Pre-set the tabindexes if the markup does not include tabindex="-1" on the toolbar items
      this.getItems();
    }
  },
  methods: {
    onFocusin: function onFocusin(evt) {
      if (evt.target === this.$el) {
        evt.preventDefault();
        evt.stopPropagation();
        this.focusFirst(evt);
      }
    },
    stop: function stop(evt) {
      evt.preventDefault();
      evt.stopPropagation();
    },
    onKeydown: function onKeydown(evt) {
      if (!this.keyNav) {
        /* istanbul ignore next: should never happen */
        return;
      }

      var key = evt.keyCode;
      var shift = evt.shiftKey;

      if (key === _keyCodes.default.UP || key === _keyCodes.default.LEFT) {
        this.stop(evt);
        shift ? this.focusFirst(evt) : this.focusPrev(evt);
      } else if (key === _keyCodes.default.DOWN || key === _keyCodes.default.RIGHT) {
        this.stop(evt);
        shift ? this.focusLast(evt) : this.focusNext(evt);
      }
    },
    setItemFocus: function setItemFocus(item) {
      item && item.focus && item.focus();
    },
    focusFirst: function focusFirst(evt) {
      var items = this.getItems();
      this.setItemFocus(items[0]);
    },
    focusPrev: function focusPrev(evt) {
      var items = this.getItems();
      var index = items.indexOf(evt.target);

      if (index > -1) {
        items = items.slice(0, index).reverse();
        this.setItemFocus(items[0]);
      }
    },
    focusNext: function focusNext(evt) {
      var items = this.getItems();
      var index = items.indexOf(evt.target);

      if (index > -1) {
        items = items.slice(index + 1);
        this.setItemFocus(items[0]);
      }
    },
    focusLast: function focusLast(evt) {
      var items = this.getItems().reverse();
      this.setItemFocus(items[0]);
    },
    getItems: function getItems() {
      var items = (0, _dom.selectAll)(ITEM_SELECTOR, this.$el);
      items.forEach(function (item) {
        // Ensure tabfocus is -1 on any new elements
        item.tabIndex = -1;
      });
      return items.filter(function (el) {
        return (0, _dom.isVisible)(el);
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'btn-toolbar',
      class: {
        'justify-content-between': this.justify
      },
      attrs: {
        role: 'toolbar',
        tabindex: this.keyNav ? '0' : null
      },
      on: this.keyNav ? {
        focusin: this.onFocusin,
        keydown: this.onKeydown
      } : {}
    }, [this.$slots.default]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/button-toolbar/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/button-toolbar/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _buttonToolbar = __webpack_require__(/*! ./button-toolbar */ "./node_modules/bootstrap-vue/es/components/button-toolbar/button-toolbar.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BButtonToolbar: _buttonToolbar.default,
  BBtnToolbar: _buttonToolbar.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/button/button-close.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/button/button-close.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BButtonClose';
var props = {
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'ariaLabel');
    }
  },
  textVariant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'textVariant');
    }
  } // @vue/component

};
var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        slots = _ref.slots;
    var componentData = {
      staticClass: 'close',
      class: _defineProperty({}, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        type: 'button',
        disabled: props.disabled,
        'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click: function click(e) {
          // Ensure click on button HTML content is also disabled

          /* istanbul ignore if: bug in JSDOM still emits click on inner element */
          if (props.disabled && e instanceof Event) {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      } // Careful not to override the default slot with innerHTML

    };

    if (!slots().default) {
      componentData.domProps = {
        innerHTML: '&times;'
      };
    }

    return h('button', (0, _vueFunctionalDataMerge.mergeData)(data, componentData), slots().default);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/button/button.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/button/button.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var _pluckProps = __webpack_require__(/*! ../../utils/pluck-props */ "./node_modules/bootstrap-vue/es/utils/pluck-props.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _link = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BButton';
var btnProps = {
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null
  },
  variant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'variant');
    }
  },
  type: {
    type: String,
    default: 'button'
  },
  tag: {
    type: String,
    default: 'button'
  },
  pressed: {
    // tri-state prop: true, false or null
    // => on, off, not a toggle
    type: Boolean,
    default: null
  }
};
var linkProps = (0, _link.propsFactory)();
delete linkProps.href.default;
delete linkProps.to.default;
var linkPropKeys = (0, _object.keys)(linkProps);

var props = _objectSpread({}, linkProps, btnProps); // Focus handler for toggle buttons.  Needs class of 'focus' when focused.


exports.props = props;

function handleFocus(evt) {
  if (evt.type === 'focusin') {
    (0, _dom.addClass)(evt.target, 'focus');
  } else if (evt.type === 'focusout') {
    (0, _dom.removeClass)(evt.target, 'focus');
  }
} // Helper functons to minimize runtime memory footprint when lots of buttons on page
// Is the requested button a link?


function isLink(props) {
  // If tag prop is set to `a`, we use a b-link to get proper disabled handling
  return Boolean(props.href || props.to || props.tag && String(props.tag).toLowerCase() === 'a');
} // Is the button to be a toggle button?


function isToggle(props) {
  return typeof props.pressed === 'boolean';
} // Is the button "really" a button?


function isButton(props) {
  if (isLink(props)) {
    return false;
  } else if (props.tag && String(props.tag).toLowerCase() !== 'button') {
    return false;
  }

  return true;
} // Is the requested tag not a button or link?


function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
} // Compute required classes (non static classes)


function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || (0, _config.getComponentConfig)(NAME, 'variant')), (_ref = {}, _defineProperty(_ref, "btn-".concat(props.size), Boolean(props.size)), _defineProperty(_ref, 'btn-block', props.block), _defineProperty(_ref, "disabled", props.disabled), _defineProperty(_ref, "active", props.pressed), _ref)];
} // Compute the link props to pass to b-link (if required)


function computeLinkProps(props) {
  return isLink(props) ? (0, _pluckProps.default)(linkPropKeys, props) : null;
} // Compute the attributes for a button


function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = isToggle(props);
  var nonStdTag = isNonStandardTag(props);
  var role = data.attrs && data.attrs['role'] ? data.attrs['role'] : null;
  var tabindex = data.attrs ? data.attrs['tabindex'] : null;

  if (nonStdTag) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA.
    // Don't bork any role provided in data.attrs when isLink or isButton
    role: nonStdTag ? 'button' : role,
    // We set the aria-disabled state for non-standard tags
    'aria-disabled': nonStdTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // autocomplete off is needed in toggle mode to prevent some browsers from
    // remembering the previous setting when using the back button.
    autocomplete: toggle ? 'off' : null,
    // Tab index is used when the component is not a button.
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a tabindex of '0' to non buttons or non links.
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
} // @vue/component


var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var link = isLink(props);
    var on = {
      click: function click(e) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && e instanceof Event) {
          e.stopPropagation();
          e.preventDefault();
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send .sync updates to any "pressed" prop (if .sync listeners)
          // Concat will normalize the value to an array
          // without double wrapping an array value in an array.
          (0, _array.concat)(listeners['update:pressed']).forEach(function (fn) {
            if (typeof fn === 'function') {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? _link.default : props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/button/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/button/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _button = __webpack_require__(/*! ./button */ "./node_modules/bootstrap-vue/es/components/button/button.js");

var _buttonClose = __webpack_require__(/*! ./button-close */ "./node_modules/bootstrap-vue/es/components/button/button-close.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BButton: _button.default,
  BBtn: _button.default,
  BButtonClose: _buttonClose.default,
  BBtnClose: _buttonClose.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card-body.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card-body.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _prefixPropName = __webpack_require__(/*! ../../utils/prefix-prop-name */ "./node_modules/bootstrap-vue/es/utils/prefix-prop-name.js");

var _copyProps = __webpack_require__(/*! ../../utils/copy-props */ "./node_modules/bootstrap-vue/es/utils/copy-props.js");

var _pluckProps = __webpack_require__(/*! ../../utils/pluck-props */ "./node_modules/bootstrap-vue/es/utils/pluck-props.js");

var _cardMixin = __webpack_require__(/*! ../../mixins/card-mixin */ "./node_modules/bootstrap-vue/es/mixins/card-mixin.js");

var _cardTitle = __webpack_require__(/*! ./card-title */ "./node_modules/bootstrap-vue/es/components/card/card-title.js");

var _cardSubTitle = __webpack_require__(/*! ./card-sub-title */ "./node_modules/bootstrap-vue/es/components/card/card-sub-title.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = _objectSpread({}, (0, _copyProps.default)(_cardMixin.default.props, _prefixPropName.default.bind(null, 'body')), {
  bodyClass: {
    type: [String, Object, Array],
    default: null
  }
}, _cardTitle.props, _cardSubTitle.props, {
  overlay: {
    type: Boolean,
    default: false
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCardBody',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var cardTitle = h(false);
    var cardSubTitle = h(false);
    var cardContent = children || [h(false)];

    if (props.title) {
      cardTitle = h(_cardTitle.default, {
        props: (0, _pluckProps.default)(_cardTitle.props, props)
      });
    }

    if (props.subTitle) {
      cardSubTitle = h(_cardSubTitle.default, {
        props: (0, _pluckProps.default)(_cardSubTitle.props, props),
        class: ['mb-2']
      });
    }

    return h(props.bodyTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-body',
      class: [(_ref2 = {
        'card-img-overlay': props.overlay
      }, _defineProperty(_ref2, "bg-".concat(props.bodyBgVariant), Boolean(props.bodyBgVariant)), _defineProperty(_ref2, "border-".concat(props.bodyBorderVariant), Boolean(props.bodyBorderVariant)), _defineProperty(_ref2, "text-".concat(props.bodyTextVariant), Boolean(props.bodyTextVariant)), _ref2), props.bodyClass || {}]
    }), [cardTitle, cardSubTitle].concat(_toConsumableArray(cardContent)));
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card-footer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card-footer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _prefixPropName = __webpack_require__(/*! ../../utils/prefix-prop-name */ "./node_modules/bootstrap-vue/es/utils/prefix-prop-name.js");

var _copyProps = __webpack_require__(/*! ../../utils/copy-props */ "./node_modules/bootstrap-vue/es/utils/copy-props.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

var _cardMixin = __webpack_require__(/*! ../../mixins/card-mixin */ "./node_modules/bootstrap-vue/es/mixins/card-mixin.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = _objectSpread({}, (0, _copyProps.default)(_cardMixin.default.props, _prefixPropName.default.bind(null, 'footer')), {
  footer: {
    type: String,
    default: null
  },
  footerHtml: {
    type: String,
    default: null
  },
  footerClass: {
    type: [String, Object, Array],
    default: null
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCardFooter',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.footerTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-footer',
      class: [props.footerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(props.footerBgVariant), Boolean(props.footerBgVariant)), _defineProperty(_ref2, "border-".concat(props.footerBorderVariant), Boolean(props.footerBorderVariant)), _defineProperty(_ref2, "text-".concat(props.footerTextVariant), Boolean(props.footerTextVariant)), _ref2)]
    }), children || [h('div', {
      domProps: (0, _html.htmlOrText)(props.footerHtml, props.footer)
    })]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card-group.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card-group.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  deck: {
    type: Boolean,
    default: false
  },
  columns: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BCardGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var baseClass = 'card-group';

    if (props.deck) {
      baseClass = 'card-deck';
    } else if (props.columns) {
      baseClass = 'card-columns';
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: baseClass
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card-header.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card-header.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _prefixPropName = __webpack_require__(/*! ../../utils/prefix-prop-name */ "./node_modules/bootstrap-vue/es/utils/prefix-prop-name.js");

var _copyProps = __webpack_require__(/*! ../../utils/copy-props */ "./node_modules/bootstrap-vue/es/utils/copy-props.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

var _cardMixin = __webpack_require__(/*! ../../mixins/card-mixin */ "./node_modules/bootstrap-vue/es/mixins/card-mixin.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = _objectSpread({}, (0, _copyProps.default)(_cardMixin.default.props, _prefixPropName.default.bind(null, 'header')), {
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerClass: {
    type: [String, Object, Array],
    default: null
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCardHeader',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.headerTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-header',
      class: [props.headerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(props.headerBgVariant), Boolean(props.headerBgVariant)), _defineProperty(_ref2, "border-".concat(props.headerBorderVariant), Boolean(props.headerBorderVariant)), _defineProperty(_ref2, "text-".concat(props.headerTextVariant), Boolean(props.headerTextVariant)), _ref2)]
    }), children || [h('div', {
      domProps: (0, _html.htmlOrText)(props.headerHtml, props.header)
    })]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card-img-lazy.js":
/*!************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card-img-lazy.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _imgLazy = __webpack_require__(/*! ../image/img-lazy */ "./node_modules/bootstrap-vue/es/components/image/img-lazy.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copy of `<b-img-lazy>` props, and remove conflicting/non-applicable props
// The `omit()` util creates a new object, so we can just pass the original props
var lazyProps = (0, _object.omit)(_imgLazy.default.props, ['left', 'right', 'center', 'block', 'rounded', 'thumbnail', 'fluid', 'fluidGrow']);

var props = _objectSpread({}, lazyProps, {
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  start: {
    type: Boolean,
    default: false // alias of 'left'

  },
  right: {
    type: Boolean,
    default: false
  },
  end: {
    type: Boolean,
    default: false // alias of 'right'

  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCardImgLazy',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var baseClass = 'card-img';

    if (props.top) {
      baseClass += '-top';
    } else if (props.right || props.end) {
      baseClass += '-right';
    } else if (props.bottom) {
      baseClass += '-bottom';
    } else if (props.left || props.start) {
      baseClass += '-left';
    } // False out the left/center/right props before passing to b-img-lazy


    var lazyProps = _objectSpread({}, props, {
      left: false,
      right: false,
      center: false
    });

    return h(_imgLazy.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: [baseClass],
      props: lazyProps
    }));
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card-img.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card-img.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  src: {
    type: String,
    default: null,
    required: true
  },
  alt: {
    type: String,
    default: null
  },
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  start: {
    type: Boolean,
    default: false // alias of 'left'

  },
  right: {
    type: Boolean,
    default: false
  },
  end: {
    type: Boolean,
    default: false // alias of 'right'

  },
  height: {
    type: String,
    default: null
  },
  width: {
    type: String,
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BCardImg',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var baseClass = 'card-img';

    if (props.top) {
      baseClass += '-top';
    } else if (props.right || props.end) {
      baseClass += '-right';
    } else if (props.bottom) {
      baseClass += '-bottom';
    } else if (props.left || props.start) {
      baseClass += '-left';
    }

    return h('img', (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: [baseClass],
      attrs: {
        src: props.src,
        alt: props.alt,
        height: props.height,
        width: props.width
      }
    }));
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card-sub-title.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card-sub-title.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var NAME = 'BCardSubTitle';
var props = {
  subTitle: {
    type: String,
    default: ''
  },
  subTitleTag: {
    type: String,
    default: 'h6'
  },
  subTitleTextVariant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'subTitleTextVariant');
    }
  } // @vue/component

};
exports.props = props;
var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.subTitleTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-subtitle',
      class: [props.subTitleTextVariant ? "text-".concat(props.subTitleTextVariant) : null]
    }), children || props.subTitle);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card-text.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card-text.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  textTag: {
    type: String,
    default: 'p'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BCardText',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.textTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-text'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card-title.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card-title.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  title: {
    type: String,
    default: ''
  },
  titleTag: {
    type: String,
    default: 'h4'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BCardTitle',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.titleTag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card-title'
    }), children || props.title);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/card.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/card.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _prefixPropName = __webpack_require__(/*! ../../utils/prefix-prop-name */ "./node_modules/bootstrap-vue/es/utils/prefix-prop-name.js");

var _unprefixPropName = __webpack_require__(/*! ../../utils/unprefix-prop-name */ "./node_modules/bootstrap-vue/es/utils/unprefix-prop-name.js");

var _copyProps = __webpack_require__(/*! ../../utils/copy-props */ "./node_modules/bootstrap-vue/es/utils/copy-props.js");

var _pluckProps = __webpack_require__(/*! ../../utils/pluck-props */ "./node_modules/bootstrap-vue/es/utils/pluck-props.js");

var _cardMixin = __webpack_require__(/*! ../../mixins/card-mixin */ "./node_modules/bootstrap-vue/es/mixins/card-mixin.js");

var _cardBody = __webpack_require__(/*! ./card-body */ "./node_modules/bootstrap-vue/es/components/card/card-body.js");

var _cardHeader = __webpack_require__(/*! ./card-header */ "./node_modules/bootstrap-vue/es/components/card/card-header.js");

var _cardFooter = __webpack_require__(/*! ./card-footer */ "./node_modules/bootstrap-vue/es/components/card/card-footer.js");

var _cardImg = __webpack_require__(/*! ./card-img */ "./node_modules/bootstrap-vue/es/components/card/card-img.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cardImgProps = (0, _copyProps.default)(_cardImg.props, _prefixPropName.default.bind(null, 'img'));
cardImgProps.imgSrc.required = false;

var props = _objectSpread({}, _cardBody.props, _cardHeader.props, _cardFooter.props, cardImgProps, (0, _copyProps.default)(_cardMixin.default.props), {
  align: {
    type: String,
    default: null
  },
  noBody: {
    type: Boolean,
    default: false
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BCard',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var $slots = slots(); // Create placeholder elements for each section

    var imgFirst = h(false);
    var header = h(false);
    var content = h(false);
    var footer = h(false);
    var imgLast = h(false);

    if (props.imgSrc) {
      var img = h(_cardImg.default, {
        props: (0, _pluckProps.default)(cardImgProps, props, _unprefixPropName.default.bind(null, 'img'))
      });

      if (props.imgBottom) {
        imgLast = img;
      } else {
        imgFirst = img;
      }
    }

    if (props.header || $slots.header) {
      header = h(_cardHeader.default, {
        props: (0, _pluckProps.default)(_cardHeader.props, props)
      }, $slots.header);
    }

    if (props.noBody) {
      content = $slots.default || [];
    } else {
      // Wrap content in card-body
      content = [h(_cardBody.default, {
        props: (0, _pluckProps.default)(_cardBody.props, props)
      }, $slots.default)];
    }

    if (props.footer || $slots.footer) {
      footer = h(_cardFooter.default, {
        props: (0, _pluckProps.default)(_cardFooter.props, props)
      }, $slots.footer);
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'card',
      class: (_class = {
        'flex-row': props.imgLeft || props.imgStart,
        'flex-row-reverse': (props.imgRight || props.imgEnd) && !(props.imgLeft || props.imgStart)
      }, _defineProperty(_class, "text-".concat(props.align), Boolean(props.align)), _defineProperty(_class, "bg-".concat(props.bgVariant), Boolean(props.bgVariant)), _defineProperty(_class, "border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_class, "text-".concat(props.textVariant), Boolean(props.textVariant)), _class)
    }), [imgFirst, header].concat(_toConsumableArray(content), [footer, imgLast]));
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/card/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/card/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _card = __webpack_require__(/*! ./card */ "./node_modules/bootstrap-vue/es/components/card/card.js");

var _cardHeader = __webpack_require__(/*! ./card-header */ "./node_modules/bootstrap-vue/es/components/card/card-header.js");

var _cardBody = __webpack_require__(/*! ./card-body */ "./node_modules/bootstrap-vue/es/components/card/card-body.js");

var _cardTitle = __webpack_require__(/*! ./card-title */ "./node_modules/bootstrap-vue/es/components/card/card-title.js");

var _cardSubTitle = __webpack_require__(/*! ./card-sub-title */ "./node_modules/bootstrap-vue/es/components/card/card-sub-title.js");

var _cardFooter = __webpack_require__(/*! ./card-footer */ "./node_modules/bootstrap-vue/es/components/card/card-footer.js");

var _cardImg = __webpack_require__(/*! ./card-img */ "./node_modules/bootstrap-vue/es/components/card/card-img.js");

var _cardImgLazy = __webpack_require__(/*! ./card-img-lazy */ "./node_modules/bootstrap-vue/es/components/card/card-img-lazy.js");

var _cardText = __webpack_require__(/*! ./card-text */ "./node_modules/bootstrap-vue/es/components/card/card-text.js");

var _cardGroup = __webpack_require__(/*! ./card-group */ "./node_modules/bootstrap-vue/es/components/card/card-group.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BCard: _card.default,
  BCardHeader: _cardHeader.default,
  BCardBody: _cardBody.default,
  BCardTitle: _cardTitle.default,
  BCardSubTitle: _cardSubTitle.default,
  BCardFooter: _cardFooter.default,
  BCardImg: _cardImg.default,
  BCardImgLazy: _cardImgLazy.default,
  BCardText: _cardText.default,
  BCardGroup: _cardGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/carousel/carousel-slide.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/carousel/carousel-slide.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _img = __webpack_require__(/*! ../image/img */ "./node_modules/bootstrap-vue/es/components/image/img.js");

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _env = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/es/utils/env.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

// @vue/component
var _default2 = {
  name: 'BCarouselSlide',
  components: {
    BImg: _img.default
  },
  mixins: [_id.default],
  inject: {
    bvCarousel: {
      default: function _default() {
        return {
          // Explicitly disable touch if not a child of carousel
          noTouch: true
        };
      }
    }
  },
  props: {
    imgSrc: {
      type: String // default: undefined

    },
    imgAlt: {
      type: String // default: undefined

    },
    imgWidth: {
      type: [Number, String] // default: undefined

    },
    imgHeight: {
      type: [Number, String] // default: undefined

    },
    imgBlank: {
      type: Boolean,
      default: false
    },
    imgBlankColor: {
      type: String,
      default: 'transparent'
    },
    contentVisibleUp: {
      type: String
    },
    contentTag: {
      type: String,
      default: 'div'
    },
    caption: {
      type: String
    },
    captionHtml: {
      type: String
    },
    captionTag: {
      type: String,
      default: 'h3'
    },
    text: {
      type: String
    },
    textHtml: {
      type: String
    },
    textTag: {
      type: String,
      default: 'p'
    },
    background: {
      type: String
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    contentClasses: function contentClasses() {
      return [this.contentVisibleUp ? 'd-none' : '', this.contentVisibleUp ? "d-".concat(this.contentVisibleUp, "-block") : ''];
    },
    computedWidth: function computedWidth() {
      // Use local width, or try parent width
      return this.imgWidth || this.bvCarousel.imgWidth || null;
    },
    computedHeight: function computedHeight() {
      // Use local height, or try parent height
      return this.imgHeight || this.bvCarousel.imgHeight || null;
    }
  },
  render: function render(h) {
    var $slots = this.$slots;
    var noDrag = !this.bvCarousel.noTouch && _env.hasTouchSupport;
    var img = $slots.img;

    if (!img && (this.imgSrc || this.imgBlank)) {
      img = h('b-img', {
        props: {
          fluidGrow: true,
          block: true,
          src: this.imgSrc,
          blank: this.imgBlank,
          blankColor: this.imgBlankColor,
          width: this.computedWidth,
          height: this.computedHeight,
          alt: this.imgAlt
        },
        // Touch support event handler
        on: noDrag ? {
          dragstart: function dragstart(e) {
            /* istanbul ignore next: difficult to test in JSDOM */
            e.preventDefault();
          }
        } : {}
      });
    }

    if (!img) {
      img = h(false);
    }

    var content = h(this.contentTag, {
      staticClass: 'carousel-caption',
      class: this.contentClasses
    }, [this.caption || this.captionHtml ? h(this.captionTag, {
      domProps: (0, _html.htmlOrText)(this.captionHtml, this.caption)
    }) : h(false), this.text || this.textHtml ? h(this.textTag, {
      domProps: (0, _html.htmlOrText)(this.textHtml, this.text)
    }) : h(false), $slots.default]);
    return h('div', {
      staticClass: 'carousel-item',
      style: {
        background: this.background || this.bvCarousel.background || null
      },
      attrs: {
        id: this.safeId(),
        role: 'listitem'
      }
    }, [img, content]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/carousel/carousel.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/carousel/carousel.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _observeDom = __webpack_require__(/*! ../../utils/observe-dom */ "./node_modules/bootstrap-vue/es/utils/observe-dom.js");

var _keyCodes = __webpack_require__(/*! ../../utils/key-codes */ "./node_modules/bootstrap-vue/es/utils/key-codes.js");

var _noop = __webpack_require__(/*! ../../utils/noop */ "./node_modules/bootstrap-vue/es/utils/noop.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _env = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/es/utils/env.js");

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

// Slide directional classes
var DIRECTION = {
  next: {
    dirClass: 'carousel-item-left',
    overlayClass: 'carousel-item-next'
  },
  prev: {
    dirClass: 'carousel-item-right',
    overlayClass: 'carousel-item-prev'
  } // Fallback Transition duration (with a little buffer) in ms

};
var TRANS_DURATION = 600 + 50; // Time for mouse compat events to fire after touch

var TOUCH_EVENT_COMPAT_WAIT = 500; // Number of pixels to consider touch move a swipe

var SWIPE_THRESHOLD = 40; // PointerEvent pointer types

var PointerType = {
  TOUCH: 'touch',
  PEN: 'pen' // Transition Event names

};
var TransitionEndEvents = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend oTransitionEnd',
  transition: 'transitionend'
};
var EventOptions = {
  passive: true,
  capture: false // Return the browser specific transitionEnd event name

};

function getTransitionEndEvent(el) {
  for (var name in TransitionEndEvents) {
    if (el.style[name] !== undefined) {
      return TransitionEndEvents[name];
    }
  } // fallback

  /* istanbul ignore next */


  return null;
} // @vue/component


var _default = {
  name: 'BCarousel',
  mixins: [_id.default],
  provide: function provide() {
    return {
      bvCarousel: this
    };
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    labelPrev: {
      type: String,
      default: 'Previous Slide'
    },
    labelNext: {
      type: String,
      default: 'Next Slide'
    },
    labelGotoSlide: {
      type: String,
      default: 'Goto Slide'
    },
    labelIndicators: {
      type: String,
      default: 'Select a slide to display'
    },
    interval: {
      type: Number,
      default: 5000
    },
    indicators: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: false
    },
    noAnimation: {
      // Disable slide/fade animation
      type: Boolean,
      default: false
    },
    fade: {
      // Enable cross-fade animation instead of slide animation
      type: Boolean,
      default: false
    },
    noTouch: {
      // Sniffed by carousel-slide
      type: Boolean,
      default: false
    },
    noHoverPause: {
      // Disable pause on hover
      type: Boolean,
      default: false
    },
    imgWidth: {
      // Sniffed by carousel-slide
      type: [Number, String] // default: undefined

    },
    imgHeight: {
      // Sniffed by carousel-slide
      type: [Number, String] // default: undefined

    },
    background: {
      type: String // default: undefined

    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      index: this.value || 0,
      isSliding: false,
      transitionEndEvent: null,
      slides: [],
      direction: null,
      isPaused: !(parseInt(this.interval, 10) > 0),
      // Touch event handling values
      touchStartX: 0,
      touchDeltaX: 0
    };
  },
  watch: {
    value: function value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.setSlide(newVal);
      }
    },
    interval: function interval(newVal, oldVal) {
      if (newVal === oldVal) {
        /* istanbul ignore next */
        return;
      }

      if (!newVal) {
        // Pausing slide show
        this.pause(false);
      } else {
        // Restarting or Changing interval
        this.pause(true);
        this.start(false);
      }
    },
    isPaused: function isPaused(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit(newVal ? 'paused' : 'unpaused');
      }
    },
    index: function index(to, from) {
      if (to === from || this.isSliding) {
        /* istanbul ignore next */
        return;
      }

      this.doSlide(to, from);
    }
  },
  created: function created() {
    // Create private non-reactive props
    this._intervalId = null;
    this._animationTimeout = null;
    this._touchTimeout = null; // Set initial paused state

    this.isPaused = !(parseInt(this.interval, 10) > 0);
  },
  mounted: function mounted() {
    // Cache current browser transitionend event name
    this.transitionEndEvent = getTransitionEndEvent(this.$el) || null; // Get all slides

    this.updateSlides(); // Observe child changes so we can update slide list

    (0, _observeDom.default)(this.$refs.inner, this.updateSlides.bind(this), {
      subtree: false,
      childList: true,
      attributes: true,
      attributeFilter: ['id']
    });
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next: difficult to test */
  {
    clearTimeout(this._animationTimeout);
    clearTimeout(this._touchTimeout);
    clearInterval(this._intervalId);
    this._intervalId = null;
    this._animationTimeout = null;
    this._touchTimeout = null;
  },
  methods: {
    // Set slide
    setSlide: function setSlide(slide) {
      var _this = this;

      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Don't animate when page is not visible

      /* istanbul ignore if: difficult to test */
      if (_env.inBrowser && document.visibilityState && document.hidden) {
        return;
      }

      var len = this.slides.length; // Don't do anything if nothing to slide to

      if (len === 0) {
        return;
      } // Don't change slide while transitioning, wait until transition is done


      if (this.isSliding) {
        // Schedule slide after sliding complete
        this.$once('sliding-end', function () {
          return _this.setSlide(slide, direction);
        });
        return;
      }

      this.direction = direction; // Make sure we have an integer (you never know!)

      slide = Math.floor(slide); // Set new slide index. Wrap around if necessary

      this.index = slide >= len ? 0 : slide >= 0 ? slide : len - 1;
    },
    // Previous slide
    prev: function prev() {
      this.setSlide(this.index - 1, 'prev');
    },
    // Next slide
    next: function next() {
      this.setSlide(this.index + 1, 'next');
    },
    // Pause auto rotation
    pause: function pause(evt) {
      if (!evt) {
        this.isPaused = true;
      }

      if (this._intervalId) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      }
    },
    // Start auto rotate slides
    start: function start(evt) {
      if (!evt) {
        this.isPaused = false;
      }
      /* istanbul ignore next: most likely will never happen, but just in case */


      if (this._intervalId) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      } // Don't start if no interval, or less than 2 slides


      if (this.interval && this.slides.length > 1) {
        this._intervalId = setInterval(this.next, Math.max(1000, this.interval));
      }
    },
    // Restart auto rotate slides when focus/hover leaves the carousel
    restart: function restart(evt) {
      /* istanbul ignore if: difficult to test */
      if (!this.$el.contains(document.activeElement)) {
        this.start();
      }
    },
    doSlide: function doSlide(to, from) {
      var _this2 = this;

      var isCycling = Boolean(this.interval); // Determine sliding direction

      var direction = this.calcDirection(this.direction, from, to);
      var overlayClass = direction.overlayClass;
      var dirClass = direction.dirClass; // Determine current and next slides

      var currentSlide = this.slides[from];
      var nextSlide = this.slides[to]; // Don't do anything if there aren't any slides to slide to

      if (!currentSlide || !nextSlide) {
        /* istanbul ignore next */
        return;
      } // Start animating


      this.isSliding = true;

      if (isCycling) {
        this.pause(false);
      }

      this.$emit('sliding-start', to); // Update v-model

      this.$emit('input', this.index);

      if (this.noAnimation) {
        (0, _dom.addClass)(nextSlide, 'active');
        (0, _dom.removeClass)(currentSlide, 'active');
        this.isSliding = false; // Notify ourselves that we're done sliding (slid)

        this.$nextTick(function () {
          return _this2.$emit('sliding-end', to);
        });
      } else {
        (0, _dom.addClass)(nextSlide, overlayClass); // Trigger a reflow of next slide

        (0, _dom.reflow)(nextSlide);
        (0, _dom.addClass)(currentSlide, dirClass);
        (0, _dom.addClass)(nextSlide, dirClass); // Transition End handler

        var called = false;
        /* istanbul ignore next: difficult to test */

        var onceTransEnd = function onceTransEnd(evt) {
          if (called) {
            return;
          }

          called = true;
          /* istanbul ignore if: transition events cant be tested in JSDOM */

          if (_this2.transitionEndEvent) {
            var events = _this2.transitionEndEvent.split(/\s+/);

            events.forEach(function (evt) {
              return (0, _dom.eventOff)(currentSlide, evt, onceTransEnd, EventOptions);
            });
          }

          _this2._animationTimeout = null;
          (0, _dom.removeClass)(nextSlide, dirClass);
          (0, _dom.removeClass)(nextSlide, overlayClass);
          (0, _dom.addClass)(nextSlide, 'active');
          (0, _dom.removeClass)(currentSlide, 'active');
          (0, _dom.removeClass)(currentSlide, dirClass);
          (0, _dom.removeClass)(currentSlide, overlayClass);
          (0, _dom.setAttr)(currentSlide, 'aria-current', 'false');
          (0, _dom.setAttr)(nextSlide, 'aria-current', 'true');
          (0, _dom.setAttr)(currentSlide, 'aria-hidden', 'true');
          (0, _dom.setAttr)(nextSlide, 'aria-hidden', 'false');
          _this2.isSliding = false;
          _this2.direction = null; // Notify ourselves that we're done sliding (slid)

          _this2.$nextTick(function () {
            return _this2.$emit('sliding-end', to);
          });
        }; // Set up transitionend handler

        /* istanbul ignore if: transition events cant be tested in JSDOM */


        if (this.transitionEndEvent) {
          var events = this.transitionEndEvent.split(/\s+/);
          events.forEach(function (event) {
            return (0, _dom.eventOn)(currentSlide, event, onceTransEnd, EventOptions);
          });
        } // Fallback to setTimeout()


        this._animationTimeout = setTimeout(onceTransEnd, TRANS_DURATION);
      }

      if (isCycling) {
        this.start(false);
      }
    },
    // Update slide list
    updateSlides: function updateSlides() {
      this.pause(true); // Get all slides as DOM elements

      this.slides = (0, _dom.selectAll)('.carousel-item', this.$refs.inner);
      var numSlides = this.slides.length; // Keep slide number in range

      var index = Math.max(0, Math.min(Math.floor(this.index), numSlides - 1));
      this.slides.forEach(function (slide, idx) {
        var n = idx + 1;

        if (idx === index) {
          (0, _dom.addClass)(slide, 'active');
          (0, _dom.setAttr)(slide, 'aria-current', 'true');
        } else {
          (0, _dom.removeClass)(slide, 'active');
          (0, _dom.setAttr)(slide, 'aria-current', 'false');
        }

        (0, _dom.setAttr)(slide, 'aria-posinset', String(n));
        (0, _dom.setAttr)(slide, 'aria-setsize', String(numSlides));
      }); // Set slide as active

      this.setSlide(index);
      this.start(this.isPaused);
    },
    calcDirection: function calcDirection() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var curIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var nextIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!direction) {
        return nextIndex > curIndex ? DIRECTION.next : DIRECTION.prev;
      }

      return DIRECTION[direction];
    },
    handleClick: function handleClick(evt, fn) {
      var keyCode = evt.keyCode;

      if (evt.type === 'click' || keyCode === _keyCodes.default.SPACE || keyCode === _keyCodes.default.ENTER) {
        evt.preventDefault();
        evt.stopPropagation();
        fn();
      }
    },
    handleSwipe: function handleSwipe()
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      var absDeltaX = Math.abs(this.touchDeltaX);

      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltaX / this.touchDeltaX;

      if (direction > 0) {
        // Swipe left
        this.prev();
      } else if (direction < 0) {
        // Swipe right
        this.next();
      }
    },
    touchStart: function touchStart(evt)
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      if (_env.hasPointerEvent && PointerType[evt.pointerType.toUpperCase()]) {
        this.touchStartX = evt.clientX;
      } else if (!_env.hasPointerEvent) {
        this.touchStartX = evt.touches[0].clientX;
      }
    },
    touchMove: function touchMove(evt)
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      // Ensure swiping with one touch and not pinching
      if (evt.touches && evt.touches.length > 1) {
        this.touchDeltaX = 0;
      } else {
        this.touchDeltaX = evt.touches[0].clientX - this.touchStartX;
      }
    },
    touchEnd: function touchEnd(evt)
    /* istanbul ignore next: JSDOM doesn't support touch events */
    {
      if (_env.hasPointerEvent && PointerType[evt.pointerType.toUpperCase()]) {
        this.touchDeltaX = evt.clientX - this.touchStartX;
      }

      this.handleSwipe(); // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling

      this.pause(false);

      if (this._touchTimeout) {
        clearTimeout(this._touchTimeout);
      }

      this._touchTimeout = setTimeout(this.start, TOUCH_EVENT_COMPAT_WAIT + Math.max(1000, this.interval));
    }
  },
  render: function render(h) {
    var _this3 = this;

    // Wrapper for slides
    var inner = h('div', {
      ref: 'inner',
      class: ['carousel-inner'],
      attrs: {
        id: this.safeId('__BV_inner_'),
        role: 'list'
      }
    }, [this.$slots.default]); // Prev and next controls

    var controls = h(false);

    if (this.controls) {
      controls = [h('a', {
        class: ['carousel-control-prev'],
        attrs: {
          href: '#',
          role: 'button',
          'aria-controls': this.safeId('__BV_inner_')
        },
        on: {
          click: function click(evt) {
            _this3.handleClick(evt, _this3.prev);
          },
          keydown: function keydown(evt) {
            _this3.handleClick(evt, _this3.prev);
          }
        }
      }, [h('span', {
        class: ['carousel-control-prev-icon'],
        attrs: {
          'aria-hidden': 'true'
        }
      }), h('span', {
        class: ['sr-only']
      }, [this.labelPrev])]), h('a', {
        class: ['carousel-control-next'],
        attrs: {
          href: '#',
          role: 'button',
          'aria-controls': this.safeId('__BV_inner_')
        },
        on: {
          click: function click(evt) {
            _this3.handleClick(evt, _this3.next);
          },
          keydown: function keydown(evt) {
            _this3.handleClick(evt, _this3.next);
          }
        }
      }, [h('span', {
        class: ['carousel-control-next-icon'],
        attrs: {
          'aria-hidden': 'true'
        }
      }), h('span', {
        class: ['sr-only']
      }, [this.labelNext])])];
    } // Indicators


    var indicators = h('ol', {
      class: ['carousel-indicators'],
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.indicators,
        expression: 'indicators'
      }],
      attrs: {
        id: this.safeId('__BV_indicators_'),
        'aria-hidden': this.indicators ? 'false' : 'true',
        'aria-label': this.labelIndicators,
        'aria-owns': this.safeId('__BV_inner_')
      }
    }, this.slides.map(function (slide, n) {
      return h('li', {
        key: "slide_".concat(n),
        class: {
          active: n === _this3.index
        },
        attrs: {
          role: 'button',
          id: _this3.safeId("__BV_indicator_".concat(n + 1, "_")),
          tabindex: _this3.indicators ? '0' : '-1',
          'aria-current': n === _this3.index ? 'true' : 'false',
          'aria-label': "".concat(_this3.labelGotoSlide, " ").concat(n + 1),
          'aria-describedby': _this3.slides[n].id || null,
          'aria-controls': _this3.safeId('__BV_inner_')
        },
        on: {
          click: function click(evt) {
            _this3.handleClick(evt, function () {
              _this3.setSlide(n);
            });
          },
          keydown: function keydown(evt) {
            _this3.handleClick(evt, function () {
              _this3.setSlide(n);
            });
          }
        }
      });
    }));
    var on = {
      mouseenter: this.noHoverPause ? _noop.default : this.pause,
      mouseleave: this.noHoverPause ? _noop.default : this.restart,
      focusin: this.pause,
      focusout: this.restart,
      keydown: function keydown(evt) {
        if (/input|textarea/i.test(evt.target.tagName)) {
          /* istanbul ignore next */
          return;
        }

        var keyCode = evt.keyCode;

        if (keyCode === _keyCodes.default.LEFT || keyCode === _keyCodes.default.RIGHT) {
          evt.preventDefault();
          evt.stopPropagation();

          _this3[keyCode === _keyCodes.default.LEFT ? 'prev' : 'next']();
        }
      } // Touch support event handlers for environment

    };

    if (!this.noTouch && _env.hasTouchSupport) {
      // Attach appropriate listeners (passive mode)

      /* istanbul ignore next: JSDOM doesn't support touch events */
      if (_env.hasPointerEvent) {
        on['&pointerdown'] = this.touchStart;
        on['&pointerup'] = this.touchEnd;
      } else {
        on['&touchstart'] = this.touchStart;
        on['&touchmove'] = this.touchMove;
        on['&touchend'] = this.touchEnd;
      }
    } // Return the carousel


    return h('div', {
      staticClass: 'carousel',
      class: {
        slide: !this.noAnimation,
        'carousel-fade': !this.noAnimation && this.fade,
        'pointer-event': !this.noTouch && _env.hasTouchSupport && _env.hasPointerEvent
      },
      style: {
        background: this.background
      },
      attrs: {
        role: 'region',
        id: this.safeId(),
        'aria-busy': this.isSliding ? 'true' : 'false'
      },
      on: on
    }, [inner, controls, indicators]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/carousel/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/carousel/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _carousel = __webpack_require__(/*! ./carousel */ "./node_modules/bootstrap-vue/es/components/carousel/carousel.js");

var _carouselSlide = __webpack_require__(/*! ./carousel-slide */ "./node_modules/bootstrap-vue/es/components/carousel/carousel-slide.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BCarousel: _carousel.default,
  BCarouselSlide: _carouselSlide.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/collapse/collapse.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/collapse/collapse.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _listenOnRoot = __webpack_require__(/*! ../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/es/mixins/listen-on-root.js");

var _env = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/es/utils/env.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

// Events we emit on $root
var EVENT_STATE = 'bv::collapse::state';
var EVENT_ACCORDION = 'bv::collapse::accordion'; // Events we listen to on $root

var EVENT_TOGGLE = 'bv::toggle::collapse'; // Event Listener options

var EventOptions = {
  passive: true,
  capture: false // @vue/component

};
var _default = {
  name: 'BCollapse',
  mixins: [_listenOnRoot.default],
  model: {
    prop: 'visible',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    isNav: {
      type: Boolean,
      default: false
    },
    accordion: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  data: function data() {
    return {
      show: this.visible,
      transitioning: false
    };
  },
  computed: {
    classObject: function classObject() {
      return {
        'navbar-collapse': this.isNav,
        collapse: !this.transitioning,
        show: this.show && !this.transitioning
      };
    }
  },
  watch: {
    visible: function visible(newVal) {
      if (newVal !== this.show) {
        this.show = newVal;
      }
    },
    show: function show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.emitState();
      }
    }
  },
  created: function created() {
    // Listen for toggle events to open/close us
    this.listenOnRoot(EVENT_TOGGLE, this.handleToggleEvt); // Listen to other collapses for accordion events

    this.listenOnRoot(EVENT_ACCORDION, this.handleAccordionEvt);
  },
  mounted: function mounted() {
    if (this.isNav && _env.inBrowser) {
      // Set up handlers
      this.setWindowEvents(true);
      this.handleResize();
    }

    this.emitState();
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    if (this.isNav && _env.inBrowser) {
      this.setWindowEvents(false);
    }
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    if (this.isNav && _env.inBrowser) {
      this.setWindowEvents(true);
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    // Trigger state emit if needed
    this.show = false;

    if (this.isNav && _env.inBrowser) {
      this.setWindowEvents(false);
    }
  },
  methods: {
    setWindowEvents: function setWindowEvents(on) {
      var method = on ? _dom.eventOn : _dom.eventOff;
      method(window, 'resize', this.handleResize, EventOptions);
      method(window, 'orientationchange', this.handleResize, EventOptions);
    },
    toggle: function toggle() {
      this.show = !this.show;
    },
    onEnter: function onEnter(el) {
      el.style.height = 0;
      (0, _dom.reflow)(el);
      el.style.height = el.scrollHeight + 'px';
      this.transitioning = true; // This should be moved out so we can add cancellable events

      this.$emit('show');
    },
    onAfterEnter: function onAfterEnter(el) {
      el.style.height = null;
      this.transitioning = false;
      this.$emit('shown');
    },
    onLeave: function onLeave(el) {
      el.style.height = 'auto';
      el.style.display = 'block';
      el.style.height = (0, _dom.getBCR)(el).height + 'px';
      (0, _dom.reflow)(el);
      this.transitioning = true;
      el.style.height = 0; // This should be moved out so we can add cancellable events

      this.$emit('hide');
    },
    onAfterLeave: function onAfterLeave(el) {
      el.style.height = null;
      this.transitioning = false;
      this.$emit('hidden');
    },
    emitState: function emitState() {
      this.$emit('input', this.show); // Let v-b-toggle know the state of this collapse

      this.$root.$emit(EVENT_STATE, this.id, this.show);

      if (this.accordion && this.show) {
        // Tell the other collapses in this accordion to close
        this.$root.$emit(EVENT_ACCORDION, this.id, this.accordion);
      }
    },
    clickHandler: function clickHandler(evt) {
      // If we are in a nav/navbar, close the collapse when non-disabled link clicked
      var el = evt.target;

      if (!this.isNav || !el || (0, _dom.getCS)(this.$el).display !== 'block') {
        /* istanbul ignore next: can't test getComputedStyle in JSDOM */
        return;
      }

      if ((0, _dom.matches)(el, '.nav-link,.dropdown-item') || (0, _dom.closest)('.nav-link,.dropdown-item', el)) {
        this.show = false;
      }
    },
    handleToggleEvt: function handleToggleEvt(target) {
      if (target !== this.id) {
        return;
      }

      this.toggle();
    },
    handleAccordionEvt: function handleAccordionEvt(openedId, accordion) {
      if (!this.accordion || accordion !== this.accordion) {
        return;
      }

      if (openedId === this.id) {
        // Open this collapse if not shown
        if (!this.show) {
          this.toggle();
        }
      } else {
        // Close this collapse if shown
        if (this.show) {
          this.toggle();
        }
      }
    },
    handleResize: function handleResize() {
      // Handler for orientation/resize to set collapsed state in nav/navbar
      this.show = (0, _dom.getCS)(this.$el).display === 'block';
    }
  },
  render: function render(h) {
    var content = h(this.tag, {
      class: this.classObject,
      directives: [{
        name: 'show',
        value: this.show
      }],
      attrs: {
        id: this.id || null
      },
      on: {
        click: this.clickHandler
      }
    }, [this.$slots.default]);
    return h('transition', {
      props: {
        enterClass: '',
        enterActiveClass: 'collapsing',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: 'collapsing',
        leaveToClass: ''
      },
      on: {
        enter: this.onEnter,
        afterEnter: this.onAfterEnter,
        leave: this.onLeave,
        afterLeave: this.onAfterLeave
      }
    }, [content]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/collapse/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/collapse/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _collapse = __webpack_require__(/*! ./collapse */ "./node_modules/bootstrap-vue/es/components/collapse/collapse.js");

var _toggle = __webpack_require__(/*! ../../directives/toggle */ "./node_modules/bootstrap-vue/es/directives/toggle/index.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BCollapse: _collapse.default
};
var plugins = {
  BToggleDirectivePlugin: _toggle.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-divider.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/dropdown/dropdown-divider.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BDropdownDivider',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'dropdown-divider',
      attrs: {
        role: 'separator'
      }
    }));
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-form.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/dropdown/dropdown-form.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _form = __webpack_require__(/*! ../form/form */ "./node_modules/bootstrap-vue/es/components/form/form.js");

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'BDropdownForm',
  functional: true,
  props: _objectSpread({}, _form.props),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(_form.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: props,
      staticClass: 'b-dropdown-form'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-header.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/dropdown/dropdown-header.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'h6'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BDropdownHeader',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'dropdown-header',
      attrs: {
        id: props.id || null
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-item-button.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/dropdown/dropdown-item-button.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  active: {
    type: Boolean,
    default: false
  },
  activeClass: {
    type: String,
    default: 'active'
  },
  disabled: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BDropdownItemButton',
  inject: {
    bvDropdown: {
      default: null
    }
  },
  props: props,
  methods: {
    closeDropdown: function closeDropdown() {
      if (this.bvDropdown) {
        this.bvDropdown.hide(true);
      }
    },
    onClick: function onClick(evt) {
      this.$emit('click', evt);
      this.closeDropdown();
    }
  },
  render: function render(h) {
    return h('button', {
      staticClass: 'dropdown-item',
      class: _defineProperty({}, this.activeClass, this.active),
      attrs: {
        role: 'menuitem',
        type: 'button',
        disabled: this.disabled
      },
      on: {
        click: this.onClick
      }
    }, this.$slots.default);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-item.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/dropdown/dropdown-item.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _link = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

var props = (0, _link.propsFactory)(); // @vue/component

exports.props = props;
var _default = {
  name: 'BDropdownItem',
  inject: {
    bvDropdown: {
      default: null
    }
  },
  props: props,
  methods: {
    closeDropdown: function closeDropdown() {
      if (this.bvDropdown) {
        this.bvDropdown.hide(true);
      }
    },
    onClick: function onClick(evt) {
      this.$emit('click', evt);
      this.closeDropdown();
    }
  },
  render: function render(h) {
    return h(_link.default, {
      props: this.$props,
      staticClass: 'dropdown-item',
      attrs: {
        role: 'menuitem'
      },
      on: {
        click: this.onClick
      }
    }, this.$slots.default);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-text.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/dropdown/dropdown-text.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _default = {
  name: 'BDropdownText',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'p'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: props,
      staticClass: 'b-dropdown-text'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/dropdown/dropdown.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _dropdown = __webpack_require__(/*! ../../mixins/dropdown */ "./node_modules/bootstrap-vue/es/mixins/dropdown.js");

var _button = __webpack_require__(/*! ../button/button */ "./node_modules/bootstrap-vue/es/components/button/button.js");

var NAME = 'BDropdown'; // @vue/component

var _default2 = {
  name: NAME,
  components: {
    BButton: _button.default
  },
  mixins: [_id.default, _dropdown.default],
  props: {
    toggleText: {
      // This really should be toggleLabel
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'toggleText');
      }
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'variant');
      }
    },
    menuClass: {
      type: [String, Array],
      default: null
    },
    toggleTag: {
      type: String,
      default: 'button'
    },
    toggleClass: {
      type: [String, Array],
      default: null
    },
    noCaret: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: false
    },
    splitHref: {
      type: String // default: undefined

    },
    splitTo: {
      type: [String, Object] // default: undefined

    },
    splitVariant: {
      type: String,
      default: null
    },
    role: {
      type: String,
      default: 'menu'
    },
    boundary: {
      // String: `scrollParent`, `window` or `viewport`
      // Object: HTML Element reference
      type: [String, Object],
      default: 'scrollParent'
    }
  },
  computed: {
    dropdownClasses: function dropdownClasses() {
      // Position `static` is needed to allow menu to "breakout" of the scrollParent boundaries
      // when boundary is anything other than `scrollParent`
      // See https://github.com/twbs/bootstrap/issues/24251#issuecomment-341413786
      var positionStatic = this.boundary !== 'scrollParent' || !this.boundary;
      var direction = '';

      if (this.dropup) {
        direction = 'dropup';
      } else if (this.dropright) {
        direction = 'dropright';
      } else if (this.dropleft) {
        direction = 'dropleft';
      }

      return ['btn-group', 'b-dropdown', 'dropdown', direction, {
        show: this.visible,
        'position-static': positionStatic
      }];
    },
    menuClasses: function menuClasses() {
      return ['dropdown-menu', {
        'dropdown-menu-right': this.right,
        show: this.visible
      }, this.menuClass];
    },
    toggleClasses: function toggleClasses() {
      return ['dropdown-toggle', {
        'dropdown-toggle-split': this.split,
        'dropdown-toggle-no-caret': this.noCaret && !this.split
      }, this.toggleClass];
    }
  },
  render: function render(h) {
    var split = h(false);

    if (this.split) {
      var btnProps = {
        disabled: this.disabled,
        variant: this.splitVariant || this.variant,
        size: this.size // We add these as needed due to router-link issues with defined property with undefined/null values

      };

      if (this.splitTo) {
        btnProps.to = this.splitTo;
      }

      if (this.splitHref) {
        btnProps.href = this.splitHref;
      }

      split = h('b-button', {
        ref: 'button',
        props: btnProps,
        attrs: {
          id: this.safeId('_BV_button_')
        },
        on: {
          click: this.click
        }
      }, [this.$slots['button-content'] || this.$slots.text || this.html || (0, _html.stripTags)(this.text)]);
    }

    var toggle = h('b-button', {
      ref: 'toggle',
      class: this.toggleClasses,
      props: {
        variant: this.variant,
        size: this.size,
        disabled: this.disabled,
        tag: this.toggleTag
      },
      attrs: {
        id: this.safeId('_BV_toggle_'),
        'aria-haspopup': 'true',
        'aria-expanded': this.visible ? 'true' : 'false'
      },
      on: {
        click: this.toggle,
        // click
        keydown: this.toggle // enter, space, down

      }
    }, [this.split ? h('span', {
      class: ['sr-only']
    }, [this.toggleText]) : this.$slots['button-content'] || this.$slots.text || this.html || (0, _html.stripTags)(this.text)]);
    var menu = h('div', {
      ref: 'menu',
      class: this.menuClasses,
      attrs: {
        role: this.role,
        tabindex: '-1',
        'aria-labelledby': this.safeId(this.split ? '_BV_button_' : '_BV_toggle_')
      },
      on: {
        mouseover: this.onMouseOver,
        keydown: this.onKeydown // tab, up, down, esc

      }
    }, [this.$slots.default]);
    return h('div', {
      attrs: {
        id: this.safeId()
      },
      class: this.dropdownClasses
    }, [split, toggle, menu]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/dropdown/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/dropdown/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dropdown = __webpack_require__(/*! ./dropdown */ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown.js");

var _dropdownItem = __webpack_require__(/*! ./dropdown-item */ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-item.js");

var _dropdownItemButton = __webpack_require__(/*! ./dropdown-item-button */ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-item-button.js");

var _dropdownHeader = __webpack_require__(/*! ./dropdown-header */ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-header.js");

var _dropdownDivider = __webpack_require__(/*! ./dropdown-divider */ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-divider.js");

var _dropdownForm = __webpack_require__(/*! ./dropdown-form */ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-form.js");

var _dropdownText = __webpack_require__(/*! ./dropdown-text */ "./node_modules/bootstrap-vue/es/components/dropdown/dropdown-text.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BDropdown: _dropdown.default,
  BDd: _dropdown.default,
  BDropdownItem: _dropdownItem.default,
  BDdItem: _dropdownItem.default,
  BDropdownItemButton: _dropdownItemButton.default,
  BDropdownItemBtn: _dropdownItemButton.default,
  BDdItemButton: _dropdownItemButton.default,
  BDdItemBtn: _dropdownItemButton.default,
  BDropdownHeader: _dropdownHeader.default,
  BDdHeader: _dropdownHeader.default,
  BDropdownDivider: _dropdownDivider.default,
  BDdDivider: _dropdownDivider.default,
  BDropdownForm: _dropdownForm.default,
  BDdForm: _dropdownForm.default,
  BDropdownText: _dropdownText.default,
  BDdText: _dropdownText.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/embed/embed.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/embed/embed.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  type: {
    type: String,
    default: 'iframe',
    validator: function validator(str) {
      return (0, _array.arrayIncludes)(['iframe', 'embed', 'video', 'object', 'img', 'b-img', 'b-img-lazy'], str);
    }
  },
  tag: {
    type: String,
    default: 'div'
  },
  aspect: {
    type: String,
    default: '16by9'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BEmbed',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, {
      ref: data.ref,
      staticClass: 'embed-responsive',
      class: _defineProperty({}, "embed-responsive-".concat(props.aspect), Boolean(props.aspect))
    }, [h(props.type, (0, _vueFunctionalDataMerge.mergeData)(data, {
      ref: '',
      staticClass: 'embed-responsive-item'
    }), children)]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/embed/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/embed/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _embed = __webpack_require__(/*! ./embed */ "./node_modules/bootstrap-vue/es/components/embed/embed.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BEmbed: _embed.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-checkbox/form-checkbox-group.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-checkbox/form-checkbox-group.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _form = __webpack_require__(/*! ../../mixins/form */ "./node_modules/bootstrap-vue/es/mixins/form.js");

var _formOptions = __webpack_require__(/*! ../../mixins/form-options */ "./node_modules/bootstrap-vue/es/mixins/form-options.js");

var _formRadioCheckGroup = __webpack_require__(/*! ../../mixins/form-radio-check-group */ "./node_modules/bootstrap-vue/es/mixins/form-radio-check-group.js");

var _formSize = __webpack_require__(/*! ../../mixins/form-size */ "./node_modules/bootstrap-vue/es/mixins/form-size.js");

var _formState = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/es/mixins/form-state.js");

var _formCheckbox = __webpack_require__(/*! ./form-checkbox */ "./node_modules/bootstrap-vue/es/components/form-checkbox/form-checkbox.js");

// @vue/component
var _default = {
  name: 'BFormCheckboxGroup',
  components: {
    BFormCheckbox: _formCheckbox.default
  },
  mixins: [_id.default, _form.default, _formRadioCheckGroup.default, // Includes render function
  _formOptions.default, _formSize.default, _formState.default],
  provide: function provide() {
    return {
      bvCheckGroup: this
    };
  },
  props: {
    switches: {
      // Custom switch styling
      type: Boolean,
      default: false
    },
    checked: {
      type: [String, Number, Object, Array, Boolean],
      default: null
    }
  },
  data: function data() {
    return {
      localChecked: this.checked || []
    };
  },
  computed: {
    is_RadioGroup: function is_RadioGroup() {
      return false;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-checkbox/form-checkbox.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-checkbox/form-checkbox.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _formRadioCheck = __webpack_require__(/*! ../../mixins/form-radio-check */ "./node_modules/bootstrap-vue/es/mixins/form-radio-check.js");

var _form = __webpack_require__(/*! ../../mixins/form */ "./node_modules/bootstrap-vue/es/mixins/form.js");

var _formSize = __webpack_require__(/*! ../../mixins/form-size */ "./node_modules/bootstrap-vue/es/mixins/form-size.js");

var _formState = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/es/mixins/form-state.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _looseEqual = __webpack_require__(/*! ../../utils/loose-equal */ "./node_modules/bootstrap-vue/es/utils/loose-equal.js");

var _looseIndexOf = __webpack_require__(/*! ../../utils/loose-index-of */ "./node_modules/bootstrap-vue/es/utils/loose-index-of.js");

// @vue/component
var _default = {
  name: 'BFormCheckbox',
  mixins: [_formRadioCheck.default, // Includes shared render function
  _id.default, _form.default, _formSize.default, _formState.default],
  inject: {
    bvGroup: {
      from: 'bvCheckGroup',
      default: false
    }
  },
  props: {
    value: {
      // type: [Object, Boolean],
      default: true
    },
    uncheckedValue: {
      // type: [Object, Boolean],
      // Not applicable in multi-check mode
      default: false
    },
    indeterminate: {
      // Not applicable in multi-check mode
      type: Boolean,
      default: false
    },
    switch: {
      // Custom switch styling
      type: Boolean,
      default: false
    },
    checked: {
      // v-model
      type: [String, Number, Object, Array, Boolean],
      default: null
    }
  },
  computed: {
    is_Checked: function is_Checked() {
      var checked = this.computedLocalChecked;
      var value = this.value;

      if ((0, _array.isArray)(checked)) {
        return (0, _looseIndexOf.default)(checked, value) > -1;
      } else {
        return (0, _looseEqual.default)(checked, value);
      }
    },
    is_Radio: function is_Radio() {
      return false;
    },
    is_Check: function is_Check() {
      return true;
    }
  },
  watch: {
    computedLocalChecked: function computedLocalChecked(newVal, oldVal) {
      this.$emit('input', newVal);

      if (this.$refs && this.$refs.input) {
        this.$emit('update:indeterminate', this.$refs.input.indeterminate);
      }
    },
    indeterminate: function indeterminate(newVal, oldVal) {
      this.setIndeterminate(newVal);
    }
  },
  mounted: function mounted() {
    // Set initial indeterminate state
    this.setIndeterminate(this.indeterminate);
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var _ref$target = _ref.target,
          checked = _ref$target.checked,
          indeterminate = _ref$target.indeterminate;
      var localChecked = this.computedLocalChecked;
      var value = this.value;
      var isArr = (0, _array.isArray)(localChecked);
      var uncheckedValue = isArr ? null : this.uncheckedValue; // Update computedLocalChecked

      if (isArr) {
        var idx = (0, _looseIndexOf.default)(localChecked, value);

        if (checked && idx < 0) {
          // Add value to array
          localChecked = localChecked.concat(value);
        } else if (!checked && idx > -1) {
          // Remove value from array
          localChecked = localChecked.slice(0, idx).concat(localChecked.slice(idx + 1));
        }
      } else {
        localChecked = checked ? value : uncheckedValue;
      }

      this.computedLocalChecked = localChecked; // Change is only emitted on user interaction

      this.$emit('change', checked ? value : uncheckedValue); // If this is a child of form-checkbox-group, we emit a change event on it as well

      if (this.is_Group) {
        this.bvGroup.$emit('change', localChecked);
      }

      this.$emit('update:indeterminate', indeterminate);
    },
    setIndeterminate: function setIndeterminate(state) {
      // Indeterminate only supported in single checkbox mode
      if ((0, _array.isArray)(this.computedLocalChecked)) {
        state = false;
      }

      if (this.$refs && this.$refs.input) {
        this.$refs.input.indeterminate = state; // Emit update event to prop

        this.$emit('update:indeterminate', state);
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-checkbox/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-checkbox/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formCheckbox = __webpack_require__(/*! ./form-checkbox */ "./node_modules/bootstrap-vue/es/components/form-checkbox/form-checkbox.js");

var _formCheckboxGroup = __webpack_require__(/*! ./form-checkbox-group */ "./node_modules/bootstrap-vue/es/components/form-checkbox/form-checkbox-group.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BFormCheckbox: _formCheckbox.default,
  BCheckbox: _formCheckbox.default,
  BCheck: _formCheckbox.default,
  BFormCheckboxGroup: _formCheckboxGroup.default,
  BCheckboxGroup: _formCheckboxGroup.default,
  BCheckGroup: _formCheckboxGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-file/form-file.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-file/form-file.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _form = __webpack_require__(/*! ../../mixins/form */ "./node_modules/bootstrap-vue/es/mixins/form.js");

var _formState = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/es/mixins/form-state.js");

var _formCustom = __webpack_require__(/*! ../../mixins/form-custom */ "./node_modules/bootstrap-vue/es/mixins/form-custom.js");

var _normalizeSlot = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/es/mixins/normalize-slot.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var NAME = 'BFormFile'; // @vue/component

var _default2 = {
  name: NAME,
  mixins: [_id.default, _form.default, _formState.default, _formCustom.default, _normalizeSlot.default],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      // type: Object,
      default: null
    },
    accept: {
      type: String,
      default: ''
    },
    // Instruct input to capture from camera
    capture: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'placeholder');
      }
    },
    browseText: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'browseText');
      }
    },
    dropPlaceholder: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'dropPlaceholder');
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    directory: {
      type: Boolean,
      default: false
    },
    noTraverse: {
      type: Boolean,
      default: false
    },
    noDrop: {
      type: Boolean,
      default: false
    },
    fileNameFormatter: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      selectedFile: null,
      dragging: false,
      hasFocus: false
    };
  },
  computed: {
    selectLabel: function selectLabel() {
      // Draging active
      if (this.dragging && this.dropPlaceholder) {
        return this.dropPlaceholder;
      } // No file chosen


      if (!this.selectedFile || this.selectedFile.length === 0) {
        return this.placeholder;
      } // Convert selectedFile to an array (if not already one)


      var files = (0, _array.concat)(this.selectedFile).filter(Boolean);

      if (this.hasNormalizedSlot('file-name')) {
        // There is a slot for formatting the files/names
        return [this.normalizeSlot('file-name', {
          files: files,
          names: files.map(function (f) {
            return f.name;
          })
        })];
      } else {
        // Use the user supplied formatter, or the built in one.
        return typeof this.fileNameFormatter === 'function' ? String(this.fileNameFormatter(files)) : files.map(function (file) {
          return file.name;
        }).join(', ');
      }
    }
  },
  watch: {
    selectedFile: function selectedFile(newVal, oldVal) {
      // The following test is needed when the file input is "reset" or the
      // exact same file(s) are selected to prevent an infinite loop.
      // When in `multiple` mode we need to check for two empty arrays or
      // two arrays with identical files
      if (newVal === oldVal || (0, _array.isArray)(newVal) && (0, _array.isArray)(oldVal) && newVal.length === oldVal.length && newVal.every(function (v, i) {
        return v === oldVal[i];
      })) {
        return;
      }

      if (!newVal && this.multiple) {
        this.$emit('input', []);
      } else {
        this.$emit('input', newVal);
      }
    },
    value: function value(newVal) {
      if (!newVal || (0, _array.isArray)(newVal) && newVal.length === 0) {
        this.reset();
      }
    }
  },
  methods: {
    focusHandler: function focusHandler(evt) {
      // Bootstrap v4 doesn't have focus styling for custom file input
      // Firefox has a '[type=file]:focus ~ sibling' selector issue,
      // so we add a 'focus' class to get around these bugs
      if (this.plain || evt.type === 'focusout') {
        this.hasFocus = false;
      } else {
        // Add focus styling for custom file input
        this.hasFocus = true;
      }
    },
    reset: function reset() {
      try {
        // Wrapped in try in case IE 11 craps out
        this.$refs.input.value = '';
      } catch (e) {} // IE 11 doesn't support setting `input.value` to '' or null
      // So we use this little extra hack to reset the value, just in case.
      // This also appears to work on modern browsers as well.


      this.$refs.input.type = '';
      this.$refs.input.type = 'file';
      this.selectedFile = this.multiple ? [] : null;
    },
    onFileChange: function onFileChange(evt) {
      var _this = this;

      // Always emit original event
      this.$emit('change', evt); // Check if special `items` prop is available on event (drop mode)
      // Can be disabled by setting no-traverse

      var items = evt.dataTransfer && evt.dataTransfer.items;
      /* istanbul ignore next: not supported in JSDOM */

      if (items && !this.noTraverse) {
        var queue = [];

        for (var i = 0; i < items.length; i++) {
          var item = items[i].webkitGetAsEntry();

          if (item) {
            queue.push(this.traverseFileTree(item));
          }
        }

        Promise.all(queue).then(function (filesArr) {
          _this.setFiles((0, _array.from)(filesArr));
        });
        return;
      } // Normal handling


      this.setFiles(evt.target.files || evt.dataTransfer.files);
    },
    setFiles: function setFiles() {
      var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!files) {
        /* istanbul ignore next: this will probably not happen */
        this.selectedFile = null;
      } else if (this.multiple) {
        // Convert files to array
        var filesArray = [];

        for (var i = 0; i < files.length; i++) {
          filesArray.push(files[i]);
        } // Return file(s) as array


        this.selectedFile = filesArray;
      } else {
        // Return single file object
        this.selectedFile = files[0] || null;
      }
    },
    onReset: function onReset() {
      // Triggered when the parent form (if any) is reset
      this.selectedFile = this.multiple ? [] : null;
    },
    onDragover: function onDragover(evt)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      evt.preventDefault();
      evt.stopPropagation();

      if (this.noDrop || !this.custom) {
        return;
      }

      this.dragging = true;
      evt.dataTransfer.dropEffect = 'copy';
    },
    onDragleave: function onDragleave(evt)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      evt.preventDefault();
      evt.stopPropagation();
      this.dragging = false;
    },
    onDrop: function onDrop(evt)
    /* istanbul ignore next: difficult to test in JSDOM */
    {
      evt.preventDefault();
      evt.stopPropagation();

      if (this.noDrop) {
        return;
      }

      this.dragging = false;

      if (evt.dataTransfer.files && evt.dataTransfer.files.length > 0) {
        this.onFileChange(evt);
      }
    },
    traverseFileTree: function traverseFileTree(item, path)
    /* istanbul ignore next: not supported in JSDOM */
    {
      var _this2 = this;

      // Based on http://stackoverflow.com/questions/3590058
      return new Promise(function (resolve) {
        path = path || '';

        if (item.isFile) {
          // Get file
          item.file(function (file) {
            file.$path = path; // Inject $path to file obj

            resolve(file);
          });
        } else if (item.isDirectory) {
          // Get folder contents
          item.createReader().readEntries(function (entries) {
            var queue = [];

            for (var i = 0; i < entries.length; i++) {
              queue.push(_this2.traverseFileTree(entries[i], path + item.name + '/'));
            }

            Promise.all(queue).then(function (filesArr) {
              resolve((0, _array.from)(filesArr));
            });
          });
        }
      });
    }
  },
  render: function render(h) {
    // Form Input
    var input = h('input', {
      ref: 'input',
      class: [{
        'form-control-file': this.plain,
        'custom-file-input': this.custom,
        focus: this.custom && this.hasFocus
      }, this.stateClass],
      attrs: {
        type: 'file',
        id: this.safeId(),
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        form: this.form || null,
        capture: this.capture || null,
        accept: this.accept || null,
        multiple: this.multiple,
        webkitdirectory: this.directory,
        'aria-required': this.required ? 'true' : null
      },
      on: {
        change: this.onFileChange,
        focusin: this.focusHandler,
        focusout: this.focusHandler,
        reset: this.onReset
      }
    });

    if (this.plain) {
      return input;
    } // Overlay Labels


    var label = h('label', {
      staticClass: 'custom-file-label',
      class: [this.dragging ? 'dragging' : null],
      attrs: {
        for: this.safeId(),
        'data-browse': this.browseText || null
      }
    }, this.selectLabel); // Return rendered custom file input

    return h('div', {
      staticClass: 'custom-file b-form-file',
      class: this.stateClass,
      attrs: {
        id: this.safeId('_BV_file_outer_')
      },
      on: {
        dragover: this.onDragover,
        dragleave: this.onDragleave,
        drop: this.onDrop
      }
    }, [input, label]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-file/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-file/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formFile = __webpack_require__(/*! ./form-file */ "./node_modules/bootstrap-vue/es/components/form-file/form-file.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BFormFile: _formFile.default,
  BFile: _formFile.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-group/form-group.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-group/form-group.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _formState = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/es/mixins/form-state.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var _upperFirst = __webpack_require__(/*! ../../utils/upper-first */ "./node_modules/bootstrap-vue/es/utils/upper-first.js");

var _memoize = __webpack_require__(/*! ../../utils/memoize */ "./node_modules/bootstrap-vue/es/utils/memoize.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _formRow = __webpack_require__(/*! ../layout/form-row */ "./node_modules/bootstrap-vue/es/components/layout/form-row.js");

var _col = __webpack_require__(/*! ../layout/col */ "./node_modules/bootstrap-vue/es/components/layout/col.js");

var _formText = __webpack_require__(/*! ../form/form-text */ "./node_modules/bootstrap-vue/es/components/form/form-text.js");

var _formInvalidFeedback = __webpack_require__(/*! ../form/form-invalid-feedback */ "./node_modules/bootstrap-vue/es/components/form/form-invalid-feedback.js");

var _formValidFeedback = __webpack_require__(/*! ../form/form-valid-feedback */ "./node_modules/bootstrap-vue/es/components/form/form-valid-feedback.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Selector for finding first input in the form-group
var SELECTOR = 'input:not(:disabled),textarea:not(:disabled),select:not(:disabled)'; // Memoize this function to return cached values to save time in computed functions

var makePropName = (0, _memoize.default)(function () {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prefix = arguments.length > 1 ? arguments[1] : undefined;
  return "".concat(prefix).concat((0, _upperFirst.default)(breakpoint));
});
var DEPRECATED_MSG = 'Props "horizontal" and "breakpoint" are deprecated. Use "label-cols(-{breakpoint})" props instead.'; // render helper functions (here rather than polluting the instance with more methods)

function renderInvalidFeedback(h, ctx) {
  var content = ctx.$slots['invalid-feedback'] || ctx.invalidFeedback;
  var invalidFeedback = h(false);

  if (content) {
    invalidFeedback = h('b-form-invalid-feedback', {
      props: {
        id: ctx.invalidFeedbackId,
        // If state is explicitly false, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip
      },
      attrs: {
        tabindex: content ? '-1' : null,
        role: 'alert',
        'aria-live': 'assertive',
        'aria-atomic': 'true'
      }
    }, [content]);
  }

  return invalidFeedback;
}

function renderValidFeedback(h, ctx) {
  var content = ctx.$slots['valid-feedback'] || ctx.validFeedback;
  var validFeedback = h(false);

  if (content) {
    validFeedback = h('b-form-valid-feedback', {
      props: {
        id: ctx.validFeedbackId,
        // If state is explicitly true, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip
      },
      attrs: {
        tabindex: '-1',
        role: 'alert',
        'aria-live': 'assertive',
        'aria-atomic': 'true'
      }
    }, [content]);
  }

  return validFeedback;
}

function renderHelpText(h, ctx) {
  // Form help text (description)
  var content = ctx.$slots['description'] || ctx.description;
  var description = h(false);

  if (content) {
    description = h('b-form-text', {
      attrs: {
        id: ctx.descriptionId,
        tabindex: '-1'
      }
    }, [content]);
  }

  return description;
}

function renderLabel(h, ctx) {
  // render label/legend inside b-col if necessary
  var content = ctx.$slots['label'] || ctx.label;
  var labelFor = ctx.labelFor;
  var isLegend = !labelFor;
  var isHorizontal = ctx.isHorizontal;
  var labelTag = isLegend ? 'legend' : 'label';

  if (!content && !isHorizontal) {
    return h(false);
  } else if (ctx.labelSrOnly) {
    var label = h(false);

    if (content) {
      label = h(labelTag, {
        class: 'sr-only',
        attrs: {
          id: ctx.labelId,
          for: labelFor || null
        }
      }, [content]);
    }

    return h(isHorizontal ? 'b-col' : 'div', {
      props: isHorizontal ? ctx.labelColProps : {}
    }, [label]);
  } else {
    return h(isHorizontal ? 'b-col' : labelTag, {
      on: isLegend ? {
        click: ctx.legendClick
      } : {},
      props: isHorizontal ? _objectSpread({
        tag: labelTag
      }, ctx.labelColProps) : {},
      attrs: {
        id: ctx.labelId,
        for: labelFor || null,
        // We add a tab index to legend so that screen readers will properly read the aria-labelledby in IE.
        tabindex: isLegend ? '-1' : null
      },
      class: [// When horizontal or if a legend is rendered, add col-form-label for correct sizing
      // as Bootstrap has inconsitent font styling for legend in non-horiontal form-groups.
      // See: https://github.com/twbs/bootstrap/issues/27805
      isHorizontal || isLegend ? 'col-form-label' : '', // Emulate label padding top of 0 on legend when not horizontal
      !isHorizontal && isLegend ? 'pt-0' : '', // If not horizontal and not a legend, we add d-block to label so that label-align works
      !isHorizontal && !isLegend ? 'd-block' : '', ctx.labelSize ? "col-form-label-".concat(ctx.labelSize) : '', ctx.labelAlignClasses, ctx.labelClass]
    }, [content]);
  }
} //
// Async (lazy) component for BFormGroup
// Needed so that the breakpoint specific props can be computed once hte config is created
//


var _default = function _default(resolve, reject) {
  // Grab the current config for breakpoints
  var BREAKPOINTS = (0, _config.getBreakpointsUp)(); // Generate the labelCol breakpoint props

  var bpLabelColProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // i.e. label-cols, label-cols-sm, label-cols-md, ...
    props[makePropName(breakpoint, 'labelCols')] = {
      type: [Number, String, Boolean],
      default: breakpoint ? false : null
    };
    return props;
  }, (0, _object.create)(null)); // Generate the labelAlign breakpoint props

  var bpLabelAlignProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // label-align, label-align-sm, label-align-md, ...
    props[makePropName(breakpoint, 'labelAlign')] = {
      type: String,
      // left, right, center
      default: null
    };
    return props;
  }, (0, _object.create)(null)); // @vue/component

  var BFormGroup = {
    name: 'BFormGroup',
    components: {
      BFormRow: _formRow.default,
      BCol: _col.default,
      BFormInvalidFeedback: _formInvalidFeedback.default,
      BFormValidFeedback: _formValidFeedback.default,
      BFormText: _formText.default
    },
    mixins: [_id.default, _formState.default],
    props: _objectSpread({
      label: {
        type: String,
        default: null
      },
      labelFor: {
        type: String,
        default: null
      },
      labelSize: {
        type: String,
        default: null
      },
      labelSrOnly: {
        type: Boolean,
        default: false
      }
    }, bpLabelColProps, bpLabelAlignProps, {
      labelClass: {
        type: [String, Array, Object],
        default: null
      },
      description: {
        type: String,
        default: null
      },
      invalidFeedback: {
        type: String,
        default: null
      },
      validFeedback: {
        type: String,
        default: null
      },
      tooltip: {
        // Enable tooltip style feedback
        type: Boolean,
        default: false
      },
      validated: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      horizontal: {
        // Deprecated
        type: Boolean,
        default: false,
        deprecated: DEPRECATED_MSG
      },
      breakpoint: {
        // Deprecated (ignored if horizontal is not true)
        type: String,
        default: null,
        // legacy value 'sm',
        deprecated: DEPRECATED_MSG
      }
    }),
    computed: {
      labelColProps: function labelColProps() {
        var _this = this;

        var props = {};
        /* istanbul ignore next: deprecated */

        if (this.horizontal) {
          // Deprecated setting of horizontal/breakpoint props

          /* istanbul ignore next */
          (0, _warn.default)("b-form-group: ".concat(DEPRECATED_MSG)); // Legacy default is breakpoint sm and cols 3

          var bp = this.breakpoint || BREAKPOINTS[1]; // 'sm'

          var cols = parseInt(this.labelCols, 10) || 3;
          props[bp] = cols > 0 ? cols : 3; // We then return the single breakpoint prop for legacy compatability

          return props;
        }

        BREAKPOINTS.forEach(function (breakpoint) {
          // Grab the value if the label column breakpoint prop
          var propVal = _this[makePropName(breakpoint, 'labelCols')]; // Handle case where the prop's value is an empty string, which represents true


          propVal = propVal === '' ? true : propVal || false;

          if (typeof propVal !== 'boolean') {
            // Convert to column size to number
            propVal = parseInt(propVal, 10) || 0; // Ensure column size is greater than 0

            propVal = propVal > 0 ? propVal : false;
          }

          if (propVal) {
            // Add the prop to the list of props to give to b-col.
            // if breakpoint is '' (labelCols=true), then we use the col prop to make equal width at xs
            var bColPropName = breakpoint || (typeof propVal === 'boolean' ? 'col' : 'cols'); // Add it to the props

            props[bColPropName] = propVal;
          }
        });
        return props;
      },
      labelAlignClasses: function labelAlignClasses() {
        var _this2 = this;

        var classes = [];
        BREAKPOINTS.forEach(function (breakpoint) {
          // assemble the label column breakpoint align classes
          var propVal = _this2[makePropName(breakpoint, 'labelAlign')] || null;

          if (propVal) {
            var className = breakpoint ? "text-".concat(breakpoint, "-").concat(propVal) : "text-".concat(propVal);
            classes.push(className);
          }
        });
        return classes;
      },
      isHorizontal: function isHorizontal() {
        // Determine if the resultant form-group will be rendered
        // horizontal (meaning it has label-col breakpoints)
        return (0, _object.keys)(this.labelColProps).length > 0;
      },
      labelId: function labelId() {
        return this.$slots['label'] || this.label ? this.safeId('_BV_label_') : null;
      },
      descriptionId: function descriptionId() {
        return this.$slots['description'] || this.description ? this.safeId('_BV_description_') : null;
      },
      hasInvalidFeedback: function hasInvalidFeedback() {
        // used for computing aria-describedby
        var $slots = this.$slots;
        return this.computedState === false && ($slots['invalid-feedback'] || this.invalidFeedback);
      },
      invalidFeedbackId: function invalidFeedbackId() {
        return this.hasInvalidFeedback ? this.safeId('_BV_feedback_invalid_') : null;
      },
      hasValidFeedback: function hasValidFeedback() {
        // used for computing aria-describedby
        return this.computedState === true && (this.$slots['valid-feedback'] || this.validFeedback);
      },
      validFeedbackId: function validFeedbackId() {
        return this.hasValidFeedback ? this.safeId('_BV_feedback_valid_') : null;
      },
      describedByIds: function describedByIds() {
        // Screen readers will read out any content linked to by aria-describedby
        // even if the content is hidden with 'display: none', hence we only include
        // feedback IDs if the form-group's state is explicitly valid or invalid.
        return [this.descriptionId, this.invalidFeedbackId, this.validFeedbackId].filter(function (i) {
          return i;
        }).join(' ') || null;
      }
    },
    watch: {
      describedByIds: function describedByIds(add, remove) {
        if (add !== remove) {
          this.setInputDescribedBy(add, remove);
        }
      }
    },
    mounted: function mounted() {
      var _this3 = this;

      this.$nextTick(function () {
        // Set the adia-describedby IDs on the input specified by label-for
        // We do this in a nextTick to ensure the children have finished rendering
        _this3.setInputDescribedBy(_this3.describedByIds);
      });
    },
    methods: {
      legendClick: function legendClick(evt) {
        if (this.labelFor) {
          // don't do anything if labelFor is set

          /* istanbul ignore next: clicking a label will focus the input, so no need to test */
          return;
        }

        var tagName = evt.target ? evt.target.tagName : '';

        if (/^(input|select|textarea|label|button|a)$/i.test(tagName)) {
          // If clicked an interactive element inside legend, we just let the default happen

          /* istanbul ignore next */
          return;
        }

        var inputs = (0, _dom.selectAll)(SELECTOR, this.$refs.content).filter(_dom.isVisible);

        if (inputs && inputs.length === 1 && inputs[0].focus) {
          // if only a single input, focus it, emulating label behaviour
          inputs[0].focus();
        }
      },
      setInputDescribedBy: function setInputDescribedBy(add, remove) {
        // Sets the `aria-describedby` attribute on the input if label-for is set.
        // Optionally accepts a string of IDs to remove as the second parameter
        if (this.labelFor && typeof document !== 'undefined') {
          var input = (0, _dom.select)("#".concat(this.labelFor), this.$refs.content);

          if (input) {
            var adb = 'aria-describedby';
            var ids = ((0, _dom.getAttr)(input, adb) || '').split(/\s+/);
            remove = (remove || '').split(/\s+/); // Update ID list, preserving any original IDs

            ids = ids.filter(function (id) {
              return !(0, _array.arrayIncludes)(remove, id);
            }).concat(add || '').join(' ').trim();

            if (ids) {
              (0, _dom.setAttr)(input, adb, ids);
            } else {
              // No IDs, so remove the attribute
              (0, _dom.removeAttr)(input, adb);
            }
          }
        }
      }
    },
    render: function render(h) {
      var isFieldset = !this.labelFor;
      var isHorizontal = this.isHorizontal; // Generate the label

      var label = renderLabel(h, this); // Generate the content

      var content = h(isHorizontal ? 'b-col' : 'div', {
        ref: 'content',
        attrs: {
          tabindex: isFieldset ? '-1' : null,
          role: isFieldset ? 'group' : null,
          'aria-labelledby': isFieldset ? this.labelId : null,
          'aria-describedby': isFieldset ? this.ariaDescribedBy : null
        }
      }, [this.$slots['default'] || h(false), renderInvalidFeedback(h, this), renderValidFeedback(h, this), renderHelpText(h, this)]); // Create the form-group

      var data = {
        staticClass: 'form-group',
        class: [this.validated ? 'was-validated' : null, this.stateClass],
        attrs: {
          id: this.safeId(),
          disabled: isFieldset ? this.disabled : null,
          role: isFieldset ? null : 'group',
          'aria-invalid': this.computedState === false ? 'true' : null,
          'aria-labelledby': this.labelId || null,
          'aria-describedby': this.describedByIds || null
        } // Return it wrapped in a form-group.
        // Note: fieldsets do not support adding `row` or `form-row` directly to them
        // due to browser specific render issues, so we move the form-row to an
        // inner wrapper div when horizontal and using a fieldset

      };
      return h(isFieldset ? 'fieldset' : isHorizontal ? 'b-form-row' : 'div', data, isHorizontal && isFieldset ? [h('b-form-row', {}, [label, content])] : [label, content]);
    }
  }; // Return the componwent options reference

  resolve(BFormGroup);
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-group/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-group/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formGroup = __webpack_require__(/*! ./form-group */ "./node_modules/bootstrap-vue/es/components/form-group/form-group.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BFormGroup: _formGroup.default,
  BFormFieldset: _formGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-input/form-input.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-input/form-input.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _form = __webpack_require__(/*! ../../mixins/form */ "./node_modules/bootstrap-vue/es/mixins/form.js");

var _formSize = __webpack_require__(/*! ../../mixins/form-size */ "./node_modules/bootstrap-vue/es/mixins/form-size.js");

var _formState = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/es/mixins/form-state.js");

var _formText = __webpack_require__(/*! ../../mixins/form-text */ "./node_modules/bootstrap-vue/es/mixins/form-text.js");

var _formSelection = __webpack_require__(/*! ../../mixins/form-selection */ "./node_modules/bootstrap-vue/es/mixins/form-selection.js");

var _formValidity = __webpack_require__(/*! ../../mixins/form-validity */ "./node_modules/bootstrap-vue/es/mixins/form-validity.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Valid supported input types
var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; // @vue/component

var _default = {
  name: 'BFormInput',
  mixins: [_id.default, _form.default, _formSize.default, _formState.default, _formText.default, _formSelection.default, _formValidity.default],
  props: {
    // value prop defined in form-text mixin
    // value: { },
    type: {
      type: String,
      default: 'text',
      validator: function validator(type) {
        return (0, _array.arrayIncludes)(TYPES, type);
      }
    },
    noWheel: {
      // Disable mousewheel to prevent wheel from changing values (i.e. number/date).
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    step: {
      type: [String, Number],
      default: null
    },
    list: {
      type: String,
      default: null
    }
  },
  computed: {
    localType: function localType() {
      // We only allow certain types
      return (0, _array.arrayIncludes)(TYPES, this.type) ? this.type : 'text';
    }
  },
  watch: {
    noWheel: function noWheel(newVal) {
      this.setWheelStopper(newVal);
    }
  },
  mounted: function mounted() {
    this.setWheelStopper(this.noWheel);
  },
  deactivated: function deactivated() {
    // Turn off listeners when keep-alive component deactivated

    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  activated: function activated() {
    // Turn on listeners (if no-wheel) when keep-alive component activated

    /* istanbul ignore next */
    this.setWheelStopper(this.noWheel);
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  methods: {
    setWheelStopper: function setWheelStopper(on) {
      var input = this.$el; // We use native events, so that we don't interfere with propgation

      if (on) {
        (0, _dom.eventOn)(input, 'focus', this.onWheelFocus);
        (0, _dom.eventOn)(input, 'blur', this.onWheelBlur);
      } else {
        (0, _dom.eventOff)(input, 'focus', this.onWheelFocus);
        (0, _dom.eventOff)(input, 'blur', this.onWheelBlur);
        (0, _dom.eventOff)(document, 'wheel', this.stopWheel);
      }
    },
    onWheelFocus: function onWheelFocus(evt) {
      (0, _dom.eventOn)(document, 'wheel', this.stopWheel);
    },
    onWheelBlur: function onWheelBlur(evt) {
      (0, _dom.eventOff)(document, 'wheel', this.stopWheel);
    },
    stopWheel: function stopWheel(evt) {
      evt.preventDefault();
      this.$el.blur();
    }
  },
  render: function render(h) {
    var self = this;
    return h('input', {
      ref: 'input',
      class: self.computedClass,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: self.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: self.safeId(),
        name: self.name,
        form: self.form || null,
        type: self.localType,
        disabled: self.disabled,
        placeholder: self.placeholder,
        required: self.required,
        autocomplete: self.autocomplete || null,
        readonly: self.readonly || self.plaintext,
        min: self.min,
        max: self.max,
        step: self.step,
        list: self.localType !== 'password' ? self.list : null,
        'aria-required': self.required ? 'true' : null,
        'aria-invalid': self.computedAriaInvalid
      },
      domProps: {
        value: self.localValue
      },
      on: _objectSpread({}, self.$listeners, {
        input: self.onInput,
        change: self.onChange,
        blur: self.onBlur
      })
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-input/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-input/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formInput = __webpack_require__(/*! ./form-input */ "./node_modules/bootstrap-vue/es/components/form-input/form-input.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BFormInput: _formInput.default,
  BInput: _formInput.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-radio/form-radio-group.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-radio/form-radio-group.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _form = __webpack_require__(/*! ../../mixins/form */ "./node_modules/bootstrap-vue/es/mixins/form.js");

var _formOptions = __webpack_require__(/*! ../../mixins/form-options */ "./node_modules/bootstrap-vue/es/mixins/form-options.js");

var _formRadioCheckGroup = __webpack_require__(/*! ../../mixins/form-radio-check-group */ "./node_modules/bootstrap-vue/es/mixins/form-radio-check-group.js");

var _formSize = __webpack_require__(/*! ../../mixins/form-size */ "./node_modules/bootstrap-vue/es/mixins/form-size.js");

var _formState = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/es/mixins/form-state.js");

var _formRadio = __webpack_require__(/*! ./form-radio */ "./node_modules/bootstrap-vue/es/components/form-radio/form-radio.js");

// @vue/component
var _default = {
  name: 'BFormRadioGroup',
  components: {
    BFormRadio: _formRadio.default
  },
  mixins: [_id.default, _form.default, _formRadioCheckGroup.default, // Includes render function
  _formOptions.default, _formSize.default, _formState.default],
  provide: function provide() {
    return {
      bvRadioGroup: this
    };
  },
  props: {
    checked: {
      type: [String, Object, Number, Boolean],
      default: null
    }
  },
  data: function data() {
    return {
      localChecked: this.checked
    };
  },
  computed: {
    is_RadioGroup: function is_RadioGroup() {
      return true;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-radio/form-radio.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-radio/form-radio.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _form = __webpack_require__(/*! ../../mixins/form */ "./node_modules/bootstrap-vue/es/mixins/form.js");

var _formState = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/es/mixins/form-state.js");

var _formSize = __webpack_require__(/*! ../../mixins/form-size */ "./node_modules/bootstrap-vue/es/mixins/form-size.js");

var _formRadioCheck = __webpack_require__(/*! ../../mixins/form-radio-check */ "./node_modules/bootstrap-vue/es/mixins/form-radio-check.js");

var _looseEqual = __webpack_require__(/*! ../../utils/loose-equal */ "./node_modules/bootstrap-vue/es/utils/loose-equal.js");

// @vue/component
var _default = {
  name: 'BFormRadio',
  mixins: [_id.default, _formRadioCheck.default, // Includes shared render function
  _form.default, _formSize.default, _formState.default],
  inject: {
    bvGroup: {
      from: 'bvRadioGroup',
      default: false
    }
  },
  props: {
    checked: {
      // v-model
      type: [String, Object, Number, Boolean],
      default: null
    }
  },
  computed: {
    // Radio Groups can only have a single value, so determining if checked is simple
    is_Checked: function is_Checked() {
      return (0, _looseEqual.default)(this.value, this.computedLocalChecked);
    },
    // Flags for form-radio-check mixin
    is_Radio: function is_Radio() {
      return true;
    },
    is_Check: function is_Check() {
      return false;
    }
  },
  watch: {
    // Radio Groups can only have a single value, so our watchers are simple
    computedLocalChecked: function computedLocalChecked(newVal, oldVal) {
      this.$emit('input', this.computedLocalChecked);
    }
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var checked = _ref.target.checked;
      var value = this.value;
      this.computedLocalChecked = value; // Change is only emitted on user interaction

      this.$emit('change', checked ? value : null); // If this is a child of form-radio-group, we emit a change event on it as well

      if (this.is_Group) {
        this.bvGroup.$emit('change', checked ? value : null);
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-radio/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-radio/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formRadio = __webpack_require__(/*! ./form-radio */ "./node_modules/bootstrap-vue/es/components/form-radio/form-radio.js");

var _formRadioGroup = __webpack_require__(/*! ./form-radio-group */ "./node_modules/bootstrap-vue/es/components/form-radio/form-radio-group.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BFormRadio: _formRadio.default,
  BRadio: _formRadio.default,
  BFormRadioGroup: _formRadioGroup.default,
  BRadioGroup: _formRadioGroup.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-select/form-select.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-select/form-select.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _formOptions = __webpack_require__(/*! ../../mixins/form-options */ "./node_modules/bootstrap-vue/es/mixins/form-options.js");

var _form = __webpack_require__(/*! ../../mixins/form */ "./node_modules/bootstrap-vue/es/mixins/form.js");

var _formSize = __webpack_require__(/*! ../../mixins/form-size */ "./node_modules/bootstrap-vue/es/mixins/form-size.js");

var _formState = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/es/mixins/form-state.js");

var _formCustom = __webpack_require__(/*! ../../mixins/form-custom */ "./node_modules/bootstrap-vue/es/mixins/form-custom.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BFormSelect',
  mixins: [_id.default, _form.default, _formSize.default, _formState.default, _formCustom.default, _formOptions.default],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {// type: [Object, Array, String, Number, Boolean],
      // default: undefined
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectSize: {
      // Browsers default size to 0, which shows 4 rows in most browsers in multiple mode
      // Size of 1 can bork out Firefox
      type: Number,
      default: 0
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data() {
    return {
      localValue: this.value
    };
  },
  computed: {
    computedSelectSize: function computedSelectSize() {
      // Custom selects with a size of zero causes the arrows to be hidden,
      // so dont render the size attribute in this case
      return !this.plain && this.selectSize === 0 ? null : this.selectSize;
    },
    inputClass: function inputClass() {
      return [this.plain ? 'form-control' : 'custom-select', this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (this.ariaInvalid === true || this.ariaInvalid === 'true') {
        return 'true';
      }

      return this.stateClass === 'is-invalid' ? 'true' : null;
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      this.localValue = newVal;
    },
    localValue: function localValue(newVal, oldVal) {
      this.$emit('input', this.localValue);
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    }
  },
  render: function render(h) {
    var _this = this;

    var $slots = this.$slots;
    var options = this.formOptions.map(function (option, index) {
      return h('option', {
        key: "option_".concat(index, "_opt"),
        attrs: {
          disabled: Boolean(option.disabled)
        },
        domProps: _objectSpread({}, (0, _html.htmlOrText)(option.html, option.text), {
          value: option.value
        })
      });
    });
    return h('select', {
      ref: 'input',
      class: this.inputClass,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: this.safeId(),
        name: this.name,
        form: this.form || null,
        multiple: this.multiple || null,
        size: this.computedSelectSize,
        disabled: this.disabled,
        required: this.required,
        'aria-required': this.required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      },
      on: {
        change: function change(evt) {
          var target = evt.target;
          var selectedVal = (0, _array.from)(target.options).filter(function (o) {
            return o.selected;
          }).map(function (o) {
            return '_value' in o ? o._value : o.value;
          });
          _this.localValue = target.multiple ? selectedVal : selectedVal[0];

          _this.$nextTick(function () {
            _this.$emit('change', _this.localValue);
          });
        }
      }
    }, [$slots.first, options, $slots.default]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-select/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-select/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formSelect = __webpack_require__(/*! ./form-select */ "./node_modules/bootstrap-vue/es/components/form-select/form-select.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BFormSelect: _formSelect.default,
  BSelect: _formSelect.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-textarea/form-textarea.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-textarea/form-textarea.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _form = __webpack_require__(/*! ../../mixins/form */ "./node_modules/bootstrap-vue/es/mixins/form.js");

var _formSize = __webpack_require__(/*! ../../mixins/form-size */ "./node_modules/bootstrap-vue/es/mixins/form-size.js");

var _formState = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/es/mixins/form-state.js");

var _formText = __webpack_require__(/*! ../../mixins/form-text */ "./node_modules/bootstrap-vue/es/mixins/form-text.js");

var _formSelection = __webpack_require__(/*! ../../mixins/form-selection */ "./node_modules/bootstrap-vue/es/mixins/form-selection.js");

var _formValidity = __webpack_require__(/*! ../../mixins/form-validity */ "./node_modules/bootstrap-vue/es/mixins/form-validity.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BFormTextarea',
  mixins: [_id.default, _form.default, _formSize.default, _formState.default, _formText.default, _formSelection.default, _formValidity.default],
  props: {
    rows: {
      type: [Number, String],
      default: 2
    },
    maxRows: {
      type: [Number, String],
      default: null
    },
    wrap: {
      // 'soft', 'hard' or 'off'. Browser default is 'soft'
      type: String,
      default: 'soft'
    },
    noResize: {
      // Disable the resize handle of textarea
      type: Boolean,
      default: false
    },
    noAutoShrink: {
      // When in auto resize mode, disable shrinking to content height
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      dontResize: true
    };
  },
  computed: {
    computedStyle: function computedStyle() {
      var styles = {
        // Setting `noResize` to true will disable the ability for the user to
        // manually resize the textarea. We also disable when in auto resize mode
        resize: !this.computedRows || this.noResize ? 'none' : null
      };

      if (!this.computedRows) {
        // The computed height for auto resize.
        // We avoid setting the style to null, which can override user manual resize.
        styles.height = this.computedHeight;
      }

      return styles;
    },
    computedMinRows: function computedMinRows() {
      // Ensure rows is at least 2 and positive (2 is the native textarea value).
      // A value of 1 can cause issues in some browsers, and most browsers only support
      // 2 as the smallest value.
      return Math.max(parseInt(this.rows, 10) || 2, 2);
    },
    computedMaxRows: function computedMaxRows() {
      return Math.max(this.computedMinRows, parseInt(this.maxRows, 10) || 0);
    },
    computedRows: function computedRows() {
      // This is used to set the attribute 'rows' on the textarea.
      // If auto-resize is enabled, then we return null as we use CSS to control height.
      return this.computedMinRows === this.computedMaxRows ? this.computedMinRows : null;
    },
    computedHeight: function computedHeight()
    /* istanbul ignore next: can't test getComputedProperties */
    {
      // We compare `computedRows` and `localValue` to `true`, a value
      // they both can't have at any time, to ensure reactivity
      if (this.$isServer || this.dontResize || this.computedRows === true || this.localValue === true) {
        return null;
      }

      var el = this.$el; // Element must be visible (not hidden) and in document
      // *Must* be checked after above checks

      if (!(0, _dom.isVisible)(el)) {
        return null;
      } // Remember old height (includes `px` units) and reset it temporarily to `auto`


      var oldHeight = el.style.height;
      el.style.height = 'auto'; // Get current computed styles

      var computedStyle = (0, _dom.getCS)(el); // Height of one line of text in px

      var lineHeight = parseFloat(computedStyle.lineHeight); // Minimum height for min rows (browser dependant)

      var minHeight = parseInt(computedStyle.height, 10) || lineHeight * this.computedMinRows; // Calculate height of content

      var offset = (parseFloat(computedStyle.borderTopWidth) || 0) + (parseFloat(computedStyle.borderBottomWidth) || 0) + (parseFloat(computedStyle.paddingTop) || 0) + (parseFloat(computedStyle.paddingBottom) || 0); // Calculate content height in "rows"

      var contentRows = Math.max((el.scrollHeight - offset) / lineHeight, 2); // Calculate number of rows to display (limited within min/max rows)

      var rows = Math.min(Math.max(contentRows, this.computedMinRows), this.computedMaxRows); // Calculate the required height of the textarea including border and padding (in pixels)

      var height = Math.max(Math.ceil(rows * lineHeight + offset), minHeight); // Place old height back on element, just in case this computed prop returns the same value

      el.style.height = oldHeight; // Value of previous height (without px units appended)

      var oldHeightPx = parseFloat(oldHeight) || 0;

      if (this.noAutoShrink && oldHeightPx > height) {
        // Computed height remains the larger of oldHeight and new height
        // When height is `sticky` (no-auto-shrink is true)
        return oldHeight;
      } // Return the new computed height in px units


      return "".concat(height, "px");
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Enable opt-in resizing once mounted
    this.$nextTick(function () {
      _this.dontResize = false;
    });
  },
  activated: function activated() {
    var _this2 = this;

    // If we are being re-activated in <keep-alive>, enable opt-in resizing
    this.$nextTick(function () {
      _this2.dontResize = false;
    });
  },
  deactivated: function deactivated() {
    // If we are in a deactivated <keep-alive>, disable opt-in resizing
    this.dontResize = true;
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.dontResize = true;
  },
  render: function render(h) {
    // Using self instead of this helps reduce code size during minification
    var self = this;
    return h('textarea', {
      ref: 'input',
      class: self.computedClass,
      style: self.computedStyle,
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: self.localValue,
        expression: 'localValue'
      }],
      attrs: {
        id: self.safeId(),
        name: self.name,
        form: self.form || null,
        disabled: self.disabled,
        placeholder: self.placeholder,
        required: self.required,
        autocomplete: self.autocomplete || null,
        readonly: self.readonly || self.plaintext,
        rows: self.computedRows,
        wrap: self.wrap || null,
        'aria-required': self.required ? 'true' : null,
        'aria-invalid': self.computedAriaInvalid
      },
      domProps: {
        value: self.localValue
      },
      on: _objectSpread({}, self.$listeners, {
        input: self.onInput,
        change: self.onChange,
        blur: self.onBlur
      })
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form-textarea/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form-textarea/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formTextarea = __webpack_require__(/*! ./form-textarea */ "./node_modules/bootstrap-vue/es/components/form-textarea/form-textarea.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BFormTextarea: _formTextarea.default,
  BTextarea: _formTextarea.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form/form-datalist.js":
/*!************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form/form-datalist.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formOptions = __webpack_require__(/*! ../../mixins/form-options */ "./node_modules/bootstrap-vue/es/mixins/form-options.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BFormDatalist',
  mixins: [_formOptions.default],
  props: {
    id: {
      type: String,
      default: null,
      required: true
    }
  },
  render: function render(h) {
    var options = this.formOptions.map(function (option, index) {
      return h('option', {
        key: "option_".concat(index, "_opt"),
        attrs: {
          disabled: option.disabled
        },
        domProps: _objectSpread({}, (0, _html.htmlOrText)(option.html, option.text), {
          value: option.value
        })
      });
    });
    return h('datalist', {
      attrs: {
        id: this.id
      }
    }, [options, this.$slots.default]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form/form-invalid-feedback.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form/form-invalid-feedback.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: [Boolean, String],
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BFormInvalidFeedback',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === false || props.state === 'invalid';
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        'invalid-feedback': !props.tooltip,
        'invalid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form/form-row.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form/form-row.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _formRow = __webpack_require__(/*! ../layout/form-row */ "./node_modules/bootstrap-vue/es/components/layout/form-row.js");

var _default = _formRow.default;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form/form-text.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form/form-text.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BFormText';
var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'small'
  },
  textVariant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'textVariant');
    }
  },
  inline: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default2 = {
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: _defineProperty({
        'form-text': !props.inline
      }, "text-".concat(props.textVariant), Boolean(props.textVariant)),
      attrs: {
        id: props.id
      }
    }), children);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form/form-valid-feedback.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form/form-valid-feedback.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: [Boolean, String],
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BFormValidFeedback',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === true || props.state === 'valid';
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        'valid-feedback': !props.tooltip,
        'valid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form/form.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form/form.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  id: {
    type: String,
    default: null
  },
  inline: {
    type: Boolean,
    default: false
  },
  novalidate: {
    type: Boolean,
    default: false
  },
  validated: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BForm',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('form', (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        'form-inline': props.inline,
        'was-validated': props.validated
      },
      attrs: {
        id: props.id,
        novalidate: props.novalidate
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/form/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/form/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _form = __webpack_require__(/*! ./form */ "./node_modules/bootstrap-vue/es/components/form/form.js");

var _formDatalist = __webpack_require__(/*! ./form-datalist */ "./node_modules/bootstrap-vue/es/components/form/form-datalist.js");

var _formRow = __webpack_require__(/*! ./form-row */ "./node_modules/bootstrap-vue/es/components/form/form-row.js");

var _formText = __webpack_require__(/*! ./form-text */ "./node_modules/bootstrap-vue/es/components/form/form-text.js");

var _formInvalidFeedback = __webpack_require__(/*! ./form-invalid-feedback */ "./node_modules/bootstrap-vue/es/components/form/form-invalid-feedback.js");

var _formValidFeedback = __webpack_require__(/*! ./form-valid-feedback */ "./node_modules/bootstrap-vue/es/components/form/form-valid-feedback.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BForm: _form.default,
  BFormDatalist: _formDatalist.default,
  BDatalist: _formDatalist.default,
  BFormRow: _formRow.default,
  BFormText: _formText.default,
  BFormInvalidFeedback: _formInvalidFeedback.default,
  BFormFeedback: _formInvalidFeedback.default,
  BFormValidFeedback: _formValidFeedback.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/image/img-lazy.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/image/img-lazy.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _img = __webpack_require__(/*! ./img */ "./node_modules/bootstrap-vue/es/components/image/img.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var NAME = 'BImgLazy';
var THROTTLE = 100;
var EventOptions = {
  passive: true,
  capture: false // @vue/component

};
var _default2 = {
  name: NAME,
  components: {
    BImg: _img.default
  },
  props: {
    src: {
      type: String,
      default: null,
      required: true
    },
    alt: {
      type: String,
      default: null
    },
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    blankSrc: {
      // If null, a blank image is generated
      type: String,
      default: null
    },
    blankColor: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'blankColor');
      }
    },
    blankWidth: {
      type: [Number, String],
      default: null
    },
    blankHeight: {
      type: [Number, String],
      default: null
    },
    show: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
    fluidGrow: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    thumbnail: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: [Boolean, String],
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 360
    },
    throttle: {
      type: [Number, String],
      default: THROTTLE
    }
  },
  data: function data() {
    return {
      isShown: false,
      scrollTimeout: null
    };
  },
  computed: {
    computedSrc: function computedSrc() {
      return !this.blankSrc || this.isShown ? this.src : this.blankSrc;
    },
    computedBlank: function computedBlank() {
      return !(this.isShown || this.blankSrc);
    },
    computedWidth: function computedWidth() {
      return this.isShown ? this.width : this.blankWidth || this.width;
    },
    computedHeight: function computedHeight() {
      return this.isShown ? this.height : this.blankHeight || this.height;
    }
  },
  watch: {
    show: function show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isShown = newVal;

        if (!newVal) {
          // Make sure listeners are re-enabled if img is force set to blank
          this.setListeners(true);
        }
      }
    },
    isShown: function isShown(newVal, oldVal) {
      if (newVal !== oldVal) {
        // Update synched show prop
        this.$emit('update:show', newVal);
      }
    }
  },
  created: function created() {
    this.isShown = this.show;
  },
  mounted: function mounted() {
    if (this.isShown) {
      this.setListeners(false);
    } else {
      this.setListeners(true);
      this.$nextTick(this.checkView);
    }
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    if (!this.isShown) {
      this.setListeners(true);
      this.$nextTick(this.checkView);
    }
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.setListeners(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.setListeners(false);
  },
  methods: {
    setListeners: function setListeners(on) {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = null;
      }

      var root = window;

      if (on) {
        (0, _dom.eventOn)(this.$el, 'load', this.checkView);
        (0, _dom.eventOn)(root, 'scroll', this.onScroll, EventOptions);
        (0, _dom.eventOn)(root, 'resize', this.onScroll, EventOptions);
        (0, _dom.eventOn)(root, 'orientationchange', this.onScroll, EventOptions);
        (0, _dom.eventOn)(document, 'transitionend', this.onScroll, EventOptions);
      } else {
        (0, _dom.eventOff)(this.$el, 'load', this.checkView);
        (0, _dom.eventOff)(root, 'scroll', this.onScroll, EventOptions);
        (0, _dom.eventOff)(root, 'resize', this.onScroll, EventOptions);
        (0, _dom.eventOff)(root, 'orientationchange', this.onScroll, EventOptions);
        (0, _dom.eventOff)(document, 'transitionend', this.onScroll, EventOptions);
      }
    },
    checkView: function checkView() {
      // check bounding box + offset to see if we should show
      if (this.isShown) {
        this.setListeners(false);
        return;
      }

      var offset = parseInt(this.offset, 10) || 0;
      var docElement = document.documentElement;
      var view = {
        l: 0 - offset,
        t: 0 - offset,
        b: docElement.clientHeight + offset,
        r: docElement.clientWidth + offset
        /* istanbul ignore next */

      };
      var box = (0, _dom.getBCR)(this.$el);
      /* istanbul ignore next: can't test getBoundingClientRect in JSDOM */

      if (box.right >= view.l && box.bottom >= view.t && box.left <= view.r && box.top <= view.b) {
        // image is in view (or about to be in view)
        this.isShown = true;
        this.setListeners(false);
      }
    },
    onScroll: function onScroll() {
      if (this.isShown) {
        this.setListeners(false);
      } else {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(this.checkView, parseInt(this.throttle, 10) || THROTTLE);
      }
    }
  },
  render: function render(h) {
    return h('b-img', {
      props: {
        src: this.computedSrc,
        alt: this.alt,
        blank: this.computedBlank,
        blankColor: this.blankColor,
        width: this.computedWidth,
        height: this.computedHeight,
        fluid: this.fluid,
        fluidGrow: this.fluidGrow,
        block: this.block,
        thumbnail: this.thumbnail,
        rounded: this.rounded,
        left: this.left,
        right: this.right,
        center: this.center
      }
    });
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/image/img.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/image/img.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BImg'; // Blank image with fill template

var BLANK_TEMPLATE = '<svg width="%{w}" height="%{h}" ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' + '<rect width="100%" height="100%" style="fill:%{f};"></rect>' + '</svg>';

function makeBlankImgSrc(width, height, color) {
  var src = encodeURIComponent(BLANK_TEMPLATE.replace('%{w}', String(width)).replace('%{h}', String(height)).replace('%{f}', color));
  return "data:image/svg+xml;charset=UTF-8,".concat(src);
}

var props = {
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: null
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  },
  block: {
    type: Boolean,
    default: false
  },
  fluid: {
    type: Boolean,
    default: false
  },
  fluidGrow: {
    // Gives fluid images class `w-100` to make them grow to fit container
    type: Boolean,
    default: false
  },
  rounded: {
    // rounded can be:
    //   false: no rounding of corners
    //   true: slightly rounded corners
    //   'top': top corners rounded
    //   'right': right corners rounded
    //   'bottom': bottom corners rounded
    //   'left': left corners rounded
    //   'circle': circle/oval
    //   '0': force rounding off
    type: [Boolean, String],
    default: false
  },
  thumbnail: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  blank: {
    type: Boolean,
    default: false
  },
  blankColor: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'blankColor');
    }
  } // @vue/component

};
exports.props = props;
var _default2 = {
  name: 'BImg',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data;
    var src = props.src;
    var width = parseInt(props.width, 10) ? parseInt(props.width, 10) : null;
    var height = parseInt(props.height, 10) ? parseInt(props.height, 10) : null;
    var align = null;
    var block = props.block;

    if (props.blank) {
      if (!height && Boolean(width)) {
        height = width;
      } else if (!width && Boolean(height)) {
        width = height;
      }

      if (!width && !height) {
        width = 1;
        height = 1;
      } // Make a blank SVG image


      src = makeBlankImgSrc(width, height, props.blankColor || 'transparent');
    }

    if (props.left) {
      align = 'float-left';
    } else if (props.right) {
      align = 'float-right';
    } else if (props.center) {
      align = 'mx-auto';
      block = true;
    }

    return h('img', (0, _vueFunctionalDataMerge.mergeData)(data, {
      attrs: {
        src: src,
        alt: props.alt,
        width: width ? String(width) : null,
        height: height ? String(height) : null
      },
      class: (_class = {
        'img-thumbnail': props.thumbnail,
        'img-fluid': props.fluid || props.fluidGrow,
        'w-100': props.fluidGrow,
        rounded: props.rounded === '' || props.rounded === true
      }, _defineProperty(_class, "rounded-".concat(props.rounded), typeof props.rounded === 'string' && props.rounded !== ''), _defineProperty(_class, align, Boolean(align)), _defineProperty(_class, 'd-block', block), _class)
    }));
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/image/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/image/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _img = __webpack_require__(/*! ./img */ "./node_modules/bootstrap-vue/es/components/image/img.js");

var _imgLazy = __webpack_require__(/*! ./img-lazy */ "./node_modules/bootstrap-vue/es/components/image/img-lazy.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BImg: _img.default,
  BImgLazy: _imgLazy.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _alert = __webpack_require__(/*! ./alert */ "./node_modules/bootstrap-vue/es/components/alert/index.js");

exports.Alert = _alert.default;

var _badge = __webpack_require__(/*! ./badge */ "./node_modules/bootstrap-vue/es/components/badge/index.js");

exports.Badge = _badge.default;

var _breadcrumb = __webpack_require__(/*! ./breadcrumb */ "./node_modules/bootstrap-vue/es/components/breadcrumb/index.js");

exports.Breadcrumb = _breadcrumb.default;

var _button = __webpack_require__(/*! ./button */ "./node_modules/bootstrap-vue/es/components/button/index.js");

exports.Button = _button.default;

var _buttonGroup = __webpack_require__(/*! ./button-group */ "./node_modules/bootstrap-vue/es/components/button-group/index.js");

exports.ButtonGroup = _buttonGroup.default;

var _buttonToolbar = __webpack_require__(/*! ./button-toolbar */ "./node_modules/bootstrap-vue/es/components/button-toolbar/index.js");

exports.ButtonToolbar = _buttonToolbar.default;

var _inputGroup = __webpack_require__(/*! ./input-group */ "./node_modules/bootstrap-vue/es/components/input-group/index.js");

exports.InputGroup = _inputGroup.default;

var _card = __webpack_require__(/*! ./card */ "./node_modules/bootstrap-vue/es/components/card/index.js");

exports.Card = _card.default;

var _carousel = __webpack_require__(/*! ./carousel */ "./node_modules/bootstrap-vue/es/components/carousel/index.js");

exports.Carousel = _carousel.default;

var _layout = __webpack_require__(/*! ./layout */ "./node_modules/bootstrap-vue/es/components/layout/index.js");

exports.Layout = _layout.default;

var _collapse = __webpack_require__(/*! ./collapse */ "./node_modules/bootstrap-vue/es/components/collapse/index.js");

exports.Collapse = _collapse.default;

var _dropdown = __webpack_require__(/*! ./dropdown */ "./node_modules/bootstrap-vue/es/components/dropdown/index.js");

exports.Dropdown = _dropdown.default;

var _embed = __webpack_require__(/*! ./embed */ "./node_modules/bootstrap-vue/es/components/embed/index.js");

exports.Embed = _embed.default;

var _form = __webpack_require__(/*! ./form */ "./node_modules/bootstrap-vue/es/components/form/index.js");

exports.Form = _form.default;

var _formGroup = __webpack_require__(/*! ./form-group */ "./node_modules/bootstrap-vue/es/components/form-group/index.js");

exports.FormGroup = _formGroup.default;

var _formCheckbox = __webpack_require__(/*! ./form-checkbox */ "./node_modules/bootstrap-vue/es/components/form-checkbox/index.js");

exports.FormCheckbox = _formCheckbox.default;

var _formRadio = __webpack_require__(/*! ./form-radio */ "./node_modules/bootstrap-vue/es/components/form-radio/index.js");

exports.FormRadio = _formRadio.default;

var _formInput = __webpack_require__(/*! ./form-input */ "./node_modules/bootstrap-vue/es/components/form-input/index.js");

exports.FormInput = _formInput.default;

var _formTextarea = __webpack_require__(/*! ./form-textarea */ "./node_modules/bootstrap-vue/es/components/form-textarea/index.js");

exports.FormTextarea = _formTextarea.default;

var _formFile = __webpack_require__(/*! ./form-file */ "./node_modules/bootstrap-vue/es/components/form-file/index.js");

exports.FormFile = _formFile.default;

var _formSelect = __webpack_require__(/*! ./form-select */ "./node_modules/bootstrap-vue/es/components/form-select/index.js");

exports.FormSelect = _formSelect.default;

var _image = __webpack_require__(/*! ./image */ "./node_modules/bootstrap-vue/es/components/image/index.js");

exports.Image = _image.default;

var _jumbotron = __webpack_require__(/*! ./jumbotron */ "./node_modules/bootstrap-vue/es/components/jumbotron/index.js");

exports.Jumbotron = _jumbotron.default;

var _link = __webpack_require__(/*! ./link */ "./node_modules/bootstrap-vue/es/components/link/index.js");

exports.Link = _link.default;

var _listGroup = __webpack_require__(/*! ./list-group */ "./node_modules/bootstrap-vue/es/components/list-group/index.js");

exports.ListGroup = _listGroup.default;

var _media = __webpack_require__(/*! ./media */ "./node_modules/bootstrap-vue/es/components/media/index.js");

exports.Media = _media.default;

var _modal = __webpack_require__(/*! ./modal */ "./node_modules/bootstrap-vue/es/components/modal/index.js");

exports.Modal = _modal.default;

var _nav = __webpack_require__(/*! ./nav */ "./node_modules/bootstrap-vue/es/components/nav/index.js");

exports.Nav = _nav.default;

var _navbar = __webpack_require__(/*! ./navbar */ "./node_modules/bootstrap-vue/es/components/navbar/index.js");

exports.Navbar = _navbar.default;

var _pagination = __webpack_require__(/*! ./pagination */ "./node_modules/bootstrap-vue/es/components/pagination/index.js");

exports.Pagination = _pagination.default;

var _paginationNav = __webpack_require__(/*! ./pagination-nav */ "./node_modules/bootstrap-vue/es/components/pagination-nav/index.js");

exports.PaginationNav = _paginationNav.default;

var _popover = __webpack_require__(/*! ./popover */ "./node_modules/bootstrap-vue/es/components/popover/index.js");

exports.Popover = _popover.default;

var _progress = __webpack_require__(/*! ./progress */ "./node_modules/bootstrap-vue/es/components/progress/index.js");

exports.Progress = _progress.default;

var _spinner = __webpack_require__(/*! ./spinner */ "./node_modules/bootstrap-vue/es/components/spinner/index.js");

exports.Spinner = _spinner.default;

var _table = __webpack_require__(/*! ./table */ "./node_modules/bootstrap-vue/es/components/table/index.js");

exports.Table = _table.default;

var _tabs = __webpack_require__(/*! ./tabs */ "./node_modules/bootstrap-vue/es/components/tabs/index.js");

exports.Tabs = _tabs.default;

var _tooltip = __webpack_require__(/*! ./tooltip */ "./node_modules/bootstrap-vue/es/components/tooltip/index.js");

exports.Tooltip = _tooltip.default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/input-group/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/input-group/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _inputGroup = __webpack_require__(/*! ./input-group */ "./node_modules/bootstrap-vue/es/components/input-group/input-group.js");

var _inputGroupAddon = __webpack_require__(/*! ./input-group-addon */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-addon.js");

var _inputGroupPrepend = __webpack_require__(/*! ./input-group-prepend */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-prepend.js");

var _inputGroupAppend = __webpack_require__(/*! ./input-group-append */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-append.js");

var _inputGroupText = __webpack_require__(/*! ./input-group-text */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-text.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BInputGroup: _inputGroup.default,
  BInputGroupAddon: _inputGroupAddon.default,
  BInputGroupPrepend: _inputGroupPrepend.default,
  BInputGroupAppend: _inputGroupAppend.default,
  BInputGroupText: _inputGroupText.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/input-group/input-group-addon.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/input-group/input-group-addon.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.commonProps = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _inputGroupText = __webpack_require__(/*! ./input-group-text */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-text.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commonProps = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  isText: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.commonProps = commonProps;
var _default = {
  name: 'BInputGroupAddon',
  functional: true,
  props: _objectSpread({}, commonProps, {
    append: {
      type: Boolean,
      default: false
    }
  }),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        'input-group-append': props.append,
        'input-group-prepend': !props.append
      },
      attrs: {
        id: props.id
      }
    }), props.isText ? [h(_inputGroupText.default, children)] : children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/input-group/input-group-append.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/input-group/input-group-append.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _inputGroupAddon = __webpack_require__(/*! ./input-group-addon */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-addon.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BInputGroupAppend',
  functional: true,
  props: _inputGroupAddon.commonProps,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    // pass all our props/attrs down to child, and set`append` to true
    return h(_inputGroupAddon.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: _objectSpread({}, props, {
        append: true
      })
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/input-group/input-group-prepend.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/input-group/input-group-prepend.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _inputGroupAddon = __webpack_require__(/*! ./input-group-addon */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-addon.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BInputGroupPrepend',
  functional: true,
  props: _inputGroupAddon.commonProps,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    // pass all our props/attrs down to child, and set`append` to false
    return h(_inputGroupAddon.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      props: _objectSpread({}, props, {
        append: false
      })
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/input-group/input-group-text.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/input-group/input-group-text.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BInputGroupText',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'input-group-text'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/input-group/input-group.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/input-group/input-group.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _inputGroupPrepend = __webpack_require__(/*! ./input-group-prepend */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-prepend.js");

var _inputGroupAppend = __webpack_require__(/*! ./input-group-append */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-append.js");

var _inputGroupText = __webpack_require__(/*! ./input-group-text */ "./node_modules/bootstrap-vue/es/components/input-group/input-group-text.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var props = {
  id: {
    type: String
  },
  size: {
    type: String
  },
  prepend: {
    type: String
  },
  prependHTML: {
    type: String
  },
  append: {
    type: String
  },
  appendHTML: {
    type: String
  },
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BInputGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var $slots = slots();
    var childNodes = []; // Prepend prop

    if (props.prepend) {
      childNodes.push(h(_inputGroupPrepend.default, [h(_inputGroupText.default, {
        domProps: (0, _html.htmlOrText)(props.prependHTML, props.prepend)
      })]));
    } else {
      childNodes.push(h(false));
    } // Prepend slot


    if ($slots.prepend) {
      childNodes.push(h(_inputGroupPrepend.default, $slots.prepend));
    } else {
      childNodes.push(h(false));
    } // Default slot


    if ($slots.default) {
      childNodes.push.apply(childNodes, _toConsumableArray($slots.default));
    } else {
      childNodes.push(h(false));
    } // Append prop


    if (props.append) {
      childNodes.push(h(_inputGroupAppend.default, [h(_inputGroupText.default, {
        domProps: (0, _html.htmlOrText)(props.appendHTML, props.append)
      })]));
    } else {
      childNodes.push(h(false));
    } // Append slot


    if ($slots.append) {
      childNodes.push(h(_inputGroupAppend.default, $slots.append));
    } else {
      childNodes.push(h(false));
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'input-group',
      class: _defineProperty({}, "input-group-".concat(props.size), Boolean(props.size)),
      attrs: {
        id: props.id || null,
        role: 'group'
      }
    }), childNodes);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/jumbotron/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/jumbotron/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _jumbotron = __webpack_require__(/*! ./jumbotron */ "./node_modules/bootstrap-vue/es/components/jumbotron/jumbotron.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BJumbotron: _jumbotron.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/jumbotron/jumbotron.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/jumbotron/jumbotron.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

var _container = __webpack_require__(/*! ../layout/container */ "./node_modules/bootstrap-vue/es/components/layout/container.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  fluid: {
    type: Boolean,
    default: false
  },
  containerFluid: {
    type: Boolean,
    default: false
  },
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerTag: {
    type: String,
    default: 'h1'
  },
  headerLevel: {
    type: [Number, String],
    default: '3'
  },
  lead: {
    type: String,
    default: null
  },
  leadHtml: {
    type: String,
    default: null
  },
  leadTag: {
    type: String,
    default: 'p'
  },
  tag: {
    type: String,
    default: 'div'
  },
  bgVariant: {
    type: String,
    default: null
  },
  borderVariant: {
    type: String,
    default: null
  },
  textVariant: {
    type: String,
    default: null
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BJumbotron',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class2;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    // The order of the conditionals matter.
    // We are building the component markup in order.
    var childNodes = [];
    var $slots = slots(); // Header

    if (props.header || $slots.header || props.headerHtml) {
      childNodes.push(h(props.headerTag, {
        class: _defineProperty({}, "display-".concat(props.headerLevel), Boolean(props.headerLevel))
      }, $slots.header || props.headerHtml || (0, _html.stripTags)(props.header)));
    } // Lead


    if (props.lead || $slots.lead || props.leadHtml) {
      childNodes.push(h(props.leadTag, {
        staticClass: 'lead'
      }, $slots.lead || props.leadHtml || (0, _html.stripTags)(props.lead)));
    } // Default slot


    if ($slots.default) {
      childNodes.push($slots.default);
    } // If fluid, wrap content in a container/container-fluid


    if (props.fluid) {
      // Children become a child of a container
      childNodes = [h(_container.default, {
        props: {
          fluid: props.containerFluid
        }
      }, childNodes)];
    } // Return the jumbotron


    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'jumbotron',
      class: (_class2 = {
        'jumbotron-fluid': props.fluid
      }, _defineProperty(_class2, "text-".concat(props.textVariant), Boolean(props.textVariant)), _defineProperty(_class2, "bg-".concat(props.bgVariant), Boolean(props.bgVariant)), _defineProperty(_class2, "border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_class2, "border", Boolean(props.borderVariant)), _class2)
    }), childNodes);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/layout/col.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/layout/col.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _memoize = __webpack_require__(/*! ../../utils/memoize */ "./node_modules/bootstrap-vue/es/utils/memoize.js");

var _suffixPropName = __webpack_require__(/*! ../../utils/suffix-prop-name */ "./node_modules/bootstrap-vue/es/utils/suffix-prop-name.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Generates a prop object with a type of
 * [Boolean, String, Number]
 */
function boolStrNum() {
  return {
    type: [Boolean, String, Number],
    default: false
  };
}
/**
 * Generates a prop object with a type of
 * [String, Number]
 */


function strNum() {
  return {
    type: [String, Number],
    default: null
  };
} // Async (lazy) component
// So that we can generate breakpoint specific props once the config has been updated.
//
// See: https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components


var _default = function _default(resolve, reject) {
  // Grab the breakpoints from the config (exclude the '' (xs) breakpoint)
  var breakpoints = (0, _config.getBreakpointsUp)().filter(Boolean); // Memoized function for better performance on generating class names

  var computeBkPtClass = (0, _memoize.default)(function computeBkPt(type, breakpoint, val) {
    var className = type;

    if (val === false || val === null || val === undefined) {
      return undefined;
    }

    if (breakpoint) {
      className += "-".concat(breakpoint);
    } // Handling the boolean style prop when accepting [Boolean, String, Number]
    // means Vue will not convert <b-col sm></b-col> to sm: true for us.
    // Since the default is false, an empty string indicates the prop's presence.


    if (type === 'col' && (val === '' || val === true)) {
      // .col-md
      return className.toLowerCase();
    } // .order-md-6


    className += "-".concat(val);
    return className.toLowerCase();
  }); // Supports classes like: .col-sm, .col-md-6, .col-lg-auto

  var breakpointCol = breakpoints.reduce(function (propMap, breakpoint) {
    if (breakpoint) {
      // We filter out the '' breakpoint (xs), as making a prop name ''
      // would not work. The `cols` prop is used for `xs`
      propMap[breakpoint] = boolStrNum();
    }

    return propMap;
  }, (0, _object.create)(null)); // Supports classes like: .offset-md-1, .offset-lg-12

  var breakpointOffset = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[(0, _suffixPropName.default)(breakpoint, 'offset')] = strNum();
    return propMap;
  }, (0, _object.create)(null)); // Supports classes like: .order-md-1, .order-lg-12

  var breakpointOrder = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[(0, _suffixPropName.default)(breakpoint, 'order')] = strNum();
    return propMap;
  }, (0, _object.create)(null)); // For loop doesn't need to check hasOwnProperty
  // when using an object created from null

  var breakpointPropMap = (0, _object.assign)((0, _object.create)(null), {
    col: (0, _object.keys)(breakpointCol),
    offset: (0, _object.keys)(breakpointOffset),
    order: (0, _object.keys)(breakpointOrder)
  });
  /**
   * We need ".col" to default in when no other props are passed,
   * but always render when col=true.
   */
  // @vue/component

  var BCol = {
    name: 'BCol',
    functional: true,
    props: _objectSpread({
      // Generic flexbox .col (xs)
      col: {
        type: Boolean,
        default: false
      },
      // .col-[1-12]|auto  (xs)
      cols: strNum()
    }, breakpointCol, {
      offset: strNum()
    }, breakpointOffset, {
      order: strNum()
    }, breakpointOrder, {
      // Flex alignment
      alignSelf: {
        type: String,
        default: null,
        validator: function validator(str) {
          return (0, _array.arrayIncludes)(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], str);
        }
      },
      tag: {
        type: String,
        default: 'div'
      }
    }),
    render: function render(h, _ref) {
      var _classList$push;

      var props = _ref.props,
          data = _ref.data,
          children = _ref.children;
      var classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      for (var type in breakpointPropMap) {
        // Returns colSm, offset, offsetSm, orderMd, etc.
        var _keys = breakpointPropMap[type];

        for (var i = 0; i < _keys.length; i++) {
          // computeBkPt(col, colSm => Sm, value=[String, Number, Boolean])
          var c = computeBkPtClass(type, _keys[i].replace(type, ''), props[_keys[i]]); // If a class is returned, push it onto the array.

          if (c) {
            classList.push(c);
          }
        }
      }

      classList.push((_classList$push = {
        // Default to .col if no other classes generated nor `cols` specified.
        col: props.col || classList.length === 0 && !props.cols
      }, _defineProperty(_classList$push, "col-".concat(props.cols), props.cols), _defineProperty(_classList$push, "offset-".concat(props.offset), props.offset), _defineProperty(_classList$push, "order-".concat(props.order), props.order), _defineProperty(_classList$push, "align-self-".concat(props.alignSelf), props.alignSelf), _classList$push));
      return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
        class: classList
      }), children);
    }
  }; // Return the config on demand

  resolve(BCol);
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/layout/container.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/layout/container.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  fluid: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BContainer',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        container: !props.fluid,
        'container-fluid': props.fluid
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/layout/form-row.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/layout/form-row.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BFormRow',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'form-row'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/layout/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/layout/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _container = __webpack_require__(/*! ./container */ "./node_modules/bootstrap-vue/es/components/layout/container.js");

var _row = __webpack_require__(/*! ./row */ "./node_modules/bootstrap-vue/es/components/layout/row.js");

var _col = __webpack_require__(/*! ./col */ "./node_modules/bootstrap-vue/es/components/layout/col.js");

var _formRow = __webpack_require__(/*! ./form-row */ "./node_modules/bootstrap-vue/es/components/layout/form-row.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BContainer: _container.default,
  BRow: _row.default,
  BCol: _col.default,
  BFormRow: _formRow.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/layout/row.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/layout/row.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COMMON_ALIGNMENT = ['start', 'end', 'center'];
var props = {
  tag: {
    type: String,
    default: 'div'
  },
  noGutters: {
    type: Boolean,
    default: false
  },
  alignV: {
    type: String,
    default: null,
    validator: function validator(str) {
      return (0, _array.arrayIncludes)(COMMON_ALIGNMENT.concat(['baseline', 'stretch']), str);
    }
  },
  alignH: {
    type: String,
    default: null,
    validator: function validator(str) {
      return (0, _array.arrayIncludes)(COMMON_ALIGNMENT.concat(['between', 'around']), str);
    }
  },
  alignContent: {
    type: String,
    default: null,
    validator: function validator(str) {
      return (0, _array.arrayIncludes)(COMMON_ALIGNMENT.concat(['between', 'around', 'stretch']), str);
    }
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BRow',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'row',
      class: (_class = {
        'no-gutters': props.noGutters
      }, _defineProperty(_class, "align-items-".concat(props.alignV), props.alignV), _defineProperty(_class, "justify-content-".concat(props.alignH), props.alignH), _defineProperty(_class, "align-content-".concat(props.alignContent), props.alignContent), _class)
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/link/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/link/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _link = __webpack_require__(/*! ./link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BLink: _link.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/link/link.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/link/link.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.propsFactory = propsFactory;
exports.pickLinkProps = pickLinkProps;
exports.omitLinkProps = omitLinkProps;
exports.default = exports.props = void 0;

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _router = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/es/utils/router.js");

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The Link component is used in many other BV components.
 * As such, sharing its props makes supporting all its features easier.
 * However, some components need to modify the defaults for their own purpose.
 * Prefer sharing a fresh copy of the props to ensure mutations
 * do not affect other component references to the props.
 *
 * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 * @return {{}}
 */
function propsFactory() {
  return {
    href: {
      type: String,
      default: null
    },
    rel: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // router-link specific props
    to: {
      type: [String, Object],
      default: null
    },
    append: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: false
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    activeClass: {
      type: String // default: undefined

    },
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: {
      type: String // default: undefined

    },
    routerTag: {
      type: String,
      default: 'a'
    },
    // nuxt-link specific prop(s)
    noPrefetch: {
      type: Boolean,
      default: false
    }
  };
}

var props = propsFactory(); // Return a fresh copy of BLink props, containing only the specifeid prop(s)

exports.props = props;

function pickLinkProps(propsToPick) {
  var freshLinkProps = propsFactory(); // Normalize everything to array.

  propsToPick = (0, _array.concat)(propsToPick);
  return (0, _object.keys)(freshLinkProps).reduce(function (memo, prop) {
    if ((0, _array.arrayIncludes)(propsToPick, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
} // Return a fresh copy of BLink props, keeping all but the specified omitting prop(s)


function omitLinkProps(propsToOmit) {
  var freshLinkProps = propsFactory(); // Normalize everything to array.

  propsToOmit = (0, _array.concat)(propsToOmit);
  return (0, _object.keys)(props).reduce(function (memo, prop) {
    if (!(0, _array.arrayIncludes)(propsToOmit, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
}

function clickHandlerFactory(_ref) {
  var disabled = _ref.disabled,
      tag = _ref.tag,
      href = _ref.href,
      suppliedHandler = _ref.suppliedHandler,
      parent = _ref.parent;
  return function onClick(evt) {
    if (disabled && evt instanceof Event) {
      // Stop event from bubbling up.
      evt.stopPropagation(); // Kill the event loop attached to this specific EventTarget.

      evt.stopImmediatePropagation();
    } else {
      if ((0, _router.isRouterLink)(tag) && evt.target.__vue__) {
        // Router links do not emit instance 'click' events, so we
        // add in an $emit('click', evt) on it's vue instance
        evt.target.__vue__.$emit('click', evt);
      }

      if (typeof suppliedHandler === 'function') {
        suppliedHandler.apply(void 0, arguments);
      }

      parent.$root.$emit('clicked::link', evt);
    }

    if (!(0, _router.isRouterLink)(tag) && href === '#' || disabled) {
      // Stop scroll-to-top behavior or navigation on regular links
      // when href is just '#'
      evt.preventDefault();
    }
  };
} // @vue/component


var _default = {
  name: 'BLink',
  functional: true,
  props: propsFactory(),
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        parent = _ref2.parent,
        children = _ref2.children;
    var tag = (0, _router.computeTag)(props, parent);
    var rel = (0, _router.computeRel)(props);
    var href = (0, _router.computeHref)(props, tag);
    var eventType = (0, _router.isRouterLink)(tag) ? 'nativeOn' : 'on';
    var suppliedHandler = (data[eventType] || {}).click;
    var handlers = {
      click: clickHandlerFactory({
        tag: tag,
        href: href,
        disabled: props.disabled,
        suppliedHandler: suppliedHandler,
        parent: parent
      })
    };
    var componentData = (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        active: props.active,
        disabled: props.disabled
      },
      attrs: {
        rel: rel,
        target: props.target,
        tabindex: props.disabled ? '-1' : data.attrs ? data.attrs.tabindex : null,
        'aria-disabled': props.disabled ? 'true' : null
      },
      props: _objectSpread({}, props, {
        tag: props.routerTag
      })
    }); // If href attribute exists on router-link (even undefined or null) it fails working on SSR
    // So we explicitly add it here if needed (i.e. if computeHref() is truthy)

    if (href) {
      componentData.attrs.href = href;
    } // We want to overwrite any click handler since our callback
    // will invoke the user supplied handler if !props.disabled


    componentData[eventType] = _objectSpread({}, componentData[eventType] || {}, handlers);
    return h(tag, componentData, children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/list-group/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/list-group/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _listGroup = __webpack_require__(/*! ./list-group */ "./node_modules/bootstrap-vue/es/components/list-group/list-group.js");

var _listGroupItem = __webpack_require__(/*! ./list-group-item */ "./node_modules/bootstrap-vue/es/components/list-group/list-group-item.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BListGroup: _listGroup.default,
  BListGroupItem: _listGroupItem.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/list-group/list-group-item.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/list-group/list-group-item.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _pluckProps = __webpack_require__(/*! ../../utils/pluck-props */ "./node_modules/bootstrap-vue/es/utils/pluck-props.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _link = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionTags = ['a', 'router-link', 'button', 'b-link'];
var linkProps = (0, _link.propsFactory)();
delete linkProps.href.default;
delete linkProps.to.default;

var props = _objectSpread({
  tag: {
    type: String,
    default: 'div'
  },
  action: {
    type: Boolean,
    default: null
  },
  button: {
    type: Boolean,
    default: null
  },
  variant: {
    type: String,
    default: null
  }
}, linkProps); // @vue/component


exports.props = props;
var _default = {
  name: 'BListGroupItem',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tag = props.button ? 'button' : !props.href && !props.to ? props.tag : _link.default;
    var isAction = Boolean(props.href || props.to || props.action || props.button || (0, _array.arrayIncludes)(actionTags, props.tag));
    var attrs = {};
    var itemProps = {};

    if (tag === 'button') {
      if (!data.attrs || !data.attrs.type) {
        // Add a type for button is one not provided in passed attributes
        attrs.type = 'button';
      }

      if (props.disabled) {
        // Set disabled attribute if button and disabled
        attrs.disabled = true;
      }
    } else {
      itemProps = (0, _pluckProps.default)(linkProps, props);
    }

    var componentData = {
      attrs: attrs,
      props: itemProps,
      staticClass: 'list-group-item',
      class: (_class = {}, _defineProperty(_class, "list-group-item-".concat(props.variant), Boolean(props.variant)), _defineProperty(_class, 'list-group-item-action', isAction), _defineProperty(_class, "active", props.active), _defineProperty(_class, "disabled", props.disabled), _class)
    };
    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/list-group/list-group.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/list-group/list-group.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  flush: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: [Boolean, String],
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BListGroup',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var horizontal = props.horizontal === '' ? true : props.horizontal;
    horizontal = props.flush ? false : horizontal;
    var componentData = {
      staticClass: 'list-group',
      class: _defineProperty({
        'list-group-flush': props.flush,
        'list-group-horizontal': horizontal === true
      }, "list-group-horizontal-".concat(horizontal), typeof horizontal === 'string')
    };
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/media/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/media/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _media = __webpack_require__(/*! ./media */ "./node_modules/bootstrap-vue/es/components/media/media.js");

var _mediaAside = __webpack_require__(/*! ./media-aside */ "./node_modules/bootstrap-vue/es/components/media/media-aside.js");

var _mediaBody = __webpack_require__(/*! ./media-body */ "./node_modules/bootstrap-vue/es/components/media/media-body.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BMedia: _media.default,
  BMediaAside: _mediaAside.default,
  BMediaBody: _mediaBody.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/media/media-aside.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/media/media-aside.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  verticalAlign: {
    type: String,
    default: 'top'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BMediaAside',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'd-flex',
      class: _defineProperty({}, "align-self-".concat(props.verticalAlign), props.verticalAlign)
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/media/media-body.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/media/media-body.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  tag: {
    type: String,
    default: 'div'
  }
};
exports.props = props;
var _default = {
  name: 'BMediaBody',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'media-body'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/media/media.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/media/media.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _mediaBody = __webpack_require__(/*! ./media-body */ "./node_modules/bootstrap-vue/es/components/media/media-body.js");

var _mediaAside = __webpack_require__(/*! ./media-aside */ "./node_modules/bootstrap-vue/es/components/media/media-aside.js");

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  rightAlign: {
    type: Boolean,
    default: false
  },
  verticalAlign: {
    type: String,
    default: 'top'
  },
  noBody: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BMedia',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        children = _ref.children;
    var childNodes = props.noBody ? children : [];
    var $slots = slots();

    if (!props.noBody) {
      if ($slots.aside && !props.rightAlign) {
        childNodes.push(h(_mediaAside.default, {
          staticClass: 'mr-3',
          props: {
            verticalAlign: props.verticalAlign
          }
        }, $slots.aside));
      }

      childNodes.push(h(_mediaBody.default, $slots.default));

      if ($slots.aside && props.rightAlign) {
        childNodes.push(h(_mediaAside.default, {
          staticClass: 'ml-3',
          props: {
            verticalAlign: props.verticalAlign
          }
        }, $slots.aside));
      }
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'media'
    }), childNodes);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/modal/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/modal/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _modal = __webpack_require__(/*! ./modal */ "./node_modules/bootstrap-vue/es/components/modal/modal.js");

var _modal2 = __webpack_require__(/*! ../../directives/modal */ "./node_modules/bootstrap-vue/es/directives/modal/index.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BModal: _modal.default
};
var plugins = {
  BModalDirectivePlugin: _modal2.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/modal/modal.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/modal/modal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _button = __webpack_require__(/*! ../button/button */ "./node_modules/bootstrap-vue/es/components/button/button.js");

var _buttonClose = __webpack_require__(/*! ../button/button-close */ "./node_modules/bootstrap-vue/es/components/button/button-close.js");

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _listenOnRoot = __webpack_require__(/*! ../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/es/mixins/listen-on-root.js");

var _observeDom = __webpack_require__(/*! ../../utils/observe-dom */ "./node_modules/bootstrap-vue/es/utils/observe-dom.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _keyCodes = __webpack_require__(/*! ../../utils/key-codes */ "./node_modules/bootstrap-vue/es/utils/key-codes.js");

var _bvEvent = __webpack_require__(/*! ../../utils/bv-event.class */ "./node_modules/bootstrap-vue/es/utils/bv-event.class.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BModal'; // Selectors for padding/margin adjustments

var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler' // ObserveDom config

};
var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['style', 'class'] // modal wrapper ZINDEX offset incrememnt

};
var ZINDEX_OFFSET = 2000; // Modal open count helpers

function getModalOpenCount() {
  return parseInt((0, _dom.getAttr)(document.body, 'data-modal-open-count') || 0, 10);
}

function setModalOpenCount(count) {
  (0, _dom.setAttr)(document.body, 'data-modal-open-count', String(count));
  return count;
}

function incrementModalOpenCount() {
  return setModalOpenCount(getModalOpenCount() + 1);
}

function decrementModalOpenCount() {
  return setModalOpenCount(Math.max(getModalOpenCount() - 1, 0));
} // Returns the current visible modal highest z-index


function getModalMaxZIndex() {
  return (0, _dom.selectAll)('div.modal')
  /* find all modals that are in document */
  .filter(_dom.isVisible)
  /* filter only visible ones */
  .map(function (m) {
    return m.parentElement;
  })
  /* select the outer div */
  .reduce(function (max, el) {
    /* compute the highest z-index */
    return Math.max(max, parseInt(el.style.zIndex || 0, 10));
  }, 0);
} // Returns the next z-index to be used by a modal to ensure proper stacking
// regardless of document order. Increments by 2000


function getModalNextZIndex() {
  return getModalMaxZIndex() + ZINDEX_OFFSET;
} // @vue/component


var _default2 = {
  name: NAME,
  components: {
    BButton: _button.default,
    BButtonClose: _buttonClose.default
  },
  mixins: [_id.default, _listenOnRoot.default],
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleHtml: {
      type: String
    },
    titleTag: {
      type: String,
      default: 'h5'
    },
    size: {
      type: String,
      default: 'md'
    },
    centered: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    buttonSize: {
      type: String,
      default: ''
    },
    noStacking: {
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    noCloseOnBackdrop: {
      type: Boolean,
      default: false
    },
    noCloseOnEsc: {
      type: Boolean,
      default: false
    },
    noEnforceFocus: {
      type: Boolean,
      default: false
    },
    headerBgVariant: {
      type: String,
      default: null
    },
    headerBorderVariant: {
      type: String,
      default: null
    },
    headerTextVariant: {
      type: String,
      default: null
    },
    headerCloseVariant: {
      type: String,
      default: null
    },
    headerClass: {
      type: [String, Array],
      default: null
    },
    bodyBgVariant: {
      type: String,
      default: null
    },
    bodyTextVariant: {
      type: String,
      default: null
    },
    modalClass: {
      type: [String, Array],
      default: null
    },
    dialogClass: {
      type: [String, Array],
      default: null
    },
    contentClass: {
      type: [String, Array],
      default: null
    },
    bodyClass: {
      type: [String, Array],
      default: null
    },
    footerBgVariant: {
      type: String,
      default: null
    },
    footerBorderVariant: {
      type: String,
      default: null
    },
    footerTextVariant: {
      type: String,
      default: null
    },
    footerClass: {
      type: [String, Array],
      default: null
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    hideHeaderClose: {
      type: Boolean,
      default: false
    },
    hideBackdrop: {
      type: Boolean,
      default: false
    },
    okOnly: {
      type: Boolean,
      default: false
    },
    okDisabled: {
      type: Boolean,
      default: false
    },
    cancelDisabled: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    returnFocus: {
      // type: Object,
      default: null
    },
    headerCloseLabel: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'headerCloseLabel');
      }
    },
    cancelTitle: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'cancelTitle');
      }
    },
    cancelTitleHtml: {
      type: String
    },
    okTitle: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'okTitle');
      }
    },
    okTitleHtml: {
      type: String
    },
    cancelVariant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'cancelVariant');
      }
    },
    okVariant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'okVariant');
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      is_hidden: this.lazy || false,
      // for lazy modals
      is_visible: false,
      // controls modal visible state
      is_transitioning: false,
      // Used for style control
      is_show: false,
      // Used for style control
      is_block: false,
      // Used for style control
      is_opening: false,
      // Semaphore for previnting incorrect modal open counts
      is_closing: false,
      // Semapbore for preventing incorrect modal open counts
      scrollbarWidth: 0,
      zIndex: ZINDEX_OFFSET,
      // z-index for modal stacking
      isTop: true,
      // If the modal is the topmost opened modal
      isBodyOverflowing: false,
      return_focus: this.returnFocus || null
    };
  },
  computed: {
    contentClasses: function contentClasses() {
      return ['modal-content', this.contentClass];
    },
    modalClasses: function modalClasses() {
      return [{
        fade: !this.noFade,
        show: this.is_show,
        'd-block': this.is_block
      }, this.modalClass];
    },
    dialogClasses: function dialogClasses() {
      var _ref;

      return [(_ref = {}, _defineProperty(_ref, "modal-".concat(this.size), Boolean(this.size)), _defineProperty(_ref, 'modal-dialog-centered', this.centered), _defineProperty(_ref, 'modal-dialog-scrollable', this.scrollable), _ref), this.dialogClass];
    },
    backdropClasses: function backdropClasses() {
      return {
        fade: !this.noFade,
        show: this.is_show || this.noFade
      };
    },
    headerClasses: function headerClasses() {
      var _ref2;

      return [(_ref2 = {}, _defineProperty(_ref2, "bg-".concat(this.headerBgVariant), Boolean(this.headerBgVariant)), _defineProperty(_ref2, "text-".concat(this.headerTextVariant), Boolean(this.headerTextVariant)), _defineProperty(_ref2, "border-".concat(this.headerBorderVariant), Boolean(this.headerBorderVariant)), _ref2), this.headerClass];
    },
    bodyClasses: function bodyClasses() {
      var _ref3;

      return [(_ref3 = {}, _defineProperty(_ref3, "bg-".concat(this.bodyBgVariant), Boolean(this.bodyBgVariant)), _defineProperty(_ref3, "text-".concat(this.bodyTextVariant), Boolean(this.bodyTextVariant)), _ref3), this.bodyClass];
    },
    footerClasses: function footerClasses() {
      var _ref4;

      return [(_ref4 = {}, _defineProperty(_ref4, "bg-".concat(this.footerBgVariant), Boolean(this.footerBgVariant)), _defineProperty(_ref4, "text-".concat(this.footerTextVariant), Boolean(this.footerTextVariant)), _defineProperty(_ref4, "border-".concat(this.footerBorderVariant), Boolean(this.footerBorderVariant)), _ref4), this.footerClass];
    },
    modalOuterStyle: function modalOuterStyle() {
      return {
        // We only set these styles on the stacked modals (ones with next z-index > 0).
        position: 'absolute',
        zIndex: this.zIndex
      };
    }
  },
  watch: {
    visible: function visible(newVal, oldVal) {
      if (newVal === oldVal) {
        /* istanbul ignore next */
        return;
      }

      this[newVal ? 'show' : 'hide']();
    }
  },
  created: function created() {
    // create non-reactive property
    this._observer = null;
  },
  mounted: function mounted() {
    // Listen for events from others to either open or close ourselves
    // And listen to all modals to enable/disable enforce focus
    this.listenOnRoot('bv::show::modal', this.showHandler);
    this.listenOnRoot('bv::modal::shown', this.shownHandler);
    this.listenOnRoot('bv::hide::modal', this.hideHandler);
    this.listenOnRoot('bv::modal::hidden', this.hiddenHandler);
    this.listenOnRoot('bv::toggle::modal', this.toggleHandler); // Listen for bv:modal::show events, and close ourselves if the opening modal not us

    this.listenOnRoot('bv::modal::show', this.modalListener); // Initially show modal?

    if (this.visible === true) {
      this.show();
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    // Ensure everything is back to normal
    if (this._observer) {
      this._observer.disconnect();

      this._observer = null;
    } // Ensure our root "once" listener is gone


    this.$root.$off('bv::modal::hidden', this.doShow);
    this.setEnforceFocus(false);
    this.setResizeEvent(false);

    if (this.is_visible) {
      this.is_visible = false;
      this.is_show = false;
      this.is_transitioning = false;
      var count = decrementModalOpenCount();

      if (count === 0) {
        // Re-adjust body/navbar/fixed padding/margins (as we were the last modal open)
        this.setModalOpenClass(false);
        this.resetScrollbar();
        this.resetDialogAdjustments();
      }
    }
  },
  methods: {
    // Public Methods
    show: function show() {
      if (this.is_visible || this.is_opening) {
        // if already open, on in the process of opening, do nothing
        return;
      }

      if (this.is_closing) {
        // if we are in the process of closing, wait until hidden before re-opening
        this.$once('hidden', this.show);
        return;
      }

      this.is_opening = true;
      var showEvt = new _bvEvent.default('show', {
        cancelable: true,
        vueTarget: this,
        target: this.$refs.modal,
        modalId: this.safeId(),
        relatedTarget: null
      });
      this.emitEvent(showEvt); // Don't show if canceled

      if (showEvt.defaultPrevented || this.is_visible) {
        this.is_opening = false;
        return;
      }

      if (!this.noStacking) {
        // Find the z-index to use
        this.zIndex = getModalNextZIndex(); // Show the modal

        this.doShow();
        return;
      }

      if ((0, _dom.hasClass)(document.body, 'modal-open')) {
        // If another modal is already open, wait for it to close
        this.$root.$once('bv::modal::hidden', this.doShow);
        return;
      } // Show the modal


      this.doShow();
    },
    hide: function hide(trigger) {
      if (!this.is_visible || this.is_closing) {
        return;
      }

      this.is_closing = true;
      var hideEvt = new _bvEvent.default('hide', {
        cancelable: true,
        vueTarget: this,
        target: this.$refs.modal,
        modalId: this.safeId(),
        // this could be the trigger element/component reference
        relatedTarget: null,
        isOK: trigger || null,
        trigger: trigger || null,
        cancel: function cancel()
        /* istanbul ignore next */
        {
          // Backwards compatibility
          (0, _warn.default)('b-modal: evt.cancel() is deprecated. Please use evt.preventDefault().');
          this.preventDefault();
        }
      });

      if (trigger === 'ok') {
        this.$emit('ok', hideEvt);
      } else if (trigger === 'cancel') {
        this.$emit('cancel', hideEvt);
      }

      this.emitEvent(hideEvt); // Hide if not canceled

      if (hideEvt.defaultPrevented || !this.is_visible) {
        this.is_closing = false;
        return;
      } // stop observing for content changes


      if (this._observer) {
        this._observer.disconnect();

        this._observer = null;
      }

      this.is_visible = false;
      this.$emit('change', false);
    },
    // Public method to toggle modal visibility
    toggle: function toggle(triggerEl) {
      if (triggerEl) {
        this.return_focus = triggerEl;
      }

      if (this.is_visible) {
        this.hide('toggle');
      } else {
        this.show();
      }
    },
    // Private method to finish showing modal
    doShow: function doShow() {
      var _this = this;

      // Place modal in DOM if lazy
      this.is_hidden = false;
      this.$nextTick(function () {
        // We do this in nextTick to ensure the modal is in DOM first before we show it
        _this.is_visible = true;
        _this.is_opening = false;

        _this.$emit('change', true); // Observe changes in modal content and adjust if necessary


        _this._observer = (0, _observeDom.default)(_this.$refs.content, _this.adjustDialog.bind(_this), OBSERVER_CONFIG);
      });
    },
    // Transition Handlers
    onBeforeEnter: function onBeforeEnter() {
      this.getScrollbarWidth();
      this.is_transitioning = true;
      this.checkScrollbar();
      var count = incrementModalOpenCount();

      if (count === 1) {
        this.setScrollbar();
      }

      this.adjustDialog();
      this.setModalOpenClass(true);
      this.setResizeEvent(true);
    },
    onEnter: function onEnter() {
      this.is_block = true;
    },
    onAfterEnter: function onAfterEnter() {
      var _this2 = this;

      this.is_show = true;
      this.is_transitioning = false;
      this.$nextTick(function () {
        var shownEvt = new _bvEvent.default('shown', {
          cancelable: false,
          vueTarget: _this2,
          target: _this2.$refs.modal,
          modalId: _this2.safeId(),
          relatedTarget: null
        });

        _this2.emitEvent(shownEvt);

        _this2.focusFirst();

        _this2.setEnforceFocus(true);
      });
    },
    onBeforeLeave: function onBeforeLeave() {
      this.is_transitioning = true;
      this.setResizeEvent(false);
    },
    onLeave: function onLeave() {
      // Remove the 'show' class
      this.is_show = false;
    },
    onAfterLeave: function onAfterLeave() {
      var _this3 = this;

      this.is_block = false;
      this.resetDialogAdjustments();
      this.is_transitioning = false;
      var count = decrementModalOpenCount();

      if (count === 0) {
        this.resetScrollbar();
        this.setModalOpenClass(false);
      }

      this.setEnforceFocus(false);
      this.$nextTick(function () {
        _this3.is_hidden = _this3.lazy || false;
        _this3.zIndex = ZINDEX_OFFSET;

        _this3.returnFocusTo();

        _this3.is_closing = false;
        var hiddenEvt = new _bvEvent.default('hidden', {
          cancelable: false,
          vueTarget: _this3,
          target: _this3.lazy ? null : _this3.$refs.modal,
          modalId: _this3.safeId(),
          relatedTarget: null
        });

        _this3.emitEvent(hiddenEvt);
      });
    },
    // Event emitter
    emitEvent: function emitEvent(bvEvt) {
      var type = bvEvt.type;
      this.$emit(type, bvEvt);
      this.$root.$emit("bv::modal::".concat(type), bvEvt, this.safeId());
    },
    // UI Event Handlers
    onClickOut: function onClickOut(evt) {
      // Do nothing if not visible, backdrop click disabled, or element that generated
      // click event is no longer in document
      if (!this.is_visible || this.noCloseOnBackdrop || !(0, _dom.contains)(document, evt.target)) {
        return;
      } // If backdrop clicked, hide modal


      if (!(0, _dom.contains)(this.$refs.content, evt.target)) {
        this.hide('backdrop');
      }
    },
    onEsc: function onEsc(evt) {
      // If ESC pressed, hide modal
      if (evt.keyCode === _keyCodes.default.ESC && this.is_visible && !this.noCloseOnEsc) {
        this.hide('esc');
      }
    },
    // Document focusin listener
    focusHandler: function focusHandler(evt) {
      // If focus leaves modal, bring it back
      var modal = this.$refs.modal;

      if (!this.noEnforceFocus && this.isTop && this.is_visible && modal && document !== evt.target && !(0, _dom.contains)(modal, evt.target)) {
        modal.focus({
          preventScroll: true
        });
      }
    },
    // Turn on/off focusin listener
    setEnforceFocus: function setEnforceFocus(on) {
      var options = {
        passive: true,
        capture: false
      };

      if (on) {
        (0, _dom.eventOn)(document, 'focusin', this.focusHandler, options);
      } else {
        (0, _dom.eventOff)(document, 'focusin', this.focusHandler, options);
      }
    },
    // Resize Listener
    setResizeEvent: function setResizeEvent(on)
    /* istanbul ignore next: can't easily test in JSDOM */
    {
      var _this4 = this;

      ;
      ['resize', 'orientationchange'].forEach(function (evtName) {
        var options = {
          passive: true,
          capture: false
        };

        if (on) {
          (0, _dom.eventOn)(window, evtName, _this4.adjustDialog, options);
        } else {
          (0, _dom.eventOff)(window, evtName, _this4.adjustDialog, options);
        }
      });
    },
    // Root Listener handlers
    showHandler: function showHandler(id, triggerEl) {
      if (id === this.id) {
        this.return_focus = triggerEl || null;
        this.show();
      }
    },
    hideHandler: function hideHandler(id) {
      if (id === this.id) {
        this.hide('event');
      }
    },
    toggleHandler: function toggleHandler(id, triggerEl) {
      if (id === this.id) {
        this.toggle(triggerEl);
      }
    },
    shownHandler: function shownHandler() {
      this.setTop();
    },
    hiddenHandler: function hiddenHandler() {
      this.setTop();
    },
    setTop: function setTop() {
      // Determine if we are the topmost visible modal
      this.isTop = this.zIndex >= getModalMaxZIndex();
    },
    modalListener: function modalListener(bvEvt) {
      // If another modal opens, close this one
      if (this.noStacking && bvEvt.vueTarget !== this) {
        this.hide();
      }
    },
    // Focus control handlers
    focusFirst: function focusFirst() {
      // Don't try and focus if we are SSR
      if (typeof document === 'undefined') {
        return;
      }

      var modal = this.$refs.modal;
      var activeElement = document.activeElement;

      if (activeElement && (0, _dom.contains)(modal, activeElement)) {
        // If activeElement is child of modal or is modal, no need to change focus
        return;
      }

      if (modal) {
        // make sure top of modal is showing (if longer than the viewport) and
        // focus the modal content wrapper
        this.$nextTick(function () {
          modal.scrollTop = 0;
          modal.focus();
        });
      }
    },
    returnFocusTo: function returnFocusTo() {
      // Prefer returnFocus prop over event specified return_focus value
      var el = this.returnFocus || this.return_focus || null;

      if (typeof el === 'string') {
        // CSS Selector
        el = (0, _dom.select)(el);
      }

      if (el) {
        el = el.$el || el;

        if ((0, _dom.isVisible)(el)) {
          el.focus();
        }
      }
    },
    // Utility methods
    getScrollbarWidth: function getScrollbarWidth() {
      var scrollDiv = document.createElement('div');
      scrollDiv.className = 'modal-scrollbar-measure';
      document.body.appendChild(scrollDiv);
      this.scrollbarWidth = (0, _dom.getBCR)(scrollDiv).width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    },
    setModalOpenClass: function setModalOpenClass(open) {
      if (open) {
        (0, _dom.addClass)(document.body, 'modal-open');
      } else {
        (0, _dom.removeClass)(document.body, 'modal-open');
      }
    },
    adjustDialog: function adjustDialog() {
      if (!this.is_visible) {
        return;
      }

      var modal = this.$refs.modal;
      var isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;

      if (!this.isBodyOverflowing && isModalOverflowing) {
        modal.style.paddingLeft = "".concat(this.scrollbarWidth, "px");
      } else {
        modal.style.paddingLeft = '';
      }

      if (this.isBodyOverflowing && !isModalOverflowing) {
        modal.style.paddingRight = "".concat(this.scrollbarWidth, "px");
      } else {
        modal.style.paddingRight = '';
      }
    },
    resetDialogAdjustments: function resetDialogAdjustments() {
      var modal = this.$refs.modal;

      if (modal) {
        modal.style.paddingLeft = '';
        modal.style.paddingRight = '';
      }
    },
    checkScrollbar: function checkScrollbar()
    /* istanbul ignore next: getBCR can't be tested in JSDOM */
    {
      var _getBCR = (0, _dom.getBCR)(document.body),
          left = _getBCR.left,
          right = _getBCR.right,
          height = _getBCR.height; // Extra check for body.height needed for stacked modals


      this.isBodyOverflowing = left + right < window.innerWidth || height > window.innerHeight;
    },
    setScrollbar: function setScrollbar() {
      /* istanbul ignore if: get Computed Style can't be tested in JSDOM */
      if (this.isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var body = document.body;
        var scrollbarWidth = this.scrollbarWidth;
        body._paddingChangedForModal = [];
        body._marginChangedForModal = []; // Adjust fixed content padding

        (0, _dom.selectAll)(Selector.FIXED_CONTENT).forEach(function (el) {
          var actualPadding = el.style.paddingRight;
          var calculatedPadding = (0, _dom.getCS)(el).paddingRight || 0;
          (0, _dom.setAttr)(el, 'data-padding-right', actualPadding);
          el.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");

          body._paddingChangedForModal.push(el);
        }); // Adjust sticky content margin

        (0, _dom.selectAll)(Selector.STICKY_CONTENT).forEach(function (el) {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = (0, _dom.getCS)(el).marginRight || 0;
          (0, _dom.setAttr)(el, 'data-margin-right', actualMargin);
          el.style.marginRight = "".concat(parseFloat(calculatedMargin) - scrollbarWidth, "px");

          body._marginChangedForModal.push(el);
        }); // Adjust navbar-toggler margin

        (0, _dom.selectAll)(Selector.NAVBAR_TOGGLER).forEach(function (el) {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = (0, _dom.getCS)(el).marginRight || 0;
          (0, _dom.setAttr)(el, 'data-margin-right', actualMargin);
          el.style.marginRight = "".concat(parseFloat(calculatedMargin) + scrollbarWidth, "px");

          body._marginChangedForModal.push(el);
        }); // Adjust body padding

        var actualPadding = body.style.paddingRight;
        var calculatedPadding = (0, _dom.getCS)(body).paddingRight;
        (0, _dom.setAttr)(body, 'data-padding-right', actualPadding);
        body.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");
      }
    },
    resetScrollbar: function resetScrollbar() {
      var body = document.body;

      if (body._paddingChangedForModal) {
        // Restore fixed content padding
        body._paddingChangedForModal.forEach(function (el) {
          if ((0, _dom.hasAttr)(el, 'data-padding-right')) {
            el.style.paddingRight = (0, _dom.getAttr)(el, 'data-padding-right') || '';
            (0, _dom.removeAttr)(el, 'data-padding-right');
          }
        });
      }

      if (body._marginChangedForModal) {
        // Restore sticky content and navbar-toggler margin
        body._marginChangedForModal.forEach(function (el) {
          if ((0, _dom.hasAttr)(el, 'data-margin-right')) {
            el.style.marginRight = (0, _dom.getAttr)(el, 'data-margin-right') || '';
            (0, _dom.removeAttr)(el, 'data-margin-right');
          }
        });
      }

      body._paddingChangedForModal = null;
      body._marginChangedForModal = null; // Restore body padding

      if ((0, _dom.hasAttr)(body, 'data-padding-right')) {
        body.style.paddingRight = (0, _dom.getAttr)(body, 'data-padding-right') || '';
        (0, _dom.removeAttr)(body, 'data-padding-right');
      }
    }
  },
  render: function render(h) {
    var _this5 = this;

    var $slots = this.$slots; // Modal Header

    var header = h(false);

    if (!this.hideHeader) {
      var modalHeader = $slots['modal-header'];

      if (!modalHeader) {
        var closeButton = h(false);

        if (!this.hideHeaderClose) {
          closeButton = h('b-button-close', {
            props: {
              disabled: this.is_transitioning,
              ariaLabel: this.headerCloseLabel,
              textVariant: this.headerCloseVariant || this.headerTextVariant
            },
            on: {
              click: function click(evt) {
                _this5.hide('headerclose');
              }
            }
          }, [$slots['modal-header-close']]);
        }

        modalHeader = [h(this.titleTag, {
          class: ['modal-title']
        }, [$slots['modal-title'] || this.titleHtml || (0, _html.stripTags)(this.title)]), closeButton];
      }

      header = h('header', {
        ref: 'header',
        staticClass: 'modal-header',
        class: this.headerClasses,
        attrs: {
          id: this.safeId('__BV_modal_header_')
        }
      }, [modalHeader]);
    } // Modal Body


    var body = h('div', {
      ref: 'body',
      staticClass: 'modal-body',
      class: this.bodyClasses,
      attrs: {
        id: this.safeId('__BV_modal_body_')
      }
    }, [$slots.default]); // Modal Footer

    var footer = h(false);

    if (!this.hideFooter) {
      var modalFooter = $slots['modal-footer'];

      if (!modalFooter) {
        var cancelButton = h(false);

        if (!this.okOnly) {
          cancelButton = h('b-button', {
            props: {
              variant: this.cancelVariant,
              size: this.buttonSize,
              disabled: this.cancelDisabled || this.busy || this.is_transitioning
            },
            on: {
              click: function click(evt) {
                _this5.hide('cancel');
              }
            }
          }, [$slots['modal-cancel'] || this.cancelTitleHtml || (0, _html.stripTags)(this.cancelTitle)]);
        }

        var okButton = h('b-button', {
          props: {
            variant: this.okVariant,
            size: this.buttonSize,
            disabled: this.okDisabled || this.busy || this.is_transitioning
          },
          on: {
            click: function click(evt) {
              _this5.hide('ok');
            }
          }
        }, [$slots['modal-ok'] || this.okTitleHtml || (0, _html.stripTags)(this.okTitle)]);
        modalFooter = [cancelButton, okButton];
      }

      footer = h('footer', {
        ref: 'footer',
        staticClass: 'modal-footer',
        class: this.footerClasses,
        attrs: {
          id: this.safeId('__BV_modal_footer_')
        }
      }, [modalFooter]);
    } // Assemble Modal Content


    var modalContent = h('div', {
      ref: 'content',
      class: this.contentClasses,
      attrs: {
        role: 'document',
        id: this.safeId('__BV_modal_content_'),
        'aria-labelledby': this.hideHeader ? null : this.safeId('__BV_modal_header_'),
        'aria-describedby': this.safeId('__BV_modal_body_')
      }
    }, [header, body, footer]); // Modal Dialog wrapper

    var modalDialog = h('div', {
      staticClass: 'modal-dialog',
      class: this.dialogClasses
    }, [modalContent]); // Modal

    var modal = h('div', {
      ref: 'modal',
      staticClass: 'modal',
      class: this.modalClasses,
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.is_visible,
        expression: 'is_visible'
      }],
      attrs: {
        id: this.safeId(),
        role: 'dialog',
        tabindex: '-1',
        'aria-hidden': this.is_visible ? null : 'true',
        'aria-modal': this.is_visible ? 'true' : null
      },
      on: {
        keydown: this.onEsc,
        click: this.onClickOut
      }
    }, [modalDialog]); // Wrap modal in transition

    modal = h('transition', {
      props: {
        enterClass: '',
        enterToClass: '',
        enterActiveClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      },
      on: {
        'before-enter': this.onBeforeEnter,
        enter: this.onEnter,
        'after-enter': this.onAfterEnter,
        'before-leave': this.onBeforeLeave,
        leave: this.onLeave,
        'after-leave': this.onAfterLeave
      }
    }, [modal]); // Modal Backdrop

    var backdrop = h(false);

    if (!this.hideBackdrop && (this.is_visible || this.is_transitioning)) {
      backdrop = h('div', {
        staticClass: 'modal-backdrop',
        class: this.backdropClasses,
        attrs: {
          id: this.safeId('__BV_modal_backdrop_')
        }
      }, [$slots['modal-backdrop']]);
    } // Tab trap to prevent page from scrolling to next element in tab index during enforce focus tab cycle


    var tabTrap = h(false);

    if (this.is_visible && this.isTop && !this.noEnforceFocus) {
      tabTrap = h('div', {
        attrs: {
          tabindex: '0'
        }
      });
    } // Assemble modal and backdrop in an outer div needed for lazy modals


    var outer = h(false);

    if (!this.is_hidden) {
      outer = h('div', {
        key: 'modal-outer',
        style: this.modalOuterStyle,
        attrs: {
          id: this.safeId('__BV_modal_outer_')
        }
      }, [modal, tabTrap, backdrop]);
    } // Wrap in DIV to maintain thi.$el reference for hide/show method aceess


    return h('div', {}, [outer]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/nav/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/nav/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _nav = __webpack_require__(/*! ./nav */ "./node_modules/bootstrap-vue/es/components/nav/nav.js");

var _navItem = __webpack_require__(/*! ./nav-item */ "./node_modules/bootstrap-vue/es/components/nav/nav-item.js");

var _navText = __webpack_require__(/*! ./nav-text */ "./node_modules/bootstrap-vue/es/components/nav/nav-text.js");

var _navForm = __webpack_require__(/*! ./nav-form */ "./node_modules/bootstrap-vue/es/components/nav/nav-form.js");

var _navItemDropdown = __webpack_require__(/*! ./nav-item-dropdown */ "./node_modules/bootstrap-vue/es/components/nav/nav-item-dropdown.js");

var _dropdown = __webpack_require__(/*! ../dropdown */ "./node_modules/bootstrap-vue/es/components/dropdown/index.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BNav: _nav.default,
  BNavItem: _navItem.default,
  BNavText: _navText.default,
  BNavForm: _navForm.default,
  BNavItemDropdown: _navItemDropdown.default,
  BNavItemDd: _navItemDropdown.default,
  BNavDropdown: _navItemDropdown.default,
  BNavDd: _navItemDropdown.default
};
var plugins = {
  DropdownPlugin: _dropdown.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/nav/nav-form.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/nav/nav-form.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _form = __webpack_require__(/*! ../form/form */ "./node_modules/bootstrap-vue/es/components/form/form.js");

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

// @vue/component
var _default = {
  name: 'BNavForm',
  functional: true,
  props: {
    id: {
      type: String,
      default: null
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(_form.default, (0, _vueFunctionalDataMerge.mergeData)(data, {
      attrs: {
        id: props.id
      },
      props: {
        inline: true
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/nav/nav-item-dropdown.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/nav/nav-item-dropdown.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _dropdown = __webpack_require__(/*! ../../mixins/dropdown */ "./node_modules/bootstrap-vue/es/mixins/dropdown.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

// @vue/component
var _default = {
  name: 'BNavItemDropdown',
  mixins: [_id.default, _dropdown.default],
  props: {
    noCaret: {
      type: Boolean,
      default: false
    },
    extraToggleClasses: {
      // Extra Toggle classes
      type: String,
      default: ''
    },
    extraMenuClasses: {
      // Extra Menu classes
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: 'menu'
    }
  },
  computed: {
    isNav: function isNav() {
      // Signal to dropdown mixin that we are in a navbar
      return true;
    },
    dropdownClasses: function dropdownClasses() {
      return ['nav-item', 'b-nav-dropdown', 'dropdown', this.dropup ? 'dropup' : '', this.visible ? 'show' : ''];
    },
    toggleClasses: function toggleClasses() {
      return ['nav-link', this.noCaret ? '' : 'dropdown-toggle', this.disabled ? 'disabled' : '', this.extraToggleClasses ? this.extraToggleClasses : ''];
    },
    menuClasses: function menuClasses() {
      return ['dropdown-menu', this.right ? 'dropdown-menu-right' : 'dropdown-menu-left', this.visible ? 'show' : '', this.extraMenuClasses ? this.extraMenuClasses : ''];
    }
  },
  render: function render(h) {
    var button = h('a', {
      class: this.toggleClasses,
      ref: 'toggle',
      attrs: {
        href: '#',
        id: this.safeId('_BV_button_'),
        disabled: this.disabled,
        'aria-haspopup': 'true',
        'aria-expanded': this.visible ? 'true' : 'false'
      },
      on: {
        click: this.toggle,
        keydown: this.toggle // space, enter, down

      }
    }, [this.$slots['button-content'] || this.$slots.text || h('span', {
      domProps: (0, _html.htmlOrText)(this.html, this.text)
    })]);
    var menu = h('div', {
      class: this.menuClasses,
      ref: 'menu',
      attrs: {
        tabindex: '-1',
        'aria-labelledby': this.safeId('_BV_button_')
      },
      on: {
        mouseover: this.onMouseOver,
        keydown: this.onKeydown // tab, up, down, esc

      }
    }, [this.$slots.default]);
    return h('li', {
      attrs: {
        id: this.safeId()
      },
      class: this.dropdownClasses
    }, [button, menu]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/nav/nav-item.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/nav/nav-item.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _link = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = (0, _link.propsFactory)(); // @vue/component

exports.props = props;
var _default2 = {
  name: 'BNavItem',
  functional: true,
  props: _objectSpread({}, props, {
    linkAttrs: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    linkClasses: {
      type: [String, Object, Array],
      default: null
    }
  }),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        children = _ref.children;
    // We transfer the listeners to the link
    delete data.on;
    return h('li', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'nav-item'
    }), [h(_link.default, {
      staticClass: 'nav-link',
      class: props.linkClasses,
      attrs: props.linkAttrs,
      props: props,
      on: listeners
    }, children)]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/nav/nav-text.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/nav/nav-text.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  tag: {
    type: String,
    default: 'span'
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BNavText',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'navbar-text'
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/nav/nav.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/nav/nav.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var props = {
  tag: {
    type: String,
    default: 'ul'
  },
  fill: {
    type: Boolean,
    default: false
  },
  justified: {
    type: Boolean,
    default: false
  },
  tabs: {
    type: Boolean,
    default: false
  },
  pills: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  isNavBar: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BNav',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    if (props.isNavBar) {
      /* istanbul ignore next */
      (0, _warn.default)("b-nav: Prop 'is-nav-bar' is deprecated. Please use component '<b-navbar-nav>' instead.");
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        nav: !props.isNavBar,
        'navbar-nav': props.isNavBar,
        'nav-tabs': props.tabs && !props.isNavBar,
        'nav-pills': props.pills && !props.isNavBar,
        'flex-column': props.vertical && !props.isNavBar,
        'nav-fill': props.fill,
        'nav-justified': props.justified
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/navbar/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/navbar/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _navbar = __webpack_require__(/*! ./navbar */ "./node_modules/bootstrap-vue/es/components/navbar/navbar.js");

var _navbarNav = __webpack_require__(/*! ./navbar-nav */ "./node_modules/bootstrap-vue/es/components/navbar/navbar-nav.js");

var _navbarBrand = __webpack_require__(/*! ./navbar-brand */ "./node_modules/bootstrap-vue/es/components/navbar/navbar-brand.js");

var _navbarToggle = __webpack_require__(/*! ./navbar-toggle */ "./node_modules/bootstrap-vue/es/components/navbar/navbar-toggle.js");

var _nav = __webpack_require__(/*! ../nav */ "./node_modules/bootstrap-vue/es/components/nav/index.js");

var _collapse = __webpack_require__(/*! ../collapse */ "./node_modules/bootstrap-vue/es/components/collapse/index.js");

var _dropdown = __webpack_require__(/*! ../dropdown */ "./node_modules/bootstrap-vue/es/components/dropdown/index.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BNavbar: _navbar.default,
  BNavbarNav: _navbarNav.default,
  BNavbarBrand: _navbarBrand.default,
  BNavbarToggle: _navbarToggle.default,
  BNavToggle: _navbarToggle.default
};
var plugins = {
  NavPlugin: _nav.default,
  CollapsePlugin: _collapse.default,
  DropdownPlugin: _dropdown.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/navbar/navbar-brand.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/navbar/navbar-brand.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _link = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _pluckProps = __webpack_require__(/*! ../../utils/pluck-props */ "./node_modules/bootstrap-vue/es/utils/pluck-props.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var linkProps = (0, _link.propsFactory)();
linkProps.href.default = undefined;
linkProps.to.default = undefined;

var props = _objectSpread({}, linkProps, {
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

});

exports.props = props;
var _default = {
  name: 'BNavbarBrand',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var isLink = Boolean(props.to || props.href);
    var tag = isLink ? _link.default : props.tag;
    return h(tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'navbar-brand',
      props: isLink ? (0, _pluckProps.default)(linkProps, props) : {}
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/navbar/navbar-nav.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/navbar/navbar-nav.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var props = {
  tag: {
    type: String,
    default: 'ul'
  },
  fill: {
    type: Boolean,
    default: false
  },
  justified: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BNavbarNav',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'navbar-nav',
      class: {
        'nav-fill': props.fill,
        'nav-justified': props.justified
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/navbar/navbar-toggle.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/navbar/navbar-toggle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _listenOnRoot = __webpack_require__(/*! ../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/es/mixins/listen-on-root.js");

// @vue/component
var _default = {
  name: 'BNavbarToggle',
  mixins: [_listenOnRoot.default],
  props: {
    label: {
      type: String,
      default: 'Toggle navigation'
    },
    target: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      toggleState: false
    };
  },
  created: function created() {
    this.listenOnRoot('bv::collapse::state', this.handleStateEvt);
  },
  methods: {
    onClick: function onClick(evt) {
      this.$emit('click', evt);
      /* istanbul ignore next */

      if (!evt.defaultPrevented) {
        this.$root.$emit('bv::toggle::collapse', this.target);
      }
    },
    handleStateEvt: function handleStateEvt(id, state) {
      if (id === this.target) {
        this.toggleState = state;
      }
    }
  },
  render: function render(h) {
    return h('button', {
      class: ['navbar-toggler'],
      attrs: {
        type: 'button',
        'aria-label': this.label,
        'aria-controls': this.target,
        'aria-expanded': this.toggleState ? 'true' : 'false'
      },
      on: {
        click: this.onClick
      }
    }, [this.$slots.default || h('span', {
      class: ['navbar-toggler-icon']
    })]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/navbar/navbar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/navbar/navbar.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _config = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  tag: {
    type: String,
    default: 'nav'
  },
  type: {
    type: String,
    default: 'light'
  },
  variant: {
    type: String
  },
  toggleable: {
    type: [Boolean, String],
    default: false
  },
  fixed: {
    type: String
  },
  sticky: {
    type: Boolean,
    default: false
  },
  print: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;
var _default = {
  name: 'BNavbar',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var breakpoint = '';
    var xs = (0, _config.getBreakpoints)()[0];

    if (props.toggleable && typeof props.toggleable === 'string' && props.toggleable !== xs) {
      breakpoint = "navbar-expand-".concat(props.toggleable);
    } else if (props.toggleable === false) {
      breakpoint = 'navbar-expand';
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'navbar',
      class: (_class = {
        'd-print': props.print,
        'sticky-top': props.sticky
      }, _defineProperty(_class, "navbar-".concat(props.type), Boolean(props.type)), _defineProperty(_class, "bg-".concat(props.variant), Boolean(props.variant)), _defineProperty(_class, "fixed-".concat(props.fixed), Boolean(props.fixed)), _defineProperty(_class, "".concat(breakpoint), Boolean(breakpoint)), _class),
      attrs: {
        role: props.tag === 'nav' ? null : 'navigation'
      }
    }), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/pagination-nav/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/pagination-nav/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _paginationNav = __webpack_require__(/*! ./pagination-nav */ "./node_modules/bootstrap-vue/es/components/pagination-nav/pagination-nav.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BPaginationNav: _paginationNav.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/pagination-nav/pagination-nav.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/pagination-nav/pagination-nav.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _looseEqual = __webpack_require__(/*! ../../utils/loose-equal */ "./node_modules/bootstrap-vue/es/utils/loose-equal.js");

var _toString = __webpack_require__(/*! ../../utils/to-string */ "./node_modules/bootstrap-vue/es/utils/to-string.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _env = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/es/utils/env.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _router = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/es/utils/router.js");

var _pagination = __webpack_require__(/*! ../../mixins/pagination */ "./node_modules/bootstrap-vue/es/mixins/pagination.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// TODO: move this to an instance method in pagination mixin
function sanitizeNumPages(value) {
  var num = parseInt(value, 10) || 1;
  return num < 1 ? 1 : num;
} // Props object


var props = {
  // pagination-nav specific props
  numberOfPages: {
    type: [Number, String],
    default: 1,
    validator: function validator(value) {
      var num = parseInt(value, 10);
      /* istanbul ignore if */

      if (isNaN(num) || num < 1) {
        (0, _warn.default)('b-pagination: prop "number-of-pages" must be a number greater than 0');
        return false;
      }

      return true;
    }
  },
  baseUrl: {
    type: String,
    default: '/'
  },
  useRouter: {
    type: Boolean,
    default: false
  },
  linkGen: {
    type: Function,
    default: null
  },
  pageGen: {
    type: Function,
    default: null
  },
  pages: {
    // Optional array of page links
    type: Array,
    default: null
  },
  noPageDetect: {
    // Disable auto page number detection if true
    type: Boolean,
    default: false
  },
  // router-link specific props
  activeClass: {
    type: String // default: undefined

  },
  exact: {
    type: Boolean,
    default: false
  },
  exactActiveClass: {
    type: String // default: undefined

  },
  // nuxt-link specific prop(s)
  noPrefetch: {
    type: Boolean,
    default: false
  } // Our render function is brought in via the pagination mixin
  // @vue/component

};
var _default = {
  name: 'BPaginationNav',
  mixins: [_pagination.default],
  props: props,
  computed: {
    // Used by render function to trigger wrapping in '<nav>' element
    isNav: function isNav() {
      return true;
    },
    computedValue: function computedValue() {
      // Returns the value prop as a number or `null` if undefined or < 1
      var val = parseInt(this.value, 10);
      return isNaN(val) || val < 1 ? null : val;
    }
  },
  watch: {
    numberOfPages: function numberOfPages(newVal, oldVal) {
      var _this = this;

      this.$nextTick(function () {
        _this.setNumPages();
      });
    },
    pages: function pages(newVal, oldVal) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.setNumPages();
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.setNumPages(); // For SSR, assuming a page URL can be detected

    this.$nextTick(function () {
      _this3.guessCurrentPage();
    });
  },
  mounted: function mounted() {
    var _this4 = this;

    if (this.$router) {
      // We only add the watcher if vue router is detected
      this.$watch('$route', function (to, from) {
        _this4.$nextTick(function () {
          (0, _dom.requestAF)(function () {
            _this4.guessCurrentPage();
          });
        });
      });
    }
  },
  methods: {
    setNumPages: function setNumPages() {
      if ((0, _array.isArray)(this.pages) && this.pages.length > 0) {
        this.localNumPages = this.pages.length;
      } else {
        this.localNumPages = sanitizeNumPages(this.numberOfPages);
      }
    },
    onClick: function onClick(pageNum, evt) {
      var _this5 = this;

      // Dont do anything if clicking the current active page
      if (pageNum === this.currentPage) {
        return;
      }

      (0, _dom.requestAF)(function () {
        // Update the v-model
        // Done in in requestAF() to allow browser to complete the
        // native browser click handling of a link
        _this5.currentPage = pageNum;

        _this5.$emit('change', pageNum);
      });
      this.$nextTick(function () {
        // Done in a nextTick() to ensure rendering complete
        try {
          // Emulate native link click page reloading behaviour by blurring the
          // paginator and returning focus to the document
          var target = evt.currentTarget || evt.target;
          target.blur();
        } catch (e) {}
      });
    },
    getPageInfo: function getPageInfo(pageNum) {
      if (!(0, _array.isArray)(this.pages) || this.pages.length === 0 || this.pages[pageNum - 1] === undefined) {
        var link = "".concat(this.baseUrl).concat(pageNum);
        return {
          link: this.useRouter ? {
            path: link
          } : link,
          text: (0, _toString.default)(pageNum)
        };
      }

      var info = this.pages[pageNum - 1];

      if ((0, _object.isObject)(info)) {
        var _link = info.link;
        return {
          // Mormalize link for router use
          link: (0, _object.isObject)(_link) ? _link : this.useRouter ? {
            path: _link
          } : _link,
          // Make sure text has a value
          text: (0, _toString.default)(info.text || pageNum)
        };
      } else {
        return {
          link: (0, _toString.default)(info),
          text: (0, _toString.default)(pageNum)
        };
      }
    },
    makePage: function makePage(pageNum) {
      var info = this.getPageInfo(pageNum);

      if (this.pageGen && typeof this.pageGen === 'function') {
        return this.pageGen(pageNum, info);
      }

      return info.text;
    },
    makeLink: function makeLink(pageNum) {
      var info = this.getPageInfo(pageNum);

      if (this.linkGen && typeof this.linkGen === 'function') {
        return this.linkGen(pageNum, info);
      }

      return info.link;
    },
    linkProps: function linkProps(pageNum) {
      var link = this.makeLink(pageNum);
      var props = {
        target: this.target || null,
        rel: this.rel || null,
        disabled: this.disabled,
        // The following props are only used if BLink detects router
        exact: this.exact,
        activeClass: this.activeClass,
        exactActiveClass: this.exactActiveClass,
        append: this.append,
        replace: this.replace,
        // nuxt-link specific prop
        noPrefetch: this.noPrefetch
      };

      if (this.useRouter || _typeof(link) === 'object') {
        props.to = link;
      } else {
        props.href = link;
      }

      return props;
    },
    resolveLink: function resolveLink() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // Given a to (or href string), convert to normalized route-like structure
      // Works only client side!!
      try {
        var link = document.createElement('a'); // Convert the `to` to a HREF via a temporary `a` tag

        link.href = (0, _router.computeHref)({
          to: to
        }, 'a', '/', '/'); // Once href is assigned, the returned href will be normalized to the full URL bits

        return {
          path: link.pathname,
          hash: link.hash,
          query: (0, _router.parseQuery)(link.search)
        };
      } catch (e) {
        /* istanbul ignore next */
        return {};
      }
    },
    resolveRoute: function resolveRoute() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // Given a to (or href string), convert to normalized route location structure
      // works only when router available!!
      try {
        var route = this.$router.resolve(to, this.$route).route;
        return {
          path: route.path,
          hash: route.hash,
          query: route.query
        };
      } catch (e) {
        /* istanbul ignore next */
        return {};
      }
    },
    guessCurrentPage: function guessCurrentPage() {
      var guess = this.computedValue;
      var $router = this.$router;
      var $route = this.$route; // This section only occurs if we are client side, or server-side with $router

      /* istanbul ignore else */

      if (!this.noPageDetect && !guess && (_env.inBrowser || !_env.inBrowser && $router)) {
        // Current route (if router available)
        var currRoute = $router ? {
          path: $route.path,
          hash: $route.hash,
          query: $route.query
        } : {}; // Current page full HREF (if client side). Can't be done as a computed prop!

        var loc = _env.inBrowser ? window.location || document.location : null;
        var currLink = loc ? {
          path: loc.pathname,
          hash: loc.hash,
          query: (0, _router.parseQuery)(loc.search)
        } : {}; // Loop through the possible pages looking for a match until found

        for (var page = 1; !guess && page <= this.localNumPages; page++) {
          var to = this.makeLink(page);

          if ($router && ((0, _object.isObject)(to) || this.useRouter)) {
            // Resolve the page via the $router
            guess = (0, _looseEqual.default)(this.resolveRoute(to), currRoute) ? page : null;
          } else if (_env.inBrowser) {
            // If no $router available (or !this.useRouter when `to` is a string)
            // we compare using parsed URIs
            guess = (0, _looseEqual.default)(this.resolveLink(to), currLink) ? page : null;
          } else {
            // probably SSR, but no $router so we can't guess, so lets break out of loop

            /* istanbul ignore next */
            guess = -1;
          }
        }
      } // We set currentPage to 0 to trigger an $emit('input', null)
      // As the default for this.currentPage is -1 when no value is specified
      // And valid page numbers are greater than 0


      this.currentPage = guess > 0 ? guess : 0;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/pagination/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/pagination/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _pagination = __webpack_require__(/*! ./pagination */ "./node_modules/bootstrap-vue/es/components/pagination/pagination.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BPagination: _pagination.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/pagination/pagination.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/pagination/pagination.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _pagination = __webpack_require__(/*! ../../mixins/pagination */ "./node_modules/bootstrap-vue/es/mixins/pagination.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var DEFAULT_PER_PAGE = 20;
var DEFAULT_TOTAL_ROWS = 0;

function sanitizePerPage(value) {
  var perPage = parseInt(value, 10) || DEFAULT_PER_PAGE;
  return perPage < 1 ? 1 : perPage;
}

function sanitizeTotalRows(value) {
  var totalRows = parseInt(value, 10) || DEFAULT_TOTAL_ROWS;
  return totalRows < 0 ? 0 : totalRows;
}

var props = {
  perPage: {
    type: [Number, String],
    default: DEFAULT_PER_PAGE
  },
  totalRows: {
    type: [Number, String],
    default: DEFAULT_TOTAL_ROWS
  },
  ariaControls: {
    type: String,
    default: null
  } // Our render function is brought in from the pagination mixin
  // @vue/component

};
var _default = {
  name: 'BPagination',
  mixins: [_pagination.default],
  props: props,
  computed: {
    numberOfPages: function numberOfPages() {
      var result = Math.ceil(sanitizeTotalRows(this.totalRows) / sanitizePerPage(this.perPage));
      return result < 1 ? 1 : result;
    }
  },
  watch: {
    numberOfPages: function numberOfPages(newVal, OldVal) {
      this.localNumPages = newVal;
    }
  },
  created: function created() {
    var _this = this;

    // Set the initial page count
    this.localNumPages = this.numberOfPages; // Set the initial page value

    var curr = parseInt(this.value, 10) || 0;

    if (curr > 0) {
      this.currentPage = curr;
    } else {
      this.$nextTick(function () {
        // If this value parses to NaN or a value less than 1
        // Trigger an initial emit of 'null' if no page specified
        _this.currentPage = 0;
      });
    }
  },
  mounted: function mounted() {
    // Set the initial page count
    this.localNumPages = this.numberOfPages;
  },
  methods: {
    // These methods are used by the render function
    onClick: function onClick(num, evt) {
      var _this2 = this;

      // Handle edge cases where number of pages has changed (i.e. if perPage changes)
      // This should normally not happen, but just in case.
      if (num > this.numberOfPages) {
        /* istanbul ignore next */
        num = this.numberOfPages;
      } else if (num < 1) {
        /* istanbul ignore next */
        num = 1;
      } // Update the v-model


      this.currentPage = num; // Emit event triggered by user interaction

      this.$emit('change', this.currentPage);
      this.$nextTick(function () {
        // Keep the current button focused if possible
        var target = evt.target;

        if ((0, _dom.isVisible)(target) && _this2.$el.contains(target) && target.focus) {
          target.focus();
        } else {
          _this2.focusCurrent();
        }
      });
    },
    makePage: function makePage(pageNum) {
      return pageNum;
    },
    linkProps: function linkProps(pageNum) {
      // Always '#' for pagination component
      return {
        href: '#'
      };
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/popover/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/popover/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popover = __webpack_require__(/*! ./popover */ "./node_modules/bootstrap-vue/es/components/popover/popover.js");

var _popover2 = __webpack_require__(/*! ../../directives/popover */ "./node_modules/bootstrap-vue/es/directives/popover/index.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BPopover: _popover.default
};
var plugins = {
  BPopoverDirectivePlugin: _popover2.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/popover/popover.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/popover/popover.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popover = __webpack_require__(/*! ../../utils/popover.class */ "./node_modules/bootstrap-vue/es/utils/popover.class.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _toolpop = __webpack_require__(/*! ../../mixins/toolpop */ "./node_modules/bootstrap-vue/es/mixins/toolpop.js");

// @vue/component
var _default = {
  name: 'BPopover',
  mixins: [_toolpop.default],
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    triggers: {
      type: [String, Array],
      default: 'click'
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    createToolpop: function createToolpop() {
      // getTarget is in toolpop mixin
      var target = this.getTarget();

      if (target) {
        this._toolpop = new _popover.default(target, this.getConfig(), this.$root);
      } else {
        this._toolpop = null;
        (0, _warn.default)("b-popover: 'target' element not found!");
      }

      return this._toolpop;
    }
  },
  render: function render(h) {
    return h('div', {
      class: ['d-none'],
      style: {
        display: 'none'
      },
      attrs: {
        'aria-hidden': true
      }
    }, [h('div', {
      ref: 'title'
    }, this.$slots.title), h('div', {
      ref: 'content'
    }, this.$slots.default)]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/progress/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/progress/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _progress = __webpack_require__(/*! ./progress */ "./node_modules/bootstrap-vue/es/components/progress/progress.js");

var _progressBar = __webpack_require__(/*! ./progress-bar */ "./node_modules/bootstrap-vue/es/components/progress/progress-bar.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BProgress: _progress.default,
  BProgressBar: _progressBar.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/progress/progress-bar.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/progress/progress-bar.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

// @vue/component
var _default2 = {
  name: 'BProgressBar',
  inject: {
    bvProgress: {
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: null
    },
    labelHtml: {
      type: String
    },
    // $parent (this.bvProgress) prop values may take precedence over the following props
    // Which is why they are defaulted to null
    max: {
      type: Number,
      default: null
    },
    precision: {
      type: Number,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    striped: {
      type: Boolean,
      default: null
    },
    animated: {
      type: Boolean,
      default: null
    },
    showProgress: {
      type: Boolean,
      default: null
    },
    showValue: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    progressBarClasses: function progressBarClasses() {
      return [this.computedVariant ? "bg-".concat(this.computedVariant) : '', this.computedStriped || this.computedAnimated ? 'progress-bar-striped' : '', this.computedAnimated ? 'progress-bar-animated' : ''];
    },
    progressBarStyles: function progressBarStyles() {
      return {
        width: 100 * (this.value / this.computedMax) + '%'
      };
    },
    computedProgress: function computedProgress() {
      var p = Math.pow(10, this.computedPrecision);
      return Math.round(100 * p * this.value / this.computedMax) / p;
    },
    computedMax: function computedMax() {
      // Prefer our max over parent setting
      return typeof this.max === 'number' ? this.max : this.bvProgress.max || 100;
    },
    computedVariant: function computedVariant() {
      // Prefer our variant over parent setting
      return this.variant || this.bvProgress.variant;
    },
    computedPrecision: function computedPrecision() {
      // Prefer our precision over parent setting
      return typeof this.precision === 'number' ? this.precision : this.bvProgress.precision || 0;
    },
    computedStriped: function computedStriped() {
      // Prefer our striped over parent setting
      return typeof this.striped === 'boolean' ? this.striped : this.bvProgress.striped || false;
    },
    computedAnimated: function computedAnimated() {
      // Prefer our animated over parent setting
      return typeof this.animated === 'boolean' ? this.animated : this.bvProgress.animated || false;
    },
    computedShowProgress: function computedShowProgress() {
      // Prefer our showProgress over parent setting
      return typeof this.showProgress === 'boolean' ? this.showProgress : this.bvProgress.showProgress || false;
    },
    computedShowValue: function computedShowValue() {
      // Prefer our showValue over parent setting
      return typeof this.showValue === 'boolean' ? this.showValue : this.bvProgress.showValue || false;
    }
  },
  render: function render(h) {
    var childNodes = h(false);

    if (this.$slots.default) {
      childNodes = this.$slots.default;
    } else if (this.label || this.labelHtml) {
      childNodes = h('span', {
        domProps: (0, _html.htmlOrText)(this.labelHtml, this.label)
      });
    } else if (this.computedShowProgress) {
      childNodes = this.computedProgress.toFixed(this.computedPrecision);
    } else if (this.computedShowValue) {
      childNodes = this.value.toFixed(this.computedPrecision);
    }

    return h('div', {
      staticClass: 'progress-bar',
      class: this.progressBarClasses,
      style: this.progressBarStyles,
      attrs: {
        role: 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': this.computedMax.toString(),
        'aria-valuenow': this.value.toFixed(this.computedPrecision)
      }
    }, [childNodes]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/progress/progress.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/progress/progress.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _progressBar = __webpack_require__(/*! ./progress-bar */ "./node_modules/bootstrap-vue/es/components/progress/progress-bar.js");

// @vue/component
var _default = {
  name: 'BProgress',
  components: {
    BProgressBar: _progressBar.default
  },
  provide: function provide() {
    return {
      bvProgress: this
    };
  },
  props: {
    // These props can be inherited via the child b-progress-bar(s)
    variant: {
      type: String,
      default: null
    },
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: null
    },
    precision: {
      type: Number,
      default: 0
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 100
    },
    // This prop is not inherited by child b-progress-bar(s)
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    progressHeight: function progressHeight() {
      return {
        height: this.height || null
      };
    }
  },
  render: function render(h) {
    var childNodes = this.$slots.default;

    if (!childNodes) {
      childNodes = h('b-progress-bar', {
        props: {
          value: this.value,
          max: this.max,
          precision: this.precision,
          variant: this.variant,
          animated: this.animated,
          striped: this.striped,
          showProgress: this.showProgress,
          showValue: this.showValue
        }
      });
    }

    return h('div', {
      class: ['progress'],
      style: this.progressHeight
    }, [childNodes]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/spinner/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/spinner/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _spinner = __webpack_require__(/*! ./spinner */ "./node_modules/bootstrap-vue/es/components/spinner/spinner.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BSpinner: _spinner.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/spinner/spinner.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/spinner/spinner.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  name: 'BSpinner',
  functional: true,
  props: {
    type: {
      type: String,
      default: 'border' // SCSS currently supports 'border' or 'grow'

    },
    label: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    small: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      default: 'status'
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;
    var label = h(false);
    var hasLabel = slots().label || props.label;

    if (hasLabel) {
      label = h('span', {
        staticClass: 'sr-only'
      }, hasLabel);
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      attrs: {
        role: hasLabel ? props.role || 'status' : null,
        'aria-hidden': hasLabel ? null : 'true'
      },
      class: (_class = {}, _defineProperty(_class, "spinner-".concat(props.type), Boolean(props.type)), _defineProperty(_class, "spinner-".concat(props.type, "-sm"), props.small), _defineProperty(_class, "text-".concat(props.variant), Boolean(props.variant)), _class)
    }), [label]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/constants.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/constants.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EVENT_FILTER = exports.IGNORED_FIELD_KEYS = void 0;
// Constants used by table helpers
// Object of item keys that should be ignored for headers and stringification and filter events
var IGNORED_FIELD_KEYS = {
  _rowVariant: true,
  _cellVariants: true,
  _showDetails: true // Filter CSS Selector for click/dblclick/etc events
  // If any of these selectors match the clicked element, we ignore the event

};
exports.IGNORED_FIELD_KEYS = IGNORED_FIELD_KEYS;
var EVENT_FILTER = ['a', 'a *', // include content inside links
'button', 'button *', // include content inside buttons
'input:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'textarea:not(.disabled):not([disabled])', '[role="link"]', '[role="link"] *', '[role="button"]', '[role="button"] *', '[tabindex]:not(.disabled):not([disabled])'].join(',');
exports.EVENT_FILTER = EVENT_FILTER;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/default-sort-compare.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/default-sort-compare.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = defaultSortCompare;

var _get = __webpack_require__(/*! ../../../utils/get */ "./node_modules/bootstrap-vue/es/utils/get.js");

var _stringifyObjectValues = __webpack_require__(/*! ./stringify-object-values */ "./node_modules/bootstrap-vue/es/components/table/helpers/stringify-object-values.js");

// Default sort compare routine
//
// TODO: add option to sort by multiple columns (tri-state per column, plus order of columns in sort)
//  where sprtBy could be an array of objects [ {key: 'foo', sortDir: 'asc'}, {key:'bar', sortDir: 'desc'} ...]
//  or an array of arrays [ ['foo','asc'], ['bar','desc'] ]
function defaultSortCompare(a, b, sortBy) {
  a = (0, _get.default)(a, sortBy, '');
  b = (0, _get.default)(b, sortBy, '');

  if (a instanceof Date && b instanceof Date || typeof a === 'number' && typeof b === 'number') {
    // Special case for comparing Dates and Numbers
    // Internally dates are compared via their epoch number values
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  } else {
    // Do localized string comparison
    return (0, _stringifyObjectValues.default)(a).localeCompare((0, _stringifyObjectValues.default)(b), undefined, {
      numeric: true
    });
  }
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/filter-event.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/filter-event.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = filterEvent;

var _dom = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/bootstrap-vue/es/components/table/helpers/constants.js");

// Returns true of we should ignore the click/dbclick/keypress event
// Avoids having the user need to use @click.stop on the form control
function filterEvent(evt) {
  if (!evt || !evt.target) {
    /* istanbul ignore next */
    return;
  }

  var el = evt.target;

  if (el.tagName === 'TD' || el.tagName === 'TH' || el.tagName === 'TR' || el.disabled) {
    // Shortut all the following tests for efficiency
    return false;
  }

  if ((0, _dom.closest)('.dropdown-menu', el)) {
    // Click was in a dropdown menu, so ignore
    return true;
  }

  var label = el.tagName === 'LABEL' ? el : (0, _dom.closest)('label', el);

  if (label && label.control && !label.control.disabled) {
    // If the label's form control is not disabled then we don't propagate evt
    return true;
  } // Else check to see if the event target matches one of the selectors in the event filter
  // i.e. anchors, non disabled inputs, etc. Return true if we should ignore the event.


  return (0, _dom.matches)(el, _constants.EVENT_FILTER);
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-bottom-row.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-bottom-row.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  methods: {
    renderBottomRow: function renderBottomRow() {
      var h = this.$createElement; // Static bottom row slot (hidden in visibly stacked mode as we can't control the data-label)
      // If in always stacked mode, we don't bother rendering the row

      if (!this.hasNormalizedSlot('bottom-row') || this.isStacked === true) {
        return h(false);
      }

      var fields = this.computedFields;
      return h('tr', {
        key: '__b-table-bottom-row__',
        staticClass: 'b-table-bottom-row',
        class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(null, 'row-bottom') : this.tbodyTrClass],
        attrs: {
          role: 'row'
        }
      }, this.normalizeSlot('bottom-row', {
        columns: fields.length,
        fields: fields
      }));
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-busy.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-busy.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  props: {
    busy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localBusy: false
    };
  },
  computed: {
    computedBusy: function computedBusy() {
      return this.busy || this.localBusy;
    }
  },
  watch: {
    localBusy: function localBusy(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('update:busy', newVal);
      }
    }
  },
  methods: {
    // Event handler helper
    stopIfBusy: function stopIfBusy(evt) {
      if (this.computedBusy) {
        // If table is busy (via provider) then don't propagate
        evt.preventDefault();
        evt.stopPropagation();
        return true;
      }

      return false;
    },
    // Renter the busy indecator or return null if not busy
    renderBusy: function renderBusy() {
      var h = this.$createElement; // Return a busy indicator row, or null if not busy

      if (this.computedBusy && this.hasNormalizedSlot('table-busy')) {
        // Show the busy slot
        var trAttrs = {
          role: this.isStacked ? 'row' : null
        };
        var tdAttrs = {
          colspan: String(this.computedFields.length),
          role: this.isStacked ? 'cell' : null
        };
        return h('tr', {
          key: 'table-busy-slot',
          staticClass: 'b-table-busy-slot',
          class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(null, 'table-busy') : this.tbodyTrClass],
          attrs: trAttrs
        }, [h('td', {
          attrs: tdAttrs
        }, [this.normalizeSlot('table-busy', {})])]);
      } else {
        // We return null here so that we can determine if we need to
        // render the table items rows or not.
        return null;
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-caption.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-caption.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__(/*! ../../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

var _default = {
  props: {
    caption: {
      type: String,
      default: null
    },
    captionHtml: {
      type: String
    },
    captionTop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    captionClasses: function captionClasses() {
      return {
        'b-table-caption-top': this.captionTop
      };
    },
    captionId: function captionId() {
      // Even though this.safeId looks like a method, it is a computed prop
      // that returns a new function if the underlying ID changes
      return this.isStacked ? this.safeId('_caption_') : null;
    }
  },
  methods: {
    renderCaption: function renderCaption() {
      var h = this.$createElement; // Build the caption

      var $captionSlot = this.normalizeSlot('table-caption', {});
      var $caption = h(false);

      if ($captionSlot || this.caption || this.captionHtml) {
        var data = {
          key: 'caption',
          class: this.captionClasses,
          attrs: {
            id: this.captionId
          }
        };

        if (!$captionSlot) {
          data.domProps = (0, _html.htmlOrText)(this.captionHtml, this.caption);
        }

        $caption = h('caption', data, [$captionSlot]);
      }

      return $caption;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-colgroup.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-colgroup.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  methods: {
    renderColgroup: function renderColgroup() {
      var h = this.$createElement;
      var fields = this.computedFields;
      var $colgroup = h(false);

      if (this.hasNormalizedSlot('table-colgroup')) {
        $colgroup = h('colgroup', {
          key: 'colgroup'
        }, [this.normalizeSlot('table-colgroup', {
          columns: fields.length,
          fields: fields
        })]);
      }

      return $colgroup;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-empty.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-empty.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__(/*! ../../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

var _default = {
  props: {
    showEmpty: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: 'There are no records to show'
    },
    emptyHtml: {
      type: String
    },
    emptyFilteredText: {
      type: String,
      default: 'There are no records matching your request'
    },
    emptyFilteredHtml: {
      type: String
    }
  },
  methods: {
    renderEmpty: function renderEmpty() {
      var h = this.$createElement;
      var items = this.computedItems;
      var $empty;

      if (this.showEmpty && (!items || items.length === 0) && !(this.computedBusy && this.hasNormalizedSlot('table-busy'))) {
        $empty = this.normalizeSlot(this.isFiltered ? 'emptyfiltered' : 'empty', {
          emptyFilteredHtml: this.emptyFilteredHtml,
          emptyFilteredText: this.emptyFilteredText,
          emptyHtml: this.emptyHtml,
          emptyText: this.emptyText,
          fields: this.computedFields,
          // Not sure why this is included, as it will always be an empty array
          items: this.computedItems
        });

        if (!$empty) {
          $empty = h('div', {
            class: ['text-center', 'my-2'],
            domProps: this.isFiltered ? (0, _html.htmlOrText)(this.emptyFilteredHtml, this.emptyFilteredText) : (0, _html.htmlOrText)(this.emptyHtml, this.emptyText)
          });
        }

        $empty = h('td', {
          attrs: {
            colspan: String(this.computedFields.length),
            role: 'cell'
          }
        }, [h('div', {
          attrs: {
            role: 'alert',
            'aria-live': 'polite'
          }
        }, [$empty])]);
        $empty = h('tr', {
          key: this.isFiltered ? '_b-table-empty-filtered-row_' : '_b-table-empty-row_',
          staticClass: 'b-table-empty-row',
          class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(null, 'row-empty') : this.tbodyTrClass],
          attrs: {
            role: 'row'
          }
        }, [$empty]);
      }

      return $empty || h(false);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-filtering.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-filtering.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stringifyRecordValues = __webpack_require__(/*! ./stringify-record-values */ "./node_modules/bootstrap-vue/es/components/table/helpers/stringify-record-values.js");

var _looseEqual = __webpack_require__(/*! ../../../utils/loose-equal */ "./node_modules/bootstrap-vue/es/utils/loose-equal.js");

var _warn = __webpack_require__(/*! ../../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var DEPRECATION_MSG = 'Supplying a function to prop "filter" is deprecated. Use "filter-function" instead.';
var _default = {
  props: {
    filter: {
      // Pasing a function to filter is deprecated and should be avoided
      type: [String, RegExp, Object, Array, Function],
      default: null,
      deprecated: DEPRECATION_MSG
    },
    filterFunction: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      // Flag for displaying which empty slot to show, and for some event triggering.
      isFiltered: false
    };
  },
  computed: {
    localFiltering: function localFiltering() {
      return this.hasProvider ? !!this.noProviderFiltering : true;
    },
    filteredCheck: function filteredCheck() {
      // For watching changes to filteredItems vs localItems
      return {
        filteredItems: this.filteredItems,
        localItems: this.localItems,
        localFilter: this.localFilter
      };
    },
    localFilter: function localFilter() {
      // Returns a sanitized/normalized version of filter prop
      if (typeof this.filter === 'function') {
        // this.localFilterFn will contain the correct function ref.
        // Deprecate setting prop filter to a function

        /* istanbul ignore next */
        return '';
      } else if (typeof this.filterFunction !== 'function' && !(typeof this.filter === 'string' || this.filter instanceof RegExp)) {
        // Using internal filter function, which only accepts string or regexp at the moment
        return '';
      } else {
        // Could be a string, object or array, as needed by external filter function
        return this.filter;
      }
    },
    localFilterFn: function localFilterFn() {
      var filter = this.filter;
      var filterFn = this.filterFunction; // Sanitized/normalize filter-function prop

      if (typeof filterFn === 'function') {
        return filterFn;
      } else if (typeof filter === 'function') {
        // Deprecate setting prop filter to a function

        /* istanbul ignore next */
        (0, _warn.default)("b-table: ".concat(DEPRECATION_MSG));
        /* istanbul ignore next */

        return filter;
      } else {
        // no filterFunction, so signal to use internal filter function
        return null;
      }
    },
    filteredItems: function filteredItems() {
      // Returns the records in localItems that match the filter criteria.
      // Returns the original localItems array if not sorting
      var items = this.localItems || [];
      var criteria = this.localFilter;
      var filterFn = this.filterFnFactory(this.localFilterFn, criteria) || this.defaultFilterFnFactory(criteria); // We only do local filtering if requested, and if the are records to filter and
      // if a filter criteria was specified

      if (this.localFiltering && filterFn && items.length > 0) {
        items = items.filter(filterFn);
      }

      return items;
    }
  },
  watch: {
    // Watch for changes to the filter criteria and filtered items vs localItems).
    // And set visual state and emit events as required
    filteredCheck: function filteredCheck(_ref) {
      var filteredItems = _ref.filteredItems,
          localItems = _ref.localItems,
          localFilter = _ref.localFilter;
      // Determine if the dataset is filtered or not
      var isFiltered;

      if (!localFilter) {
        // If filter criteria is falsey
        isFiltered = false;
      } else if ((0, _looseEqual.default)(localFilter, []) || (0, _looseEqual.default)(localFilter, {})) {
        // If filter criteria is an empty array or object
        isFiltered = false;
      } else if (localFilter) {
        // if Filter criteria is truthy
        isFiltered = true;
      } else {
        /* istanbul ignore next: rare chance of reaching this else */
        isFiltered = false;
      }

      if (isFiltered) {
        this.$emit('filtered', filteredItems, filteredItems.length);
      }

      this.isFiltered = isFiltered;
    },
    isFiltered: function isFiltered(newVal, oldVal) {
      if (newVal === false && oldVal === true) {
        // We need to emit a filtered event if isFiltered transitions from true to
        // false so that users can update their pagination controls.
        this.$emit('filtered', this.localItems, this.localItems.length);
      }
    }
  },
  created: function created() {
    var _this = this;

    // Set the initial filtered state.
    // In a nextTick so that we trigger a filtered event if needed
    this.$nextTick(function () {
      _this.isFiltered = Boolean(_this.localFilter);
    });
  },
  methods: {
    // Filter Function factories
    filterFnFactory: function filterFnFactory(filterFn, criteria) {
      // Wrapper factory for external filter functions.
      // Wrap the provided filter-function and return a new function.
      // Returns null if no filter-function defined or if criteria is falsey.
      // Rather than directly grabbing this.computedLocalFilterFn or this.filterFunction
      // we have it passed, so that the caller computed prop will be reactive to changes
      // in the original filter-function (as this routine is a method)
      if (!filterFn || typeof filterFn !== 'function' || !criteria || (0, _looseEqual.default)(criteria, []) || (0, _looseEqual.default)(criteria, {})) {
        return null;
      } // Build the wrapped filter test function, passing the criteria to the provided function


      var fn = function fn(item) {
        // Generated function returns true if the criteria matches part
        // of the serialized data, otherwise false
        return filterFn(item, criteria);
      }; // Return the wrapped function


      return fn;
    },
    defaultFilterFnFactory: function defaultFilterFnFactory(criteria) {
      // Generates the default filter function, using the given filter criteria
      if (!criteria || !(typeof criteria === 'string' || criteria instanceof RegExp)) {
        // Built in filter can only support strings or RegExp criteria (at the moment)
        return null;
      } // Build the regexp needed for filtering


      var regexp = criteria;

      if (typeof regexp === 'string') {
        // Escape special RegExp characters in the string and convert contiguous
        // whitespace to \s+ matches
        var pattern = criteria.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/[\s\uFEFF\xA0]+/g, '\\s+'); // Build the RegExp (no need for global flag, as we only need
        // to find the value once in the string)

        regexp = new RegExp(".*".concat(pattern, ".*"), 'i');
      } // Generate the wrapped filter test function to use


      var fn = function fn(item) {
        // This searches all row values (and sub property values) in the entire (excluding
        // special _ prefixed keys), because we convert the record to a space-separated
        // string containing all the value properties (recursively), even ones that are
        // not visible (not specified in this.fields).
        //
        // TODO: Enable searching on formatted fields and scoped slots
        // TODO: Should we filter only on visible fields (i.e. ones in this.fields) by default?
        // TODO: Allow for searching on specific fields/key, this could be combined with the previous TODO
        // TODO: Give stringifyRecordValues extra options for filtering (i.e. passing the
        //       fields definition and a reference to $scopedSlots)
        //
        // Generated function returns true if the criteria matches part of
        // the serialized data, otherwise false
        // We set lastIndex = 0 on regex in case someone uses the /g global flag
        regexp.lastIndex = 0;
        return regexp.test((0, _stringifyRecordValues.default)(item));
      }; // Return the generated function


      return fn;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-items.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-items.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _normalizeFields = __webpack_require__(/*! ./normalize-fields */ "./node_modules/bootstrap-vue/es/components/table/helpers/normalize-fields.js");

var _array = __webpack_require__(/*! ../../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _default2 = {
  props: {
    items: {
      type: [Array, Function],
      default: function _default()
      /* istanbul ignore next */
      {
        return [];
      }
    },
    fields: {
      // Object format is deprecated and should be avoided
      type: [Array, Object],
      default: null
    },
    primaryKey: {
      // Primary key for record.
      // If provided the value in each row must be unique!!!
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      // Our local copy of the items. Must be an array
      localItems: (0, _array.isArray)(this.items) ? this.items.slice() : []
    };
  },
  computed: {
    computedFields: function computedFields() {
      // We normalize fields into an array of objects
      // [ { key:..., label:..., ...}, {...}, ..., {..}]
      return (0, _normalizeFields.default)(this.fields, this.localItems);
    },
    computedFieldsObj: function computedFieldsObj()
    /* istanbul ignore next: not using at the moment */
    {
      // Fields as a simple lookup hash object
      // Mainly for scopedSlots for convenience
      return this.computedFields.reduce(function (f, obj) {
        obj[f.key] = f;
        return obj;
      }, {});
    }
  },
  watch: {
    items: function items(newItems) {
      /* istanbul ignore else */
      if ((0, _array.isArray)(newItems)) {
        // Set localItems/filteredItems to a copy of the provided array
        this.localItems = newItems.slice();
      } else if (newItems === null || newItems === undefined) {
        /* istanbul ignore next */
        this.localItems = [];
      }
    }
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-pagination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-pagination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  props: {
    perPage: {
      type: [Number, String],
      default: 0
    },
    currentPage: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    localPaging: function localPaging() {
      return this.hasProvider ? !!this.noProviderPaging : true;
    },
    paginatedItems: function paginatedItems() {
      var items = this.sortedItems || [];
      var currentPage = Math.max(parseInt(this.currentPage, 10) || 1, 1);
      var perPage = Math.max(parseInt(this.perPage, 10) || 0, 0); // Apply local pagination

      if (this.localPaging && !!perPage) {
        // Grab the current page of data (which may be past filtered items limit)
        items = items.slice((currentPage - 1) * perPage, currentPage * perPage);
      } // Return the items to display in the table


      return items;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-provider.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-provider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _looseEqual = __webpack_require__(/*! ../../../utils/loose-equal */ "./node_modules/bootstrap-vue/es/utils/loose-equal.js");

var _array = __webpack_require__(/*! ../../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _warn = __webpack_require__(/*! ../../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _listenOnRoot = __webpack_require__(/*! ../../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/es/mixins/listen-on-root.js");

var _default = {
  mixins: [_listenOnRoot.default],
  props: {
    noProviderPaging: {
      type: Boolean,
      default: false
    },
    noProviderSorting: {
      type: Boolean,
      default: false
    },
    noProviderFiltering: {
      type: Boolean,
      default: false
    },
    apiUrl: {
      // Passthrough prop. Passed to the context object. Not used by b-table directly
      type: String,
      default: ''
    }
  },
  computed: {
    hasProvider: function hasProvider() {
      return this.items instanceof Function;
    },
    providerTriggerContext: function providerTriggerContext() {
      // Used to trigger the provider function via a watcher. Only the fields that
      // are needed for triggering a provider update are included. Note that the
      // regular this.context is sent to the provider during fetches though, as they
      // may neeed all the prop info.
      var ctx = {
        apiUrl: this.apiUrl
      };

      if (!this.noProviderFiltering) {
        // Either a string, or could be an object or array.
        ctx.filter = this.localFilter;
      }

      if (!this.noProviderSorting) {
        ctx.sortBy = this.localSortBy;
        ctx.sortDesc = this.localSortDesc;
      }

      if (!this.noProviderPaging) {
        ctx.perPage = this.perPage;
        ctx.currentPage = this.currentPage;
      }

      return ctx;
    }
  },
  watch: {
    // Provider update triggering
    items: function items(newVal, oldVal) {
      // If a new provider has been specified, trigger an update
      if (this.hasProvider || newVal instanceof Function) {
        this.$nextTick(this._providerUpdate);
      }
    },
    providerTriggerContext: function providerTriggerContext(newVal, oldVal) {
      // Trigger the provider to update as the relevant context values have changed.
      if (!(0, _looseEqual.default)(newVal, oldVal)) {
        this.$nextTick(this._providerUpdate);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Call the items provider if necessary
    if (this.hasProvider && (!this.localItems || this.localItems.length === 0)) {
      // Fetch on mount if localItems is empty
      this._providerUpdate();
    } // Listen for global messages to tell us to force refresh the table


    this.listenOnRoot('bv::refresh::table', function (id) {
      if (id === _this.id || id === _this) {
        _this.refresh();
      }
    });
  },
  methods: {
    refresh: function refresh() {
      // Public Method: Force a refresh of the provider function
      this.$off('refreshed', this.refresh);

      if (this.computedBusy) {
        // Can't force an update when forced busy by user (busy prop === true)
        if (this.localBusy && this.hasProvider) {
          // But if provider running (localBusy), re-schedule refresh once `refreshed` emitted
          this.$on('refreshed', this.refresh);
        }
      } else {
        this.clearSelected();

        if (this.hasProvider) {
          this.$nextTick(this._providerUpdate);
        } else {
          /* istanbul ignore next */
          this.localItems = (0, _array.isArray)(this.items) ? this.items.slice() : [];
        }
      }
    },
    // Provider related methods
    _providerSetLocal: function _providerSetLocal(items) {
      this.localItems = (0, _array.isArray)(items) ? items.slice() : [];
      this.localBusy = false;
      this.$emit('refreshed'); // New root emit

      if (this.id) {
        this.emitOnRoot('bv::table::refreshed', this.id);
      }
    },
    _providerUpdate: function _providerUpdate() {
      // Refresh the provider function items.
      if (!this.hasProvider) {
        // Do nothing if no provider
        return;
      } // If table is busy, wait until refereshed before calling again


      if (this.computedBusy) {
        // Schedule a new refresh once `refreshed` is emitted
        this.$nextTick(this.refresh);
        return;
      } // Set internal busy state


      this.localBusy = true; // Call provider function with context and optional callback after DOM is fully updated

      this.$nextTick(function () {
        var _this2 = this;

        try {
          // Call provider function passing it the context and optional callback
          var data = this.items(this.context, this._providerSetLocal);

          if (data && data.then && typeof data.then === 'function') {
            // Provider returned Promise
            data.then(function (items) {
              // Provider resolved with items
              _this2._providerSetLocal(items);
            });
          } else if ((0, _array.isArray)(data)) {
            // Provider returned Array data
            this._providerSetLocal(data);
          } else if (this.items.length !== 2) {
            // Check number of arguments provider function requested
            // Provider not using callback (didn't request second argument), so we clear
            // busy state as most likely there was an error in the provider function

            /* istanbul ignore next */
            (0, _warn.default)("b-table provider function didn't request calback and did not return a promise or data");
            /* istanbul ignore next */

            this.localBusy = false;
          }
        } catch (e)
        /* istanbul ignore next */
        {
          // Provider function borked on us, so we spew out a warning
          // and clear the busy state
          (0, _warn.default)("b-table provider function error [".concat(e.name, "] ").concat(e.message));
          this.localBusy = false;
          this.$off('refreshed', this.refresh);
        }
      });
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-selectable.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-selectable.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _looseEqual = __webpack_require__(/*! ../../../utils/loose-equal */ "./node_modules/bootstrap-vue/es/utils/loose-equal.js");

var _array = __webpack_require__(/*! ../../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _sanitizeRow = __webpack_require__(/*! ./sanitize-row */ "./node_modules/bootstrap-vue/es/components/table/helpers/sanitize-row.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  props: {
    selectable: {
      type: Boolean,
      default: false
    },
    selectMode: {
      type: String,
      default: 'multi'
    },
    selectedVariant: {
      type: String,
      default: 'primary'
    }
  },
  data: function data() {
    return {
      selectedRows: [],
      selectedLastRow: -1
    };
  },
  computed: {
    selectableTableClasses: function selectableTableClasses() {
      var _ref;

      var selectable = this.selectable;
      var isSelecting = selectable && this.selectedRows && this.selectedRows.some(Boolean);
      return _ref = {
        'b-table-selectable': selectable
      }, _defineProperty(_ref, "b-table-select-".concat(this.selectMode), selectable), _defineProperty(_ref, 'b-table-selecting', isSelecting), _ref;
    },
    selectableTableAttrs: function selectableTableAttrs() {
      return {
        'aria-multiselectable': this.selectableIsMultiSelect
      };
    },
    selectableIsMultiSelect: function selectableIsMultiSelect() {
      if (this.selectable) {
        return (0, _array.arrayIncludes)(['range', 'multi'], this.selectMode) ? 'true' : 'false';
      } else {
        return null;
      }
    }
  },
  watch: {
    computedItems: function computedItems(newVal, oldVal) {
      // Reset for selectable
      // TODO: Should selectedLastClicked be reset here?
      //       As changes to _showDetails would trigger it to reset
      this.selectedLastRow = -1;
      var equal = false;

      if (this.selectable && this.selectedRows.length > 0) {
        // Quick check against array length
        equal = (0, _array.isArray)(newVal) && (0, _array.isArray)(oldVal) && newVal.length === oldVal.length;

        for (var i = 0; equal && i < newVal.length; i++) {
          // Look for the first non-loosely equal row, after ignoring reserved fields
          equal = (0, _looseEqual.default)((0, _sanitizeRow.default)(newVal[i]), (0, _sanitizeRow.default)(oldVal[i]));
        }
      }

      if (!equal) {
        this.clearSelected();
      }
    },
    selectable: function selectable(newVal, oldVal) {
      this.clearSelected();
      this.setSelectionHandlers(newVal);
    },
    selectMode: function selectMode(newVal, oldVal) {
      this.clearSelected();
    },
    selectedRows: function selectedRows(_selectedRows, oldVal) {
      var _this = this;

      if (this.selectable && !(0, _looseEqual.default)(_selectedRows, oldVal)) {
        var items = []; // forEach skips over non-existant indicies (on sparse arrays)

        _selectedRows.forEach(function (v, idx) {
          if (v) {
            items.push(_this.computedItems[idx]);
          }
        });

        this.$emit('row-selected', items);
      }
    }
  },
  beforeMount: function beforeMount() {
    // Set up handlers
    if (this.selectable) {
      this.setSelectionHandlers(true);
    }
  },
  methods: {
    isRowSelected: function isRowSelected(idx) {
      return Boolean(this.selectedRows[idx]);
    },
    selectableRowClasses: function selectableRowClasses(idx) {
      var rowSelected = this.isRowSelected(idx);
      var base = this.dark ? 'bg' : 'table';
      var variant = this.selectedVariant;
      return _defineProperty({
        'b-table-row-selected': this.selectable && rowSelected
      }, "".concat(base, "-").concat(variant), this.selectable && rowSelected && variant);
    },
    selectableRowAttrs: function selectableRowAttrs(idx) {
      return {
        'aria-selected': !this.selectable ? null : this.isRowSelected(idx) ? 'true' : 'false'
      };
    },
    clearSelected: function clearSelected() {
      var hasSelection = this.selectedRows.reduce(function (prev, v) {
        return prev || v;
      }, false);

      if (hasSelection) {
        this.selectedLastClicked = -1;
        this.selectedRows = [];
      }
    },
    setSelectionHandlers: function setSelectionHandlers(on) {
      var method = on ? '$on' : '$off'; // Handle row-clicked event

      this[method]('row-clicked', this.selectionHandler); // Clear selection on filter, pagination, and sort changes

      this[method]('filtered', this.clearSelected);
      this[method]('context-changed', this.clearSelected);
    },
    selectionHandler: function selectionHandler(item, index, evt) {
      /* istanbul ignore if: should never happen */
      if (!this.selectable) {
        // Don't do anything if table is not in selectable mode

        /* istanbul ignore next: should never happen */
        this.clearSelected();
        /* istanbul ignore next: should never happen */

        return;
      }

      var selectedRows = this.selectedRows.slice();
      var selected = !selectedRows[index];
      var mode = this.selectMode; // Note 'multi' mode needs no special handling

      if (mode === 'single') {
        selectedRows = [];
      } else if (mode === 'range') {
        if (this.selectedLastRow > -1 && evt.shiftKey) {
          // range
          for (var idx = Math.min(this.selectedLastRow, index); idx <= Math.max(this.selectedLastRow, index); idx++) {
            selectedRows[idx] = true;
          }

          selected = true;
        } else {
          if (!(evt.ctrlKey || evt.metaKey)) {
            // clear range selection if any
            selectedRows = [];
            selected = true;
          }

          this.selectedLastRow = selected ? index : -1;
        }
      }

      selectedRows[index] = selected;
      this.selectedRows = selectedRows;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-sorting.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-sorting.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stableSort = __webpack_require__(/*! ../../../utils/stable-sort */ "./node_modules/bootstrap-vue/es/utils/stable-sort.js");

var _startcase = __webpack_require__(/*! ../../../utils/startcase */ "./node_modules/bootstrap-vue/es/utils/startcase.js");

var _array = __webpack_require__(/*! ../../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _defaultSortCompare = __webpack_require__(/*! ./default-sort-compare */ "./node_modules/bootstrap-vue/es/components/table/helpers/default-sort-compare.js");

var _default = {
  props: {
    sortBy: {
      type: String,
      default: null
    },
    sortDesc: {
      // To Do: Make this tri-state: true, false, null
      type: Boolean,
      default: false
    },
    sortDirection: {
      // This prop is named incorrectly.
      // It should be initialSortDirection
      // As it is a bit misleading (not to mention screws up
      // the Aria Label on the headers)
      type: String,
      default: 'asc',
      validator: function validator(direction) {
        return (0, _array.arrayIncludes)(['asc', 'desc', 'last'], direction);
      }
    },
    sortCompare: {
      type: Function,
      default: null
    },
    noSortReset: {
      // Another prop that should have had a better name.
      // It should be noSortClear (on non-sortable headers).
      // We will need to make sure the documentation is clear on what
      // this prop does (as well as in the code for future reference)
      type: Boolean,
      default: false
    },
    labelSortAsc: {
      type: String,
      default: 'Click to sort Ascending'
    },
    labelSortDesc: {
      type: String,
      default: 'Click to sort Descending'
    },
    labelSortClear: {
      type: String,
      default: 'Click to clear sorting'
    },
    noLocalSorting: {
      type: Boolean,
      default: false
    },
    noFooterSorting: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localSortBy: this.sortBy || '',
      localSortDesc: this.sortDesc || false
    };
  },
  computed: {
    localSorting: function localSorting() {
      return this.hasProvider ? !!this.noProviderSorting : !this.noLocalSorting;
    },
    isSortable: function isSortable() {
      return this.computedFields.some(function (f) {
        return f.sortable;
      });
    },
    sortedItems: function sortedItems() {
      // Sorts the filtered items and returns a new array of the sorted items
      // or the original items array if not sorted.
      var items = (this.filteredItems || []).slice();
      var sortBy = this.localSortBy;
      var sortDesc = this.localSortDesc;
      var sortCompare = this.sortCompare;
      var localSorting = this.localSorting;

      if (sortBy && localSorting) {
        // stableSort returns a new array, and leaves the original array intact
        return (0, _stableSort.default)(items, function (a, b) {
          var result = null;

          if (typeof sortCompare === 'function') {
            // Call user provided sortCompare routine
            result = sortCompare(a, b, sortBy, sortDesc);
          }

          if (result === null || result === undefined || result === false) {
            // Fallback to built-in defaultSortCompare if sortCompare
            // is not defined or returns null/false
            result = (0, _defaultSortCompare.default)(a, b, sortBy);
          } // Negate result if sorting in descending order


          return (result || 0) * (sortDesc ? -1 : 1);
        });
      }

      return items;
    }
  },
  watch: {
    isSortable: function isSortable(newVal, oldVal)
    /* istanbul ignore next: pain in the butt to test */
    {
      if (newVal) {
        if (this.isSortable) {
          this.$on('head-clicked', this.handleSort);
        }
      } else {
        this.$off('head-clicked', this.handleSort);
      }
    },
    sortDesc: function sortDesc(newVal, oldVal) {
      if (newVal === this.localSortDesc) {
        /* istanbul ignore next */
        return;
      }

      this.localSortDesc = newVal || false;
    },
    sortBy: function sortBy(newVal, oldVal) {
      if (newVal === this.localSortBy) {
        /* istanbul ignore next */
        return;
      }

      this.localSortBy = newVal || null;
    },
    // Update .sync props
    localSortDesc: function localSortDesc(newVal, oldVal) {
      // Emit update to sort-desc.sync
      if (newVal !== oldVal) {
        this.$emit('update:sortDesc', newVal);
      }
    },
    localSortBy: function localSortBy(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit('update:sortBy', newVal);
      }
    }
  },
  created: function created() {
    if (this.isSortable) {
      this.$on('head-clicked', this.handleSort);
    }
  },
  methods: {
    // Handlers
    // Need to move from thead-mixin
    handleSort: function handleSort(key, field, evt, isFoot) {
      var _this = this;

      if (!this.isSortable) {
        /* istanbul ignore next */
        return;
      }

      if (isFoot && this.noFooterSorting) {
        return;
      } // TODO: make this tri-state sorting
      // cycle desc => asc => none => desc => ...


      var sortChanged = false;

      var toggleLocalSortDesc = function toggleLocalSortDesc() {
        var sortDirection = field.sortDirection || _this.sortDirection;

        if (sortDirection === 'asc') {
          _this.localSortDesc = false;
        } else if (sortDirection === 'desc') {
          _this.localSortDesc = true;
        } else {// sortDirection === 'last'
          // Leave at last sort direction from previous column
        }
      };

      if (field.sortable) {
        if (key === this.localSortBy) {
          // Change sorting direction on current column
          this.localSortDesc = !this.localSortDesc;
        } else {
          // Start sorting this column ascending
          this.localSortBy = key; // this.localSortDesc = false

          toggleLocalSortDesc();
        }

        sortChanged = true;
      } else if (this.localSortBy && !this.noSortReset) {
        this.localSortBy = null;
        toggleLocalSortDesc();
        sortChanged = true;
      }

      if (sortChanged) {
        // Sorting parameters changed
        this.$emit('sort-changed', this.context);
      }
    },
    // methods to compute classes and attrs for thead>th cells
    sortTheadThClasses: function sortTheadThClasses(key, field, isFoot) {
      return {// No Classes for sorting currently...
        // All styles targeted using aria-* attrs
      };
    },
    sortTheadThAttrs: function sortTheadThAttrs(key, field, isFoot) {
      if (!this.isSortable || isFoot && this.noFooterSorting) {
        // No atributes if not a sortable table
        return {};
      }

      var sortable = field.sortable;
      var ariaLabel = '';

      if ((!field.label || !field.label.trim()) && !field.headerTitle) {
        // In case field's label and title are empty/blank, we need to
        // add a hint about what the column is about for non-sighted users.
        // This is dulicated code from tbody-row mixin, but we need it
        // here as well, since we overwrite the original aria-label.

        /* istanbul ignore next */
        ariaLabel = (0, _startcase.default)(key);
      } // The correctness of these labels is very important for screen-reader users.


      var ariaLabelSorting = '';

      if (sortable) {
        if (this.localSortBy === key) {
          // currently sorted sortable column.
          ariaLabelSorting = this.localSortDesc ? this.labelSortAsc : this.labelSortDesc;
        } else {
          // Not currently sorted sortable column.
          // Not using nested ternary's here for clarity/readability
          // Default for ariaLabel
          ariaLabelSorting = this.localSortDesc ? this.labelSortDesc : this.labelSortAsc; // Handle sortDirection setting

          var sortDirection = this.sortDirection || field.sortDirection;

          if (sortDirection === 'asc') {
            ariaLabelSorting = this.labelSortAsc;
          } else if (sortDirection === 'desc') {
            ariaLabelSorting = this.labelSortDesc;
          }
        }
      } else if (!this.noSortReset) {
        // Non sortable column
        ariaLabelSorting = this.localSortBy ? this.labelSortClear : '';
      } // Assemble the aria-label attribute value


      ariaLabel = [ariaLabel.trim(), ariaLabelSorting.trim()].filter(Boolean).join(': '); // Assemble the aria-sort attribute value

      var ariaSort = sortable && this.localSortBy === key ? this.localSortDesc ? 'descending' : 'ascending' : sortable ? 'none' : null; // Return the attributes
      // (All the above just to get these two values)

      return {
        'aria-label': ariaLabel || null,
        'aria-sort': ariaSort
      };
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-tbody-row.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-tbody-row.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _toString = __webpack_require__(/*! ../../../utils/to-string */ "./node_modules/bootstrap-vue/es/utils/to-string.js");

var _get = __webpack_require__(/*! ../../../utils/get */ "./node_modules/bootstrap-vue/es/utils/get.js");

var _keyCodes = __webpack_require__(/*! ../../../utils/key-codes */ "./node_modules/bootstrap-vue/es/utils/key-codes.js");

var _array = __webpack_require__(/*! ../../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _filterEvent = __webpack_require__(/*! ./filter-event */ "./node_modules/bootstrap-vue/es/components/table/helpers/filter-event.js");

var _textSelectionActive = __webpack_require__(/*! ./text-selection-active */ "./node_modules/bootstrap-vue/es/components/table/helpers/text-selection-active.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  props: {
    tbodyTrClass: {
      type: [String, Array, Function],
      default: null
    }
  },
  methods: {
    // Methods for computing classes, attributes and styles for table cells
    tdClasses: function tdClasses(field, item) {
      var cellVariant = '';

      if (item._cellVariants && item._cellVariants[field.key]) {
        cellVariant = "".concat(this.dark ? 'bg' : 'table', "-").concat(item._cellVariants[field.key]);
      }

      return [field.variant && !cellVariant ? "".concat(this.dark ? 'bg' : 'table', "-").concat(field.variant) : '', cellVariant, field.class ? field.class : '', this.getTdValues(item, field.key, field.tdClass, '')];
    },
    tdAttrs: function tdAttrs(field, item, colIndex) {
      var attrs = {
        role: 'cell',
        'aria-colindex': String(colIndex + 1)
      };

      if (field.isRowHeader) {
        attrs.scope = 'row';
        attrs.role = 'rowheader';
      }

      if (this.isStacked) {
        // Generate the "header cell" label content in stacked mode
        attrs['data-label'] = field.label;
      }

      return _objectSpread({}, attrs, this.getTdValues(item, field.key, field.tdAttr, {}));
    },
    rowClasses: function rowClasses(item) {
      return [item._rowVariant ? "".concat(this.dark ? 'bg' : 'table', "-").concat(item._rowVariant) : '', typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(item, 'row') : this.tbodyTrClass];
    },
    getTdValues: function getTdValues(item, key, tdValue, defValue) {
      var parent = this.$parent;

      if (tdValue) {
        var value = (0, _get.default)(item, key, '');

        if (typeof tdValue === 'function') {
          return tdValue(value, key, item);
        } else if (typeof tdValue === 'string' && typeof parent[tdValue] === 'function') {
          return parent[tdValue](value, key, item);
        }

        return tdValue;
      }

      return defValue;
    },
    // Method to get the value for a field
    getFormattedValue: function getFormattedValue(item, field) {
      var key = field.key;
      var formatter = field.formatter;
      var parent = this.$parent;
      var value = (0, _get.default)(item, key, null);

      if (formatter) {
        if (typeof formatter === 'function') {
          value = formatter(value, key, item);
        } else if (typeof formatter === 'string' && typeof parent[formatter] === 'function') {
          value = parent[formatter](value, key, item);
        }
      }

      return value === null || typeof value === 'undefined' ? '' : value;
    },
    tbodyRowKeydown: function tbodyRowKeydown(evt, item, rowIndex) {
      var keyCode = evt.keyCode;
      var target = evt.target;
      var trs = this.$refs.itemRows;

      if (this.stopIfBusy(evt)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if (!(target && target.tagName === 'TR' && target === document.activeElement)) {
        // Ignore if not the active tr element
        return;
      } else if (target.tabIndex !== 0) {
        // Ignore if not focusable

        /* istanbul ignore next */
        return;
      } else if (trs && trs.length === 0) {
        /* istanbul ignore next */
        return;
      }

      var index = trs.indexOf(target);

      if (keyCode === _keyCodes.default.ENTER || keyCode === _keyCodes.default.SPACE) {
        evt.stopPropagation();
        evt.preventDefault(); // We also allow enter/space to trigger a click (when row is focused)
        // We translate to a row-clicked event

        this.rowClicked(evt, item, rowIndex);
      } else if ((0, _array.arrayIncludes)([_keyCodes.default.UP, _keyCodes.default.DOWN, _keyCodes.default.HOME, _keyCodes.default.END], keyCode)) {
        evt.stopPropagation();
        evt.preventDefault();
        var shift = evt.shiftKey;

        if (keyCode === _keyCodes.default.HOME || shift && keyCode === _keyCodes.default.UP) {
          // Focus first row
          trs[0].focus();
        } else if (keyCode === _keyCodes.default.END || shift && keyCode === _keyCodes.default.DOWN) {
          // Focus last row
          trs[trs.length - 1].focus();
        } else if (keyCode === _keyCodes.default.UP && index > 0) {
          // Focus previous row
          trs[index - 1].focus();
        } else if (keyCode === _keyCodes.default.DOWN && index < trs.length - 1) {
          // Focus next row
          trs[index + 1].focus();
        }
      }
    },
    // Row event handlers
    rowClicked: function rowClicked(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if ((0, _filterEvent.default)(e)) {
        // clicked on a non-disabled control so ignore
        return;
      } else if ((0, _textSelectionActive.default)(this.$el)) {
        // User is selecting text, so ignore

        /* istanbul ignore next: JSDOM doesn't support getSelection() */
        return;
      }

      this.$emit('row-clicked', item, index, e);
    },
    middleMouseRowClicked: function middleMouseRowClicked(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      }

      this.$emit('row-middle-clicked', item, index, e);
    },
    rowDblClicked: function rowDblClicked(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if ((0, _filterEvent.default)(e)) {
        // clicked on a non-disabled control so ignore

        /* istanbul ignore next: event filtering already tested via click handler */
        return;
      }

      this.$emit('row-dblclicked', item, index, e);
    },
    rowHovered: function rowHovered(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      }

      this.$emit('row-hovered', item, index, e);
    },
    rowUnhovered: function rowUnhovered(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      }

      this.$emit('row-unhovered', item, index, e);
    },
    rowContextmenu: function rowContextmenu(e, item, index) {
      if (this.stopIfBusy(e)) {
        // If table is busy (via provider) then don't propagate
        return;
      }

      this.$emit('row-contextmenu', item, index, e);
    },
    // Render helpers
    renderTbodyRowCell: function renderTbodyRowCell(field, colIndex, item, rowIndex) {
      var _this = this;

      var h = this.$createElement; // Renders a TD or TH for a row's field

      var $scoped = this.$scopedSlots;
      var detailsSlot = $scoped['row-details'];
      var rowSelected = this.selectedRows[rowIndex];
      var formatted = this.getFormattedValue(item, field);
      var data = {
        // For the Vue key, we concatinate the column index and field key (as field keys can be duplicated)
        key: "row-".concat(rowIndex, "-cell-").concat(colIndex, "-").concat(field.key),
        class: this.tdClasses(field, item),
        attrs: this.tdAttrs(field, item, colIndex)
      };

      var toggleDetailsFn = function toggleDetailsFn() {
        if (detailsSlot) {
          _this.$set(item, '_showDetails', !item._showDetails);
        }
      };

      var slotScope = {
        item: item,
        index: rowIndex,
        field: field,
        unformatted: (0, _get.default)(item, field.key, ''),
        value: formatted,
        toggleDetails: toggleDetailsFn,
        detailsShowing: Boolean(item._showDetails),
        rowSelected: Boolean(rowSelected)
      };
      var $childNodes = $scoped[field.key] ? $scoped[field.key](slotScope) : (0, _toString.default)(formatted);

      if (this.isStacked) {
        // We wrap in a DIV to ensure rendered as a single cell when visually stacked!
        $childNodes = [h('div', {}, [$childNodes])];
      } // Render either a td or th cell


      return h(field.isRowHeader ? 'th' : 'td', data, [$childNodes]);
    },
    renderTbodyRow: function renderTbodyRow(item, rowIndex) {
      var _this2 = this;

      // Renders an item's row (or rows if details supported)
      var h = this.$createElement;
      var $scoped = this.$scopedSlots;
      var fields = this.computedFields;
      var tableStriped = this.striped;
      var hasRowClickHandler = this.$listeners['row-clicked'] || this.selectable;
      var $detailsSlot = $scoped['row-details'];
      var rowShowDetails = Boolean(item._showDetails && $detailsSlot); // We can return more than one TR if rowDetails enabled

      var $rows = []; // Details ID needed for aria-describedby when details showing

      var detailsId = rowShowDetails ? this.safeId("_details_".concat(rowIndex, "_")) : null;

      var toggleDetailsFn = function toggleDetailsFn() {
        if ($detailsSlot) {
          _this2.$set(item, '_showDetails', !item._showDetails);
        }
      }; // For each item data field in row


      var $tds = fields.map(function (field, colIndex) {
        return _this2.renderTbodyRowCell(field, colIndex, item, rowIndex);
      }); // Calculate the row number in the dataset (indexed from 1)

      var ariaRowIndex = null;

      if (this.currentPage && this.perPage && this.perPage > 0) {
        ariaRowIndex = String((this.currentPage - 1) * this.perPage + rowIndex + 1);
      } // Create a unique :key to help ensure that sub components are re-rendered rather than
      // re-used, which can cause issues. If a primary key is not provided we use the rendered
      // rows index within the tbody.
      // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/2410


      var primaryKey = this.primaryKey;
      var rowKey = primaryKey && item[primaryKey] !== undefined && item[primaryKey] !== null ? (0, _toString.default)(item[primaryKey]) : String(rowIndex); // If primary key is provided, use it to generate a unique ID on each tbody > tr
      // In the format of '{tableId}__row_{primaryKeyValue}'

      var rowId = primaryKey && item[primaryKey] !== undefined && item[primaryKey] !== null ? this.safeId("_row_".concat(item[primaryKey])) : null;
      var handlers = {};

      if (hasRowClickHandler) {
        handlers['click'] = function (evt) {
          _this2.rowClicked(evt, item, rowIndex);
        };

        handlers['keydown'] = function (evt) {
          _this2.tbodyRowKeydown(evt, item, rowIndex);
        };
      } // Add the item row


      $rows.push(h('tr', {
        key: "__b-table-row-".concat(rowKey, "__"),
        ref: 'itemRows',
        refInFor: true,
        class: [this.rowClasses(item), this.selectableRowClasses(rowIndex), {
          'b-table-has-details': rowShowDetails
        }],
        attrs: _objectSpread({
          id: rowId,
          tabindex: hasRowClickHandler ? '0' : null,
          'data-pk': rowId ? String(item[primaryKey]) : null,
          'aria-describedby': detailsId,
          'aria-owns': detailsId,
          'aria-rowindex': ariaRowIndex,
          role: 'row'
        }, this.selectableRowAttrs(rowIndex)),
        on: _objectSpread({}, handlers, {
          // TODO: instatiate the following handlers only if we have registered
          //       listeners i.e. this.$listeners['row-middle-clicked'], etc.
          auxclick: function auxclick(evt) {
            if (evt.which === 2) {
              _this2.middleMouseRowClicked(evt, item, rowIndex);
            }
          },
          contextmenu: function contextmenu(evt) {
            _this2.rowContextmenu(evt, item, rowIndex);
          },
          // Note: these events are not accessibility friendly!
          dblclick: function dblclick(evt) {
            _this2.rowDblClicked(evt, item, rowIndex);
          },
          mouseenter: function mouseenter(evt) {
            _this2.rowHovered(evt, item, rowIndex);
          },
          mouseleave: function mouseleave(evt) {
            _this2.rowUnhovered(evt, item, rowIndex);
          }
        })
      }, $tds)); // Row Details slot

      if (rowShowDetails) {
        var tdAttrs = {
          colspan: String(fields.length),
          role: 'cell'
        };
        var trAttrs = {
          id: detailsId,
          role: 'row' // Render the details slot

        };
        var $details = h('td', {
          attrs: tdAttrs
        }, [$detailsSlot({
          item: item,
          index: rowIndex,
          fields: fields,
          toggleDetails: toggleDetailsFn
        })]); // Add a hidden row to keep table row striping consistent when details showing

        if (tableStriped) {
          $rows.push(h('tr', {
            key: "__b-table-details-".concat(rowIndex, "-stripe__"),
            staticClass: 'd-none',
            attrs: {
              'aria-hidden': 'true',
              role: 'presentation'
            }
          }));
        } // Add the actual details row


        $rows.push(h('tr', {
          key: "__b-table-details-".concat(rowIndex, "__"),
          staticClass: 'b-table-details',
          class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(item, 'row-details') : this.tbodyTrClass],
          attrs: trAttrs
        }, [$details]));
      } else if ($detailsSlot) {
        // Only add the placeholder if a the table has a row-details slot defined (but not shown)
        $rows.push(h(false));

        if (tableStriped) {
          // add extra placeholder if table is striped
          $rows.push(h(false));
        }
      } // Return the row(s)


      return $rows;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-tbody.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-tbody.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _mixinTbodyRow = __webpack_require__(/*! ./mixin-tbody-row */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-tbody-row.js");

var _mixinEmpty = __webpack_require__(/*! ./mixin-empty */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-empty.js");

var _mixinTopRow = __webpack_require__(/*! ./mixin-top-row */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-top-row.js");

var _mixinBottomRow = __webpack_require__(/*! ./mixin-bottom-row */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-bottom-row.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// busy mixin is imported in main table.js as it is used by multiple mixins
var _default = {
  mixins: [_mixinTbodyRow.default, _mixinEmpty.default, _mixinTopRow.default, _mixinBottomRow.default],
  props: {
    tbodyClass: {
      type: [String, Array],
      default: null
    },
    tbodyTransitionProps: {
      type: Object // default: undefined

    },
    tbodyTransitionHandlers: {
      type: Object // default: undefined

    }
  },
  methods: {
    renderTbody: function renderTbody() {
      var _this = this;

      // Render the tbody element and children
      var h = this.$createElement;
      var items = this.computedItems; // Prepare the tbody rows

      var $rows = []; // Add the item data rows or the busy slot

      var $busy = this.renderBusy();

      if ($busy) {
        // If table is busy and a busy slot, then return only the busy "row" indicator
        $rows.push($busy);
      } else {
        // Table isn't bsuy, or we don't have a busy slot
        // Add static Top Row slot (hidden in visibly stacked mode as we can't control the data-label)
        $rows.push(this.renderTopRow()); // render the rows

        items.forEach(function (item, rowIndex) {
          // Render the individual item row (rows if details slot)
          $rows.push(_this.renderTbodyRow(item, rowIndex));
        }); // Empty Items / Empty Filtered Row slot (only shows if items.length < -

        $rows.push(this.renderEmpty()); // Static bottom row slot (hidden in visibly stacked mode as we can't control the data-label)

        $rows.push(this.renderBottomRow());
      } // If tbody transition enabled


      var isTransGroup = this.tbodyTransitionProps || this.tbodyTransitionHandlers;
      var tbodyProps = {};
      var tbodyOn = {};

      if (isTransGroup) {
        tbodyOn = this.tbodyTransitionHandlers || {};
        tbodyProps = _objectSpread({}, this.tbodyTransitionProps || {}, {
          tag: 'tbody'
        });
      } // Assemble rows into the tbody


      var $tbody = h(isTransGroup ? 'transition-group' : 'tbody', {
        props: tbodyProps,
        on: tbodyOn,
        class: [this.tbodyClass],
        attrs: {
          role: 'rowgroup'
        }
      }, $rows); // Return the assembled tbody

      return $tbody;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-tfoot.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-tfoot.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  props: {
    footClone: {
      type: Boolean,
      default: false
    },
    footVariant: {
      type: String,
      default: ''
    },
    tfootClass: {
      type: [String, Array, Object],
      default: null
    },
    tfootTrClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  computed: {
    footClasses: function footClasses() {
      var variant = this.footVariant || this.headVariant || null;
      return [variant ? 'thead-' + variant : '', this.tfootClass];
    }
  },
  methods: {
    renderTfoot: function renderTfoot() {
      var h = this.$createElement; // Passing true to renderThead will make it render a tfoot

      return this.footClone ? this.renderThead(true) : h(false);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-thead.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-thead.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _startcase = __webpack_require__(/*! ../../../utils/startcase */ "./node_modules/bootstrap-vue/es/utils/startcase.js");

var _keyCodes = __webpack_require__(/*! ../../../utils/key-codes */ "./node_modules/bootstrap-vue/es/utils/key-codes.js");

var _html = __webpack_require__(/*! ../../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

var _filterEvent = __webpack_require__(/*! ./filter-event */ "./node_modules/bootstrap-vue/es/components/table/helpers/filter-event.js");

var _textSelectionActive = __webpack_require__(/*! ./text-selection-active */ "./node_modules/bootstrap-vue/es/components/table/helpers/text-selection-active.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  props: {
    headVariant: {
      type: String,
      default: ''
    },
    theadClass: {
      type: [String, Array, Object],
      default: null
    },
    theadTrClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  computed: {
    headClasses: function headClasses() {
      return [this.headVariant ? 'thead-' + this.headVariant : '', this.theadClass];
    }
  },
  methods: {
    fieldClasses: function fieldClasses(field) {
      // header field (th) classes
      return [field.variant ? 'table-' + field.variant : '', field.class ? field.class : '', field.thClass ? field.thClass : ''];
    },
    headClicked: function headClicked(evt, field, isFoot) {
      if (this.stopIfBusy(evt)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if ((0, _filterEvent.default)(evt)) {
        // clicked on a non-disabled control so ignore
        return;
      } else if ((0, _textSelectionActive.default)(this.$el)) {
        // User is selecting text, so ignore

        /* istanbul ignore next: JSDOM doesn't support getSelection() */
        return;
      }

      evt.stopPropagation();
      evt.preventDefault();
      this.$emit('head-clicked', field.key, field, evt, isFoot);
    },
    renderThead: function renderThead() {
      var _this = this;

      var isFoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var h = this.$createElement;

      if (this.isStacked === true) {
        // In always stacked mode, we don't bother rendering the head/foot
        return h(false);
      }

      var fields = this.computedFields || []; // Helper function to generate a field TH cell

      var makeCell = function makeCell(field, colIndex) {
        var ariaLabel = null;

        if (!field.label.trim() && !field.headerTitle) {
          // In case field's label and title are empty/blank
          // We need to add a hint about what the column is about for non-sighted users

          /* istanbul ignore next */
          ariaLabel = (0, _startcase.default)(field.key);
        }

        var hasHeadClickListener = _this.$listeners['head-clicked'] || _this.isSortable;
        var handlers = {};

        if (hasHeadClickListener) {
          handlers.click = function (evt) {
            _this.headClicked(evt, field, isFoot);
          };

          handlers.keydown = function (evt) {
            var keyCode = evt.keyCode;

            if (keyCode === _keyCodes.default.ENTER || keyCode === _keyCodes.default.SPACE) {
              _this.headClicked(evt, field, isFoot);
            }
          };
        }

        var data = {
          key: field.key,
          class: [_this.fieldClasses(field), _this.sortTheadThClasses(field.key, field, isFoot)],
          style: field.thStyle || {},
          attrs: _objectSpread({
            // We only add a tabindex of 0 if there is a head-clicked listener
            tabindex: hasHeadClickListener ? '0' : null,
            abbr: field.headerAbbr || null,
            title: field.headerTitle || null,
            role: 'columnheader',
            scope: 'col',
            'aria-colindex': String(colIndex + 1),
            'aria-label': ariaLabel
          }, _this.sortTheadThAttrs(field.key, field, isFoot)),
          on: handlers
        };
        var fieldScope = {
          label: field.label,
          column: field.key,
          field: field
        };
        var slot = isFoot && _this.hasNormalizedSlot("FOOT_".concat(field.key)) ? _this.normalizeSlot("FOOT_".concat(field.key), fieldScope) : _this.normalizeSlot("HEAD_".concat(field.key), fieldScope);

        if (slot) {
          slot = [slot];
        } else {
          data.domProps = (0, _html.htmlOrText)(field.labelHtml);
        }

        return h('th', data, slot || field.label);
      }; // Generate the array of TH cells


      var $cells = fields.map(makeCell).filter(function (th) {
        return th;
      }); // Genrate the row(s)

      var $trs = [];

      if (isFoot) {
        $trs.push(h('tr', {
          class: this.tfootTrClass,
          attrs: {
            role: 'row'
          }
        }, $cells));
      } else {
        var scope = {
          columns: fields.length,
          fields: fields
        };
        $trs.push(this.normalizeSlot('thead-top', scope) || h(false));
        $trs.push(h('tr', {
          class: this.theadTrClass,
          attrs: {
            role: 'row'
          }
        }, $cells));
      }

      return h(isFoot ? 'tfoot' : 'thead', {
        key: isFoot ? 'tfoot' : 'thead',
        class: isFoot ? this.footClasses : this.headClasses,
        attrs: {
          role: 'rowgroup'
        }
      }, $trs);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-top-row.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/mixin-top-row.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  methods: {
    renderTopRow: function renderTopRow() {
      var h = this.$createElement; // Add static Top Row slot (hidden in visibly stacked mode as we can't control the data-label)
      // If in always stacked mode, we don't bother rendering the row

      if (!this.hasNormalizedSlot('top-row') || this.isStacked === true) {
        return h(false);
      }

      var fields = this.computedFields;
      return h('tr', {
        key: 'top-row',
        staticClass: 'b-table-top-row',
        class: [typeof this.tbodyTrClass === 'function' ? this.tbodyTrClass(null, 'row-top') : this.tbodyTrClass],
        attrs: {
          role: 'row'
        }
      }, [this.normalizeSlot('top-row', {
        columns: fields.length,
        fields: fields
      })]);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/normalize-fields.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/normalize-fields.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = normalizeFields;

var _startcase = __webpack_require__(/*! ../../../utils/startcase */ "./node_modules/bootstrap-vue/es/utils/startcase.js");

var _object = __webpack_require__(/*! ../../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _array = __webpack_require__(/*! ../../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/bootstrap-vue/es/components/table/helpers/constants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// private function to massage field entry into common object format
function processField(key, value) {
  var field = null;

  if (typeof value === 'string') {
    // Label shortcut
    field = {
      key: key,
      label: value
    };
  } else if (typeof value === 'function') {
    // Formatter shortcut
    field = {
      key: key,
      formatter: value
    };
  } else if (_typeof(value) === 'object') {
    field = _objectSpread({}, value);
    field.key = field.key || key;
  } else if (value !== false) {
    // Fallback to just key

    /* istanbul ignore next */
    field = {
      key: key
    };
  }

  return field;
} // We normalize fields into an array of objects
// [ { key:..., label:..., ...}, {...}, ..., {..}]


function normalizeFields(origFields, items) {
  var fields = [];

  if ((0, _array.isArray)(origFields)) {
    // Normalize array Form
    origFields.filter(function (f) {
      return f;
    }).forEach(function (f) {
      if (typeof f === 'string') {
        fields.push({
          key: f,
          label: (0, _startcase.default)(f)
        });
      } else if (_typeof(f) === 'object' && f.key && typeof f.key === 'string') {
        // Full object definition. We use assign so that we don't mutate the original
        fields.push(_objectSpread({}, f));
      } else if (_typeof(f) === 'object' && (0, _object.keys)(f).length === 1) {
        // Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
        var key = (0, _object.keys)(f)[0];
        var field = processField(key, f[key]);

        if (field) {
          fields.push(field);
        }
      }
    });
  } else if (origFields && _typeof(origFields) === 'object' && (0, _object.keys)(origFields).length > 0) {
    // Normalize object Form (deprecated)
    (0, _object.keys)(origFields).forEach(function (key) {
      var field = processField(key, origFields[key]);

      if (field) {
        fields.push(field);
      }
    });
  } // If no field provided, take a sample from first record (if exits)


  if (fields.length === 0 && (0, _array.isArray)(items) && items.length > 0) {
    var sample = items[0];
    (0, _object.keys)(sample).forEach(function (k) {
      if (!_constants.IGNORED_FIELD_KEYS[k]) {
        fields.push({
          key: k,
          label: (0, _startcase.default)(k)
        });
      }
    });
  } // Ensure we have a unique array of fields and that they have String labels


  var memo = {};
  return fields.filter(function (f) {
    if (!memo[f.key]) {
      memo[f.key] = true;
      f.label = typeof f.label === 'string' ? f.label : (0, _startcase.default)(f.key);
      return true;
    }

    return false;
  });
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/sanitize-row.js":
/*!********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/sanitize-row.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = sanitizeRow;

var _object = __webpack_require__(/*! ../../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/bootstrap-vue/es/components/table/helpers/constants.js");

// Return a copy of a row after all reserved fields have been filtered out
// TODO: add option to specify which fields to include
function sanitizeRow(row) {
  return (0, _object.keys)(row).reduce(function (obj, key) {
    // Ignore special fields that start with _
    if (!_constants.IGNORED_FIELD_KEYS[key]) {
      obj[key] = row[key];
    }

    return obj;
  }, {});
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/stringify-object-values.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/stringify-object-values.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = stringifyObjectValues;

var _object = __webpack_require__(/*! ../../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

// Recursively stringifies the values of an object, space separated, in an
// SSR safe deterministic way (keys are storted before stringification)
//
//   ex:
//     { b: 3, c: { z: 'zzz', d: null, e: 2 }, d: [10, 12, 11], a: 'one' }
//   becomes
//     'one 3 2 zzz 10 12 11'
//
// Primatives (numbers/strings) are returned as-is
// Null and undefined values are filtered out
// Dates are converted to their native string format
//
function stringifyObjectValues(val) {
  if (typeof val === 'undefined' || val === null) {
    /* istanbul ignore next */
    return '';
  }

  if (val instanceof Object && !(val instanceof Date)) {
    // Arrays are also object, and keys just returns the array indexes
    // Date objects we convert to strings
    return (0, _object.keys)(val).sort()
    /* sort to prevent SSR issues on pre-rendered sorted tables */
    .filter(function (v) {
      return v !== undefined && v !== null;
    })
    /* ignore undefined/null values */
    .map(function (k) {
      return stringifyObjectValues(val[k]);
    }).join(' ');
  }

  return String(val);
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/stringify-record-values.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/stringify-record-values.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = stringifyRecordValues;

var _sanitizeRow = __webpack_require__(/*! ./sanitize-row */ "./node_modules/bootstrap-vue/es/components/table/helpers/sanitize-row.js");

var _stringifyObjectValues = __webpack_require__(/*! ./stringify-object-values */ "./node_modules/bootstrap-vue/es/components/table/helpers/stringify-object-values.js");

// Stringifies the values of a record, ignoring any special top level field keys
// TODO: add option to strigify formatted/scopedSlot items, and only specific fields
function stringifyRecordValues(row) {
  /* istanbul ignore else */
  if (row instanceof Object) {
    return (0, _stringifyObjectValues.default)((0, _sanitizeRow.default)(row));
  } else {
    /* istanbul ignore next */
    return '';
  }
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/helpers/text-selection-active.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/helpers/text-selection-active.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = textSelectionActive;

var _dom = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

// Helper to determine if a there is an active text selection on the document page.
// Used to filter out click events caused by the mouse up at end of selection
//
// Accepts an element as only argument to test to see if selection overlaps or is
// contained within the element
function textSelectionActive() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var win = window;
  /* istanbul ignore if: JSDOM doesn't support getSelection */

  if (win && win.getSelection && win.getSelection().toString() !== '' && (0, _dom.isElement)(el)) {
    /* istanbul ignore next: JSDOM doesn't support getSelection */
    var sel = win.getSelection();
    /* istanbul ignore next: JSDOM doesn't support getSelection */

    return sel.containsNode ? sel.containsNode(el, true) : false;
  } else {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _table = __webpack_require__(/*! ./table */ "./node_modules/bootstrap-vue/es/components/table/table.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BTable: _table.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/table/table.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/table/table.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _looseEqual = __webpack_require__(/*! ../../utils/loose-equal */ "./node_modules/bootstrap-vue/es/utils/loose-equal.js");

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _normalizeSlot = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/es/mixins/normalize-slot.js");

var _mixinItems = __webpack_require__(/*! ./helpers/mixin-items */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-items.js");

var _mixinFiltering = __webpack_require__(/*! ./helpers/mixin-filtering */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-filtering.js");

var _mixinSorting = __webpack_require__(/*! ./helpers/mixin-sorting */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-sorting.js");

var _mixinPagination = __webpack_require__(/*! ./helpers/mixin-pagination */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-pagination.js");

var _mixinCaption = __webpack_require__(/*! ./helpers/mixin-caption */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-caption.js");

var _mixinColgroup = __webpack_require__(/*! ./helpers/mixin-colgroup */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-colgroup.js");

var _mixinThead = __webpack_require__(/*! ./helpers/mixin-thead */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-thead.js");

var _mixinTfoot = __webpack_require__(/*! ./helpers/mixin-tfoot */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-tfoot.js");

var _mixinTbody = __webpack_require__(/*! ./helpers/mixin-tbody */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-tbody.js");

var _mixinBusy = __webpack_require__(/*! ./helpers/mixin-busy */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-busy.js");

var _mixinSelectable = __webpack_require__(/*! ./helpers/mixin-selectable */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-selectable.js");

var _mixinProvider = __webpack_require__(/*! ./helpers/mixin-provider */ "./node_modules/bootstrap-vue/es/components/table/helpers/mixin-provider.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// b-table component definition
// @vue/component
var _default2 = {
  name: 'BTable',
  // Order of mixins is important.
  // They are merged from left to fight, followed by this component.
  mixins: [_id.default, _normalizeSlot.default, _mixinItems.default, _mixinFiltering.default, _mixinSorting.default, _mixinPagination.default, _mixinBusy.default, _mixinCaption.default, _mixinColgroup.default, _mixinThead.default, _mixinTfoot.default, _mixinTbody.default, _mixinSelectable.default, _mixinProvider.default],
  // Don't place ATTRS on root element automatically, as table could be wrapped in responsive div
  inheritAttrs: false,
  props: {
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: [Boolean, String],
      default: false
    },
    stacked: {
      type: [Boolean, String],
      default: false
    },
    value: {
      // v-model for retrieving the current displayed rows
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    // Mixins add to data
    return {};
  },
  computed: {
    // Layout related computed props
    isStacked: function isStacked() {
      return this.stacked === '' ? true : this.stacked;
    },
    isResponsive: function isResponsive() {
      var responsive = this.responsive === '' ? true : this.responsive;
      return this.isStacked ? false : responsive;
    },
    responsiveClass: function responsiveClass() {
      return this.isResponsive === true ? 'table-responsive' : this.isResponsive ? "table-responsive-".concat(this.responsive) : '';
    },
    tableClasses: function tableClasses() {
      return [_defineProperty({
        'table-striped': this.striped,
        'table-hover': this.hover,
        'table-dark': this.dark,
        'table-bordered': this.bordered,
        'table-borderless': this.borderless,
        'table-sm': this.small,
        border: this.outlined,
        // The following are b-table custom styles
        'b-table-fixed': this.fixed,
        'b-table-stacked': this.stacked === true || this.stacked === ''
      }, "b-table-stacked-".concat(this.stacked), this.stacked !== true && this.stacked), // Selectable classes
      this.selectableTableClasses];
    },
    tableAttrs: function tableAttrs() {
      // Preserve user supplied aria-describedby, if provided in $attrs
      var adb = [(this.$attrs || {})['aria-describedby'], this.captionId].filter(Boolean).join(' ') || null;
      var items = this.computedItems;
      var fields = this.computedFields;
      return _objectSpread({
        // We set aria-rowcount before merging in $attrs, in case user has supplied their own
        'aria-rowcount': this.filteredItems.length > items.length ? String(this.filteredItems.length) : null
      }, this.$attrs, {
        // Now we can override any $attrs here
        id: this.safeId(),
        role: this.isStacked ? 'table' : null,
        'aria-busy': this.computedBusy ? 'true' : 'false',
        'aria-colcount': String(fields.length),
        'aria-describedby': adb
      }, this.selectableTableAttrs);
    },
    context: function context() {
      // Current state of sorting, filtering and pagination props/values
      return {
        filter: this.localFilter,
        sortBy: this.localSortBy,
        sortDesc: this.localSortDesc,
        perPage: parseInt(this.perPage, 10) || 0,
        currentPage: parseInt(this.currentPage, 10) || 1,
        apiUrl: this.apiUrl
      };
    },
    computedItems: function computedItems() {
      return this.paginatedItems || [];
    }
  },
  watch: {
    // Watch for changes on computedItems and update the v-model
    computedItems: function computedItems(newVal, oldVal) {
      this.$emit('input', newVal);
    },
    context: function context(newVal, oldVal) {
      // Emit context info for external paging/filtering/sorting handling
      if (!(0, _looseEqual.default)(newVal, oldVal)) {
        this.$emit('context-changed', newVal);
      }
    }
  },
  mounted: function mounted() {
    // Initially update the v-model of displayed items
    this.$emit('input', this.computedItems);
  },
  render: function render(h) {
    // Build the caption (from caption mixin)
    var $caption = this.renderCaption(); // Build the colgroup

    var $colgroup = this.renderColgroup(); // Build the thead

    var $thead = this.renderThead(); // Build the tfoot

    var $tfoot = this.renderTfoot(); // Build the tbody

    var $tbody = this.renderTbody(); // Assemble table

    var $table = h('table', {
      key: 'b-table',
      staticClass: 'table b-table',
      class: this.tableClasses,
      attrs: this.tableAttrs
    }, [$caption, $colgroup, $thead, $tfoot, $tbody]); // Add responsive wrapper if needed and return table

    return this.isResponsive ? h('div', {
      key: 'b-table-responsive',
      class: this.responsiveClass
    }, [$table]) : $table;
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/tabs/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/tabs/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tabs = __webpack_require__(/*! ./tabs */ "./node_modules/bootstrap-vue/es/components/tabs/tabs.js");

var _tab = __webpack_require__(/*! ./tab */ "./node_modules/bootstrap-vue/es/components/tabs/tab.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BTabs: _tabs.default,
  BTab: _tab.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/tabs/tab.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/tabs/tab.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

// @vue/component
var _default2 = {
  name: 'BTab',
  mixins: [_id.default],
  inject: {
    bvTabs: {
      default: function _default() {
        return {
          // Don't set a tab index if not rendered inside `<b-tabs>`
          noKeyNav: true
        };
      }
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    buttonId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleItemClass: {
      // Sniffed by tabs.js and added to nav 'li.nav-item'
      type: [String, Array, Object],
      default: null
    },
    titleLinkClass: {
      // Sniffed by tabs.js and added to nav 'a.nav-link'
      type: [String, Array, Object],
      default: null
    },
    headHtml: {
      // Is this actually ever used?
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    noBody: {
      type: Boolean,
      default: false
    },
    href: {
      // This should be deprecated, as tabs are not navigation (URL) based
      // <b-nav> + <b-card> + <router-view>/<nuxt-child> should be used instead
      // And we dont support router-links here
      type: String,
      default: '#'
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localActive: this.active && !this.disabled,
      show: false
    };
  },
  computed: {
    tabClasses: function tabClasses() {
      return [this.bvTabs.card && !this.noBody ? 'card-body' : '', this.show ? 'show' : '', this.computedFade ? 'fade' : '', this.disabled ? 'disabled' : '', this.localActive ? 'active' : ''];
    },
    controlledBy: function controlledBy() {
      return this.buttonId || this.safeId('__BV_tab_button__');
    },
    computedFade: function computedFade() {
      return this.bvTabs.fade || false;
    },
    computedLazy: function computedLazy() {
      return this.bvTabs.lazy || this.lazy;
    },
    _isTab: function _isTab() {
      // For parent sniffing of child
      return true;
    }
  },
  watch: {
    localActive: function localActive(newVal, oldVal) {
      // Make 'active' prop work with `.sync` modifier
      this.$emit('update:active', newVal);
    },
    active: function active(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal) {
          // If activated post mount
          this.activate();
        } else {
          if (!this.deactivate()) {
            // Tab couldn't be deactivated, so we reset the synced active prop
            // Deactivation will fail if no other tabs to activate.
            this.$emit('update:active', this.localActive);
          }
        }
      }
    },
    disabled: function disabled(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal && this.localActive && this.bvTabs.firstTab) {
          this.localActive = false;
          this.bvTabs.firstTab();
        }
      }
    }
  },
  mounted: function mounted() {
    // Initially show on mount if active and not disabled
    this.show = this.localActive;
  },
  updated: function updated() {
    // Force the tab button content to update (since slots are not reactive)
    // Only done if we have a title slot, as the title prop is reactive
    if (this.$slots.title && this.bvTabs.updateButton) {
      this.bvTabs.updateButton(this);
    }
  },
  methods: {
    // Transition handlers
    beforeEnter: function beforeEnter() {
      var _this = this;

      // change opacity (add 'show' class) 1 frame after display
      // otherwise css transition won't happen
      (0, _dom.requestAF)(function () {
        _this.show = true;
      });
    },
    beforeLeave: function beforeLeave() {
      // Remove the 'show' class
      this.show = false;
    },
    // Public methods
    activate: function activate() {
      if (this.bvTabs.activateTab && !this.disabled) {
        return this.bvTabs.activateTab(this);
      } else {
        // Not inside a b-tabs component or tab is disabled
        return false;
      }
    },
    deactivate: function deactivate() {
      if (this.bvTabs.deactivateTab && this.localActive) {
        return this.bvTabs.deactivateTab(this);
      } else {
        // Not inside a b-tabs component or not active to begin with
        return false;
      }
    }
  },
  render: function render(h) {
    var content = h(this.tag, {
      ref: 'panel',
      staticClass: 'tab-pane',
      class: this.tabClasses,
      directives: [// TODO: convert to style object in render
      {
        name: 'show',
        rawName: 'v-show',
        value: this.localActive,
        expression: 'localActive'
      }],
      attrs: {
        role: 'tabpanel',
        id: this.safeId(),
        tabindex: this.localActive && !this.bvTabs.noKeyNav ? '0' : null,
        'aria-hidden': this.localActive ? 'false' : 'true',
        'aria-expanded': this.localActive ? 'true' : 'false',
        'aria-labelledby': this.controlledBy || null
      }
    }, // Render content lazily if requested
    [this.localActive || !this.computedLazy ? this.$slots.default : h(false)]);
    return h('transition', {
      props: {
        mode: 'out-in',
        // Disable use of built-in transition classes
        'enter-class': '',
        'enter-active-class': '',
        'enter-to-class': '',
        'leave-class': '',
        'leave-active-class': '',
        'leave-to-class': ''
      },
      on: {
        beforeEnter: this.beforeEnter,
        beforeLeave: this.beforeLeave
      }
    }, [content]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/tabs/tabs.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/tabs/tabs.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _link = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

var _keyCodes = __webpack_require__(/*! ../../utils/key-codes */ "./node_modules/bootstrap-vue/es/utils/key-codes.js");

var _observeDom = __webpack_require__(/*! ../../utils/observe-dom */ "./node_modules/bootstrap-vue/es/utils/observe-dom.js");

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Private Helper component
// @vue/component
var BTabButtonHelper = {
  name: 'BTabButtonHelper',
  inject: {
    bvTabs: {
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: {
    // Reference to the child b-tab instance
    tab: {
      default: null
    },
    tabs: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    id: {
      type: String,
      default: null
    },
    controls: {
      type: String,
      default: null
    },
    tabIndex: {
      type: Number,
      default: null
    },
    posInSet: {
      type: Number,
      default: null
    },
    setSize: {
      type: Number,
      default: null
    },
    noKeyNav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    focus: function focus() {
      if (this.$refs && this.$refs.link && this.$refs.link.focus) {
        this.$refs.link.focus();
      }
    },
    handleEvt: function handleEvt(evt) {
      function stop() {
        evt.preventDefault();
        evt.stopPropagation();
      }

      if (this.tab.disabled) {
        /* istanbul ignore next */
        return;
      }

      var type = evt.type;
      var key = evt.keyCode;
      var shift = evt.shiftKey;

      if (type === 'click') {
        stop();
        this.$emit('click', evt);
      } else if (type === 'keydown' && !this.noKeyNav && key === _keyCodes.default.SPACE) {
        // In keynav mode, SPACE press will also trigger a click/select
        stop();
        this.$emit('click', evt);
      } else if (type === 'keydown' && !this.noKeyNav) {
        // For keyboard navigation
        if (key === _keyCodes.default.UP || key === _keyCodes.default.LEFT || key === _keyCodes.default.HOME) {
          stop();

          if (shift || key === _keyCodes.default.HOME) {
            this.$emit('first', evt);
          } else {
            this.$emit('prev', evt);
          }
        } else if (key === _keyCodes.default.DOWN || key === _keyCodes.default.RIGHT || key === _keyCodes.default.END) {
          stop();

          if (shift || key === _keyCodes.default.END) {
            this.$emit('last', evt);
          } else {
            this.$emit('next', evt);
          }
        }
      }
    }
  },
  render: function render(h) {
    var link = h(_link.default, {
      ref: 'link',
      staticClass: 'nav-link',
      class: [{
        active: this.tab.localActive && !this.tab.disabled,
        disabled: this.tab.disabled
      }, this.tab.titleLinkClass],
      props: {
        href: this.tab.href,
        // To be deprecated to always be '#'
        disabled: this.tab.disabled
      },
      attrs: {
        role: 'tab',
        id: this.id,
        // Roving tab index when keynav enabled
        tabindex: this.tabIndex,
        'aria-selected': this.tab.localActive && !this.tab.disabled ? 'true' : 'false',
        'aria-setsize': this.setSize,
        'aria-posinset': this.posInSet,
        'aria-controls': this.controls
      },
      on: {
        click: this.handleEvt,
        keydown: this.handleEvt
      }
    }, [this.tab.$slots.title || this.tab.title]);
    return h('li', {
      staticClass: 'nav-item',
      class: [this.tab.titleItemClass],
      attrs: {
        role: 'presentation'
      }
    }, [link]);
  }
}; // Filter function to filter out disabled tabs

function notDisabled(tab) {
  return !tab.disabled;
} // @vue/component


var _default2 = {
  name: 'BTabs',
  mixins: [_id.default],
  provide: function provide() {
    return {
      bvTabs: this
    };
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    card: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    pills: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    end: {
      // Synonym for 'bottom'
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    noNavStyle: {
      type: Boolean,
      default: false
    },
    noKeyNav: {
      type: Boolean,
      default: false
    },
    lazy: {
      // This prop is sniffed by the tab child
      type: Boolean,
      default: false
    },
    contentClass: {
      type: [String, Array, Object],
      default: null
    },
    navClass: {
      type: [String, Array, Object],
      default: null
    },
    navWrapperClass: {
      type: [String, Array, Object],
      default: null
    },
    value: {
      // v-model
      type: Number,
      default: null
    }
  },
  data: function data() {
    var tabIdx = parseInt(this.value, 10);
    tabIdx = isNaN(tabIdx) ? -1 : tabIdx;
    return {
      // Index of current tab
      currentTab: tabIdx,
      // Array of direct child b-tab instances
      tabs: []
    };
  },
  computed: {
    fade: function fade() {
      // This computed prop is sniffed by the tab child
      return !this.noFade;
    },
    navStyle: function navStyle() {
      return this.pills ? 'pills' : 'tabs';
    }
  },
  watch: {
    currentTab: function currentTab(val, old) {
      var index = -1; // Ensure only one tab is active at most

      this.tabs.forEach(function (tab, idx) {
        if (val === idx && !tab.disabled) {
          tab.localActive = true;
          index = idx;
        } else {
          tab.localActive = false;
        }
      }); // Update the v-model

      this.$emit('input', index);
    },
    value: function value(val, old) {
      if (val !== old) {
        val = parseInt(val, 10);
        val = isNaN(val) ? -1 : val;
        old = parseInt(old, 10) || 0;
        var tabs = this.tabs;

        if (tabs[val] && !tabs[val].disabled) {
          this.currentTab = val;
        } else {
          // Try next or prev tabs
          if (val < old) {
            this.previousTab();
          } else {
            this.nextTab();
          }
        }
      }
    }
  },
  created: function created() {
    var _this = this;

    var tabIdx = parseInt(this.value, 10);
    this.currentTab = isNaN(tabIdx) ? -1 : tabIdx; // Create private non-reactive prop

    this._bvObserver = null; // For SSR and to make sure only a single tab is shown on mount
    // We wrap this in a `$nextTick()` to ensure the child tabs have been created

    this.$nextTick(function () {
      _this.updateTabs();
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      // Call updateTabs jsut in case....
      _this2.updateTabs(); // Observe Child changes so we can update list of tabs


      _this2.setObserver(true);
    });
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.setObserver(false);
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    var _this3 = this;

    var tabIdx = parseInt(this.value, 10);
    this.currentTab = isNaN(tabIdx) ? -1 : tabIdx;
    this.$nextTick(function () {
      _this3.updateTabs();

      _this3.setObserver(true);
    });
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    this.setObserver(false);
  },
  methods: {
    setObserver: function setObserver(on) {
      if (on) {
        // Make sure no existing observer running
        this.setObserver(false); // Watch for changes to b-tab sub components

        this._bvObserver = (0, _observeDom.default)(this.$refs.tabsContainer, this.updateTabs.bind(this), {
          childList: true,
          subtree: false,
          attributes: true,
          attributeFilter: ['style', 'class']
        });
      } else {
        if (this._bvObserver && this._bvObserver.disconnect) {
          this._bvObserver.disconnect();
        }

        this._bvObserver = null;
      }
    },
    getTabs: function getTabs() {
      return (this.$slots.default || []).map(function (vnode) {
        return vnode.componentInstance;
      }).filter(function (tab) {
        return tab && tab._isTab;
      });
    },
    // Update list of b-tab children
    updateTabs: function updateTabs() {
      // Probe tabs
      var tabs = this.getTabs(); // Find *last* active non-disabled tab in current tabs
      // We trust tab state over currentTab, in case tabs were added/removed/re-ordered

      var tabIndex = tabs.indexOf(tabs.slice().reverse().find(function (tab) {
        return tab.localActive && !tab.disabled;
      })); // Else try setting to currentTab

      if (tabIndex < 0) {
        var currentTab = this.currentTab;

        if (currentTab >= tabs.length) {
          // Handle last tab being removed, so find the last non-disabled tab
          tabIndex = tabs.indexOf(tabs.slice().reverse().find(notDisabled));
        } else if (tabs[currentTab] && !tabs[currentTab].disabled) {
          // Current tab is not disabled
          tabIndex = currentTab;
        }
      } // Else find *first* non-disabled tab in current tabs


      if (tabIndex < 0) {
        tabIndex = tabs.indexOf(tabs.find(notDisabled));
      } // Set the current tab state to active


      tabs.forEach(function (tab, idx) {
        // tab.localActive = idx === tabIndex && !tab.disabled
        tab.localActive = false;
      });

      if (tabs[tabIndex]) {
        tabs[tabIndex].localActive = true;
      } // Update the array of tab children


      this.tabs = tabs; // Set the currentTab index (can be -1 if no non-disabled tabs)

      this.currentTab = tabIndex;
    },
    // Find a button that controls a tab, given the tab reference
    // Returns the button vm instance
    getButtonForTab: function getButtonForTab(tab) {
      return (this.$refs.buttons || []).find(function (btn) {
        return btn.tab === tab;
      });
    },
    // Force a button to re-render it's content, given a b-tab instance
    // Called by b-tab on update()
    updateButton: function updateButton(tab) {
      var button = this.getButtonForTab(tab);

      if (button && button.$forceUpdate) {
        button.$forceUpdate();
      }
    },
    // Activate a tab given a b-tab instance
    // Also accessed by b-tab
    activateTab: function activateTab(tab) {
      var result = false;

      if (tab) {
        var index = this.tabs.indexOf(tab);

        if (!tab.disabled && index > -1) {
          result = true;
          this.currentTab = index;
        }
      }

      if (!result) {
        // Couldn't set tab, so ensure v-model is set to this.currentTab

        /* istanbul ignore next: should rarely happen */
        this.$emit('input', this.currentTab);
      }

      return result;
    },
    // Deactivate a tab given a b-tab instance
    // Accessed by b-tab
    deactivateTab: function deactivateTab(tab) {
      if (tab) {
        // Find first non-disabled tab that isn't the one being deactivated
        // If no available tabs, then don't deactivate current tab
        return this.activateTab(this.tabs.filter(function (t) {
          return t !== tab;
        }).find(notDisabled));
      } else {
        // No tab specified

        /* istanbull ignore next: should never happen */
        return false;
      }
    },
    // Focus a tab button given it's b-tab instance
    focusButton: function focusButton(tab) {
      var _this4 = this;

      // Wrap in nextTick to ensure DOM has completed rendering/updating before focusing
      this.$nextTick(function () {
        var button = _this4.getButtonForTab(tab);

        if (button && button.focus) {
          button.focus();
        }
      });
    },
    // Emit a click event on a specified b-tab component instance
    emitTabClick: function emitTabClick(tab, evt) {
      if (evt && evt instanceof Event && tab && tab.$emit && !tab.disabled) {
        tab.$emit('click', evt);
      }
    },
    // Click Handler
    clickTab: function clickTab(tab, evt) {
      this.activateTab(tab);
      this.emitTabClick(tab, evt);
    },
    // Move to first non-disabled tab
    firstTab: function firstTab(focus) {
      var tab = this.tabs.find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to previous non-disabled tab
    previousTab: function previousTab(focus) {
      var currentIndex = Math.max(this.currentTab, 0);
      var tab = this.tabs.slice(0, currentIndex).reverse().find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to next non-disabled tab
    nextTab: function nextTab(focus) {
      var currentIndex = Math.max(this.currentTab, -1);
      var tab = this.tabs.slice(currentIndex + 1).find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to last non-disabled tab
    lastTab: function lastTab(focus) {
      var tab = this.tabs.slice().reverse().find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    }
  },
  render: function render(h) {
    var _this5 = this,
        _ref;

    var tabs = this.tabs; // Currently active tab

    var activeTab = tabs.find(function (tab) {
      return tab.localActive && !tab.disabled;
    }); // Tab button to allow focusing when no active tab found (keynav only)

    var fallbackTab = tabs.find(function (tab) {
      return !tab.disabled;
    }); // For each <b-tab> found create the tab buttons

    var buttons = tabs.map(function (tab, index) {
      var tabIndex = null; // Ensure at least one tab button is focusable when keynav enabled (if possible)

      if (!_this5.noKeyNav) {
        // Buttons are not in tab index unless active, or a fallback tab
        tabIndex = -1;

        if (activeTab === tab || !activeTab && fallbackTab === tab) {
          // Place tab button in tab sequence
          tabIndex = null;
        }
      }

      return h(BTabButtonHelper, {
        key: tab._uid || index,
        ref: 'buttons',
        // Needed to make this.$refs.buttons an array
        refInFor: true,
        props: {
          tab: tab,
          tabs: tabs,
          id: tab.controlledBy || (_this5.tab && _this5.tab.safeId ? _this5.tab.safeId("_BV_tab_button_") : null),
          controls: _this5.tab && _this5.tab.safeId ? _this5.tab.safeId() : null,
          tabIndex: tabIndex,
          setSize: tabs.length,
          posInSet: index + 1,
          noKeyNav: _this5.noKeyNav
        },
        on: {
          click: function click(evt) {
            _this5.clickTab(tab, evt);
          },
          first: _this5.firstTab,
          prev: _this5.previousTab,
          next: _this5.nextTab,
          last: _this5.lastTab
        }
      });
    }); // Nav 'button' wrapper

    var navs = h('ul', {
      ref: 'navs',
      class: ['nav', (_ref = {}, _defineProperty(_ref, "nav-".concat(this.navStyle), !this.noNavStyle), _defineProperty(_ref, "card-header-".concat(this.navStyle), this.card && !this.vertical), _defineProperty(_ref, 'card-header', this.card && this.vertical), _defineProperty(_ref, 'h-100', this.card && this.vertical), _defineProperty(_ref, 'flex-column', this.vertical), _defineProperty(_ref, 'border-bottom-0', this.vertical), _defineProperty(_ref, 'rounded-0', this.vertical), _defineProperty(_ref, "small", this.small), _ref), this.navClass],
      attrs: {
        role: 'tablist',
        id: this.safeId('_BV_tab_controls_')
      }
    }, [buttons, this.$slots.tabs]);
    navs = h('div', {
      key: 'bv-tabs-navs',
      class: [{
        'card-header': this.card && !this.vertical && !(this.end || this.bottom),
        'card-footer': this.card && !this.vertical && (this.end || this.bottom),
        'col-auto': this.vertical
      }, this.navWrapperClass]
    }, [navs]);
    var empty = h(false);

    if (!tabs || tabs.length === 0) {
      empty = h('div', {
        key: 'empty-tab',
        class: ['tab-pane', 'active', {
          'card-body': this.card
        }]
      }, this.$slots.empty);
    } // Main content section
    // TODO: This container should be a helper component


    var content = h('div', {
      ref: 'tabsContainer',
      key: 'bv-tabs-container',
      staticClass: 'tab-content',
      class: [{
        col: this.vertical
      }, this.contentClass],
      attrs: {
        id: this.safeId('_BV_tab_container_')
      }
    }, [this.$slots.default, empty]); // Render final output

    return h(this.tag, {
      staticClass: 'tabs',
      class: {
        row: this.vertical,
        'no-gutters': this.vertical && this.card
      },
      attrs: {
        id: this.safeId()
      }
    }, [this.end || this.bottom ? content : h(false), [navs], this.end || this.bottom ? h(false) : content]);
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/tooltip/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/tooltip/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tooltip = __webpack_require__(/*! ./tooltip */ "./node_modules/bootstrap-vue/es/components/tooltip/tooltip.js");

var _tooltip2 = __webpack_require__(/*! ../../directives/tooltip */ "./node_modules/bootstrap-vue/es/directives/tooltip/index.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var components = {
  BTooltip: _tooltip.default
};
var plugins = {
  BTooltipDirectivePlugin: _tooltip2.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    components: components,
    plugins: plugins
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/tooltip/tooltip.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/tooltip/tooltip.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tooltip = __webpack_require__(/*! ../../utils/tooltip.class */ "./node_modules/bootstrap-vue/es/utils/tooltip.class.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _toolpop = __webpack_require__(/*! ../../mixins/toolpop */ "./node_modules/bootstrap-vue/es/mixins/toolpop.js");

// @vue/component
var _default = {
  name: 'BTooltip',
  mixins: [_toolpop.default],
  props: {
    title: {
      type: String,
      default: ''
    },
    triggers: {
      type: [String, Array],
      default: 'hover focus'
    },
    placement: {
      type: String,
      default: 'top'
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    createToolpop: function createToolpop() {
      // getTarget is in toolpop mixin
      var target = this.getTarget();

      if (target) {
        this._toolpop = new _tooltip.default(target, this.getConfig(), this.$root);
      } else {
        this._toolpop = null;
        (0, _warn.default)("b-tooltip: 'target' element not found!");
      }

      return this._toolpop;
    }
  },
  render: function render(h) {
    return h('div', {
      class: ['d-none'],
      style: {
        display: 'none'
      },
      attrs: {
        'aria-hidden': true
      }
    }, [h('div', {
      ref: 'title'
    }, this.$slots.default)]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _toggle = __webpack_require__(/*! ./toggle */ "./node_modules/bootstrap-vue/es/directives/toggle/index.js");

exports.Toggle = _toggle.default;

var _modal = __webpack_require__(/*! ./modal */ "./node_modules/bootstrap-vue/es/directives/modal/index.js");

exports.Modal = _modal.default;

var _scrollspy = __webpack_require__(/*! ./scrollspy */ "./node_modules/bootstrap-vue/es/directives/scrollspy/index.js");

exports.Scrollspy = _scrollspy.default;

var _tooltip = __webpack_require__(/*! ./tooltip */ "./node_modules/bootstrap-vue/es/directives/tooltip/index.js");

exports.Tooltip = _tooltip.default;

var _popover = __webpack_require__(/*! ./popover */ "./node_modules/bootstrap-vue/es/directives/popover/index.js");

exports.Popover = _popover.default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/modal/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/modal/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _modal = __webpack_require__(/*! ./modal */ "./node_modules/bootstrap-vue/es/directives/modal/modal.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var directives = {
  BModal: _modal.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    directives: directives
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/modal/modal.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/modal/modal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _target = __webpack_require__(/*! ../../utils/target */ "./node_modules/bootstrap-vue/es/utils/target.js");

// Target listen types
var listenTypes = {
  click: true // Emitted show event for modal

};
var EVENT_SHOW = 'bv::show::modal';

var setRole = function setRole(el, binding, vnode) {
  if (el.tagName !== 'BUTTON') {
    (0, _dom.setAttr)(el, 'role', 'button');
  }
};
/*
 * Export our directive
 */


var _default = {
  // eslint-disable-next-line no-shadow-restricted-names
  bind: function bind(el, binding, vnode) {
    (0, _target.bindTargets)(vnode, binding, listenTypes, function (_ref) {
      var targets = _ref.targets,
          vnode = _ref.vnode;
      targets.forEach(function (target) {
        vnode.context.$root.$emit(EVENT_SHOW, target, vnode.elm);
      });
    }); // If element is not a button, we add `role="button"` for accessibility

    setRole(el, binding, vnode);
  },
  updated: setRole,
  componentUpdated: setRole,
  unbind: function unbind(el, binding, vnode) {
    (0, _target.unbindTargets)(vnode, binding, listenTypes); // If element is not a button, we add `role="button"` for accessibility

    if (el.tagName !== 'BUTTON') {
      (0, _dom.removeAttr)(el, 'role', 'button');
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/popover/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/popover/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popover = __webpack_require__(/*! ./popover */ "./node_modules/bootstrap-vue/es/directives/popover/popover.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var directives = {
  BPopover: _popover.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    directives: directives
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/popover/popover.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/popover/popover.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

var _popover = __webpack_require__(/*! ../../utils/popover.class */ "./node_modules/bootstrap-vue/es/utils/popover.class.js");

var _env = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/es/utils/env.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Key which we use to store tooltip object on element
var BV_POPOVER = '__BV_PopOver__'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true // Build a PopOver config based on bindings (if any)
  // Arguments and modifiers take precedence over passed value config object

  /* istanbul ignore next: not easy to test */

};

var parseBindings = function parseBindings(bindings)
/* istanbul ignore next: not easy to test */
{
  // We start out with a blank config
  var config = {}; // Process bindings.value

  if (typeof bindings.value === 'string') {
    // Value is popover content (html optionally supported)
    config.content = bindings.value;
  } else if (typeof bindings.value === 'function') {
    // Content generator function
    config.content = bindings.value;
  } else if (_typeof(bindings.value) === 'object') {
    // Value is config object, so merge
    config = _objectSpread({}, config, bindings.value);
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // Process modifiers


  (0, _object.keys)(bindings.modifiers).forEach(function (mod) {
    if (/^html$/.test(mod)) {
      // Title allows HTML
      config.html = true;
    } else if (/^nofade$/.test(mod)) {
      // no animation
      config.animation = false;
    } else if (/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)) {
      // placement of popover
      config.placement = mod;
    } else if (/^(window|viewport)$/.test(mod)) {
      // Boundary of popover
      config.boundary = mod;
    } else if (/^d\d+$/.test(mod)) {
      // Delay value
      var delay = parseInt(mod.slice(1), 10) || 0;

      if (delay) {
        config.delay = delay;
      }
    } else if (/^o-?\d+$/.test(mod)) {
      // Offset value (negative allowed)
      var offset = parseInt(mod.slice(1), 10) || 0;

      if (offset) {
        config.offset = offset;
      }
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  var triggers = typeof config.trigger === 'string' ? config.trigger.trim().split(/\s+/) : [];
  triggers.forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  (0, _object.keys)(validTriggers).forEach(function (trigger) {
    if (bindings.modifiers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Sanitize triggers

  config.trigger = (0, _object.keys)(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to focus
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Remove trigger config
    delete config.trigger;
  }

  return config;
}; // Add or update PopOver on our element


var applyPopover = function applyPopover(el, bindings, vnode) {
  if (!_env.inBrowser) {
    /* istanbul ignore next */
    return;
  } // Popper is required for PopOvers to work


  if (!_popper.default) {
    /* istanbul ignore next */
    (0, _warn.default)('v-b-popover: Popper.js is required for PopOvers to work');
    /* istanbul ignore next */

    return;
  }

  var config = parseBindings(bindings);

  if (el[BV_POPOVER]) {
    el[BV_POPOVER].updateConfig(config);
  } else {
    el[BV_POPOVER] = new _popover.default(el, config, vnode.context.$root);
  }
}; // Remove PopOver on our element


var removePopover = function removePopover(el) {
  if (el[BV_POPOVER]) {
    el[BV_POPOVER].destroy();
    el[BV_POPOVER] = null;
    delete el[BV_POPOVER];
  }
};
/*
 * Export our directive
 */


var _default = {
  bind: function bind(el, bindings, vnode) {
    applyPopover(el, bindings, vnode);
  },
  inserted: function inserted(el, bindings, vnode) {
    applyPopover(el, bindings, vnode);
  },
  update: function update(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyPopover(el, bindings, vnode);
    }
  },
  componentUpdated: function componentUpdated(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyPopover(el, bindings, vnode);
    }
  },
  unbind: function unbind(el) {
    removePopover(el);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/scrollspy/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/scrollspy/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _scrollspy = __webpack_require__(/*! ./scrollspy */ "./node_modules/bootstrap-vue/es/directives/scrollspy/scrollspy.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var directives = {
  BScrollspy: _scrollspy.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    directives: directives
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/scrollspy/scrollspy.class.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/scrollspy/scrollspy.class.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _observeDom = __webpack_require__(/*! ../../utils/observe-dom */ "./node_modules/bootstrap-vue/es/utils/observe-dom.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Constants / Defaults
 */
var NAME = 'v-b-scrollspy';
var ACTIVATE_EVENT = 'bv::scrollspy::activate';
var Default = {
  element: 'body',
  offset: 10,
  method: 'auto',
  throttle: 75
};
var DefaultType = {
  element: '(string|element|component)',
  offset: 'number',
  method: 'string',
  throttle: 'number'
};
var ClassName = {
  DROPDOWN_ITEM: 'dropdown-item',
  ACTIVE: 'active'
};
var Selector = {
  ACTIVE: '.active',
  NAV_LIST_GROUP: '.nav, .list-group',
  NAV_LINKS: '.nav-link',
  NAV_ITEMS: '.nav-item',
  LIST_ITEMS: '.list-group-item',
  DROPDOWN: '.dropdown, .dropup',
  DROPDOWN_ITEMS: '.dropdown-item',
  DROPDOWN_TOGGLE: '.dropdown-toggle'
};
var OffsetMethod = {
  OFFSET: 'offset',
  POSITION: 'position' // HREFs must start with # but can be === '#', or start with '#/' or '#!' (which can be router links)

};
var HREF_REGEX = /^#[^/!]+/; // Transition Events

var TransitionEndEvents = ['webkitTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd']; // Options for events

var EventOptions = {
  passive: true,
  capture: false
  /*
   * Utility Methods
   */
  // Better var type detection

};

function toType(obj)
/* istanbul ignore next: not easy to test */
{
  return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
} // Check config properties for expected types


function typeCheckConfig(componentName, config, configTypes)
/* istanbul ignore next: not easy to test */
{
  for (var property in configTypes) {
    if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
      var expectedTypes = configTypes[property];
      var value = config[property];
      var valueType = value && (0, _dom.isElement)(value) ? 'element' : toType(value); // handle Vue instances

      valueType = value && value._isVue ? 'component' : valueType;

      if (!new RegExp(expectedTypes).test(valueType)) {
        (0, _warn.default)("".concat(componentName, ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\""));
      }
    }
  }
}
/*
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

/* istanbul ignore next: not easy to test */


var ScrollSpy
/* istanbul ignore next: not easy to test */
=
/*#__PURE__*/
function () {
  function ScrollSpy(element, config, $root) {
    _classCallCheck(this, ScrollSpy);

    // The element we activate links in
    this.$el = element;
    this.$scroller = null;
    this.$selector = [Selector.NAV_LINKS, Selector.LIST_ITEMS, Selector.DROPDOWN_ITEMS].join(',');
    this.$offsets = [];
    this.$targets = [];
    this.$activeTarget = null;
    this.$scrollHeight = 0;
    this.$resizeTimeout = null;
    this.$obs_scroller = null;
    this.$obs_targets = null;
    this.$root = $root || null;
    this.$config = null;
    this.updateConfig(config);
  }

  _createClass(ScrollSpy, [{
    key: "updateConfig",
    value: function updateConfig(config, $root) {
      if (this.$scroller) {
        // Just in case out scroll element has changed
        this.unlisten();
        this.$scroller = null;
      }

      var cfg = _objectSpread({}, this.constructor.Default, config);

      if ($root) {
        this.$root = $root;
      }

      typeCheckConfig(this.constructor.Name, cfg, this.constructor.DefaultType);
      this.$config = cfg;

      if (this.$root) {
        var self = this;
        this.$root.$nextTick(function () {
          self.listen();
        });
      } else {
        this.listen();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.unlisten();
      clearTimeout(this.$resizeTimeout);
      this.$resizeTimeout = null;
      this.$el = null;
      this.$config = null;
      this.$scroller = null;
      this.$selector = null;
      this.$offsets = null;
      this.$targets = null;
      this.$activeTarget = null;
      this.$scrollHeight = null;
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;

      var scroller = this.getScroller();

      if (scroller && scroller.tagName !== 'BODY') {
        (0, _dom.eventOn)(scroller, 'scroll', this, EventOptions);
      }

      (0, _dom.eventOn)(window, 'scroll', this, EventOptions);
      (0, _dom.eventOn)(window, 'resize', this, EventOptions);
      (0, _dom.eventOn)(window, 'orientationchange', this, EventOptions);
      TransitionEndEvents.forEach(function (evtName) {
        (0, _dom.eventOn)(window, evtName, _this, EventOptions);
      });
      this.setObservers(true); // Scedule a refresh

      this.handleEvent('refresh');
    }
  }, {
    key: "unlisten",
    value: function unlisten() {
      var _this2 = this;

      var scroller = this.getScroller();
      this.setObservers(false);

      if (scroller && scroller.tagName !== 'BODY') {
        (0, _dom.eventOff)(scroller, 'scroll', this, EventOptions);
      }

      (0, _dom.eventOff)(window, 'scroll', this, EventOptions);
      (0, _dom.eventOff)(window, 'resize', this, EventOptions);
      (0, _dom.eventOff)(window, 'orientationchange', this, EventOptions);
      TransitionEndEvents.forEach(function (evtName) {
        (0, _dom.eventOff)(window, evtName, _this2, EventOptions);
      });
    }
  }, {
    key: "setObservers",
    value: function setObservers(on) {
      var _this3 = this;

      // We observe both the scroller for content changes, and the target links
      if (this.$obs_scroller) {
        this.$obs_scroller.disconnect();
        this.$obs_scroller = null;
      }

      if (this.$obs_targets) {
        this.$obs_targets.disconnect();
        this.$obs_targets = null;
      }

      if (on) {
        this.$obs_targets = (0, _observeDom.default)(this.$el, function () {
          _this3.handleEvent('mutation');
        }, {
          subtree: true,
          childList: true,
          attributes: true,
          attributeFilter: ['href']
        });
        this.$obs_scroller = (0, _observeDom.default)(this.getScroller(), function () {
          _this3.handleEvent('mutation');
        }, {
          subtree: true,
          childList: true,
          characterData: true,
          attributes: true,
          attributeFilter: ['id', 'style', 'class']
        });
      }
    } // general event handler

  }, {
    key: "handleEvent",
    value: function handleEvent(evt) {
      var type = typeof evt === 'string' ? evt : evt.type;
      var self = this;

      function resizeThrottle() {
        if (!self.$resizeTimeout) {
          self.$resizeTimeout = setTimeout(function () {
            self.refresh();
            self.process();
            self.$resizeTimeout = null;
          }, self.$config.throttle);
        }
      }

      if (type === 'scroll') {
        if (!this.$obs_scroller) {
          // Just in case we are added to the DOM before the scroll target is
          // We re-instantiate our listeners, just in case
          this.listen();
        }

        this.process();
      } else if (/(resize|orientationchange|mutation|refresh)/.test(type)) {
        // Postpone these events by throttle time
        resizeThrottle();
      }
    } // Refresh the list of target links on the element we are applied to

  }, {
    key: "refresh",
    value: function refresh() {
      var _this4 = this;

      var scroller = this.getScroller();

      if (!scroller) {
        return;
      }

      var autoMethod = scroller !== scroller.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
      var method = this.$config.method === 'auto' ? autoMethod : this.$config.method;
      var methodFn = method === OffsetMethod.POSITION ? _dom.position : _dom.offset;
      var offsetBase = method === OffsetMethod.POSITION ? this.getScrollTop() : 0;
      this.$offsets = [];
      this.$targets = [];
      this.$scrollHeight = this.getScrollHeight(); // Find all the unique link href's

      (0, _dom.selectAll)(this.$selector, this.$el).map(function (link) {
        return (0, _dom.getAttr)(link, 'href');
      }).filter(function (href) {
        return HREF_REGEX.test(href || '');
      }).map(function (href) {
        var el = (0, _dom.select)(href, scroller);

        if ((0, _dom.isVisible)(el)) {
          return {
            offset: parseInt(methodFn(el).top, 10) + offsetBase,
            target: href
          };
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a.offset - b.offset;
      }).reduce(function (memo, item) {
        // record only unique targets/offfsets
        if (!memo[item.target]) {
          _this4.$offsets.push(item.offset);

          _this4.$targets.push(item.target);

          memo[item.target] = true;
        }

        return memo;
      }, {});
      return this;
    } // Handle activating/clearing

  }, {
    key: "process",
    value: function process() {
      var scrollTop = this.getScrollTop() + this.$config.offset;
      var scrollHeight = this.getScrollHeight();
      var maxScroll = this.$config.offset + scrollHeight - this.getOffsetHeight();

      if (this.$scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this.$targets[this.$targets.length - 1];

        if (this.$activeTarget !== target) {
          this.activate(target);
        }

        return;
      }

      if (this.$activeTarget && scrollTop < this.$offsets[0] && this.$offsets[0] > 0) {
        this.$activeTarget = null;
        this.clear();
        return;
      }

      for (var i = this.$offsets.length; i--;) {
        var isActiveTarget = this.$activeTarget !== this.$targets[i] && scrollTop >= this.$offsets[i] && (typeof this.$offsets[i + 1] === 'undefined' || scrollTop < this.$offsets[i + 1]);

        if (isActiveTarget) {
          this.activate(this.$targets[i]);
        }
      }
    }
  }, {
    key: "getScroller",
    value: function getScroller() {
      if (this.$scroller) {
        return this.$scroller;
      }

      var scroller = this.$config.element;

      if (!scroller) {
        return null;
      } else if ((0, _dom.isElement)(scroller.$el)) {
        scroller = scroller.$el;
      } else if (typeof scroller === 'string') {
        scroller = (0, _dom.select)(scroller);
      }

      if (!scroller) {
        return null;
      }

      this.$scroller = scroller.tagName === 'BODY' ? window : scroller;
      return this.$scroller;
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      var scroller = this.getScroller();
      return scroller === window ? scroller.pageYOffset : scroller.scrollTop;
    }
  }, {
    key: "getScrollHeight",
    value: function getScrollHeight() {
      return this.getScroller().scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: "getOffsetHeight",
    value: function getOffsetHeight() {
      var scroller = this.getScroller();
      return scroller === window ? window.innerHeight : (0, _dom.getBCR)(scroller).height;
    }
  }, {
    key: "activate",
    value: function activate(target) {
      var _this5 = this;

      this.$activeTarget = target;
      this.clear(); // Grab the list of target links (<a href="{$target}">)

      var links = (0, _dom.selectAll)(this.$selector.split(',').map(function (selector) {
        return "".concat(selector, "[href=\"").concat(target, "\"]");
      }).join(','), this.$el);
      links.forEach(function (link) {
        if ((0, _dom.hasClass)(link, ClassName.DROPDOWN_ITEM)) {
          // This is a dropdown item, so find the .dropdown-toggle and set it's state
          var dropdown = (0, _dom.closest)(Selector.DROPDOWN, link);

          if (dropdown) {
            _this5.setActiveState((0, _dom.select)(Selector.DROPDOWN_TOGGLE, dropdown), true);
          } // Also set this link's state


          _this5.setActiveState(link, true);
        } else {
          // Set triggered link as active
          _this5.setActiveState(link, true);

          if ((0, _dom.matches)(link.parentElement, Selector.NAV_ITEMS)) {
            // Handle nav-link inside nav-item, and set nav-item active
            _this5.setActiveState(link.parentElement, true);
          } // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor


          var el = link;

          while (el) {
            el = (0, _dom.closest)(Selector.NAV_LIST_GROUP, el);
            var sibling = el ? el.previousElementSibling : null;

            if ((0, _dom.matches)(sibling, "".concat(Selector.NAV_LINKS, ", ").concat(Selector.LIST_ITEMS))) {
              _this5.setActiveState(sibling, true);
            } // Handle special case where nav-link is inside a nav-item


            if ((0, _dom.matches)(sibling, Selector.NAV_ITEMS)) {
              _this5.setActiveState((0, _dom.select)(Selector.NAV_LINKS, sibling), true); // Add active state to nav-item as well


              _this5.setActiveState(sibling, true);
            }
          }
        }
      }); // Signal event to via $root, passing ID of activaed target and reference to array of links

      if (links && links.length > 0 && this.$root) {
        this.$root.$emit(ACTIVATE_EVENT, target, links);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this6 = this;

      (0, _dom.selectAll)("".concat(this.$selector, ", ").concat(Selector.NAV_ITEMS), this.$el).filter(function (el) {
        return (0, _dom.hasClass)(el, ClassName.ACTIVE);
      }).forEach(function (el) {
        return _this6.setActiveState(el, false);
      });
    }
  }, {
    key: "setActiveState",
    value: function setActiveState(el, active) {
      if (!el) {
        return;
      }

      if (active) {
        (0, _dom.addClass)(el, ClassName.ACTIVE);
      } else {
        (0, _dom.removeClass)(el, ClassName.ACTIVE);
      }
    }
  }], [{
    key: "Name",
    get: function get() {
      return NAME;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }]);

  return ScrollSpy;
}();

var _default = ScrollSpy;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/scrollspy/scrollspy.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/scrollspy/scrollspy.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _scrollspy = __webpack_require__(/*! ./scrollspy.class */ "./node_modules/bootstrap-vue/es/directives/scrollspy/scrollspy.class.js");

var _env = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/es/utils/env.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Key we use to store our instance
var BV_SCROLLSPY = '__BV_ScrollSpy__'; // Build a ScrollSpy config based on bindings (if any)
// Arguments and modifiers take precedence over passed value config object

/* istanbul ignore next: not easy to test */

var parseBindings = function parseBindings(bindings)
/* istanbul ignore next: not easy to test */
{
  var config = {}; // If argument, assume element ID

  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.element = "#".concat(bindings.arg);
  } // Process modifiers


  (0, _object.keys)(bindings.modifiers).forEach(function (mod) {
    if (/^\d+$/.test(mod)) {
      // Offset value
      config.offset = parseInt(mod, 10);
    } else if (/^(auto|position|offset)$/.test(mod)) {
      // Offset method
      config.method = mod;
    }
  }); // Process value

  if (typeof bindings.value === 'string') {
    // Value is a CSS ID or selector
    config.element = bindings.value;
  } else if (typeof bindings.value === 'number') {
    // Value is offset
    config.offset = Math.round(bindings.value);
  } else if (_typeof(bindings.value) === 'object') {
    // Value is config object
    // Filter the object based on our supported config options
    (0, _object.keys)(bindings.value).filter(function (k) {
      return Boolean(_scrollspy.default.DefaultType[k]);
    }).forEach(function (k) {
      config[k] = bindings.value[k];
    });
  }

  return config;
}; // Add or update ScrollSpy on our element


var applyScrollspy = function applyScrollspy(el, bindings, vnode)
/* istanbul ignore next: not easy to test */
{
  if (!_env.inBrowser) {
    /* istanbul ignore next */
    return;
  }

  var config = parseBindings(bindings);

  if (el[BV_SCROLLSPY]) {
    el[BV_SCROLLSPY].updateConfig(config, vnode.context.$root);
  } else {
    el[BV_SCROLLSPY] = new _scrollspy.default(el, config, vnode.context.$root);
  }
}; // Remove ScrollSpy on our element

/* istanbul ignore next: not easy to test */


var removeScrollspy = function removeScrollspy(el)
/* istanbul ignore next: not easy to test */
{
  if (el[BV_SCROLLSPY]) {
    el[BV_SCROLLSPY].dispose();
    el[BV_SCROLLSPY] = null;
    delete el[BV_SCROLLSPY];
  }
};
/*
 * Export our directive
 */


var _default = {
  bind: function bind(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    applyScrollspy(el, bindings, vnode);
  },
  inserted: function inserted(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    applyScrollspy(el, bindings, vnode);
  },
  update: function update(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyScrollspy(el, bindings, vnode);
    }
  },
  componentUpdated: function componentUpdated(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyScrollspy(el, bindings, vnode);
    }
  },
  unbind: function unbind(el)
  /* istanbul ignore next: not easy to test */
  {
    removeScrollspy(el);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/toggle/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/toggle/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _toggle = __webpack_require__(/*! ./toggle */ "./node_modules/bootstrap-vue/es/directives/toggle/toggle.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var directives = {
  BToggle: _toggle.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    directives: directives
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/toggle/toggle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/toggle/toggle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _env = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/es/utils/env.js");

var _target = __webpack_require__(/*! ../../utils/target */ "./node_modules/bootstrap-vue/es/utils/target.js");

// Target listen types
var listenTypes = {
  click: true // Property key for handler storage

};
var BV_TOGGLE = '__BV_toggle__';
var BV_TOGGLE_STATE = '__BV_toggle_STATE__';
var BV_TOGGLE_CONTROLS = '__BV_toggle_CONTROLS__'; // Emitted control event for collapse (emitted to collapse)

var EVENT_TOGGLE = 'bv::toggle::collapse'; // Listen to event for toggle state update (emitted by collapse)

var EVENT_STATE = 'bv::collapse::state'; // Reset and remove a property from the provided element

var resetProp = function resetProp(el, prop) {
  el[prop] = null;
  delete el[prop];
}; // Handle directive updates

/* istanbul ignore next: not easy to test */


var handleUpdate = function handleUpdate(el, binding, vnode) {
  if (!_env.inBrowser) {
    return;
  } // Ensure the collapse class and aria-* attributes persist
  // after element is updated (either by parent re-rendering
  // or changes to this element or it's contents


  if (el[BV_TOGGLE_STATE] === true) {
    (0, _dom.addClass)(el, 'collapsed');
    (0, _dom.setAttr)(el, 'aria-expanded', 'true');
  } else if (el[BV_TOGGLE_STATE] === false) {
    (0, _dom.removeClass)(el, 'collapsed');
    (0, _dom.setAttr)(el, 'aria-expanded', 'false');
  }

  (0, _dom.setAttr)(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]);
};
/*
 * Export our directive
 */


var _default = {
  bind: function bind(el, binding, vnode) {
    var targets = (0, _target.bindTargets)(vnode, binding, listenTypes, function (_ref) {
      var targets = _ref.targets,
          vnode = _ref.vnode;
      targets.forEach(function (target) {
        vnode.context.$root.$emit(EVENT_TOGGLE, target);
      });
    });

    if (_env.inBrowser && vnode.context && targets.length > 0) {
      // Add aria attributes to element
      el[BV_TOGGLE_CONTROLS] = targets.join(' '); // State is initially collapsed until we receive a state event

      el[BV_TOGGLE_STATE] = false;
      (0, _dom.setAttr)(el, 'aria-controls', el[BV_TOGGLE_CONTROLS]);
      (0, _dom.setAttr)(el, 'aria-expanded', 'false'); // If element is not a button, we add `role="button"` for accessibility

      if (el.tagName !== 'BUTTON') {
        (0, _dom.setAttr)(el, 'role', 'button');
      } // Toggle state handler, stored on element


      el[BV_TOGGLE] = function toggleDirectiveHandler(id, state) {
        if (targets.indexOf(id) !== -1) {
          // Set aria-expanded state
          (0, _dom.setAttr)(el, 'aria-expanded', state ? 'true' : 'false'); // Set/Clear 'collapsed' class state

          el[BV_TOGGLE_STATE] = state;

          if (state) {
            (0, _dom.removeClass)(el, 'collapsed');
          } else {
            (0, _dom.addClass)(el, 'collapsed');
          }
        }
      }; // Listen for toggle state changes


      vnode.context.$root.$on(EVENT_STATE, el[BV_TOGGLE]);
    }
  },
  componentUpdated: handleUpdate,
  updated: handleUpdate,
  unbind: function unbind(el, binding, vnode)
  /* istanbul ignore next */
  {
    (0, _target.unbindTargets)(vnode, binding, listenTypes); // Remove our $root listener

    if (el[BV_TOGGLE]) {
      vnode.context.$root.$off(EVENT_STATE, el[BV_TOGGLE]);
    } // Reset custom  props


    resetProp(el, BV_TOGGLE);
    resetProp(el, BV_TOGGLE_STATE);
    resetProp(el, BV_TOGGLE_CONTROLS); // Reset classes/attrs

    (0, _dom.removeClass)(el, 'collapsed');
    (0, _dom.removeAttr)(el, 'aria-expanded');
    (0, _dom.removeAttr)(el, 'aria-controls');
    (0, _dom.removeAttr)(el, 'role');
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/tooltip/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/tooltip/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tooltip = __webpack_require__(/*! ./tooltip */ "./node_modules/bootstrap-vue/es/directives/tooltip/tooltip.js");

var _plugins = __webpack_require__(/*! ../../utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var directives = {
  BTooltip: _tooltip.default
};
var _default = {
  install: (0, _plugins.installFactory)({
    directives: directives
  })
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/tooltip/tooltip.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/tooltip/tooltip.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

var _tooltip = __webpack_require__(/*! ../../utils/tooltip.class */ "./node_modules/bootstrap-vue/es/utils/tooltip.class.js");

var _env = __webpack_require__(/*! ../../utils/env */ "./node_modules/bootstrap-vue/es/utils/env.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Key which we use to store tooltip object on element
var BV_TOOLTIP = '__BV_ToolTip__'; // Valid event triggers

var validTriggers = {
  focus: true,
  hover: true,
  click: true,
  blur: true // Build a ToolTip config based on bindings (if any)
  // Arguments and modifiers take precedence over passed value config object

  /* istanbul ignore next: not easy to test */

};

var parseBindings = function parseBindings(bindings)
/* istanbul ignore next: not easy to test */
{
  // We start out with a blank config
  var config = {}; // Process bindings.value

  if (typeof bindings.value === 'string') {
    // Value is tooltip content (html optionally supported)
    config.title = bindings.value;
  } else if (typeof bindings.value === 'function') {
    // Title generator function
    config.title = bindings.value;
  } else if (_typeof(bindings.value) === 'object') {
    // Value is config object, so merge
    config = _objectSpread({}, config, bindings.value);
  } // If argument, assume element ID of container element


  if (bindings.arg) {
    // Element ID specified as arg
    // We must prepend '#' to become a CSS selector
    config.container = "#".concat(bindings.arg);
  } // Process modifiers


  (0, _object.keys)(bindings.modifiers).forEach(function (mod) {
    if (/^html$/.test(mod)) {
      // Title allows HTML
      config.html = true;
    } else if (/^nofade$/.test(mod)) {
      // No animation
      config.animation = false;
    } else if (/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(mod)) {
      // Placement of tooltip
      config.placement = mod;
    } else if (/^(window|viewport)$/.test(mod)) {
      // Boundary of tooltip
      config.boundary = mod;
    } else if (/^d\d+$/.test(mod)) {
      // Delay value
      var delay = parseInt(mod.slice(1), 10) || 0;

      if (delay) {
        config.delay = delay;
      }
    } else if (/^o-?\d+$/.test(mod)) {
      // Offset value, negative allowed
      var offset = parseInt(mod.slice(1), 10) || 0;

      if (offset) {
        config.offset = offset;
      }
    }
  }); // Special handling of event trigger modifiers trigger is
  // a space separated list

  var selectedTriggers = {}; // Parse current config object trigger

  var triggers = typeof config.trigger === 'string' ? config.trigger.trim().split(/\s+/) : [];
  triggers.forEach(function (trigger) {
    if (validTriggers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Parse modifiers for triggers

  (0, _object.keys)(validTriggers).forEach(function (trigger) {
    if (bindings.modifiers[trigger]) {
      selectedTriggers[trigger] = true;
    }
  }); // Sanitize triggers

  config.trigger = (0, _object.keys)(selectedTriggers).join(' ');

  if (config.trigger === 'blur') {
    // Blur by itself is useless, so convert it to 'focus'
    config.trigger = 'focus';
  }

  if (!config.trigger) {
    // Remove trigger config
    delete config.trigger;
  }

  return config;
}; // Add or update ToolTip on our element


var applyTooltip = function applyTooltip(el, bindings, vnode) {
  if (!_env.inBrowser) {
    /* istanbul ignore next */
    return;
  }

  if (!_popper.default) {
    // Popper is required for ToolTips to work

    /* istanbul ignore next */
    (0, _warn.default)('v-b-tooltip: Popper.js is required for ToolTips to work');
    /* istanbul ignore next */

    return;
  }

  var config = parseBindings(bindings);

  if (el[BV_TOOLTIP]) {
    el[BV_TOOLTIP].updateConfig(config);
  } else {
    el[BV_TOOLTIP] = new _tooltip.default(el, config, vnode.context.$root);
  }
}; // Remove ToolTip on our element


var removeTooltip = function removeTooltip(el) {
  if (el[BV_TOOLTIP]) {
    el[BV_TOOLTIP].destroy();
    el[BV_TOOLTIP] = null;
    delete el[BV_TOOLTIP];
  }
};
/*
 * Export our directive
 */


var _default = {
  bind: function bind(el, bindings, vnode) {
    applyTooltip(el, bindings, vnode);
  },
  inserted: function inserted(el, bindings, vnode) {
    applyTooltip(el, bindings, vnode);
  },
  update: function update(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyTooltip(el, bindings, vnode);
    }
  },
  componentUpdated: function componentUpdated(el, bindings, vnode)
  /* istanbul ignore next: not easy to test */
  {
    if (bindings.value !== bindings.oldValue) {
      applyTooltip(el, bindings, vnode);
    }
  },
  unbind: function unbind(el) {
    removeTooltip(el);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var componentPlugins = __webpack_require__(/*! ./components */ "./node_modules/bootstrap-vue/es/components/index.js");

var directivePlugins = __webpack_require__(/*! ./directives */ "./node_modules/bootstrap-vue/es/directives/index.js");

var _plugins = __webpack_require__(/*! ./utils/plugins */ "./node_modules/bootstrap-vue/es/utils/plugins.js");

var _config = __webpack_require__(/*! ./utils/config */ "./node_modules/bootstrap-vue/es/utils/config.js");

var BootstrapVue = {
  install: function install(Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // Configure BootstrapVue
    (0, _config.setConfig)(config); // Register component plugins

    (0, _plugins.registerPlugins)(Vue, componentPlugins); // Register directive plugins

    (0, _plugins.registerPlugins)(Vue, directivePlugins);
  },
  setConfig: function setConfig()
  /* istanbul ignore next */
  {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _config.setConfig)(config);
  }
}; // Auto installation only occurs if window.Vue exists

(0, _plugins.vueUse)(BootstrapVue);
var _default = BootstrapVue;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/card-mixin.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/card-mixin.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    bgVariant: {
      type: String,
      default: null
    },
    borderVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/click-out.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/click-out.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__(/*! ../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

// @vue/component
var _default = {
  data: function data() {
    return {
      listenForClickOut: false
    };
  },
  watch: {
    listenForClickOut: function listenForClickOut(newValue, oldValue) {
      if (newValue !== oldValue) {
        (0, _dom.eventOff)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, false);

        if (newValue) {
          (0, _dom.eventOn)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, false);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    // Declare non-reactive properties
    this.clickOutElement = null;
    this.clickOutEventName = null;
  },
  mounted: function mounted() {
    if (!this.clickOutElement) {
      this.clickOutElement = document;
    }

    if (!this.clickOutEventName) {
      this.clickOutEventName = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    }

    if (this.listenForClickOut) {
      (0, _dom.eventOn)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, false);
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    (0, _dom.eventOff)(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, false);
  },
  methods: {
    isClickOut: function isClickOut(evt) {
      return !(0, _dom.contains)(this.$el, evt.target);
    },
    _clickOutHandler: function _clickOutHandler(evt) {
      if (this.clickOutHandler && this.isClickOut(evt)) {
        this.clickOutHandler(evt);
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/dropdown.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/dropdown.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

var _clickOut = __webpack_require__(/*! ./click-out */ "./node_modules/bootstrap-vue/es/mixins/click-out.js");

var _focusIn = __webpack_require__(/*! ./focus-in */ "./node_modules/bootstrap-vue/es/mixins/focus-in.js");

var _keyCodes = __webpack_require__(/*! ../utils/key-codes */ "./node_modules/bootstrap-vue/es/utils/key-codes.js");

var _bvEvent = __webpack_require__(/*! ../utils/bv-event.class */ "./node_modules/bootstrap-vue/es/utils/bv-event.class.js");

var _warn = __webpack_require__(/*! ../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _dom = __webpack_require__(/*! ../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Return an Array of visible items
function filterVisible(els) {
  return (els || []).filter(_dom.isVisible);
} // Dropdown item CSS selectors
// TODO: .dropdown-form handling


var Selector = {
  FORM_CHILD: '.dropdown form',
  NAVBAR_NAV: '.navbar-nav',
  ITEM_SELECTOR: '.dropdown-item:not(.disabled):not([disabled])' // Popper attachment positions

};
var AttachmentMap = {
  // Dropup left align
  TOP: 'top-start',
  // Dropup right align
  TOPEND: 'top-end',
  // Dropdown left align
  BOTTOM: 'bottom-start',
  // Dropdown right align
  BOTTOMEND: 'bottom-end',
  // Dropright left align
  RIGHT: 'right-start',
  // Dropright right align
  RIGHTEND: 'right-end',
  // Dropleft left align
  LEFT: 'left-start',
  // Dropleft right align
  LEFTEND: 'left-end' // @vue/component

};
var _default2 = {
  mixins: [_clickOut.default, _focusIn.default],
  provide: function provide() {
    return {
      bvDropdown: this
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      // Button label
      type: String,
      default: ''
    },
    html: {
      // Button label
      type: String
    },
    dropup: {
      // place on top if possible
      type: Boolean,
      default: false
    },
    dropright: {
      // place right if possible
      type: Boolean,
      default: false
    },
    dropleft: {
      // place left if possible
      type: Boolean,
      default: false
    },
    right: {
      // Right align menu (default is left align)
      type: Boolean,
      default: false
    },
    offset: {
      // Number of pixels to offset menu, or a CSS unit value (i.e. 1px, 1rem, etc)
      type: [Number, String],
      default: 0
    },
    noFlip: {
      // Disable auto-flipping of menu from bottom<=>top
      type: Boolean,
      default: false
    },
    popperOpts: {
      // type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      visible: false,
      inNavbar: null,
      visibleChangePrevented: false
    };
  },
  computed: {
    toggler: function toggler() {
      var toggle = this.$refs.toggle;
      return toggle ? toggle.$el || toggle : null;
    }
  },
  watch: {
    visible: function visible(newValue, oldValue) {
      if (this.visibleChangePrevented) {
        this.visibleChangePrevented = false;
        return;
      }

      if (newValue !== oldValue) {
        var evtName = newValue ? 'show' : 'hide';
        var bvEvt = new _bvEvent.default(evtName, {
          cancelable: true,
          vueTarget: this,
          target: this.$refs.menu,
          relatedTarget: null
        });
        this.emitEvent(bvEvt);

        if (bvEvt.defaultPrevented) {
          // Reset value and exit if canceled
          this.visibleChangePrevented = true;
          this.visible = oldValue; // Just in case a child element triggereded this.hide(true)

          this.$off('hidden', this.focusToggler);
          return;
        }

        if (evtName === 'show') {
          this.showMenu();
        } else {
          this.hideMenu();
        }
      }
    },
    disabled: function disabled(newValue, oldValue) {
      if (newValue !== oldValue && newValue && this.visible) {
        // Hide dropdown if disabled changes to true
        this.visible = false;
      }
    }
  },
  created: function created() {
    // Create non-reactive property
    this._popper = null;
  },
  deactivated: function deactivated()
  /* istanbul ignore next: not easy to test */
  {
    // In case we are inside a `<keep-alive>`
    this.visible = false;
    this.whileOpenListen(false);
    this.removePopper();
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next: not easy to test */
  {
    this.visible = false;
    this.whileOpenListen(false);
    this.removePopper();
  },
  methods: {
    // Event emitter
    emitEvent: function emitEvent(bvEvt) {
      var type = bvEvt.type;
      this.$emit(type, bvEvt);
      this.$root.$emit("bv::dropdown::".concat(type), bvEvt);
    },
    showMenu: function showMenu() {
      var _this = this;

      if (this.disabled) {
        return;
      } // Ensure other menus are closed


      this.$root.$emit('bv::dropdown::shown', this); // Are we in a navbar ?

      if (this.inNavbar === null && this.isNav) {
        this.inNavbar = Boolean((0, _dom.closest)('.navbar', this.$el));
      } // Disable totally Popper.js for Dropdown in Navbar

      /* istanbul ignore next: cant test popper in JSDOM */


      if (!this.inNavbar) {
        if (typeof _popper.default === 'undefined') {
          (0, _warn.default)('b-dropdown: Popper.js not found. Falling back to CSS positioning.');
        } else {
          // for dropup with alignment we use the parent element as popper container
          var element = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle; // Make sure we have a reference to an element, not a component!

          element = element.$el || element; // Instantiate popper.js

          this.createPopper(element);
        }
      }

      this.whileOpenListen(true); // Wrap in nextTick to ensure menu is fully rendered/shown

      this.$nextTick(function () {
        // Focus on the menu container on show
        _this.focusMenu(); // Emit the shown event


        _this.$emit('shown');
      });
    },
    hideMenu: function hideMenu() {
      this.whileOpenListen(false);
      this.$root.$emit('bv::dropdown::hidden', this);
      this.$emit('hidden');
      this.removePopper();
    },
    createPopper: function createPopper(element)
    /* istanbul ignore next: cant test popper in JSDOM */
    {
      this.removePopper();
      this._popper = new _popper.default(element, this.$refs.menu, this.getPopperConfig());
    },
    removePopper: function removePopper()
    /* istanbul ignore next: cant test popper in JSDOM */
    {
      if (this._popper) {
        // Ensure popper event listeners are removed cleanly
        this._popper.destroy();
      }

      this._popper = null;
    },
    getPopperConfig: function getPopperConfig()
    /* istanbul ignore next: can't test popper in JSDOM */
    {
      var placement = AttachmentMap.BOTTOM;

      if (this.dropup) {
        placement = this.right ? AttachmentMap.TOPEND : AttachmentMap.TOP;
      } else if (this.dropright) {
        placement = AttachmentMap.RIGHT;
      } else if (this.dropleft) {
        placement = AttachmentMap.LEFT;
      } else if (this.right) {
        placement = AttachmentMap.BOTTOMEND;
      }

      var popperConfig = {
        placement: placement,
        modifiers: {
          offset: {
            offset: this.offset || 0
          },
          flip: {
            enabled: !this.noFlip
          }
        }
      };

      if (this.boundary) {
        popperConfig.modifiers.preventOverflow = {
          boundariesElement: this.boundary
        };
      }

      return _objectSpread({}, popperConfig, this.popperOpts || {});
    },
    whileOpenListen: function whileOpenListen(open) {
      // turn listeners on/off while open
      if (open) {
        // If another dropdown is opened
        this.$root.$on('bv::dropdown::shown', this.rootCloseListener); // Hide the dropdown when clicked outside

        this.listenForClickOut = true; // Hide the dropdown when it loses focus

        this.listenForFocusIn = true;
      } else {
        this.$root.$off('bv::dropdown::shown', this.rootCloseListener);
        this.listenForClickOut = false;
        this.listenForFocusIn = false;
      }
    },
    rootCloseListener: function rootCloseListener(vm) {
      if (vm !== this) {
        this.visible = false;
      }
    },
    show: function show() {
      // Public method to show dropdown
      if (this.disabled) {
        return;
      }

      this.visible = true;
    },
    hide: function hide() {
      var refocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // Public method to hide dropdown
      if (this.disabled) {
        return;
      }

      this.visible = false;

      if (refocus) {
        // Child element is closing the dropdown on click
        this.$once('hidden', this.focusToggler);
      }
    },
    toggle: function toggle(evt) {
      // Called only by a button that toggles the menu
      evt = evt || {};
      var type = evt.type;
      var key = evt.keyCode;

      if (type !== 'click' && !(type === 'keydown' && (key === _keyCodes.default.ENTER || key === _keyCodes.default.SPACE || key === _keyCodes.default.DOWN))) {
        // We only toggle on Click, Enter, Space, and Arrow Down
        return;
      }

      if (this.disabled) {
        this.visible = false;
        return;
      }

      this.$emit('toggle', evt);

      if (evt.defaultPrevented) {
        // Exit if canceled
        return;
      }

      evt.preventDefault();
      evt.stopPropagation(); // Toggle visibility

      this.visible = !this.visible;
    },
    click: function click(evt) {
      // Called only in split button mode, for the split button
      if (this.disabled) {
        this.visible = false;
        return;
      }

      this.$emit('click', evt);
    },
    onKeydown: function onKeydown(evt)
    /* istanbul ignore next: not easy to test */
    {
      // Called from dropdown menu context
      var key = evt.keyCode;

      if (key === _keyCodes.default.ESC) {
        // Close on ESC
        this.onEsc(evt);
      } else if (key === _keyCodes.default.TAB) {
        // Close on tab out
        this.onTab(evt);
      } else if (key === _keyCodes.default.DOWN) {
        // Down Arrow
        this.focusNext(evt, false);
      } else if (key === _keyCodes.default.UP) {
        // Up Arrow
        this.focusNext(evt, true);
      }
    },
    onEsc: function onEsc(evt)
    /* istanbul ignore next: not easy to test */
    {
      if (this.visible) {
        this.visible = false;
        evt.preventDefault();
        evt.stopPropagation(); // Return focus to original trigger button

        this.$once('hidden', this.focusToggler);
      }
    },
    onTab: function onTab(evt)
    /* istanbul ignore next: not easy to test */
    {// TODO: Need special handler for dealing with form inputs
      // Tab, if in a text-like input, we should just focus next item in the dropdown
      // Note: Inputs are in a special .dropdown-form container
    },
    onMouseOver: function onMouseOver(evt)
    /* istanbul ignore next: not easy to test */
    {// Removed mouseover focus handler
    },
    // Document click out listener
    clickOutHandler: function clickOutHandler() {
      if (this.visible) {
        this.visible = false;
      }
    },
    // Document focusin listener
    focusInHandler: function focusInHandler(evt) {
      // If focus leaves dropdown, hide it
      if (this.visible && !(0, _dom.contains)(this.$refs.menu, evt.target) && !(0, _dom.contains)(this.$refs.toggle, evt.target)) {
        this.visible = false;
      }
    },
    // Keyboard nav
    focusNext: function focusNext(evt, up) {
      var _this2 = this;

      if (!this.visible) {
        return;
      }

      evt.preventDefault();
      evt.stopPropagation();
      this.$nextTick(function () {
        var items = _this2.getItems();

        if (items.length < 1) {
          return;
        }

        var index = items.indexOf(evt.target);

        if (up && index > 0) {
          index--;
        } else if (!up && index < items.length - 1) {
          index++;
        }

        if (index < 0) {
          index = 0;
        }

        _this2.focusItem(index, items);
      });
    },
    focusItem: function focusItem(idx, items) {
      var el = items.find(function (el, i) {
        return i === idx;
      });

      if (el && (0, _dom.getAttr)(el, 'tabindex') !== '-1') {
        el.focus();
      }
    },
    getItems: function getItems() {
      // Get all items
      return filterVisible((0, _dom.selectAll)(Selector.ITEM_SELECTOR, this.$refs.menu));
    },
    focusMenu: function focusMenu() {
      this.$refs.menu.focus && this.$refs.menu.focus();
    },
    focusToggler: function focusToggler() {
      var toggler = this.toggler;

      if (toggler && toggler.focus) {
        toggler.focus();
      }
    }
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/focus-in.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/focus-in.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__(/*! ../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

// @vue/component
var _default = {
  data: function data() {
    return {
      listenForFocusIn: false
    };
  },
  watch: {
    listenForFocusIn: function listenForFocusIn(newValue, oldValue) {
      if (newValue !== oldValue) {
        (0, _dom.eventOff)(this.focusInElement, 'focusin', this._focusInHandler, false);

        if (newValue) {
          (0, _dom.eventOn)(this.focusInElement, 'focusin', this._focusInHandler, false);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    // Declare non-reactive properties
    this.focusInElement = null;
  },
  mounted: function mounted() {
    if (!this.focusInElement) {
      this.focusInElement = document;
    }

    if (this.listenForFocusIn) {
      (0, _dom.eventOn)(this.focusInElement, 'focusin', this._focusInHandler, false);
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next */
  {
    (0, _dom.eventOff)(this.focusInElement, 'focusin', this._focusInHandler, false);
  },
  methods: {
    _focusInHandler: function _focusInHandler(evt) {
      if (this.focusInHandler) {
        this.focusInHandler(evt);
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form-custom.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form-custom.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  props: {
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    custom: function custom() {
      return !this.plain;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form-options.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form-options.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _html = __webpack_require__(/*! ../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

function isObject(obj) {
  return obj && {}.toString.call(obj) === '[object Object]';
} // @vue/component


var _default2 = {
  props: {
    options: {
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    valueField: {
      type: String,
      default: 'value'
    },
    textField: {
      type: String,
      default: 'text'
    },
    htmlField: {
      type: String,
      default: 'html'
    },
    disabledField: {
      type: String,
      default: 'disabled'
    }
  },
  computed: {
    formOptions: function formOptions() {
      var options = this.options;
      var valueField = this.valueField;
      var textField = this.textField;
      var htmlField = this.htmlField;
      var disabledField = this.disabledField;

      if ((0, _array.isArray)(options)) {
        // Normalize flat-ish arrays to Array of Objects
        return options.map(function (option) {
          if (isObject(option)) {
            var value = option[valueField];
            var text = String(option[textField]);
            return {
              value: typeof value === 'undefined' ? text : value,
              text: (0, _html.stripTags)(text),
              html: option[htmlField],
              disabled: Boolean(option[disabledField])
            };
          }

          return {
            value: option,
            text: (0, _html.stripTags)(String(option)),
            disabled: false
          };
        });
      } else {
        // options is Object
        // Normalize Objects to Array of Objects
        return (0, _object.keys)(options).map(function (key) {
          var option = options[key] || {};

          if (isObject(option)) {
            var value = option[valueField];
            var text = option[textField];
            return {
              value: typeof value === 'undefined' ? key : value,
              text: typeof text === 'undefined' ? (0, _html.stripTags)(String(key)) : (0, _html.stripTags)(String(text)),
              html: option[htmlField],
              disabled: Boolean(option[disabledField])
            };
          }

          return {
            value: key,
            text: (0, _html.stripTags)(String(option)),
            disabled: false
          };
        });
      }
    }
  }
};
exports.default = _default2;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form-radio-check-group.js":
/*!************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form-radio-check-group.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _html = __webpack_require__(/*! ../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

// @vue/component
var _default = {
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    validated: {
      type: Boolean,
      default: false
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    buttons: {
      // Render as button style
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: 'secondary'
    }
  },
  computed: {
    inline: function inline() {
      return !this.stacked;
    },
    groupName: function groupName() {
      // Checks/Radios tied to the same model must have the same name,
      // especially for ARIA accessibility.
      return this.name || this.safeId();
    },
    groupClasses: function groupClasses() {
      if (this.buttons) {
        return ['btn-group-toggle', this.inline ? 'btn-group' : 'btn-group-vertical', this.size ? "btn-group-".concat(this.size) : '', this.validated ? "was-validated" : ''];
      }

      return [this.validated ? "was-validated" : ''];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      var ariaInvalid = this.ariaInvalid;

      if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
        return 'true';
      }

      return this.computedState === false ? 'true' : null;
    }
  },
  watch: {
    checked: function checked(newVal, oldVal) {
      this.localChecked = newVal;
    },
    localChecked: function localChecked(newVal, oldVal) {
      this.$emit('input', newVal);
    }
  },
  render: function render(h) {
    var _this = this;

    var $slots = this.$slots;
    var inputs = this.formOptions.map(function (option, idx) {
      var uid = "_BV_option_".concat(idx, "_");
      return h(_this.is_RadioGroup ? 'b-form-radio' : 'b-form-checkbox', {
        key: uid,
        props: {
          id: _this.safeId(uid),
          value: option.value,
          // Individual radios or checks can be disabled in a group
          disabled: option.disabled || false // We don't need to include these, since the input's will know they are inside here
          // name: this.groupName,
          // form: this.form || null,
          // required: Boolean(this.name && this.required)

        }
      }, [h('span', {
        domProps: (0, _html.htmlOrText)(option.html, option.text)
      })]);
    });
    return h('div', {
      class: this.groupClasses,
      attrs: {
        id: this.safeId(),
        role: this.is_RadioGroup ? 'radiogroup' : 'group',
        // Tabindex to allow group to be focused if needed
        tabindex: '-1',
        'aria-required': this.required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      }
    }, [$slots.first, inputs, $slots.default]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form-radio-check.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form-radio-check.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var _default = {
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    value: {// Value when checked
      // type: Object,
      // default: undefined
    },
    checked: {// This is the v-model
      // type: Object,
      // default: undefined
    },
    inline: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    button: {
      // Only applicable in standalone mode (non group)
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: null
    },
    ariaLabel: {
      // Placed on the input if present.
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localChecked: this.is_Group ? this.bvGroup.checked : this.checked,
      hasFocus: false
    };
  },
  computed: {
    computedLocalChecked: {
      get: function get() {
        return this.is_Group ? this.bvGroup.localChecked : this.localChecked;
      },
      set: function set(val) {
        if (this.is_Group) {
          this.bvGroup.localChecked = val;
        } else {
          this.localChecked = val;
        }
      }
    },
    is_Group: function is_Group() {
      // Is this check/radio a child of check-group or radio-group?
      return Boolean(this.bvGroup);
    },
    is_BtnMode: function is_BtnMode() {
      // Support button style in single input mode
      return this.is_Group ? this.bvGroup.buttons : this.button;
    },
    is_Plain: function is_Plain() {
      return this.is_BtnMode ? false : this.is_Group ? this.bvGroup.plain : this.plain;
    },
    is_Custom: function is_Custom() {
      return this.is_BtnMode ? false : !this.is_Plain;
    },
    is_Switch: function is_Switch() {
      // Custom switch styling (checkboxes only)
      return this.is_BtnMode || this.is_Radio || this.is_Plain ? false : this.is_Group ? this.bvGroup.switches : this.switch;
    },
    is_Inline: function is_Inline() {
      return this.is_Group ? this.bvGroup.inline : this.inline;
    },
    is_Disabled: function is_Disabled() {
      // Child can be disabled while parent isn't, but is always disabled if group is
      return this.is_Group ? this.bvGroup.disabled || this.disabled : this.disabled;
    },
    is_Required: function is_Required() {
      // Required only works when a name is provided for the input(s)
      // Child can only be required when parent is
      // Groups will always have a name (either user supplied or auto generated)
      return Boolean(this.get_Name && (this.is_Group ? this.bvGroup.required : this.required));
    },
    get_Name: function get_Name() {
      // Group name preferred over local name
      return (this.is_Group ? this.bvGroup.groupName : this.name) || null;
    },
    get_Form: function get_Form() {
      return (this.is_Group ? this.bvGroup.form : this.form) || null;
    },
    get_Size: function get_Size() {
      return (this.is_Group ? this.bvGroup.size : this.size) || '';
    },
    get_State: function get_State() {
      return this.is_Group ? this.bvGroup.computedState : this.computedState;
    },
    get_ButtonVariant: function get_ButtonVariant() {
      // Local variant preferred over group variant
      if (this.buttonVariant) {
        return this.buttonVariant;
      } else if (this.is_Group && this.bvGroup.buttonVariant) {
        return this.bvGroup.buttonVariant;
      } // default variant


      return 'secondary';
    },
    buttonClasses: function buttonClasses() {
      // Same for radio & check
      return ['btn', "btn-".concat(this.get_ButtonVariant), this.get_Size ? "btn-".concat(this.get_Size) : '', // 'disabled' class makes "button" look disabled
      this.is_Disabled ? 'disabled' : '', // 'active' class makes "button" look pressed
      this.is_Checked ? 'active' : '', // Focus class makes button look focused
      this.hasFocus ? 'focus' : ''];
    }
  },
  watch: {
    checked: function checked(newVal, oldVal) {
      this.computedLocalChecked = newVal;
    }
  },
  methods: {
    handleFocus: function handleFocus(evt) {
      // When in buttons mode, we need to add 'focus' class to label when input focused
      // As it is the hidden input which has actual focus
      if (evt.target) {
        if (evt.type === 'focus') {
          this.hasFocus = true;
        } else if (evt.type === 'blur') {
          this.hasFocus = false;
        }
      }
    },
    // Convenience methods for focusing the input
    focus: function focus() {
      if (!this.is_Disabled && this.$refs.input && this.$refs.input.focus) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (!this.is_Disabled && this.$refs.input && this.$refs.input.blur) {
        this.$refs.input.blur();
      }
    }
  },
  render: function render(h) {
    var defaultSlot = this.$slots.default; // Generate the input element

    var on = {
      change: this.handleChange
    };

    if (this.is_BtnMode) {
      // Handlers for focus styling when in button mode
      on.focus = on.blur = this.handleFocus;
    }

    var input = h('input', {
      ref: 'input',
      key: 'input',
      on: on,
      class: {
        'form-check-input': this.is_Plain,
        'custom-control-input': this.is_Custom,
        'is-valid': this.get_State === true && !this.is_BtnMode,
        'is-invalid': this.get_State === false && !this.is_BtnMode,
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911
        'position-static': this.is_Plain && !defaultSlot
      },
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.computedLocalChecked,
        expression: 'computedLocalChecked'
      }],
      attrs: {
        id: this.safeId(),
        type: this.is_Radio ? 'radio' : 'checkbox',
        name: this.get_Name,
        form: this.get_Form,
        disabled: this.is_Disabled,
        required: this.is_Required,
        autocomplete: 'off',
        'aria-required': this.is_Required || null,
        'aria-label': this.ariaLabel || null
      },
      domProps: {
        value: this.value,
        checked: this.is_Checked
      }
    });

    if (this.is_BtnMode) {
      // Button mode
      var button = h('label', {
        class: this.buttonClasses
      }, [input, defaultSlot]);

      if (!this.is_Group) {
        // Standalone button mode, so wrap in 'btn-group-toggle'
        // and flag it as inline-block to mimic regular buttons
        button = h('div', {
          class: ['btn-group-toggle', 'd-inline-block']
        }, [button]);
      }

      return button;
    } else {
      // Not button mode
      var label = h(false); // If no label content in plain mode we dont render the label
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911

      if (!(this.is_Plain && !defaultSlot)) {
        label = h('label', {
          class: {
            'form-check-label': this.is_Plain,
            'custom-control-label': this.is_Custom
          },
          attrs: {
            for: this.safeId()
          }
        }, defaultSlot);
      } // Wrap it in a div


      return h('div', {
        class: _defineProperty({
          'form-check': this.is_Plain,
          'form-check-inline': this.is_Plain && this.is_Inline,
          'custom-control': this.is_Custom,
          'custom-control-inline': this.is_Custom && this.is_Inline,
          'custom-checkbox': this.is_Custom && this.is_Check && !this.is_Switch,
          'custom-switch': this.is_Switch,
          'custom-radio': this.is_Custom && this.is_Radio
        }, "form-control-".concat(this.get_Size), Boolean(this.get_Size && !this.is_BtnMode))
      }, [input, label]);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form-selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form-selection.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  computed: {
    selectionStart: {
      // Expose selectionStart for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionStart;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionStart = val;
      }
    },
    selectionEnd: {
      // Expose selectionEnd for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionEnd;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionEnd = val;
      }
    },
    selectionDirection: {
      // Expose selectionDirection for formatters, etc
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.selectionDirection;
      },
      set: function set(val)
      /* istanbul ignore next */
      {
        this.$refs.input.selectionDirection = val;
      }
    }
  },
  methods: {
    select: function select()
    /* istanbul ignore next */
    {
      var _this$$refs$input;

      // For external handler that may want a select() method
      (_this$$refs$input = this.$refs.input).select.apply(_this$$refs$input, arguments);
    },
    setSelectionRange: function setSelectionRange()
    /* istanbul ignore next */
    {
      var _this$$refs$input2;

      // For external handler that may want a setSelectionRange(a,b,c) method
      (_this$$refs$input2 = this.$refs.input).setSelectionRange.apply(_this$$refs$input2, arguments);
    },
    setRangeText: function setRangeText()
    /* istanbul ignore next */
    {
      var _this$$refs$input3;

      // For external handler that may want a setRangeText(a,b,c) method
      (_this$$refs$input3 = this.$refs.input).setRangeText.apply(_this$$refs$input3, arguments);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form-size.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form-size.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  props: {
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    sizeFormClass: function sizeFormClass() {
      return [this.size ? "form-control-".concat(this.size) : null];
    },
    sizeBtnClass: function sizeBtnClass()
    /* istanbul ignore next: don't think this is used */
    {
      return [this.size ? "btn-".concat(this.size) : null];
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form-state.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form-state.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true or 'valid' for is-valid
 *  - false or 'invalid' for is-invalid
 *  - null (or empty string) for no contextual state
 */
// @vue/component
var _default = {
  props: {
    state: {
      // true/'valid', false/'invalid', '',null
      // The order must be String first, then Boolean!
      type: [String, Boolean],
      default: null
    }
  },
  computed: {
    computedState: function computedState() {
      var state = this.state;

      if (state === '') {
        return null;
      } else if (state === true || state === 'valid') {
        return true;
      } else if (state === false || state === 'invalid') {
        return false;
      }

      return null;
    },
    stateClass: function stateClass() {
      var state = this.computedState;

      if (state === true) {
        return 'is-valid';
      } else if (state === false) {
        return 'is-invalid';
      }

      return null;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form-text.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form-text.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    plaintext: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    formatter: {
      type: Function,
      default: null
    },
    trim: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    lazyFormatter: {
      type: Boolean,
      value: false
    }
  },
  data: function data() {
    return {
      localValue: this.stringifyValue(this.value)
    };
  },
  computed: {
    computedClass: function computedClass() {
      return [{
        // Range input needs class custom-range
        'custom-range': this.type === 'range',
        // plaintext not supported by type=range or type=color
        'form-control-plaintext': this.plaintext && this.type !== 'range' && this.type !== 'color',
        // form-control not used by type=range or plaintext. Always used by type=color
        'form-control': !this.plaintext && this.type !== 'range' || this.type === 'color'
      }, this.sizeFormClass, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (!this.ariaInvalid || this.ariaInvalid === 'false') {
        // this.ariaInvalid is null or false or 'false'
        return this.computedState === false ? 'true' : null;
      }

      if (this.ariaInvalid === true) {
        // User wants explicit aria-invalid=true
        return 'true';
      } // Most likely a string value (which could be the string 'true')


      return this.ariaInvalid;
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      if (newVal !== oldVal && newVal !== this.localValue) {
        this.localValue = this.stringifyValue(newVal);
      }
    }
  },
  mounted: function mounted() {
    var value = this.stringifyValue(this.value);

    if (value !== this.localValue) {
      /* istanbul ignore next */
      this.localValue = value;
    }
  },
  methods: {
    stringifyValue: function stringifyValue(value) {
      return value === null || typeof value === 'undefined' ? '' : String(value);
    },
    getFormatted: function getFormatted(value, event) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      value = this.stringifyValue(value);

      if ((!this.lazyFormatter || force) && typeof this.formatter === 'function') {
        value = this.formatter(value, event);
      }

      return value;
    },
    updateValue: function updateValue(value) {
      value = this.stringifyValue(value);

      if (this.localValue !== value) {
        // keep the input set to the value before modifiers
        this.localValue = value;

        if (this.number) {
          // Emulate .number modifier behaviour
          var num = parseFloat(value);
          value = isNaN(num) ? value : num;
        } else if (this.trim) {
          // Emulate .trim modifier behaviour
          value = value.trim();
        } // Update the v-model


        this.$emit('update', value);
      }
    },
    onInput: function onInput(evt) {
      // evt.target.composing is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js

      /* istanbul ignore if: hard to test composition events */
      if (evt.target.composing) {
        return;
      }

      var formatted = this.getFormatted(evt.target.value, evt);

      if (formatted === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }

      this.updateValue(formatted);
      this.$emit('input', formatted);
    },
    onChange: function onChange(evt) {
      // evt.target.composing is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js

      /* istanbul ignore if: hard to test composition events */
      if (evt.target.composing) {
        return;
      }

      var formatted = this.getFormatted(evt.target.value, evt);

      if (formatted === false) {
        return;
      }

      this.updateValue(formatted);
      this.$emit('change', formatted);
    },
    onBlur: function onBlur(evt) {
      // lazy formatter
      if (this.lazyFormatter) {
        var formatted = this.getFormatted(evt.target.value, evt, true);

        if (formatted === false) {
          return;
        }

        this.updateValue(formatted);
      } // Emit native blur event


      this.$emit('blur', evt);
    },
    focus: function focus() {
      // For external handler that may want a focus method
      if (!this.disabled) {
        this.$el.focus();
      }
    },
    blur: function blur() {
      // For external handler that may want a blur method
      if (!this.disabled) {
        this.$el.blur();
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form-validity.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form-validity.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  computed: {
    validity: {
      // Expose validity property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.validity;
      }
    },
    validationMessage: {
      // Expose validationMessage property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.validationMessage;
      }
    },
    willValidate: {
      // Expose willValidate property
      cache: false,
      get: function get()
      /* istanbul ignore next */
      {
        return this.$refs.input.willValidate;
      }
    }
  },
  methods: {
    setCustomValidity: function setCustomValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input;

      // For external handler that may want a setCustomValidity(...) method
      return (_this$$refs$input = this.$refs.input).setCustomValidity.apply(_this$$refs$input, arguments);
    },
    checkValidity: function checkValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input2;

      // For external handler that may want a checkValidity(...) method
      return (_this$$refs$input2 = this.$refs.input).checkValidity.apply(_this$$refs$input2, arguments);
    },
    reportValidity: function reportValidity()
    /* istanbul ignore next */
    {
      var _this$$refs$input3;

      // For external handler that may want a reportValidity(...) method
      return (_this$$refs$input3 = this.$refs.input).reportValidity.apply(_this$$refs$input3, arguments);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/form.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/form.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// @vue/component
var _default = {
  props: {
    name: {
      type: String // default: undefined

    },
    id: {
      type: String // default: undefined

    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: null
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/id.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/id.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/*
 * SSR Safe Client Side ID attribute generation
 * id's can only be generated client side, after mount.
 * this._uid is not synched between server and client.
 */
// @vue/component
var _default = {
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID.
      // Reacts to changes in both .id and .localId_ And regens a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method!!!
      // But benefits from Vue's Computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // mounted only occurs client side
    this.$nextTick(function () {
      // Update dom with auto ID after dom loaded to prevent
      // SSR hydration errors.
      _this.localId_ = "__BVID__".concat(_this._uid);
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/listen-on-root.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/listen-on-root.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Issue #569: collapse::toggle::state triggered too many times
 * @link https://github.com/bootstrap-vue/bootstrap-vue/issues/569
 */
// @vue/component
var _default = {
  methods: {
    /**
     * Safely register event listeners on the root Vue node.
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback.
     *
     * When registering a $root listener, it also registers a listener on
     * the component's `beforeDestroy` hook to automatically remove the
     * event listener from the $root instance.
     *
     * @param {string} event
     * @param {function} callback
     * @chainable
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      var _this = this;

      this.$root.$on(event, callback);
      this.$on('hook:beforeDestroy', function () {
        _this.$root.$off(event, callback);
      }); // Return this for easy chaining

      return this;
    },

    /**
     * Convenience method for calling vm.$emit on vm.$root.
     * @param {string} event
     * @param {*} args
     * @chainable
     */
    emitOnRoot: function emitOnRoot(event) {
      var _this$$root;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$$root = this.$root).$emit.apply(_this$$root, [event].concat(args)); // Return this for easy chaining


      return this;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/normalize-slot.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/normalize-slot.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _normalizeSlot2 = __webpack_require__(/*! ../utils/normalize-slot */ "./node_modules/bootstrap-vue/es/utils/normalize-slot.js");

var _array = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _default = {
  methods: {
    hasNormalizedSlot: function hasNormalizedSlot(name) {
      // Returns true if the either a $scopedSlot or $slot exists with the specified name
      return Boolean(this.$scopedSlots[name] || this.$slots[name]);
    },
    normalizeSlot: function normalizeSlot(name) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Returns an array of rendered vNodes if slot found.
      // Returns undefined if not found.
      var vNodes = (0, _normalizeSlot2.default)(name, scope, this.$scopedSlots, this.$slots);
      return vNodes ? (0, _array.concat)(vNodes) : vNodes;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/pagination.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _warn = __webpack_require__(/*! ../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _range = __webpack_require__(/*! ../utils/range */ "./node_modules/bootstrap-vue/es/utils/range.js");

var _keyCodes = __webpack_require__(/*! ../utils/key-codes */ "./node_modules/bootstrap-vue/es/utils/key-codes.js");

var _dom = __webpack_require__(/*! ../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _toString = __webpack_require__(/*! ../utils/to-string */ "./node_modules/bootstrap-vue/es/utils/to-string.js");

var _normalizeSlot = __webpack_require__(/*! ../mixins/normalize-slot */ "./node_modules/bootstrap-vue/es/mixins/normalize-slot.js");

var _link = __webpack_require__(/*! ../components/link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

/*
 * Comon props, computed, data, render function, and methods for b-pagination and b-pagination-nav
 */
// Threshold of limit size when we start/stop showing ellipsis
var ELLIPSIS_THRESHOLD = 3; // Default # of buttons limit

var DEFAULT_LIMIT = 5; // Make an array of N to N+X

function makePageArray(startNum, numPages) {
  return (0, _range.default)(numPages).map(function (value, index) {
    return {
      number: index + startNum,
      classes: null
    };
  });
} // Sanitize the provided Limit value (converting to a number)


function sanitizeLimit(value) {
  var limit = parseInt(value, 10) || 1;
  return limit < 1 ? DEFAULT_LIMIT : limit;
} // Sanitize the provided current page number (converting to a number)


function sanitizeCurPage(value, numPages) {
  var page = parseInt(value, 10) || 1;
  return page > numPages ? numPages : page < 1 ? 1 : page;
} // Links don't normally respond to SPACE, so we add that functionality via this handler


function onSpaceKey(evt) {
  if (evt.keyCode === _keyCodes.default.SPACE) {
    evt.preventDefault(); // Stop page from scrolling

    evt.stopImmediatePropagation();
    evt.stopPropagation(); // Trigger the click event on the link

    evt.currentTarget.click();
    return false;
  }
} // Props object


var props = {
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Number, String],
    default: null,
    validator: function validator(value) {
      var num = parseInt(value, 10);
      /* istanbul ignore if */

      if (value !== null && (isNaN(num) || num < 1)) {
        (0, _warn.default)('pagination: v-model value must be a number greater than 0');
        return false;
      }

      return true;
    }
  },
  limit: {
    type: [Number, String],
    default: DEFAULT_LIMIT,
    validator: function validator(value) {
      var num = parseInt(value, 10);
      /* istanbul ignore if */

      if (isNaN(num) || num < 1) {
        (0, _warn.default)('pagination: prop "limit" must be a number greater than 0');
        return false;
      }

      return true;
    }
  },
  size: {
    type: String,
    default: 'md'
  },
  align: {
    type: String,
    default: 'left'
  },
  hideGotoEndButtons: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'Pagination'
  },
  labelFirstPage: {
    type: String,
    default: 'Go to first page'
  },
  firstText: {
    type: String,
    default: '«'
  },
  labelPrevPage: {
    type: String,
    default: 'Go to previous page'
  },
  prevText: {
    type: String,
    default: '‹'
  },
  labelNextPage: {
    type: String,
    default: 'Go to next page'
  },
  nextText: {
    type: String,
    default: '›'
  },
  labelLastPage: {
    type: String,
    default: 'Go to last page'
  },
  lastText: {
    type: String,
    default: '»'
  },
  labelPage: {
    type: [String, Function],
    default: 'Go to page'
  },
  hideEllipsis: {
    type: Boolean,
    default: false
  },
  ellipsisText: {
    type: String,
    default: '…'
  } // @vue/component

};
var _default = {
  components: {
    BLink: _link.default
  },
  mixins: [_normalizeSlot.default],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: props,
  data: function data() {
    var curr = parseInt(this.value, 10);
    return {
      // -1 signifies no page initially selected
      currentPage: curr > 0 ? curr : -1,
      localNumPages: 1,
      localLimit: DEFAULT_LIMIT
    };
  },
  computed: {
    btnSize: function btnSize() {
      return this.size ? "pagination-".concat(this.size) : '';
    },
    alignment: function alignment() {
      var align = this.align;

      if (align === 'center') {
        return 'justify-content-center';
      } else if (align === 'end' || align === 'right') {
        return 'justify-content-end';
      } else if (align === 'fill') {
        // The page-items will also have 'flex-fill' added.
        // We ad text centering to make the button appearance better in fill mode.
        return 'text-center';
      }

      return '';
    },
    computedCurrentPage: function computedCurrentPage() {
      return sanitizeCurPage(this.currentPage, this.localNumPages);
    },
    paginationParams: function paginationParams() {
      // Determine if we should show the the ellipsis
      var limit = this.limit;
      var numPages = this.localNumPages;
      var curPage = this.computedCurrentPage;
      var hideEllipsis = this.hideEllipsis;
      var showFirstDots = false;
      var showLastDots = false;
      var numLinks = limit;
      var startNum = 1;

      if (numPages <= limit) {
        // Special Case: Less pages available than the limit of displayed pages
        numLinks = numPages;
      } else if (curPage < limit - 1 && limit > ELLIPSIS_THRESHOLD) {
        // We are near the beginning of the page list
        if (!hideEllipsis) {
          showLastDots = true;
          numLinks = limit - 1;
        }
      } else if (numPages - curPage + 2 < limit && limit > ELLIPSIS_THRESHOLD) {
        // We are near the end of the list
        if (!hideEllipsis) {
          numLinks = limit - 1;
          showFirstDots = true;
        }

        startNum = numPages - numLinks + 1;
      } else {
        // We are somewhere in the middle of the page list
        if (limit > ELLIPSIS_THRESHOLD && !hideEllipsis) {
          numLinks = limit - 2;
          showFirstDots = showLastDots = true;
        }

        startNum = curPage - Math.floor(numLinks / 2);
      } // Sanity checks


      if (startNum < 1) {
        /* istanbul ignore next */
        startNum = 1;
      } else if (startNum > numPages - numLinks) {
        startNum = numPages - numLinks + 1;
      }

      return {
        showFirstDots: showFirstDots,
        showLastDots: showLastDots,
        numLinks: numLinks,
        startNum: startNum
      };
    },
    pageList: function pageList() {
      // Generates the pageList array
      var _this$paginationParam = this.paginationParams,
          numLinks = _this$paginationParam.numLinks,
          startNum = _this$paginationParam.startNum;
      var currPage = this.computedCurrentPage; // Generate list of page numbers

      var pages = makePageArray(startNum, numLinks); // We limit to a total of 3 page buttons on XS screens
      // So add classes to page links to hide them for XS breakpoint
      // Note: Ellipsis will also be hidden on XS screens
      // TODO: Make this visual limit configurable based on breakpoint(s)

      if (pages.length > 3) {
        var idx = currPage - startNum; // THe following is a bootstrap-vue custom utility class

        var classes = 'bv-d-xs-down-none';

        if (idx === 0) {
          // Keep leftmost 3 buttons visible when current page is first page
          for (var i = 3; i < pages.length; i++) {
            pages[i].classes = classes;
          }
        } else if (idx === pages.length - 1) {
          // Keep rightmost 3 buttons visible when current page is last page
          for (var _i = 0; _i < pages.length - 3; _i++) {
            pages[_i].classes = classes;
          }
        } else {
          // Hide all except current page, current page - 1 and current page + 1
          for (var _i2 = 0; _i2 < idx - 1; _i2++) {
            // hide some left button(s)
            pages[_i2].classes = classes;
          }

          for (var _i3 = pages.length - 1; _i3 > idx + 1; _i3--) {
            // hide some right button(s)
            pages[_i3].classes = classes;
          }
        }
      }

      return pages;
    }
  },
  watch: {
    value: function value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.currentPage = sanitizeCurPage(newValue, this.localNumPages);
      }
    },
    currentPage: function currentPage(newValue, oldValue) {
      if (newValue !== oldValue) {
        // Emit null if no page selected
        this.$emit('input', newValue > 0 ? newValue : null);
      }
    },
    limit: function limit(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.localLimit = sanitizeLimit(newValue);
      }
    }
  },
  created: function created() {
    var _this = this;

    // Set our default values in data
    this.localLimit = sanitizeLimit(this.limit);
    this.$nextTick(function () {
      // Sanity check
      _this.currentPage = _this.currentPage > _this.localNumPages ? _this.localNumPages : _this.currentPage;
    });
  },
  methods: {
    getButtons: function getButtons() {
      // Return only buttons that are visible
      return (0, _dom.selectAll)('a.page-link', this.$el).filter(function (btn) {
        return (0, _dom.isVisible)(btn);
      });
    },
    setBtnFocus: function setBtnFocus(btn) {
      btn.focus();
    },
    focusCurrent: function focusCurrent() {
      var _this2 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this2.getButtons().find(function (el) {
          return parseInt((0, _dom.getAttr)(el, 'aria-posinset'), 10) === _this2.computedCurrentPage;
        });

        if (btn && btn.focus) {
          _this2.setBtnFocus(btn);
        } else {
          // Fallback if current page is not in button list
          _this2.focusFirst();
        }
      });
    },
    focusFirst: function focusFirst() {
      var _this3 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this3.getButtons().find(function (el) {
          return !(0, _dom.isDisabled)(el);
        });

        if (btn && btn.focus && btn !== document.activeElement) {
          _this3.setBtnFocus(btn);
        }
      });
    },
    focusLast: function focusLast() {
      var _this4 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var btn = _this4.getButtons().reverse().find(function (el) {
          return !(0, _dom.isDisabled)(el);
        });

        if (btn && btn.focus && btn !== document.activeElement) {
          _this4.setBtnFocus(btn);
        }
      });
    },
    focusPrev: function focusPrev() {
      var _this5 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var buttons = _this5.getButtons();

        var idx = buttons.indexOf(document.activeElement);

        if (idx > 0 && !(0, _dom.isDisabled)(buttons[idx - 1]) && buttons[idx - 1].focus) {
          _this5.setBtnFocus(buttons[idx - 1]);
        }
      });
    },
    focusNext: function focusNext() {
      var _this6 = this;

      // We do this in next tick to ensure buttons have finished rendering
      this.$nextTick(function () {
        var buttons = _this6.getButtons();

        var idx = buttons.indexOf(document.activeElement);
        var cnt = buttons.length - 1;

        if (idx < cnt && !(0, _dom.isDisabled)(buttons[idx + 1]) && buttons[idx + 1].focus) {
          _this6.setBtnFocus(buttons[idx + 1]);
        }
      });
    }
  },
  render: function render(h) {
    var _this7 = this;

    var buttons = [];
    var numberOfPages = this.localNumPages;
    var disabled = this.disabled;
    var _this$paginationParam2 = this.paginationParams,
        showFirstDots = _this$paginationParam2.showFirstDots,
        showLastDots = _this$paginationParam2.showLastDots;
    var currPage = this.computedCurrentPage;
    var fill = this.align === 'fill'; // Helper function and flag

    var isActivePage = function isActivePage(pageNum) {
      return pageNum === currPage;
    };

    var noCurrPage = this.currentPage < 1; // Factory function for prev/next/first/last buttons

    var makeEndBtn = function makeEndBtn(linkTo, ariaLabel, btnSlot, btnText, pageTest, key) {
      var isDisabled = disabled || isActivePage(pageTest) || noCurrPage || linkTo < 1 || linkTo > numberOfPages;
      var pageNum = linkTo < 1 ? 1 : linkTo > numberOfPages ? numberOfPages : linkTo;
      var scope = {
        disabled: isDisabled,
        page: pageNum,
        index: pageNum - 1
      };
      var btnContent = _this7.normalizeSlot(btnSlot, scope) || (0, _toString.default)(btnText) || h(false);
      var inner = h(isDisabled ? 'span' : 'b-link', {
        staticClass: 'page-link',
        props: isDisabled ? {} : _this7.linkProps(linkTo),
        attrs: {
          role: 'menuitem',
          tabindex: isDisabled ? null : '-1',
          'aria-label': ariaLabel,
          'aria-controls': _this7.ariaControls || null,
          'aria-disabled': isDisabled ? 'true' : null
        },
        on: isDisabled ? {} : {
          click: function click(evt) {
            _this7.onClick(linkTo, evt);
          },
          keydown: onSpaceKey
        }
      }, [btnContent]);
      return h('li', {
        key: key,
        staticClass: 'page-item',
        class: {
          disabled: isDisabled,
          'flex-fill': fill
        },
        attrs: {
          role: 'none presentation',
          'aria-hidden': isDisabled ? 'true' : null
        }
      }, [inner]);
    }; // Ellipsis factory


    var makeEllipsis = function makeEllipsis(isLast) {
      return h('li', {
        key: "elipsis-".concat(isLast ? 'last' : 'first'),
        staticClass: 'page-item',
        class: ['disabled', 'bv-d-xs-down-none', fill ? 'flex-fill' : ''],
        attrs: {
          role: 'separator'
        }
      }, [h('span', {
        staticClass: 'page-link'
      }, [_this7.normalizeSlot('ellipsis-text', {}) || (0, _toString.default)(_this7.ellipsisText) || h(false)])]);
    }; // Goto First Page button bookend


    buttons.push(this.hideGotoEndButtons ? h(false) : makeEndBtn(1, this.labelFirstPage, 'first-text', this.firstText, 1, 'bookend-goto-first')); // Goto Previous page button bookend

    buttons.push(makeEndBtn(currPage - 1, this.labelPrevPage, 'prev-text', this.prevText, 1, 'bookend-goto-prev')); // First Ellipsis Bookend

    buttons.push(showFirstDots ? makeEllipsis(false) : h(false)); // Individual Page links

    this.pageList.forEach(function (page, idx) {
      var active = isActivePage(page.number) && !noCurrPage; // Active page will have tabindex of 0, or if no current page and first page button

      var tabIndex = disabled ? null : active || noCurrPage && idx === 0 ? '0' : '-1';
      var attrs = {
        role: 'menuitemradio',
        'aria-disabled': disabled ? 'true' : null,
        'aria-controls': _this7.ariaControls || null,
        'aria-label': typeof _this7.labelPage === 'function' ? _this7.labelPage(page.number) : "".concat(_this7.labelPage, " ").concat(page.number),
        'aria-checked': active ? 'true' : 'false',
        'aria-posinset': page.number,
        'aria-setsize': numberOfPages,
        // ARIA "roving tabindex" method
        tabindex: tabIndex
      };
      var btnContent = (0, _toString.default)(_this7.makePage(page.number));
      var scope = {
        page: page.number,
        index: page.number - 1,
        content: btnContent,
        active: active,
        disabled: disabled
      };
      var inner = h(disabled ? 'span' : 'b-link', {
        props: disabled ? {} : _this7.linkProps(page.number),
        staticClass: 'page-link',
        attrs: attrs,
        on: disabled ? {} : {
          click: function click(evt) {
            _this7.onClick(page.number, evt);
          },
          keydown: onSpaceKey
        }
      }, [_this7.normalizeSlot('page', scope) || btnContent]);
      buttons.push(h('li', {
        key: "page-".concat(page.number),
        staticClass: 'page-item',
        class: [{
          disabled: disabled,
          active: active,
          'flex-fill': fill
        }, page.classes],
        attrs: {
          role: 'none presentation'
        }
      }, [inner]));
    }); // Last Ellipsis Bookend

    buttons.push(showLastDots ? makeEllipsis(true) : h(false)); // Goto Next page button bookend

    buttons.push(makeEndBtn(currPage + 1, this.labelNextPage, 'next-text', this.nextText, numberOfPages, 'bookend-goto-next')); // Goto Last Page button bookend

    buttons.push(this.hideGotoEndButtons ? h(false) : makeEndBtn(numberOfPages, this.labelLastPage, 'last-text', this.lastText, numberOfPages, 'bookend-goto-last')); // Assemble the paginatiom buttons

    var pagination = h('ul', {
      ref: 'ul',
      staticClass: 'pagination',
      class: ['b-pagination', this.btnSize, this.alignment],
      attrs: {
        role: 'menubar',
        'aria-disabled': disabled ? 'true' : 'false',
        'aria-label': this.ariaLabel || null
      },
      on: {
        keydown: function keydown(evt) {
          var keyCode = evt.keyCode;
          var shift = evt.shiftKey;

          if (keyCode === _keyCodes.default.LEFT) {
            evt.preventDefault();
            shift ? _this7.focusFirst() : _this7.focusPrev();
          } else if (keyCode === _keyCodes.default.RIGHT) {
            evt.preventDefault();
            shift ? _this7.focusLast() : _this7.focusNext();
          }
        }
      }
    }, buttons); // if we are pagination-nav, wrap in '<nav>' wrapper

    if (this.isNav) {
      return h('nav', {
        attrs: {
          'aria-disabled': disabled ? 'true' : null,
          'aria-hidden': disabled ? 'true' : 'false'
        }
      }, [pagination]);
    } else {
      return pagination;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/toolpop.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/toolpop.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__(/*! ../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _dom = __webpack_require__(/*! ../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _ssr = __webpack_require__(/*! ../utils/ssr */ "./node_modules/bootstrap-vue/es/utils/ssr.js");

var _observeDom = __webpack_require__(/*! ../utils/observe-dom */ "./node_modules/bootstrap-vue/es/utils/observe-dom.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var PLACEMENTS = {
  top: 'top',
  topleft: 'topleft',
  topright: 'topright',
  right: 'right',
  righttop: 'righttop',
  rightbottom: 'rightbottom',
  bottom: 'bottom',
  bottomleft: 'bottomleft',
  bottomright: 'bottomright',
  left: 'left',
  lefttop: 'lefttop',
  leftbottom: 'leftbottom',
  auto: 'auto'
};
var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['class', 'style'] // @vue/component

};
var _default = {
  props: {
    target: {
      // String ID of element, or element/component reference
      type: [String, Object, _ssr.HTMLElement, Function] // default: undefined

    },
    delay: {
      type: [Number, Object, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    noFade: {
      type: Boolean,
      default: false
    },
    container: {
      // String ID of container, if null body is used (default)
      type: String,
      default: null
    },
    boundary: {
      // String: scrollParent, window, or viewport
      // Element: element reference
      type: [String, _ssr.HTMLElement],
      default: 'scrollParent'
    },
    boundaryPadding: {
      type: Number,
      default: 5
    },
    show: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseConfig: function baseConfig() {
      var cont = this.container;
      var delay = _typeof(this.delay) === 'object' ? this.delay : parseInt(this.delay, 10) || 0;
      return {
        // Title prop
        title: (this.title || '').trim() || '',
        // Contnt prop (if popover)
        content: (this.content || '').trim() || '',
        // Tooltip/Popover placement
        placement: PLACEMENTS[this.placement] || 'auto',
        // Container curently needs to be an ID with '#' prepended, if null then body is used
        container: cont ? /^#/.test(cont) ? cont : "#".concat(cont) : false,
        // boundariesElement passed to popper
        boundary: this.boundary,
        // boundariesElement padding passed to popper
        boundaryPadding: this.boundaryPadding,
        // Show/Hide delay
        delay: delay || 0,
        // Offset can be css distance. if no units, pixels are assumed
        offset: this.offset || 0,
        // Disable fade Animation?
        animation: !this.noFade,
        // Open/Close Trigger(s)
        trigger: (0, _array.isArray)(this.triggers) ? this.triggers.join(' ') : this.triggers,
        // Callbacks so we can trigger events on component
        callbacks: {
          show: this.onShow,
          shown: this.onShown,
          hide: this.onHide,
          hidden: this.onHidden,
          enabled: this.onEnabled,
          disabled: this.onDisabled
        }
      };
    }
  },
  watch: {
    show: function show(_show, old) {
      /* istanbul ignore if */
      if (_show === old) {
        /* istanbul ignore next */
        return;
      }

      _show ? this.onOpen() : this.onClose();
    },
    disabled: function disabled(_disabled, old) {
      /* istanbul ignore if */
      if (_disabled === old) {
        /* istanbul ignore next */
        return;
      }

      _disabled ? this.onDisable() : this.onEnable();
    }
  },
  created: function created() {
    // Create non-reactive property
    this._toolpop = null;
    this._obs_title = null;
    this._obs_content = null;
  },
  mounted: function mounted() {
    var _this = this;

    // We do this in a next tick to ensure DOM has rendered first
    this.$nextTick(function () {
      // Instantiate ToolTip/PopOver on target
      // The createToolpop method must exist in main component
      if (_this.createToolpop()) {
        if (_this.disabled) {
          // Initially disabled
          _this.onDisable();
        } // Listen to open signals from others


        _this.$on('open', _this.onOpen); // Listen to close signals from others


        _this.$on('close', _this.onClose); // Listen to disable signals from others


        _this.$on('disable', _this.onDisable); // Listen to disable signals from others


        _this.$on('enable', _this.onEnable); // Observe content Child changes so we can notify popper of possible size change


        _this.setObservers(true); // Set intially open state


        if (_this.show) {
          _this.onOpen();
        }
      }
    });
  },
  updated: function updated() {
    // If content/props changes, etc

    /* istanbul ignore next: can't test in JSDOM */
    if (this._toolpop) {
      this._toolpop.updateConfig(this.getConfig());
    }
  },
  activated: function activated() {
    // Called when component is inside a <keep-alive> and component brought offline

    /* istanbul ignore next: can't test in JSDOM */
    this.setObservers(true);
  },
  deactivated: function deactivated() {
    // Called when component is inside a <keep-alive> and component taken offline

    /* istanbul ignore next: can't test in JSDOM */
    if (this._toolpop) {
      this.setObservers(false);

      this._toolpop.hide();
    }
  },
  beforeDestroy: function beforeDestroy()
  /* istanbul ignore next: not easy to test */
  {
    // Shutdown our local event listeners
    this.$off('open', this.onOpen);
    this.$off('close', this.onClose);
    this.$off('disable', this.onDisable);
    this.$off('enable', this.onEnable);
    this.setObservers(false); // bring our content back if needed

    this.bringItBack();

    if (this._toolpop) {
      this._toolpop.destroy();

      this._toolpop = null;
    }
  },
  methods: {
    getConfig: function getConfig() {
      var cfg = _objectSpread({}, this.baseConfig);

      if (this.$refs.title && this.$refs.title.innerHTML.trim()) {
        // If slot has content, it overrides 'title' prop
        // We use the DOM node as content to allow components!
        cfg.title = this.$refs.title;
        cfg.html = true;
      }

      if (this.$refs.content && this.$refs.content.innerHTML.trim()) {
        // If slot has content, it overrides 'content' prop
        // We use the DOM node as content to allow components!
        cfg.content = this.$refs.content;
        cfg.html = true;
      }

      return cfg;
    },
    onOpen: function onOpen() {
      if (this._toolpop) {
        this._toolpop.show();
      }
    },
    onClose: function onClose(callback) {
      if (this._toolpop) {
        this._toolpop.hide(callback);
      } else if (typeof callback === 'function') {
        callback();
      }
    },
    onDisable: function onDisable() {
      /* istanbul ignore next: can't test in JSDOM */
      if (this._toolpop) {
        this._toolpop.disable();
      }
    },
    onEnable: function onEnable() {
      /* istanbul ignore next: can't test in JSDOM */
      if (this._toolpop) {
        this._toolpop.enable();
      }
    },
    updatePosition: function updatePosition() {
      /* istanbul ignore next: can't test in JSDOM */
      if (this._toolpop) {
        // Instruct popper to reposition popover if necessary
        this._toolpop.update();
      }
    },
    getTarget: function getTarget() {
      var target = this.target;

      if (typeof target === 'function') {
        target = target();
      }

      if (typeof target === 'string') {
        // Assume ID of element
        return (0, _dom.getById)(target);
      } else if (_typeof(target) === 'object' && (0, _dom.isElement)(target.$el)) {
        // Component reference
        return target.$el;
      } else if (_typeof(target) === 'object' && (0, _dom.isElement)(target)) {
        // Element reference
        return target;
      }

      return null;
    },
    onShow: function onShow(evt) {
      this.$emit('show', evt);
    },
    onShown: function onShown(evt) {
      this.setObservers(true);
      this.$emit('update:show', true);
      this.$emit('shown', evt);
    },
    onHide: function onHide(evt) {
      this.$emit('hide', evt);
    },
    onHidden: function onHidden(evt) {
      this.setObservers(false); // bring our content back if needed to keep Vue happy
      // Tooltip class will move it back to tip when shown again

      this.bringItBack();
      this.$emit('update:show', false);
      this.$emit('hidden', evt);
    },
    onEnabled: function onEnabled(evt) {
      if (!evt || evt.type !== 'enabled') {
        // Prevent possible endless loop if user mistakienly fires enabled instead of enable
        return;
      }

      this.$emit('update:disabled', false);
      this.$emit('disabled');
    },
    onDisabled: function onDisabled(evt) {
      if (!evt || evt.type !== 'disabled') {
        // Prevent possible endless loop if user mistakienly fires disabled instead of disable
        return;
      }

      this.$emit('update:disabled', true);
      this.$emit('enabled');
    },
    bringItBack: function bringItBack() {
      // bring our content back if needed to keep Vue happy
      if (this.$el && this.$refs.title) {
        this.$el.appendChild(this.$refs.title);
      }

      if (this.$el && this.$refs.content) {
        this.$el.appendChild(this.$refs.content);
      }
    },
    setObservers: function setObservers(on)
    /* istanbul ignore next: can't test in JSDOM */
    {
      if (on) {
        if (this.$refs.title) {
          this._obs_title = (0, _observeDom.default)(this.$refs.title, this.updatePosition.bind(this), OBSERVER_CONFIG);
        }

        if (this.$refs.content) {
          this._obs_content = (0, _observeDom.default)(this.$refs.content, this.updatePosition.bind(this), OBSERVER_CONFIG);
        }
      } else {
        if (this._obs_title) {
          this._obs_title.disconnect();

          this._obs_title = null;
        }

        if (this._obs_content) {
          this._obs_content.disconnect();

          this._obs_content = null;
        }
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/array.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.concat = exports.arrayIncludes = exports.isArray = exports.from = void 0;

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// es6-ified by @alexsasharegan

/* istanbul ignore if */
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      return Math.min(Math.max(toInteger(value), 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
} // https://tc39.github.io/ecma262/#sec-array.prototype.find
// Needed for IE support

/* istanbul ignore if */


if (!Array.prototype.find) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


      var thisArg = arguments[1]; // 5. Let k be 0.

      var k = 0; // 6. Repeat, while k < len

      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        } // e. Increase k by 1.


        k++;
      } // 7. Return undefined.


      return undefined;
    }
  });
}
/* istanbul ignore if */


if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
} // Static


var from = Array.from;
exports.from = from;
var isArray = Array.isArray; // Instance

exports.isArray = isArray;

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};

exports.arrayIncludes = arrayIncludes;

var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
};

exports.concat = concat;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/bv-event.class.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/bv-event.class.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BvEvent =
/*#__PURE__*/
function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor.
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Assign defaults first, the eventInit,
    // and the type last so it can't be overwritten.


    (0, _object.assign)(this, BvEvent.defaults(), eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable.

    (0, _object.defineProperties)(this, {
      type: (0, _object.readonlyDescriptor)(),
      cancelable: (0, _object.readonlyDescriptor)(),
      nativeEvent: (0, _object.readonlyDescriptor)(),
      target: (0, _object.readonlyDescriptor)(),
      relatedTarget: (0, _object.readonlyDescriptor)(),
      vueTarget: (0, _object.readonlyDescriptor)()
    }); // Create a private variable using closure scoping.

    var defaultPrevented = false; // Recreate preventDefault method. One way setter.

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create 'defaultPrevented' publicly accessible prop
    // that can only be altered by the preventDefault method.


    (0, _object.defineProperty)(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "defaults",
    value: function defaults() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null
      };
    }
  }]);

  return BvEvent;
}();

var _default = BvEvent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/clone-deep.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/clone-deep.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.cloneDeep = void 0;

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if ((0, _array.isArray)(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
    }, []);
  }

  if ((0, _object.isPlainObject)(obj)) {
    return (0, _object.keys)(obj).reduce(function (result, key) {
      return _objectSpread({}, result, _defineProperty({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};

exports.cloneDeep = cloneDeep;
var _default = cloneDeep;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/config.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/config.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getBreakpointsDown = exports.getBreakpointsUp = exports.getBreakpoints = exports.getComponentConfig = exports.getConfigValue = exports.getDefaults = exports.getConfig = exports.resetConfig = exports.setConfig = void 0;

var _cloneDeep = __webpack_require__(/*! ./clone-deep */ "./node_modules/bootstrap-vue/es/utils/clone-deep.js");

var _get = __webpack_require__(/*! ./get */ "./node_modules/bootstrap-vue/es/utils/get.js");

var _warn = __webpack_require__(/*! ./warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

// General Bootstrap Vue configuration
//
// BREAKPOINT DEFINITIONS
//
// Some components (BCol and BFormGroup) generate props based on breakpoints, and this
// occurs when the component is first loaded (evaluated), which may happen before the
// config is created/modified
//
// To get around this we make these components async (lazy evaluation)
// The component definition is only called/executed when the first access to the
// component is used (and cached on subsequent uses)
//
// See: https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
//
// PROP DEFAULTS
//
// For default values on props, we use the default value factory function approach so
// so that the default values are pulled in at each component instantiation
//
//  props: {
//    variant: {
//      type: String,
//      default: () => getConfigComponent('BAlert', 'variant')
//    }
//  }
// prettier-ignore
var DEFAULTS = {
  // Breakpoints
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  // Component Specific defaults are keyed by the component
  // name (PascalCase) and prop name (camelCase)
  BAlert: {
    dismissLabel: 'Close',
    variant: 'info'
  },
  BBadge: {
    variant: 'secondary'
  },
  BButton: {
    variant: 'secondary'
  },
  BButtonClose: {
    // `textVariant` is `null` to inherit the current text color
    textVariant: null,
    ariaLabel: 'Close'
  },
  BCardSubTitle: {
    // BCard and BCardBody also inherit this prop
    subTitleTextVariant: 'muted'
  },
  BDropdown: {
    toggleText: 'Toggle Dropdown',
    variant: 'secondary'
  },
  BFormFile: {
    browseText: 'Browse',
    // Chrome default file prompt
    placeholder: 'No file chosen',
    dropPlaceholder: 'Drop files here'
  },
  BFormText: {
    textVariant: 'muted'
  },
  BImg: {
    blankColor: 'transparent'
  },
  BImgLazy: {
    blankColor: 'transparent'
  },
  BModal: {
    cancelTitle: 'Cancel',
    cancelVariant: 'secondary',
    okTitle: 'OK',
    okVariant: 'primary',
    headerCloseLabel: 'Close'
  } // This contains user defined configuration

};
var CONFIG = {}; // Method to get a deep clone (immutable) copy of the defaults

var getDefaults = function getDefaults() {
  return (0, _cloneDeep.default)(DEFAULTS);
}; // Method to set the config
// Merges in only known top-level and sub-level keys
//   Vue.use(BootstrapVue, config)
// or
//   BootstrapVue.setConfig(config)
//   Vue.use(BootstrapVue)


exports.getDefaults = getDefaults;

var setConfig = function setConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!(0, _object.isObject)(config)) {
    /* istanbul ignore next */
    return;
  }

  (0, _object.keys)(config).filter(function (cmpName) {
    return config.hasOwnProperty(cmpName);
  }).forEach(function (cmpName) {
    if (!DEFAULTS.hasOwnProperty(cmpName)) {
      /* istanbul ignore next */
      (0, _warn.default)("config: unknown config property \"".concat(cmpName, "\""));
      /* istanbul ignore next */

      return;
    }

    var cmpConfig = config[cmpName];

    if (cmpName === 'breakpoints') {
      // Special case for breakpoints
      var breakpoints = config.breakpoints;

      if (!(0, _array.isArray)(breakpoints) || breakpoints.length < 2 || breakpoints.some(function (b) {
        return typeof b !== 'string' || b.length === 0;
      })) {
        /* istanbul ignore next */
        (0, _warn.default)('config: "breakpoints" must be an array of at least 2 breakpoint names');
      } else {
        CONFIG.breakpoints = (0, _cloneDeep.default)(breakpoints);
      }
    } else if ((0, _object.isObject)(cmpConfig)) {
      (0, _object.keys)(cmpConfig).filter(function (key) {
        return cmpConfig.hasOwnProperty(key);
      }).forEach(function (key) {
        if (!DEFAULTS[cmpName].hasOwnProperty(key)) {
          /* istanbul ignore next */
          (0, _warn.default)("config: unknown config property \"".concat(cmpName, ".{$key}\""));
        } else {
          // If we pre-populate the config with defaults, we can skip this line
          CONFIG[cmpName] = CONFIG[cmpName] || {};

          if (cmpConfig[key] !== undefined) {
            CONFIG[cmpName][key] = (0, _cloneDeep.default)(cmpConfig[key]);
          }
        }
      });
    }
  });
}; // Reset the user config to default
// For testing purposes only


exports.setConfig = setConfig;

var resetConfig = function resetConfig() {
  CONFIG = {};
}; // Get the current user config
// For testing purposes only


exports.resetConfig = resetConfig;

var getConfig = function getConfig() {
  return (0, _cloneDeep.default)(CONFIG);
}; // Method to grab a config value based on a dotted/array notation key
// Returns a deep clone (immutable) copy


exports.getConfig = getConfig;

var getConfigValue = function getConfigValue(key) {
  // First we try the user config, and if key not found we fall back to default value
  // NOTE: If we deep clone DEFAULTS into config, then we can skip the fallback for get
  return (0, _cloneDeep.default)((0, _get.default)(CONFIG, key, (0, _get.default)(getDefaults(), key)));
}; // Method to grab a config value for a particular component.
// Returns a deep clone (immutable) copy


exports.getConfigValue = getConfigValue;

var getComponentConfig = function getComponentConfig(cmpName) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // Return the particular config value for key for if specified,
  // otherwise we return the full config
  return key ? getConfigValue("".concat(cmpName, ".").concat(key)) : getConfigValue(cmpName) || {};
}; // Convenience method for getting all breakpoint names


exports.getComponentConfig = getComponentConfig;

var getBreakpoints = function getBreakpoints() {
  return getConfigValue('breakpoints');
}; // Convenience method for getting breakpoints with
// the smallest breakpoint set as ''
// Useful for components that create breakpoint specific props


exports.getBreakpoints = getBreakpoints;

var getBreakpointsUp = function getBreakpointsUp() {
  var breakpoints = getBreakpoints();
  breakpoints[0] = '';
  return breakpoints;
}; // Convenience method for getting breakpoints with
// the largest breakpoint set as ''
// Useful for components that create breakpoint specific props


exports.getBreakpointsUp = getBreakpointsUp;

var getBreakpointsDown = function getBreakpointsDown() {
  var breakpoints = getBreakpoints();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
}; // Named Exports


exports.getBreakpointsDown = getBreakpointsDown;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/copy-props.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/copy-props.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _identity = __webpack_require__(/*! ./identity */ "./node_modules/bootstrap-vue/es/utils/identity.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copies props from one array/object to a new array/object. Prop values
 * are also cloned as new references to prevent possible mutation of original
 * prop object values. Optionally accepts a function to transform the prop name.
 *
 * @param {[]|{}} props
 * @param {Function} transformFn
 */
var copyProps = function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity.default;

  if ((0, _array.isArray)(props)) {
    return props.map(transformFn);
  } // Props as an object.


  var copied = {};

  for (var prop in props) {
    /* istanbul ignore else */
    if (props.hasOwnProperty(prop)) {
      // If the prop value is an object, do a shallow clone to prevent
      // potential mutations to the original object.
      copied[transformFn(prop)] = (0, _object.isObject)(props[prop]) ? _objectSpread({}, props[prop]) : props[prop];
    }
  }

  return copied;
};

var _default = copyProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/dom.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/dom.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.requestAF = exports.position = exports.offset = exports.getCS = exports.getBCR = exports.hasAttr = exports.getAttr = exports.removeAttr = exports.setAttr = exports.hasClass = exports.removeClass = exports.addClass = exports.getById = exports.contains = exports.closest = exports.matches = exports.select = exports.selectAll = exports.reflow = exports.isDisabled = exports.isVisible = exports.isElement = exports.eventOff = exports.eventOn = exports.parseEventOptions = exports.isPassiveSupported = void 0;

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _env = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/es/utils/env.js");

// Determine if the browser supports the option passive for events
var passiveEventSupported = false;
/* istanbul ignore if */

if (_env.inBrowser) {
  try {
    var options = {
      get passive() {
        // This function will be called when the browser
        // attempts to access the passive property.
        passiveEventSupported = true;
      }

    };
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveEventSupported = false;
  }
} // Exported only for testing purposes


var isPassiveSupported = function isPassiveSupported() {
  return passiveEventSupported;
}; // Normalize event options based on support of passive option
// Exported only for testing purposes


exports.isPassiveSupported = isPassiveSupported;

var parseEventOptions = function parseEventOptions(options) {
  if (!passiveEventSupported) {
    // Need to translate to actual Boolean value
    return Boolean((0, _object.isObject)(options) ? options.useCapture : options);
  }
  /* istanbul ignore next: JSDOM doesn't support above detection of passive */


  return options || {
    useCapture: false // So we can't reach this anymore for unit testing due to the above if statement

  };
}; // Attach an event listener to an element


exports.parseEventOptions = parseEventOptions;

var eventOn = function eventOn(el, evtName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler, parseEventOptions(options));
  }
}; // Remove an event listener from an element


exports.eventOn = eventOn;

var eventOff = function eventOff(el, evtName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(evtName, handler, parseEventOptions(options));
  }
}; // Determine if an element is an HTML Element


exports.eventOff = eventOff;

var isElement = function isElement(el) {
  return Boolean(el && el.nodeType === Node.ELEMENT_NODE);
}; // Determine if an HTML element is visible - Faster than CSS check


exports.isElement = isElement;

var isVisible = function isVisible(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  if (!isElement(el) || !contains(document.body, el)) {
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM


  var bcr = getBCR(el);
  return Boolean(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled


exports.isVisible = isVisible;

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || hasClass(el, 'disabled') || Boolean(getAttr(el, 'disabled'));
}; // Cause/wait-for an element to reflow it's content (adjusting it's height/width)


exports.isDisabled = isDisabled;

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found


exports.reflow = reflow;

var selectAll = function selectAll(selector, root) {
  if (!isElement(root)) {
    root = document;
  }

  return (0, _array.from)(root.querySelectorAll(selector));
}; // Select a single element, returns `null` if not found


exports.selectAll = selectAll;

var select = function select(selector, root) {
  if (!isElement(root)) {
    root = document;
  }

  return root.querySelector(selector) || null;
}; // Determine if an element matches a selector


exports.select = select;

var matches = function matches(el, selector) {
  if (!isElement(el)) {
    return false;
  } // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
  // Prefer native implementations over polyfill function


  var proto = Element.prototype;
  /* istanbul ignore next */

  var Matches = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (sel)
  /* istanbul ignore next */
  {
    var element = this;
    var m = selectAll(sel, element.document || element.ownerDocument);
    var i = m.length; // eslint-disable-next-line no-empty

    while (--i >= 0 && m.item(i) !== element) {}

    return i > -1;
  };

  return Matches.call(el, selector);
}; // Finds closest element matching selector. Returns `null` if not found


exports.matches = matches;

var closest = function closest(selector, root) {
  if (!isElement(root)) {
    return null;
  } // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  // Since we dont support IE < 10, we can use the "Matches" version of the polyfill for speed
  // Prefer native implementation over polyfill function


  var Closest = Element.prototype.closest || function (sel)
  /* istanbul ignore next */
  {
    var element = this;

    if (!contains(document.documentElement, element)) {
      return null;
    }

    do {
      // Use our "patched" matches function
      if (matches(element, sel)) {
        return element;
      }

      element = element.parentElement || element.parentNode;
    } while (element !== null && element.nodeType === Node.ELEMENT_NODE);

    return null;
  };

  var el = Closest.call(root, selector); // Emulate jQuery closest and return `null` if match is the passed in element (root)

  return el === root ? null : el;
}; // Returns true if the parent element contains the child element


exports.closest = closest;

var contains = function contains(parent, child) {
  if (!parent || typeof parent.contains !== 'function') {
    return false;
  }

  return parent.contains(child);
}; // Get an element given an ID


exports.contains = contains;

var getById = function getById(id) {
  return document.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element


exports.getById = getById;

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element


exports.addClass = addClass;

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class


exports.removeClass = removeClass;

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element


exports.hasClass = hasClass;

var setAttr = function setAttr(el, attr, value) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
}; // Remove an attribute from an element


exports.setAttr = setAttr;

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element (returns `null` if not found)


exports.removeAttr = removeAttr;

var getAttr = function getAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.getAttribute(attr);
  }

  return null;
}; // Determine if an attribute exists on an element (returns `true`
// or `false`, or `null` if element not found)


exports.getAttr = getAttr;

var hasAttr = function hasAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.hasAttribute(attr);
  }

  return null;
}; // Return the Bounding Client Rect of an element. Returns `null` if not an element


exports.hasAttr = hasAttr;

var getBCR = function getBCR(el) {
  /* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element


exports.getBCR = getBCR;

var getCS = function getCS(el) {
  /* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */
  return isElement(el) ? window.getComputedStyle(el) : {};
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset


exports.getCS = getCS;

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to it's offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position


exports.offset = offset;

var position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = getCS(offsetParent);
      parentOffset.top += parseFloat(offsetParentStyles.borderTopWidth);
      parentOffset.left += parseFloat(offsetParentStyles.borderLeftWidth);
    }
  }

  return {
    top: _offset.top - parentOffset.top - parseFloat(elStyles.marginTop),
    left: _offset.left - parentOffset.left - parseFloat(elStyles.marginLeft)
  };
}; // requestAnimationFrame convenience method
// We don't have a version for cancelAnimationFrame, but we don't call it anywhere


exports.position = position;

var requestAF = function requestAF(cb) {
  var w = _env.inBrowser ? window : {};

  var rAF = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.msRequestAnimationFrame || w.oRequestAnimationFrame || function (cb) {
    // Fallback, but not a true polyfill.
    // But all browsers we support (other than Opera Mini) support rAF
    // without a polyfill.

    /* istanbul ignore next */
    return setTimeout(cb, 16);
  };

  return rAF(cb);
};

exports.requestAF = requestAF;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/env.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/env.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.getNoWarn = exports.hasPointerEvent = exports.hasTouchSupport = exports.isServer = exports.inBrowser = void 0;
// Info about the current environment
// Constants
var inBrowser = typeof document !== 'undefined' && typeof window !== 'undefined';
exports.inBrowser = inBrowser;
var isServer = !inBrowser;
exports.isServer = isServer;
var hasTouchSupport = inBrowser && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
exports.hasTouchSupport = hasTouchSupport;
var hasPointerEvent = inBrowser && Boolean(window.PointerEvent || window.MSPointerEvent); // Getters

exports.hasPointerEvent = hasPointerEvent;

var getNoWarn = function getNoWarn() {
  return process && Object({"NODE_ENV":"development"}) && Object({"NODE_ENV":"development"}).BOOTSTRAP_VUE_NO_WARN;
};

exports.getNoWarn = getNoWarn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/get.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

/**
 * Get property defined by dot/array notation in string.
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @param {*} defaultValue (optional)
 * @return {*}
 */
var get = function get(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Handle array of path values
  path = (0, _array.isArray)(path) ? path.join('.') : path; // If no path or no object passed

  if (!path || !(0, _object.isObject)(obj)) {
    return defaultValue;
  } // Handle edge case where user has dot(s) in top-level item field key
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2762


  if (obj.hasOwnProperty(path)) {
    return obj[path];
  } // Handle string array notation (numeric indices only)


  path = String(path).replace(/\[(\d+)]/g, '.$1');
  var steps = path.split('.').filter(Boolean); // Handle case where someone passes a string of only dots

  if (steps.length === 0) {
    return defaultValue;
  } // Traverse path in object to find result


  return steps.every(function (step) {
    return (0, _object.isObject)(obj) && obj.hasOwnProperty(step) && (obj = obj[step]);
  }) ? obj : defaultValue;
};

var _default = get;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.htmlOrText = exports.stripTags = void 0;
var stripTagsRegex = /(<([^>]+)>)/gi; // Removes any thing that looks like an HTML tag from the supplied string

var stripTags = function stripTags() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(text).replace(stripTagsRegex, '');
}; // Generate a domProps object for either innerHTML, textContent or nothing


exports.stripTags = stripTags;

var htmlOrText = function htmlOrText(innerHTML, textContent) {
  return innerHTML ? {
    innerHTML: innerHTML
  } : textContent ? {
    textContent: textContent
  } : {};
};

exports.htmlOrText = htmlOrText;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/identity.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/identity.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var identity = function identity(x) {
  return x;
};

var _default = identity;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/key-codes.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/key-codes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/*
 * Key Codes (events)
 */
var KEY_CODES = {
  SPACE: 32,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35,
  TAB: 9,
  SHIFT: 16,
  CTRL: 17,
  BACKSPACE: 8,
  ALT: 18,
  PAUSE: 19,
  BREAK: 19,
  INSERT: 45,
  INS: 45,
  DELETE: 46
};
var _default = KEY_CODES;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/loose-equal.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/loose-equal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var isDate = function isDate(obj) {
  return obj instanceof Date;
}; // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)


var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = (0, _array.isArray)(a);
  bValidType = (0, _array.isArray)(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = (0, _object.isObject)(a);
  bValidType = (0, _object.isObject)(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = (0, _object.keys)(a).length;
    var bKeysCount = (0, _object.keys)(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

var _default = looseEqual;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/loose-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/loose-index-of.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _looseEqual = __webpack_require__(/*! ./loose-equal */ "./node_modules/bootstrap-vue/es/utils/loose-equal.js");

var looseIndexOf = function looseIndexOf(arr, val) {
  // Assumes that the first argument is an array
  for (var i = 0; i < arr.length; i++) {
    if ((0, _looseEqual.default)(arr[i], val)) {
      return i;
    }
  }

  return -1;
};

var _default = looseIndexOf;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/lower-first.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/lower-first.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * @param {string} str
 */
var lowerFirst = function lowerFirst(str) {
  str = String(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};

var _default = lowerFirst;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/memoize.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/memoize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var memoize = function memoize(fn) {
  var cache = (0, _object.create)(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsKey = JSON.stringify(args);
    return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
  };
};

var _default = memoize;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/noop.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/noop.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var noop = function noop() {};

var _default = noop;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/normalize-slot.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/normalize-slot.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Returns vNodes for named slot either scoped or unscoped
 *
 * @param {String} name
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} vNodes
 */
var normalizeSlot = function normalizeSlot(name) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Note: in Vue 2.6.x, all names slots are also scoped slots
  var slot = $scopedSlots[name] || $slots[name];
  return typeof slot === 'function' ? slot(scope) : slot;
};

var _default = normalizeSlot;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/object.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/object.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.readonlyDescriptor = exports.omit = exports.isPlainObject = exports.isObject = exports.is = exports.isFrozen = exports.create = exports.getPrototypeOf = exports.getOwnPropertySymbols = exports.getOwnPropertyDescriptor = exports.freeze = exports.defineProperty = exports.defineProperties = exports.keys = exports.getOwnPropertyNames = exports.assign = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Aliasing Object[method] allows the minifier to shorten methods to a single character variable,
 * as well as giving BV a chance to inject polyfills.
 * As long as we avoid
 * - import * as Object from "utils/object"
 * all unused exports should be removed by tree-shaking.
 */
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/* istanbul ignore if */
if (typeof Object.assign !== 'function') {
  Object.assign = function (target, varArgs) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
} // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill

/* istanbul ignore if */


if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      // eslint-disable-next-line no-self-compare
      return x !== x && y !== y;
    }
  };
}

var assign = Object.assign;
exports.assign = assign;
var getOwnPropertyNames = Object.getOwnPropertyNames;
exports.getOwnPropertyNames = getOwnPropertyNames;
var keys = Object.keys;
exports.keys = keys;
var defineProperties = Object.defineProperties;
exports.defineProperties = defineProperties;
var defineProperty = Object.defineProperty;
exports.defineProperty = defineProperty;
var freeze = Object.freeze;
exports.freeze = freeze;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
exports.getOwnPropertyDescriptor = getOwnPropertyDescriptor;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
exports.getOwnPropertySymbols = getOwnPropertySymbols;
var getPrototypeOf = Object.getPrototypeOf;
exports.getPrototypeOf = getPrototypeOf;
var create = Object.create;
exports.create = create;
var isFrozen = Object.isFrozen;
exports.isFrozen = isFrozen;
var is = Object.is;
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 * Note object could be a complex type like array, date, etc.
 */

exports.is = is;

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
};
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


exports.isObject = isObject;

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}; // @link https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc


exports.isPlainObject = isPlainObject;

var omit = function omit(obj, props) {
  return Object.keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread({}, result, _defineProperty({}, key, obj[key]));
  }, {});
};

exports.omit = omit;

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};

exports.readonlyDescriptor = readonlyDescriptor;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/observe-dom.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/observe-dom.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _env = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/es/utils/env.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var eventListenerSupported = _env.inBrowser && window.addEventListener;
var MutationObserver = _env.inBrowser && (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver); // Fallback observation for legacy browsers
// Emulate observer disconnect() method so that we can detach the events later

var fakeObserverFactory = function fakeObserverFactory(el, callback)
/* istanbul ignore next: hard to test in JSDOM */
{
  (0, _dom.eventOn)(el, 'DOMNodeInserted', callback, false);
  (0, _dom.eventOn)(el, 'DOMNodeRemoved', callback, false);
  return {
    disconnect: function disconnect() {
      (0, _dom.eventOff)(el, 'DOMNodeInserted', callback, false);
      (0, _dom.eventOff)(el, 'DOMNodeRemoved', callback, false);
    }
  };
};
/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [opts={childList: true, subtree: true}] observe options
 * @see http://stackoverflow.com/questions/3219758
 */


var observeDom = function observeDom(el, callback, opts)
/* istanbul ignore next: difficult to test in JSDOM */
{
  // Handle case where we might be passed a vue instance
  el = el ? el.$el || el : null;
  /* istanbul ignore next: difficult to test in JSDOM */

  if (!(0, _dom.isElement)(el)) {
    // We can't observe something that isn't an element
    return null;
  }

  var obs = null;

  if (MutationObserver) {
    // Define a new observer
    obs = new MutationObserver(function (mutations) {
      var changed = false; // A Mutation can contain several change records, so we loop through them to see what has changed.
      // We break out of the loop early if any "significant" change has been detected

      for (var i = 0; i < mutations.length && !changed; i++) {
        // The mutation record
        var mutation = mutations[i]; // Mutation Type

        var type = mutation.type; // DOM Node (could be any DOM Node type - HTMLElement, Text, comment, etc)

        var target = mutation.target;

        if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
          // We ignore nodes that are not TEXT (i.e. comments, etc) as they don't change layout
          changed = true;
        } else if (type === 'attributes') {
          changed = true;
        } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
          // This includes HTMLElement and Text Nodes being added/removed/re-arranged
          changed = true;
        }
      }

      if (changed) {
        // We only call the callback if a change that could affect layout/size truely happened.
        callback();
      }
    }); // Have the observer observe foo for changes in children, etc

    obs.observe(el, _objectSpread({
      childList: true,
      subtree: true
    }, opts));
  } else if (eventListenerSupported) {
    // Legacy interface. most likely not used in modern browsers
    obs = fakeObserverFactory(el, callback);
  } // We return a reference to the observer so that obs.disconnect() can be called if necessary
  // To reduce overhead when the root element is hidden


  return obs;
};

var _default = observeDom;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/pluck-props.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/pluck-props.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _identity = __webpack_require__(/*! ./identity */ "./node_modules/bootstrap-vue/es/utils/identity.js");

/**
 * Given an array of properties or an object of property keys,
 * plucks all the values off the target object, returning a new object
 * that has props that reference the original prop values
 *
 * @param {{}|string[]} keysToPluck
 * @param {{}} objToPluck
 * @param {Function} transformFn
 * @return {{}}
 */
var pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity.default;
  return ((0, _array.isArray)(keysToPluck) ? keysToPluck.slice() : (0, _object.keys)(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
};

var _default = pluckProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/plugins.js":
/*!********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/plugins.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.vueUse = exports.registerDirectives = exports.registerDirective = exports.registerComponents = exports.registerComponent = exports.registerPlugins = exports.installFactory = void 0;

var _config = __webpack_require__(/*! ./config */ "./node_modules/bootstrap-vue/es/utils/config.js");

/**
 * Plugin install factory function.
 * @param {object} { components, directives }
 * @returns {function} plugin install function
 */
var installFactory = function installFactory(_ref) {
  var components = _ref.components,
      directives = _ref.directives,
      plugins = _ref.plugins;
  return function (Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _config.setConfig)(config);
    registerComponents(Vue, components);
    registerDirectives(Vue, directives);
    registerPlugins(Vue, plugins);
  };
};
/**
 * Load a group of plugins.
 * @param {object} Vue
 * @param {object} Plugin definitions
 */


exports.installFactory = installFactory;

var registerPlugins = function registerPlugins(Vue) {
  var plugins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var plugin in plugins) {
    if (plugin && plugins[plugin]) {
      Vue.use(plugins[plugin]);
    }
  }
};
/**
 * Load a component.
 * @param {object} Vue
 * @param {string} Component name
 * @param {object} Component definition
 */


exports.registerPlugins = registerPlugins;

var registerComponent = function registerComponent(Vue, name, def) {
  if (Vue && name && def) {
    Vue.component(name, def);
  }
};
/**
 * Load a group of components.
 * @param {object} Vue
 * @param {object} Object of component definitions
 */


exports.registerComponent = registerComponent;

var registerComponents = function registerComponents(Vue) {
  var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var component in components) {
    registerComponent(Vue, component, components[component]);
  }
};
/**
 * Load a directive.
 * @param {object} Vue
 * @param {string} Directive name
 * @param {object} Directive definition
 */


exports.registerComponents = registerComponents;

var registerDirective = function registerDirective(Vue, name, def) {
  if (Vue && name && def) {
    Vue.directive(name, def);
  }
};
/**
 * Load a group of directives.
 * @param {object} Vue
 * @param {object} Object of directive definitions
 */


exports.registerDirective = registerDirective;

var registerDirectives = function registerDirectives(Vue) {
  var directives = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var directive in directives) {
    registerDirective(Vue, directive, directives[directive]);
  }
};
/**
 * Install plugin if window.Vue available
 * @param {object} Plugin definition
 */


exports.registerDirectives = registerDirectives;

var vueUse = function vueUse(VuePlugin) {
  /* istanbul ignore next */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
  }
};

exports.vueUse = vueUse;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/popover.class.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/popover.class.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _tooltip = __webpack_require__(/*! ./tooltip.class */ "./node_modules/bootstrap-vue/es/utils/tooltip.class.js");

var _dom = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'popover';
var CLASS_PREFIX = 'bs-popover';
var BS_CLASS_PREFIX_REGEX = new RegExp("\\b".concat(CLASS_PREFIX, "\\S+"), 'g');

var Defaults = _objectSpread({}, _tooltip.default.Default, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});

var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};
var Selector = {
  TITLE: '.popover-header',
  CONTENT: '.popover-body'
  /* istanbul ignore next: dificult to test in Jest/JSDOM environment */

};

var PopOver =
/*#__PURE__*/
function (_ToolTip) {
  _inherits(PopOver, _ToolTip);

  function PopOver() {
    _classCallCheck(this, PopOver);

    return _possibleConstructorReturn(this, _getPrototypeOf(PopOver).apply(this, arguments));
  }

  _createClass(PopOver, [{
    key: "isWithContent",
    // Method overrides
    value: function isWithContent(tip)
    /* istanbul ignore next */
    {
      tip = tip || this.$tip;

      if (!tip) {
        return false;
      }

      var hasTitle = Boolean(((0, _dom.select)(Selector.TITLE, tip) || {}).innerHTML);
      var hasContent = Boolean(((0, _dom.select)(Selector.CONTENT, tip) || {}).innerHTML);
      return hasTitle || hasContent;
    }
  }, {
    key: "addAttachmentClass",
    value: function addAttachmentClass(attachment)
    /* istanbul ignore next */
    {
      (0, _dom.addClass)(this.getTipElement(), "".concat(CLASS_PREFIX, "-").concat(attachment));
    }
  }, {
    key: "setContent",
    value: function setContent(tip)
    /* istanbul ignore next */
    {
      // we use append for html objects to maintain js events/components
      this.setElementContent((0, _dom.select)(Selector.TITLE, tip), this.getTitle());
      this.setElementContent((0, _dom.select)(Selector.CONTENT, tip), this.getContent());
      (0, _dom.removeClass)(tip, ClassName.FADE);
      (0, _dom.removeClass)(tip, ClassName.SHOW);
    } // This method may look identical to ToolTip version, but it uses a different RegEx defined above

  }, {
    key: "cleanTipClass",
    value: function cleanTipClass()
    /* istanbul ignore next */
    {
      var tip = this.getTipElement();
      var tabClass = tip.className.match(BS_CLASS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.forEach(function (cls) {
          (0, _dom.removeClass)(tip, cls);
        });
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle()
    /* istanbul ignore next */
    {
      var title = this.$config.title || '';

      if (typeof title === 'function') {
        title = title(this.$element);
      }

      if (_typeof(title) === 'object' && title.nodeType && !title.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        title = '';
      }

      if (typeof title === 'string') {
        title = title.trim();
      }

      if (!title) {
        // Try and grab element's title attribute
        title = (0, _dom.getAttr)(this.$element, 'title') || (0, _dom.getAttr)(this.$element, 'data-original-title') || '';
        title = title.trim();
      }

      return title;
    } // New methods

  }, {
    key: "getContent",
    value: function getContent()
    /* istanbul ignore next */
    {
      var content = this.$config.content || '';

      if (typeof content === 'function') {
        content = content(this.$element);
      }

      if (_typeof(content) === 'object' && content.nodeType && !content.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        content = '';
      }

      if (typeof content === 'string') {
        content = content.trim();
      }

      return content;
    }
  }], [{
    key: "Default",
    // Getter overrides
    get: function get()
    /* istanbul ignore next */
    {
      return Defaults;
    }
  }, {
    key: "NAME",
    get: function get()
    /* istanbul ignore next */
    {
      return NAME;
    }
  }]);

  return PopOver;
}(_tooltip.default);

var _default = PopOver;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/prefix-prop-name.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/prefix-prop-name.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _upperFirst = __webpack_require__(/*! ./upper-first */ "./node_modules/bootstrap-vue/es/utils/upper-first.js");

/**
 * @param {string} prefix
 * @param {string} value
 */
var prefixPropName = function prefixPropName(prefix, value) {
  return prefix + (0, _upperFirst.default)(value);
};

var _default = prefixPropName;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/range.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/range.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * @param {number} length
 * @return {Array}
 */
var range = function range(length) {
  return Array.apply(null, {
    length: length
  });
};

var _default = range;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/router.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.computeHref = exports.computeRel = exports.computeTag = exports.isRouterLink = exports.parseQuery = exports.stringifyQueryObj = void 0;

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _toString = __webpack_require__(/*! ./to-string */ "./node_modules/bootstrap-vue/es/utils/to-string.js");

var ANCHOR_TAG = 'a'; // Precompile RegExp

var commaRE = /%2C/g;
var encodeReserveRE = /[!'()*]/g; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var encode = function encode(str) {
  return encodeURIComponent((0, _toString.default)(str)).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!(0, _object.isPlainObject)(obj)) {
    return '';
  }

  var query = (0, _object.keys)(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    } else if (val === null) {
      return encode(key);
    } else if ((0, _array.isArray)(val)) {
      return val.reduce(function (results, val2) {
        if (val2 === null) {
          results.push(encode(key));
        } else if (val2 !== undefined) {
          // Faster than string interpolation
          results.push(encode(key) + '=' + encode(val2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return encode(key) + '=' + encode(val);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};

exports.stringifyQueryObj = stringifyQueryObj;

var parseQuery = function parseQuery(query) {
  var parsed = {};
  query = (0, _toString.default)(query).trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (parsed[key] === undefined) {
      parsed[key] = val;
    } else if ((0, _array.isArray)(parsed[key])) {
      parsed[key].push(val);
    } else {
      parsed[key] = [parsed[key], val];
    }
  });
  return parsed;
};

exports.parseQuery = parseQuery;

var isRouterLink = function isRouterLink(tag) {
  return tag !== ANCHOR_TAG;
};

exports.isRouterLink = isRouterLink;

var computeTag = function computeTag() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      to = _ref.to,
      disabled = _ref.disabled;

  var thisOrParent = arguments.length > 1 ? arguments[1] : undefined;
  return thisOrParent.$router && to && !disabled ? thisOrParent.$nuxt ? 'nuxt-link' : 'router-link' : ANCHOR_TAG;
};

exports.computeTag = computeTag;

var computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  if (target === '_blank' && rel === null) {
    return 'noopener';
  }

  return rel || null;
};

exports.computeRel = computeRel;

var computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // We've already checked the $router in computeTag(), so isRouterLink() indicates a live router.
  // When deferring to Vue Router's router-link, don't use the href attribute at all.
  // We return null, and then remove href from the attributes passed to router-link
  if (isRouterLink(tag)) {
    return null;
  } // Return `href` when explicitly provided


  if (href) {
    return href;
  } // Reconstruct `href` when `to` used, but no router


  if (to) {
    // Fallback to `to` prop (if `to` is a string)
    if (typeof to === 'string') {
      return to || toFallback;
    } // Fallback to `to.path + to.query + to.hash` prop (if `to` is an object)


    if ((0, _object.isPlainObject)(to) && (to.path || to.query || to.hash)) {
      var path = (0, _toString.default)(to.path);
      var query = stringifyQueryObj(to.query);
      var hash = (0, _toString.default)(to.hash);
      hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
      return "".concat(path).concat(query).concat(hash) || toFallback;
    }
  } // If nothing is provided return the fallback


  return fallback;
};

exports.computeHref = computeHref;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/ssr.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/ssr.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HTMLElement = void 0;
// Polyfills for SSR
var isSSR = typeof window === 'undefined';
var HTMLElement = isSSR ? Object : window.HTMLElement;
exports.HTMLElement = HTMLElement;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/stable-sort.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/stable-sort.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/*
 * Consistent and stable sort function across JavaScript platforms
 *
 * Inconsistent sorts can cause SSR problems between client and server
 * such as in <b-table> if sortBy is applied to the data on server side render.
 * Chrome and V8 native sorts are inconsistent/unstable
 *
 * This function uses native sort with fallback to index compare when the a and b
 * compare returns 0
 *
 * Algorithm based on:
 * https://stackoverflow.com/questions/1427608/fast-stable-sorting-algorithm-implementation-in-javascript/45422645#45422645
 *
 * @param {array} array to sort
 * @param {function} sort compare function
 * @return {array}
 */
var stableSort = function stableSort(array, compareFn) {
  // Using `.bind(compareFn)` on the wrapped anonymous function improves
  // performance by avoiding the function call setup. We don't use an arrow
  // function here as it binds `this` to the `stableSort` context rather than
  // the `compareFn` context, which wouldn't give us the performance increase.
  return array.map(function (a, index) {
    return [index, a];
  }).sort(function (a, b) {
    return this(a[1], b[1]) || a[0] - b[0];
  }.bind(compareFn)).map(function (e) {
    return e[1];
  });
};

var _default = stableSort;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/startcase.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/startcase.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Converts a string, including strings in camelCase or snake_case, into Start Case (a variant
 * of Title Case where all words start with a capital letter), it keeps original single quote
 * and hyphen in the word.
 *
 * Copyright (c) 2017 Compass (MIT)
 * https://github.com/UrbanCompass/to-start-case
 * @author Zhuoyuan Zhang <https://github.com/drawyan>
 * @author Wei Wang <https://github.com/onlywei>
 *
 *
 *   'management_companies' to 'Management Companies'
 *   'managementCompanies' to 'Management Companies'
 *   `hell's kitchen` to `Hell's Kitchen`
 *   `co-op` to `Co-op`
 *
 * @param {String} str
 * @returns {String}
 */
var startCase = function startCase(str) {
  return str.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, function (str, $1, $2) {
    return $1 + ' ' + $2;
  }).replace(/(\s|^)(\w)/g, function (str, $1, $2) {
    return $1 + $2.toUpperCase();
  });
};

var _default = startCase;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/suffix-prop-name.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/suffix-prop-name.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _upperFirst = __webpack_require__(/*! ./upper-first */ "./node_modules/bootstrap-vue/es/utils/upper-first.js");

/**
 * Suffix can be a falsey value so nothing is appended to string.
 * (helps when looping over props & some shouldn't change)
 * Use data last parameters to allow for currying.
 * @param {string} suffix
 * @param {string} str
 */
var suffixPropName = function suffixPropName(suffix, str) {
  return str + (suffix ? (0, _upperFirst.default)(suffix) : '');
};

var _default = suffixPropName;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/target.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/target.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.unbindTargets = exports.bindTargets = void 0;

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _dom = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var allListenTypes = {
  hover: true,
  click: true,
  focus: true
};
var BVBoundListeners = '__BV_boundEventListeners__';

var bindTargets = function bindTargets(vnode, binding, listenTypes, fn) {
  var targets = (0, _object.keys)(binding.modifiers || {}).filter(function (t) {
    return !allListenTypes[t];
  });

  if (binding.value) {
    targets.push(binding.value);
  }

  var listener = function listener() {
    fn({
      targets: targets,
      vnode: vnode
    });
  };

  (0, _object.keys)(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      (0, _dom.eventOn)(vnode.elm, type, listener);
      var boundListeners = vnode.elm[BVBoundListeners] || {};
      boundListeners[type] = boundListeners[type] || [];
      boundListeners[type].push(listener);
      vnode.elm[BVBoundListeners] = boundListeners;
    }
  }); // Return the list of targets

  return targets;
};

exports.bindTargets = bindTargets;

var unbindTargets = function unbindTargets(vnode, binding, listenTypes) {
  (0, _object.keys)(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      var boundListeners = vnode.elm[BVBoundListeners] && vnode.elm[BVBoundListeners][type];

      if (boundListeners) {
        boundListeners.forEach(function (listener) {
          return (0, _dom.eventOff)(vnode.elm, type, listener);
        });
        delete vnode.elm[BVBoundListeners][type];
      }
    }
  });
};

exports.unbindTargets = unbindTargets;
var _default = bindTargets;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/to-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/to-string.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

/**
 * Convert a value to a string that can be rendered.
 */
var toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return val === null || val === undefined ? '' : (0, _array.isArray)(val) || (0, _object.isPlainObject)(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
};

var _default = toString;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/tooltip.class.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/tooltip.class.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

var _bvEvent = __webpack_require__(/*! ./bv-event.class */ "./node_modules/bootstrap-vue/es/utils/bv-event.class.js");

var _noop = __webpack_require__(/*! ./noop */ "./node_modules/bootstrap-vue/es/utils/noop.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _dom = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NAME = 'tooltip';
var CLASS_PREFIX = 'bs-tooltip';
var BS_CLASS_PREFIX_REGEX = new RegExp("\\b".concat(CLASS_PREFIX, "\\S+"), 'g');
var TRANSITION_DURATION = 150; // Modal $root hidden event

var MODAL_CLOSE_EVENT = 'bv::modal::hidden'; // Modal container for appending tooltip/popover

var MODAL_CLASS = '.modal-content';
var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
  TOPLEFT: 'top',
  TOPRIGHT: 'top',
  RIGHTTOP: 'right',
  RIGHTBOTTOM: 'right',
  BOTTOMLEFT: 'bottom',
  BOTTOMRIGHT: 'bottom',
  LEFTTOP: 'left',
  LEFTBOTTOM: 'left'
};
var OffsetMap = {
  AUTO: 0,
  TOPLEFT: -1,
  TOP: 0,
  TOPRIGHT: +1,
  RIGHTTOP: -1,
  RIGHT: 0,
  RIGHTBOTTOM: +1,
  BOTTOMLEFT: -1,
  BOTTOM: 0,
  BOTTOMRIGHT: +1,
  LEFTTOP: -1,
  LEFT: 0,
  LEFTBOTTOM: +1
};
var HoverState = {
  SHOW: 'show',
  OUT: 'out'
};
var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};
var Selector = {
  TOOLTIP: '.tooltip',
  TOOLTIP_INNER: '.tooltip-inner',
  ARROW: '.arrow'
};
var Defaults = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  placement: 'top',
  offset: 0,
  arrowPadding: 6,
  container: false,
  fallbackPlacement: 'flip',
  callbacks: {},
  boundary: 'scrollParent' // Transition event names

};
var TransitionEndEvents = {
  WebkitTransition: ['webkitTransitionEnd'],
  MozTransition: ['transitionend'],
  OTransition: ['otransitionend', 'oTransitionEnd'],
  transition: ['transitionend'] // Client-side tip ID counter for aria-describedby attribute
  // Each tooltip requires a unique client side ID

};
var NEXTID = 1;
/* istanbul ignore next */

var generateId = function generateId(name) {
  return "__BV_".concat(name, "_").concat(NEXTID++, "__");
};
/*
 * ToolTip class definition
 */

/* istanbul ignore next: difficult to test in Jest/JSDOM environment */


var ToolTip =
/*#__PURE__*/
function () {
  // Main constructor
  function ToolTip(element, config, $root) {
    _classCallCheck(this, ToolTip);

    // New tooltip object
    this.$isEnabled = true;
    this.$fadeTimeout = null;
    this.$hoverTimeout = null;
    this.$visibleInterval = null;
    this.$hoverState = '';
    this.$activeTrigger = {};
    this.$popper = null;
    this.$element = element;
    this.$tip = null;
    this.$id = generateId(this.constructor.NAME);
    this.$root = $root || null;
    this.$routeWatcher = null; // We use a bound version of the following handlers for root/modal
    // listeners to maintain the 'this' context

    this.$forceHide = this.forceHide.bind(this);
    this.$doHide = this.doHide.bind(this);
    this.$doShow = this.doShow.bind(this);
    this.$doDisable = this.doDisable.bind(this);
    this.$doEnable = this.doEnable.bind(this);
    this._noop = _noop.default.bind(this); // Set the configuration

    this.updateConfig(config);
  } // NOTE: Overridden by PopOver class


  _createClass(ToolTip, [{
    key: "updateConfig",
    // Update config
    value: function updateConfig(config) {
      // Merge config into defaults. We use "this" here because PopOver overrides Default
      var updatedConfig = _objectSpread({}, this.constructor.Default, config); // Sanitize delay


      if (config.delay && typeof config.delay === 'number') {
        updatedConfig.delay = {
          show: config.delay,
          hide: config.delay
        };
      } // Title for tooltip and popover


      if (config.title && typeof config.title === 'number') {
        updatedConfig.title = config.title.toString();
      } // Content only for popover


      if (config.content && typeof config.content === 'number') {
        updatedConfig.content = config.content.toString();
      } // Hide element original title if needed


      this.fixTitle(); // Update the config

      this.$config = updatedConfig; // Stop/Restart listening

      this.unListen();
      this.listen();
    } // Destroy this instance

  }, {
    key: "destroy",
    value: function destroy() {
      // Stop listening to trigger events
      this.unListen(); // Disable while open listeners/watchers

      this.setWhileOpenListeners(false); // Clear any timeouts

      clearTimeout(this.$hoverTimeout);
      this.$hoverTimeout = null;
      clearTimeout(this.$fadeTimeout);
      this.$fadeTimeout = null; // Remove popper

      if (this.$popper) {
        this.$popper.destroy();
      }

      this.$popper = null; // Remove tip from document

      if (this.$tip && this.$tip.parentElement) {
        this.$tip.parentElement.removeChild(this.$tip);
      }

      this.$tip = null; // Null out other properties

      this.$id = null;
      this.$isEnabled = null;
      this.$root = null;
      this.$element = null;
      this.$config = null;
      this.$hoverState = null;
      this.$activeTrigger = null;
      this.$forceHide = null;
      this.$doHide = null;
      this.$doShow = null;
      this.$doDisable = null;
      this.$doEnable = null;
    }
  }, {
    key: "enable",
    value: function enable() {
      // Create a non-cancelable BvEvent
      var enabledEvt = new _bvEvent.default('enabled', {
        cancelable: false,
        target: this.$element,
        relatedTarget: null
      });
      this.$isEnabled = true;
      this.emitEvent(enabledEvt);
    }
  }, {
    key: "disable",
    value: function disable() {
      // Create a non-cancelable BvEvent
      var disabledEvt = new _bvEvent.default('disabled', {
        cancelable: false,
        target: this.$element,
        relatedTarget: null
      });
      this.$isEnabled = false;
      this.emitEvent(disabledEvt);
    } // Click toggler

  }, {
    key: "toggle",
    value: function toggle(event) {
      if (!this.$isEnabled) {
        return;
      }

      if (event) {
        this.$activeTrigger.click = !this.$activeTrigger.click;

        if (this.isWithActiveTrigger()) {
          this.enter(null);
        } else {
          this.leave(null);
        }
      } else {
        if ((0, _dom.hasClass)(this.getTipElement(), ClassName.SHOW)) {
          this.leave(null);
        } else {
          this.enter(null);
        }
      }
    } // Show tooltip

  }, {
    key: "show",
    value: function show() {
      var _this = this;

      if (!document.body.contains(this.$element) || !(0, _dom.isVisible)(this.$element)) {
        // If trigger element isn't in the DOM or is not visible
        return;
      } // Build tooltip element (also sets this.$tip)


      var tip = this.getTipElement();
      this.fixTitle();
      this.setContent(tip);

      if (!this.isWithContent(tip)) {
        // If no content, don't bother showing
        this.$tip = null;
        return;
      } // Set ID on tip and aria-describedby on element


      (0, _dom.setAttr)(tip, 'id', this.$id);
      this.addAriaDescribedby(); // Set animation on or off

      if (this.$config.animation) {
        (0, _dom.addClass)(tip, ClassName.FADE);
      } else {
        (0, _dom.removeClass)(tip, ClassName.FADE);
      }

      var placement = this.getPlacement();
      var attachment = this.constructor.getAttachment(placement);
      this.addAttachmentClass(attachment); // Create a cancelable BvEvent

      var showEvt = new _bvEvent.default('show', {
        cancelable: true,
        target: this.$element,
        relatedTarget: tip
      });
      this.emitEvent(showEvt);

      if (showEvt.defaultPrevented) {
        // Don't show if event cancelled
        this.$tip = null;
        return;
      } // Insert tooltip if needed


      var container = this.getContainer();

      if (!document.body.contains(tip)) {
        container.appendChild(tip);
      } // Refresh popper


      this.removePopper();
      this.$popper = new _popper.default(this.$element, tip, this.getPopperConfig(placement, tip)); // Transitionend callback

      var complete = function complete() {
        if (_this.$config.animation) {
          _this.fixTransition(tip);
        }

        var prevHoverState = _this.$hoverState;
        _this.$hoverState = null;

        if (prevHoverState === HoverState.OUT) {
          _this.leave(null);
        } // Create a non-cancelable BvEvent


        var shownEvt = new _bvEvent.default('shown', {
          cancelable: false,
          target: _this.$element,
          relatedTarget: tip
        });

        _this.emitEvent(shownEvt);
      }; // Enable while open listeners/watchers


      this.setWhileOpenListeners(true); // Show tip

      (0, _dom.addClass)(tip, ClassName.SHOW); // Start the transition/animation

      this.transitionOnce(tip, complete);
    } // Handler for periodic visibility check

  }, {
    key: "visibleCheck",
    value: function visibleCheck(on) {
      var _this2 = this;

      clearInterval(this.$visibleInterval);
      this.$visibleInterval = null;

      if (on) {
        this.$visibleInterval = setInterval(function () {
          var tip = _this2.getTipElement();

          if (tip && !(0, _dom.isVisible)(_this2.$element) && (0, _dom.hasClass)(tip, ClassName.SHOW)) {
            // Element is no longer visible, so force-hide the tooltip
            _this2.forceHide();
          }
        }, 100);
      }
    }
  }, {
    key: "setWhileOpenListeners",
    value: function setWhileOpenListeners(on) {
      // Modal close events
      this.setModalListener(on); // Periodic $element visibility check
      // For handling when tip is in <keepalive>, tabs, carousel, etc

      this.visibleCheck(on); // Route change events

      this.setRouteWatcher(on); // On-touch start listeners

      this.setOnTouchStartListener(on);

      if (on && /(focus|blur)/.test(this.$config.trigger)) {
        // If focus moves between trigger element and tip container, don't close
        (0, _dom.eventOn)(this.$tip, 'focusout', this);
      } else {
        (0, _dom.eventOff)(this.$tip, 'focusout', this);
      }
    } // Force hide of tip (internal method)

  }, {
    key: "forceHide",
    value: function forceHide() {
      if (!this.$tip || !(0, _dom.hasClass)(this.$tip, ClassName.SHOW)) {
        return;
      } // Disable while open listeners/watchers


      this.setWhileOpenListeners(false); // Clear any hover enter/leave event

      clearTimeout(this.$hoverTimeout);
      this.$hoverTimeout = null;
      this.$hoverState = ''; // Hide the tip

      this.hide(null, true);
    } // Hide tooltip

  }, {
    key: "hide",
    value: function hide(callback, force) {
      var _this3 = this;

      var tip = this.$tip;

      if (!tip) {
        return;
      } // Create a cancelable BvEvent


      var hideEvt = new _bvEvent.default('hide', {
        // We disable cancelling if force is true
        cancelable: !force,
        target: this.$element,
        relatedTarget: tip
      });
      this.emitEvent(hideEvt);

      if (hideEvt.defaultPrevented) {
        // Don't hide if event cancelled
        return;
      } // Transitionend callback

      /* istanbul ignore next */


      var complete = function complete() {
        if (_this3.$hoverState !== HoverState.SHOW && tip.parentNode) {
          // Remove tip from DOM, and force recompile on next show
          tip.parentNode.removeChild(tip);

          _this3.removeAriaDescribedby();

          _this3.removePopper();

          _this3.$tip = null;
        }

        if (callback) {
          callback();
        } // Create a non-cancelable BvEvent


        var hiddenEvt = new _bvEvent.default('hidden', {
          cancelable: false,
          target: _this3.$element,
          relatedTarget: null
        });

        _this3.emitEvent(hiddenEvt);
      }; // Disable while open listeners/watchers


      this.setWhileOpenListeners(false); // If forced close, disable animation

      if (force) {
        (0, _dom.removeClass)(tip, ClassName.FADE);
      } // Hide tip


      (0, _dom.removeClass)(tip, ClassName.SHOW);
      this.$activeTrigger.click = false;
      this.$activeTrigger.focus = false;
      this.$activeTrigger.hover = false; // Start the hide transition

      this.transitionOnce(tip, complete);
      this.$hoverState = '';
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(evt) {
      var evtName = evt.type;

      if (this.$root && this.$root.$emit) {
        // Emit an event on $root
        this.$root.$emit("bv::".concat(this.constructor.NAME, "::").concat(evtName), evt);
      }

      var callbacks = this.$config.callbacks || {};

      if (typeof callbacks[evtName] === 'function') {
        callbacks[evtName](evt);
      }
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      var container = this.$config.container;
      var body = document.body; // If we are in a modal, we append to the modal instead of body,
      // unless a container is specified

      return container === false ? (0, _dom.closest)(MODAL_CLASS, this.$element) || body : (0, _dom.select)(container, body) || body;
    } // Will be overridden by PopOver if needed

  }, {
    key: "addAriaDescribedby",
    value: function addAriaDescribedby() {
      // Add aria-describedby on trigger element, without removing any other IDs
      var desc = (0, _dom.getAttr)(this.$element, 'aria-describedby') || '';
      desc = desc.split(/\s+/).concat(this.$id).join(' ').trim();
      (0, _dom.setAttr)(this.$element, 'aria-describedby', desc);
    } // Will be overridden by PopOver if needed

  }, {
    key: "removeAriaDescribedby",
    value: function removeAriaDescribedby() {
      var _this4 = this;

      var desc = (0, _dom.getAttr)(this.$element, 'aria-describedby') || '';
      desc = desc.split(/\s+/).filter(function (d) {
        return d !== _this4.$id;
      }).join(' ').trim();

      if (desc) {
        (0, _dom.setAttr)(this.$element, 'aria-describedby', desc);
      } else {
        (0, _dom.removeAttr)(this.$element, 'aria-describedby');
      }
    }
  }, {
    key: "removePopper",
    value: function removePopper() {
      if (this.$popper) {
        this.$popper.destroy();
      }

      this.$popper = null;
    }
    /* istanbul ignore next */

  }, {
    key: "transitionOnce",
    value: function transitionOnce(tip, complete) {
      var _this5 = this;

      var transEvents = this.getTransitionEndEvents();
      var called = false;
      clearTimeout(this.$fadeTimeout);
      this.$fadeTimeout = null;

      var fnOnce = function fnOnce() {
        if (called) {
          return;
        }

        called = true;
        clearTimeout(_this5.$fadeTimeout);
        _this5.$fadeTimeout = null;
        transEvents.forEach(function (evtName) {
          (0, _dom.eventOff)(tip, evtName, fnOnce);
        }); // Call complete callback

        complete();
      };

      if ((0, _dom.hasClass)(tip, ClassName.FADE)) {
        transEvents.forEach(function (evtName) {
          (0, _dom.eventOn)(tip, evtName, fnOnce);
        }); // Fallback to setTimeout()

        this.$fadeTimeout = setTimeout(fnOnce, TRANSITION_DURATION);
      } else {
        fnOnce();
      }
    } // What transitionend event(s) to use? (returns array of event names)

  }, {
    key: "getTransitionEndEvents",
    value: function getTransitionEndEvents() {
      for (var name in TransitionEndEvents) {
        if (this.$element.style[name] !== undefined) {
          return TransitionEndEvents[name];
        }
      } // Fallback


      return [];
    }
  }, {
    key: "update",
    value: function update() {
      if (this.$popper !== null) {
        this.$popper.scheduleUpdate();
      }
    } // NOTE: Overridden by PopOver class

  }, {
    key: "isWithContent",
    value: function isWithContent(tip) {
      tip = tip || this.$tip;

      if (!tip) {
        return false;
      }

      return Boolean(((0, _dom.select)(Selector.TOOLTIP_INNER, tip) || {}).innerHTML);
    } // NOTE: Overridden by PopOver class

  }, {
    key: "addAttachmentClass",
    value: function addAttachmentClass(attachment) {
      (0, _dom.addClass)(this.getTipElement(), "".concat(CLASS_PREFIX, "-").concat(attachment));
    }
  }, {
    key: "getTipElement",
    value: function getTipElement() {
      if (!this.$tip) {
        // Try and compile user supplied template, or fallback to default template
        this.$tip = this.compileTemplate(this.$config.template) || this.compileTemplate(this.constructor.Default.template);
      } // Add tab index so tip can be focused, and to allow it to be
      // set as relatedTarget in focusin/out events


      this.$tip.tabIndex = -1;
      return this.$tip;
    }
  }, {
    key: "compileTemplate",
    value: function compileTemplate(html) {
      if (!html || typeof html !== 'string') {
        return null;
      }

      var div = document.createElement('div');
      div.innerHTML = html.trim();
      var node = div.firstElementChild ? div.removeChild(div.firstElementChild) : null;
      div = null;
      return node;
    } // NOTE: Overridden by PopOver class

  }, {
    key: "setContent",
    value: function setContent(tip) {
      this.setElementContent((0, _dom.select)(Selector.TOOLTIP_INNER, tip), this.getTitle());
      (0, _dom.removeClass)(tip, ClassName.FADE);
      (0, _dom.removeClass)(tip, ClassName.SHOW);
    }
  }, {
    key: "setElementContent",
    value: function setElementContent(container, content) {
      if (!container) {
        // If container element doesn't exist, just return
        return;
      }

      var allowHtml = this.$config.html;

      if (_typeof(content) === 'object' && content.nodeType) {
        // Content is a DOM node
        if (allowHtml) {
          if (content.parentElement !== container) {
            container.innerHTML = '';
            container.appendChild(content);
          }
        } else {
          container.innerText = content.innerText;
        }
      } else {
        // We have a plain HTML string or Text
        container[allowHtml ? 'innerHTML' : 'innerText'] = content;
      }
    } // NOTE: Overridden by PopOver class

  }, {
    key: "getTitle",
    value: function getTitle() {
      var title = this.$config.title || '';

      if (typeof title === 'function') {
        // Call the function to get the title value
        title = title(this.$element);
      }

      if (_typeof(title) === 'object' && title.nodeType && !title.innerHTML.trim()) {
        // We have a DOM node, but without inner content,
        // so just return empty string
        title = '';
      }

      if (typeof title === 'string') {
        title = title.trim();
      }

      if (!title) {
        // If an explicit title is not given, try element's title attributes
        title = (0, _dom.getAttr)(this.$element, 'title') || (0, _dom.getAttr)(this.$element, 'data-original-title') || '';
        title = title.trim();
      }

      return title;
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this6 = this;

      var triggers = this.$config.trigger.trim().split(/\s+/);
      var el = this.$element; // Listen for global show/hide events

      this.setRootListener(true); // Using 'this' as the handler will get automatically directed to
      // this.handleEvent and maintain our binding to 'this'

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          (0, _dom.eventOn)(el, 'click', _this6);
        } else if (trigger === 'focus') {
          (0, _dom.eventOn)(el, 'focusin', _this6);
          (0, _dom.eventOn)(el, 'focusout', _this6);
        } else if (trigger === 'blur') {
          // Used to close $tip when element looses focus
          (0, _dom.eventOn)(el, 'focusout', _this6);
        } else if (trigger === 'hover') {
          (0, _dom.eventOn)(el, 'mouseenter', _this6);
          (0, _dom.eventOn)(el, 'mouseleave', _this6);
        }
      }, this);
    }
  }, {
    key: "unListen",
    value: function unListen() {
      var _this7 = this;

      var events = ['click', 'focusin', 'focusout', 'mouseenter', 'mouseleave']; // Using "this" as the handler will get automatically directed to this.handleEvent

      events.forEach(function (evt) {
        (0, _dom.eventOff)(_this7.$element, evt, _this7);
      }, this); // Stop listening for global show/hide/enable/disable events

      this.setRootListener(false);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      // This special method allows us to use "this" as the event handlers
      if ((0, _dom.isDisabled)(this.$element)) {
        // If disabled, don't do anything. Note: If tip is shown before element gets
        // disabled, then tip not close until no longer disabled or forcefully closed.
        return;
      }

      if (!this.$isEnabled) {
        // If not enable
        return;
      }

      var type = e.type;
      var target = e.target;
      var relatedTarget = e.relatedTarget;
      var $element = this.$element;
      var $tip = this.$tip;

      if (type === 'click') {
        this.toggle(e);
      } else if (type === 'focusin' || type === 'mouseenter') {
        this.enter(e);
      } else if (type === 'focusout') {
        // target is the element which is loosing focus
        // and relatedTarget is the element gaining focus
        if ($tip && $element && $element.contains(target) && $tip.contains(relatedTarget)) {
          // If focus moves from $element to $tip, don't trigger a leave
          return;
        }

        if ($tip && $element && $tip.contains(target) && $element.contains(relatedTarget)) {
          // If focus moves from $tip to $element, don't trigger a leave
          return;
        }

        if ($tip && $tip.contains(target) && $tip.contains(relatedTarget)) {
          // If focus moves within $tip, don't trigger a leave
          return;
        }

        if ($element && $element.contains(target) && $element.contains(relatedTarget)) {
          // If focus moves within $element, don't trigger a leave
          return;
        } // Otherwise trigger a leave


        this.leave(e);
      } else if (type === 'mouseleave') {
        this.leave(e);
      }
    }
    /* istanbul ignore next */

  }, {
    key: "setRouteWatcher",
    value: function setRouteWatcher(on) {
      var _this8 = this;

      if (on) {
        this.setRouteWatcher(false);

        if (this.$root && Boolean(this.$root.$route)) {
          this.$routeWatcher = this.$root.$watch('$route', function (newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            } // If route has changed, we force hide the tooltip/popover


            _this8.forceHide();
          });
        }
      } else {
        if (this.$routeWatcher) {
          // Cancel the route watcher by calling the stored reference
          this.$routeWatcher();
          this.$routeWatcher = null;
        }
      }
    }
    /* istanbul ignore next */

  }, {
    key: "setModalListener",
    value: function setModalListener(on) {
      var modal = (0, _dom.closest)(MODAL_CLASS, this.$element);

      if (!modal) {
        // If we are not in a modal, don't worry. be happy
        return;
      } // We can listen for modal hidden events on $root


      if (this.$root) {
        this.$root[on ? '$on' : '$off'](MODAL_CLOSE_EVENT, this.$forceHide);
      }
    }
    /* istanbul ignore next */

  }, {
    key: "setRootListener",
    value: function setRootListener(on) {
      // Listen for global 'bv::{hide|show}::{tooltip|popover}' hide request event
      if (this.$root) {
        this.$root[on ? '$on' : '$off']("bv::hide::".concat(this.constructor.NAME), this.$doHide);
        this.$root[on ? '$on' : '$off']("bv::show::".concat(this.constructor.NAME), this.$doShow);
        this.$root[on ? '$on' : '$off']("bv::disable::".concat(this.constructor.NAME), this.$doDisable);
        this.$root[on ? '$on' : '$off']("bv::enable::".concat(this.constructor.NAME), this.$doEnable);
      }
    }
  }, {
    key: "doHide",
    value: function doHide(id) {
      // Programmatically hide tooltip or popover
      if (!id) {
        // Close all tooltips or popovers
        this.forceHide();
      } else if (this.$element && this.$element.id && this.$element.id === id) {
        // Close this specific tooltip or popover
        this.hide();
      }
    }
  }, {
    key: "doShow",
    value: function doShow(id) {
      // Programmatically show tooltip or popover
      if (!id) {
        // Open all tooltips or popovers
        this.show();
      } else if (id && this.$element && this.$element.id && this.$element.id === id) {
        // Show this specific tooltip or popover
        this.show();
      }
    }
  }, {
    key: "doDisable",
    value: function doDisable(id) {
      // Programmatically disable tooltip or popover
      if (!id) {
        // Disable all tooltips or popovers
        this.disable();
      } else if (this.$element && this.$element.id && this.$element.id === id) {
        // Disable this specific tooltip or popover
        this.disable();
      }
    }
  }, {
    key: "doEnable",
    value: function doEnable(id) {
      // Programmatically enable tooltip or popover
      if (!id) {
        // Enable all tooltips or popovers
        this.enable();
      } else if (this.$element && this.$element.id && this.$element.id === id) {
        // Enable this specific tooltip or popover
        this.enable();
      }
    }
    /* istanbul ignore next */

  }, {
    key: "setOnTouchStartListener",
    value: function setOnTouchStartListener(on) {
      var _this9 = this;

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children
      // Only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        (0, _array.from)(document.body.children).forEach(function (el) {
          if (on) {
            (0, _dom.eventOn)(el, 'mouseover', _this9._noop);
          } else {
            (0, _dom.eventOff)(el, 'mouseover', _this9._noop);
          }
        });
      }
    }
  }, {
    key: "fixTitle",
    value: function fixTitle() {
      var el = this.$element;

      var titleType = _typeof((0, _dom.getAttr)(el, 'data-original-title'));

      if ((0, _dom.getAttr)(el, 'title') || titleType !== 'string') {
        (0, _dom.setAttr)(el, 'data-original-title', (0, _dom.getAttr)(el, 'title') || '');
        (0, _dom.setAttr)(el, 'title', '');
      }
    } // Enter handler

    /* istanbul ignore next */

  }, {
    key: "enter",
    value: function enter(e) {
      var _this10 = this;

      if (e) {
        this.$activeTrigger[e.type === 'focusin' ? 'focus' : 'hover'] = true;
      }

      if ((0, _dom.hasClass)(this.getTipElement(), ClassName.SHOW) || this.$hoverState === HoverState.SHOW) {
        this.$hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(this.$hoverTimeout);
      this.$hoverState = HoverState.SHOW;

      if (!this.$config.delay || !this.$config.delay.show) {
        this.show();
        return;
      }

      this.$hoverTimeout = setTimeout(function () {
        if (_this10.$hoverState === HoverState.SHOW) {
          _this10.show();
        }
      }, this.$config.delay.show);
    } // Leave handler

    /* istanbul ignore next */

  }, {
    key: "leave",
    value: function leave(e) {
      var _this11 = this;

      if (e) {
        this.$activeTrigger[e.type === 'focusout' ? 'focus' : 'hover'] = false;

        if (e.type === 'focusout' && /blur/.test(this.$config.trigger)) {
          // Special case for `blur`: we clear out the other triggers
          this.$activeTrigger.click = false;
          this.$activeTrigger.hover = false;
        }
      }

      if (this.isWithActiveTrigger()) {
        return;
      }

      clearTimeout(this.$hoverTimeout);
      this.$hoverState = HoverState.OUT;

      if (!this.$config.delay || !this.$config.delay.hide) {
        this.hide();
        return;
      }

      this.$hoverTimeout = setTimeout(function () {
        if (_this11.$hoverState === HoverState.OUT) {
          _this11.hide();
        }
      }, this.$config.delay.hide);
    }
  }, {
    key: "getPopperConfig",
    value: function getPopperConfig(placement, tip) {
      var _this12 = this;

      return {
        placement: this.constructor.getAttachment(placement),
        modifiers: {
          offset: {
            offset: this.getOffset(placement, tip)
          },
          flip: {
            behavior: this.$config.fallbackPlacement
          },
          arrow: {
            element: '.arrow'
          },
          preventOverflow: {
            padding: this.$config.boundaryPadding,
            boundariesElement: this.$config.boundary
          }
        },
        onCreate: function onCreate(data) {
          // Handle flipping arrow classes
          if (data.originalPlacement !== data.placement) {
            _this12.handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          // Handle flipping arrow classes
          _this12.handlePopperPlacementChange(data);
        }
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(placement, tip) {
      if (!this.$config.offset) {
        var arrow = (0, _dom.select)(Selector.ARROW, tip);
        var arrowOffset = parseFloat((0, _dom.getCS)(arrow).width) + parseFloat(this.$config.arrowPadding);

        switch (OffsetMap[placement.toUpperCase()]) {
          case +1:
            return "+50%p - ".concat(arrowOffset, "px");

          case -1:
            return "-50%p + ".concat(arrowOffset, "px");

          default:
            return 0;
        }
      }

      return this.$config.offset;
    }
  }, {
    key: "getPlacement",
    value: function getPlacement() {
      var placement = this.$config.placement;

      if (typeof placement === 'function') {
        return placement.call(this, this.$tip, this.$element);
      }

      return placement;
    }
  }, {
    key: "isWithActiveTrigger",
    value: function isWithActiveTrigger() {
      for (var trigger in this.$activeTrigger) {
        if (this.$activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    } // NOTE: Overridden by PopOver class

  }, {
    key: "cleanTipClass",
    value: function cleanTipClass() {
      var tip = this.getTipElement();
      var tabClass = tip.className.match(BS_CLASS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.forEach(function (cls) {
          (0, _dom.removeClass)(tip, cls);
        });
      }
    }
  }, {
    key: "handlePopperPlacementChange",
    value: function handlePopperPlacementChange(data) {
      this.cleanTipClass();
      this.addAttachmentClass(this.constructor.getAttachment(data.placement));
    }
  }, {
    key: "fixTransition",
    value: function fixTransition(tip) {
      var initConfigAnimation = this.$config.animation || false;

      if ((0, _dom.getAttr)(tip, 'x-placement') !== null) {
        return;
      }

      (0, _dom.removeClass)(tip, ClassName.FADE);
      this.$config.animation = false;
      this.hide();
      this.show();
      this.$config.animation = initConfigAnimation;
    }
  }], [{
    key: "getAttachment",
    value: function getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }
  }, {
    key: "Default",
    get: function get() {
      return Defaults;
    } // NOTE: Overridden by PopOver class

  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }]);

  return ToolTip;
}();

var _default = ToolTip;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/unprefix-prop-name.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/unprefix-prop-name.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _lowerFirst = __webpack_require__(/*! ./lower-first */ "./node_modules/bootstrap-vue/es/utils/lower-first.js");

/**
 * @param {string} prefix
 * @param {string} value
 */
var unprefixPropName = function unprefixPropName(prefix, value) {
  return (0, _lowerFirst.default)(value.replace(prefix, ''));
};

var _default = unprefixPropName;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/upper-first.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/upper-first.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * @param {string} str
 */
var upperFirst = function upperFirst(str) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var _default = upperFirst;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/warn.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/warn.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _env = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/es/utils/env.js");

/**
 * Log a warning message to the console with bootstrap-vue formatting sugar.
 * @param {string} message
 */

/* istanbul ignore next */
var warn = function warn(message) {
  if (!(0, _env.getNoWarn)()) {
    console.warn("[BootstrapVue warn]: ".concat(message));
  }
};

var _default = warn;
exports.default = _default;

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

/***/ "./node_modules/vue-functional-data-merge/dist/lib.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-functional-data-merge/dist/lib.esm.js ***!
  \****************************************************************/
/*! exports provided: mergeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeData", function() { return mergeData; });
var __assign=function(){return(__assign=Object.assign||function(e){for(var a,s=1,t=arguments.length;s<t;s++)for(var r in a=arguments[s])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)};function mergeData(){for(var e,a,s={},t=arguments.length;t--;)for(var r=0,c=Object.keys(arguments[t]);r<c.length;r++)switch(e=c[r]){case"class":case"style":case"directives":Array.isArray(s[e])||(s[e]=[]),s[e]=s[e].concat(arguments[t][e]);break;case"staticClass":if(!arguments[t][e])break;void 0===s[e]&&(s[e]=""),s[e]&&(s[e]+=" "),s[e]+=arguments[t][e].trim();break;case"on":case"nativeOn":s[e]||(s[e]={});for(var n=0,o=Object.keys(arguments[t][e]||{});n<o.length;n++)a=o[n],s[e][a]?s[e][a]=[].concat(s[e][a],arguments[t][e][a]):s[e][a]=arguments[t][e][a];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":s[e]||(s[e]={}),s[e]=__assign({},arguments[t][e],s[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:s[e]||(s[e]=arguments[t][e])}return s}
//# sourceMappingURL=lib.esm.js.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/App.vue?vue&type=template&id=6f6375e0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/App.vue?vue&type=template&id=6f6375e0& ***!
  \************************************************************************************************************************************************************************************************************/
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
    _c("h1", [_vm._v("Vue Router Demo App")]),
    _vm._v(" "),
    _c(
      "p",
      [
        _c("router-link", { attrs: { to: { name: "home" } } }, [
          _vm._v("Home")
        ]),
        _vm._v(" |\n    "),
        _c("router-link", { attrs: { to: { name: "hello" } } }, [
          _vm._v("Hello World")
        ]),
        _vm._v(" |\n    "),
        _c("router-link", { attrs: { to: { name: "articles" } } }, [
          _vm._v("Articles")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/Hello.vue?vue&type=template&id=51408651&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/Hello.vue?vue&type=template&id=51408651& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("p", [_vm._v("Hello World!")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/Home.vue?vue&type=template&id=1d151330&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/Home.vue?vue&type=template&id=1d151330& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("p", [_vm._v("This is the homepage")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.0.2
  * (c) 2018 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey() }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   true && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


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
} // API token


var api_token = document.head.querySelector('meta[name="api-token"]');

if (api_token) {
  //   window.axios.defaults.params = {api_token: api_token.content};
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
} // else {
//   console.error(
//     'API token not found'
//   );
// }

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

/***/ "./resources/js/components/front/App.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/front/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_6f6375e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6f6375e0& */ "./resources/js/components/front/App.vue?vue&type=template&id=6f6375e0&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/components/front/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_6f6375e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_6f6375e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/front/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/App.vue?vue&type=template&id=6f6375e0&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/front/App.vue?vue&type=template&id=6f6375e0& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f6375e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6f6375e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/App.vue?vue&type=template&id=6f6375e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f6375e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f6375e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/front/Hello.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/front/Hello.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hello_vue_vue_type_template_id_51408651___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hello.vue?vue&type=template&id=51408651& */ "./resources/js/components/front/Hello.vue?vue&type=template&id=51408651&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Hello_vue_vue_type_template_id_51408651___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hello_vue_vue_type_template_id_51408651___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/Hello.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/Hello.vue?vue&type=template&id=51408651&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/front/Hello.vue?vue&type=template&id=51408651& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hello_vue_vue_type_template_id_51408651___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Hello.vue?vue&type=template&id=51408651& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/Hello.vue?vue&type=template&id=51408651&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hello_vue_vue_type_template_id_51408651___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Hello_vue_vue_type_template_id_51408651___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/front/Home.vue":
/*!************************************************!*\
  !*** ./resources/js/components/front/Home.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_1d151330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=1d151330& */ "./resources/js/components/front/Home.vue?vue&type=template&id=1d151330&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Home_vue_vue_type_template_id_1d151330___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_1d151330___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/Home.vue?vue&type=template&id=1d151330&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/front/Home.vue?vue&type=template&id=1d151330& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1d151330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=1d151330& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/Home.vue?vue&type=template&id=1d151330&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1d151330___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1d151330___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front.js":
/*!*******************************!*\
  !*** ./resources/js/front.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/es/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_front_App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/front/App.vue */ "./resources/js/components/front/App.vue");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.js */ "./resources/js/routes.js");
// jquery
// popper
// bootstrap
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js"); // bootstrap-vue
// .... may be later
// core @coreui
// require("./coreui/index.js");
//plugins
// require("jquery-colorbox");
// require("./plugins/bootstrap-notify");
//Vue


window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js"); //Vue-router


Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]); //Vuex
// import { store } from "./components/back/store";
//BootstrapVue


Vue.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1___default.a); //Notification
// import Notifications from "vue-notification";
// Vue.use(Notifications);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  mode: "history",
  routes: _routes_js__WEBPACK_IMPORTED_MODULE_3__["routes"]
});
var app = new Vue({
  router: router,
  el: "#app",
  components: {
    App: _components_front_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_front_Hello_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/front/Hello.vue */ "./resources/js/components/front/Hello.vue");
/* harmony import */ var _components_front_Home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/front/Home.vue */ "./resources/js/components/front/Home.vue");


var routes = [{
  path: '/',
  name: 'home',
  component: _components_front_Home_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/hello',
  name: 'hello',
  component: _components_front_Hello_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/articles',
  name: 'articles' //       component: Hello,

}];

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/front.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\OSPanel\domains\idea.lv\resources\js\front.js */"./resources/js/front.js");


/***/ })

},[[1,"/js/front/manifest","/js/front/vendor"]]]);