import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { FooterList } from './components/FooterList';
import { ContentBlock } from './components/ContentBlock';

// Static

import { footerList, contentBlock } from './data';

// Styles

import './styles.scss';

// ----------------

export const Footer = props => {
  // Render

  return (
    <div className="footer" id="contact">
      <ContentContainer className="footer">
        <ContentBlock
          className="footer__content"
          text={contentBlock.text}
          copyright={contentBlock.copyright}
        />
        <FooterList className="footer__contacts" footerList={footerList} />
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
