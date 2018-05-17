import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import timingMiddleware from './timingMiddleware';
import Calculate from './Calculate';

const countActionsMiddleware = () => {
  let counter = 0;

  return store => next => action => {
    action.count = counter++;
    return next(action);
  };
};

const loggingMiddleware = prefix => store => next => action => {
  console.log(action.count, prefix, action);
  return next(action);
};

const store = createStore(
  combineReducers(reducer),
  composeWithDevTools(
    applyMiddleware(
      countActionsMiddleware(),
      loggingMiddleware('1️⃣'),
      timingMiddleware,
      loggingMiddleware('2️⃣'),
      thunk,
      loggingMiddleware('3️⃣')
    )
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Calculate />
      </Provider>
    );
  }
}

export default App;
