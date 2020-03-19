import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const Copyright = ({ className, text }) => {
  // Modify

  const modify = classNames({
    [`${className}`]: className,
  });

  // Render

  return (
    <div className={`${modify}`}>
      <p>{text}</p>
    </div>
  );
};

// Type of props

Copyright.propTypes = {
  prop: types.string,
};

// Default value for props

Copyright.defaultProps = {};
