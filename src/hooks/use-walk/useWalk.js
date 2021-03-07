import { useState } from 'react';

const useWalk = (maxSteps, initialPosition = { x: 0, y: 0 }) => {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(2); // Right is the default direction
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
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
