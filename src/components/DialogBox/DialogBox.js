import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.scss';

class DialogBox extends Component {
  MODE = {
    typing: 'typing',
    flat: 'flat',
  };

  state = {
    mode: this.MODE.typing,
    currentIndex: 0,
  };

  constructor(props) {
    super(props);
    this.textComplete = false;
    this.sectionRef = React.createRef();
  }

  componentDidMount() {
    document.removeEventListener('keydown', this.onKeyPress);
    document.addEventListener('keydown', this.onKeyPress);
    const { mode } = this.state;
    if (mode === this.MODE.typing) {
      this.startTyping();
    } else {
      this.textComplete = true;
    }
  }

  componentDidUpdate() {
    const { mode } = this.state;
    console.log('componentDidUpdate, mode ', mode);

    if (mode === this.MODE.typing) {
      this.startTyping();
    } else {
      this.textComplete = true;
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPress);
  }

  startTyping = () => {
    const { text } = this.props;
    const { currentIndex, mode } = this.state;

    this.textComplete = false;
    this.sectionRef.current.innerHTML = '';

    text[currentIndex].split('').forEach((char, i) => {
      setTimeout(() => {
        if (mode === this.MODE.typing && !this.textComplete) {
          this.sectionRef.current.innerHTML += char;
        }
      }, 500 + i * 25);
    });
  };

  dialogBoxText = (mode, text, currentIndex) => {
    if (mode === this.MODE.flat) {
      return (
        <>
          <span>{text[currentIndex]}</span>
          {this.continueHint()}
        </>
      );
    }

    return null;
  }

  continueHint = () => {
    this.textComplete = true;
    return (
      <span className="key-hint">[Continue...]</span>
    );
  }

  onKeyPress = (e) => {
    const { mode, currentIndex } = this.state;
    if (e.keyCode === 13 || (e.keyCode >= 37 && e.keyCode <= 40)) {
      if (this.textComplete) {
        console.log('Setting mode to typing ');
        this.setState({ mode: this.MODE.typing, currentIndex: currentIndex + 1 });
      } else if (mode === this.MODE.typing) {
        console.log('Setting mode to flat ');
        this.setState({ mode: this.MODE.flat, currentIndex: currentIndex + 1 });
      }
    }
  };

  render() {
    const {
      text,
    } = this.props;
    const { mode, currentIndex } = this.state;

    return (
      <section className="dialog-box-container">
        <div className="dialog-box">
          <CSSTransition in appear timeout={1600} classNames="fade">
            <div ref={this.sectionRef}>
              {this.dialogBoxText(mode, text, currentIndex)}
            </div>
          </CSSTransition>
        </div>
      </section>
    );
  }
}

export default DialogBox;
