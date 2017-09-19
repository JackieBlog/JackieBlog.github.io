webpackJsonp([0],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(53);var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(84);var _reactDom2=_interopRequireDefault(_reactDom);var _method2=__webpack_require__(85);var _method3=_interopRequireDefault(_method2);__webpack_require__(87);__webpack_require__(86);var _nprogress=__webpack_require__(83);var _nprogress2=_interopRequireDefault(_nprogress);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Created by Jackie.Wu on 2017/4/16.
 *///nprogress.start();
var App=function(_method){_inherits(App,_method);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}_createClass(App,[{key:'render',value:function render(){return _react2.default.createElement('div',{className:''},_react2.default.createElement('canvas',{ref:'test',width:'320',height:'200',style:{background:'#0ff'}}),_react2.default.createElement('div',{className:'',ref:'test1',style:{width:100,height:30,background:'#000',color:'#fff'},onClick:this.clear},' \u70B9\u51FB\u6E05\u9664'));}}]);return App;}(_method3.default);_reactDom2.default.render(_react2.default.createElement(App,null),document.getElementById('app-page'));

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});/**
 * Created by Jackie.Wu on 2017/2/14.
 */exports.default={color:'green'};

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports
exports.i(__webpack_require__(186), "");
exports.i(__webpack_require__(189), "");

// module
exports.push([module.i, "html {\n  width: 100%;\n  height: 100%;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.7);\n}\na {\n  color: rgba(0, 0, 0, 0.7);\n}\na:hover {\n  color: rgba(0, 0, 0, 0.7);\n}\na:active {\n  color: rgba(0, 0, 0, 0.7);\n}\na:visited {\n  color: rgba(0, 0, 0, 0.7);\n}\n.clearfix {\n  zoom: 1;\n}\n.clearfix::before,\n.clearfix::after {\n  content: \" \";\n  clear: both;\n  display: block;\n  height: 0;\n}\np {\n  margin: 0;\n  padding: 0;\n}\n.hide {\n  display: none!important;\n}\n.show {\n  display: block!important;\n}\n.orange {\n  color: #ff5b05 !important;\n}\n.green {\n  color: #090 !important;\n}\n.time-bar-box {\n  height: 0.5rem;\n  background: #f0f0f0;\n  font-size: 0.24rem;\n}\n.time-bar-box .time-middle {\n  text-align: center;\n  line-height: 0.5rem;\n}\n.time-bar-box .time-middle .name {\n  float: left;\n  margin-left: 1rem;\n}\n.time-bar-box .time-middle .time {\n  float: right;\n  margin-right: 1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "\n@font-face {font-family: \"iconfont\";\n  src: url(" + __webpack_require__(81) + "); /* IE9*/\n  src: url(" + __webpack_require__(81) + "#iefix) format('embedded-opentype'), \n  url(" + __webpack_require__(192) + ") format('woff'), \n  url(" + __webpack_require__(191) + ") format('truetype'), \n  url(" + __webpack_require__(190) + "#iconfont) format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family:\"iconfont\" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-jiantou1:before { content: \"\\E66C\"; }\n\n.icon-jiantou:before { content: \"\\E601\"; }\n\n.icon-chevron-copy-copy-copy:before { content: \"\\E621\"; }\n\n.icon-guanjunhuojiang-copy:before { content: \"\\E600\"; }\n\n", ""]);

// exports


/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "http://www.dpfile.com/app/kepler-app-peon/images/iconfont.bc863a882482cadd0bec1dce7eae5fff.svg";

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "http://www.dpfile.com/app/kepler-app-peon/images/iconfont.9246e9cec5569b81aa8ad70851d4fbed.ttf";

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "http://www.dpfile.com/app/kepler-app-peon/images/iconfont.3e2ca941de0be8056be6925710f2b3fc.woff";

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = "http://www.dpfile.com/app/kepler-app-peon/images/iconfont.b78c39d0a020bc305b712ac1d9c73497.eot";

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(53);var _react2=_interopRequireDefault(_react);var _initState=__webpack_require__(185);var _initState2=_interopRequireDefault(_initState);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * Created by Jackie.Wu on 2017/4/16.
 */function Handwriting(id,test1){this.canvas=id;this.ctx=this.canvas.getContext("2d");this.ctx.fillStyle="rgba(0,0,0,0.25)";var _this=this;this.canvas.addEventListener('touchstart',function(e){e.preventDefault();_this.downEvent(e);});this.canvas.addEventListener('touchmove',function(e){e.preventDefault();_this.moveEvent(e);});this.canvas.addEventListener('touchend',function(e){e.preventDefault();_this.upEvent(e);});this.moveFlag=false;this.upof={};this.radius=0;this.has=[];this.lineMax=10;this.lineMin=3;this.linePressure=1;this.smoothness=80;}Handwriting.prototype.clear=function(){var self=this;return function(){self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);};};Handwriting.prototype.downEvent=function(e){this.moveFlag=true;this.upof=this.getXY(e);this.has=[{time:new Date().getTime(),dis:this.distance(this.upof,this.upof)}];};Handwriting.prototype.moveEvent=function(e){if(!this.moveFlag)return;var of=this.getXY(e);var up=this.upof;var ur=this.radius;this.has.unshift({time:new Date().getTime(),dis:this.distance(up,of)});var dis=0;var time=0;for(var n=0;n<this.has.length-1;n++){dis+=this.has[n].dis;time+=this.has[n].time-this.has[n+1].time;if(dis>this.smoothness)break;}var or=Math.min(time/dis*this.linePressure+this.lineMin,this.lineMax)/2;this.radius=or;this.upof=of;var len=Math.round(this.has[0].dis/2)+1;for(var i=0;i<len;i++){var x=up.x+(of.x-up.x)/len*i;var y=up.y+(of.y-up.y)/len*i;var r=ur+(or-ur)/len*i;this.ctx.beginPath();this.ctx.arc(x,y,r,0,2*Math.PI,true);this.ctx.fill();}};Handwriting.prototype.upEvent=function(e){this.moveFlag=false;};Handwriting.prototype.getXY=function(e){return{x:e.targetTouches[0].pageX,y:e.targetTouches[0].pageY};};Handwriting.prototype.distance=function(a,b){var x=b.x-a.x,y=b.y-a.y;return Math.sqrt(x*x+y*y);};var method=function(_React$Component){_inherits(method,_React$Component);function method(props){_classCallCheck(this,method);var _this2=_possibleConstructorReturn(this,(method.__proto__||Object.getPrototypeOf(method)).call(this,props));_this2.state=_initState2.default;return _this2;}_createClass(method,[{key:'clear',value:function clear(){//return this.hw.clear()
}},{key:'componentDidMount',value:function componentDidMount(){var hw=new Handwriting(this.refs.test);this.refs.test1.onclick=hw.clear();//hw.lineMax = 40;
//hw.lineMin = 5;
//hw.linePressure = 1;
//hw.smoothness = 100;
}}]);return method;}(_react2.default.Component);exports.default=method;;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(82)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./page-less.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!../../../node_modules/less-loader/index.js!./page-less.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(82)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/less-loader/index.js!./main.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/less-loader/index.js!./main.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[184]);