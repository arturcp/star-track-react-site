import React from 'react';

const quizzOptions = (props) => {
  const { options } = props;
  const components = options.map((option, index) => (
    <label key={option.text} htmlFor={`option-${index}`}>
      {option.text}

      <input
        type="radio"
        id={`option-${index}`}
        name="quizz-option"
        value={option.value}
      />
    </label>
  ));

  return (
    <>
      {components}
    </>
  );
};

export default quizzOptions;
