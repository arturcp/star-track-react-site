import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Dialogs from '../../../containers/Dialogs/Dialogs';
import Player from '../../../components/Sprites/Player';
import GameScenario from '../../../components/Scenario/GameScenario';
import spriteImages from '../../../components/Sprites/Images';
import SceneProp from '../../../components/SceneProp/SceneProp';
import fishBowl from '../../../images/sceneProps/fish-bowl.png';
import Modal from '../../../components/UI/Modal/Modal';
import { moveCharacter } from '../../../libs/animationUtils';
import CONSTANTS from '../../../domains/constants';

const listenToTheDoctor = (props) => {
  const [isAnimating, setAnimationStatus] = useState(true);
  const [modalState, setModalState] = useState('closed');
  const openModal = () => { setModalState('opened'); };
  const closeModal = () => { setModalState('closed'); };

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
      <GameScenario
        scenario="doctor-lab"
        cockpit={{ show: false, closingAnimation: true }}
      >
        <SceneProp
          name="Objeto"
          imageStyles={{ top: '133px', left: '440px', width: '40px' }}
          image={fishBowl}
          onClick={openModal}
        />

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

      {!isAnimating && (
        <CSSTransition in appear timeout={600} classNames="fade">
          <Dialogs dialogsFinished={stageFinished} />
        </CSSTransition>
      )}
    </>
  );
};

export default listenToTheDoctor;
