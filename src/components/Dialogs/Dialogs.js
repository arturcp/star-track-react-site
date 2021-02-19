import React, { Component } from 'react';
import Api from '../../services/api';
import Dialog from './Dialog/Dialog';

import './styles.scss';

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
    if (dialogs.length > 0 && npcs.length > 0 && this.state.currentDialogIndex < dialogs.length) {
      return (
        <div className="dialogs-container">
          <Dialog
            character={this.state.character}
            npcs={npcs}
            dialog={dialogs[this.state.currentDialogIndex]}
            dialogFinished={this.onDialogFinished}
          />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Dialogs;
