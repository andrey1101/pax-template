import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ImageBlock = ({ className, src, alt, children }) => {
  const modify = classNames({
    [`${className}`]: className,
  });
  // Render

  return (
    <div className={`${modify}`}>
      <img src={src} alt={alt} />
      {children}
    </div>
  );
};

// ----------------

// Type of props

ImageBlock.propTypes = {
  imageClass: types.string,
  src: types.string,
  alt: types.string,
};

// Default value for props

ImageBlock.defaultProps = {};
