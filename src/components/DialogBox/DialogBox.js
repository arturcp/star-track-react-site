import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { CSSTransition } from 'react-transition-group';

import './styles.scss';

class DialogBox extends Component {
  state = {
    mode: 'typing',
    currentIndex: 0
  }

  onKeyPress = (e) => {
    if (e.keyCode === 13 || (e.keyCode >= 37 && e.keyCode <= 40)) {
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
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress, true);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPress, true);
  }

  renderAvatarIf = (avatarDirection, expectedDirection) => {
    if (this.props.avatar && avatarDirection === expectedDirection) {
      return (
        <div className="dialog-avatar">
          <img src={this.props.avatar} alt="avatar" />
        </div>
      )
    } else {
      return null;
    }
  }

  render () {
    const { dialogFinished, text, avatarDirection, ...attributes } = this.props;
    const extraClass = avatarDirection === 'left' ? '' : 'invert-on-mobile';
    return (
      <section className={`dialog-box-container ${extraClass}`}>
        {this.renderAvatarIf(avatarDirection, 'left')}

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
                  <span className="key-hint">[Press enter...]</span>
                </div>
              </CSSTransition>
            }
        </div>

        {this.renderAvatarIf(avatarDirection, 'right')}
      </section>
    )
  }
}

export default DialogBox;
