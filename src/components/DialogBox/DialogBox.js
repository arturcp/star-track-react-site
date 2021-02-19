import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import './styles.scss';

const DialogBox = (props) => {
  const [mode, setMode] = useState('typing')

  const { dialogFinished, ...attributes } = props

  const onKeyPress = (e) => {
    if (e.keyCode === 13 || (e.keyCode >= 37 && e.keyCode <= 40)) {
      if (mode === 'typing') {
        setMode('flat')
      } else {
        props.text.splice(0, 1)
        if (props.text.length === 0 && typeof dialogFinished === 'function') {
          dialogFinished()
        }
        setMode('typing')
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress, false);
  })

  return (
    <section className="dialog-box-container">
      {props.avatar && (
        <div className="dialog-avatar">
          <img src={props.avatar} alt="avatar" />
        </div>
      )}

      <div className="dialog-box">
        {mode === 'typing' ?
          <ReactTypingEffect { ...attributes } /> :
          <div>
            {props.text[0]}
            <span className="key-hint">[Press enter...]</span>
          </div>
        }
      </div>
    </section>
  )
}

export default DialogBox;
