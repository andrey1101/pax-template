import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { CustomSlider } from '../../../../components/CustomSlider';
import { AboutCard } from './components/AboutCard';

// Static

import { aboutItem } from './data';

// Styles

import './styles.scss';

// ----------------

export const SectionAbout = props => {
  const cardClickHandler = id => {
    console.log('card-id -->', id);
  };
  // Render

  return (
    <div className="about" id="about">
      <ContentContainer className="about">
        <CustomSlider className="about__slider">
          {aboutItem.map(item => {
            return (
              <AboutCard
                className="about__card"
                avatar={item.avatar}
                blockquote={item.blockquote}
                author={item.author}
                key={item.id}
                id={item.id}
                handleClick={cardClickHandler}
              />
            );
          })}
        </CustomSlider>
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

SectionAbout.propTypes = {
  prop: types.string,
};

// Default value for props

SectionAbout.defaultProps = {};
