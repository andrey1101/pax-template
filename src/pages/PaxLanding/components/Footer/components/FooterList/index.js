import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const FooterList = ({ className, footerList }) => {
  // Render

  return (
    <div className={`${className}`}>
      {footerList.map(({ listFooter }, index) => {
        return (
          <div key={index} className="footer__list">
            {listFooter.map(({ listItem }, index) => {
              return (
                <div key={index} className="footer__list-item">
                  <a>{listItem}</a>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

// Type of props

FooterList.propTypes = {
  prop: types.string,
};

// Default value for props

FooterList.defaultProps = {};
