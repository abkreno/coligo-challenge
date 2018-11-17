import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import configureStore from './state/store';
import getRoutes from './routes';
import './styles/main.scss';

library.add(fab, faHome);

const reduxStore = configureStore(window.REDUX_INITIAL_STATE);

const history = syncHistoryWithStore(browserHistory, reduxStore);

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <Router history={history}>
      {getRoutes(reduxStore)}
    </Router>
  </ReduxProvider>,
  document.getElementById('app'),
);
