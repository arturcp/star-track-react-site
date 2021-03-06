import React, { Component } from 'react';
import Routes from './routes.js'
import GameContext from './context/game-context';
import Game from './domains/game.js';

class App extends Component {
  constructor(props) {
    super(props)
    const game = new Game({}, this.updateGame);
    this.state = {
      game: game
    }
  }

  updateGame = (game) => {
    this.setState({ game: game })
  }

  render() {
    return (
      <GameContext.Provider value={this.state.game}>
        <div className="App">
          <Routes />
        </div>
      </GameContext.Provider>
    );
  }
}

export default App;
