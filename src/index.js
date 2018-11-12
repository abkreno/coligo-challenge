import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './state/store';
import MainLayout from './layouts/MainLayout';

const reduxStore = configureStore(window.REDUX_INITIAL_STATE);

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <MainLayout />
  </ReduxProvider>,
  document.getElementById('app'),
);
