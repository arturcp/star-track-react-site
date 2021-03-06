import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Api from '../../services/api';

import './styles.scss';

export default class Ranking extends Component {
  state = {
    ranking: [],
  };

  componentDidMount() {
    this.loadRanking();
  }

  loadRanking = async() => {
    const response = await Api.get('/api/ranking');
    this.setState({ ranking: response.data });
  };

  characterColumn = (entry) => {
    if (window.innerWidth < 769) {
      return null;
    }

    return (
      <td className="character">
        [ Playing with
        {entry.character}
        ]
      </td>
    );
  };

  buildRows = (ranking) => ranking.map((entry, index) => (
    <tr key={entry.id}>
      <td>
        {index + 1}
        .
      </td>
      <td>{entry.player_name}</td>
      <td className="text-right">{entry.points}</td>
      {this.characterColumn(entry)}
    </tr>
  ));

  render() {
    const { ranking } = this.state;
    const rows = this.buildRows(ranking);

    return (
      <div>
        <Header />
        <h2 className="first-heading topic-heading">Top 30 players</h2>
        <br />
        <table id="ranking-table">
          {rows}

          <tr>
            <td colSpan="4" className="text-center">
              <br />
              <Link to="/">Go back</Link>
            </td>
          </tr>
        </table>
        <br />

        <Footer />
      </div>
    );
  }
}
