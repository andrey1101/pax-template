import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg';

// Hooks

import useCurrentPosition from '../../hooks/useCurrentPosition';

// Styles

import icon from './../../assets/icons/arrow-up-icon.svg';
import './styles.scss';

// ----------------
export const ButtonUp = ({ visiblePosition, className }) => {
  // Preparation

  const currentPosition = useCurrentPosition();

  // Handlers

  const scrollTo = top =>
    window.scrollTo({
      behavior: 'smooth',
      top,
    });

  // Modify styles

  const modify = classNames({
    ' button-up--visible': currentPosition >= visiblePosition,
  });

  // Render

  return (
    <div
      className={`button-up${modify} ${className}`}
      onClick={() => scrollTo(0)}
    >
      <ReactSVG src={icon} />
    </div>
  );
};

// ----------------

// Type of props

ButtonUp.propTypes = {
  visiblePosition: types.number,
  className: types.string,
};

// Default props

ButtonUp.defaultProps = {
  visiblePosition: 800,
  className: '',
};
