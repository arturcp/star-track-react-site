import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from '../../services/api';
import Dialog from './Dialog/Dialog';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import './styles.scss';

class Dialogs extends Component {
  state = {
    character: this.props.character,
    dialogs: [],
    npcs: [],
    dialogId: 1,
    currentDialogIndex: 0
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    await this.loadNPCs();
    await this.loadDialogs(this.state.dialogId);
  }

  loadNPCs = async () => {
    const response = await Api.get(`/api/characters?type=NPC`);
    this.setState({ npcs: response.data });
  };

  loadDialogs = async (id) => {
    const response = await Api.get(`/api/dialogs/${this.state.dialogId}`);
    this.setState({ dialogs: response.data });
  };

  onDialogFinished = () => {
    this.setState({ currentDialogIndex: this.state.currentDialogIndex + 1 });
  }

  render() {
    const { dialogs, npcs } = this.state;

    const Container = styled(TransitionGroup)`
      margin-top: 220px;
    `;

    if (dialogs.length > 0 && npcs.length > 0 && this.state.currentDialogIndex < dialogs.length) {
      return (
        <Container>
          <CSSTransition
            key={this.state.currentDialogIndex}
            timeout={300}
            classNames="fade"
          >
            <Dialog
              character={this.state.character}
              npcs={npcs}
              dialog={dialogs[this.state.currentDialogIndex]}
              dialogFinished={this.onDialogFinished}
            />
          </CSSTransition>
        </Container>
      )
    } else {
      return null;
    }
  }
}

Dialogs.propTypes = {
  // Character is an object that represents the
  // player that is playing the game. It will be
  // a Carmen, a Sam or a Diego necessarily, only
  // PCs are expected.
  character: PropTypes.object,
}

export default Dialogs;
