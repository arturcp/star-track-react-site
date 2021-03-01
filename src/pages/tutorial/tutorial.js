import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Introduction from './introduction';
import ConfirmationBox from '../../components/ConfirmationBox/ConfirmationBox';
import Dialogs from '../../components/Dialogs/Dialogs';
import { createStateMachine } from '../../libs/StateMachine';
import rocket from '../../images/rocket-launch.gif';

import './styles.scss';

// This page receives the current character in
// the `location` attribute through
// the state property of the <Link> component that
// redirected the user to this page.
export default class Tutorial extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: this.props.location.state.character
    }

    createStateMachine(this,
      ['introduction', 'confirmation', 'launching', 'dialogs']);
  }

  onIntroduction = () => {
    return (
      <Introduction
        character={this.state.character}
        dialogFinished={this.nextStage}
      />
    )
  }

  onConfirmation = () => {
    const text = `You are about to start ${this.state.character.name}'s journey, are you ready?`

    return (
      <ConfirmationBox
        title="It starts"
        text={text}
        buttonText="Start"
        onClickHandler={this.nextStage}
      />
    )
  }

  onLaunching = () => {
    setTimeout(() => {
      if (this.state.currentStage === 'launching') {
        this.nextStage()
      }
    }, 5000);

    return (
      <img
        className="rocket-launch"
        src={rocket}
        alt="Rocket launch"
      />
    )
  }

  onDialogs = () => {
    return (
      <Dialogs character={this.state.character} />
    );
  }

  render() {
    return (
      <section id="tutorial">
        <Header />
        {this.componentForCurrentStage()}
      </section>
    )
  }
}
