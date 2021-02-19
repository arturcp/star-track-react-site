import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import Api from '../../services/api';
// import { Link } from "react-router-dom";
import ReactTypingEffect from 'react-typing-effect';

import './styles.scss';

export default class Tutorial extends Component {
  state = {
    character: this.props.location.state.character
  }

  render() {
    let { character } = this.state
    debugger;
    return (
      <>
        <Header />
        <h2 className="first-heading topic-heading">
          {character.name}
        </h2>
        <ReactTypingEffect
          text={character.history}
        />
        <Footer />
      </>
    )
  }
}
