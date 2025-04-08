(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("Stories", ["React"], factory);
	else if(typeof exports === 'object')
		exports["Stories"] = factory(require("react"));
	else
		root["Stories"] = factory(root["React"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__156__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 26:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRenderer = void 0;

var getRenderer = function getRenderer(story, renderers) {
  var probable = renderers.map(function (r) {
    return Object.assign(Object.assign({}, r), {
      testerResult: r.tester(story)
    });
  }).filter(function (r) {
    return r.testerResult.condition;
  });
  probable.sort(function (a, b) {
    return b.testerResult.priority - a.testerResult.priority;
  });
  return probable[0].renderer;
};

exports.getRenderer = getRenderer;

/***/ }),

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    width: "44",
    height: "44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#fff"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
});

/***/ }),

/***/ 66:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(156));

exports["default"] = react_1["default"].createContext({
  currentId: 0,
  videoDuration: 0,
  bufferAction: false,
  pause: false,
  next: function next() {}
});

/***/ }),

/***/ 130:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(156));

var GlobalHeader = function GlobalHeader(_ref) {
  var heading = _ref.heading,
      subheading = _ref.subheading,
      rightActions = _ref.rightActions,
      leftActions = _ref.leftActions,
      isMobile = _ref.isMobile;
  var styles = {
    main: {
      display: 'flex',
      alignItems: 'center',
      height: 60,
      paddingTop: 8,
      paddingLeft: 10,
      paddingRight: 10,
      position: 'relative',
      zIndex: 1
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      textAlign: 'left'
    },
    heading: {
      fontSize: '16px',
      fontWeight: 600,
      color: 'rgba(255, 255, 255, 1)',
      margin: 0,
      marginBottom: 2
    },
    headingMobile: {
      fontSize: '22px',
      fontWeight: 600,
      color: 'rgba(255, 255, 255, 1)',
      margin: 0,
      marginBottom: 2
    },
    subheading: {
      fontSize: '14px',
      fontWeight: 300,
      color: 'rgba(255, 255, 255, 1)',
      margin: 0
    },
    subheadingMobile: {
      fontSize: '18px',
      fontWeight: 300,
      color: 'rgba(255, 255, 255, 1)',
      margin: 0
    },
    actions: {
      display: 'flex',
      height: '100%'
    }
  };
  return react_1["default"].createElement("div", {
    style: styles.main
  }, leftActions && react_1["default"].createElement("div", {
    style: styles.actions
  }, leftActions), react_1["default"].createElement("span", {
    style: styles.text
  }, react_1["default"].createElement("p", {
    style: isMobile ? styles.headingMobile : styles.heading
  }, heading), react_1["default"].createElement("p", {
    style: isMobile ? styles.subheadingMobile : styles.subheading
  }, subheading)), rightActions && react_1["default"].createElement("div", {
    style: styles.actions
  }, rightActions));
};

exports["default"] = react_1["default"].memo(GlobalHeader);

/***/ }),

/***/ 137:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(156));

var Spinner_1 = __importDefault(__webpack_require__(557));

var withHeader_1 = __importDefault(__webpack_require__(214));

var withSeeMore_1 = __importDefault(__webpack_require__(827));

var renderer = function renderer(_ref) {
  var story = _ref.story,
      action = _ref.action,
      isPaused = _ref.isPaused,
      config = _ref.config;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  var width = config.width,
      height = config.height,
      loader = config.loader,
      storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});

  var imageLoaded = function imageLoaded() {
    setLoaded(true);
    action('play');
  };

  return React.createElement(withHeader_1["default"], {
    story: story,
    globalHeader: config.header
  }, React.createElement(withSeeMore_1["default"], {
    story: story,
    action: action
  }, React.createElement("div", {
    style: {
      width: '100%'
    }
  }, React.createElement("img", {
    style: computedStyles,
    src: story.url,
    onLoad: imageLoaded
  }), !loaded && React.createElement("div", {
    style: {
      width: width,
      height: height,
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      borderRadius: 16,
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1["default"], null)))));
};

exports.renderer = renderer;
var styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden"
  },
  storyContent: {
    width: "100%",
    borderRadius: 16,
    margin: "auto"
  }
};

var tester = function tester(story) {
  return {
    condition: !story.content && (!story.type || story.type === 'image'),
    priority: 2
  };
};

exports.tester = tester;
exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ 156:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ }),

/***/ 214:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(156));

var Header_1 = __importDefault(__webpack_require__(483));

var withHeader = function withHeader(_ref) {
  var story = _ref.story,
      globalHeader = _ref.globalHeader,
      children = _ref.children;
  return react_1["default"].createElement(react_1["default"].Fragment, null, children, story.header && react_1["default"].createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 20,
      zIndex: 19
    }
  }, _typeof(story) === "object" ? globalHeader ? globalHeader(story.header) : react_1["default"].createElement(Header_1["default"], {
    heading: story.header.heading,
    subheading: story.header.subheading,
    profileImage: story.header.profileImage
  }) : null));
};

exports["default"] = withHeader;

/***/ }),

/***/ 353:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(156));

var Global_1 = __importDefault(__webpack_require__(606));

var Story = function Story(props) {
  var globalContext = (0, react_1.useContext)(Global_1["default"]);
  var width = globalContext.width,
      height = globalContext.height,
      loader = globalContext.loader,
      header = globalContext.header,
      storyStyles = globalContext.storyStyles;

  var rendererMessageHandler = function rendererMessageHandler(type, data) {
    switch (type) {
      case 'UPDATE_VIDEO_DURATION':
        props.getVideoDuration(data.duration);
        return {
          ack: 'OK'
        };
    }
  };

  var getStoryContent = function getStoryContent() {
    var InnerContent = props.story.content;
    var config = {
      width: width,
      height: height,
      loader: loader,
      header: header,
      storyStyles: storyStyles
    };
    return react_1["default"].createElement(InnerContent, {
      action: props.action,
      isPaused: props.playState,
      story: props.story,
      config: config,
      messageHandler: rendererMessageHandler
    });
  };

  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign({}, styles.story), {
      width: width,
      height: height
    })
  }, getStoryContent());
};

var styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
    alignItems: "center"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};
exports["default"] = Story;

/***/ }),

/***/ 363:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WithSeeMore = exports.WithHeader = void 0;

var react_1 = __importStar(__webpack_require__(156));

var Container_1 = __importDefault(__webpack_require__(723));

var Global_1 = __importDefault(__webpack_require__(606));

var Stories_1 = __importDefault(__webpack_require__(848));

var renderers_1 = __webpack_require__(26);

var index_1 = __webpack_require__(778);

var withHeader_1 = __importDefault(__webpack_require__(214));

var withSeeMore_1 = __importDefault(__webpack_require__(827));

var ReactInstaStories = function ReactInstaStories(props) {
  var renderers = props.renderers ? props.renderers.concat(index_1.renderers) : index_1.renderers;
  var context = {
    width: props.width,
    height: props.height,
    loader: props.loader,
    header: props.header,
    globalHeader: props.globalHeader,
    storyContainerStyles: props.storyContainerStyles,
    storyStyles: props.storyStyles,
    loop: props.loop,
    defaultInterval: props.defaultInterval,
    isPaused: props.isPaused,
    currentIndex: props.currentIndex,
    onStoryStart: props.onStoryStart,
    onStoryEnd: props.onStoryEnd,
    onAllStoriesEnd: props.onAllStoriesEnd,
    keyboardNavigation: props.keyboardNavigation
  };

  var _ref = (0, react_1.useState)({
    stories: generateStories(props.stories, renderers)
  }),
      _ref2 = _slicedToArray(_ref, 2),
      stories = _ref2[0],
      setStories = _ref2[1];

  (0, react_1.useEffect)(function () {
    setStories({
      stories: generateStories(props.stories, renderers)
    });
  }, [props.stories, props.renderers]);
  return react_1["default"].createElement(Global_1["default"].Provider, {
    value: context
  }, react_1["default"].createElement(Stories_1["default"].Provider, {
    value: stories
  }, react_1["default"].createElement(Container_1["default"], null)));
};

var generateStories = function generateStories(stories, renderers) {
  return stories.map(function (s) {
    var story = {};

    if (typeof s === 'string') {
      story.url = s;
      story.type = 'image';
    } else if (_typeof(s) === 'object') {
      story = Object.assign(story, s);
    }

    var renderer = (0, renderers_1.getRenderer)(story, renderers);
    story.originalContent = story.content;
    story.content = renderer;
    return story;
  });
};

ReactInstaStories.defaultProps = {
  width: 360,
  height: 640,
  defaultInterval: 4000
};
exports.WithHeader = withHeader_1["default"];
exports.WithSeeMore = withSeeMore_1["default"];
exports["default"] = ReactInstaStories;

/***/ }),

/***/ 397:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(156));

var renderer = function renderer(_ref) {
  var story = _ref.story,
      action = _ref.action;
  React.useEffect(function () {
    action('play');
  }, [story]);
  return React.createElement("div", {
    style: styles.storyContent
  }, React.createElement("p", {
    style: styles.text
  }, "This story could not be loaded."));
};

exports.renderer = renderer;
var styles = {
  storyContent: {
    width: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  text: {
    textAlign: 'center',
    color: 'white',
    width: '90%',
    margin: 'auto'
  }
};

var tester = function tester() {
  return {
    condition: true,
    priority: 1
  };
};

exports.tester = tester;
exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ 483:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(156));

var Header = function Header(_ref) {
  var profileImage = _ref.profileImage,
      heading = _ref.heading,
      subheading = _ref.subheading;
  return react_1["default"].createElement("div", {
    style: styles.main
  }, profileImage && react_1["default"].createElement("img", {
    style: styles.img,
    src: profileImage
  }), react_1["default"].createElement("span", {
    style: styles.text
  }, react_1["default"].createElement("p", {
    style: styles.heading
  }, heading), react_1["default"].createElement("p", {
    style: styles.subheading
  }, subheading)));
};

var styles = {
  main: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
  },
  heading: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    marginBottom: 2
  },
  subheading: {
    fontSize: '0.6rem',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0
  }
};
exports["default"] = Header;

/***/ }),

/***/ 525:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(156));

var ProgressWrapper_1 = __importDefault(__webpack_require__(976));

var Progress_1 = __importDefault(__webpack_require__(66));

exports["default"] = function (props) {
  var _ref = (0, react_1.useContext)(Progress_1["default"]),
      bufferAction = _ref.bufferAction,
      pause = _ref.pause;

  var getProgressStyle = function getProgressStyle(_ref2) {
    var active = _ref2.active;

    switch (active) {
      case 2:
        return {
          width: '100%'
        };

      case 1:
        return {
          transform: "scaleX(".concat(props.count / 100, ")")
        };

      case 0:
        return {
          width: 0
        };

      default:
        return {
          width: 0
        };
    }
  };

  var width = props.width,
      active = props.active;
  return react_1["default"].createElement(ProgressWrapper_1["default"], {
    width: width,
    pause: pause,
    bufferAction: bufferAction
  }, react_1["default"].createElement("div", {
    style: Object.assign(Object.assign({}, getProgressStyle({
      active: active
    })), styles.inner)
  }));
};

var styles = {
  inner: {
    background: '#fff',
    height: '100%',
    maxWidth: '100%',
    borderRadius: 2,
    transformOrigin: 'center left',
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitPerspective: 1000,
    MozPerspective: 1000,
    msPerspective: 1000,
    perspective: 1000
  }
};

/***/ }),

/***/ 557:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(156));

var puff_svg_1 = __importDefault(__webpack_require__(60));

var Spinner = function Spinner() {
  return react_1["default"].createElement(puff_svg_1["default"], null);
};

exports["default"] = Spinner;

/***/ }),

/***/ 588:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(156));

var renderer = function renderer(props) {
  React.useEffect(function () {
    props.action('play');
  }, [props.story]);
  var Content = props.story.originalContent;
  return React.createElement(Content, Object.assign({}, props));
};

exports.renderer = renderer;

var tester = function tester(story) {
  return {
    condition: !!story.content,
    priority: 2
  };
};

exports.tester = tester;
exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ 606:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialContext = void 0;

var react_1 = __importDefault(__webpack_require__(156));

exports.initialContext = {
  defaultInterval: 4000,
  width: 360,
  height: 640
};
var GlobalContext = react_1["default"].createContext(exports.initialContext);
exports["default"] = GlobalContext;

/***/ }),

/***/ 624:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(156));

var Global_1 = __importDefault(__webpack_require__(606));

function seeMore(props) {
  var SeeMoreContent = props.seeMoreContent;
  var CustomCollapsed = props.customCollapsed;

  var _ref = (0, react_1.useContext)(Global_1["default"]),
      keyboardNavigation = _ref.keyboardNavigation;

  (0, react_1.useEffect)(function () {
    var isClient = typeof window !== 'undefined' && window.document;

    if (isClient && typeof keyboardNavigation === 'boolean' && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]);

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      props.toggleMore(true);
    } else if (e.key === 'ArrowDown' || e.key === 'Escape') {
      e.preventDefault();
      props.toggleMore(false);
    }
  };

  return props.showContent ? react_1["default"].createElement("div", {
    style: styles.seeMoreExpanded
  }, react_1["default"].createElement(SeeMoreContent, {
    close: function close() {
      return props.toggleMore(false);
    }
  })) : CustomCollapsed ? react_1["default"].createElement(CustomCollapsed, {
    action: props.action,
    toggleMore: props.toggleMore
  }) : react_1["default"].createElement("div", {
    style: styles.seeMore,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      props.toggleMore(true);
    }
  }, react_1["default"].createElement("span", {
    style: styles.seeMoreIcon
  }, "\u2303"), react_1["default"].createElement("span", {
    style: styles.seeMoreText
  }, "See more"));
}

exports["default"] = seeMore;
var styles = {
  seeMore: {
    height: "10vh",
    background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 0
  },
  seeMoreExpanded: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    zIndex: 99999
  },
  seeMoreText: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.1em",
    marginBottom: "2.2vh",
    textTransform: "capitalize",
    opacity: "1",
    fontSize: "0.8em",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreIcon: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.2em",
    marginBottom: "0.4vh",
    opacity: "1",
    filter: "drop-shadow(0 0 5px black)",
    textTransform: "capitalize",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreClose: {
    position: "absolute",
    filter: "drop-shadow(0 3px 2px #ccc)",
    right: "0.5rem",
    top: "0.5rem",
    fontSize: "1.5rem",
    opacity: "0.7",
    padding: "1rem"
  }
};

/***/ }),

/***/ 658:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(156));

var Progress_1 = __importDefault(__webpack_require__(525));

var Progress_2 = __importDefault(__webpack_require__(66));

var Global_1 = __importDefault(__webpack_require__(606));

var Stories_1 = __importDefault(__webpack_require__(848));

var GlobalHeader_1 = __importDefault(__webpack_require__(130));

exports["default"] = function () {
  var _ref = (0, react_1.useState)(0),
      _ref2 = _slicedToArray(_ref, 2),
      count = _ref2[0],
      setCount = _ref2[1];

  var _ref3 = (0, react_1.useContext)(Progress_2["default"]),
      currentId = _ref3.currentId,
      next = _ref3.next,
      videoDuration = _ref3.videoDuration,
      pause = _ref3.pause;

  var _ref4 = (0, react_1.useContext)(Global_1["default"]),
      defaultInterval = _ref4.defaultInterval,
      onStoryEnd = _ref4.onStoryEnd,
      onStoryStart = _ref4.onStoryStart,
      onAllStoriesEnd = _ref4.onAllStoriesEnd,
      globalHeader = _ref4.globalHeader;

  var _ref5 = (0, react_1.useContext)(Stories_1["default"]),
      stories = _ref5.stories;

  (0, react_1.useEffect)(function () {
    setCount(0);
  }, [currentId, stories]);
  (0, react_1.useEffect)(function () {
    if (!pause) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    }

    return function () {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [currentId, pause]);
  var animationFrameId = (0, react_1.useRef)();
  var countCopy = count;

  var incrementCount = function incrementCount() {
    if (countCopy === 0) storyStartCallback();
    setCount(function (count) {
      var interval = getCurrentInterval();
      countCopy = count + 100 / (interval / 1000 * 60);
      return count + 100 / (interval / 1000 * 60);
    });

    if (countCopy < 100) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    } else {
      storyEndCallback();

      if (currentId === stories.length - 1) {
        allStoriesEndCallback();
      }

      cancelAnimationFrame(animationFrameId.current);
      next();
    }
  };

  var storyStartCallback = function storyStartCallback() {
    onStoryStart && onStoryStart(currentId, stories[currentId]);
  };

  var storyEndCallback = function storyEndCallback() {
    onStoryEnd && onStoryEnd(currentId, stories[currentId]);
  };

  var allStoriesEndCallback = function allStoriesEndCallback() {
    onAllStoriesEnd && onAllStoriesEnd(currentId, stories);
  };

  var getCurrentInterval = function getCurrentInterval() {
    if (stories[currentId].type === 'video') return videoDuration;
    if (typeof stories[currentId].duration === 'number') return stories[currentId].duration;
    return defaultInterval;
  };

  return react_1["default"].createElement("div", {
    style: globalHeader ? styles.containerWithHeader : styles.container
  }, globalHeader && react_1["default"].createElement("div", {
    style: styles.opacity
  }), globalHeader && react_1["default"].createElement(GlobalHeader_1["default"], {
    heading: globalHeader.heading,
    rightActions: globalHeader.rightActions,
    subheading: globalHeader.subheading,
    leftActions: globalHeader.leftActions,
    isMobile: globalHeader.isMobile
  }), react_1["default"].createElement("div", {
    style: globalHeader ? styles.progressArrWithHeader : styles.progressArr
  }, stories.map(function (_, i) {
    return react_1["default"].createElement(Progress_1["default"], {
      key: i,
      count: count,
      width: 1 / stories.length,
      active: i === currentId ? 1 : i < currentId ? 2 : 0
    });
  })));
};

var styles = {
  opacity: {
    backgroundColor: '#333',
    height: 96,
    position: "absolute",
    borderTopWidth: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.9
  },
  container: {
    position: 'absolute',
    zIndex: 99,
    left: 0,
    right: 0
  },
  containerWithHeader: {
    paddingLeft: 16,
    paddingRight: 16,
    position: 'absolute',
    zIndex: 1000,
    left: 0,
    right: 0,
    height: 80,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },
  progressArrWithHeader: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    flexWrap: 'row',
    width: '100%',
    alignSelf: 'center',
    zIndex: 99,
    paddingTop: 8
  },
  progressArr: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    flexWrap: 'row',
    width: '98%',
    padding: 5,
    paddingTop: 7,
    alignSelf: 'center',
    zIndex: 99,
    filter: 'drop-shadow(0 1px 8px #222)'
  }
};

/***/ }),

/***/ 723:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(156));

var Global_1 = __importDefault(__webpack_require__(606));

var Stories_1 = __importDefault(__webpack_require__(848));

var Progress_1 = __importDefault(__webpack_require__(66));

var Story_1 = __importDefault(__webpack_require__(353));

var ProgressArray_1 = __importDefault(__webpack_require__(658));

function default_1() {
  var _ref = (0, react_1.useState)(0),
      _ref2 = _slicedToArray(_ref, 2),
      currentId = _ref2[0],
      setCurrentId = _ref2[1];

  var _ref3 = (0, react_1.useState)(true),
      _ref4 = _slicedToArray(_ref3, 2),
      pause = _ref4[0],
      setPause = _ref4[1];

  var _ref5 = (0, react_1.useState)(true),
      _ref6 = _slicedToArray(_ref5, 2),
      bufferAction = _ref6[0],
      setBufferAction = _ref6[1];

  var _ref7 = (0, react_1.useState)(0),
      _ref8 = _slicedToArray(_ref7, 2),
      videoDuration = _ref8[0],
      setVideoDuration = _ref8[1];

  var mousedownId = (0, react_1.useRef)();
  var isMounted = (0, react_1.useRef)(true);

  var _ref9 = (0, react_1.useContext)(Global_1["default"]),
      width = _ref9.width,
      height = _ref9.height,
      loop = _ref9.loop,
      currentIndex = _ref9.currentIndex,
      isPaused = _ref9.isPaused,
      keyboardNavigation = _ref9.keyboardNavigation,
      _ref9$storyContainerS = _ref9.storyContainerStyles,
      storyContainerStyles = _ref9$storyContainerS === void 0 ? {} : _ref9$storyContainerS;

  var _ref10 = (0, react_1.useContext)(Stories_1["default"]),
      stories = _ref10.stories;

  (0, react_1.useEffect)(function () {
    if (typeof currentIndex === 'number') {
      if (currentIndex >= 0 && currentIndex < stories.length) {
        setCurrentIdWrapper(function () {
          return currentIndex;
        });
      } else {
        console.error('Index out of bounds. Current index was set to value more than the length of stories array.', currentIndex);
      }
    }
  }, [currentIndex]);
  (0, react_1.useEffect)(function () {
    if (typeof isPaused === 'boolean') {
      setPause(isPaused);
    }
  }, [isPaused]);
  (0, react_1.useEffect)(function () {
    var isClient = typeof window !== 'undefined' && window.document;

    if (isClient && typeof keyboardNavigation === 'boolean' && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]); // Cleanup mounted state - for issue #130 (https://github.com/mohitk05/react-insta-stories/issues/130)

  (0, react_1.useEffect)(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      previous();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  var toggleState = function toggleState(action, bufferAction) {
    setPause(action === 'pause');
    setBufferAction(!!bufferAction);
  };

  var setCurrentIdWrapper = function setCurrentIdWrapper(callback) {
    setCurrentId(callback);

    if (currentId !== stories.length - 1) {
      toggleState('pause', true);
    }
  };

  var previous = function previous() {
    setCurrentIdWrapper(function (prev) {
      return prev > 0 ? prev - 1 : prev;
    });
  };

  var next = function next() {
    if (isMounted.current) {
      if (loop) {
        updateNextStoryIdForLoop();
      } else {
        updateNextStoryId();
      }
    }
  };

  var updateNextStoryIdForLoop = function updateNextStoryIdForLoop() {
    setCurrentIdWrapper(function (prev) {
      return (prev + 1) % stories.length;
    });
  };

  var updateNextStoryId = function updateNextStoryId() {
    setCurrentIdWrapper(function (prev) {
      if (prev < stories.length - 1) return prev + 1;
      return prev;
    });
  };

  var debouncePause = function debouncePause(e) {
    e.preventDefault();
    mousedownId.current = setTimeout(function () {
      toggleState('pause');
    }, 200);
  };

  var mouseUp = function mouseUp(type) {
    return function (e) {
      e.preventDefault();
      mousedownId.current && clearTimeout(mousedownId.current);

      if (pause) {
        toggleState('play');
      } else {
        type === 'next' ? next() : previous();
      }
    };
  };

  var getVideoDuration = function getVideoDuration(duration) {
    setVideoDuration(duration * 1000);
  };

  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign(Object.assign({}, storyContainerStyles), styles.container), {
      width: width,
      height: height
    })
  }, react_1["default"].createElement(Progress_1["default"].Provider, {
    value: {
      bufferAction: bufferAction,
      videoDuration: videoDuration,
      currentId: currentId,
      pause: pause,
      next: next
    }
  }, react_1["default"].createElement(ProgressArray_1["default"], null)), react_1["default"].createElement(Story_1["default"], {
    action: toggleState,
    bufferAction: bufferAction,
    playState: pause,
    story: stories[currentId],
    getVideoDuration: getVideoDuration
  }), react_1["default"].createElement("div", {
    style: styles.overlay
  }, react_1["default"].createElement("div", {
    style: {
      width: '50%',
      zIndex: 999
    },
    onTouchStart: debouncePause,
    onTouchEnd: mouseUp('previous'),
    onMouseDown: debouncePause,
    onMouseUp: mouseUp('previous')
  }), react_1["default"].createElement("div", {
    style: {
      width: '50%',
      zIndex: 999
    },
    onTouchStart: debouncePause,
    onTouchEnd: mouseUp('next'),
    onMouseDown: debouncePause,
    onMouseUp: mouseUp('next')
  })));
}

exports["default"] = default_1;
var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: 16,
    background: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.25)'
  },
  overlay: {
    position: 'absolute',
    height: 'inherit',
    width: 'inherit',
    display: 'flex'
  }
};

/***/ }),

/***/ 778:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.renderers = void 0;

var Image_1 = __importDefault(__webpack_require__(137));

var Video_1 = __importDefault(__webpack_require__(879));

var Default_1 = __importDefault(__webpack_require__(397));

var AutoPlayContent_1 = __importDefault(__webpack_require__(588));

exports.renderers = [Image_1["default"], Video_1["default"], AutoPlayContent_1["default"], Default_1["default"]];

/***/ }),

/***/ 827:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(156));

var SeeMore_1 = __importDefault(__webpack_require__(624));

var withSeeMore = function withSeeMore(_ref) {
  var story = _ref.story,
      action = _ref.action,
      customCollapsed = _ref.customCollapsed,
      children = _ref.children;

  var _ref2 = (0, react_1.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      showMore = _ref3[0],
      setShowMore = _ref3[1];

  var toggleMore = function toggleMore(show) {
    action(show ? "pause" : "play");
    setShowMore(show);
  };

  var CollapsedComponent = SeeMore_1["default"];
  return react_1["default"].createElement(react_1["default"].Fragment, null, children, story.seeMore && react_1["default"].createElement("div", {
    style: {
      position: "absolute",
      margin: "auto",
      bottom: showMore ? "unset" : 0,
      zIndex: 9999,
      width: "100%",
      height: showMore ? "100%" : "auto"
    }
  }, react_1["default"].createElement(CollapsedComponent, {
    action: action,
    toggleMore: toggleMore,
    showContent: showMore,
    seeMoreContent: story.seeMore,
    customCollapsed: customCollapsed || story.seeMoreCollapsed
  })));
};

exports["default"] = withSeeMore;

/***/ }),

/***/ 848:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialContext = void 0;

var react_1 = __importDefault(__webpack_require__(156));

exports.initialContext = {
  stories: []
};
var StoriesContext = react_1["default"].createContext(exports.initialContext);
exports["default"] = StoriesContext;

/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(156));

var Spinner_1 = __importDefault(__webpack_require__(557));

var withHeader_1 = __importDefault(__webpack_require__(214));

var withSeeMore_1 = __importDefault(__webpack_require__(827));

var renderer = function renderer(_ref) {
  var story = _ref.story,
      action = _ref.action,
      isPaused = _ref.isPaused,
      config = _ref.config,
      messageHandler = _ref.messageHandler;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      muted = _React$useState4[0],
      setMuted = _React$useState4[1];

  var width = config.width,
      height = config.height,
      loader = config.loader,
      storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});
  var vid = React.useRef(null);
  React.useEffect(function () {
    if (vid.current) {
      if (isPaused) {
        vid.current.pause();
      } else {
        vid.current.play()["catch"](function () {});
      }
    }
  }, [isPaused]);

  var onWaiting = function onWaiting() {
    action("pause", true);
  };

  var onPlaying = function onPlaying() {
    action("play", true);
  };

  var videoLoaded = function videoLoaded() {
    messageHandler('UPDATE_VIDEO_DURATION', {
      duration: vid.current.duration
    });
    setLoaded(true);
    vid.current.play().then(function () {
      action('play');
    })["catch"](function () {
      setMuted(true);
      vid.current.play()["finally"](function () {
        action('play');
      });
    });
  };

  return React.createElement(withHeader_1["default"], {
    story: story,
    globalHeader: config.header
  }, React.createElement(withSeeMore_1["default"], {
    story: story,
    action: action
  }, React.createElement("div", {
    style: styles.videoContainer
  }, React.createElement("video", {
    ref: vid,
    style: computedStyles,
    src: story.url,
    controls: false,
    onLoadedData: videoLoaded,
    playsInline: true,
    onWaiting: onWaiting,
    onPlaying: onPlaying,
    muted: muted,
    autoPlay: true,
    "webkit-playsinline": "true"
  }), !loaded && React.createElement("div", {
    style: {
      width: width,
      height: height,
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1["default"], null)))));
};

exports.renderer = renderer;
var styles = {
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  videoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

var tester = function tester(story) {
  return {
    condition: story.type === 'video',
    priority: 2
  };
};

exports.tester = tester;
exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ 976:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(156));

var ProgressWrapper = function ProgressWrapper(props) {
  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign({}, styles.progress), getProgressWrapperStyle(props))
  }, props.children);
};

var getProgressWrapperStyle = function getProgressWrapperStyle(_ref) {
  var width = _ref.width,
      pause = _ref.pause,
      bufferAction = _ref.bufferAction;
  return {
    width: "".concat(width * 100, "%"),
    opacity: pause && !bufferAction ? 0 : 1
  };
};

var styles = {
  progress: {
    height: 2,
    maxWidth: '100%',
    background: '#555',
    margin: 2,
    borderRadius: 2,
    transition: 'opacity 400ms ease-in-out'
  }
};
exports["default"] = ProgressWrapper;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(363);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});