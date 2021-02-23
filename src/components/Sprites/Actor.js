import React, { Component } from 'react';
import Sprite from '../../components/Sprites/Sprite';

class Actor extends Component {
  render() {
    const { image, data, step, direction } = this.props;
    const { width, height } = data;
    return (
      <Sprite
        image={image}
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
