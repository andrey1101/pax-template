import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ContentContainer = ({ className, children }) => {
  const modify = classNames({
    [` ${className}__container`]: className,
  });
  // Render

  return <div className={`content-container${modify}`}>{children}</div>;
};

// ----------------

// Type of props

ContentContainer.propTypes = {
  children: types.node.isRequired,
  sectionName: types.string,
};

// Default value for props

ContentContainer.defaultProps = {};
