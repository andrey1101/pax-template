import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Button } from './../../../../components/Button';
import { TeamList } from './components/TeamList';

// Static

import { teamTitle, teamItem } from './data';

// Styles

import './styles.scss';

// ----------------

export const SectionTeam = props => {
  // Render

  return (
    <div className="team" id="team">
      <ContentContainer className="team">
        <SectionTitle
          className="team__section-title"
          title={teamTitle.title}
          subtitle={teamTitle.subtitle}
          colorTitle={teamTitle.colorTitle}
          colorSubtitle={teamTitle.colorSubtitle}
          align="center"
          fluidWidth
          marginBottom
        />
        <TeamList item={teamItem} marginBottom />
        <Button className="team__button" backgroundColor="red" />
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

SectionTeam.propTypes = {
  prop: types.string,
};

// Default value for props

SectionTeam.defaultProps = {};
