import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { Button } from './../../../../components/Button';

// Styles

import './styles.scss';

// ----------------

export const SectionPortfolio = props => {
  // Render

  return (
    <div className="portfolio" id="portfolio">
      <ContentContainer className="portfolio">
        <Button className="portfolio__button" backgroundColor="blue" />
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

SectionPortfolio.propTypes = {
  prop: types.string,
};

// Default value for props

SectionPortfolio.defaultProps = {};
