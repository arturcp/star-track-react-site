import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Dialogs from '../../../components/Dialogs/Dialogs';
import Player from '../../../components/Sprites/Player';
import GameScenario from '../../../components/Scenario/GameScenario';
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

  return (
    <>
      <GameScenario
        scenario="doctor-lab"
        cockpit={{ show: false, closingAnimation: true }}
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
      </GameScenario>

      {!isAnimating && (
        <CSSTransition in appear timeout={600} classNames="fade">
          <Dialogs />
        </CSSTransition>
      )}
    </>
  );
};

export default listenToTheDoctor;
