import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {save} from 'redux-localstorage-simple';
import {postsMiddleware} from './postsMiddleware';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const configureStore = (preloadedState) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(postsMiddleware, save({namespace: 'post-list'})))
  );

const store = configureStore({});

export default store;
