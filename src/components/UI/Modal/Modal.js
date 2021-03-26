import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import './styles.scss';

// Usage example:
//
// <Modal
//   buttonText="Close"
//   title="My first modal"
//   onButtonClick={() => { console.log('clicked'); }}
//   >
//   Aqui vai um texto legal
// </Modal>
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
          <Button onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </>
  );
};

export default modal;
