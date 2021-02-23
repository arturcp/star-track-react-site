import React, { Component } from 'react';
import Sprite from '../../components/Sprites/Sprite';

class Actor extends Component {
  render() {
    const { image, data, column, row } = this.props;
    const { width, height } = data;
    return (
      <Sprite
        image={image}
        data={{
          x: column * width,
          y: row * height,
          width,
          height
        }}
      >

      </Sprite>
    );
  }
};

export default Actor;
