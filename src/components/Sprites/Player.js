import React from 'react';
import Actor from './Actor';
import useKeyPress from '../../hooks/use-key-press/useKeyPress';
import useWalk from '../../hooks/use-walk/useWalk';

import { useState } from 'react';

const Player = (props) => {
  const { image, data, animationSequence } = props;
  const { direction, step, walk, position } = useWalk(3)
  const [isAnimating, setAnimationStatus] = useState(false)

  useKeyPress((e) => {
    const direction = e.key.replace('Arrow', '').toLowerCase();
    walk(direction)
    e.preventDefault();
  });

  async function animate () {
    if (animationSequence) {
      for (let i = 0; i < animationSequence.length; i++) {
        await animationSequence[i](walk);
      }
    }
  }

  if (!isAnimating && animate && typeof animate === 'function') {
    setAnimationStatus(true);
    animate()
  }

  return (
    <Actor
      image={image}
      data={data}
      step={step}
      direction={direction}
      position={position}
    ></Actor>
  )
}

export default Player;
