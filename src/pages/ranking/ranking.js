import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Api from '../../services/api';
import { Link } from "react-router-dom";

import './styles.scss';

export default class Ranking extends Component {
  state = {
    ranking: [],
  }

  componentDidMount() {
    this.loadRanking();
  }

  loadRanking = async () => {
    const response = await Api.get('/api/ranking');
    this.setState({ ranking: response.data });
  };

  characterColumn = (entry) => {
    if (window.innerWidth < 769) {
      return null;
    } else {
      return <td className="character">[Playing with {entry.character}]</td>
    }
  }

  render() {
    const { ranking } = this.state;
    let counter = 1;

    return(
      <div>
        <Header />
        <h2 className="first-heading topic-heading">Top 30 players</h2>
        <br />
        <table id="ranking-table">
          {ranking.map(entry => (
            <tr key={entry.id}>
              <td>{counter++}. </td>
              <td>{entry.player_name}</td>
              <td className="text-right">{entry.points}</td>
              {this.characterColumn(entry)}
            </tr>
          ))}

          <tr>
            <td colspan="4" className="text-center">
              <br />
              <Link to="/">Go back</Link>
            </td>
          </tr>
        </table>
        <br />

        <Footer />
      </div>
    )
  }
}
