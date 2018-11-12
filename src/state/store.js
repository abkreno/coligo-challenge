import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './ducks'; // import all reducers from ducks/index.js

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });
  const composeEnhancers =
  /* eslint-disable no-underscore-dangle */
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}
