function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tborder-width: 1px;\n\tborder-style: ", ";\n\tborder-radius: ", ";\n\tborder-color: ", ";\n\tbackground-color: ", ";\n\tbox-shadow: ", ";\n\tdisplay: ", ";\n"]);

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
import styled from 'styled-components';
import PropTypes from 'prop-types';
import View from '../view';
var Card = styled(function (_a) {
  var borderStyle = _a.borderStyle,
      borderColor = _a.borderColor,
      backgroundColor = _a.backgroundColor,
      shape = _a.shape,
      boxShadow = _a.boxShadow,
      borderRadius = _a.borderRadius,
      type = _a.type,
      props = __rest(_a, ["borderStyle", "borderColor", "backgroundColor", "shape", "boxShadow", "borderRadius", "type"]);

  return React.createElement(View, props);
})(_templateObject(), function (props) {
  return props.borderStyle;
}, function (props) {
  return props.borderRadius;
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.boxShadow;
}, function (props) {
  return props.type;
});
export default Card;
Card.propTypes = {
  borderStyle: PropTypes.string // borderColor: PropTypes.oneOf(Object.keys(theme.color)),
  // backgroundColor: PropTypes.oneOf(Object.keys(theme.color))

};
Card.defaultProps = {
  borderStyle: 'none',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
  borderRadius: '2px',
  borderColor: 'black',
  type: 'inline-block'
};
//# sourceMappingURL=index.js.map
