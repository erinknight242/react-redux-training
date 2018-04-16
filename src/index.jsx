import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App';

/* Using JSX */
ReactDOM.render(
  <App />,
  document.getElementById('react-app'),
);

/* Without JSX syntax:
  ReactDOM.render(
    React.createElement('h1', null, 'Hello, React!'),
    document.getElementById('react-app'),
  );
*/
