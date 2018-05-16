import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import Calculate from './Calculate';

const store = createStore(
  combineReducers(reducer),
  composeWithDevTools(applyMiddleware(thunk))
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
