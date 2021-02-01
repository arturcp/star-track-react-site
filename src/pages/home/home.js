import React, { Component } from 'react'
import { Link } from "react-router-dom";
import api from '../../services/api';
import './styles.css';

import Card from '../../components/Card/card'

export default class Home extends Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = async () => {
    const response = await api.get('/api/characters');
    this.setState({ characters: response.data });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="cards">
        {characters.map(character => (
          <Card title={character.name} subtitle="level 3" description="asdasd asd asd asd as das das das dasd asd as d" image={character.image_url} cardType="barbarian"></Card>
        ))}
        <ul className="container">
          {characters.map(character => (
            <li key={character.id}>
              <img src={character.image_url} alt={character.name} className="avatar"/>
              <h4>{character.name}</h4>

              <p>{character.bio}</p>
            </li>
          ))}
        </ul>

        {/*<Link to="/about">Sobre</Link>*/}
      </div>
    )
  }
}
