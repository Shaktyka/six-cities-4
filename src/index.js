import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

import {places} from './mocks.js';
// console.log(places[0]);

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      places={places}
    />,
    root
);
