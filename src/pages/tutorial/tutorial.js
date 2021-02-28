import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Introduction from './introduction';
import ConfirmationBox from '../../components/ConfirmationBox/ConfirmationBox';
import Dialogs from '../../components/Dialogs/Dialogs';
import rocket from '../../images/rocket-launch.gif';

import './styles.scss';

// This page receives the current character in
// the `location` attribute through
// the state property of the <Link> component that
// redirected the user to this page.
export default class Tutorial extends Component {
  STAGES = {
    INTRODUCTION: 'introduction',
    CONFIRMATION: 'confirmation',
    GAME: 'game',
    LAUNCHING: 'launching',
  }

  state = {
    character: this.props.location.state.character,
    stage: this.STAGES.INTRODUCTION
  }

  onDialogFinish = () => {
    this.setState({ stage: this.STAGES.CONFIRMATION })
  }

  startGame = () => {
    this.setState({ stage: this.STAGES.LAUNCHING })
  }

  tutorialStage = () => {
    const { stage, character } = this.state

    if (stage === this.STAGES.INTRODUCTION) {
      return (
        <Introduction
          character={character}
          dialogFinished={this.onDialogFinish}
        />
      )
    } else if (stage === this.STAGES.CONFIRMATION) {
      const text = `You are about to start ${character.name}'s journey, are you ready?`

      return (
        <ConfirmationBox
          title="It starts"
          text={text}
          buttonText="Start"
          onClickHandler={this.startGame}
        />
      )
    } else if (stage === this.STAGES.LAUNCHING) {
      setTimeout(() => {
        this.setState({ stage: this.STAGES.GAME })
      }, 5000);
      return (
        <img
          className="rocket-launch"
          src={rocket}
          alt="Rocket launch"
        />
      )
    } else {
      return (
        <Dialogs character={this.state.character} />
      );
    }
  }

  render() {
    return (
      <section id="tutorial">
        <Header />
        {this.tutorialStage()}
      </section>
    )
  }
}
