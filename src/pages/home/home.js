import React, { Component } from 'react'
import api from '../../services/api';
import './styles.css';

import Card from '../../components/Card/card'
import Slider from "react-slick";

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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <div className="cards">
        {characters.map(character => (
          <Card key={character.name} title={character.name} subtitle="level 3" description="asdasd asd asd asd as das das das dasd asd as d" image={character.image_url} cardType="barbarian"></Card>
        ))}

        {/*<Link to="/about">Sobre</Link>*/}
      </div>
      </Slider>

    )
  }
}
