import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Introduction from './introduction';
import Dialogs from '../../components/Dialogs/Dialogs';
import ConfirmationBox from '../../components/ConfirmationBox/ConfirmationBox';
import { CSSTransition } from 'react-transition-group';
import rocket from '../../images/rocket-launch.gif';

import './styles.scss';

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
      return <Introduction character={character} dialogFinished={this.onDialogFinish} />
    } else if (stage === this.STAGES.CONFIRMATION) {
      return (
        <CSSTransition
          in={true}
          appear={true}
          timeout={600}
          classNames="fade"
        >
          <ConfirmationBox
            title="It starts"
            text={`You are about to start ${character.name}'s journey, are you ready?`}
            buttonText="Start"
            onClickHandler={this.startGame}
          />
        </CSSTransition>
      )
    } else if (stage === this.STAGES.LAUNCHING) {
      setTimeout(() => {
        this.setState({ stage: this.STAGES.GAME })
      }, 5000);
      return <img className="rocket-launch" src={rocket} alt="Rocket launch"/>
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
