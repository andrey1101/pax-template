import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ContentBlock = ({ className, text, copyright }) => {
  // Modify

  const modify = classNames({
    [`${className}`]: className,
  });

  // Render

  return (
    <div className={`${modify}`}>
      <p>{text}</p>
      <p>{copyright}</p>
    </div>
  );
};

// Type of props

ContentBlock.propTypes = {
  prop: types.string,
};

// Default value for props

ContentBlock.defaultProps = {};
