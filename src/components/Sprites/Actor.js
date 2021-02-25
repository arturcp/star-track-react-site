import React, { Component } from 'react';
import Sprite from '../../components/Sprites/Sprite';

class Actor extends Component {
  render() {
    const { image, data, step, direction, position } = this.props;
    const { width, height } = data;
    return (
      <Sprite
        image={image}
        position={position}
        data={{
          x: step * width,
          y: direction * height,
          width,
          height
        }}
      >

      </Sprite>
    );
  }
};

export default Actor;
