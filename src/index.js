import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const RENT_AMOUNT = 400;

const RENT_TITLES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`
];

ReactDOM.render(
    <App
      rentAmount={RENT_AMOUNT}
      rentTitles={RENT_TITLES}
    />,
    document.querySelector(`#root`)
);
