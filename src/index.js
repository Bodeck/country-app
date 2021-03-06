import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
// import DevTools from './DevTools';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './country.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root'));