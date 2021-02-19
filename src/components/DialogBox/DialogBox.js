import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

import './styles.scss';

const dialogBox = (props) => {
  return (
    <div className="dialog-box">
      <ReactTypingEffect
          text={props.text}
        />
    </div>
  )
}

export default dialogBox;
