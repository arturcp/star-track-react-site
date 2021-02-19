import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

import './styles.scss';

const dialogBox = (props) => {
  return (
    <div className="dialog-box">
      <ReactTypingEffect { ...props } />
    </div>
  )
}

export default dialogBox;
