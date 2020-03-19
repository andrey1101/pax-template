import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { FooterList } from './components/FooterList';
import { Copyright } from './components/Copyright';

// Static

import { footerList, copyright } from './data';

// Styles

import './styles.scss';

// ----------------

export const Footer = props => {
  // Render

  return (
    <div className="footer" id="contact">
      <ContentContainer className="footer">
        <FooterList className="footer__contacts" footerList={footerList} />
        <Copyright className="footer__copyright" text={copyright.text} />
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

Footer.propTypes = {
  prop: types.string,
};

// Default value for props

Footer.defaultProps = {};
