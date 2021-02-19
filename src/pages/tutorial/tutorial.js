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
      <section id="tutorial">
        <Header />
        <h2 className="first-heading topic-heading">
          {character.name}
        </h2>
        <div className="avatar">
          <img src={character.image_url} alt={character.name} />
        </div>
        <DialogBox
          text={character.history}
          speed={40}
          eraseSpeed={0}
        />
        <Footer />
      </section>
    )
  }
}
