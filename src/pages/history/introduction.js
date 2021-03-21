import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import DialogBox from '../../components/DialogBox/DialogBox';
import Player from '../../components/Sprites/Player';
import spriteImages from '../../components/Sprites/Images';
import introductionAnimation from './introductionAnimation';

import CONSTANTS from '../../domains/constants';

const Introduction = (props) => {
  const [isAnimating, setAnimationStatus] = useState(true);

  const { character } = props;
  const images = spriteImages();

  const animation = {
    sequence: introductionAnimation(),
    onSequenceEnded: () => setAnimationStatus(false),
    waitBeforeStart: 1300,
    waitBeforeEnd: 1000,
  };

  const { dialogFinished } = props;

  return (
    <>
      <br />
      <section className="animation-container">
        <Player
          image={images[character.name.toLowerCase()]}
          data={{ width: 64, height: 96 }}
          // animation={animation}
          allowInteraction
          initialData={{
            position: { x: 0, y: 160 },
          }}
        />

        <Player
          image={images.ken}
          data={{ width: 64, height: 64 }}
          allowInteraction={false}
          initialData={{
            position: { x: 300, y: 180 },
            direction: CONSTANTS.DIRECTIONS.UP,
            step: CONSTANTS.MOVEMENT.STOPPED,
          }}
        />
      </section>

      {!isAnimating && (
        <CSSTransition in appear timeout={600} classNames="fade">
          <>
            <DialogBox
              text={character.history}
              speed={10}
              eraseSpeed={0}
              typingDelay={1300}
              dialogFinished={dialogFinished}
            />
          </>
        </CSSTransition>
      )}
    </>
  );
};

export default Introduction;
