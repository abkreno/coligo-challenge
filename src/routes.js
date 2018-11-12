import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export default (store) => {
  const requireAuth = (nextState, replaceState) => {
    const state = store.getState();

    if (!state.isAuthenticated) {
      // Not authenticated, redirect to home
      replaceState({ nextPathname: nextState.location.pathname }, '/');
    }
  };

  return (
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  );
};
