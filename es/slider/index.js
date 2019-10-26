import React from 'react';
import NetSlider from 'netslider';
import 'netslider/dist/styles.min.css';
export default function Slider(props) {
  return React.createElement(NetSlider, props);
}
Slider.defaultProps = {
  className: 'netslider_title_card',
  data: [{
    evidenceData: {
      type: 'NONE',
      key: ''
    },
    id: 80178943,
    image: 'https://occ-0-2611-2186.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZ3Qq-Hzea6WbaEEZaC2cfdLKk2FESlsZZgWY8mFM9G6_GV10UWfcQGrwBUH3shcFc02eClTihN9t0_w79mxi1y3Qxf8Ah890Et7Y7mQyqMefg3nsYO4ZCNWhX2KSRiKdwCgPtbwag.jpg',
    imageHighRes: 'https://occ-0-1009-1007.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABZkgH66DOjrC0-pNCF87xxKemsjiKFPbgx0xObXY6sLghHAS-MmThmCF-LZr2V42ed3VoScabV90v0cQHYxKZFULTwYq_sIBdA.jpg?r=2f8',
    showAsARow: {},
    summary: {
      id: 80178943,
      type: 'show'
    },
    title: 'The Boss Baby: Back in Business',
    userRating: {
      type: 'thumb',
      userRating: 0
    },
    watchURL: '/thebossbaby',
    rowNum: 2,
    rankNum: 1
  }],
  slideTemplate: function slideTemplate(props) {
    return React.createElement(SliderTemplate, props);
  }
};

function SliderTemplate(props) {
  return React.createElement("div", {
    className: "slider-container-wrapper"
  }, React.createElement(SliderContainer, {
    videoModel: props.videoModel,
    model: props.model
  }));
}

function SliderContainer(props) {
  return React.createElement("div", {
    className: "slider-container-title"
  }, props.videoModel.title);
}
//# sourceMappingURL=index.js.map
