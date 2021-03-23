/* eslint-disable no-await-in-loop */
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import DialogBox from '../../../components/DialogBox/DialogBox';
import Dialogs from '../../../components/Dialogs/Dialogs';
import Player from '../../../components/Sprites/Player';
import AnimationScenario from '../../../containers/Scenario/animationScenario';
import spriteImages from '../../../components/Sprites/Images';
import { moveCharacter } from '../../../libs/animationUtils';
import CONSTANTS from '../../../domains/constants';

const listenToTheDoctor = (props) => {
  const [isAnimating, setAnimationStatus] = useState(true);

  // stageFinished
  const { character } = props;
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

  const moveHandler = (e, stick) => {
    console.log(e, stick);
  };

  const moveEndHandler = () => {
    console.log('end');
  };

  return (
    <>
      <AnimationScenario
        scenario="doctor-lab"
        cockpit={{ show: false, closingAnimation: true }}
        joystickSettings={{ onMove: moveHandler, onMoveEnd: moveEndHandler }}
      >
        {isAnimating && (
          <>
            <Player
              image={images[character.name.toLowerCase()]}
              data={CONSTANTS.PC.PLAYER_DATA}
              allowInteraction={false}
              initialData={{
                position: { x: 225, y: 160 },
                direction: CONSTANTS.DIRECTIONS.RIGHT,
                step: CONSTANTS.MOVEMENT.STOPPED,
              }}
            />

            <Player
              image={images.ken}
              data={CONSTANTS.DRKEN.PLAYER_DATA}
              animation={animation}
              allowInteraction={false}
              initialData={{
                position: { x: 280, y: 180 },
                direction: CONSTANTS.DIRECTIONS.UP,
                step: CONSTANTS.MOVEMENT.STOPPED,
              }}
            />
          </>
        )}
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
