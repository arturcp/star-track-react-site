import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import DialogBox from '../../components/DialogBox/DialogBox';
import Player from '../../components/Sprites/Player';
import spriteImages from '../../components/Sprites/Images';
import introductionAnimation from '../../animations/introduction';

const Introduction = (props) => {
  const [isAnimating, setAnimationStatus] = useState(true);

  const { character } = props;
  const data = { width: 32, height: 48 };
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
          data={data}
          animation={animation}
          initialPosition={{ x: 0, y: 100 }}
          allowInteraction={false}
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
