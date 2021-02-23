import React, { Component } from 'react'

// import CharactersCards from '../../components/CharactersCards/CharactersCards';
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';

import './styles.scss';

import Player from '../../components/Sprites/Player';
import { spriteImages } from '../../components/Sprites/Images';
import { introductionAnimation } from '../../animations/introduction';

export default class Home extends Component {
  render() {
    const data = { width: 32, height: 48 };
    const images = spriteImages()

    return (
      <Player
        image={images.diego}
        data={data}
        column={0}
        row={0}
        animationSequence={introductionAnimation()}
      >
      </Player>
      // <div>
      //   <Header />
      //   <h2 className="first-heading topic-heading">Choose your character</h2>
      //   <CharactersCards />

      //   <div className="site-description">
      //     <h2>WTF is Star Track?</h2>
      //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed pellentesque sem, vel eleifend mi. Duis id ultrices tellus. Suspendisse dapibus efficitur lectus a tempor. Proin nec consectetur nibh. Suspendisse consectetur suscipit urna at dignissim. Nunc turpis enim, imperdiet ut sapien vel, feugiat egestas dui. Aenean in risus a risus dignissim tincidunt eget eget libero. Aliquam sed vestibulum turpis. Fusce eu dui turpis. Morbi ac augue id nunc maximus euismod a a elit. Cras lobortis magna eget risus molestie aliquet nec ut risus.</p>
      //     <p>In vestibulum euismod odio sit amet tincidunt. Vestibulum malesuada augue vel laoreet vulputate. Proin sagittis varius elit. Pellentesque congue eget ipsum eu euismod. Phasellus convallis non lacus non dignissim. Curabitur malesuada id neque a rutrum. Nunc elit est, vehicula id posuere at, dignissim at purus. Pellentesque mollis libero nec metus hendrerit luctus. Donec et urna elit.</p>
      //     <p>Vivamus auctor nisl at libero feugiat, ac gravida nisl consectetur. Donec vitae scelerisque dolor. Nullam sollicitudin nulla dolor, a elementum nisi sodales in. Morbi mollis velit mauris, tincidunt porta tellus hendrerit ultricies. Morbi mollis mattis gravida. Sed vel mollis nunc. Vivamus in erat justo. Vivamus sollicitudin est tellus, ut sodales mauris euismod ac.</p>
      //   </div>

      //   <Footer />
      // </div>
    )
  }
}
