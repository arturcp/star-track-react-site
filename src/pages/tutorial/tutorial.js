import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Introduction from './introduction';

import './styles.scss';

export default class Tutorial extends Component {
  state = {
    character: this.props.location.state.character,
    introduction: true
  }

  onDialogFinish = () => {
    this.setState({ introduction: false })
  }

  tutorialStage = () => {
    if (this.state.introduction) {
      return <Introduction character={this.state.character} dialogFinished={this.onDialogFinish} />
    } else {
      return null;
    }
  }

  render() {
    return (
      <section id="tutorial">
        <Header />
        {this.tutorialStage()}
        <Footer />
      </section>
    )
  }
}
