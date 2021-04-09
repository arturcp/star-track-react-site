import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Api from '../../services/api';
import Dialog from '../../components/Dialog/Dialog';
import withGame from '../../hoc/with-game';
import './styles.scss';

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
    this.setState({ dialogs: response.data });
  };

  onSpeechFinished = () => {
    const { dialogs, currentDialogIndex } = this.state;
    const { dialogsFinished } = this.props;

    if (currentDialogIndex + 1 >= dialogs.length) {
      dialogsFinished();
    } else {
      this.setState({ currentDialogIndex: currentDialogIndex + 1 });
    }
  };

  readyToShow = (npcs, dialogs, currentDialogIndex) => dialogs.length > 0
    && npcs.length > 0
    && currentDialogIndex < dialogs.length;

  render() {
    const { game, background } = this.props;
    const { npcs, character } = game;
    const { dialogs } = this.state;
    const { currentDialogIndex } = this.state;
    const { backgroundImage, backgroundColor } = background || {};

    if (this.readyToShow(npcs, dialogs, currentDialogIndex)) {
      return (
        <Container>
          {background && (
            <div
              className="dialogs-background"
              style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor }}
            />
          )}

          <CSSTransition
            key={currentDialogIndex}
            timeout={300}
            classNames="fade"
          >
            <Dialog
              character={character}
              npcs={npcs}
              dialog={dialogs[currentDialogIndex]}
              speechFinished={this.onSpeechFinished}
            />
          </CSSTransition>
        </Container>
      );
    }

    return null;
  }
}

Dialog.propTypes = {
  // Game is a structure that holds all information about
  // the current game. To know more about this object,
  // check `src/domains/game.js`
  game: PropTypes.object,

  // Function that will be executed when the entire
  // dialog ends.
  dialogsFinished: PropTypes.fn,
};

export default withGame(Dialogs);
