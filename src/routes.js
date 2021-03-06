import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home';
import About from './pages/about/about';
import Ranking from './pages/ranking/ranking';
import Tutorial from './pages/tutorial/tutorial';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/tutorial" component={Tutorial} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
