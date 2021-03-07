import React, { Component } from 'react';
import Routes from './routes';
import GameContext from './context/game-context';
import Game from './domains/game';

class App extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = { game: new Game({}, this.updateGame) };
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
