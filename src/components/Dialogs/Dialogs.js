import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import Quizz from '../Quizz/Quizz';
import Api from '../../services/api';
import Dialog from './Dialog/Dialog';
import withGame from '../../hoc/with-game';
import Loading from '../UI/Loading/Loading';

const Container = styled(TransitionGroup)`
  margin-top: 220px;
`;

class Dialogs extends Component {
  state = {
    dialogs: [],
    currentDialogIndex: 0,
  };

  componentDidMount() {
    this.loadDialogs();
  }

  loadDialogs = async() => {
    const { game } = this.props;
    const dialogId = game.currentDialogId;
    const { currentLevelId, currentStageId } = game;
    const params = `${currentLevelId}/${currentStageId}/${dialogId}`;
    const response = await Api.get(`/api/dialogs/${params}`);
    response.data[0].paragraphs[0] = 'Meu amigo! <pause for=2000> O que traz você aqui?';
    this.setState({ dialogs: response.data });
  };

  onDialogFinished = () => {
    const { currentDialogIndex } = this.state;
    this.setState({ currentDialogIndex: currentDialogIndex + 1 });
  };

  readyToShow = (npcs, dialogs, currentDialogIndex) => dialogs.length > 0
    && npcs.length > 0
    && currentDialogIndex < dialogs.length;

  render() {
    const { game } = this.props;
    const { npcs, character } = game;
    const { dialogs } = this.state;
    const { currentDialogIndex } = this.state;

    if (this.readyToShow(npcs, dialogs, currentDialogIndex)) {
      return (
        <Container>
          <CSSTransition
            key={currentDialogIndex}
            timeout={300}
            classNames="fade"
          >
            <Dialog
              character={character}
              npcs={npcs}
              dialog={dialogs[currentDialogIndex]}
              dialogFinished={this.onDialogFinished}
            />
          </CSSTransition>
        </Container>
      );
    }

    return <Loading />;
    // return <Quizz />;
  }
}

Dialog.propTypes = {
  // Game is a structure that holds all information about
  // the current game. To know more about this object,
  // check `src/domains/game.js`
  game: PropTypes.object,
};

export default withGame(Dialogs);
