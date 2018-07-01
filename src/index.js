import React, { Component }  from 'react';
import Expo from 'expo';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import AppContainer from './components/AppContainer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(loggerMiddleware)
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(App);
