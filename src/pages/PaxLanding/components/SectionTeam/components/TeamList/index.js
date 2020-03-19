import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

//Components

import { ImageBlock } from '../../../../../../components/CircleAvatar';

// Styles

import './styles.scss';

// ----------------

export const TeamList = ({ item, marginBottom }) => {
  // Modify
  const modify = classNames({
    ' team__list--margin-bottom': marginBottom,
  });

  // Render
  return (
    <div className={`team__list${modify}`}>
      {item.map(({ avatar, alt, title, subtitle }, index) => {
        return (
          <div key={index} className="team__list-item">
            <ImageBlock
              className="team__list-item"
              src={avatar}
              alt={alt}
              marginBottom
            />
            <p className="team__list-item-title">{title}</p>
            <p className="team__list-item-subtitle">{subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

TeamList.propTypes = {
  prop: types.string,
};

// Default value for props

TeamList.defaultProps = {};
