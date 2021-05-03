import React, { Component } from 'react';
import { createStore } from 'redux';
import Routes from './routes';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
// import GameContext from './context/game-context';
// import Game from './domains/game';

import './App.scss';

const store = createStore(reducer);

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // eslint-disable-next-line react/state-in-constructor
  //   // this.state = { game: new Game({}, this.updateGame) };
  // }

  // updateGame = (game) => {
  //   this.setState({ game });
  // };

  render() {
    // const { game } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
