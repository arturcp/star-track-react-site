import React, { Component } from 'react'
import { Link } from "react-router-dom";
import api from '../../services/api';
// import './styles.css';

export default class Home extends Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = async () => {
    const response = await api.get('/api/characters');
    this.setState({ characters: response.data.characters });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="cards">
        <ul className="container">
          {characters.map(character => (
            <li key={character.id}>
              <img src={character.image_url} alt={character.name}/>
              <h4>{character.name}</h4>

              <p>{character.biography}</p>
            </li>
          ))}
        </ul>

        {/*<Link to="/about">Sobre</Link>*/}
      </div>
    )
  }
}
