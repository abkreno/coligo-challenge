import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainLayout from './layouts/MainLayout';
import { requireAuth } from './containers/RequireAuth';
import Dashboard from './pages/Dashboard';

export default () => (
  <Route path="*" component={MainLayout}>
    <IndexRoute component={requireAuth(<Dashboard />)} />
  </Route>
);
