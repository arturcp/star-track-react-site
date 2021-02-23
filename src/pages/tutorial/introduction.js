import React from 'react';
import { useState } from 'react';
import DialogBox from '../../components/DialogBox/DialogBox';
import storytellerAvatar from '../../images/storyteller.jpg';

import Player from '../../components/Sprites/Player';
import { spriteImages } from '../../components/Sprites/Images';
import { introductionAnimation } from '../../animations/introduction';
import { CSSTransition } from 'react-transition-group';

const Introduction = (props) => {
  const [isAnimating, setAnimationStatus] = useState(true);

  const { character } = props;
  const data = { width: 32, height: 48 };
  const images = spriteImages();

  const animation = {
    animationSequence: introductionAnimation(),
    animationSequenceEnded: () => { setAnimationStatus(false); },
    animationPrologueSleep: 1300,
    animationClosureSleep: 1000,
  }

  return (
    <>
      <h2 className="first-heading topic-heading">
        {character.name}
      </h2>

      {isAnimating && (
        <section className="animation-container">
          <Player
            image={images.carmen}
            data={data}
            animation={animation}
            initialPosition={{ x: 0, y: 100 }}
          >
          </Player>
        </section>
      )}

      {!isAnimating && (
        <CSSTransition
          in={true}
          appear={true}
          timeout={600}
          classNames="fade"
        >
          <>
            <div className="avatar">
              <img src={character.image_url} alt={character.name} />
            </div>

            <DialogBox
              avatar={storytellerAvatar}
              text={character.history}
              speed="40"
              eraseSpeed="0"
              typingDelay="1300"
              dialogFinished={props.dialogFinished}
            />
          </>
        </CSSTransition>
      )}
    </>
  )
}

export default Introduction;
