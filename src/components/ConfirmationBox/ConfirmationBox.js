import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import './styles.scss';

const confirmationBox = (props) => {
  const { title, text, buttonText, onClickHandler } = props;

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={600}
      classNames="fade"
    >
      <div className="confirmation-box">
        <h2>{title}</h2>

        <p>{text}</p>

        <button className="call-to-action" onClick={onClickHandler}>
          {buttonText}
        </button>
      </div>
    </CSSTransition>
  )
}

confirmationBox.propTypes = {
  // Title is a short warning that tells
  // users what the confirmation is about.
  title: PropTypes.string,

  // A short explanatory text.
  text: PropTypes.string,

  // buttonText is the text that will be written
  // inside the confirmation box's button.
  buttonText: PropTypes.string,

  // Function that will be executed when the user
  // clicks the button.
  onClickHandler: PropTypes.func,
}

export default confirmationBox;
