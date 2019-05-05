import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import DevTools from './DevTools';
import {getCountries} from './actions/countries';
ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Initialize project</h1>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'));

  store.dispatch(getCountries());