import React, { Component } from 'react';

class Sprite extends Component {
  render() {
    const { data, image, position } = this.props;
    const { x, y, width, height } = data;

    return(
      <div
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no repeat',
          backgroundPosition: `-${x}px -${y}px`,
        }}
      >
      </div>
    );
  }
}

export default Sprite;
