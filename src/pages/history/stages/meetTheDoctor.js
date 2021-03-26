import React from 'react';
import PropTypes from 'prop-types';

import Player from '../../../components/Sprites/Player';
import spriteImages from '../../../components/Sprites/Images';
import GameScenario from '../../../components/Scenario/GameScenario';
import CONSTANTS from '../../../domains/constants';

const meetTheDoctor = (props) => {
  const { character } = props;
  const images = spriteImages();

  const { stageFinished } = props;

  return (
    <>
      <GameScenario
        scenario="doctor-lab"
        cockpit={{ show: true, message: '🗣 Go to the doctor and talk to him' }}
      >
        <Player
          image={images[character.name.toLowerCase()]}
          data={CONSTANTS.PC.PLAYER_DATA}
          allowInteraction
          initialData={{
            position: { x: 0, y: 160 },
          }}
          movementsRestrictions={{
            directions: ['left', 'right'],
            maxX: 227,
            minX: 0,
          }}
          destination={{
            x: 216,
            arrived: stageFinished,
          }}
        />

        <Player
          image={images.ken}
          data={CONSTANTS.DRKEN.PLAYER_DATA}
          allowInteraction={false}
          initialData={{
            position: { x: 280, y: 180 },
            direction: CONSTANTS.DIRECTIONS.UP,
            step: CONSTANTS.MOVEMENT.STOPPED,
          }}
        />
      </GameScenario>
    </>
  );
};

meetTheDoctor.propTypes = {
  // Character of the current user (Carmen, Sam or Diego)
  character: PropTypes.object,

  // Function that will be executed when this stage is over.
  // In this stage, the end happens when the character reachs
  // a position close to Dr. Ken.
  stageFinished: PropTypes.func,
};

export default meetTheDoctor;
