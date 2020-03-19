import types from 'prop-types';
import React from 'react';

// Components

import { ImageBlock } from '../../../../../../components/CircleAvatar';

// Styles

import './styles.scss';

// ----------------

export const AboutCard = ({ className, avatar, blockquote, author }) => {
  // Render

  return (
    <div className={`${className}`}>
      <ImageBlock className={`${className}`} src={avatar} marginBottom />
      <p className={`${className}-blockquote`}>{blockquote}</p>
      <p className={`${className}-author`}>{author}</p>
    </div>
  );
};

// ----------------

// Type of props

AboutCard.propTypes = {
  prop: types.string,
};

// Default value for props

AboutCard.defaultProps = {};
