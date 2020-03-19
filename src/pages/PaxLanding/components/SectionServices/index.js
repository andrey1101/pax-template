import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { ServicesList } from '../../../../pages/PaxLanding/components/SectionServices/components/ServicesList';

// Static

import { servicesItem } from './data';

// Styles

import './styles.scss';

// ----------------

export const SectionServices = props => {
  // Render

  return (
    <div className="services">
      <ContentContainer className="services">
        <ServicesList item={servicesItem} />
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

SectionServices.propTypes = {
  prop: types.string,
};

// Default value for props

SectionServices.defaultProps = {};
