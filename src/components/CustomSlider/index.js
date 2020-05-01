import React, { Component } from 'react';
import Slider from 'react-slick';
import types from 'prop-types';

// Styles

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

// Assets

import { ReactSVG } from 'react-svg';

// Static

import { arrow } from './data';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className}`} onClick={onClick}>
      <ReactSVG src={arrow.next} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className}`} onClick={onClick}>
      <ReactSVG src={arrow.prev} />
    </div>
  );
}

// ----------------

class CustomSlider extends Component {
  // Type of props

  static propTypes = {
    prop: types.string,
  };

  // Default value for props

  static defaultProps = {};

  render() {
    const { children, className } = this.props;

    const defaultSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <Slider {...defaultSettings} className={`${className}`}>
        {children}
      </Slider>
    );
  }
}

export { CustomSlider };
