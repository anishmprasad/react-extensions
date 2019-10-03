"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t&&& {\n\t\talign-content: ", ";\n\t\talign-self: ", ";\n\t\talign-items: ", ";\n\t\tdisplay: ", ";\n\t\tflex: ", ";\n\t\tflex-basis: ", ";\n\t\tflex-direction: ", ";\n\t\tflex-grow: ", ";\n\t\tflex-shrink: ", ";\n\t\tflex-wrap: ", ";\n\t\tjustify-content: ", ";\n\t\torder: ", ";\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Flex = (0, _styledComponents["default"])(function (_a) {
  var alignContent = _a.alignContent,
      alignItems = _a.alignItems,
      alignSelf = _a.alignSelf,
      display = _a.display,
      flex = _a.flex,
      flexBasis = _a.flexBasis,
      flexDirection = _a.flexDirection,
      flexGrow = _a.flexGrow,
      flexShrink = _a.flexShrink,
      flexWrap = _a.flexWrap,
      justifyContent = _a.justifyContent,
      order = _a.order,
      children = _a.children,
      props = __rest(_a, ["alignContent", "alignItems", "alignSelf", "display", "flex", "flexBasis", "flexDirection", "flexGrow", "flexShrink", "flexWrap", "justifyContent", "order", "children"]);

  return _react["default"].cloneElement(children, props);
})(_templateObject(), function (props) {
  return props.alignContent ? props.alignContent : '';
}, function (props) {
  return props.alignSelf ? props.alignSelf : '';
}, function (props) {
  return props.alignItems ? props.alignItems : '';
}, function (props) {
  return props.display ? props.display : '';
}, function (props) {
  return props.flex ? props.flex : '';
}, function (props) {
  return props.flexBasis ? props.flexBasis : '';
}, function (props) {
  return props.flexDirection ? props.flexDirection : '';
}, function (props) {
  return props.flexGrow ? props.flexGrow : '';
}, function (props) {
  return props.flexShrink ? props.flexShrink : '';
}, function (props) {
  return props.flexWrap ? props.flexWrap : '';
}, function (props) {
  return props.justifyContent ? props.justifyContent : '';
}, function (props) {
  return props.order ? props.order : '';
});
Flex.propTypes = {
  alignContent: _propTypes["default"].oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: _propTypes["default"].oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: _propTypes["default"].oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  display: _propTypes["default"].oneOf(['none', 'flex', 'inline-flex']),
  flex: _propTypes["default"].string,
  flexBasis: _propTypes["default"].string,
  flexDirection: _propTypes["default"].oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: _propTypes["default"].number,
  flexShrink: _propTypes["default"].number,
  flexWrap: _propTypes["default"].oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  justifyContent: _propTypes["default"].oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  order: _propTypes["default"].number
};
Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'column'
};
var _default = Flex;
exports["default"] = _default;
//# sourceMappingURL=index.js.map
