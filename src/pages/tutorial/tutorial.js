import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Introduction from './introduction';
import Dialogs from '../../components/Dialogs/Dialogs';
import ConfirmationBox from '../../components/ConfirmationBox/ConfirmationBox';

import './styles.scss';

export default class Tutorial extends Component {
  STAGES = {
    INTRODUCTION: 'introduction',
    CONFIRMATION: 'confirmation',
    GAME: 'game'
  }

  state = {
    character: this.props.location.state.character,
    stage: this.STAGES.INTRODUCTION
  }

  onDialogFinish = () => {
    this.setState({ stage: this.STAGES.CONFIRMATION })
  }

  startGame = () => {
    this.setState({ stage: this.STAGES.GAME })
  }

  tutorialStage = () => {
    const { stage, character } = this.state

    if (stage === this.STAGES.INTRODUCTION) {
      return <Introduction character={character} dialogFinished={this.onDialogFinish} />
    } else if (stage === this.STAGES.CONFIRMATION) {
      return <ConfirmationBox
        title="It starts"
        text={`You are about to start ${character.name}'s journey, are you ready?`}
        buttonText="Start"
        onClickHandler={this.startGame}
      />
    } else {
      return this.dialogs();
    }
  }

  dialogs = () => {
    return <Dialogs character={this.state.character} />;
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
