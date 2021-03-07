// TODO remove ReactDOMServer

import React, { Component } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
// import ReactDOMServer from 'react-dom/server';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import './styles.scss';

class DialogBox1 extends Component {
  state = {
    mode: 'typing',
    currentIndex: 0,
  };

  MODE = {
    typing: 'typing',
    flat: 'flat',
  }

  constructor(props) {
    super(props);
    this.sectionRef = React.createRef();
    this.textComplete = false;
  }

  componentDidMount() {
    console.log('component did mount');
    document.addEventListener('keydown', this.onKeyPress);
    this.typewriter = new Typewriter(this.sectionRef.current, {
      loop: false,
      delay: 5,
    });

    const { mode } = this.state;
    if (mode === this.MODE.typing) {
      this.startTyping();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPress);
  }

  startTyping = () => {
    const { text } = this.props;
    const { currentIndex } = this.state;

    this.typewriter
      .typeString(text[currentIndex])
      .pauseFor(100)
      .callFunction(() => {
        // this.sectionRef.current.innerHTML += ReactDOMServer.renderToString(this.continueHint());
      })
      .start();
  };

  continueHint = () => {
    this.textComplete = true;
    return (
      <span className="key-hint">[Continue...]</span>
    );
  }

  changeBoxState = () => {
    console.log('changeBoxState');
    const { mode, currentIndex } = this.state;
    const { text, dialogFinished } = this.props;
    // const newState = {};

    this.sectionRef.current.innerHTML = '';
    if (this.textComplete) {
      this.textComplete = false;
      console.log('is complete');
      // newState.currentIndex = currentIndex + 1;

      if (currentIndex + 1 < text.length) {
        // newState.mode = this.MODE.typing;
        // this.setState({ currentIndex: currentIndex + 1, mode: this.MODE.typing });
        this.setState({ currentIndex: currentIndex + 1 });
        this.startTyping();
      } else {
        // this.setState({ currentIndex: 0 });
        dialogFinished();
      }
    } else if (mode === this.MODE.typing) {
      this.setState({ mode: 'flat' });
    }

    // if (mode === 'typing') {
    //   this.typewriter.stop();
    //   this.sectionRef.current.innerHTML = '';
    //   this.setState({ mode: 'flat' });
    // } else {
    //   // const newState = { currentIndex: currentIndex + 1 };
    //   if (
    //     currentIndex > text.length - 1
    //     && typeof dialogFinished === 'function'
    //   ) {
    //     this.setState({ currentIndex: 0 });
    //     return dialogFinished();
    //   }

    //   newState.mode = 'typing';
    //   this.setState(newState);
    // }

    // return true;
  };

  onKeyPress = (e) => {
    if (e.keyCode === 13 || (e.keyCode >= 37 && e.keyCode <= 40)) {
      this.changeBoxState();
    }
  };

  renderAvatar = (direction) => {
    const { avatar, labelColor, name } = this.props;
    return (
      avatar && (
        <div className={`dialog-avatar ${direction}`}>
          <img src={avatar} alt="avatar" />
          <div
            className="avatar-name"
            style={{ backgroundColor: labelColor || '#ccc' }}
          >
            {name}
          </div>
        </div>
      )
    );
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

  render() {
    const {
      // dialogFinished,
      text,
      avatarDirection,
      // labelColor,
      // ...attributes
    } = this.props;
    const { mode, currentIndex } = this.state;

    return (
      <section
        className="dialog-box-container"
        onTouchStart={this.changeBoxState}
      >
        {this.renderAvatar(avatarDirection)}

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

DialogBox1.propTypes = {
  // Avatar is the image that will be shown at the top of
  // the dialog box. It represents the person that is
  // speaking.
  avatar: PropTypes.string,

  // Name of the character that is speaking.
  name: PropTypes.string,

  // Text is an array with all the phrases that the
  // character is going to say. How they are going to
  // be displayed depends on the user's interaction:
  //
  // * typing: if the user does not press keys or touches
  //   the screen's device (in case of touch screens), the
  //   paragraphs will be displayed letter be letter as if
  //   they are being typed in real time. When a paragraph
  //   ends, it will be erased and the next paragraph will
  //   start to be typed in the dialog box.
  //
  // * flat: when the user interrupts the typing effect by
  //   pressing <enter> or arrow keys (or touches
  //   the screen's device in case of touch screens), the
  //   typing effect is temporarily suspended. The entire
  //   paragraph is displayed at once in the dialog box and
  //   a hint will be displayed telling the users they need
  //   to interact again to let the dialog continue. Then,
  //   the next paragraph will be shown using the typing
  //   effect once again.
  text: PropTypes.array,

  // Below the avatar there is a label with the name of
  // the speaker. The labelColor property is the background
  // color of this label. It accepts all css formats
  // regarding colors, like strings (`red`, `blue`, etc),
  // HEX (#f4dd1d, for example), RGB and so on.
  labelColor: PropTypes.string,

  // Speed is typing speed in milliseconds. The default value
  // is 500 ms.
  speed: PropTypes.number,

  // Erase speed is the speed with which the text is
  // erased. It is measure in milliseconds and the default value
  // is 500 ms.
  eraseSpeed: PropTypes.number,

  // Time, in milliseconds, to wait before starting to type.
  // The default value is 2500 ms.
  typingDelay: PropTypes.number,

  // Function that will be executed when the entire dialog
  // finishes. It means that all the paragraphs of the text
  // were displayed.
  dialogFinished: PropTypes.func,

  // During a dialog, the avatar may be shown in the left
  // of in the right of the screen (in mobile devices they
  // are always at the top, regardless of the value of this
  // property). The valid values are `left` and `right`.
  //
  // When avatar is not set, this attribute does not change
  // the component.
  avatarDirection: PropTypes.string,
};

export default DialogBox1;
