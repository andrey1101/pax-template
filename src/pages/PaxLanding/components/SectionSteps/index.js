import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { SectionTitle } from '../../../../components/SectionTitle';
import { ImageBlock } from '../../../../components/ImageBlock';
import { Button } from '../../../../components/Button';
import { ContentBlock } from './components/ContentBlock';

// Styles

import './styles.scss';

// Static

import { stepsTitle, image, content } from './data';

// ----------------

export const SectionSteps = props => {
  // Render

  return (
    <div className="steps">
      <ContentContainer className="steps">
        <SectionTitle
          className="steps__section-title"
          title={stepsTitle.title}
          subtitle={stepsTitle.subtitle}
          colorTitle={stepsTitle.colorTitle}
          colorSubtitle={stepsTitle.colorSubtitle}
          align="center"
          fluidWidth
          marginBottom
        />
        <div className="steps__info-block">
          <ImageBlock
            className="steps__info-block-image"
            src={image.src}
            alt={image.alt}
          />
          <ContentBlock content={content} />
        </div>
        <Button
          className="steps__button"
          backgroundColor="white"
          color="blue"
        />
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

SectionSteps.propTypes = {
  prop: types.string,
};

// Default value for props

SectionSteps.defaultProps = {};
