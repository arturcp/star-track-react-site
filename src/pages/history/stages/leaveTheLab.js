import React, { useState } from 'react';
import Player from '../../../components/Sprites/Player';
import GameScenario from '../../../components/Scenario/GameScenario';
import SceneProp from '../../../components/SceneProp/SceneProp';
import CONSTANTS from '../../../domains/constants';
import fishBowl from '../../../images/sceneProps/fish-bowl.png';
import spriteImages from '../../../components/Sprites/Images';
import { moveCharacter } from '../../../libs/animationUtils';

const leaveTheLab = (props) => {
  const { character, stageFinished } = props;
  const images = spriteImages();
  const [isAnimating, setAnimationStatus] = useState(true);

  const drKenAnimation = {
    sequence: [
      async(walk) => { await moveCharacter(20, 'right', walk); },
    ],
    onSequenceEnded: () => {},
    waitBeforeStart: 1300,
    waitBeforeEnd: 1000,
  };

  const characterAnimation = {
    sequence: [
      async(walk) => { await moveCharacter(24, 'right', walk); },
    ],
    onSequenceEnded: () => {
      setAnimationStatus(false);
      stageFinished();
    },
    waitBeforeStart: 1300,
    waitBeforeEnd: 1000,
  };

  return (
    <>
      <GameScenario
        scenario="doctor-lab"
        cockpit={{ show: false }}
      >
        {isAnimating && (
          <>
            <SceneProp
              name="Objeto"
              imageStyles={{ top: '133px', left: '440px', width: '40px' }}
              image={fishBowl}
            />

            <Player
              image={images[character.name.toLowerCase()]}
              data={CONSTANTS.PC.PLAYER_DATA}
              allowInteraction={false}
              animation={characterAnimation}
              initialData={{
                position: { x: 225, y: 160 },
              }}
            />

            <Player
              image={images.ken}
              data={CONSTANTS.DRKEN.PLAYER_DATA}
              allowInteraction={false}
              animation={drKenAnimation}
              initialData={{
                position: { x: 278, y: 182 },
                direction: CONSTANTS.DIRECTIONS.RIGHT,
                step: CONSTANTS.MOVEMENT.STOPPED,
              }}
            />
          </>
        )}
      </GameScenario>
    </>
  );
};

export default leaveTheLab;
