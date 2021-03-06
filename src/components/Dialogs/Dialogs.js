import React, { Component } from 'react';
import Api from '../../services/api';
import Dialog from './Dialog/Dialog';
import withGame from '../../hoc/with-game';
import Loading from '../Loading/Loading'

import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Dialogs extends Component {
  state = {
    dialogs: [],
    currentDialogIndex: 0
  }

  componentDidMount() {
    this.loadDialogs();
  }

  loadDialogs = async () => {
    const dialogId = this.props.game.currentDialogId;
    const { currentLevelId, currentStageId } = this.props.game;
    const params = `${currentLevelId}/${currentStageId}/${dialogId}`;
    const response = await Api.get(`/api/dialogs/${params}`);
    this.setState({ dialogs: response.data });
  };

  onDialogFinished = () => {
    this.setState({ currentDialogIndex: this.state.currentDialogIndex + 1 });
  }

  readyToShow = (npcs, dialogs, currentDialogIndex) => {
    return dialogs.length > 0 && npcs.length > 0 && currentDialogIndex < dialogs.length;
  }

  render() {
    const { npcs, character } = this.props.game;
    const { dialogs } = this.state;
    const { currentDialogIndex } = this.state;

    const Container = styled(TransitionGroup)`
      margin-top: 220px;
    `;

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
      )
    } else {
      return <Loading />;
    }
  }
}

export default withGame(Dialogs);

