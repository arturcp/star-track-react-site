/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Introduction from './introduction';
import ConfirmationBox from '../../components/ConfirmationBox/ConfirmationBox';
import Dialogs from '../../components/Dialogs/Dialogs';
import InfoBar from '../../components/InfoBar/InfoBar';
import withGame from '../../hoc/with-game';
import Api from '../../services/api';
import createStateMachine from '../../libs/StateMachine';

import rocket from '../../images/rocket-launch.gif';
import './styles.scss';

// This page receives the current character in the `location`
// attribute through the state property of the <Link> component
// that redirected the user to this page.
class History extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { character } = location.state;
    this.character = character;

    const initialStage = createStateMachine(this, [
      'introduction',
      'confirmation',
      'launching',
      'dialogs',
    ]);

    this.state = {
      currentStage: initialStage,
    };
  }

  componentDidMount() {
    this.startGame();
  }

  startGame = async() => {
    const levels = await Api.get('/api/levels');
    const npcs = await Api.get('/api/characters?type=NPC');
    const { location, game } = this.props;

    game.start(location.state.character, levels.data, npcs.data);
  };

  onIntroduction = () => (
    <Introduction character={this.character} stageFinished={this.nextStage} />
  );

  onConfirmation = () => {
    const text = `You are about to start ${this.character.name}'s journey, are you ready?`;

    return (
      <ConfirmationBox
        title="It starts"
        text={text}
        buttonText="Start"
        onClickHandler={this.nextStage}
      />
    );
  };

  onLaunching = () => {
    const { game } = this.props;
    game.changeStatus(game.STATUS.loading);

    this.nextStageAfterPause(5000);

    return <img className="rocket-launch" src={rocket} alt="Rocket launch" />;
  };

  onDialogs = () => {
    const { game } = this.props;
    game.changeStatus(game.STATUS.tutorial);

    return (
      <Dialogs />
    );
  }

  render() {
    return (
      <section id="history">
        <Header />
        <InfoBar />
        {this.componentForCurrentStage()}
      </section>
    );
  }
}

export default withGame(History);
