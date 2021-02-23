import React, { Component } from 'react';
import Actor from './Actor';

class Player extends Component {
  render() {
    const { image, data, column, row } = this.props;
    return (
      <Actor image={image} data={data} column={column} row={row}></Actor>
    )
  }
}

export default Player;
