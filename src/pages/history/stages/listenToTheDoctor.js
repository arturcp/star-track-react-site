/* eslint-disable no-await-in-loop */
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import DialogBox from '../../../components/DialogBox/DialogBox';
import Dialogs from '../../../components/Dialogs/Dialogs';
import Player from '../../../components/Sprites/Player';
import AnimationScenario from '../../../containers/animationScenario';
import spriteImages from '../../../components/Sprites/Images';
import { moveCharacter } from '../../../libs/animationUtils';
import CONSTANTS from '../../../domains/constants';

const listenToTheDoctor = (props) => {
  const [isAnimating, setAnimationStatus] = useState(true);

  const { character, stageFinished } = props;
  const images = spriteImages();

  const animation = {
    sequence: [
      async(walk) => { await moveCharacter(2, 'down', walk); },
      async(walk) => { await moveCharacter(2, 'left', walk); },
    ],
    onSequenceEnded: () => setAnimationStatus(false),
    waitBeforeStart: 1300,
    waitBeforeEnd: 1000,
  };

  return (
    <>
      <AnimationScenario scenario="doctor-lab">
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
      </AnimationScenario>

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
