import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './styles.scss';

export default class Ranking extends Component {
  render() {
    return(
      <div>
        <Header />
        <h2 className="first-heading topic-heading">Top 30 players</h2>
        <Footer />
      </div>
    )
  }
}
