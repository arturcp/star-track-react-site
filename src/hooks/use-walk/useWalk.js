import { useState } from 'react';

const useWalk = (maxSteps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(2); // Right is the default direction
  const [step, setStep] = useState(0)
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  }

  const stepSize = 6;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  }

  const walk = (direction) => {
    if (directions.hasOwnProperty(direction)) {
      setDirection(prev => {
        if (directions[direction] === prev) {
          move(direction)
        }
        return directions[direction];
      })
      setStep(prev => (prev < maxSteps - 1 ? prev + 1 : 0));
    }
  }

  const move = (direction) => {
    setPosition(prev => ({
      x: prev.x + modifier[direction].x,
      y: prev.y + modifier[direction].y,
    }))
  }

  return {
    walk,
    direction,
    step,
    position
  }
}

export default useWalk;
