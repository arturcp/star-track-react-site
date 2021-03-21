import { useState } from 'react';
import CONSTANTS from '../../domains/constants';

const useWalk = (maxSteps, initialPosition = { x: 0, y: 0 },
  initialStep = CONSTANTS.MOVEMENT.STOPPED,
  initialDirection = CONSTANTS.DIRECTIONS.RIGHT) => {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(initialDirection); // Right is the default direction
  const [step, setStep] = useState(initialStep);
  const directions = {
    down: CONSTANTS.DIRECTIONS.DOWN,
    left: CONSTANTS.DIRECTIONS.LEFT,
    right: CONSTANTS.DIRECTIONS.RIGHT,
    up: CONSTANTS.DIRECTIONS.UP,
  };

  const stepSize = 6;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

  const move = (newDirection) => {
    setPosition((prev) => ({
      x: prev.x + modifier[newDirection].x,
      y: prev.y + modifier[newDirection].y,
    }));
  };

  const walk = (newDirection) => {
    if (Object.prototype.hasOwnProperty.call(directions, newDirection)) {
      setDirection((prev) => {
        if (directions[newDirection] === prev) {
          move(newDirection);
        }
        return directions[newDirection];
      });
      setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
    }
  };

  return {
    walk,
    direction,
    step,
    position,
  };
};

export default useWalk;
