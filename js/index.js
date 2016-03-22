import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
require('../css/app.css')

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
