import types from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg';

// Styles

import './styles.scss';

// ----------------

export const ServicesList = ({ item }) => {
  // Render
  return (
    <div className="services__list">
      {item.map(({ icon, title, subtitle }, index) => {
        return (
          <div key={index} className="services__list-item">
            <ReactSVG className="services__list-item-icon" src={icon} />
            <p className="services__list-item-title">{title}</p>
            <p className="services__list-item-subtitle">{subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

ServicesList.propTypes = {
  prop: types.string,
};

// Default value for props

ServicesList.defaultProps = {};
