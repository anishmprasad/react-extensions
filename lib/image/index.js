"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Image;

var _react = _interopRequireDefault(require("react"));

var _reactImgr = _interopRequireDefault(require("react-imgr"));

require("react-imgr/dist/styles.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Image(props) {
  return _react["default"].createElement(_reactImgr["default"], props);
}

Image.defaultProps = {
  src: 'image.jpg',
  preloadSrc: 'preloadimage.jpg',
  containerStyle: {
    width: '100%',
    height: '280px'
  },
  initialBlur: true,
  alt: 'alt tag added here',
  scale: true,
  placeholder: 'placeholder.jpg'
};
//# sourceMappingURL=index.js.map
