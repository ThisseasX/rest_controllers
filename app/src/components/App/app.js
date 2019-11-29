import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '/components/Home';
import Search from '/components/Search';
import Insert from '/components/Insert';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={'/search'} component={Search} />
      <Route exact path={'/insert'} component={Insert} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default App;
