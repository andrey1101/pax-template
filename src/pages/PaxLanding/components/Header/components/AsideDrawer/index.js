import classNames from 'classnames';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

const AsideDrawer = ({ links, isOpen, className, handleClick }) => {
  const modify = classNames({
    [`${className}`]: className,
    'aside--is-open': isOpen,
  });

  // Render

  return (
    <aside className={`${modify} aside`}>
      {links.map(({ label, link }, index) => {
        return (
          <a
            className="aside__item"
            key={index}
            href={link}
            onClick={handleClick}
          >
            {label}
          </a>
        );
      })}
    </aside>
  );
};

export default AsideDrawer;
