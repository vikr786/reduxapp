import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Menu from './Menu';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
