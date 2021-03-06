import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Countries from './Countries';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import CountrySearch from './CountrySearch';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/countries" component={Countries} />
          <Route component={NotFound} />
          <Route component={CountrySearch} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
