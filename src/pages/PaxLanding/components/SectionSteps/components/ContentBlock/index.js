import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const ContentBlock = ({ content }) => {
  // Render

  return (
    <div className="steps__info-block-content">
      {content.map(({ contentItem }, index) => {
        return (
          <div key={index} className="steps__info-block-content-item">
            <p>{contentItem}</p>
          </div>
        );
      })}
    </div>
  );
};

// ----------------

// Type of props

ContentBlock.propTypes = {
  prop: types.string,
};

// Default value for props

ContentBlock.defaultProps = {};
