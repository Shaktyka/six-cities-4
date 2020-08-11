import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

import {RENT_AMOUNT} from './consts.js';
import {places} from './mocks.js';
console.log(places);

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      rentAmount={RENT_AMOUNT}
      places={places}
    />,
    root
);
