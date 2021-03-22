import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { CSSTransition } from 'react-transition-group';

// import DialogBox from '../../components/DialogBox/DialogBox';
import Player from '../../../components/Sprites/Player';
import spriteImages from '../../../components/Sprites/Images';
// import introductionAnimation from './introductionAnimation';

import CONSTANTS from '../../../domains/constants';

const meetTheDoctor = (props) => {
  // const [isAnimating, setAnimationStatus] = useState(true);

  const { character } = props;
  const images = spriteImages();

  // const animation = {
  //   sequence: introductionAnimation(),
  //   onSequenceEnded: () => setAnimationStatus(false),
  //   waitBeforeStart: 1300,
  //   waitBeforeEnd: 1000,
  // };

  const { stageFinished } = props;

  return (
    <>
      <br />
      <section className="animation-container">
        <Player
          image={images[character.name.toLowerCase()]}
          data={{ width: 64, height: 96 }}
          // animation={animation}
          allowInteraction // isso vai mudar de acordo com o stage atual,
          // quando Ken for falar, tem que ser false
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
          data={{ width: 64, height: 64 }}
          allowInteraction={false}
          initialData={{
            position: { x: 300, y: 180 },
            direction: CONSTANTS.DIRECTIONS.UP,
            step: CONSTANTS.MOVEMENT.STOPPED,
          }}
        />
      </section>

      {/* {!isAnimating && (
        <CSSTransition in appear timeout={600} classNames="fade">
          <>
            <DialogBox
              text={character.history}
              speed={10}
              eraseSpeed={0}
              typingDelay={1300}
              dialogFinished={stageFinished}
            />
          </>
        </CSSTransition>
      )} */}
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
