import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import Countries from './Countries';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/countries" component={Countries} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
