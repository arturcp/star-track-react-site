import React, { Component } from 'react';
import Routes from './routes';
import GameContext from './context/game-context';
import Game from './domains/game';

class App extends Component {
  constructor(props) {
    super(props);
    const game = new Game({}, this.updateGame);
    this.state = { game };
  }

  updateGame = (game) => {
    this.setState({ game });
  };

  render() {
    const { game } = this.state;
    return (
      <GameContext.Provider value={game}>
        <div className="App">
          <Routes />
        </div>
      </GameContext.Provider>
    );
  }
}

export default App;
