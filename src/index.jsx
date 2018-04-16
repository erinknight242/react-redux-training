import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'material-design-lite/material.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import StaticDashboard from './components/StaticDashboard';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <StaticDashboard />
  </Provider>,
  document.getElementById('react-app'),
);
