import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import timingMiddleware from './middleware/timingMiddleware';
import loggingMiddleware from './middleware/loggingMiddleware';
import actionCountingMiddleware from './middleware/actionCountingMiddleware';

import Calculate from './Calculate';

const store = createStore(
  combineReducers(reducer),
  composeWithDevTools(
    applyMiddleware(
      actionCountingMiddleware,
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
