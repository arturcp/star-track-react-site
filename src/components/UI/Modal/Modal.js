import React from 'react';
import PropTypes from 'prop-types';
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

modal.propTypes = {
  // The title that will appear at the top of the
  // modal. It will be inserted into a h3 tag.
  title: PropTypes.string,

  // Text of the button that is positioned at the
  // bottom right of the modal.
  buttonText: PropTypes.string,

  // Function that will be triggered when the
  // action button is clicked.
  onButtonClick: PropTypes.func,
};

export default modal;
