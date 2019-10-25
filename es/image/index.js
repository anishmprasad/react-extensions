import React from 'react';
import Img from 'react-imgr';
import 'react-imgr/dist/styles.min.css';
export default function Image(props) {
  return React.createElement(Img, props);
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
