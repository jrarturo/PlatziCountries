import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Countries from './Countries';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/countries" component={Countries} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
