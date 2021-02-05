import React, { Component } from 'react'
import api from '../../services/api';
import './styles.css';

import Card from '../../components/Card/card'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
      slidesToShow: window.innerWidth < 769 ? 1 : 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerPadding: "60px",
    };

    return (
      <div className="slide-container">
        <Slider {...settings}>
          {characters.map(character => (
            <Card key={character.name} title={character.name} subtitle="level 3" description="asdasd asd asd asd as das das das dasd asd as d" image={character.image_url} cardType="barbarian"></Card>
          ))}

        </Slider>
        {/*<Link to="/about">Sobre</Link>*/}
      </div>
    )
  }
}
