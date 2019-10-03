function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t&&& {\n\t\talign-content: ", ";\n\t\talign-self: ", ";\n\t\talign-items: ", ";\n\t\tdisplay: ", ";\n\t\tflex: ", ";\n\t\tflex-basis: ", ";\n\t\tflex-direction: ", ";\n\t\tflex-grow: ", ";\n\t\tflex-shrink: ", ";\n\t\tflex-wrap: ", ";\n\t\tjustify-content: ", ";\n\t\torder: ", ";\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
var Flex = styled(function (_a) {
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

  return React.cloneElement(children, props);
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
  alignContent: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: PropTypes.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  display: PropTypes.oneOf(['none', 'flex', 'inline-flex']),
  flex: PropTypes.string,
  flexBasis: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  justifyContent: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  order: PropTypes.number
};
Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'column'
};
export default Flex;
//# sourceMappingURL=index.js.map
