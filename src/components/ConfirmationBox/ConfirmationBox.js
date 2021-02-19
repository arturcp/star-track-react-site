import React from 'react';
import './styles.scss';

const confirmationBox = (props) => {
  const { title, text, buttonText, onClickHandler } = props;

  return (
    <div className="confirmation-box">
      <h2>{title}</h2>

      <p>{text}</p>

      <button className="call-to-action" onClick={onClickHandler}>{buttonText}</button>
    </div>
  )
}

export default confirmationBox;
