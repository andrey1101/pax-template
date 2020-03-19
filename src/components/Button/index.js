import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Button = ({
  backgroundColor,
  color,
  className,
  textButton,
  children,
  handleClick,
  isOpen,
}) => {
  const modify = classNames({
    [` ${className}`]: className,
    [` button--backgroundColor-${backgroundColor}`]: backgroundColor,
    [` button--color-${color}`]: color,
    [' button--video-open']: isOpen,
  });

  // Render

  return (
    <div className={`button${modify}`} onClick={handleClick}>
      <button>
        <p>{textButton}</p>
        {children}
      </button>
    </div>
  );
};

// ----------------

// Type of props

Button.propTypes = {
  buttonClass: types.string,
  textButton: types.string,
  backgroundColor: types.oneOf(['red', 'white', 'blue']),
  color: types.oneOf(['white', 'blue']),
};

Button.defaultProps = {
  textButton: 'Ask for price',
  backgroundColor: 'blue',
  color: 'white',
};
