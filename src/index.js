import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const RENT_AMOUNT = 400;

ReactDOM.render(
    <App rentAmount={RENT_AMOUNT} />,
    document.querySelector(`#root`)
);
