"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _card["default"];
  }
});

var _card = _interopRequireDefault(require("./card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* @remove-on-es-build-begin */
var ENV = process.env.NODE_ENV;

if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && // eslint-disable-line no-console
typeof window !== 'undefined') {
  // eslint-disable-next-line no-console
  console.warn('You are using a whole package of react-extensions, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
/* @remove-on-es-build-end */
//# sourceMappingURL=index.js.map
