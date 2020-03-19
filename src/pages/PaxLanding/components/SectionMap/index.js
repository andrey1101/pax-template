import types from 'prop-types';
import React from 'react';

// Components

import CustomGoogleMap from './../../../../components/CustomGoogleMap';

// Styles

import './styles.scss';

// ----------------

export const SectionMap = props => {
  // Render

  return (
    <div className="map">
      <CustomGoogleMap />
    </div>
  );
};

// ----------------

// Type of props

SectionMap.propTypes = {
  prop: types.string,
};

// Default value for props

SectionMap.defaultProps = {};
