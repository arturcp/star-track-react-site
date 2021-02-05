import React, { Component } from 'react'
import './styles.scss';
import CharacterCards from '../../components/CharacterCards/CharacterChards';
import Header from '../../components/Header/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2 className="first-heading topic-heading">Choose your character</h2>
        <CharacterCards />
        {/*<Link to="/about">Sobre</Link>*/}
      </div>
    )
  }
}
