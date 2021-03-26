import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './styles.scss';

const modal = (props) => {
  const { onButtonClick, title, buttonText } = props;

  return (
    <>
      <Backdrop />
      <div className="modal-container">
        <h3 className="modal-header">
          {title}
        </h3>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-actions">
          <button type="button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default modal;
