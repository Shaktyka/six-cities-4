import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

import {RENT_AMOUNT, RENT_TITLES} from './consts.js';

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      rentAmount={RENT_AMOUNT}
      rentTitles={RENT_TITLES}
    />,
    root
);
