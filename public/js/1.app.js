webpackJsonp([1],{

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./chapter-1.jsx": 229,
		"./chapter-2.jsx": 230,
		"./index.jsx": 199
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 228;


/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Chapter1 = _react2['default'].createClass({
	  displayName: 'Chapter1',

	  render: function render() {
	    return _react2['default'].createElement(
	      'h1',
	      null,
	      'Chapter 1'
	    );
	  }
	});

	exports['default'] = Chapter1;
	module.exports = exports['default'];

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Chapter2 = _react2['default'].createClass({
	  displayName: 'Chapter2',

	  render: function render() {
	    return _react2['default'].createElement(
	      'h1',
	      null,
	      'Chapter 2'
	    );
	  }
	});

	exports['default'] = Chapter2;
	module.exports = exports['default'];

/***/ }

});