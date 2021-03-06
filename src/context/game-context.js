import React from 'react';
import Game from '../domains/game';

const gameContext = React.createContext(new Game());

export default gameContext;
