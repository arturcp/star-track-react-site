/* eslint-disable no-await-in-loop */
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import DialogBox from '../../../components/DialogBox/DialogBox';
import Dialogs from '../../../components/Dialogs/Dialogs';
import Player from '../../../components/Sprites/Player';
import spriteImages from '../../../components/Sprites/Images';
import CONSTANTS from '../../../domains/constants';
import { sleep } from '../../../libs/animationUtils';

const listenToTheDoctor = (props) => {
  const [isAnimating, setAnimationStatus] = useState(true);

  const delay = 60;

  const { character, stageFinished } = props;
  const images = spriteImages();

  const introductionAnimation = () => {
    async function moveLeft(walk) {
      const steps = 2;
      for (let i = 0; i < steps; i += 1) {
        walk('left');
        await sleep(delay);
      }
    }

    async function moveDown(walk) {
      const steps = 2;
      for (let i = 0; i < steps; i += 1) {
        walk('down');
        await sleep(delay);
      }
    }

    return [moveDown, moveLeft];
  };

  const animation = {
    sequence: introductionAnimation(),
    onSequenceEnded: () => setAnimationStatus(false),
    waitBeforeStart: 1300,
    waitBeforeEnd: 1000,
  };

  return (
    <>
      <br />
      <section className="animation-container">
        <Player
          image={images[character.name.toLowerCase()]}
          data={{ width: 64, height: 96 }}
          allowInteraction={false}
          initialData={{
            position: { x: 234, y: 160 },
            direction: CONSTANTS.DIRECTIONS.RIGHT,
            step: CONSTANTS.MOVEMENT.STOPPED,
          }}
        />

        <Player
          image={images.ken}
          data={{ width: 64, height: 64 }}
          animation={animation}
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
          <Dialogs />
          {/* <>
            <DialogBox
              text={character.history}
              speed={10}
              eraseSpeed={0}
              typingDelay={1300}
              dialogFinished={stageFinished}
            />
          </> */}
        </CSSTransition>
      )}
    </>
  );
};

export default listenToTheDoctor;
