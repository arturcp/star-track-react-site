import { useState } from 'react';

const useWalk = (maxSteps) => {
  const [direction, setDirection] = useState(2); // Right is the default direction
  const [step, setStep] = useState(0)
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  }

  const walk = (direction) => {
    if (directions.hasOwnProperty(direction)) {
      setDirection(directions[direction])
      setStep(prev => { return prev < maxSteps - 1 ? prev + 1 : 0 });
    }
  }

  return {
    walk,
    direction,
    step,
    directions
  }
}

export default useWalk;
