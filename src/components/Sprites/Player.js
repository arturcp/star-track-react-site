import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';
import _ from 'lodash';

import Actor from './Actor';
import useKeyPress from '../../hooks/use-key-press/useKeyPress';
import useWalk from '../../hooks/use-walk/useWalk';
import { animate } from '../../libs/animationUtils';
import { triggerKeydown } from '../../libs/keyboardUtils';

const Player = (props) => {
  const {
    image,
    data,
    animation,
    allowInteraction,
    initialData,
    movementsRestrictions,
    destination,
  } = props;

  const maxSteps = 3;

  const {
    direction, step, walk, position,
  } = useWalk(maxSteps, initialData, movementsRestrictions);

  const [subscriber, setsubscriber] = useState(null);
  const [isAnimating, setAnimationStatus] = useState(false);

  const move = (movementDirection) => {
    if (!movementsRestrictions || movementsRestrictions.directions.includes(movementDirection)) {
      walk(movementDirection);

      if (position.x === destination.x || position.y === destination.y) {
        destination.arrived();
      }
    }
  };

  if (allowInteraction) {
    useKeyPress((e) => {
      const movementDirection = e.key.replace('Arrow', '').toLowerCase();
      move(movementDirection);
      e.preventDefault();
    });

    const joystickHandler = (topic, payload) => {
      if (payload.stick.direction) {
        triggerKeydown({ key: `${payload.stick.direction.angle}Arrow` });
      }
    };

    const joystickHandlerWithThrottle = _.throttle(joystickHandler, 30);
    if (!subscriber) {
      PubSub.unsubscribe(joystickHandlerWithThrottle);
      setsubscriber(PubSub.subscribe('Joystick::Moved', joystickHandlerWithThrottle));
    }
  } else if (!isAnimating) {
    setAnimationStatus(true);
    animate(animation, walk);
  }

  return (
    <Actor
      image={image}
      data={data}
      step={step}
      direction={direction}
      position={position}
    />
  );
};

Player.propTypes = {
  // Image is and object that represents a sprite.
  // To import a sprite, you can use the `import`:
  //
  // import diegoSprite from '../../images/sprites/diego.png';
  //
  // diegoSprite, in this example, can be used in the
  // image property.
  image: PropTypes.string,

  // Data contains information about the part of the
  // sprite that is displayed. The valid keys of this
  // hash are:
  //
  // * width: width of the visible area of the sprite.
  // * height: width of the visible area of the sprite.
  //
  // An important difference from Actor and Sprite is
  // that x and y will be calculated here, it is not
  // explicitly defined in the Actor component.
  data: PropTypes.object,

  // Animation is a hash containing metadata about the
  // animation. This information will configure the
  // entire animation.
  //
  // The available options in this hash are:
  //
  // * sequence: this array should contain a list of functions
  //   that will be executed in a sequence. Lists of animations
  //   should be saved in `src/animations` folder. As an
  //   example, check `src/animations/introductionAnimation.js`.
  //
  // * onSequenceEnded: function that will be executed when the
  //   entire animation ends.
  //
  // * waitBeforeStart: numeric value, in milliseconds, with how
  //   long the animation needs to wait before start.
  //
  // * waitBeforeEnd: numeric value, in milliseconds, with how
  //   long the animation will sleep at the end, before
  //   executing the onSequenceEnded function.
  //
  // This property is not required and can be ommited.
  animation: PropTypes.object,

  // When true, it allows users to change the position of the
  // player using the keys of the keyboard. Else, the sprite
  // will be animated but without user interference. Use false
  // when all you need is to run an animation.
  allowInteraction: PropTypes.bool,

  // When rendering a player, you can either rely on the default
  // values for the initial position or you can set it yourself.
  // To do that on your own, use the initialData property.
  //
  // This is a hash and accept the following attributes:
  //
  // # initialPosition
  //
  // This property is a hash containing the position, on screen,
  // of the player. After step of the animation (or after each
  // user interaction) the position will change, moving the
  // object around.
  //
  // The valid keys for this hash are x and y.
  //
  // # initialStep
  //
  // Step is the column of the sprite that will be displayed.
  // To start the image in a given column, set the initialStep.
  //
  // # initialDirection
  //
  // Each row in the sprite represents a different direction.
  // To start the image in a given direction (row), set the
  // initialDirection.
  // Check the list of directions and their numeric code at
  // `src/hooks/use-walk/useWalk.js`.
  initialData: PropTypes.object,
};

export default Player;
