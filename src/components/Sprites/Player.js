import React from 'react';
import Actor from './Actor';
import useKeyPress from '../../hooks/use-key-press/useKeyPress';
import useWalk from '../../hooks/use-walk/useWalk';

import { useState } from 'react';
import { animate } from '../../animations/animationUtils';

const Player = (props) => {
  const { image, data, animation, allowInteraction } = props;
  const { direction, step, walk, position } = useWalk(3, props.initialPosition)
  const [isAnimating, setAnimationStatus] = useState(false)

  useKeyPress((e) => {
    if (allowInteraction) {
      const direction = e.key.replace('Arrow', '').toLowerCase();
      walk(direction)
      e.preventDefault();
    }
  });

  if (!isAnimating) {
    setAnimationStatus(true);
    animate(animation, walk)
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
