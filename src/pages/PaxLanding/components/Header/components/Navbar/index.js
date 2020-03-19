import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
// Styles

import './styles.scss';

// ----------------

export const Navbar = ({ links, className }) => {
  // Modify

  const modify = classNames({
    [`${className}`]: className,
  });

  // Render

  return (
    <div className={`${modify} navbar`}>
      {links.map(({ link, label }, index) => {
        return (
          <div key={index} className="navbar__block-item">
            <a href={link}>{label}</a>
          </div>
        );
      })}
    </div>
  );
};

// Type of props

Navbar.propTypes = {
  prop: types.string,
};

// Default value for props

Navbar.defaultProps = {};
