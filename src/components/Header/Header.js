import React from 'react';

import { Link } from 'react-router-dom';
import rankingIcon from '../../images/ranking.webp';
import logo from '../../images/rocket.png';
import './styles.scss';

const header = () => (
  <header id="top-header">
    <Link to="/">
      <img className="logo" src={logo} alt="Launching rocket to space" />
    </Link>
    <div className="description">
      <Link to="/">
        <h2>Star Track</h2>
        <br />
      </Link>
      <span>Use your knowledge to help Dr. Ken</span>
    </div>
    <div className="ranking-container">
      <Link to="/ranking">
        <img src={rankingIcon} alt="Ranking" />
      </Link>
    </div>
  </header>
);

export default header;
