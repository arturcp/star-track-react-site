import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { CSSTransition } from 'react-transition-group';

import './styles.scss';

class DialogBox extends Component {
  state = {
    mode: 'typing',
    currentIndex: 0
  }

  changeBoxState = () => {
    if (this.state.mode === 'typing') {
      this.setState({ mode: 'flat' })
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
      if (this.state.currentIndex > this.props.text.length - 1 && typeof this.props.dialogFinished === 'function') {
        this.setState({ currentIndex: 0 })
        this.props.dialogFinished()
      } else {
        this.setState({ mode: 'typing' })
      }
    }
  }

  onKeyPress = (e) => {
    if (e.keyCode === 13 || (e.keyCode >= 37 && e.keyCode <= 40)) {
      this.changeBoxState()
    }
  }

  componentWillMount() {
    this.setState({ dialogBoxId: 'box-' + this.uuidv4() })
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress, true);
    document.querySelector('#' + this.state.dialogBoxId)
      .addEventListener('touchstart', this.changeBoxState, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPress, true);
  }

  renderAvatar = (direction) => {
    return this.props.avatar && (
      <div className={`dialog-avatar ${direction}`}>
        <img src={this.props.avatar} alt="avatar" />
        <div className="avatar-name">{this.props.name}</div>
      </div>
    )
  }

  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
  }

  render () {
    const { dialogFinished, text, avatarDirection, ...attributes } = this.props;
    const extraClass = avatarDirection === 'left' ? '' : 'invert-on-mobile';
    return (
      <section id={this.state.dialogBoxId} className={`dialog-box-container ${extraClass}`}>
        {this.renderAvatar(avatarDirection)}

        <div className="dialog-box">
            {this.state.mode === 'typing' ?
              <ReactTypingEffect text={text[this.state.currentIndex]} { ...attributes } /> :
              <CSSTransition
                in={true}
                appear={true}
                timeout={1600}
                classNames="fade"
              >
                <div>
                  {text[this.state.currentIndex]}
                  <span className="key-hint">[Continue...]</span>
                </div>
              </CSSTransition>
            }
        </div>
      </section>
    )
  }
}

export default DialogBox;
