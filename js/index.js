import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// import 'todomvc-app-css/index.css';

import { Provider } from 'react-redux';
import configreStore from './store/configreStore';

const store = configreStore();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
