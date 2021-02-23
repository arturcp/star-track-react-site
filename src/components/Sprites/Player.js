import React from 'react';
import Actor from './Actor';
import useKeyPress from '../../hooks/use-key-press/useKeyPress';
import useWalk from '../../hooks/use-walk/useWalk';

const Player = (props) => {
  const { image, data } = props;
  const { direction, step, walk, position } = useWalk(3)

  useKeyPress((e) => {
    const direction = e.key.replace('Arrow', '').toLowerCase();
    walk(direction)
    e.preventDefault();
  });

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
