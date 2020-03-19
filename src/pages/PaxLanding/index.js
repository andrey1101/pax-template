import React from 'react';

// Components

import { Header } from './components/Header';
import { SectionHero } from './components/SectionHero';
import { SectionServices } from './components/SectionServices';
import { SectionPortfolio } from './components/SectionPortfolio';
import { SectionSteps } from './components/SectionSteps';
import { SectionAbout } from './components/SectionAbout';
import { SectionTeam } from './components/SectionTeam';
import { SectionMap } from './components/SectionMap';
import { Footer } from './components/Footer';
import { ButtonUp } from '../../components/ButtonUp';

// Styles

import './styles.scss';

// --------------------

export const PaxLanding = () => {
  return (
    <div className="landing">
      <Header />
      <SectionHero />
      <SectionServices />
      <SectionPortfolio />
      <SectionSteps />
      <SectionAbout />
      <SectionTeam />
      <SectionMap />
      <Footer />
      <ButtonUp className="landing__button-up" />
    </div>
  );
};
