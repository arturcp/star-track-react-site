import React from 'react';
import QuizzOptions from './QuizzOptions';

import './styles.scss';

const quizz = (props) => {
  // const { image, question, options } = props;
  const image = 'https://lh3.googleusercontent.com/proxy/cm8hilTOS3pKfAE1gFwVIUnhJsp-y090lXeGIxf5WGHhlBqgPV3DQnybhBZrKvcH8nrh95SRxV50btgfOYzV4Z_qd2RA8JXYpbZ6p3Y2achxwpV3HVcgPaJXKyjsk-3cwXUU6hV1BORGOrEQn9UOtdYzPma0FyA';
  const question = 'What is the type of this galaxy?';
  const options = [
    { text: 'E1', value: 'E1' },
    { text: 'E2', value: 'E2' },
    { text: 'E3', value: 'E3' },
    { text: 'E4', value: 'E4' },
    { text: 'E5', value: 'E5' },
  ];

  return (
    <div className="quizz">
      <img src={image} alt="Quizz" />
      <div className="break" />

      <QuizzOptions
        question={question}
        options={options}
      />

      <div className="break" />
      <button type="button" onClick={props.onClick}>Next</button>
    </div>
  );
};

export default quizz;
