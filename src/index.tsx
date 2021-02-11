import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';

import {Posts} from './containers/pages/Posts';
import {Post} from './containers/pages/Post';
import {Login} from './containers/pages/Login';
import {Works} from './containers/pages/Works';
import {Gists} from './containers/pages/Gists';
import {About} from './containers/pages/About';

import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/login" component={Login} />
            <Route path="/posts" component={Posts} />
            <Route exact path="/posts/:id" component={Post} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/gists" component={Gists} />
          </Switch>
        </App>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
