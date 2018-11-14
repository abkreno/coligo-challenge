import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainLayout from './layouts/MainLayout';
import { requireAuth } from './requireAuth';
import connectAuth from './connectAuth';
import Dashboard from './pages/Dashboard';

export default () => (
  <Route path="*" component={connectAuth(MainLayout)}>
    <IndexRoute component={requireAuth(<Dashboard />)} />
  </Route>
);
