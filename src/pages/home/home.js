import React, { Component } from 'react'
import './styles.css';
import CharacterCards from '../../components/CharacterCards/CharacterChards';
import Header from '../../components/Header/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <CharacterCards />
        {/*<Link to="/about">Sobre</Link>*/}
      </div>
    )
  }
}
