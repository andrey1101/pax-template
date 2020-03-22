import types from 'prop-types';
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Button } from './../../../../components/Button';
import { ImageBlock } from '../../../../components/ImageBlock';
import { VideoBlock } from './components/VideoBlock';

// Styles

import './styles.scss';

// Static

import { heroTitle, imageLeft, imageCenter, imageRight, icon } from './data';

// ----------------

export const SectionHero = props => {
  const [isAsideOpen, toggleAside] = useState(false);

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };
  // Render

  return (
    <div className="hero" id="home">
      <ContentContainer className="hero">
        <SectionTitle
          className="hero__section-title"
          title={heroTitle.title}
          subtitle={heroTitle.subtitle}
          colorTitle={heroTitle.colorTitle}
          colorSubtitle={heroTitle.colorSubtitle}
          align="center"
          fluidWidth
          marginBottom
        />
        <Button className="hero__button" backgroundColor="red" />
        <div className="hero__image-list">
          <ImageBlock
            className="hero__list-item"
            src={imageLeft.src}
            alt={imageLeft.alt}
          />
          <ImageBlock
            className="hero__list-item"
            src={imageCenter.src}
            alt={imageCenter.alt}
          >
            <Button
              className="hero__image-button"
              backgroundColor="white"
              color="blue"
              textButton="Play"
              handleClick={handleToggleAside}
              isOpen={isAsideOpen}
            >
              <ReactSVG src={icon.play} />
              <ReactSVG src={icon.exit} />
            </Button>
            <VideoBlock isOpen={isAsideOpen} className="hero__video-block" />
          </ImageBlock>
          <ImageBlock
            className="hero__list-item"
            src={imageRight.src}
            alt={imageRight.alt}
          />
        </div>
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

SectionHero.propTypes = {
  prop: types.string,
};

// Default value for props

SectionHero.defaultProps = {};
