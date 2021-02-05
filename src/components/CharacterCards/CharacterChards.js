import React, { Component } from 'react'
import api from '../../services/api';

import Card from '../../components/Card/Card'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CharacterCards extends Component {
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
      slidesToShow: window.innerWidth < 769 ? 1 : 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerPadding: "60px",
    };

    return (
      <div className="slide-container">
        <Slider {...settings}>
          {characters.map(character => (
            <Card key={character.name}
              title={character.name}
              subtitle={character.pronouns}
              description={character.bio}
              image={character.image_url}
              cardType="barbarian">
            </Card>
          ))}

        </Slider>
      </div>
    )
  }
};
