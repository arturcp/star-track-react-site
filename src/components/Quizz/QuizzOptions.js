/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class QuizzOptions extends Component {
  constructor(props, context) {
    super(props, context);
    const { options } = props;
    const value = parseInt(this.getNumbers(options[0].value), 10);
    this.state = { value };
  }

  getNumbers = (text) => {
    const number = text.match(/\d/g);
    return number.join('');
  };

  buildRadio = (options) => (
    options.map((option, index) => (
      <label key={option.text} htmlFor={`option-${index}`}>
        {option.text}

        <input
          type="radio"
          id={`option-${index}`}
          name="quizz-option"
          value={option.value}
        />
      </label>
    ))
  );

  // eslint-disable-next-line react/destructuring-assignment
  formatValue = (value) => (this.props.baseLetter + value)

  buildSlider = (options) => {
    const firstItem = options[0];
    const lastItem = options[options.length - 1];
    const min = parseInt(this.getNumbers(firstItem.value), 10);
    const max = parseInt(this.getNumbers(lastItem.value), 10);

    const { value } = this.state;

    return (
      <div className="slider">
        <Slider
          min={min}
          max={max}
          value={value}
          format={this.formatValue}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className="value">{this.formatValue(value)}</div>
      </div>
    );
  };

  handleChangeStart = () => {
    console.log('Change event started');
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  handleChangeComplete = () => {
    console.log('Change event completed');
  };

  render() {
    const { options, type, question } = this.props;

    return (
      <>
        <h2>{question}</h2>
        <br />
        <div className="options-container">
          {type === 'radio' ? this.buildRadio(options) : this.buildSlider(options) }
        </div>
      </>
    );
  }
}

export default QuizzOptions;
