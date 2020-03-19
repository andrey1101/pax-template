import React from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import types from 'prop-types';

// // Styles

import './styles.scss';

// // ----------------

export const VideoBlock = ({ handleClick, className, isOpen }) => {
  const modify = classNames({
    [` ${className}--open`]: isOpen,
  });

  // Render

  return (
    <div className={`${className}${modify}`} onClick={handleClick}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=oJnF5VxTO5g"
        playing={isOpen}
        controls
        width="none"
        height="none"
      />
    </div>
  );
};

VideoBlock.propTypes = {
  prop: types.string,
};

VideoBlock.propTypes = {};
