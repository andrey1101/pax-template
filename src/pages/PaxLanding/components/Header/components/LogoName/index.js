import classNames from 'classnames';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

const LogoName = ({ className }) => {
  const modify = classNames({
    [`${className}`]: className,
  });
  // Render

  return (
    <div className={`${modify} logo`}>
      <span>Pax</span>
      <span> Template</span>
    </div>
  );
};

export default LogoName;
