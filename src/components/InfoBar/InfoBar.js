import React from 'react';
import withGame from '../../hoc/with-game';
import './styles.scss';

const infoBar = (props) => (
  <div className="current-level-and-stage">
    {props.game.userLocation()}
  </div>
);

export default withGame(infoBar);
