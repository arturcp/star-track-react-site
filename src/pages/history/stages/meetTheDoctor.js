import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Player from '../../../components/Sprites/Player';
import spriteImages from '../../../components/Sprites/Images';
import GameScenario from '../../../components/Scenario/GameScenario';
import SceneProp from '../../../components/SceneProp/SceneProp';
import CONSTANTS from '../../../domains/constants';
import fishBowl from '../../../images/sceneProps/fish-bowl.png';
import Modal from '../../../components/UI/Modal/Modal';

const meetTheDoctor = (props) => {
  const [modalState, setModalState] = useState('closed');
  const { character } = props;
  const images = spriteImages();

  const { stageFinished } = props;

  const openModal = () => { setModalState('opened'); };
  const closeModal = () => { setModalState('closed'); };

  return (
    <>
      <GameScenario
        scenario="doctor-lab"
        cockpit={{ show: true, message: '🗣 Go to the doctor and talk to him' }}
      >
        <SceneProp
          name="Objeto"
          imageStyles={{ top: '145px', left: '440px', width: '40px' }}
          image={fishBowl}
          onClick={openModal}
        >
          teste
        </SceneProp>

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

      {modalState === 'opened' && (
        <Modal
          buttonText="Close"
          title="Congratulations"
          onButtonClick={closeModal}
        >
          You are such a nice person! You have just fed the fish, and for
          that we will grant you 10 points!
        </Modal>
      )}
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
