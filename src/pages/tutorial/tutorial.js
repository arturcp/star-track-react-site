import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DialogBox from '../../components/DialogBox/DialogBox';

import './styles.scss';

export default class Tutorial extends Component {
  state = {
    character: this.props.location.state.character
  }

  render() {
    let { character } = this.state
    return (
      <>
        <Header />
        <h2 className="first-heading topic-heading">
          {character.name}
        </h2>
        <DialogBox
          text={character.history}
        />
        <Footer />
      </>
    )
  }
}
