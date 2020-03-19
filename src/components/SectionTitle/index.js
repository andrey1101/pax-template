import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const SectionTitle = ({
  className,
  fluidWidth,
  title,
  subtitle,
  align,
  colorTitle,
  colorSubtitle,
  marginBottom,
}) => {
  // Modify styles

  const modify = classNames({
    [`${className}`]: className,
    [`section-title__inner--align-${align}`]: align,
    'section-title__inner--fluid-width': fluidWidth,
    'section-title__inner--margin-bottom': marginBottom,
  });

  const modifyTitle = classNames({
    [` section-title__inner-title--color-title-${colorTitle}`]: colorTitle,
  });

  const modifySubtitle = classNames({
    [` section-title__inner-subtitle--color-subtitle-${colorSubtitle}`]: colorSubtitle,
  });

  // Render

  return (
    <div className={`${modify} section-title__inner`}>
      <h1 className={`section-title__inner-title${modifyTitle}`}>{title}</h1>
      <h2 className={`section-title__inner-subtitle${modifySubtitle}`}>
        {subtitle}
      </h2>
    </div>
  );
};

// ----------------

// Type of props

SectionTitle.propTypes = {
  fluidWidth: types.bool,
  align: types.oneOf(['left', 'center', 'right']),
  colorTitle: types.oneOf(['white', 'blue', 'grey']),
  colorSubtitle: types.oneOf(['white', 'blue', 'grey', 'light-blue']),
};

// Default value for props

SectionTitle.defaultProps = {
  align: 'center',
  colorTitle: 'blue',
  colorSubtitle: 'grey',
};
