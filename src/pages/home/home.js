import React, { Component } from 'react'
import api from '../../services/api';
import './styles.css';
import $ from 'jquery';

import Card from '../../components/Card/card'

export default class Home extends Component {
  state = {
    characters: [],
  }

  buildCarousel = () => {
    var slideContainer = $('.slide-container');

    slideContainer.slick();

    $('.clash-card__image img').hide();
    $('.slick-active').find('.clash-card img').fadeIn(200);

    // On before slide change
    slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.slick-active').find('.clash-card img').fadeOut(1000);
    });

    // On after slide change
    slideContainer.on('afterChange', function(event, slick, currentSlide) {
      $('.slick-active').find('.clash-card img').fadeIn(200);
    });
  }


  componentDidMount() {
    this.loadCharacters();
    // this.buildCarousel();
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
          <Card key={character.name} title={character.name} subtitle="level 3" description="asdasd asd asd asd as das das das dasd asd as d" image={character.image_url} cardType="barbarian"></Card>
        ))}

        {/*<Link to="/about">Sobre</Link>*/}
      </div>
    )
  }
}
