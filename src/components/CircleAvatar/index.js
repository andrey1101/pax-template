import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ImageBlock = ({ className, marginBottom, src, alt }) => {
  const modify = classNames({
    [`${className}-avatar`]: className,
    'avatar--margin-bottom': marginBottom,
  });
  // Render

  return (
    <div className={`${modify}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

ImageBlock.propTypes = {
  prop: types.string,
};

ImageBlock.defaultProps = {};
