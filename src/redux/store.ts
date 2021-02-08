import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import {save} from 'redux-localstorage-simple';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof (window as any) === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState: any) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware, save({namespace: 'post-list'})))
  );

const store = configureStore({});

export default store;
