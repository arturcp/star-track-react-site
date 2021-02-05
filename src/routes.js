import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home';
import About from './pages/about/about';
import Ranking from './pages/ranking/ranking';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/ranking" component={Ranking} />
    </Switch>
  </BrowserRouter>
);


export default Routes;
