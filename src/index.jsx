import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-lite/material.css';
import './style.css';
import StaticDashboard from './components/StaticDashboard';

// Static data
const testData = {
  welcomeMsg: {
    title: 'Welcome to the Sample Dashboard',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.',
    imgUrl: 'http://icdn8.digitaltrends.com/image/funny-grumpy-cat-images-hd-wallpaper-1080x611-640x0.jpg',
  },
  cards: [
    { id: 1, title: 'Foo', msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus vitae velit a congue.', imgUrl: 'https://picsum.photos/500/300' },
    { id: 2, title: 'Bar', msg: 'Etiam pretium a elit in varius. Ut vel est accumsan, interdum erat sit amet, lacinia risus.', imgUrl: 'https://picsum.photos/500/300/?random' },
  ],
};

ReactDOM.render(
  <StaticDashboard {...testData} />,
  document.getElementById('react-app'),
);
