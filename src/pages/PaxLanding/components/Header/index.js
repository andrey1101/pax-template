import types from 'prop-types';
import React, { useState } from 'react';

// Components

import LogoName from '../../../../components/LogoName';
import { ContentContainer } from '../../../../components/ContentContainer';
import { SocialBlock } from './components/SocialBlock';
import { Navbar } from './components/Navbar';
import AsideDrawer from './components/AsideDrawer';
import HamburgerButton from './components/HamburgerButton';

// Static

import { navigationLinks, socialLinks } from './data';

// Styles

import './styles.scss';

// ----------------

export const Header = (props) => {
  let [isAsideOpen, toggleAside] = useState(false);

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };

  // Render

  return (
    <div className="header">
      <ContentContainer className="header">
        <LogoName className="header__logo" />

        <Navbar className="header__navbar" links={navigationLinks} />

        <div className="header__right-block">
          <SocialBlock links={socialLinks} />
          <HamburgerButton
            handleClick={handleToggleAside}
            className="header__menu-btn-wrapper"
            isOpen={isAsideOpen}
          />
        </div>

        <AsideDrawer
          className="header__aside"
          isOpen={isAsideOpen}
          handleClick={handleToggleAside}
          links={navigationLinks}
        />
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

Header.propTypes = {
  prop: types.string,
};

// Default value for props

Header.defaultProps = {};
