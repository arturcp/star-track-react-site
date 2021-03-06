/* eslint-disable react/prefer-stateless-function */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import GameContext from '../context/game-context';

/*
  This High Order Component adds a `game` prop
  to another component. The game is an object that reads
  data from the context and offers not only game-related
  attributes, but also functions to manipulate the game,
  like changing the stage, the level, etc. To know more
  about the game object, check `src/domains/game.js`.

  Usage:

  When exporting the component, wrap it with `withGame`. As
  an example, take a look at the last line of
  `src/pages/tutorial/tutorial.js`
*/
const withGame = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <GameContext.Consumer>
          {(context) => {
            return <WrappedComponent game={context} {...this.props} />;
          }}
        </GameContext.Consumer>
      );
    }
  };
};

export default withGame;
