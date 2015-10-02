webpackJsonp([1],{

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(157);

	var Index = _react2['default'].createClass({
	  displayName: 'Index',

	  render: function render() {
	    if (this.props.children) {
	      return this.props.children;
	    }

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: '/lesson-3/what-time-is-it' },
	        'Lesson 3 - Time'
	      )
	    );
	  }
	});

	exports['default'] = Index;
	module.exports = exports['default'];

/***/ }

});