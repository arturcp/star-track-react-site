import React from 'react';
import PropTypes from 'prop-types';

import Player from '../../../components/Sprites/Player';
import spriteImages from '../../../components/Sprites/Images';
import AnimationScenario from '../../../containers/animationScenario';

import CONSTANTS from '../../../domains/constants';

const meetTheDoctor = (props) => {
  const { character } = props;
  const images = spriteImages();

  const { stageFinished } = props;

  return (
    <>
      <AnimationScenario scenario="doctor-lab">
        <Player
          image={images[character.name.toLowerCase()]}
          data={CONSTANTS.PC.PLAYER_DATA}
          allowInteraction
          initialData={{
            position: { x: 0, y: 160 },
          }}
          movementsRestrictions={{
            directions: ['left', 'right'],
            maxX: 236,
            minX: 0,
          }}
          destination={{
            x: 234,
            arrived: stageFinished,
          }}
        />

        <Player
          image={images.ken}
          data={CONSTANTS.DRKEN.PLAYER_DATA}
          allowInteraction={false}
          initialData={{
            position: { x: 300, y: 180 },
            direction: CONSTANTS.DIRECTIONS.UP,
            step: CONSTANTS.MOVEMENT.STOPPED,
          }}
        />
      </AnimationScenario>
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
