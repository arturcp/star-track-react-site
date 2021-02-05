import React, { Component } from 'react'
import './styles.css';
import CharacterCards from '../../components/CharacterCards/CharacterChards';

export default class Home extends Component {
  render() {
    return (
      <div>
        <CharacterCards />
        {/*<Link to="/about">Sobre</Link>*/}
      </div>
    )
  }
}
