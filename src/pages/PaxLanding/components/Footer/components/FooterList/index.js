import types from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg';

// Styles

import './styles.scss';

// ----------------

export const FooterList = ({ className, footerList }) => {
  // Render

  return (
    <div className={`${className}`}>
      {footerList.map(({ image, listName, listText }, index) => {
        return (
          <div key={index} className={`${className}-block`}>
            <ReactSVG className={`${className}-block-image`} src={image} />
            <h3>{listName}</h3>
            <p>{listText}</p>
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
