import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from 'pages/Main';

import store from 'store';

import 'styles/global.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
