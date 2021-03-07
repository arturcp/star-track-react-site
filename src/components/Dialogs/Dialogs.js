import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Api from '../../services/api';
import Dialog from './Dialog/Dialog';
import withGame from '../../hoc/with-game';
import Loading from '../Loading/Loading';

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
  }
}

export default withGame(Dialogs);
